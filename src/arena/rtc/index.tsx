import { ref } from "vue"

export default {
    props: {
        time: Number,
    },
    name: "ccc",
    setup() {
        const cc = ref(3)
        return () => (
            <div
                onClick={() => {
                    cc.value++
                }}
            >
                {cc.value}
            </div>
        )
    },
}
