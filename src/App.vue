<script>
import AppCardDisplay from "./components/AppCardDisplay.vue";
import AppHeader from "./components/AppHeader.vue";
import AppSearchbar from "./components/AppSearchbar.vue";

export default {
  data() {
    return {
      title: "Hello world"
    }
  },
  components: {AppCardDisplay,AppHeader,AppSearchbar},
};
</script>

<template>
  <AppHeader />
  <AppSearchbar />
  <AppCardDisplay />
</template>

<style lang="scss"></style>