<template>
    <div id="my">
          <img  src="../assets/back.png" />
        <span id="msg" >{{ title }}</span>
      <!--<span @click="myUpdate">{{ message }}</span>-->
    </div>
</template>

<script>
    export default {
        props:['title'],
        name: "my-title",
        data(){
          return{
            // msg:'标题',
          }
        },
        // methods: {
        //   myUpdate(){
        //     /**
        //      * 传值给父组件
        //      */
        //     this.$emit('my',this.msg)
        //   }
        // }
    }
</script>

<style scoped>
  #my {
    /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
    /*-webkit-font-smoothing: antialiased;*/
    /*-moz-osx-font-smoothing: grayscale;*/
    display: flex;
    text-align: center;
    color: white;
    /*align-items: center;*/
    background: crimson;
    padding: 20px;
  }
  #msg{
    width: 100%;
    align-items: center;
    text-align: center;
    justify-content: center;
    font-size: 26px;
    line-height: 50px;
  }
</style>
