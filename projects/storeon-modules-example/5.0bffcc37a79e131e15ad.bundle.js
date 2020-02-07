;(window.webpackJsonp = window.webpackJsonp || []).push([
  [5],
  {
    '/FZm': function(n, e, t) {
      n.exports = t('Kxu3')
    },
    '0zPK': function(n, e, t) {
      'use strict'
      t.r(e),
        (e.default = {
          core: { routes: t('e3fY'), state: t('9PJC') },
          income: { routes: t('Th/v'), state: t('ug+Y') },
          spending: { routes: t('edEv'), state: t('wKj5') },
        })
    },
    '4b23': function(n, e, t) {
      var i = self.crypto || self.msCrypto
      n.exports = function(n) {
        n = n || 21
        for (var e = '', t = i.getRandomValues(new Uint8Array(n)); n--; )
          e += 'Uint8ArdomValuesObj012345679BCDEFGHIJKLMNPQRSTWXYZ_cfghkpqvwxyz-'[
            63 & t[n]
          ]
        return e
      }
    },
    'BP/7': function(n, e, t) {
      var i = t('FRmQ'),
        o = Array.prototype
      n.exports = function(n) {
        var e = n.find
        return n === o || (n instanceof Array && e === o.find) ? i : e
      }
    },
    FRmQ: function(n, e, t) {
      t('vfRR')
      var i = t('oWnS')
      n.exports = i('Array').find
    },
    Kxu3: function(n, e, t) {
      var i = t('BP/7')
      n.exports = i
    },
    'Th/v': function(n, e, t) {
      'use strict'
      t.r(e),
        (e.default = [
          {
            key: 'income-index-redirect',
            isRedirect: !0,
            exact: !0,
            from: '/',
            to: '/welcome',
          },
          {
            key: 'welcome page Income',
            title: 'Welcome page',
            route: '/welcome',
            component: function() {
              return t.e(7).then(t.bind(null, 'EdMw'))
            },
          },
          {
            key: 'list page Income',
            title: 'List',
            route: '/list',
            component: function() {
              return Promise.all([t.e(0), t.e(9)]).then(t.bind(null, 'C17G'))
            },
          },
        ])
    },
    e3fY: function(n, e, t) {
      'use strict'
      t.r(e),
        (e.default = [
          {
            key: 'dashboard',
            title: 'dashboard',
            route: '/dashboard',
            isSystem: !0,
            component: function() {
              return t.e(6).then(t.bind(null, '1Bf2'))
            },
          },
        ])
    },
    edEv: function(n, e, t) {
      'use strict'
      t.r(e),
        (e.default = [
          {
            key: 'spending-index-redirect',
            isRedirect: !0,
            exact: !0,
            from: '/',
            to: '/welcome',
          },
          {
            key: 'welcome page Spending',
            title: 'Welcome page',
            route: '/welcome',
            component: function() {
              return t.e(8).then(t.bind(null, 'ZoaA'))
            },
          },
          {
            key: 'list page Spending',
            title: 'List',
            route: '/list',
            component: function() {
              return Promise.all([t.e(0), t.e(10)]).then(t.bind(null, 'jDM8'))
            },
          },
        ])
    },
    'ug+Y': function(n, e, t) {
      'use strict'
      t.r(e),
        t.d(e, 'actions', function() {
          return H
        })
      var i = t('LYCE'),
        o = t.n(i),
        r = t('HnXd'),
        u = t.n(r),
        a = t('qjzJ'),
        c = t.n(a),
        l = t('RXMP'),
        f = t.n(l),
        s = t('fHi0'),
        d = t.n(s),
        m = t('OWCx'),
        p = t.n(m),
        v = t('+oHS'),
        y = t.n(v),
        g = t('5PDf'),
        b = t.n(g),
        h = t('/FZm'),
        w = t.n(h),
        x = t('o+MX'),
        R = t.n(x),
        P = t('Vi3r'),
        j = t.n(P),
        k = t('04Ix'),
        A = t.n(k),
        I = t('4b23'),
        C = t.n(I)
      function S(n, e) {
        var t = y()(n)
        if (p.a) {
          var i = p()(n)
          e &&
            (i = b()(i).call(i, function(e) {
              return d()(n, e).enumerable
            })),
            t.push.apply(t, i)
        }
        return t
      }
      function E(n) {
        for (var e = 1; e < arguments.length; e++) {
          var t,
            i = null != arguments[e] ? arguments[e] : {}
          if (e % 2)
            f()((t = S(Object(i), !0))).call(t, function(e) {
              A()(n, e, i[e])
            })
          else if (c.a) u()(n, c()(i))
          else {
            var r
            f()((r = S(Object(i)))).call(r, function(e) {
              o()(n, e, d()(i, e))
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
      e.default = function(n) {
        n.on('@init', function() {
          return { income: { total: 0, items: [] } }
        }),
          n.on('income/add-item', function(n, e) {
            var t,
              i = n.income
            return {
              income: E({}, i, {
                total: i.total + e.amount,
                items: R()((t = [])).call(t, j()(i.items), [
                  E({ id: C()() }, e),
                ]),
              }),
            }
          }),
          n.on('income/remove-item', function(n, e) {
            var t,
              i,
              o = n.income,
              r = w()((t = o.items)).call(t, function(n) {
                return n.id === e
              })
            return {
              income: E({}, o, {
                total: o.total - r.amount,
                items: b()((i = o.items)).call(i, function(n) {
                  return n.id !== e
                }),
              }),
            }
          })
      }
    },
    vfRR: function(n, e, t) {
      'use strict'
      var i = t('pevS'),
        o = t('3uAa').find,
        r = t('xE4W'),
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
    wKj5: function(n, e, t) {
      'use strict'
      t.r(e),
        t.d(e, 'actions', function() {
          return H
        })
      var i = t('LYCE'),
        o = t.n(i),
        r = t('HnXd'),
        u = t.n(r),
        a = t('qjzJ'),
        c = t.n(a),
        l = t('RXMP'),
        f = t.n(l),
        s = t('fHi0'),
        d = t.n(s),
        m = t('OWCx'),
        p = t.n(m),
        v = t('+oHS'),
        y = t.n(v),
        g = t('5PDf'),
        b = t.n(g),
        h = t('/FZm'),
        w = t.n(h),
        x = t('o+MX'),
        R = t.n(x),
        P = t('Vi3r'),
        j = t.n(P),
        k = t('04Ix'),
        A = t.n(k),
        I = t('4b23'),
        C = t.n(I)
      function S(n, e) {
        var t = y()(n)
        if (p.a) {
          var i = p()(n)
          e &&
            (i = b()(i).call(i, function(e) {
              return d()(n, e).enumerable
            })),
            t.push.apply(t, i)
        }
        return t
      }
      function E(n) {
        for (var e = 1; e < arguments.length; e++) {
          var t,
            i = null != arguments[e] ? arguments[e] : {}
          if (e % 2)
            f()((t = S(Object(i), !0))).call(t, function(e) {
              A()(n, e, i[e])
            })
          else if (c.a) u()(n, c()(i))
          else {
            var r
            f()((r = S(Object(i)))).call(r, function(e) {
              o()(n, e, d()(i, e))
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
      e.default = function(n) {
        n.on('@init', function() {
          return { spending: { total: 0, items: [] } }
        }),
          n.on('spending/add-item', function(n, e) {
            var t,
              i = n.spending
            return {
              spending: E({}, i, {
                total: i.total + e.amount,
                items: R()((t = [])).call(t, j()(i.items), [
                  E({ id: C()() }, e),
                ]),
              }),
            }
          }),
          n.on('spending/remove-item', function(n, e) {
            var t,
              i,
              o = n.spending,
              r = w()((t = o.items)).call(t, function(n) {
                return n.id === e
              })
            return {
              spending: E({}, o, {
                total: o.total - r.amount,
                items: b()((i = o.items)).call(i, function(n) {
                  return n.id !== e
                }),
              }),
            }
          })
      }
    },
  },
])
