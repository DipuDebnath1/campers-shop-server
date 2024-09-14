import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import globalErrorHandler from './midlewere/globalErrorHandler';
import notFoundRoute from './midlewere/notFoundRoute';
import router from './app/modules/route';
const app: Application = express();

// parser
app.use(cors({origin:'*', credentials:false}));
app.use(express.json());

app.use('/api', router);

const getController = (req: Request, res: Response) => {
  res.send('Welcome Campers Shop Server');
};
app.get('/', getController);

app.use(globalErrorHandler);
app.use(notFoundRoute);

export default app;
