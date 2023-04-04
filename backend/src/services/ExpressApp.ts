import express, { Application, Request, Response, NextFunction } from "express";
import cors from 'cors';

export default async(app: Application) => {
	app.use(express.json());
	app.use(cors({credentials: true, origin: 'http://localhost:3000'}));
	app.use(express.urlencoded({ extended: true }));

	app.get("/", (req: Request, res: Response, next: NextFunction) => { 
		res.send("<h2>It's Working!</h2>"); 
	}); 

	return app;
}