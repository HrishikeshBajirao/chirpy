import express, { type Express, type Request, type Response } from 'express';
import { handlerReadiness } from './handlers/handlerReadiness.js';
import { middlewareLogResponses } from './middlewares/middlewareLogResponses.js';
import { middlewareMetricsInc } from './middlewares/middlewareMetricsInc.js';
import { serverHitsCount } from './handlers/serverHitsCount.js';
import { resetServerHits } from './handlers/resetServerHits.js';
import { validateHandler } from './handlers/validateHandler.js';

const app: Express = express();
const port = 8080;

app.use(express.json());

app.get('/api/healthz', handlerReadiness)

app.post('/api/validate_chirp', validateHandler)

app.get('/admin/metrics', serverHitsCount)

app.post('/admin/reset', resetServerHits)

app.use("/app", middlewareMetricsInc, express.static('./src/app', {setHeaders(res) {res.set("Cache-Control", "no-cache")}}));

app.use(middlewareLogResponses);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})