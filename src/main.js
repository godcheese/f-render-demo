import Vue from "vue";
import App from "./App.vue";

import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import EleForm from "vue-ele-form";
import FRender from "f-render";
import EleFormUploadFile from "vue-ele-form-upload-file";
import EleFormImageUploader from "vue-ele-form-image-uploader";

Vue.use(ElementUI);
Vue.component("upload-file", EleFormUploadFile);
Vue.component("image-uploader", EleFormImageUploader);
Vue.use(EleForm, {
  "upload-file": {
    action: "http://test.com/upload",
    responseFn(response, file) {
      // 根据响应结果, 设置 URL
      return {
        name: file.name,
        url: "http://test.com/download/" + response.path, // 示例而已
        size: file.size
      };
    }
  },
  "image-uploader": {
    // 上传地址
    action: "http://test.com/upload",
    responseFn(response, file) {
      console.log(response);
      console.log(file);
      return "http://test.com/download/" + response.data;
    }
  }
});
Vue.component("f-render", FRender);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App)
}).$mount("#app");
