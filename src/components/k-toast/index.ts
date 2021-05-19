import { createVNode, nextTick, render, VNode, App } from 'vue'
import KToast from './index.vue'

interface KToastConfig {
  message: string;
  delay?: number;
}

export function Toast ({ message, delay = 2000 }: KToastConfig): void {
  // 根据Component定义生成虚拟DOM
  const vm = createVNode(KToast, { message, delay })
  // 需要创建一个容器来渲染这个虚拟节点
  const container = document.createElement('div')
  // 这样就成功将虚拟节点渲染到container里面去
  render(vm, container)
  // 然后将container挂到body上面
  document.body.append(container)

  nextTick(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    vm.component.ctx.open()
    setTimeout(() => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      vm.component.ctx.close()
      // 过渡动画结束后移除对应元素
      setTimeout(() => {
        document.body.removeChild(container)
      }, 300)
    }, delay)
  })
  // return vm
}
const print = () => {
  console.log('print')
}
Toast.print = print
Toast.install = (app: App) => {
  app.provide('$toast', Toast)
}
// export default Toast
