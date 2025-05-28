import { createI18n } from "vue-i18n";

const config = JSON.parse(localStorage.getItem('config') ?? '{}')

import zhCn from "@/locales/zh-cn";
import enUs from "@/locales/en-us";

const messages = {
  'zh': zhCn,
  'en': enUs
}

export const languageColumns = [
  { text: '中文', value: 'zh-CN' },
  { text: 'English', value: 'en-US' },
]

const i18n = createI18n({
  legacy: false,
  locale: config.language ?? 'zh-CN',
  messages
})

export default i18n
