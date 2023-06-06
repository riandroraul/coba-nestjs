import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { BooksService } from './books.service';

@Controller('books')
export class BooksController {
  private BooksService: BooksService;
  constructor(BooksService: BooksService) {
    this.BooksService = BooksService;
  }
  @Get()
  getAllBooks() {
    return this.BooksService.getAllBooks();
  }

  @Get('/:id')
  getBookById(@Param() id: string) {
    return this.BooksService.findBookById(id);
  }

  @Post('/create')
  createBook(@Body() data) {
    this.BooksService.createBook(data.title, data.author, data.category);
    return 'create success';
  }
}
