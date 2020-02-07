<template>
  <v-bottom-sheet v-model="menuIsOpen" fullscreen>
    <div style="height: 100%; background-color: #ffffff">
      <v-list>
        <v-subheader style="height: 90px; padding-right: 20px">
          <v-spacer></v-spacer>
          <v-icon @click="closeMenu()" size="52" class="icon-close">mdi-close</v-icon>
        </v-subheader>
        <v-list-item v-for="item in menu" :key="item.title">
          <v-list-item-title class="menu-title">{{ item.title }}</v-list-item-title>
        </v-list-item>
        <v-list-item>
          <v-list-item-title class="menu-title">Đăng xuất</v-list-item-title>
        </v-list-item>
      </v-list>
    </div>
  </v-bottom-sheet>
</template>

<script>
import ToolBar from "@/components/ToolBar";

export default {
  name: "BottomSheet",
  extends: ToolBar,
  methods: {
    closeMenu(){
      this.$MenuService.closeMenu();
    }
  }
};
</script>

<style scoped lang="scss">
  @import "../styles/toolbar";
</style>
