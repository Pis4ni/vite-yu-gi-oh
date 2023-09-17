<script>
import {store} from "../data/store"


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
    }


};
</script>

<template>
    <div class="search my-4">
        <div class="container">
          <div class="search-container">
            <select class="form-select" aria-label="Archetype_search">
              <option selected>Select an archetype</option>
              <option v-for="(archetype,index) in store.archetypes" value="index" @change="fetchCardsByArchetype(archetype)">{{archetype}}</option>

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
