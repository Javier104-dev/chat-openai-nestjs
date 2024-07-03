import { Body, Controller, Post } from '@nestjs/common';
import { CreateChatCompletionRequestDto } from './dto/create-chat-completion-request.dto';

@Controller('api/v1/openai')
export class OpenaiController {
  @Post('chat-completion')
  async createChatCompletion(@Body() dto: CreateChatCompletionRequestDto) {
    
  }
}
