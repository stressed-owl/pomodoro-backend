import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

const PORT = 8084;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Pomodoro Timer')
    .setDescription('The Pomodoro Timer API description')
    .setVersion('1.0')
    .addTag('pomodoro')
    .build();
    
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app
    .listen(PORT)
    .then(() =>
      console.log(
        `The server is running on ${PORT} port. Everything is working fine.`,
      ),
    );
}
bootstrap();
