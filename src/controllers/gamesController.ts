import { Request, Response } from 'express';
import pool from '../database';

class GamesController {

    public async list(req: Request, resp: Response)  {
        const games = await pool.query("SELECT * FROM games");
        resp.json(games);
    }

    public async getOne(req: Request, resp: Response) : Promise<any> {
        //resp.json({text: 'this is the game ' + req.params.id});
        const { id } = req.params;
        const games = await pool.query("SELECT * FROM games WHERE id = ?", [id]);
        if(games.length > 0) {
            return resp.json(games[0]);
        }
        resp.status(404).json({text: "El juego no existe!"});
    }

    public create(req: Request, resp: Response) {
        pool.query("INSERT INTO GAMES SET ?", [req.body]);
        resp.json({message: 'Game saved'});
    }
    
    public async update(req: Request, resp: Response): Promise<void> {
        const { id } = req.params;
        await pool.query("update games SET ? where id = ?", [req.body, id]);
        resp.json({message: 'The Game was updated'});
    }

    public async delete(req: Request, resp: Response): Promise<void> {
        const { id } = req.params;
        await pool.query("delete from GAMES where id = ?", [id]);
        resp.json({message: 'The game was deleted'});
    }

}

const gamesController = new GamesController();
export default gamesController;