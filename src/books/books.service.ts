import { Injectable } from '@nestjs/common';
import { uuid as uuidv4 } from 'uuidv4';
import { createBookDto } from './DataTransferObject/create-book.dto';
import { updateBookDto } from './DataTransferObject/update-book.dto';

@Injectable()
export class BooksService {
  private books: any = [];

  getAllBooks(): any[] {
    return this.books;
  }

  createBook(createBookDto: createBookDto) {
    const { title, author, category, year } = createBookDto;
    this.books.push({
      id: uuidv4(),
      title,
      author,
      category,
      year,
    });
  }

  findBookById(id: string) {
    return this.books.filter((book) => book.id === id);
  }

  updateBook(id: string, updateBookDto: updateBookDto) {
    const { title, author, category, year } = updateBookDto;
    let book = this.books.filter((book) => book.id === id);
    (book[0].title = title),
      (book[0].author = author),
      (book[0].category = category),
      (book[0].year = year);
  }
}
