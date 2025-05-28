<script setup lang="ts">
import useConfig, { type LanguageType } from '@/stores/modules/config'
import useUserStore from '@/stores/modules/user'
import type { Numeric } from 'vant/lib/utils'
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'
import { languageColumns } from '@/utils/i18n'

defineOptions({
  name: 'settingView',
})

const config = useConfig()
const userStore = useUserStore()
const router = useRouter()
const { t, locale } = useI18n()

const isDark = ref(config.isDark)

const languagePickerShow = ref(false)
const languagePickerValue = ref<Numeric[]>([]);

const toggleTheme = (val: boolean) => {
  isDark.value = val
  config.toggleDark()
}

const logout = () => {
  userStore.logout()
  router.push('/login')
}

const onConfirm = (val: { selectedValues: LanguageType[] }) => {
  config.changeLanguage(val.selectedValues[0] as LanguageType)
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
  <div class="container">
    <van-nav-bar :title="t('setting.setting')" />
    <div class="content">

      <van-cell-group inset>
        <van-cell is-link to="/setting/userInfo" center>
          <template #title>
            <van-image round width="88px" height="88px" src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg" />
          </template>
        </van-cell>
      </van-cell-group>
      <van-cell-group inset :title="t('setting.baseConfig')">
        <van-cell :title="t('setting.changeInfo')" is-link to="/setting/user" />
        <van-cell :title="t('setting.darkTheme')" icon="shop-o">
          <!-- 使用 right-icon 插槽来自定义右侧图标 -->
          <template #right-icon>
            <van-switch v-model="isDark" @change="toggleTheme" />
          </template>
        </van-cell>
        <van-cell :title="t('setting.language')" is-link icon="shop-o" :value="locale"
          @click="showLanguagePop"></van-cell>
      </van-cell-group>
      <van-cell-group inset title=" ">
        <van-cell :title="t('setting.logout')" @click="logout" />
      </van-cell-group>
    </div>
  </div>

  <van-popup v-model:show="languagePickerShow" position="bottom">
    <van-picker :model-value="languagePickerValue" :title="t('setting.language')" :columns="languageColumns"
      @confirm="onConfirm" @cancel="closeLanguagePop" />
  </van-popup>
</template>

<style lang="less">
.container {
  max-height: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;

  .content {
    flex: 1;
    min-height: 0;
    overflow: scroll;
  }
}
</style>
