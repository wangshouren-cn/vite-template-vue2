import { createVuePlugin } from "vite-plugin-vue2";

export default {
  plugins: [createVuePlugin()],
  resolve: {
    extensions: [".js", ".json", ".vue"],
  },
};
