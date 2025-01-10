import { LLMService } from "./services/LLMService";
import { TwitterService } from "./services/TwitterService";
import { WalletService } from "./services/WalletService";
import { AgentState, Tweet, Conversation } from "./types";
import { logger } from "./utils/logger";
import * as fs from 'fs';
import * as path from 'path';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

class AutonomousAgent {
  private config = {
    twitter: {
      apiKey: process.env.TWITTER_API_KEY || '',
      apiSecret: process.env.TWITTER_API_SECRET || '',
      accessToken: process.env.TWITTER_ACCESS_TOKEN || '',
      accessTokenSecret: process.env.TWITTER_ACCESS_TOKEN_SECRET || '',
    },
    llm: {
      apiKey: process.env.LLM_API_KEY || '',
      model: process.env.LLM_MODEL || 'gpt-3',
      maxTokens: Number(process.env.LLM_MAX_TOKENS) || 150,
    },
    wallet: {
      privateKey: process.env.WALLET_PRIVATE_KEY || '',
      rpcUrl: process.env.SOLANA_RPC_URL || 'https://api.solana.com',
      solanaPrivateKey: process.env.SOLANA_PRIVATE_KEY || '',
      solanaRpcUrl: process.env.SOLANA_RPC_URL || 'https://api.solana.com',
    },
  };

  private twitter: TwitterService;
  private llm: LLMService;
  private wallet: WalletService;
  private state: AgentState = {
    conversations: new Map(),
    userInteractions: new Map(),
    lastCheckedMentionId: undefined,
  };

  constructor() {
    // Initialize services with config loaded from environment variables
    this.twitter = new TwitterService(
      this.config.twitter.apiKey,
      this.config.twitter.apiSecret,
      this.config.twitter.accessToken,
      this.config.twitter.accessTokenSecret
    );

    this.llm = new LLMService(
      this.config.llm.apiKey,
      this.config.llm.model,
      this.config.llm.maxTokens
    );

    this.wallet = new WalletService(
      this.config.wallet.privateKey,
      this.config.wallet.rpcUrl,
      this.config.wallet.solanaPrivateKey,
      this.config.wallet.solanaRpcUrl
    );

    // Load previous state if available
    this.loadState();
  }

  private async processMention(tweet: Tweet): Promise<void> {
    try {
      logger.info(`Processing mention: ${tweet.id}`);

      // Get or create conversation
      let conversation = this.state.conversations.get(tweet.conversationId || tweet.id);
      if (!conversation) {
        conversation = {
          id: tweet.conversationId || tweet.id,
          tweets: [],
          participants: [],
          context: [],
          lastInteraction: new Date(),
          conversationType: 'public', // Added missing field
        };
        this.state.conversations.set(conversation.id, conversation);
      }

      // Update conversation
      conversation.tweets.push(tweet);
      conversation.lastInteraction = new Date();

      // Get user interaction data
      const userInteraction = this.state.userInteractions.get(tweet.authorId) || {
        userId: tweet.authorId,
        lastInteraction: new Date(),
        interactionCount: 0,
        transactions: [],
      };
      userInteraction.interactionCount++;
      userInteraction.lastInteraction = new Date();
      this.state.userInteractions.set(tweet.authorId, userInteraction);

      // Generate context for LLM
      const context = conversation.tweets.map(t => t.text);

      // Generate reply
      const reply = await this.llm.generateReply(
        tweet.text,
        context,
        'You are a helpful AI assistant on Twitter.'
      );

      // Send reply
      await this.twitter.replyToTweet(reply, tweet.id);
      logger.info(`Replied to tweet: ${tweet.id}`);

      // Save state after processing
      this.saveState();
    } catch (error) {
      logger.error('Error processing mention:', error);
      throw error;
    }
  }

  private saveState(): void {
    try {
      const stateFilePath = path.join(__dirname, 'state.json');
      fs.writeFileSync(stateFilePath, JSON.stringify(this.state, null, 2));
      logger.info('State saved successfully.');
    } catch (error) {
      logger.error('Error saving state:', error);
    }
  }

  private loadState(): void {
    try {
      const stateFilePath = path.join(__dirname, 'state.json');
      if (fs.existsSync(stateFilePath)) {
        const data = fs.readFileSync(stateFilePath, 'utf8');
        this.state = JSON.parse(data);
        logger.info('State loaded successfully.');
      }
    } catch (error) {
      logger.error('Error loading state:', error);
    }
  }

  async start(): Promise<void> {
    logger.info('Starting Autonomous AI Agent');

    while (true) {
      try {
        // Check mentions
        const mentions = await this.twitter.getMentions(this.state.lastCheckedMentionId);

        for (const mention of mentions) {
          await this.processMention(mention);
          this.state.lastCheckedMentionId = mention.id.toString(); // Convert number to string
        }

        // Wait before next check
        await new Promise(resolve => setTimeout(resolve, 60000)); // 1 minute delay
      } catch (error) {
        logger.error('Error in main loop:', error);

        // Wait before retrying
        await new Promise(resolve => setTimeout(resolve, 300000)); // 5 minutes delay on error
      }
    }
  }
}

// Start the agent
const agent = new AutonomousAgent();
agent.start().catch(error => {
  logger.error('Fatal error:', error);
  process.exit(1);
});
