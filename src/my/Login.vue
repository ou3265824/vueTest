<template>
  <div>
    <my-title title='登录'></my-title>
    <img id="head" src="../assets/user/head.png" />
    <!--<form method="post" onsubmit="onLogin">-->
    <div id="div_phone">
      <img id="img_phone" src="../assets/user/phone_false.png" />
      <input id="input_phone" v-model="phone" placeholder="请输入手机号码" type="text" />
    </div>
    <div id="xian"></div>

    <div id="div_phone2">
      <img id="img_phone2" src="../assets/user/pass_false.png" />
      <input id="input_phone2" v-model="pass" placeholder="请输入密码" type="text" />
    </div>
    <div id="xian2"></div>
      <div id="div_login">
        <span id="input_login" v-on:click="onLogin">登录</span>
      </div>
    <div id="div_register">
      <router-link id="input_register" to="/Register" tag="div">注册</router-link>

    </div>
    <!--</form>-->
  </div>
</template>

<script>
import MyTitle from "../components/MyTitle";

export default {
  components: {MyTitle},
  name: 'login',
  data () {
    return {
      phone:'',
      pass:'',

    }
  },
  methods: {
    onLogin(){
      console.log(this.phone+"-----"+this.pass)
    },

    reverseMessage: function () {
      this.msg = this.msg.split('').reverse().join('')
    },
    sd: function () {
      this.msg = '好好学习'
    }

  }
}
</script>

<style scoped>
  #head{
    margin-top: 100px;
    margin-bottom: 80px;
  }
  #div_phone,#div_phone2{
    display: flex;
    height: 44px;
    padding-left: 20px;
    padding-right: 20px;
    margin-top: 20px;
  }
  #img_phone,#img_phone2{
    width: 38px;
  }
  #input_phone,#input_phone2{
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
  #xian,#xian2{
    background: darkgrey;
    height: 1px;
    margin-top: 10px;
    margin-left: 20px;
    margin-right: 20px;
  }
  #div_login,#div_register{
    display: flex;
    /*height: 44px;*/
    padding-left: 20px;
    padding-right: 20px;
    margin-top: 20px;

  }
  #input_login,#input_register{
    margin-top: 20px;
    background: aqua;
    height: 80px;
    width: 100%;
    line-height: 80px;
    font-size: 32px;
    color: white;
    border-radius: 15px;
  }
  /*#input_register{*/
    /*margin-top: 20px;*/
    /*background: aqua;*/
    /*height: 80px;*/
    /*width: 100%;*/
    /*line-height: 80px;*/
    /*font-size: 32px;*/
    /*color: white;*/
    /*text-decoraction: none;*/
    /*!*box-shadow: 0 1px #e74c3c;*!*/
  /*}*/
  /*a:link{*/
    /*text-decoraction: none;*/
  /*}*/
</style>
