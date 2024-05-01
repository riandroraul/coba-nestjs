import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'books' })
export class Books {
  @PrimaryGeneratedColumn('uuid')
  book_id: string;

  @Column({ length: 200 })
  title: string;

  @Column()
  year: number;

  @Column({ length: 100 })
  publisher: string;

  @Column({ length: 100 })
  author: string;

  @Column({ length: 50 })
  location: string;
}
