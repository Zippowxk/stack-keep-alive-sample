<template>
  <div class="root-container">
    <router-view v-slot="{ Component }">
      <transition :name='animate'>
        <keep-alive >
          <component :is="Component"/>
        </keep-alive>
      </transition>
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
  mounted() {
    this.$router.beforeEach((to, from, next) => {
      // let isBack = this.$router.__core.isBackward(from)
      // console.log('====================================')
      // console.log('isBack: ', isBack)
      // console.log('====================================')
      this.animate = this.animate === 'slide-left' ? 'slide-right' : 'slide-left'
      next()
    })
  },
  watch: {},
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
.root-container {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

* {
  margin: 0;
  padding: 0;
}
html,
body {
  width: 100%;
  height: 100%;
}

html {
  height: 100%;
}

body {
  height: inherit;
  padding: 0;
  margin: 0;
}

.app {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
  will-change: transform;
  transition: transform 400ms;
  position: fixed;
  pointer-events: none;
  width: 100%;
  height: 100%;
}

.slide-left-enter-active,
.slide-right-leave-active {
  z-index: 99;
}

.slide-right-enter-from {
  z-index: 1;
  transform: translate3d(-100%, 0, 0);
}

.slide-right-leave-active {
  transition-delay: 35ms;
  transform: translate3d(100%, 0, 0);
}

.slide-left-enter-from {
  transform: translate3d(100%, 0, 0);
}

.slide-left-leave-active {
  transition-delay: 35ms;
  transform: translate3d(-100%, 0, 0);
}
</style>
