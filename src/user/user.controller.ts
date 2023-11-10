import { Body, Controller, Get, Post, ValidationPipe } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './utils/create-user.dto';

@Controller('user')
export class UserController {
    constructor(private userService: UserService) { }

    @Post('/create')
    async create(@Body(new ValidationPipe) user: CreateUserDto) {
        return this.userService.create(user);
    }

    @Get('/list')
    async findAll() {
        return this.userService.findAll();
    }



}
