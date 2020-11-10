(function (Vue, VueRouter$1, Vuex, axios) {
  'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var Vue__default = /*#__PURE__*/_interopDefaultLegacy(Vue);
  var VueRouter__default = /*#__PURE__*/_interopDefaultLegacy(VueRouter$1);
  var Vuex__default = /*#__PURE__*/_interopDefaultLegacy(Vuex);
  var axios__default = /*#__PURE__*/_interopDefaultLegacy(axios);

  const SET_VALUE = 'SET_VALUE';

  Vue__default['default'].use(Vuex__default['default']);

  const store = new Vuex__default['default'].Store({
    state: {
      value: undefined,
    },
    getters: {
      getValue: state => {
        return state.value;
      },
    },
    actions: {
      setValue ({commit}, payload) {
        this.commit(SET_VALUE, payload);
      },

    },
    mutations: {
      [SET_VALUE] (state, value) {
        state.value = value * 1;
      }
    }
  });

  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //

  // import axios from 'axios';

  var script = {
    components: {},
    data() {
      return {};
    },
  };

  function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
      if (typeof shadowMode !== 'boolean') {
          createInjectorSSR = createInjector;
          createInjector = shadowMode;
          shadowMode = false;
      }
      // Vue.extend constructor export interop.
      const options = typeof script === 'function' ? script.options : script;
      // render functions
      if (template && template.render) {
          options.render = template.render;
          options.staticRenderFns = template.staticRenderFns;
          options._compiled = true;
          // functional template
          if (isFunctionalTemplate) {
              options.functional = true;
          }
      }
      // scopedId
      if (scopeId) {
          options._scopeId = scopeId;
      }
      let hook;
      if (moduleIdentifier) {
          // server build
          hook = function (context) {
              // 2.3 injection
              context =
                  context || // cached call
                      (this.$vnode && this.$vnode.ssrContext) || // stateful
                      (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
              // 2.2 with runInNewContext: true
              if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                  context = __VUE_SSR_CONTEXT__;
              }
              // inject component styles
              if (style) {
                  style.call(this, createInjectorSSR(context));
              }
              // register component module identifier for async chunk inference
              if (context && context._registeredComponents) {
                  context._registeredComponents.add(moduleIdentifier);
              }
          };
          // used by ssr in case component is cached and beforeCreate
          // never gets called
          options._ssrRegister = hook;
      }
      else if (style) {
          hook = shadowMode
              ? function (context) {
                  style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
              }
              : function (context) {
                  style.call(this, createInjector(context));
              };
      }
      if (hook) {
          if (options.functional) {
              // register for functional component in vue file
              const originalRender = options.render;
              options.render = function renderWithStyleInjection(h, context) {
                  hook.call(context);
                  return originalRender(h, context);
              };
          }
          else {
              // inject component registration as beforeCreate hook
              const existing = options.beforeCreate;
              options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
          }
      }
      return script;
  }

  const isOldIE = typeof navigator !== 'undefined' &&
      /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
  function createInjector(context) {
      return (id, style) => addStyle(id, style);
  }
  let HEAD;
  const styles = {};
  function addStyle(id, css) {
      const group = isOldIE ? css.media || 'default' : id;
      const style = styles[group] || (styles[group] = { ids: new Set(), styles: [] });
      if (!style.ids.has(id)) {
          style.ids.add(id);
          let code = css.source;
          if (css.map) {
              // https://developer.chrome.com/devtools/docs/javascript-debugging
              // this makes source maps inside style tags work properly in Chrome
              code += '\n/*# sourceURL=' + css.map.sources[0] + ' */';
              // http://stackoverflow.com/a/26603875
              code +=
                  '\n/*# sourceMappingURL=data:application/json;base64,' +
                      btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) +
                      ' */';
          }
          if (!style.element) {
              style.element = document.createElement('style');
              style.element.type = 'text/css';
              if (css.media)
                  style.element.setAttribute('media', css.media);
              if (HEAD === undefined) {
                  HEAD = document.head || document.getElementsByTagName('head')[0];
              }
              HEAD.appendChild(style.element);
          }
          if ('styleSheet' in style.element) {
              style.styles.push(code);
              style.element.styleSheet.cssText = style.styles
                  .filter(Boolean)
                  .join('\n');
          }
          else {
              const index = style.ids.size - 1;
              const textNode = document.createTextNode(code);
              const nodes = style.element.childNodes;
              if (nodes[index])
                  style.element.removeChild(nodes[index]);
              if (nodes.length)
                  style.element.insertBefore(textNode, nodes[index]);
              else
                  style.element.appendChild(textNode);
          }
      }
  }

  /* script */
  const __vue_script__ = script;

  /* template */
  var __vue_render__ = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", { staticClass: "flex two" }, [
      _c(
        "aside",
        [
          _c(
            "router-link",
            {
              attrs: { tag: "button", to: { name: "main", query: { uid: null } } }
            },
            [_vm._v("Main")]
          ),
          _vm._v(" "),
          _c("router-link", { attrs: { tag: "button", to: "/about" } }, [
            _vm._v("About")
          ])
        ],
        1
      ),
      _vm._v(" "),
      _c("article", [_c("router-view")], 1)
    ])
  };
  var __vue_staticRenderFns__ = [];
  __vue_render__._withStripped = true;

    /* style */
    const __vue_inject_styles__ = function (inject) {
      if (!inject) return
      inject("data-v-4dc52eb8_0", { source: "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", map: {"version":3,"sources":[],"names":[],"mappings":"","file":"App.vue"}, media: undefined });

    };
    /* scoped */
    const __vue_scope_id__ = "data-v-4dc52eb8";
    /* module identifier */
    const __vue_module_identifier__ = undefined;
    /* functional template */
    const __vue_is_functional_template__ = false;
    /* style inject SSR */
    
    /* style inject shadow dom */
    

    
    const __vue_component__ = /*#__PURE__*/normalizeComponent(
      { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
      __vue_inject_styles__,
      __vue_script__,
      __vue_scope_id__,
      __vue_is_functional_template__,
      __vue_module_identifier__,
      false,
      createInjector,
      undefined,
      undefined
    );

  // WARNING: this is a very hacky solution for dynamic base URLs
  //  want to avoid individual builds for each deployment...
  //  this solution seems better than injecting the base URL from
  //  the webserver into the template.
  const getWebRoot = function() {
    const urlPath = document.location.pathname;
    return urlPath.split('/')[0] + '/'
  };

  // https://www.digitalocean.com/community/tutorials/vuejs-rest-api-axios
  // https://www.codementor.io/@capocaccia/keeping-axios-where-it-belongs-o6xidrkrk

  const httpClient = axios__default['default'].create({
    baseURL: getWebRoot(),
    headers: {
      // Authorization: 'Bearer {token}'
    }
  });

  // see the documentation for request config object
  // https://github.com/axios/axios#request-config
  const baseService = {
    item: {
      load(config) {
        // {params: {uid: ....}}
        return httpClient.get('/load', config)
      },
      save(data, config) {
        // data is stringified JSON {...}
        let cfg = config || {};
        cfg.headers = {
          // in case of JSON axios DOES NOT ALLOW to specify a charset, even if it is UTF-8.
          // this would result in broken POST requests (empty body, but data in one of the
          // request params keys)
          'Content-Type': 'application/json'
        };
        return httpClient.post('/save', data, config)
      },
      show(config) {
        return httpClient.get('/show', config)
      },
    },
  };

  //

  var axiosStandardCatch = function (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      // console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      console.log(error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log('Error', error.message);
      throw error;
    }
  };

  var script$1 = {
    name: "Main",
    data() {return {
      item: undefined,
    }},
    components: {},
    methods: {
      getItem() {
        baseService.item.show().then(response => {
          this.item = response.data;
        }).catch(axiosStandardCatch);
      }
    },
  };

  /* script */
  const __vue_script__$1 = script$1;

  /* template */
  var __vue_render__$1 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("main", { staticClass: "main" }, [
      _c("section", { staticClass: "flex two" }, [
        _c("h2", [_vm._v("Main")]),
        _vm._v(" "),
        _c("button", { on: { click: _vm.getItem } }, [_vm._v("Click")]),
        _vm._v(" "),
        _c("div", [_vm._v(_vm._s(_vm.item))])
      ])
    ])
  };
  var __vue_staticRenderFns__$1 = [];
  __vue_render__$1._withStripped = true;

    /* style */
    const __vue_inject_styles__$1 = function (inject) {
      if (!inject) return
      inject("data-v-d4e9f1fe_0", { source: "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", map: {"version":3,"sources":[],"names":[],"mappings":"","file":"Main.vue"}, media: undefined });

    };
    /* scoped */
    const __vue_scope_id__$1 = "data-v-d4e9f1fe";
    /* module identifier */
    const __vue_module_identifier__$1 = undefined;
    /* functional template */
    const __vue_is_functional_template__$1 = false;
    /* style inject SSR */
    
    /* style inject shadow dom */
    

    
    const __vue_component__$1 = /*#__PURE__*/normalizeComponent(
      { render: __vue_render__$1, staticRenderFns: __vue_staticRenderFns__$1 },
      __vue_inject_styles__$1,
      __vue_script__$1,
      __vue_scope_id__$1,
      __vue_is_functional_template__$1,
      __vue_module_identifier__$1,
      false,
      createInjector,
      undefined,
      undefined
    );

  //
  //
  //
  //
  //
  //
  //

  var script$2 = {
    name: "About",
    components: {},
  };

  /* script */
  const __vue_script__$2 = script$2;

  /* template */
  var __vue_render__$2 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _vm._m(0)
  };
  var __vue_staticRenderFns__$2 = [
    function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c("main", { staticClass: "about" }, [
        _c("section", { staticClass: "flex two" }, [_c("h2", [_vm._v("About")])])
      ])
    }
  ];
  __vue_render__$2._withStripped = true;

    /* style */
    const __vue_inject_styles__$2 = function (inject) {
      if (!inject) return
      inject("data-v-558af05e_0", { source: "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", map: {"version":3,"sources":[],"names":[],"mappings":"","file":"About.vue"}, media: undefined });

    };
    /* scoped */
    const __vue_scope_id__$2 = "data-v-558af05e";
    /* module identifier */
    const __vue_module_identifier__$2 = undefined;
    /* functional template */
    const __vue_is_functional_template__$2 = false;
    /* style inject SSR */
    
    /* style inject shadow dom */
    

    
    const __vue_component__$2 = /*#__PURE__*/normalizeComponent(
      { render: __vue_render__$2, staticRenderFns: __vue_staticRenderFns__$2 },
      __vue_inject_styles__$2,
      __vue_script__$2,
      __vue_scope_id__$2,
      __vue_is_functional_template__$2,
      __vue_module_identifier__$2,
      false,
      createInjector,
      undefined,
      undefined
    );

  const routes = [{
    name: 'main',
    path: '/',
    component: __vue_component__$1
  }, {
    name: 'about',
    path: '/about',
    component: __vue_component__$2
  }];

  // got the idea from
  // https://github.com/ederssouza/vuejs-boilerplate

  const appRouter = new VueRouter({
    mode: 'history',
    base: getWebRoot(),
    routes,
    scrollBehavior (to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition
      }
      return { x: 0, y: 0 }
    }
  });

  function hasQueryParams(route) {
    return !!Object.keys(route.query).length
  }

  appRouter.beforeEach((to, from, next) => {
    // let toWithQuery = Object.assign({}, to, {query: from.query});
    // next(toWithQuery);
    if(!hasQueryParams(to) && hasQueryParams(from)){
      next({name: to.name, query: from.query});
    } else {
      next();
    }
  });

  Vue__default['default'].use(VueRouter__default['default']);

  new Vue__default['default']({
    router: appRouter,
    store,
    render: h => h(__vue_component__),
  }).$mount('#app');

}(Vue, VueRouter, Vuex, axios));
