<template>
  <div class="flatlab-login">
    <form class="form-signin" action="javascript:;" @submit="login" method="post">
      <h2 class="form-signin-heading">安心美食外卖平台</h2>
      <div class="login-wrap">
        <input type="text" name="username" v-model="form.username" class="form-control" placeholder="账号" autofocus>
        <input type="password" name="pwd" v-model="form.pwd" class="form-control" placeholder="密码">
        <div class="form-group">
          <input type="text" name="pagerandom" v-model="form.pagerandom" autocomplete="off" placeholder="验证码"
                 class="form-control border-0 shadow form-control-lg text-violet"
                 style="width: 180px;display: inline-block"/>
          <e-img alt="刷新验证码" title="点击刷新验证码"
                 @click="loadCaptch"
                 :src="captchUrl"
                 style="cursor:pointer; padding-top:10px;width: 60px;height: 30px;float: right"></e-img>
        </div>
        <select name="cx" class="form-control" v-model="form.cx" style="padding: 5px 10px;margin-bottom: 20px">
          <option :value="r" :key="r" v-for="r in rules">{{ r }}</option>
        </select>
        <button class="btn btn-lg btn-login btn-block m-bot15" type="submit">登录系统</button>
      </div>
    </form>
  </div>
</template>
<script>
import setting from "@/setting";
import api from "@/api";

export default {
  name: "flatlab-login",
  data() {
    return {
      setting,
      captchUrl: '',
      loading: false,
      form: {
        username: '',
        pwd: '',
        cx: '管理员',

        /* 验证码段 */
        pagerandom: '',
        a: 'a'
        /* 验证码段 */

      },
      rules: [
        '管理员',
        '用户',
        '配送员',
      ]

    }
  },
  watch: {},
  computed: {},
  methods: {
    login() {

      this.loading = true;
      this.$store.dispatch('user/login', this.form).then(res => {

        this.loading = false;
        if (res.code == api.code.OK) {
          this.$message.success('登录成功');
          let redirect = this.$route.query.redirect;
          console.log('123',redirect);
          if (redirect) {
            this.$router.replace(redirect);
          } else {
            this.$router.replace('/admin/sy');
          }
        } else {
          this.$message.error(res.msg);
        }
        if (res.code == 20) {
          this.loadCaptch();
        }
      }).catch(err => {
        this.loading = false;
        this.$message.error(err.message)
      });
    },
    loadCaptch() {
      api.captch().then(res => {
        console.log(res);
        this.form.captchToken = res.token;
        this.captchUrl = res.url;
      });
    }
  },
  created() {
    this.loadCaptch();
  },
  mounted() {
  },
  destroyed() {
  }
}
</script>
<style type="text/scss" lang="scss">
.flatlab-login {
  height: 100%;
  padding: 0px;
  margin: 0px;
  font-size: 13px;
  background: url(./image/login-bg.jpg) no-repeat;
  background-size: cover;
  color: #797979;
  padding-top: 100px;

  .btn {
    display: block;
    width: 100%;
    padding: 10px 2px;
    color: #777;
    text-decoration: none;
    font-weight: bold;
    font-size: 13px;
    font-family: Tahoma, Arial, sans-serif;
    border-radius: 4px;
    text-shadow: 0 1px 1px rgba(255, 255, 255, 0.9);
    position: relative;
    cursor: pointer;
    border: 1px solid #ccc !important;
  }

  .btn:hover, .btn:focus, .btn:active {
    outline: medium none;
    border: 1px solid #329ECC !important;
    opacity: 0.9;
    box-shadow: 0 0 5px rgba(82, 168, 236, 0.5);
  }

  .form-control {
    display: block;
    width: 100%;
    height: 34px;
    padding: 6px 12px;
    font-size: 14px;
    line-height: 1.428571429;
    color: #555;
    vertical-align: middle;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 4px;
    -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
    -webkit-transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
    transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
  }

  .form-control:focus, #focusedInput {
    border: 1px solid #517397;
    box-shadow: none;
  }

  .form-control:focus {
    border-color: #66afe9;
    outline: 0;
    -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(102, 175, 233, 0.6);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(102, 175, 233, 0.6);
  }


  .form-signin {
    max-width: 330px;
    margin: 0 auto;
    background: #fff;
    border-radius: 5px;
    -webkit-border-radius: 5px;
  }

  .form-signin h2.form-signin-heading {
    margin: 0;
    padding: 20px 15px;
    text-align: center;
    background: #41cac0;
    border-radius: 5px 5px 0 0;
    -webkit-border-radius: 5px 5px 0 0;
    color: #fff;
    font-size: 18px;
    text-transform: uppercase;
    font-weight: 300;
    font-family: 'Open Sans', sans-serif;
  }


  .form-signin .checkbox {
    margin-bottom: 14px;
  }

  .form-signin .checkbox {
    font-weight: normal;
    color: #b6b6b6;
    font-weight: 300;
    font-family: 'Open Sans', sans-serif;
  }

  .form-signin .form-control {
    position: relative;
    font-size: 16px;
    height: auto;
    padding: 10px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }

  .form-signin .form-control:focus {
    z-index: 2;
  }

  .form-signin input[type="text"], .form-signin input[type="password"] {
    margin-bottom: 15px;
    border-radius: 5px;
    -webkit-border-radius: 5px;
    border: 1px solid #eaeaea;
    box-shadow: none;
    font-size: 12px;
  }

  .form-signin .btn-login {
    background: #f67a6e;
    color: #fff;
    text-transform: uppercase;
    font-weight: 300;
    margin-bottom: 20px;
  }

  .form-signin p {
    text-align: center;
    color: #b6b6b6;
    font-size: 16px;
    font-weight: 300;
  }

  .form-signin a {
    color: #b6b6b6;
  }

  .form-signin a:hover {
    color: #41cac0;
  }

  .login-wrap {
    padding: 20px;
  }

  .login-social-link {
    display: inline-block;
    margin-top: 20px;
    margin-bottom: 15px;
  }

  .login-social-link a {
    color: #fff;
    padding: 15px 28px;
    border-radius: 4px;
  }

  .login-social-link a:hover {
    color: #fff;
  }

  .login-social-link a i {
    font-size: 20px;
    padding-right: 10px;
  }

  .login-social-link a.facebook {
    background: #5193ea;
    margin-right: 22px;
    box-shadow: 0 4px #2775e2;
    float: left;
  }

  .login-social-link a.twitter {
    background: #44ccfe;
    box-shadow: 0 4px #2bb4e8;
    float: left;
  }


}


</style>
