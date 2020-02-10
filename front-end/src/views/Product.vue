<template>
  <v-container>
    <v-row>
      <v-col md="3" sm="12" cols="12">
        <div
          class="text-center filter-bar-btn py-2 hidden-md-and-up"
          v-on:click="openFilterMenu"
        >
          Bộ lọc
        </div>
        <v-card flat class="hidden-sm-and-down">
          <v-card-title class="px-0 filter-bar">
            Bộ Lọc
          </v-card-title>
          <v-divider />
          <v-card-subtitle class="px-0 d-flex">
            <span class="filter-title">MetaTrader 4</span>
          </v-card-subtitle>
          <v-card-text class="px-0">
            <v-list>
              <v-list-item>
                <v-list-item-title class="menu-item">
                  Experts
                </v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-title class="menu-item">
                  Indicator
                </v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-title class="menu-item">
                  Libraries
                </v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-title class="menu-item">
                  Utilites
                </v-list-item-title>
              </v-list-item>
            </v-list>
          </v-card-text>
          <v-card-subtitle class="px-0 d-flex">
            <span class="filter-title">MetaTrader 5</span>
          </v-card-subtitle>
          <v-card-text class="px-0">
            <v-list>
              <v-list-item>
                <v-list-item-title class="menu-item">
                  Experts
                </v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-title class="menu-item">
                  Indicator
                </v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-title class="menu-item">
                  Libraries
                </v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-title class="menu-item">
                  Utilites
                </v-list-item-title>
              </v-list-item>
            </v-list>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col md="9" sm="12" cols="12">
        <v-card flat>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col v-for="i in 15" :key="i">
                  <Item class="mx-auto" to="/product/1" item-name="Một cái gì đó"/>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Item from "@/components/Item";
export default {
  name: "Product",
  components: { Item },
  data() {
    return {
      filterMenu: {}
    };
  },
  methods: {
    openFilterMenu() {
      this.$MenuService.openFilterMenu();
    }
  }
};
</script>

<style scoped lang="scss">
@import "../styles/product";
</style>
