import rx = require('rxjs');
import { Demo } from './demo';

// Demo.consoleApp();

var source = rx.range(0, 3);
var subscription = source.subscribe(it => {
    console.log(it)
});