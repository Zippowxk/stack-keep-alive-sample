<template>
  <div class="info">
    <h1>This is [singleton] Cart page, index: {{pageIndex}}</h1>
    <button @click='back'>back</button>
    <button @click="next">go another page Cart</button>
    <button @click='goInfo'>go Info page</button>
  </div>
</template>
<script>
import { watch, ref, onActivated, onUnmounted, onDeactivated } from 'vue'
import { useRouter, useRoute, onBeforeRouteLeave } from 'vue-router'
export default {
  setup() {
    let pageIndex = ref(0)
    const router = useRouter()
    const route = useRoute()

    if (route.query.index) {
      pageIndex = route.query.index
    }

    const next = () => {
      router.push(`/cart?index=${Number(pageIndex)+1}`)  
    }

    const back = () => {
      router.go(-1)
    }

    onActivated(()=>{
      console.log('cart activated');
    })
    onDeactivated(()=>{
      console.log('cart deactivated');
    })
    onUnmounted(()=>{
      console.log('cart unmounted');
    })
    const goInfo = () => {
      router.push('/info?index=0')
    }

    // onBeforeRouteLeave((to, from)=>{
    //   pageIndex = to.query.index
    // })
    watch(
      () => route.query.index,
      newIndex => {
        console.log(newIndex)
        pageIndex = newIndex
      }
    )

    return {
      goInfo,
      back,
      next,
      pageIndex
    }
  },
}
</script>
<style scoped>
.info {
  background-color: pink;
  width: 100%;
  height: 100%;
}
</style>