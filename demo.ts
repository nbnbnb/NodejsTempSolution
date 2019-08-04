import http = require('http');
import rx = require('rxjs');

export class Demo {
    static httpServer() {
        const hostname = '127.0.0.1';
        const port = 3000;
        const server = http.createServer((req, res) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text-plant');
            res.end('Hello Wrold!\n');
        });

        server.listen(port, hostname, () => {
            console.log(`Server running at http://${hostname}:${port}/`);
        });
    }

    static consoleApp() {
        console.log('');
    }
}