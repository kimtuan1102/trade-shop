<template>
  <v-container>
    <v-row align="start" justify="center">
      <v-col sm="12" md="3" cols="12">
        <Item max-width="300" class="mx-auto"></Item>
      </v-col>
      <v-col sm="12" md="3" cols="12">
        <v-card flat>
          <v-card-title class="py-0">
            Một sản phẩm gì đó
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12" class="px-0">
                  <span class="price-text">10 USD</span>
                </v-col>
                <v-col cols="12" class="px-0">
                  <span class="description-title">Mô tả</span>
                </v-col>
                <v-col cols="12" class="px-0">
                  <span class="description-text"
                    >Détails d'article. Saisissez ici les caractéristiques de
                    l'article : taille, matière et autres détails utiles. Vous
                    pouvez aussi ajouter ici toute information complémentaire.
                    Cet emplacement est idéal pour expliquer les avantages de
                    cet article à vos clients.</span
                  >
                </v-col>
                <v-col cols="12" class="px-0">
                    <v-btn tile color="primary" dark block>Đặt Mua</v-btn>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col sm="12" md="8" cols="12" class="text-center">
        <v-card flat>
          <v-card-title>Hướng dẫn sử dụng</v-card-title>
          <v-card-text>
            <youtube video-id="BBJa32lCaaY" class="mx-auto" width="100%" />
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Item from "@/components/Item";
export default {
  name: "ProductDetails",
  components: { Item }
};
</script>

<style scoped lang="scss">
@import "../styles/item";
</style>
