// 导入整个模块
import * as http from 'http';

export class HttpDemo {
    static run() {
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

}