import * as dotenv from 'dotenv';
dotenv.config();
import express from "express";
import App from './services/ExpressApp';
import dbConnection from './services/Database';
import { PORT } from './config';

const StartServer = async () => {
	const app = express();

	await dbConnection();

	await App(app);

	// handling uncaught exception
	process.on("uncaughtException", (err) => {
		console.log(`Error: ${err.message}`);
		console.log(`Shutting down the server for handling uncaught exception`);	
	})

	const server = app.listen(PORT || 8000, () => {
		console.clear();
		console.log(`App is listening on port ${PORT}`);
	})

	// unhandled promise rejection
	process.on("unhandledRejection", (err) => {
		console.log(`Shutting down the server for ${err}`);
		console.log(`Shutting down the server for unhandled promise rejection`);

		server.close(() => {
			process.exit(1);
		});
	});
}

StartServer();