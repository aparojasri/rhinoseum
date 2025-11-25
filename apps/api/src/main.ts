// apps/api/src/main.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Enable CORS so the Frontend (port 3000) can talk to this API
  app.enableCors();
  
  // Start on port 4000 (to avoid conflict with Next.js on 3000)
  await app.listen(4000);
}
bootstrap();