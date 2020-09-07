import Koa from 'koa';
import { loadApp } from './loaders';

const PORT = 3000;

const startServer = () => {
  const app = new Koa();

  loadApp({ app });

  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
};

startServer();
