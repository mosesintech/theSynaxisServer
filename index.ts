import server, { port } from './server';

server.listen(port, () => {
    console.log('server on')
});