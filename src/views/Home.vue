<template>
  <div class="home">
    <p>
      this is home page
    </p>
    <router-link to='/list'>go to List</router-link>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
  },
}
</script>
