import { Module } from '@nestjs/common';
import { OpenaiController } from './openai.controller';
import { OpenaiService } from './openai.service';
import OpenAI from 'openai';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  controllers: [OpenaiController],
  imports: [ConfigModule],
  providers: [
    OpenaiService,
    {
      provide: OpenAI,
      useFactory: (configureService: ConfigService) =>
        new OpenAI({ apiKey: configureService.getOrThrow('OPENAI_API_KEY') }),
      inject: [ConfigService],
    },
  ],
})
export class OpenaiModule {}
