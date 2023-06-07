import { Body, Controller, Get, Param, Post, Put, Query } from '@nestjs/common';
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

  @Get(':id')
  getBookById(@Param() params: any) {
    return this.BooksService.findBookById(params.id);
  }

  @Post('/create')
  createBook(@Body() data: any) {
    this.BooksService.createBook(data.title, data.author, data.category);
    return 'create success';
  }

  @Put(':id')
  updateBookById(
    @Param('id') id: string,
    @Body('title') title: string,
    @Body('author') author: string,
    @Body('category') category: string,
  ) {
    this.BooksService.updateBook(id, title, author, category);
    return 'Book Updated';
  }
}
