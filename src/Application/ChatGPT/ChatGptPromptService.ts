import { Configuration, OpenAIApi } from 'openai';
import 'dotenv/config';

class ChatGptPromptService {
  configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });

  openai = new OpenAIApi(this.configuration);

  public async execute(prompt: string): Promise<string | undefined> {
    const completion = await this.openai.createCompletion({
      model: 'text-davinci-003',
      prompt: prompt,
      temperature: 0.5,
      max_tokens: 100,
    });
    return completion.data.choices[0].text;
  }
}

export default ChatGptPromptService;
