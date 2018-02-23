<template>
  <div>
    <my-title title='注册'></my-title>
    <router-link to="/login" replace>返回</router-link>

    <div>
      <span>用户名</span>
      <input/>
    </div>
    <div>
      <span>密码</span>
      <input/>
    </div>
    <div>
      <span>新密码</span>
      <input/>
    </div>
    <button>注册</button>
  </div>
</template>

<script>
export default {
  name: 'register'
}

</script>

<style scoped>

</style>
