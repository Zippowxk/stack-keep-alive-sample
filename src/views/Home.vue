<template>
  <div class="home">
    <p>
      this is home page
    </p>
    <router-link to='/list'>go to List</router-link>
    <!-- <input v-model="view"
           type="radio"
           value="v-a"
           id="a"><label for="a">A</label>
    <input v-model="view"
           type="radio"
           value="v-b"
           id="b"><label for="b">B</label> -->
    <!-- <sk-transition name="component-fade"
                   mode="out-in">
        <v-a v-if="view==='v-a'" />
        <v-b v-else/>
    </sk-transition> -->
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  data() {
    return {
      // view: 'v-a',
    }
  },
  components: {
    HelloWorld,
  },
  activated() {
    console.log('home activated')
    debugger
  },
}
</script>
<style>
.home {
  width: 100%;
  height: 100%;
}
.component-fade-enter-active,
.component-fade-leave-active {
  transition: opacity 0.3s ease;
}

.component-fade-enter-from,
.component-fade-leave-to {
  opacity: 0;
} 
</style>