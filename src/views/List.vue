<template>
  <div class="list">
    <h1>This is an List page</h1>
    <button @click="back">back</button>
    <button @click="next">go page Info</button>
  </div>
</template>
<script>
import { ref, onActivated, onUnmounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
export default {
  setup() {
     onActivated(()=>{
      console.log('List activated');
    })
    onUnmounted(()=>{
      console.log('List unmounted');
      
    })
    let pageIndex = ref(0)
    const router = useRouter()
    const route = useRoute()

    if (route.query.index) {
      pageIndex = route.query.index
    }

    const next = () => {
      router.replace(`/info?index=0`)  
    }
    const back = () => {
      router.go(-1)
    }
    return {
      back,
      next,
      pageIndex
    }
  },
}
</script>
<style scoped>
.list {
  background-color: yellowgreen;
  width: 100%;
  height: 100%;
}
</style>