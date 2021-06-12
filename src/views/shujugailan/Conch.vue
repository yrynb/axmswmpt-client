<template>
<div>
  <p>{{data.key}}</p>
  <div>{{this.sum}}</div>
</div>
</template>

<script>
export default {
data() {
  return {
    data:{key:'conch'},
    opts:[1,2],
    others:{}
  }
},
  methods:{
    sum(){
      let sum = 0
      this.opts.forEach(item => {
        sum += item
      })
      return sum
    }
  }
}
</script>

<style scoped>

</style>
