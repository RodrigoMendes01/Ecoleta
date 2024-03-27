import express from 'express';
import 'dotenv/config';

//ROUTES
import { UserRoutes } from '../../modules/user/http/routes';

const app = express();

app.use(express.json());

app.use(UserRoutes);

app.listen(process.env.PORT, () => {
	console.log(`Server is running at http://localhost:${process.env.PORT} 🚀`);
});