<script setup lang="ts">
import useConfig from '@/stores/modules/config'
import useUserStore from '@/stores/modules/user'
import type { Numeric } from 'vant/lib/utils'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

defineOptions({
  name: 'settingView',
})

const config = useConfig()
const userStore = useUserStore()
const router = useRouter()

const isDark = ref(config.isDark)

const languagePickerShow = ref(false)
const languagePickerValue = ref<Numeric[]>([]);
const languageColumns = [
  { text: '中文', value: 'zh-CN' },
  { text: '英文', value: 'en-US' },
]

const toggleTheme = (val: boolean) => {
  isDark.value = val
  config.toggleDark()
}

const logout = () => {
  userStore.logout()
  router.push('/login')
}

const onConfirm = (val: { selectedValues: Numeric[] }) => {
  console.log("@@@", val);
  languagePickerValue.value = val.selectedValues
  closeLanguagePop()
}

const showLanguagePop = () => {
  languagePickerShow.value = true
}

const closeLanguagePop = () => {
  languagePickerShow.value = false
}
</script>

<template>
  <van-nav-bar title="设置" />
  <van-cell-group inset>
    <van-cell is-link to="/setting/userInfo" center>
      <template #title>
        <van-image round width="88px" height="88px" src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg" />
      </template>
    </van-cell>
  </van-cell-group>
  <van-cell-group inset title="基本配置">
    <van-cell title="修改信息" is-link to="/setting/user" />
    <van-cell title="暗黑主题" icon="shop-o">
      <!-- 使用 right-icon 插槽来自定义右侧图标 -->
      <template #right-icon>
        <van-switch v-model="isDark" @change="toggleTheme" />
      </template>
    </van-cell>
    <van-cell title="语言" is-link icon="shop-o" :value="languagePickerValue[0]" @click="showLanguagePop"></van-cell>
  </van-cell-group>
  <van-cell-group inset title=" ">
    <van-cell title="退出系统" @click="logout" />
  </van-cell-group>

  <van-popup v-model:show="languagePickerShow" position="bottom">
    <van-picker :model-value="languagePickerValue" title="语言" :columns="languageColumns" @confirm="onConfirm"
      @cancel="closeLanguagePop" />
  </van-popup>
</template>

<style lang="less">
.van-nav-bar {
  margin-bottom: 16px;
}
</style>
