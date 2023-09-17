<script>
import AppCard from "./AppCard.vue";
import {store} from "../data/store"

export default {
  data() {
    return {
      title: "Hello world",
      store
      
    };
  },
  components: {
    AppCard,
  },
};
</script>

<template>
  <div class="container py-2">
    <div class="info p-3 m-1">found {{ store.cards.length }} cards</div>
    <div class="cards-container">
      <AppCard
        v-for="(card, index) in store.cards"
        key="id"
        :name="card.name"
        :archetype="card.archetype"
        :cardImages="card.card_images[0].image_url"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  background-color: #f9f9f9;
  .info {
    background-color: #343434;
    color: #f9f9f9;
    font-weight: 700;
    border-radius: 0.25rem;
  }
  .cards-container {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-wrap: wrap;
  }
}
</style>
