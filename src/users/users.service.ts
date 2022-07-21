import { Injectable } from '@nestjs/common';
import { User } from './entities/user.entity';
import { UserDto } from './dtos/user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
 

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

    async create(user : User) : Promise<User> {
      return await this.userRepository.save(user);
    }

    async findAll(): Promise<User[]> {
      return await this.userRepository.find();
    }
  
    async findOne(id: number): Promise<User> {
      return await this.userRepository.findOne({ 
        where: {
          id,
        }
       });
    }

    async removeUser(id: number ): Promise<void> {
      await this.userRepository.delete(id);
    }  

 
}
