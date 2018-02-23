<template>
  <div>
    <my-title title='首页'></my-title>
    <button v-on:click="sa">获取数据</button>
    {{d}}

  </div>
</template>

<script>
  import MyTitle from "../components/MyTitle";

  export default {
    components: {MyTitle},
    name: 'home',
    data(){
      return{
        d:''
      }
    },
    methods: {
      sa:function () {
        // alert('as');
        // var that = this;
        // that.$http({           //调用接口
        //   method:'GET',
        //   url:'http://www.wtrade365.com/sc/operate/release/agreement'  //this指data
        // }).then(function(response){  //接口返回数据
        //   console.log(response.bodyText);
        // },function(error){
        // })


        // GET /someUrl
        // var url='http://www.wtrade365.com/sc/operate/release/agreement';
        // this.$http.get(url).then(response => {
        //   console.log(response.bodyText);
        //   this.d=response.bodyText;
        //   // get body data
        //   // this.someData = response.body;
        //
        // }, response => {
        //   console.log("error");
        // });

        //post
        var url='http://www.wtrade365.com/sc/operate/user/v1_1/login';
        // this.$http({
        //   method:'POST',
        //   url:url,
        //   data:{
        //     // "jsonText":"{\"password\":\"96be7ca441ab2fdde60b33b712bfcc42\",\"mobile\":\"13022177558\"}"
        //     'password':'96be7ca441ab2fdde60b33b712bfcc42',
        //     'mobile':'13022177558'
        //   },
        //
        //   dataType:"json",
        //   emulateJSON: true,
        // }).then(response=>{
        //   this.d=response.data;
        //   console.log(response);
        // },error=>{
        //   console.log("error");
        // })
        //发送post请求
        // this.$http.post(url,{'jsonText':"{\"password\":\"96be7ca441ab2fdde60b33b712bfcc42\",\"mobile\":\"13022177558\"}"},{emulateJSON: true}).then(function(response){
        //   this.d=response.data;
        //   console.log(response);
        // },function(){
        //   alert('请求失败处理');   //失败处理
        // });

        var urla="http://www.wtrade365.com/sc/operate/notify/user/2/_ckt";
        this.$http.post(urla,{},
          {headers:{"Content-Type": "application/jsoncharset=utf-8","Access-Control-Allow-Origin":"*",
              "token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJtb2JpbGUiOiIxMzAyMjE3NzU1OCIsInVzZXJJZCI6MiwiaWF0IjoxNTE4MTQ2Mjg1ODA0fQ.I0KDYNHx6FX-_p-RWz5eDGp8KiRJNOM8Be-lb6EiOKM",
              "mobile":"13022177558"}}).then(function(response){
          this.d=response.data;
          console.log(response);
        },function(){
          alert('请求失败处理');   //失败处理
        });
      }
    }
  }

</script>

<style scoped>

</style>
