import { TwitterApi } from 'twitter-api-v2';
import { Tweet, User } from '../types';
import { logger } from '../utils/logger';

export class TwitterService {
  private client: TwitterApi;
  private rateLimitDelay: number = 1000; // 1 second delay between requests

  constructor(
    apiKey: string,
    apiSecret: string,
    accessToken: string,
    accessTokenSecret: string
  ) {
    this.client = new TwitterApi({
      appKey: apiKey,
      appSecret: apiSecret,
      accessToken: accessToken,
      accessSecret: accessTokenSecret,
    });
  }

  // Helper method to delay requests to handle rate limiting
  private async delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  // Fetch mentions from Twitter
  async getMentions(sinceId?: string): Promise<Tweet[]> {
    try {
      const mentions = await this.client.v2.mentions({
        since_id: sinceId,
        expansions: ['author_id', 'referenced_tweets'],
        'tweet.fields': ['created_at', 'conversation_id', 'referenced_tweets'],
      });

      await this.delay(this.rateLimitDelay); // rate limiting delay

      return mentions.data.map((tweet: { id: any; text: any; author_id: any; created_at: string | number | Date; conversation_id: any; referenced_tweets: any[]; }) => ({
        id: tweet.id,
        text: tweet.text,
        authorId: tweet.author_id!,
        createdAt: new Date(tweet.created_at!),
        conversationId: tweet.conversation_id,
        referencedTweets: tweet.referenced_tweets?.map(ref => ({
          type: ref.type as 'replied_to' | 'quoted' | 'retweeted',
          id: ref.id,
        })),
      }));
    } catch (error) {
      logger.error('Error fetching mentions:', error);
      throw error; // Propagate the error
    }
  }

  // Reply to a specific tweet
  async replyToTweet(text: string, replyToTweetId: string): Promise<Tweet> {
    try {
      const tweet = await this.client.v2.reply(text, replyToTweetId);
      await this.delay(this.rateLimitDelay); // rate limiting delay

      return {
        id: tweet.data.id,
        text: tweet.data.text,
        authorId: tweet.data.author_id!,
        createdAt: new Date(tweet.data.created_at!),
      };
    } catch (error) {
      logger.error('Error replying to tweet:', error);
      throw error; // Propagate the error
    }
  }

  // Fetch user information by user ID
  async getUserInfo(userId: string): Promise<User> {
    try {
      const user = await this.client.v2.user(userId, {
        'user.fields': ['description', 'public_metrics'],
      });
      await this.delay(this.rateLimitDelay); // rate limiting delay

      return {
        id: user.data.id,
        username: user.data.username,
        name: user.data.name,
        description: user.data.description || '',
        metrics: {
          followersCount: user.data.public_metrics!.followers_count,
          followingCount: user.data.public_metrics!.following_count,
          tweetCount: user.data.public_metrics!.tweet_count,
        },
      };
    } catch (error) {
      logger.error('Error fetching user info:', error);
      throw error; // Propagate the error
    }
  }
}
