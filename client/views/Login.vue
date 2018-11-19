<template>
  <div>{{this.getMovie}}
    <button @click="setMovie({})">Click me</button>
    <div class="logo"></div>
  </div>
  
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'
export default {
  mounted(){
    this.getAllMovies()
  },
  methods:{
    ...mapActions("application", ["getAllMovies"]),
    ...mapMutations("application", ["setMovie"])
  },
  computed:{
    ...mapGetters("application", ["getMovie"])
  }
}
</script>

<style lang="scss" scoped>
  .logo{
    width: 100px;
    height: 100px;
    background-image: url('/images/logo.png');
    background-size: cover;
  }
</style>



