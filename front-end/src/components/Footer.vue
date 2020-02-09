<template>
  <v-footer height="50px" color="primary">
    <span class="text-center align-self-end white--text copyright">{{ new Date().getFullYear() }} — <strong>Trade Shop</strong></span>
  </v-footer>
</template>
<script>
export default {
  name: "Footer"
};
</script>

<style scoped xml:lang="scss">
  @import "../styles/footer.scss";
</style>
