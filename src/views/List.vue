<template>
  <div class="list">
    <h1>This is an List page</h1>
    <button @click="back">back</button>
    <button @click="next">go page Info</button>
  </div>
</template>
<script>
import { ref } from 'vue'
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
      router.push(`/info?index=0`)  
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
}
</style>