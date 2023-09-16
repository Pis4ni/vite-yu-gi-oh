<script>
import AppCard from "./AppCard.vue";

export default {
  data() {
    return {
      title: "Hello world",
      cards:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
    }
  },
  components: {
    AppCard 
  },
};
</script>

<template>
  <div class="container py-2">
    <div class="info p-3 m-1">
      found 39 cards
    </div>
    <div class="cards-container">
  
      <AppCard v-for="card in cards" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container{
  background-color: #f9f9f9;
  .info{
    background-color: #343434;
    color: #f9f9f9;
    font-weight: 700;
    border-radius: .25rem
  }
  .cards-container{
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-wrap: wrap;
  
  }
}
</style>