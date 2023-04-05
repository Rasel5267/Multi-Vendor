import express, { Application } from "express";
import cors from 'cors';

export default async(app: Application) => {
	app.use(express.json());
	app.use(cors({credentials: true, origin: 'http://localhost:3000'}));
	app.use(express.urlencoded({ extended: true }));
	return app;
}