import { Controller, Get, Post, Put, Delete, Body, Param, UseGuards } from '@nestjs/common';
import { ContactsService } from './contacts.service';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import { Contact } from '@prisma/client';
import { ApiTags, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@ApiTags('contacts')
@ApiBearerAuth()
@Controller('contacts')
@UseGuards(JwtAuthGuard)
export class ContactsController {
  constructor(private readonly contactsService: ContactsService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth() // Indica que a rota usa autenticação via Bearer token
  @ApiResponse({ status: 201, description: 'Contato criado com sucesso.' })
  async create(@Body() createContactDto: CreateContactDto): Promise<Contact> {
    return this.contactsService.createContact(createContactDto);
  }  

  @Get()
  @ApiResponse({ status: 200, description: 'Lista de contatos retornada.' })
  async findAll(): Promise<Contact[]> {
    return this.contactsService.findAll();
  }

  @Get(':id')
  @ApiResponse({ status: 200, description: 'Contato encontrado.' })
  async findOne(@Param('id') id: string): Promise<Contact> {
    return this.contactsService.findById(+id);
  }

  @Put(':id')
  @ApiResponse({ status: 200, description: 'Contato atualizado com sucesso.' })
  async update(@Param('id') id: string, @Body() updateContactDto: UpdateContactDto): Promise<Contact> {
    return this.contactsService.updateContact(+id, updateContactDto);
  }

  @Delete(':id')
  @ApiResponse({ status: 200, description: 'Contato excluído com sucesso.' })
  async remove(@Param('id') id: string): Promise<Contact> {
    return this.contactsService.deleteContact(+id);
  }
}
