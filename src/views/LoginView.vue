<template>
  <div class="bg-container">
    <van-form @submit="login">
        <van-cell-group inset>
          <van-field
            v-model="userStore.user.username"
            name="username"
            label="用户名"
            placeholder="用户名"
            clearable
            :rules="[
              { required: true, message: '请填写用户名' },
              { validator, message: '请输入正确内容' },
            ]"
          />
          <van-field
            v-model="userStore.user.password"
            type="password"
            name="password"
            label="密码"
            placeholder="密码"
            clearable
            :rules="[{ required: true, message: '请填写密码' }]"
          />
        </van-cell-group>
        <div style="margin: 16px">
          <van-button round block type="primary" native-type="submit"> 提交 </van-button>
        </div>
      </van-form>
    <!-- <div class="login-area"></div> -->
  </div>
</template>

<script setup lang="ts">
import useUserStore from '@/stores/modules/user'
import { useRouter } from 'vue-router'
const router = useRouter()

const userStore = useUserStore()

const login = () => {
  const res = userStore.login()
  if (res) {
    router.push('/home')
  }
}

// 校验函数返回 true 表示校验通过，false 表示不通过
const validator = (val: string) => /^[a-zA-Z0-9_-]{1,8}$$/.test(val)
</script>

<style scoped lang="less">
.bg-container {
  width: 100%;
  height: 100% !important;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .login-area {
    padding: 32px 0 16px;
    background-color: skyblue;
    border-radius: 16px;
  }
}
</style>
