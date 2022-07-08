<template>
  <div class="info">
    <h1>This is an Info page, index: {{pageIndex}}</h1>
    <button @click='back'>back</button>
    <button @click="next">go another page Info</button>
  </div>
</template>
<script>
import { ref, onActivated, onUnmounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
export default {
  setup() {
    let pageIndex = ref(0)
    const router = useRouter()
    const route = useRoute()

    if (route.query.index) {
      pageIndex = route.query.index
    }

    const next = () => {
      router.push(`/info?index=${Number(pageIndex)+1}`)  
    }
    const back = () => {
      router.go(-1)
    }

    onActivated(()=>{
      console.log('info activated');
    })
    onUnmounted(()=>{
      console.log('info unmounted');
      
    })

    return {
      back,
      next,
      pageIndex
    }
  },
}
</script>
<style scoped>
.info {
  background-color: green;
}
</style>