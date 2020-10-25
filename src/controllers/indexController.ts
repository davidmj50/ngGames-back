import { Request, Response } from 'express';

class IndexController {

    index(req: Request, resp: Response)  {
        resp.json({text: 'API is /api/games'});
    }
}

export const indexController = new IndexController();