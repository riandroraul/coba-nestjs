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
    return this.books.filter((book) => book.id === id);
  }

  updateBook(id: string, title: string, author: string, category: string) {
    let book = this.books.filter((book) => book.id === id);
    (book[0].title = title),
      (book[0].author = author),
      (book[0].category = category);
  }
}
