!(function(e) {
  function n(n) {
    for (
      var r, u, c = n[0], i = n[1], l = n[2], f = 0, d = [];
      f < c.length;
      f++
    )
      (u = c[f]), a[u] && d.push(a[u][0]), (a[u] = 0)
    for (r in i) Object.prototype.hasOwnProperty.call(i, r) && (e[r] = i[r])
    for (s && s(n); d.length; ) d.shift()()
    return o.push.apply(o, l || []), t()
  }
  function t() {
    for (var e, n = 0; n < o.length; n++) {
      for (var t = o[n], r = !0, c = 1; c < t.length; c++) {
        var i = t[c]
        0 !== a[i] && (r = !1)
      }
      r && (o.splice(n--, 1), (e = u((u.s = t[0]))))
    }
    return e
  }
  var r = {},
    a = { 1: 0 },
    o = []
  function u(n) {
    if (r[n]) return r[n].exports
    var t = (r[n] = { i: n, l: !1, exports: {} })
    return e[n].call(t.exports, t, t.exports, u), (t.l = !0), t.exports
  }
  ;(u.e = function(e) {
    var n = [],
      t = a[e]
    if (0 !== t)
      if (t) n.push(t[2])
      else {
        var r = new Promise(function(n, r) {
          t = a[e] = [n, r]
        })
        n.push((t[2] = r))
        var o,
          c = document.createElement('script')
        ;(c.charset = 'utf-8'),
          (c.timeout = 120),
          u.nc && c.setAttribute('nonce', u.nc),
          (c.src = (function(e) {
            return (
              u.p +
              '' +
              ({ 2: 'vendor~bootstrap', 3: 'vendor~bootstrap-grid' }[e] || e) +
              '.' +
              {
                0: 'c01e843727a49ab1c513',
                2: 'cc75796d8794107567d2',
                3: 'ab5a437c2fa5ef15d705',
                5: '0bffcc37a79e131e15ad',
                6: 'e53f7ce80f660f58423f',
                7: '9dfb5aa29ab6a6d021c5',
                8: '2eb9642bbc3d5b522b25',
                9: '73ece58e2ad77a919bb1',
                10: '2892381478b05890c352',
                11: '39169d96c031ae235383',
              }[e] +
              '.bundle.js'
            )
          })(e))
        var i = new Error()
        o = function(n) {
          ;(c.onerror = c.onload = null), clearTimeout(l)
          var t = a[e]
          if (0 !== t) {
            if (t) {
              var r = n && ('load' === n.type ? 'missing' : n.type),
                o = n && n.target && n.target.src
              ;(i.message =
                'Loading chunk ' + e + ' failed.\n(' + r + ': ' + o + ')'),
                (i.name = 'ChunkLoadError'),
                (i.type = r),
                (i.request = o),
                t[1](i)
            }
            a[e] = void 0
          }
        }
        var l = setTimeout(function() {
          o({ type: 'timeout', target: c })
        }, 12e4)
        ;(c.onerror = c.onload = o), document.head.appendChild(c)
      }
    return Promise.all(n)
  }),
    (u.m = e),
    (u.c = r),
    (u.d = function(e, n, t) {
      u.o(e, n) || Object.defineProperty(e, n, { enumerable: !0, get: t })
    }),
    (u.r = function(e) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 })
    }),
    (u.t = function(e, n) {
      if ((1 & n && (e = u(e)), 8 & n)) return e
      if (4 & n && 'object' == typeof e && e && e.__esModule) return e
      var t = Object.create(null)
      if (
        (u.r(t),
        Object.defineProperty(t, 'default', { enumerable: !0, value: e }),
        2 & n && 'string' != typeof e)
      )
        for (var r in e)
          u.d(
            t,
            r,
            function(n) {
              return e[n]
            }.bind(null, r)
          )
      return t
    }),
    (u.n = function(e) {
      var n =
        e && e.__esModule
          ? function() {
              return e.default
            }
          : function() {
              return e
            }
      return u.d(n, 'a', n), n
    }),
    (u.o = function(e, n) {
      return Object.prototype.hasOwnProperty.call(e, n)
    }),
    (u.p = '/projects/storeon-modules-example/'),
    (u.oe = function(e) {
      throw (console.error(e), e)
    })
  var c = (window.webpackJsonp = window.webpackJsonp || []),
    i = c.push.bind(c)
  ;(c.push = n), (c = c.slice())
  for (var l = 0; l < c.length; l++) n(c[l])
  var s = i
  o.push(['zfYc', 4]), t()
})({
  '9PJC': function(e, n, t) {
    'use strict'
    t.r(n),
      t.d(n, 'actions', function() {
        return x
      })
    var r = t('LYCE'),
      a = t.n(r),
      o = t('HnXd'),
      u = t.n(o),
      c = t('qjzJ'),
      i = t.n(c),
      l = t('RXMP'),
      s = t.n(l),
      f = t('fHi0'),
      d = t.n(f),
      p = t('5PDf'),
      m = t.n(p),
      v = t('OWCx'),
      h = t.n(v),
      b = t('+oHS'),
      y = t.n(b),
      g = t('04Ix'),
      M = t.n(g)
    function E(e, n) {
      var t = y()(e)
      if (h.a) {
        var r = h()(e)
        n &&
          (r = m()(r).call(r, function(n) {
            return d()(e, n).enumerable
          })),
          t.push.apply(t, r)
      }
      return t
    }
    function k(e) {
      for (var n = 1; n < arguments.length; n++) {
        var t,
          r = null != arguments[n] ? arguments[n] : {}
        if (n % 2)
          s()((t = E(Object(r), !0))).call(t, function(n) {
            M()(e, n, r[n])
          })
        else if (i.a) u()(e, i()(r))
        else {
          var o
          s()((o = E(Object(r)))).call(o, function(n) {
            a()(e, n, d()(r, n))
          })
        }
      }
      return e
    }
    var x = {
      dropStore: function() {
        return { type: 'core/drop-store' }
      },
      setUserName: function(e) {
        return { type: 'core/set-user-name', payload: e }
      },
    }
    n.default = function(e) {
      e.on('@init', function() {
        return { core: { userName: null } }
      }),
        e.on('core/drop-store', function() {
          console.log('here'), e.dispatch('@init')
        }),
        e.on('core/set-user-name', function(e, n) {
          return { core: k({}, e.core, { userName: n }) }
        })
    }
  },
  HQzF: function(e, n, t) {
    'use strict'
    t.d(n, 'a', function() {
      return j
    })
    var r = t('RXMP'),
      a = t.n(r),
      o = t('+oHS'),
      u = t.n(o),
      c = t('FLGM'),
      i = t.n(c),
      l = t('Vi3r'),
      s = t.n(l),
      f = t('o+MX'),
      d = t.n(f),
      p = t('06Pm'),
      m = t.n(p),
      v = t('kA7L'),
      h = t.n(v),
      b = t('q1tI'),
      y = t.n(b),
      g = t('we5D'),
      M = t.n(g),
      E = (t('PonS'), t('64/e')),
      k = t.n(E),
      x = t('y93t'),
      P = t.n(x),
      w = t('7raJ'),
      S = t.n(w),
      C = t('d3CS'),
      X = t.n(C),
      j = new ((function() {
        function e() {
          var n = this
          m()(this, e),
            (this.StoreProvider = function(e) {
              var t = e.children
              return y.a.createElement(k.a.Provider, { value: n.store }, t)
            }),
            (this.connect = P.a),
            (this.useStore = S.a),
            (this.withStore = function() {
              for (
                var e = arguments.length, t = new Array(e), r = 0;
                r < e;
                r++
              )
                t[r] = arguments[r]
              return function(e) {
                return n.connect.apply(n, d()(t).call(t, [e]))
              }
            }),
            (this.reducersMap = {}),
            (this.actionsMap = {}),
            (this.store = null)
        }
        return (
          h()(e, [
            {
              key: 'init',
              value: function() {
                var e,
                  n,
                  t = this
                this.store = M()(
                  d()((e = [])).call(
                    e,
                    s()(
                      i()((n = u()(this.reducersMap))).call(n, function(e) {
                        return t.reducersMap[e]
                      })
                    ),
                    [X()(u()(this.reducersMap)), !1]
                  )
                )
              },
            },
            {
              key: 'registerState',
              value: function(e, n, t) {
                ;(this.reducersMap[e] = n), (this.actionsMap[e] = t)
              },
            },
            {
              key: 'dispatch',
              value: function(e) {
                var n = e.type,
                  t = e.payload
                this.store.dispatch(n, t)
              },
            },
            {
              key: 'getActions',
              value: function(e) {
                var n,
                  t = this,
                  r = this.actionsMap[e],
                  o = {}
                return (
                  a()((n = u()(r))).call(n, function(e) {
                    o[e] = function() {
                      return t.dispatch(r[e].apply(r, arguments))
                    }
                  }),
                  o
                )
              },
            },
          ]),
          e
        )
      })())()
  },
  zfYc: function(e, n, t) {
    'use strict'
    t.r(n)
    t('pNMO'),
      t('4Brf'),
      t('tjZM'),
      t('3I1R'),
      t('7+kd'),
      t('0oug'),
      t('KhsS'),
      t('gOCb'),
      t('a57n'),
      t('GXvd'),
      t('I1Gw'),
      t('gXIK'),
      t('lEou'),
      t('gbiT'),
      t('ma9I'),
      t('qHT+'),
      t('piMb'),
      t('yyme'),
      t('TeQF'),
      t('fbCW'),
      t('x0AG'),
      t('BIHw'),
      t('XbcX'),
      t('QWBl'),
      t('pjDv'),
      t('yq1k'),
      t('yXV3'),
      t('J30X'),
      t('4mDm'),
      t('oVuX'),
      t('uqXc'),
      t('2B1R'),
      t('Xe3L'),
      t('E9XD'),
      t('9N29'),
      t('Junv'),
      t('+2oP'),
      t('Rfxz'),
      t('ToJy'),
      t('94Xl'),
      t('pDQq'),
      t('QGkA'),
      t('c9m3'),
      t('wZ/5'),
      t('gtqK'),
      t('rOQg'),
      t('tCCV'),
      t('brp2'),
      t('rMz7'),
      t('9LPj'),
      t('7+zs'),
      t('DQNa'),
      t('wLYn'),
      t('tW5y'),
      t('sMBO'),
      t('DEfu'),
      t('Tskq'),
      t('Uydy'),
      t('eajv'),
      t('n/mU'),
      t('PqOI'),
      t('QNnp'),
      t('/5zm'),
      t('CsgD'),
      t('9mRW'),
      t('QFcT'),
      t('vAFs'),
      t('a5NK'),
      t('yiG3'),
      t('kNcU'),
      t('KvGi'),
      t('AmFO'),
      t('eJiR'),
      t('I9xj'),
      t('tl/u'),
      t('qePV'),
      t('NbN+'),
      t('8AyJ'),
      t('i6QF'),
      t('kSko'),
      t('WDsR'),
      t('r/Vq'),
      t('5uH8'),
      t('w1rZ'),
      t('JevA'),
      t('toAj'),
      t('VC3L'),
      t('zKZe'),
      t('uL8W'),
      t('Eqjn'),
      t('HRxU'),
      t('eoL8'),
      t('5xtp'),
      t('T63A'),
      t('3KgV'),
      t('wfmh'),
      t('5DmW'),
      t('27RR'),
      t('cDke'),
      t('NBAS'),
      t('Kxld'),
      t('yQYn'),
      t('4h0Y'),
      t('5D5o'),
      t('tkto'),
      t('v5b1'),
      t('W/eh'),
      t('zuhW'),
      t('r5Og'),
      t('ExoC'),
      t('07d7'),
      t('B6y2'),
      t('rNhl'),
      t('4l63'),
      t('5s+n'),
      t('p532'),
      t('pv2x'),
      t('SuFq'),
      t('PzqY'),
      t('rBZX'),
      t('XUE8'),
      t('nkod'),
      t('f3jH'),
      t('x2An'),
      t('25bX'),
      t('G/JM'),
      t('1t3B'),
      t('ftMj'),
      t('i5pp'),
      t('TWNs'),
      t('rB9j'),
      t('U3f4'),
      t('JfAA'),
      t('YGK4'),
      t('9bJ7'),
      t('inlA'),
      t('9tb/'),
      t('JTJg'),
      t('PKPk'),
      t('Rm1S'),
      t('hDyC'),
      t('TZCg'),
      t('2A+d'),
      t('OM9Z'),
      t('UxlC'),
      t('hByQ'),
      t('EnZy'),
      t('LKBx'),
      t('SYor'),
      t('HiXI'),
      t('7ueG'),
      t('GKVU'),
      t('E5NM'),
      t('BNMt'),
      t('zHFu'),
      t('x83w'),
      t('l2dK'),
      t('GRPF'),
      t('xdBZ'),
      t('mRH6'),
      t('yWo2'),
      t('IxXR'),
      t('TFPT'),
      t('Zk8X'),
      t('z8NH'),
      t('SpvK'),
      t('/Yfv'),
      t('iwkZ'),
      t('FDzp'),
      t('XMab'),
      t('ilnZ'),
      t('hMMk'),
      t('+ywr'),
      t('moxL'),
      t('qXVe'),
      t('c162'),
      t('waxf'),
      t('0TkE'),
      t('Onu3'),
      t('1dYe'),
      t('IL/d'),
      t('gvgV'),
      t('6R/c'),
      t('YL0P'),
      t('X5Zq'),
      t('MoCz'),
      t('P8wP'),
      t('7JcK'),
      t('ypFw'),
      t('JaFt'),
      t('zSZm'),
      t('PF2M'),
      t('KVSy'),
      t('ZJ55'),
      t('IZzc'),
      t('Fwt+'),
      t('s5qe'),
      t('cvf0'),
      t('ENF9'),
      t('H+LF'),
      t('FZtP'),
      t('3bBZ'),
      t('Ew+T'),
      t('n5b4'),
      t('R5XZ'),
      t('Kz25'),
      t('vxnP'),
      t('mGGf')
    var r,
      a,
      o,
      u = t('a0dU'),
      c = t.n(u),
      i = t('OBge'),
      l = t.n(i),
      s = t('FLGM'),
      f = t.n(s),
      d = t('zLi2'),
      p = t.n(d),
      m = t('5PDf'),
      v = t.n(m),
      h = t('RXMP'),
      b = t.n(h),
      y = t('SPx3'),
      g = t.n(y),
      M = t('q1tI'),
      E = t.n(M),
      k = t('55Ip'),
      x = t('i8i4'),
      P = t('06Pm'),
      w = t.n(P),
      S = t('kA7L'),
      C = t.n(S),
      X = new ((function() {
        function e() {
          w()(this, e), (this.modulesMap = {})
        }
        return (
          C()(e, [
            {
              key: 'registerModule',
              value: function(e, n) {
                this.modulesMap[e] = n
              },
            },
            {
              key: 'getModulesMap',
              value: function() {
                return this.modulesMap
              },
            },
          ]),
          e
        )
      })())(),
      j = new ((function() {
        function e() {
          w()(this, e), (this.routesMap = {})
        }
        return (
          C()(e, [
            {
              key: 'registerRoutes',
              value: function(e) {
                var n =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : []
                this.routesMap[e] = n
              },
            },
            {
              key: 'getRoutesMap',
              value: function() {
                return this.routesMap
              },
            },
          ]),
          e
        )
      })())(),
      O = t('HQzF'),
      z = t('LYCE'),
      R = t.n(z),
      N = t('HnXd'),
      F = t.n(N),
      J = t('qjzJ'),
      L = t.n(J),
      q = t('fHi0'),
      T = t.n(q),
      A = t('OWCx'),
      Z = t.n(A),
      D = t('Vi3r'),
      H = t.n(D),
      I = t('04Ix'),
      K = t.n(I),
      B = t('+oHS'),
      G = t.n(B),
      Y = t('KYsz'),
      W = t.n(Y),
      Q = t('o+MX'),
      V = t.n(Q),
      U = t('3SUL'),
      _ = t.n(U),
      $ = t('eYnF'),
      ee = t.n($),
      ne = t('X5/F'),
      te = t.n(ne),
      re = t('17x9'),
      ae = t.n(re),
      oe = t('Ty5D'),
      ue = t('JUMO'),
      ce = t('7vrA'),
      ie = t('3Z9Z'),
      le = t('JI6e'),
      se = t('Mrkz'),
      fe = t('+YzT'),
      de = t('GWEY')
    function pe(e, n) {
      var t = G()(e)
      if (Z.a) {
        var r = Z()(e)
        n &&
          (r = v()(r).call(r, function(n) {
            return T()(e, n).enumerable
          })),
          t.push.apply(t, r)
      }
      return t
    }
    var me = function(e) {
        var n = e.module,
          t = E.a.lazy(
            n instanceof Function
              ? n
              : function() {
                  return n
                }
          )
        return E.a.createElement(
          M.Suspense,
          {
            fallback: E.a.createElement(ue.a, {
              variant: 'info',
              animated: !0,
              now: 100,
            }),
          },
          E.a.createElement(t, null)
        )
      },
      ve =
        Object(oe.g)(
          ((o = a = (function(e) {
            function n() {
              var e, t, r
              w()(this, n)
              for (
                var a = arguments.length, o = new Array(a), u = 0;
                u < a;
                u++
              )
                o[u] = arguments[u]
              return (
                ((r = _()(
                  this,
                  (e = ee()(n)).call.apply(e, V()((t = [this])).call(t, o))
                )).renderMenu = function() {
                  var e,
                    n,
                    t = X.getModulesMap(),
                    r = j.getRoutesMap()
                  return [
                    W()(
                      (e = v()((n = G()(r))).call(n, function(e) {
                        return 'core' !== e
                      }))
                    ).call(
                      e,
                      function(e, n) {
                        var a = r[n]
                        return (
                          e.push(
                            E.a.createElement(
                              de.a,
                              {
                                key: t[n].name,
                                title: t[n].fullName,
                                id: 'menu-module-'.concat(n),
                              },
                              f()(a).call(a, function(e) {
                                var t
                                return E.a.createElement(
                                  de.a.Item,
                                  {
                                    key: e.key,
                                    href: V()((t = '#/'.concat(n))).call(
                                      t,
                                      e.route
                                    ),
                                  },
                                  e.title
                                )
                              })
                            )
                          ),
                          e
                        )
                      },
                      []
                    ),
                  ]
                }),
                (r.renderRoutes = function() {
                  var e,
                    n = j.getRoutesMap()
                  return [
                    W()((e = G()(n))).call(
                      e,
                      function(e, t) {
                        var r,
                          a,
                          o = f()((r = n[t])).call(r, function(e) {
                            var n, r
                            return (function(e) {
                              for (var n = 1; n < arguments.length; n++) {
                                var t,
                                  r = null != arguments[n] ? arguments[n] : {}
                                if (n % 2)
                                  b()((t = pe(Object(r), !0))).call(t, function(
                                    n
                                  ) {
                                    K()(e, n, r[n])
                                  })
                                else if (L.a) F()(e, L()(r))
                                else {
                                  var a
                                  b()((a = pe(Object(r)))).call(a, function(n) {
                                    R()(e, n, T()(r, n))
                                  })
                                }
                              }
                              return e
                            })(
                              {},
                              e,
                              {},
                              {
                                route: e.isSystem
                                  ? V()(
                                      (n = ''.concat(
                                        'core' === t ? '' : '/' + t
                                      ))
                                    ).call(n, e.route)
                                  : V()((r = '/'.concat(t))).call(r, e.route),
                              }
                            )
                          })
                        return V()((a = [])).call(
                          a,
                          H()(e),
                          H()(
                            f()(o).call(o, function(e) {
                              if (e.isRedirect) {
                                var n = 'core' === t ? '' : '/' + t
                                return E.a.createElement(oe.a, {
                                  key: e.key,
                                  exact: e.exact,
                                  from: n + e.from,
                                  to: n + e.to,
                                })
                              }
                              return E.a.createElement(oe.b, {
                                exact: !e.noExact,
                                key: e.key,
                                path: e.route,
                                component: function() {
                                  return E.a.createElement(me, {
                                    module: e.component,
                                  })
                                },
                              })
                            })
                          )
                        )
                      },
                      []
                    ),
                  ]
                }),
                r
              )
            }
            return (
              te()(n, e),
              C()(n, [
                {
                  key: 'render',
                  value: function() {
                    return E.a.createElement(
                      ce.a,
                      { fluid: !0, className: 'p-0' },
                      E.a.createElement(
                        ie.a,
                        { className: 'mb-3' },
                        E.a.createElement(
                          le.a,
                          null,
                          E.a.createElement(
                            se.a,
                            { bg: 'dark', variant: 'dark', expand: 'lg' },
                            E.a.createElement(
                              se.a.Brand,
                              { href: '#dashboard' },
                              E.a.createElement(
                                'span',
                                { className: 'd-sm-inline-block d-none' },
                                'Storeon module example'
                              ),
                              E.a.createElement(
                                'span',
                                { className: 'd-sm-none d-inline-block' },
                                'Storeon example'
                              )
                            ),
                            E.a.createElement(se.a.Toggle, {
                              'aria-controls': 'basic-navbar-nav',
                            }),
                            E.a.createElement(
                              se.a.Collapse,
                              { id: 'basic-navbar-nav' },
                              E.a.createElement(
                                fe.a,
                                { className: 'mr-auto' },
                                E.a.createElement(
                                  fe.a.Link,
                                  { href: '#/dashboard' },
                                  'Dashboard'
                                ),
                                this.renderMenu()
                              )
                            )
                          )
                        )
                      ),
                      E.a.createElement(
                        ce.a,
                        { fluid: !0 },
                        E.a.createElement(
                          oe.d,
                          null,
                          E.a.createElement(oe.a, {
                            exact: !0,
                            from: '/',
                            to: '/dashboard',
                          }),
                          this.renderRoutes(),
                          E.a.createElement(oe.b, {
                            exact: !0,
                            component: function() {
                              return E.a.createElement('div', null, 'not found')
                            },
                          })
                        )
                      )
                    )
                  },
                },
              ]),
              n
            )
          })(M.Component)),
          (a.propTypes = { history: ae.a.shape(), t: ae.a.func }),
          (r = o))
        ) || r,
      he = t('9PJC'),
      be = O.a.StoreProvider
    function ye() {
      return (ye = g()(
        c.a.mark(function e() {
          var n, r, a, o, u
          return c.a.wrap(function(e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return (
                    (e.t0 = f.a),
                    (e.next = 3),
                    l.a.all([
                      t.e(11).then(t.bind(null, 'shNG')),
                      t.e(5).then(t.bind(null, '0zPK')),
                      t.e(2).then(t.t.bind(null, 'q4sD', 7)),
                      t.e(3).then(t.t.bind(null, 'L4hS', 7)),
                    ])
                  )
                case 3:
                  ;(e.t1 = n = e.sent),
                    (e.t2 = n),
                    (e.t3 = function(e) {
                      return e.default
                    }),
                    (r = (0, e.t0)(e.t1).call(e.t2, e.t3)),
                    (a = p()(r, 2)),
                    (o = a[0]),
                    (u = a[1]),
                    ge(o),
                    Me(o, u),
                    Ee(o, u),
                    Object(x.render)(
                      E.a.createElement(
                        k.a,
                        null,
                        E.a.createElement(be, null, E.a.createElement(ve, null))
                      ),
                      document.querySelector('[data-root]')
                    )
                case 14:
                case 'end':
                  return e.stop()
              }
          }, e)
        })
      )).apply(this, arguments)
    }
    function ge(e) {
      var n
      b()(
        (n = v()(e).call(e, function(e) {
          return e.mainConfig
        }))
      ).call(n, function(e) {
        X.registerModule(e.mainConfig.name, e.mainConfig)
      })
    }
    function Me(e, n) {
      var t
      b()(
        (t = v()(e).call(e, function(e) {
          return e.mainConfig
        }))
      ).call(t, function(e) {
        j.registerRoutes(e.mainConfig.name, n[e.mainConfig.name].routes.default)
      })
    }
    function Ee(e, n) {
      var t
      b()(
        (t = v()(e).call(e, function(e) {
          return e.mainConfig && e.stateImportPath
        }))
      ).call(t, function(e) {
        O.a.registerState(
          e.mainConfig.name,
          n[e.mainConfig.name].state.default,
          n[e.mainConfig.name].state.actions
        )
      })
      var r = he.actions
      O.a.registerState('core', he.default, r), O.a.init()
    }
    !(function() {
      ye.apply(this, arguments)
    })()
  },
})
