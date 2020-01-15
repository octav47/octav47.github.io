;(window.webpackJsonp = window.webpackJsonp || []).push([
  [7],
  {
    C17G: function(e, t, a) {
      'use strict'
      a.r(t)
      var n = a('zLi2'),
        l = a.n(n),
        r = a('q1tI'),
        c = a.n(r),
        u = a('55Ip'),
        m = a('3Z9Z'),
        o = a('JI6e'),
        i = a('TUci'),
        s = a('HQzF'),
        E = a('LYCE'),
        d = a.n(E),
        p = a('HnXd'),
        f = a.n(p),
        v = a('qjzJ'),
        h = a.n(v),
        b = a('RXMP'),
        g = a.n(b),
        C = a('fHi0'),
        w = a.n(C),
        y = a('5PDf'),
        I = a.n(y),
        A = a('OWCx'),
        S = a.n(A),
        j = a('+oHS'),
        H = a.n(j),
        T = a('FLGM'),
        k = a.n(T),
        J = a('04Ix'),
        O = a.n(J),
        P = a('MBJH'),
        x = a('cWnB'),
        z = a('zM5D'),
        D = a('zUrK'),
        F = a('jDKy')
      function N(e, t) {
        var a = H()(e)
        if (S.a) {
          var n = S()(e)
          t &&
            (n = I()(n).call(n, function(t) {
              return w()(e, t).enumerable
            })),
            a.push.apply(a, n)
        }
        return a
      }
      function B(e) {
        for (var t = 1; t < arguments.length; t++) {
          var a,
            n = null != arguments[t] ? arguments[t] : {}
          if (t % 2)
            g()((a = N(Object(n), !0))).call(a, function(t) {
              O()(e, t, n[t])
            })
          else if (h.a) f()(e, h()(n))
          else {
            var l
            g()((l = N(Object(n)))).call(l, function(t) {
              d()(e, t, w()(n, t))
            })
          }
        }
        return e
      }
      var M = s.a.useStore,
        U = function() {
          var e = Object(r.useState)(!1),
            t = l()(e, 2),
            a = t[0],
            n = t[1],
            u = Object(r.useState)({ purpose: '', amount: 0 }),
            i = l()(u, 2),
            E = i[0],
            d = i[1],
            p = M('income').income,
            f = s.a.getActions('income'),
            v = f.addItem,
            h = f.removeItem,
            b = p.items
          return c.a.createElement(
            c.a.Fragment,
            null,
            a &&
              c.a.createElement(
                z.a,
                {
                  show: !0,
                  onHide: function() {
                    d({ purpose: '', amount: 0 }), n(!1)
                  },
                },
                c.a.createElement(
                  z.a.Header,
                  { closeButton: !0 },
                  c.a.createElement(z.a.Title, null, 'Add item')
                ),
                c.a.createElement(
                  z.a.Body,
                  null,
                  c.a.createElement(
                    D.a,
                    { className: 'mb-3' },
                    c.a.createElement(
                      D.a.Prepend,
                      null,
                      c.a.createElement(D.a.Text, null, 'Purpose')
                    ),
                    c.a.createElement(F.a, {
                      onChange: function(e) {
                        return d(B({}, E, { purpose: e.target.value }))
                      },
                      value: E.purpose,
                    })
                  ),
                  c.a.createElement(
                    D.a,
                    { className: 'mb-3' },
                    c.a.createElement(
                      D.a.Prepend,
                      null,
                      c.a.createElement(D.a.Text, null, '$')
                    ),
                    c.a.createElement(F.a, {
                      type: 'number',
                      onChange: function(e) {
                        return d(B({}, E, { amount: +e.target.value }))
                      },
                      value: E.amount,
                    })
                  )
                ),
                c.a.createElement(
                  z.a.Footer,
                  null,
                  c.a.createElement(
                    x.a,
                    {
                      variant: 'success',
                      onClick: function() {
                        d({ purpose: '', amount: 0 }),
                          v(B({ date: new Date() }, E)),
                          n(!1)
                      },
                    },
                    'Add'
                  ),
                  c.a.createElement(
                    x.a,
                    {
                      variant: 'light',
                      onClick: function() {
                        return n(!1)
                      },
                    },
                    'Close'
                  )
                )
              ),
            c.a.createElement(
              m.a,
              null,
              c.a.createElement(
                o.a,
                null,
                c.a.createElement(
                  x.a,
                  {
                    variant: 'success',
                    onClick: function() {
                      return n(!0)
                    },
                  },
                  'Add'
                )
              )
            ),
            c.a.createElement(
              m.a,
              null,
              c.a.createElement(
                o.a,
                null,
                c.a.createElement(
                  P.a,
                  { responsive: !0 },
                  c.a.createElement(
                    'thead',
                    null,
                    c.a.createElement(
                      'tr',
                      null,
                      c.a.createElement('th', null, 'Date'),
                      c.a.createElement('th', null, 'Purpose'),
                      c.a.createElement('th', null, 'Amount'),
                      c.a.createElement('th', null)
                    )
                  ),
                  c.a.createElement(
                    'tfoot',
                    null,
                    c.a.createElement(
                      'tr',
                      null,
                      c.a.createElement(
                        'td',
                        { colSpan: 3, className: 'text-right' },
                        'Total: ',
                        p.total
                      )
                    )
                  ),
                  c.a.createElement(
                    'tbody',
                    null,
                    k()(b).call(b, function(e) {
                      return c.a.createElement(
                        'tr',
                        null,
                        c.a.createElement('td', null, e.date.toString()),
                        c.a.createElement('td', null, e.purpose),
                        c.a.createElement('td', null, e.amount),
                        c.a.createElement(
                          'td',
                          null,
                          c.a.createElement(
                            x.a,
                            {
                              variant: 'danger',
                              onClick: function() {
                                return h(e.id)
                              },
                            },
                            c.a.createElement(
                              'span',
                              { 'aria-hidden': 'true' },
                              '×'
                            )
                          )
                        )
                      )
                    })
                  )
                )
              )
            )
          )
        },
        Z = a('YaAy'),
        q = s.a.useStore
      t.default = function() {
        var e = Object(r.useState)(null),
          t = l()(e, 2),
          a = (t[0], t[1], q('core', 'income')),
          n = a.core
        a.income, s.a.getActions('core').setUserName
        return c.a.createElement(
          c.a.Fragment,
          null,
          c.a.createElement(
            m.a,
            null,
            c.a.createElement(
              o.a,
              null,
              !n.userName &&
                c.a.createElement(
                  i.a,
                  { variant: 'warning' },
                  'Visit ',
                  c.a.createElement(u.b, { to: '/dashboard' }, 'dashboard'),
                  ' to set your name'
                )
            )
          ),
          c.a.createElement(U, null),
          c.a.createElement(Z.a, null)
        )
      }
    },
    YaAy: function(e, t, a) {
      'use strict'
      var n = a('q1tI'),
        l = a.n(n),
        r = a('JI6e'),
        c = a('TUci'),
        u = a('3Z9Z')
      t.a = function() {
        return l.a.createElement(
          u.a,
          null,
          l.a.createElement(
            r.a,
            null,
            l.a.createElement(
              c.a,
              { variant: 'primary' },
              'This page is rendered inside the Income module'
            )
          )
        )
      }
    },
  },
])
