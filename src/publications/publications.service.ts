import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreatePublicationDto } from './dto/create-publication.dto';
import { UpdatePublicationDto } from './dto/update-publication.dto';
import { Repository } from 'typeorm';
import { Publication } from './entities/publication.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PublicationsService {
  constructor(
    @InjectRepository (Publication)
     private readonly publicationRepository:Repository<Publication>,
  ){}

  async create(createPublicationDto: CreatePublicationDto) {

    try {
    const publicacion=this.publicationRepository.create(createPublicationDto)
    await this.publicationRepository.save(publicacion);
    return publicacion;

    } catch (error) {
      console.log(error)
      throw new InternalServerErrorException('Ayuda!');
    }
    
  }

  findAll() {
    return `This action returns all publications`;
  }

  findOne(id: number) {
    return `This action returns a #${id} publication`;
  }

  update(id: number, updatePublicationDto: UpdatePublicationDto) {
    return `This action updates a #${id} publication`;
  }

  remove(id: number) {
    return `This action removes a #${id} publication`;
  }
}
