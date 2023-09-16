<script>
// import MyComponent from "./components/MyComponent.vue";

export default {
  data() {
    return {
      title: "Yu-Gi-Oh Api"
    }
  }

  // components: {
  //   MyComponent,
  // },
};
</script>

<template>
    <header class="p-3">

            <div class="logo-name">
                <div class="logo">
                    <img src="../../public/img/logo.png" alt="">
                </div>
                <h1>{{ title }}</h1>
    
            </div>

    </header>
</template>

<style lang="scss" scoped>
header{
    background-color: #f9f9f9;
    .logo-name{
    display: flex;
    align-items: center;
        .logo{
            width: 50px;
            img{
                max-width: 100%;
            }
        }
        h1{
            margin: 0;
            padding: 0;
        }
    }

}
</style>