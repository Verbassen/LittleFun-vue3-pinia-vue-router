import { useIntersectionObserver } from '@vueuse/core'

export const lazyLoadImgPlugin = {
  install(app) {
    app.directive('img-lazy', {
      mounted(el, binding) {
        // console.log(el,binding)
        const {stop} =  useIntersectionObserver(el, ([{ isIntersecting }]) => {
            // console.log(isIntersecting)
          if (isIntersecting) {
            el.src = binding.value
            stop()
          }
        })
      }
    })
  }
}
