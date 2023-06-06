import { Injectable } from '@nestjs/common';
import { uuid as uuidv4 } from 'uuidv4';

@Injectable()
export class BooksService {
  private books: any = [];
  getAllBooks(): any[] {
    return this.books;
  }

  createBook(title: string, author: string, category: string) {
    this.books.push({
      id: uuidv4(),
      title,
      author,
      category,
    });
  }

  findBookById(id: string) {
    return this.books.filter((book) =>
      book.id === id ? [book] : 'id not found',
    );
  }
}
