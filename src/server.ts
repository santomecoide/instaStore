import express from "express";
import { StoreMockRepository } from "./infrastructure/store-mock.repository";
import { StoreController } from "./infrastructure/store.controller";
import { FetchClosestStoreService } from "./aplication/fetch-closest-store.service";
import { loggerMiddleware } from "./infrastructure/logger.middleware";

const PORT = process.env.PORT ?? 3000;
const VERSION = process.env.VERSION ?? 'v1'

const app = express();
const router = express.Router()

const storeMockRepository = new StoreMockRepository();
const fetchClosestService = new FetchClosestStoreService(storeMockRepository);
const storeController = new StoreController(fetchClosestService);

router.get('/store/closest', (req: express.Request, res: express.Response) => storeController.fetchClosestStore(req, res));

app.use(loggerMiddleware);
app.use(`/api/${VERSION}`, router);
app.get('*', (req, res) => { res.status(404).send('not found') });
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});