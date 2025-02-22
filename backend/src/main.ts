// src/main.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    // Swagger setup
    const config = new DocumentBuilder()
        .setTitle('Motorcycle Fleet Management API')
        .setDescription('API documentation for managing motorcycles, drivers, maintenance, incidents, etc.')
        .setVersion('1.0')
        .addTag('motorcycles')
        .addTag('maintenance')
        .addTag('incidents')
        .build();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document);

    await app.listen(3000);
}
bootstrap();