'use strict';

import * as express from 'express';
import router from './router';

const app: express.Express = express();

app.use(express.static('public'));

router(app);

app.listen(3000);