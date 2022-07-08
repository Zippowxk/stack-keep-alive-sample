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
  render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_router_view = _resolveComponent('router-view')
    const _component_stack_keep_alive = _resolveComponent('stack-keep-alive')
    const _component_transition = _resolveComponent('sk-transition')

    return (_openBlock(), _createBlock(_component_router_view, null, {
      default: _withCtx(({ Component }) => [
        _createVNode(_component_transition, { name: "fade" }, {
          default: _withCtx(() => [
            (_openBlock(),_createBlock(_component_stack_keep_alive, null, {
              default: _withCtx(({key}) => {
                  // if (some) {
                    return [(_openBlock(), _createBlock(_resolveDynamicComponent(Component), { key }))]
                  // } else {
                  //   return undefined
                  //   // return [(_createCommentVNode(" <component :is=\"Component\"/> "))]
                  // }
                }),
              _: 2 /* DYNAMIC */
            }, 1024 /* DYNAMIC_SLOTS */))
          ], undefined, true),
          _: 2 /* DYNAMIC */
        }, 1024 /* DYNAMIC_SLOTS */)
      ]),
      _: 1 /* STABLE */
    }))


    // return (
    //   _openBlock(),
    //   _createBlock(_component_router_view, null, {
    //     default: _withCtx(({ Component }) => [
    //       _createVNode(
    //         _Transition,
    //         { name: "fade" },
    //         {
    //           default: _withCtx(
    //             () => [
    //               (_openBlock(),
    //               _createBlock(
    //                 _KeepAlive,
    //                 null,
    //                 [
    //                   (_openBlock(),
    //                   _createBlock(_resolveDynamicComponent(Component))),
    //                 ],
    //                 1024 /* DYNAMIC_SLOTS */
    //               )),
    //             ],
    //             undefined,
    //             true
    //           ),
    //           _: 2 /* DYNAMIC */,
    //         },
    //         1024 /* DYNAMIC_SLOTS */
    //       ),
    //     ]),
    //     _: 1 /* STABLE */,
    //   })
    // )



  // return (_openBlock(), _createBlock(_component_router_view, null, {
  //   default: _withCtx(({ Component }) => [
  //     _createVNode(_component_stack_keep_alive, null, {
  //       default: _withCtx(({ key }) => [
  //         _createVNode(_Transition, { name: "fade" }, {
  //           default: _withCtx(() => [
  //             (_openBlock(), _createBlock(_resolveDynamicComponent(Component), { key: key }))
  //           ], undefined, true),
  //           _: 2 /* DYNAMIC */
  //         }, 1024 /* DYNAMIC_SLOTS */)
  //       ]),
  //       _: 2 /* DYNAMIC */
  //     }, 1024 /* DYNAMIC_SLOTS */)
  //   ]),
  //   _: 1 /* STABLE */
  // }))
  
  // return (
  //     _openBlock(),
  //     _createBlock(_component_router_view, null, {
  //       default: _withCtx(({ Component , route}) => [
  //         _createVNode(
  //           _Transition,
  //           { name: "fade" },
  //           {
  //             default: _withCtx(
  //               () => {
  //                 const key = that.ctx.$refs.ska.genKey()
  //                 return [
  //                 (_openBlock(),
  //                 _createBlock(
  //                   _component_stack_keep_alive,
  //                   {ref: "ska"},
  //                   [
  //                     (_openBlock(),
  //                     _createBlock(_resolveDynamicComponent(Component), { key : key})),
  //                   ],
  //                   1024 /* DYNAMIC_SLOTS */
  //                 )),
  //               ]},
  //               undefined,
  //               true
  //             ),
  //             _: 2 /* DYNAMIC */,
  //           },
  //           1024 /* DYNAMIC_SLOTS */
  //         ),
  //       ]),
  //       _: 1 /* STABLE */,
  //     })
  //   )
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
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s ease;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
