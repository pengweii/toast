<template>
<div class="message" :class="classesObj">
  {{message}}
</div>
</template>

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  name: 'Message',
  props: {
    message: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'success'
    }
  },
  setup (props) {
    const classesObj = {
      'message-success': props.type === 'success',
      'message-info': props.type === 'info',
      'message-warning': props.type === 'warning',
      'message-danger': props.type === 'danger'
    }
    return {
      classesObj
    }
  }
})
</script>

<style lang="stylus">
.message
  width 200px
  height 50px
  background #424242
  text-align center
  line-height 50px
</style>
