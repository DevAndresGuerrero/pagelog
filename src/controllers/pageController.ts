import { Request, Response } from 'express';

class PageController {
  public index (req: Request, res: Response) {
    res.render('pages/index', { title: 'Welcome to Book App' });
  }

  public create (req: Request, res: Response) {
    res.render('pages/add', { title: 'Add Page' });
  }
}

export const pageController = new PageController();