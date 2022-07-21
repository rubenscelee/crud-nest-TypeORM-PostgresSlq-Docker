import { Body, Controller, Delete, Get, OnModuleInit, Param, Patch, Post, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './entities/user.entity';
import { ApiBody } from '@nestjs/swagger';
import { UserDto } from './dtos/user.dto';
 

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}


  @Get()
  async GetUsers(): Promise<User[]> {
    return await this.usersService.findAll();
  }

  @Get(':id')
  async getUser(@Param('id') id: number ) {
    return await this.usersService.findOne(id);
  }

  @Post()
  @ApiBody({ type: UserDto})
  async create(@Body() user: UserDto): Promise<User> {
    return await this.usersService.create(user);
  } 

  @Delete(':id')
  async removeUser(@Param('id') id: number){
    return await this.usersService.removeUser(id);
  }  

}
