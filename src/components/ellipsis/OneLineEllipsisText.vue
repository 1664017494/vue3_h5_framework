<template>
  <div ref="ellipsisRef" class="text-ellipsis"
    :style="{ width: typeof props.width === 'number' ? width + 'px' : width }" :title="showTitle ? props.content : ''">
    <slot>{{ content }}</slot>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, type VNodeRef } from 'vue'

const props = defineProps<{
  content: string,
  width?: string
}>()

const ellipsisRef = ref<VNodeRef | null>(null)
const showTitle = ref(false)

onMounted(() => {
  if (ellipsisRef.value) {
    showTitle.value = ellipsisRef.value.scrollWidth > ellipsisRef.value.clientWidth
  }
})
</script>

<style scoped>
.text-ellipsis {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
