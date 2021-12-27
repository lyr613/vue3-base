import router from "@/router"
import { ref, defineComponent } from "vue"
import style from "./s.module.less"

/** C的子组件 */
const CDEF = defineComponent({
    name: "c-child",
    props: {
        /** 时间 */
        time: {
            type: Number,
            require: true,
        },
    },

    setup(pp) {
        const dd = pp.time
        console.log(dd, "dd")

        return () => <div>{dd}--</div>
    },
})

/** 组件ccc */
const CCC = defineComponent({
    name: "CC",
    setup() {
        /** c-c-c-c */
        const cc = ref(3)
        return () => (
            <div
                class={style.txt}
                onClick={() => {
                    cc.value++
                }}
            >
                <div>{cc.value}</div>
                <div>
                    <button
                        onClick={() => {
                            router.push("/a")
                        }}
                    >
                        to a
                    </button>
                </div>
                <CDEF time={222} />
            </div>
        )
    },
})

export default CCC
