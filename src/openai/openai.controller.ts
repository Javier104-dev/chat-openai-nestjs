import { Body, Controller, Post } from '@nestjs/common';
import { CreateChatCompletionRequestDto } from './dto/create-chat-completion-request.dto';
import { OpenaiService } from './openai.service';

@Controller('api/v1/openai')
export class OpenaiController {
  constructor(private readonly openaiService: OpenaiService) {}

  @Post('chat-completion')
  async createChatCompletion(@Body() dto: CreateChatCompletionRequestDto) {
    return this.openaiService.createChatCompletion(dto.messages);
  }
}
