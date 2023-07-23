import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
// ********************************** 路径配置新增 start
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  mode: "development", // 开发模式
  //配置代理,解决跨域问题
  server: {
    host: "0.0.0.0",
    port: 8088,
    hmr: {
      overlay: true,
      port: 8088,
    }, //热更新
    open: true,
    hot: true,
    https: false,
    publicDir: "public",
    logLevel: "info",
    envDir: "/", // 用于加载 .env 文件的目录
    envPrefix: [], // 以 envPrefix 开头的环境变量会通过 import.meta.env 暴露在你的客户端源码中
    strictPort: true, //端口占用时是否直接退出
    base: "./ ", //生产环境路径
    //proxy代理
    proxy: {
      "/api": {
        target: "http://localhost:3001",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
  cors: true, // 配置 CORS
  force: true, // 强制使依赖预构建
  clearScreen: true, // 在重新构建之前清除输出目录

  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  resolve: {
    // ****************** 路径配置新增
    alias: {
      "@": resolve(__dirname, "./src"),
      comps: resolve(__dirname, "./src/components"),
      imgs: resolve(__dirname, "./src/assets/images"),
      api: resolve(__dirname, "./src/api"),
      views: resolve(__dirname, "./src/views"),
      router: resolve(__dirname, "./src/router"),
      store: resolve(__dirname, "./src/store"),
      utils: resolve(__dirname, "./src/utils"),
      styles: resolve(__dirname, "./src/styles"),
      layout: resolve(__dirname, "./src/layout"),
      assets: resolve(__dirname, "./src/assets"),
    }, // ****************** 路径配置新增
  },
  define: {
    //************* vue脚手架下用于定义全局变量
    "process.env": process.env,
  },
  css: {
    preprocessorOptions: {
      //define global scss variable
      scss: {
        additionalData: `@import "styles/mixin.scss";`,
      },
    },
  },
  //  构建
  build: {
    outDir: "dist", //指定打包输出路径
    assetsDir: "assets", //指定静态资源存放路径
    cssCodeSplit: true, //css代码拆分,禁用则所有样式保存在一个css里面
    sourcemap: false, //是否构建source map 文件
    // 生产环境取消 console
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },

    //会打包出 css js 等文件夹 目录显得清晰
    rollupOptions: {
      output: {
        chunkFileNames: "js/[name]-[hash].js",
        entryFileNames: "js/[name]-[hash].js",
        assetFileNames: "[ext]/[name]-[hash].[ext]",
      },
    },
  },
});
