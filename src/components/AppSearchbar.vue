<script>
// import MyComponent from "./components/MyComponent.vue";

export default {
  data() {
    return {
      title: "Hello world",
    };
  },

  // components: {
  //   MyComponent,
  // },
};
</script>

<template>
    <div class="search my-4">
        <div class="container">
          <div class="search-container">
            <select class="form-select" aria-label="Default select example">
              <option selected>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
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
