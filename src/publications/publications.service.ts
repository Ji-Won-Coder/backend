import { Injectable } from '@nestjs/common';
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

    const publicacion=this.publicationRepository.create(publicacion)
    await this.publicationRepository.save(Publication)
    return publicacion;
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
