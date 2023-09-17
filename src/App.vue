<script>
import axios from "axios";
import { store } from "./data/store";

import AppCardDisplay from "./components/AppCardDisplay.vue";
import AppHeader from "./components/AppHeader.vue";
import AppSearchbar from "./components/AppSearchbar.vue";

export default {
  data() {
    return {
      title: "Hello world",
      store,
    };
  },
  components: {AppCardDisplay,AppHeader,AppSearchbar},
  methods: {
    fetchAllCards(){
      axios.get("https://db.ygoprodeck.com/api/v7/cardinfo.php").then((res) => {
        store.cards = res.data.data;
        store.cards.forEach((card) => {
          if (!store.archetypes.includes(card.archetype)) {
            store.archetypes.push(card.archetype);
          }
      });
      console.log(store.archetypes, store.archetypes.length, "ciao");
      // this.archetypes = this.cards.map((card)=> card.archetype)
    });
    },
    getArchetypes(){
      axios.get("https://db.ygoprodeck.com/api/v7/archetypes.php").then((res) => {
        store.archetypes = JSON.parse(res.data).archetype_name;
    },)

    },
  },
  created() {

    this.fetchAllCards()
    this.getArchetypes()

  },
};
</script>

<template>
  <AppHeader />
  <AppSearchbar />
  <AppCardDisplay />
</template>

<style lang="scss"></style>