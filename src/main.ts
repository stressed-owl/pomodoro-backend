import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const PORT = 8084;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app
    .listen(PORT)
    .then(() =>
      console.log(
        `The server is running on ${PORT} port. Everything is working fine.`,
      ),
    );
}
bootstrap();
