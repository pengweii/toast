<template>
  <div class="hello">
    <button @click="handleClick">KToast</button>
    <button @click="handleHM">HM-message</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue'
import { Toast } from '@/components/k-toast/index'
import createMessage from '@/components/hm-message/Message'
export default defineComponent({
  name: 'HelloWorld',
  setup () {
    // const kToast = ref<typeof KToast>()
    const handleClick = () => {
      Toast({
        message: '这是一条消息'
      })
    }
    const msg = inject('$toast') as typeof Toast
    const handleHM = () => {
      // createMessage('xiaoxi', 'info')
      msg({ message: '一条消息' })
    }
    return {
      handleClick,
      handleHM
    }
  }
})
</script>

<style scoped lang="stylus">

</style>
