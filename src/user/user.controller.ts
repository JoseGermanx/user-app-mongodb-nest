import { Body, Controller, Get, Post, ValidationPipe } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './utils/create-user.dto';

@Controller('user')
export class UserController {
    constructor(private userService: UserService) { }

    @Post()
    async create(@Body(new ValidationPipe) user: CreateUserDto) {
        return this.userService.create(user);
    }

    @Get()
    async findAll() {
        return this.userService.findAll();
    }



}
