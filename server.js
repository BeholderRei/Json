const jsonServer = require('json-server')
const server = jsonServer.creat();
const rout =jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3200;

server.use(middlewares);
server.user(router);


server.listen(port);