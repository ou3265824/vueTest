<template>
  <div>
    <div id="div_phone">
      <img src="../assets/user/phone_false.png" />
      <input id="input_phone" v-model="phone" placeholder="请输入手机号码" type="text" />
    </div>
    <div id="xian"></div>
  </div>
</template>

<script>
    export default {
      props: ['phone'],
        name: "user-input",

      methods: {
        myUpdate(){
          /**
           * 传值给父组件
           */
          this.$emit('my',this.msg)
        }
      }

    }
</script>

<style scoped>
  #div_phone{
    display: flex;
    height: 44px;
    padding-left: 20px;
    padding-right: 20px;
  }
  #input_phone{
    -web-kit-appearance:none;
    -moz-appearance: none;
    /*background: white;*/
    width: 100%;
    background:transparent;
    /*border:0px solid #ffffff;*/
    border: 0px;
    line-height: 44px;
    margin-left: 20px;
    padding-left: 10px;
    font-size: 20px;
    border:none;
    outline:none;
  }
  #xian{
    background: darkgrey;
    height: 1px;
    margin-top: 10px;
    margin-left: 20px;
    margin-right: 20px;
  }
</style>
