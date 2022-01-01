import { scan, timer } from "rxjs"

export const stream$ = timer(0, 150).pipe(
    scan((arr, v) => (v % 16 < 8 ? [...arr, v].slice(-6) : arr), [] as number[])
)
