<template>
  <div>
    <router-view v-slot="{ Component }">
      <transition name='fade'>
        <stack-keep-alive v-slot='{ key }'>
          <component :is="Component"
                     :key='key' />
        </stack-keep-alive>
      </transition>
    </router-view>
  </div>
</template>

<script>
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
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
