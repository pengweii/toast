<template>
  <div class="k-toast">
    <transition name="k-toast">
      <div class="k-toast__inner" v-show="visible">
        <div class="k-toast--message">
          {{message}}
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  name: 'KToast',
  props: {
    message: {
      type: String,
      default: ''
    },
    delay: {
      type: Number,
      default: 2000
    }
  },
  setup () {
    const visible = ref(false)

    const close = () => {
      visible.value = false
    }
    const open = () => {
      visible.value = true
    }
    return {
      visible,
      close,
      open
    }
  }
})
</script>

<style lang="stylus">
.k-toast__inner
  width 100px
  background grey

.k-toast-enter-active,
.k-toast-leave-active
  transition all 0.3s

.k-toast-enter-from,
.k-toast-leave-to
  opacity 0
  transform translateY(-100%)
</style>
