;(window.webpackJsonp = window.webpackJsonp || []).push([
  [3],
  {
    '/FZm': function(n, t, e) {
      n.exports = e('Kxu3')
    },
    '0zPK': function(n, t, e) {
      'use strict'
      e.r(t),
        (t.default = {
          core: { routes: e('e3fY'), state: e('9PJC') },
          income: { routes: e('Th/v'), state: e('ug+Y') },
          spending: { routes: e('edEv'), state: e('wKj5') },
        })
    },
    '4b23': function(n, t, e) {
      var i = self.crypto || self.msCrypto
      n.exports = function(n) {
        n = n || 21
        for (var t = '', e = i.getRandomValues(new Uint8Array(n)); n--; )
          t += 'Uint8ArdomValuesObj012345679BCDEFGHIJKLMNPQRSTWXYZ_cfghkpqvwxyz-'[
            63 & e[n]
          ]
        return t
      }
    },
    'BP/7': function(n, t, e) {
      var i = e('FRmQ'),
        o = Array.prototype
      n.exports = function(n) {
        var t = n.find
        return n === o || (n instanceof Array && t === o.find) ? i : t
      }
    },
    FRmQ: function(n, t, e) {
      e('vfRR')
      var i = e('oWnS')
      n.exports = i('Array').find
    },
    Kxu3: function(n, t, e) {
      var i = e('BP/7')
      n.exports = i
    },
    'Th/v': function(n, t, e) {
      'use strict'
      e.r(t),
        (t.default = [
          {
            key: 'welcome page Income',
            title: 'Welcome page',
            route: '/welcome',
            component: function() {
              return e.e(5).then(e.bind(null, 'EdMw'))
            },
          },
          {
            key: 'list page Income',
            title: 'List',
            route: '/list',
            component: function() {
              return Promise.all([e.e(0), e.e(7)]).then(e.bind(null, 'C17G'))
            },
          },
        ])
    },
    e3fY: function(n, t, e) {
      'use strict'
      e.r(t),
        (t.default = [
          {
            key: 'dashboard',
            title: 'dashboard',
            route: '/dashboard',
            isSystem: !0,
            component: function() {
              return e.e(4).then(e.bind(null, '1Bf2'))
            },
          },
        ])
    },
    edEv: function(n, t, e) {
      'use strict'
      e.r(t),
        (t.default = [
          {
            key: 'welcome page Spending',
            title: 'Welcome page',
            route: '/welcome',
            component: function() {
              return e.e(6).then(e.bind(null, 'ZoaA'))
            },
          },
          {
            key: 'list page Spending',
            title: 'List',
            route: '/list',
            component: function() {
              return Promise.all([e.e(0), e.e(8)]).then(e.bind(null, 'jDM8'))
            },
          },
        ])
    },
    'ug+Y': function(n, t, e) {
      'use strict'
      e.r(t),
        e.d(t, 'actions', function() {
          return H
        })
      var i = e('LYCE'),
        o = e.n(i),
        r = e('HnXd'),
        u = e.n(r),
        a = e('qjzJ'),
        c = e.n(a),
        l = e('RXMP'),
        f = e.n(l),
        s = e('fHi0'),
        d = e.n(s),
        m = e('OWCx'),
        p = e.n(m),
        v = e('+oHS'),
        g = e.n(v),
        y = e('5PDf'),
        b = e.n(y),
        h = e('/FZm'),
        w = e.n(h),
        x = e('o+MX'),
        P = e.n(x),
        j = e('Vi3r'),
        R = e.n(j),
        A = e('04Ix'),
        I = e.n(A),
        k = e('4b23'),
        C = e.n(k)
      function S(n, t) {
        var e = g()(n)
        if (p.a) {
          var i = p()(n)
          t &&
            (i = b()(i).call(i, function(t) {
              return d()(n, t).enumerable
            })),
            e.push.apply(e, i)
        }
        return e
      }
      function E(n) {
        for (var t = 1; t < arguments.length; t++) {
          var e,
            i = null != arguments[t] ? arguments[t] : {}
          if (t % 2)
            f()((e = S(Object(i), !0))).call(e, function(t) {
              I()(n, t, i[t])
            })
          else if (c.a) u()(n, c()(i))
          else {
            var r
            f()((r = S(Object(i)))).call(r, function(t) {
              o()(n, t, d()(i, t))
            })
          }
        }
        return n
      }
      var H = {
        addItem: function(n) {
          return { type: 'income/add-item', payload: n }
        },
        removeItem: function(n) {
          return { type: 'income/remove-item', payload: n }
        },
      }
      t.default = function(n) {
        n.on('@init', function() {
          return { income: { total: 0, items: [] } }
        }),
          n.on('income/add-item', function(n, t) {
            var e,
              i = n.income
            return {
              income: E({}, i, {
                total: i.total + t.amount,
                items: P()((e = [])).call(e, R()(i.items), [
                  E({ id: C()() }, t),
                ]),
              }),
            }
          }),
          n.on('income/remove-item', function(n, t) {
            var e,
              i,
              o = n.income,
              r = w()((e = o.items)).call(e, function(n) {
                return n.id === t
              })
            return {
              income: E({}, o, {
                total: o.total - r.amount,
                items: b()((i = o.items)).call(i, function(n) {
                  return n.id !== t
                }),
              }),
            }
          })
      }
    },
    vfRR: function(n, t, e) {
      'use strict'
      var i = e('pevS'),
        o = e('3uAa').find,
        r = e('xE4W'),
        u = !0
      'find' in [] &&
        Array(1).find(function() {
          u = !1
        }),
        i(
          { target: 'Array', proto: !0, forced: u },
          {
            find: function(n) {
              return o(this, n, arguments.length > 1 ? arguments[1] : void 0)
            },
          }
        ),
        r('find')
    },
    wKj5: function(n, t, e) {
      'use strict'
      e.r(t),
        e.d(t, 'actions', function() {
          return H
        })
      var i = e('LYCE'),
        o = e.n(i),
        r = e('HnXd'),
        u = e.n(r),
        a = e('qjzJ'),
        c = e.n(a),
        l = e('RXMP'),
        f = e.n(l),
        s = e('fHi0'),
        d = e.n(s),
        m = e('OWCx'),
        p = e.n(m),
        v = e('+oHS'),
        g = e.n(v),
        y = e('5PDf'),
        b = e.n(y),
        h = e('/FZm'),
        w = e.n(h),
        x = e('o+MX'),
        P = e.n(x),
        j = e('Vi3r'),
        R = e.n(j),
        A = e('04Ix'),
        I = e.n(A),
        k = e('4b23'),
        C = e.n(k)
      function S(n, t) {
        var e = g()(n)
        if (p.a) {
          var i = p()(n)
          t &&
            (i = b()(i).call(i, function(t) {
              return d()(n, t).enumerable
            })),
            e.push.apply(e, i)
        }
        return e
      }
      function E(n) {
        for (var t = 1; t < arguments.length; t++) {
          var e,
            i = null != arguments[t] ? arguments[t] : {}
          if (t % 2)
            f()((e = S(Object(i), !0))).call(e, function(t) {
              I()(n, t, i[t])
            })
          else if (c.a) u()(n, c()(i))
          else {
            var r
            f()((r = S(Object(i)))).call(r, function(t) {
              o()(n, t, d()(i, t))
            })
          }
        }
        return n
      }
      var H = {
        addItem: function(n) {
          return { type: 'spending/add-item', payload: n }
        },
        removeItem: function(n) {
          return { type: 'spending/remove-item', payload: n }
        },
      }
      t.default = function(n) {
        n.on('@init', function() {
          return { spending: { total: 0, items: [] } }
        }),
          n.on('spending/add-item', function(n, t) {
            var e,
              i = n.spending
            return {
              spending: E({}, i, {
                total: i.total + t.amount,
                items: P()((e = [])).call(e, R()(i.items), [
                  E({ id: C()() }, t),
                ]),
              }),
            }
          }),
          n.on('spending/remove-item', function(n, t) {
            var e,
              i,
              o = n.spending,
              r = w()((e = o.items)).call(e, function(n) {
                return n.id === t
              })
            return {
              spending: E({}, o, {
                total: o.total - r.amount,
                items: b()((i = o.items)).call(i, function(n) {
                  return n.id !== t
                }),
              }),
            }
          })
      }
    },
  },
])
