import { Observable } from "rxjs"
import { ref, Ref, onUnmounted } from "vue"

export function useObservable<T>(state$: Observable<T>): Ref<T | null>
export function useObservable<T>(state$: Observable<T>, defau: T): Ref<T>
export function useObservable<T>(
    state$: Observable<T>,
    defau: T | null = null
): Ref<T | null> {
    const a = ref(defau) as Ref<null | T>
    const ob = state$.subscribe((v) => {
        a.value = v
    })
    onUnmounted(() => {
        ob.unsubscribe()
    })
    return a
}
