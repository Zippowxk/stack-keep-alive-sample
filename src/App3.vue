<script>
import {
  resolveDynamicComponent as _resolveDynamicComponent,
  openBlock as _openBlock,
  createBlock as _createBlock,
  KeepAlive as _KeepAlive,
  Transition as _Transition,
  withCtx as _withCtx,
  createVNode as _createVNode,
  resolveComponent as _resolveComponent,
  createCommentVNode as  _createCommentVNode,
  getCurrentInstance as _getCurrentInstance
} from 'vue'

export default {
  data(){
    return {
      akey: 'PLACEHOLDER',
    }
  },
  created() {
    this.animate = 'slide-left'
  },
  mounted() {
    this.$router.beforeEach((to, from, next) => {
      // let isBack = this.$router.__core.isBackward(from)
      // this.animate = isBack ? 'slide-right' : 'slide-left'
      // this.$refs && (this.$refs.trans.name = this.animate)
      // console.log(this.$refs.trans)
      next()
    })
  },
  methods:{
    updateKey(key) {
      console.log('updatekey,',key)
      this.akey = key
    }
  },
  render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_router_view = _resolveComponent('router-view')
    const _component_stack_keep_alive = _resolveComponent('stack-keep-alive')
    const _component_transition = _resolveComponent('sk-transition')

    return (_openBlock(), _createBlock(_component_router_view, {'class': 'root-container'}, {
      default: _withCtx(({ Component }) => [
        _createVNode(_component_transition, { ref: 'trans', name: 'slide-left' ,back_name: 'slide_right'}, {
          default: _withCtx(() => [
            (_openBlock(),_createBlock(_component_stack_keep_alive, { onUpdateKey: _ctx.updateKey },
              [(_openBlock(), _createBlock(_resolveDynamicComponent(Component), { key: _ctx.akey }))]
            , 1032 /* DYNAMIC_SLOTS props*/, ["onUpdateKey"]))
          ], undefined, true),
          _: 2 /* DYNAMIC */
        }, 1024 /* DYNAMIC_SLOTS */)
      ]),
      _: 1 /* STABLE */
    }))
  },
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
  width: 100%;
  height: 100%;
  position: fixed;

}

.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
  will-change: transform;
  transition: transform 15000ms;
  pointer-events: none;
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
