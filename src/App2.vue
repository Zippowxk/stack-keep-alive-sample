<template>
  <div>
    <router-view v-slot="{ Component }">
      <sk-transition :name='animate'>
        <stack-keep-alive v-slot='{ key }'>
          <component :is="Component"
                     :key='key' />
        </stack-keep-alive>
      </sk-transition>
    </router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      animate: 'slide-left',
    }
  },
  watch: {
    $route(to,from) {
      let isBack = this.$router.__core.isBackward
      this.animate = isBack ? 'slide-left' : 'slide-right'
    }
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
/* .fade-enter-active,
.fade-leave-active {
  transform: translate3d(-100%, 0, 0);
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
} */
.slide-left-enter, .slide-right-leave-to {
  opacity: 0;
  transform: translateX(100%)
}

.slide-left-leave-to, .slide-right-enter {
  opacity: 0;
  transform: translateX(-100%)
}

.slide-left-enter-active, .slide-left-leave-active, .slide-right-enter-active, .slide-right-leave-active {
  transition: 1.5s;
  position: absolute;
  top:0;
}


</style>
