import { Controller, Get, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('states')
export class StatesController {
    @Get('/')
    getIndex(@Req() request: Request): string {
        return `states`;
    }
}
