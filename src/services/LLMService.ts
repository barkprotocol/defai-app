import axios from 'axios';
import { logger } from '../utils/logger';

export class LLMService {
  private apiKey: string;
  private model: string;
  private maxTokens: number;
  private baseUrl: string;

  constructor(
    apiKey: string,
    model: string = 'claude-2',
    maxTokens: number = 1000,
    baseUrl: string = 'https://api.anthropic.com/v1/messages'
  ) {
    this.apiKey = apiKey;
    this.model = model;
    this.maxTokens = maxTokens;
    this.baseUrl = baseUrl;
  }

  // Generate a reply based on the message and context
  async generateReply(
    message: string,
    context: string[],
    systemPrompt?: string
  ): Promise<string> {
    try {
      const prompt = this.constructPrompt(message, context, systemPrompt);

      const response = await axios.post(
        this.baseUrl,
        {
          model: this.model,
          max_tokens: this.maxTokens,
          messages: [
            {
              role: 'user',
              content: prompt,
            },
          ],
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'x-api-key': this.apiKey,
          },
        }
      );

      // Check if the response contains the expected content structure
      if (response.data && response.data.content && response.data.content[0]) {
        return response.data.content[0].text;
      } else {
        throw new Error('Unexpected API response structure');
      }
    } catch (error) {
      logger.error('Error generating reply:', error);
      throw error;
    }
  }

  // Construct the prompt with context and message
  private constructPrompt(
    message: string,
    context: string[],
    systemPrompt?: string
  ): string {
    let prompt = '';

    if (systemPrompt) {
      prompt += `System: ${systemPrompt}\n\n`;
    }

    if (context.length > 0) {
      prompt += 'Previous conversation:\n';
      prompt += context.join('\n');
      prompt += '\n\n';
    }

    prompt += `Current message: ${message}\n`;
    prompt += 'Please provide a helpful and engaging response.';

    return prompt;
  }

  // Generate a summary for a thread of tweets
  async generateThreadSummary(tweets: string[]): Promise<string> {
    try {
      const prompt = `Please summarize the following conversation thread:\n\n${tweets.join('\n')}`;
      
      const response = await this.generateReply(
        prompt,
        [],
        'You are a helpful AI assistant tasked with summarizing Twitter conversations.'
      );

      return response;
    } catch (error) {
      logger.error('Error generating thread summary:', error);
      throw error;
    }
  }
}
