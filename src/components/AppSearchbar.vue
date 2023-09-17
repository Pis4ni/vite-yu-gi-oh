<script>
import {store} from "../data/store"
import axios from "axios";



export default {

    data() {
        return {
          title: "Hello world",
          store
        };
    },
    methods: {

      fetchCardsByArchetype (archetype){
      store.cards = []
      axios.get("https://db.ygoprodeck.com/api/v7/cardinfo.php?archetype=" + archetype).then((res) => {
        store.cards = res.data.data;

    });
      },
      handleSelect(event){
        const selectedValue = event.target.value;
        console.log(selectedValue);
        this.fetchCardsByArchetype (selectedValue)
      },
    }


};
</script>

<template>
    <div class="search my-4">
        <div class="container">
          <div class="search-container">
            <select class="form-select" aria-label="Archetype_search" @change="handleSelect">
              <option selected>Select an archetype</option>
              <option v-for="(archetype,index) in store.archetypes" :value="archetype">{{archetype}}</option>

            </select>
          </div>
        </div>

    </div>
</template>

<style lang="scss" scoped>
.search {
  select {
    max-width: 400px;
  }
}
</style>
