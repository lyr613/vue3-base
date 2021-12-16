import { BehaviorSubject } from "rxjs";

class _c {
    count$ = new BehaviorSubject(0);
    add_one() {
        const v = this.count$.value + 1;
        this.count$.next(v);
    }
}

export const SubjCount = new _c();
