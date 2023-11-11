import { Body, Controller, Get, Param, Post, Put, ValidationPipe } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './utils/create-user.dto';
import { UpdateUserDto } from './utils/update-user.dto';

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
    
    @Put('/update/:id')
    async update(@Param('id') id: string, @Body(new ValidationPipe()) user: UpdateUserDto) {
        return this.userService.update(id, user);
    }

}
