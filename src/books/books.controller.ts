import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { BooksService } from './books.service';
import { createBookDto } from './DataTransferObject/create-book.dto';
import { updateBookDto } from './DataTransferObject/update-book.dto';

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
  @UsePipes(ValidationPipe)
  createBook(@Body() payload: createBookDto) {
    this.BooksService.createBook(payload);
    return 'create success';
  }

  @Put(':id')
  updateBookById(@Param('id') id: string, @Body() payload: updateBookDto) {
    this.BooksService.updateBook(id, payload);
    return 'Book Updated';
  }
}
