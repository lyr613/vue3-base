import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import vuetsx from "@vitejs/plugin-vue-jsx"
import fs from "fs"
import path from "path"

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vuetsx(), vue()],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "src"),
        },
    },
    server: {
        open: true,
    },
})
