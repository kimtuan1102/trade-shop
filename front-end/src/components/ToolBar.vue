<template>
  <v-toolbar max-height="108" height="108" flat>
    <v-toolbar-title>
      <v-img :src="image.logo" width="150" height="108" to="/"/>
    </v-toolbar-title>
    <v-spacer />
    <v-icon size="52" v-on:click="openMenu" class="hidden-md-and-up icon-close">mdi-menu</v-icon>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn v-for="item in menu" :key="item.title" text class="menu-title" :to="item.to">
        {{ item.title }}
      </v-btn>
      <span class="align-self-center user-name spacer">Trịnh Kim Tuấn</span>
      <v-avatar size="30" class="align-self-center spacer">
        <v-img :src="image.avatar"></v-img>
      </v-avatar>
      <span class="align-self-center spacer">
        <v-img :src="image.logOut"></v-img>
      </span>
      <span class="align-self-center user-name spacer">Đăng xuất</span>
    </v-toolbar-items>
  </v-toolbar>
</template>
<script>
import {mapState} from "vuex";

export default {
  name: "ToolBar",
  data() {
    return {
      image: {
        logo: require("@/assets/logo.png"),
        avatar: require("@/assets/avatar.png"),
        logOut: require("@/assets/icon/log-out.svg")
      },
      menu: [
        { title: "Trang Chủ", to: "/" },
        { title: "Sản Phẩm", to: "/product" },
        { title: "Tin Tức", to: "/2" },
        { title: "Liên Hệ", to: "/3" }
      ],
      drawer: null
    };
  },
  computed: mapState(['menuIsOpen']),
  methods: {
    openMenu() {
      this.$MenuService.openMenu();
    }
  }
};
</script>

<style scoped lang="scss">
@import "../styles/toolbar";
</style>
