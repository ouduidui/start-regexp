import { reactive, ref } from 'vue'

interface ToastOptions {
  title: string
  content: string
  buttonText: string
}

export const toastInfo = reactive<ToastOptions>({
  title: 'Tips',
  content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto aut eaque saepe sed qui voluptatum pariatur, optio dolorum, eveniet beatae ipsum in dicta nesciunt consequuntur. Consequuntur adipisci optio repellat aspernatur.',
  buttonText: 'Close',
})

export const isShowToast = ref(false)

export const hideToast = () => isShowToast.value = false

export const showToast = (options: ToastOptions) => {
  toastInfo.title = options.title
  toastInfo.content = options.content
  toastInfo.buttonText = options.buttonText
  isShowToast.value = true
}
