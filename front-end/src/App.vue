<template>
  <v-app>
    <ToolBar></ToolBar>
    <v-content>
      <router-view />
      <BottomSheet/>
    </v-content>
  </v-app>
</template>

<script>
import ToolBar from "@/components/ToolBar";
import BottomSheet from "@/components/BottomSheet";

export default {
  name: "App",
  components: {
    BottomSheet,
    ToolBar
  },
  data: () => ({
  })
};
</script>
