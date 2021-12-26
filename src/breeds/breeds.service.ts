import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose/dist/common/mongoose.decorators';
import { Model } from 'mongoose';
//import { InjectModel } from '@nestjs/mongoose';
//import { Model } from 'mongoose';
import { Breed, BreedDocument } from 'src/schemas/breed.schema';
//import { Breed, BreedDocument } from 'src/schemas/breed.schema';
import { CreateBreedDto } from './dto/create-breed.dto';
import { UpdateBreedDto } from './dto/update-breed.dto';
//import { Breed } from './entities/breed.entity';

@Injectable()
export class BreedsService {
  constructor(@InjectModel(Breed.name) private breedModel: Model<BreedDocument>) {}
  async create(createBreedDto: CreateBreedDto):Promise<Breed> {
    return new this.breedModel(createBreedDto).save();
  }

  async findAll() {
    return  this.breedModel.find();
  }

  async findOne(id: number) {
    return this.breedModel.findOne({id});
  }

  async update(id: number, updateBreedDto: UpdateBreedDto) {
    return this.breedModel.updateOne({id},{$set:{...updateBreedDto}});
  }

 async  remove(id: number) {
    return this.breedModel.deleteOne({id});
  }
}
