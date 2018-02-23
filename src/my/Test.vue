<template>
  <div>
    <my-title  message="首页"></my-title>
    <span>{{msg}}</span>
    <span v-bind:title="sa">
    登录
    </span>
    <div>
    <span v-if="sb">
    看到了吗
    </span>
    </div>
    <div>
      <ol>
        <li v-for="sc in scs">
        {{sc.test}}{{sc}}

        </li>
      </ol>
      <span>{{msg}}</span>
      <button v-on:click="sd">点击</button>
      <button v-on:click="reverseMessage">逆转消息</button>
      <input v-model="msg"/>
    </div>
    <div>
      <span v-if="isShow">if的</span>
      <span v-else="isShow">else的</span>
      <button v-on:click="show">显示</button>

    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  import MyTitle from "../components/MyTitle";
    export default {
      components: {MyTitle},
      name: "test",
      data () {
        return {
          isShow: true,
          msg: 'hello world',
          sa: '时间：' + new Date().toString(),
          sb: false,
          scs: [
            {test: '第一个'},
            {test: '第二个'},
            {test: '第三个'}
          ]
        }
      },
      methods: {
        reverseMessage: function () {
          this.msg = this.msg.split('').reverse().join('')
        },
        sd: function () {
          this.scs.push({
          test: '第三个'}
          );
          Vue.set(this.scs,2,{test: '第三个++++'})
          this.msg = '好好学习'
        },
        show(){
          this.isShow=!this.isShow;
        },
        myTitle(data){
          console.log('a   '+data);
        }
      }
    }
</script>

<style scoped>

</style>
