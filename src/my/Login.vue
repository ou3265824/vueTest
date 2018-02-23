<template>
  <div>
    <my-title title='登录'></my-title>
    <div>
      <span>用户名：</span>
      <input />
    </div>
    <div>
      <span>密码：</span>
      <input />
    </div>
    <div>
    <button>登录</button>
    <router-link to="/Register">注册</router-link>

    </div>

    <!--<span>{{msg}}</span>-->
    <!--<span v-bind:title="sa">-->
          <!--登录-->
      <!--</span>-->
    <!--<div>-->
        <!--<span v-if="sb">-->
          <!--看到了吗-->
        <!--</span>-->
    <!--</div>-->
    <!--<div>-->
      <!--<ol>-->
        <!--<li v-for="sc in scs">-->
          <!--{{sc.test}}}-->

        <!--</li>-->
      <!--</ol>-->
      <!--<span>{{msg}}</span>-->
      <!--<button v-on:click="sd">点击</button>-->
      <!--<button v-on:click="reverseMessage">逆转消息</button>-->
      <!--<input v-model="msg"/>-->
    <!--</div>-->
  </div>
</template>

<script>
import MyTitle from "../components/MyTitle";

export default {
  components: {MyTitle},
  name: 'login',
  data () {
    return {
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
      this.msg = '好好学习'
    }

  }
}
</script>

<style scoped>

</style>
