/*
import http = require('http');
等价于传统 CommonJS/AMD 中的 export = 语法

The export = syntax specifies a single object that is exported from the module.
This can be a class, interface, namespace, function, or enum.

Node.js -> CommonJS http://wiki.commonjs.org/wiki/CommonJS
require.js -> AMD http://wiki.commonjs.org/wiki/CommonJS
UMD https://github.com/umdjs/umd
System.JS https://github.com/systemjs/systemjs
ECMAScript 2015 native modules (ES6) http://www.ecma-international.org/ecma-262/6.0/#sec-modules

*/

import { Temp } from './temp';
import { RxJSDemo } from './rxjsDemo';
import { HttpDemo } from './httpDemo';

Temp.run();
RxJSDemo.run();
HttpDemo.run()
