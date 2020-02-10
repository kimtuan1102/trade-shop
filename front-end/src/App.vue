<template>
  <v-app>
    <ToolBar></ToolBar>
    <v-content>
      <router-view />
    </v-content>
    <ToolBarMenu/>
    <FilterMenu/>
    <Footer></Footer>
  </v-app>
</template>

<script>
import ToolBar from "@/components/ToolBar";
import Footer from "@/components/Footer";
import ToolBarMenu from "@/components/ToolBarMenu";
import FilterMenu from "@/components/FilterMenu";

export default {
  name: "App",
  components: {
    FilterMenu,
    ToolBarMenu,
    Footer,
    ToolBar
  },
  data: () => ({
  })
};
</script>
