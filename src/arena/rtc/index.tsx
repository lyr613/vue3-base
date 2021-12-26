import router from "@/router"
import { ComponentOptions, ref, defineProps } from "vue"
import style from "./s.module.less"

interface prop {
    /** 时间 */
    time: number
}

/** 组件ccc */
const CCC: ComponentOptions<prop> = {
    name: "CC",
    setup(pc: prop) {
        const cc = ref(3)
        const dd = pc.time
        return () => (
            <div
                class={style.txt}
                onClick={() => {
                    cc.value++
                }}
            >
                <div>
                    {cc.value} - {dd}
                </div>
                <div>
                    <button
                        onClick={() => {
                            router.push("/a")
                        }}
                    >
                        to a
                    </button>
                </div>
            </div>
        )
    },
}
export default CCC
