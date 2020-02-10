<template>
  <v-card class="my-2 mx-2" :max-width="maxWidth" :to="to">
    <v-img :height="imgHeight" :src="itemImg"> </v-img>
    <v-card-title>{{ itemName }}</v-card-title>
    <v-card-text>
      <v-row align="center" class="mx-0">
        <v-rating
          :value="rateValue"
          color="amber"
          dense
          half-increments
          readonly
          size="14"
        ></v-rating>

        <div class="grey--text ml-4">{{ rateValue }} ({{ rateTotal }})</div>
      </v-row>

      <div class="my-4 price-text">{{ itemPrice }} USD</div>
      <div>
        {{ itemDescription }}
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "Item",
  props: {
    imgHeight: {
      type: String,
      default: "250"
    },
    maxWidth: {
      type: String,
      default: "200"
    },
    itemName: {
      type: String,
      default: ""
    },
    itemImg: {
      type: String,
      default: "https://cdn.vuetifyjs.com/images/cards/cooking.png"
    },
    itemDescription: {
      type: String,
      default: ""
    },
    itemPrice: {
      type: String,
      default: "10"
    },
    rateValue: {
      type: Number,
      default: 1
    },
    rateTotal: {
      type: String,
      default: "1"
    },
    to: {
      type: String,
      default: null
    }
  }
};
</script>

<style scoped lang="scss">
@import "../styles/item";
</style>
