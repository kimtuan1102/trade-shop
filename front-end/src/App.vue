<template>
  <v-app>
    <ToolBar></ToolBar>
    <v-content>
      <router-view />
    </v-content>
    <BottomSheet/>
    <Footer></Footer>
  </v-app>
</template>

<script>
import ToolBar from "@/components/ToolBar";
import BottomSheet from "@/components/BottomSheet";
import Footer from "@/components/Footer";

export default {
  name: "App",
  components: {
    Footer,
    BottomSheet,
    ToolBar
  },
  data: () => ({
  })
};
</script>
