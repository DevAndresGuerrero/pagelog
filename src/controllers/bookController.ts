import { Request, Response } from 'express';
import BookModel, { Book } from '../models/Book';

class BookController {
  public async index (req: Request, res: Response): Promise<void> {
    const books: Book[] = await BookModel.find();
    res.render('books/index', { 
      title: 'Index Books',
      books
    });
  }

  public create (req: Request, res: Response) {
    res.render('books/add', {
      title: 'Add Book'
    });
  }

  public async store (req: Request, res: Response) {
    const { title, author, isbn } = req.body;
    const book: Book = new BookModel({ title, author, isbn });
    await book.save();
    res.redirect('/books');
  }
}

export const bookController = new BookController();