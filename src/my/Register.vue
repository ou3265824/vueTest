<template>
  <div>
    <router-link to="/login" replace>返回</router-link>
    <span>        注册</span>

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
