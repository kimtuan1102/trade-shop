<template>
  <v-bottom-sheet v-model="menuFilterIsOpen" fullscreen>
    <div style="height: 100%; background-color: #ffffff">
      <v-list>
        <v-subheader style="height: 90px; padding-right: 20px">
          <span class="filter-bar">Bộ lọc</span>
          <v-spacer></v-spacer>
          <v-icon
            @click="closeFilterMenu"
            size="52"
            class="icon-close"
            color="primary"
            >mdi-close</v-icon
          >
        </v-subheader>
        <v-divider></v-divider>
        <v-list v-for="menu in filterMenus" :key="menu.title">
          <v-subheader class="filter-title">{{ menu.title }}</v-subheader>
          <v-list-item v-for="item in menu.menuItems" :key="item.name">
            <v-list-item-title>{{ item.name }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-list>
    </div>
  </v-bottom-sheet>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "FilterMenu",
  data() {
    return {
      filterMenus: [
        {
          title: "MetaTrader 4",
          menuItems: [
            { name: "Experts" },
            { name: "Indicators" },
            { name: "Libraries" },
            { name: "Utilites" }
          ]
        },
        {
          title: "MetaTrader 5",
          menuItems: [
            { name: "Experts" },
            { name: "Indicators" },
            { name: "Libraries" },
            { name: "Utilites" }
          ]
        }
      ]
    };
  },
  computed: mapState(["menuFilterIsOpen"]),
  methods: {
    closeFilterMenu() {
      this.$MenuService.closeFilterMenu();
    }
  }
};
</script>

<style scoped lang="scss">
@import "../styles/product";
</style>
