<script>

export default {
    props:{
        name:String,
        archetype:String,
        cardImages:String,

    },
    data() {
        return {
            title: "Hello world",
            span:'drago bianco occhi blu',
            span2:'drago "occhi"'
    }
  }

};
</script>

<template>
  <div class="card-detail">
    <div class="card-img">
        <img :src="cardImages" alt="">
    </div>
    <span class="name">
        {{ name }}
    </span>
    <span class="description ">
        {{ archetype }}
    </span>

  </div>
</template>

<style lang="scss" scoped>
.card-detail{
    box-shadow: 0 0 10px 1px black;
    width: calc((100% - 8rem)/5);
    margin: .5rem;
    background-color: #d48f38;
    .card-img{
        width: 100%;
        img{
            width: 100%;
        }
    }
    .name{
        display: block;
        color: #f9f9f9;
        text-transform: uppercase;
        font-weight: 600;
        font-size: .8rem;
        text-align: center;
        margin: .1rem;
    }
    .description{
        display: block;
        text-align: center;
        text-transform: capitalize;
        font-size: .8rem;
        margin: .1rem;
    }
}

</style>