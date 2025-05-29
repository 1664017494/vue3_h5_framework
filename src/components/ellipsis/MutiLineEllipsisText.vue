<template>
  <div ref="ellipsisRef" class="ellipsis-wrapper" :style="[ellipsisStyle, widthStyle]"
    :title="showTooltip ? finalContent : ''">
    <slot>{{ finalContent }}</slot>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount, watch, type VNodeRef } from 'vue'

const props = defineProps<{
  content: string,
  lineClamp: number,
  width?: string
}>()

const emit = defineEmits(['overflow-change'])

const ellipsisRef = ref<VNodeRef | null>(null)
const showTooltip = ref(false)
const observer = ref<ResizeObserver | null>(null)

// 样式计算
const ellipsisStyle = computed(() => {
  return props.lineClamp === 1
    ? {
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis'
    }
    : {
      display: '-webkit-box',
      WebkitBoxOrient: 'vertical',
      WebkitLineClamp: props.lineClamp
    }
})

const widthStyle = computed(() => ({
  width: props.width ? typeof props.width === 'number' ? `${props.width}px` : props.width : '100%'
}))

const finalContent = computed(() => props.content || '')

// 溢出检测逻辑
const checkOverflow = () => {
  if (!ellipsisRef.value) return

  const isSingleLine = props.lineClamp === 1
  const overflowDetected = isSingleLine
    ? ellipsisRef.value.scrollWidth > ellipsisRef.value.clientWidth
    : ellipsisRef.value.scrollHeight > ellipsisRef.value.clientHeight

  showTooltip.value = overflowDetected
  emit('overflow-change', overflowDetected)
}

// 响应式监听
onMounted(() => {
  checkOverflow()
  observer.value = new ResizeObserver(checkOverflow)
  if (ellipsisRef.value) {
    observer.value.observe(ellipsisRef.value)
  }
})

onBeforeUnmount(() => {
  if (observer.value) {
    observer.value.disconnect()
  }
})

watch(
  () => [props.lineClamp, props.content],
  () => setTimeout(checkOverflow, 0)
)
</script>

<style scoped>
.ellipsis-wrapper {
  overflow: hidden;
  word-break: break-word;
}
</style>
