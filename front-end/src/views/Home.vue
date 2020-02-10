<template>
  <div class="d-flex flex-wrap flex-column">
    <div class="flex-grow-1">
      <v-parallax height="800" dark :src="image.banner">
        <v-row align="center" justify="center">
          <v-col class="text-center" cols="12">
            <h1 class="display-1 font-weight-thin mb-4">Autimatic Trade</h1>
            <h4 class="subheading">Sử dụng công cụ Trade BO ngay hôm nay</h4>
          </v-col>
        </v-row>
      </v-parallax>
    </div>
    <div class="flex-grow-1">
      <span>
        <h1 class="align-self-center text-center my-4">Sản Phẩm Nổi Bật</h1>
      </span>
    </div>
    <div class="flex-grow-1">
      <v-sheet class="mx-auto" max-width="1024px" width="100vw">
        <v-slide-group show-arrows center-active>
          <v-slide-item>
            <Item></Item>
          </v-slide-item>
          <v-slide-item>
            <Item></Item>
          </v-slide-item>
          <v-slide-item>
            <Item></Item>
          </v-slide-item>
          <v-slide-item>
            <Item></Item>
          </v-slide-item>
          <v-slide-item>
            <Item></Item>
          </v-slide-item>
          <v-slide-item>
            <Item></Item>
          </v-slide-item>
          <v-slide-item>
            <Item></Item>
          </v-slide-item>
        </v-slide-group>
      </v-sheet>
    </div>
  </div>
</template>
<script>
import Item from "@/components/Item";
export default {
  name: "Home",
  components: {Item},
  data() {
    return {
      image: {
        banner: require("@/assets/banner.png")
      }
    };
  }
};
</script>

<style scoped></style>
