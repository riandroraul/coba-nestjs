import { Body, Controller, Get, Post, Query } from '@nestjs/common';

@Controller('/')
export class BooksController {
  @Get()
  testing() {
    return 'hello world';
  }

  @Post('/create')
  createData(@Body() data: any) {
    console.log(data);
    return data;
  }

  @Get('/query')
  getData(@Query() data: any) {
    console.log(data);
    return data;
  }
}
