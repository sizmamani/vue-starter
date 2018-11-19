<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  components: {
    
  },
  data() {
    return {
      
    }
  },
  mounted() {
    if (this.$route.meta.auth) {
      if (this.$store.state && !this.$store.state.user) {
        // this.handleCheckAuth().then(user=>{
            
        // }).catch(err =>{
        //   this.$router.push({path: '/login/'})
        // })
      }
    }

  },
  created() {

    this.$router.beforeEach((to, from, next) => {
      if (to.meta.auth == true) {
          // this.handleCheckAuth().then(user=>{
            
          // }).catch(err =>{
          //   this.$router.push({path: '/login/'})
          // })
      }

      next()
    })


  },
  methods: {

  }
}
</script>

<style lang="scss">


</style>
