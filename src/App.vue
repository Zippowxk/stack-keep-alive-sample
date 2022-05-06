<template>
  <div id="nav">
    please open vue-devtools
  </div>
  <router-view v-slot="{ Component }">
    <stack-keep-alive v-slot='{ key }'>
      <component :is="Component"
                 :key='key' />
    </stack-keep-alive>
  </router-view>
</template>

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
</style>
