import { BehaviorSubject } from "rxjs"

class _c {
    /** 计数 */
    count$ = new BehaviorSubject(0)
    /** ++1 */
    add_one() {
        const v = this.count$.value + 1
        this.count$.next(v)
    }
}

export const SubjCount = new _c()
