<template>
  <div class="back-top" >
    <img src="~assets/img/common/top.svg" alt="">
  </div>
</template>

<script>
export default {
name: "BackTop",

}
</script>

<style scoped>
  .back-top {
    position: fixed;
    right: 10px;
    bottom: 55px;
 }
  .back-top img{
    width: 43px;
    height: 43px;
    background-color: rgba(100,100,100,.2);
    border-radius: 50%;
    padding: 8px;
  }
</style>
