<template>
  <van-nav-bar title="修改信息" left-text="返回" left-arrow @click-left="back" />
  <van-form @submit="onSubmit">
    <van-cell-group inset>
      <van-field
        :readonly="true"
        v-model="user.username"
        name="username"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="updateUser.password"
        type="password"
        name="password"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
    </van-cell-group>
    <van-action-bar>
      <van-action-bar-button color="#1989fa" text="保存" native-type="submit" />
    </van-action-bar>
  </van-form>
</template>

<script lang="ts" setup>
import { useUserStore } from '@/stores/user'
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()

const { user } = useUserStore()

const updateUser = reactive({
  password: '',
})

const back = () => {
  router.back()
}

const onSubmit = () => {
  console.log('@@@', user)
}
</script>

<style lang="less" scoped>
.van-form {
  padding: 16px 0;
}
</style>
