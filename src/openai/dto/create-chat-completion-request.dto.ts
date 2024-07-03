export class CreateChatCompletionRequestDto {
  messages: ChatCompletionMessageDto[];
}

export class ChatCompletionMessageDto {
  role: string;
  content: string;
}
