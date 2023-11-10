import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private userService: UserService) { }

    @Post()
    async create(@Body() user: any) {
        return this.userService.create(user);
    }

    @Get()
    async findAll() {
        return this.userService.findAll();
    }



}
