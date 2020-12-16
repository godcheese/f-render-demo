<template>
  <f-render
    @save="handleSave"
    :loading="loading"
    height="calc(100vh - 60px)"
    :config="formConfig"
    :comps="comps"
  />
</template>

<script>
// 默认配置
import comps from "f-render/src/fixtures/comps";
// 组件配置
import uploadFile from "f-render/src/fixtures/extends/upload-file";
import imageUploader from "f-render/src/fixtures/extends/image-uploader";

export default {
  name: "App",
  components: {},
  data() {
    return {
      loading: false,
      formConfig: {},
      // 拼接上即可
      comps: comps.concat(uploadFile, imageUploader),
    };
  },
  methods: {
    handleSave(res) {
      // 这里是保存到 localStorage，你可以保存到服务器
      localStorage.setItem("form-config", res);
      this.$message.success("保存成功啦~");
    },
  },
  mounted() {
    // 模拟异步加载
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
      this.formConfig = localStorage.getItem("form-config") || "";
    }, 1000);
  },
};
</script>

<style>

</style>
