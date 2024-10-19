import { NestFactory } from '@nestjs/core'; 
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Configuração CORS
  app.enableCors({
    origin: 'http://localhost:3000', // Frontend
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Métodos permitidos
    credentials: true, // Permitir cookies e credenciais
    allowedHeaders: 'Content-Type, Authorization', // Cabeçalhos permitidos
  });

  // Configuração do Swagger
  const config = new DocumentBuilder()
    .setTitle('API de Atendimento WhatsApp e CRM')
    .setDescription('Documentação da API para o sistema de atendimento e CRM')
    .setVersion('1.0')
    .addTag('auth')
    .addTag('users')
    .addBearerAuth() // Adiciona a autenticação Bearer
    .build();
    
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document); // O endpoint será /api

  // Iniciar o servidor na porta 3001
  await app.listen(3001);
}

bootstrap();
