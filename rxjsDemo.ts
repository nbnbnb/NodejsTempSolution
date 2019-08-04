// 导入模块中的部分内容
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

export class RxJSDemo {
    static run() {
        map<number, number>(x => x * x)(of(1, 2, 3)).subscribe(v => console.log(`value: ${v}`));
    }
}

