import { Controller, Get, Req } from '@nestjs/common';

@Controller('states')
export class StatesController {
    @Get('/')
    getIndex(@Req() request: Request): string {
        return `states`;
    }
}
