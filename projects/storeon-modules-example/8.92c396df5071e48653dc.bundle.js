;(window.webpackJsonp = window.webpackJsonp || []).push([
  [8],
  {
    '1MJ/': function(e, t, a) {
      'use strict'
      var n = a('q1tI'),
        l = a.n(n),
        r = a('JI6e'),
        u = a('TUci'),
        c = a('3Z9Z')
      t.a = function() {
        return l.a.createElement(
          c.a,
          null,
          l.a.createElement(
            r.a,
            null,
            l.a.createElement(
              u.a,
              { variant: 'primary' },
              'This page is rendered inside the Spending module'
            )
          )
        )
      }
    },
    jDM8: function(e, t, a) {
      'use strict'
      a.r(t)
      var n = a('zLi2'),
        l = a.n(n),
        r = a('q1tI'),
        u = a.n(r),
        c = a('55Ip'),
        m = a('3Z9Z'),
        o = a('JI6e'),
        i = a('TUci'),
        s = a('HQzF'),
        E = a('LYCE'),
        d = a.n(E),
        p = a('HnXd'),
        f = a.n(p),
        v = a('qjzJ'),
        g = a.n(v),
        h = a('RXMP'),
        b = a.n(h),
        w = a('fHi0'),
        C = a.n(w),
        S = a('5PDf'),
        j = a.n(S),
        I = a('OWCx'),
        J = a.n(I),
        y = a('+oHS'),
        H = a.n(y),
        M = a('FLGM'),
        T = a.n(M),
        k = a('04Ix'),
        A = a.n(k),
        D = a('MBJH'),
        O = a('cWnB'),
        P = a('zM5D'),
        x = a('zUrK'),
        z = a('jDKy')
      function F(e, t) {
        var a = H()(e)
        if (J.a) {
          var n = J()(e)
          t &&
            (n = j()(n).call(n, function(t) {
              return C()(e, t).enumerable
            })),
            a.push.apply(a, n)
        }
        return a
      }
      function N(e) {
        for (var t = 1; t < arguments.length; t++) {
          var a,
            n = null != arguments[t] ? arguments[t] : {}
          if (t % 2)
            b()((a = F(Object(n), !0))).call(a, function(t) {
              A()(e, t, n[t])
            })
          else if (g.a) f()(e, g()(n))
          else {
            var l
            b()((l = F(Object(n)))).call(l, function(t) {
              d()(e, t, C()(n, t))
            })
          }
        }
        return e
      }
      var B = s.a.useStore,
        U = function() {
          var e = Object(r.useState)(!1),
            t = l()(e, 2),
            a = t[0],
            n = t[1],
            c = Object(r.useState)({ purpose: '', amount: 0 }),
            i = l()(c, 2),
            E = i[0],
            d = i[1],
            p = B('spending').spending,
            f = s.a.getActions('spending'),
            v = f.addItem,
            g = f.removeItem,
            h = p.items
          return u.a.createElement(
            u.a.Fragment,
            null,
            a &&
              u.a.createElement(
                P.a,
                {
                  show: !0,
                  onHide: function() {
                    d({ purpose: '', amount: 0 }), n(!1)
                  },
                },
                u.a.createElement(
                  P.a.Header,
                  { closeButton: !0 },
                  u.a.createElement(P.a.Title, null, 'Add item')
                ),
                u.a.createElement(
                  P.a.Body,
                  null,
                  u.a.createElement(
                    x.a,
                    { className: 'mb-3' },
                    u.a.createElement(
                      x.a.Prepend,
                      null,
                      u.a.createElement(x.a.Text, null, 'Purpose')
                    ),
                    u.a.createElement(z.a, {
                      onChange: function(e) {
                        return d(N({}, E, { purpose: e.target.value }))
                      },
                      value: E.purpose,
                    })
                  ),
                  u.a.createElement(
                    x.a,
                    { className: 'mb-3' },
                    u.a.createElement(
                      x.a.Prepend,
                      null,
                      u.a.createElement(x.a.Text, null, '$')
                    ),
                    u.a.createElement(z.a, {
                      type: 'number',
                      onChange: function(e) {
                        return d(N({}, E, { amount: +e.target.value }))
                      },
                      value: E.amount,
                    })
                  )
                ),
                u.a.createElement(
                  P.a.Footer,
                  null,
                  u.a.createElement(
                    O.a,
                    {
                      variant: 'success',
                      onClick: function() {
                        d({ purpose: '', amount: 0 }),
                          v(N({ date: new Date() }, E)),
                          n(!1)
                      },
                    },
                    'Add'
                  ),
                  u.a.createElement(
                    O.a,
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
            u.a.createElement(
              m.a,
              null,
              u.a.createElement(
                o.a,
                null,
                u.a.createElement(
                  O.a,
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
            u.a.createElement(
              m.a,
              null,
              u.a.createElement(
                o.a,
                null,
                u.a.createElement(
                  D.a,
                  { responsive: !0 },
                  u.a.createElement(
                    'thead',
                    null,
                    u.a.createElement(
                      'tr',
                      null,
                      u.a.createElement('th', null, 'Date'),
                      u.a.createElement('th', null, 'Purpose'),
                      u.a.createElement('th', null, 'Amount'),
                      u.a.createElement('th', null)
                    )
                  ),
                  u.a.createElement(
                    'tfoot',
                    null,
                    u.a.createElement(
                      'tr',
                      null,
                      u.a.createElement(
                        'td',
                        { colSpan: 3, className: 'text-right' },
                        'Total: ',
                        p.total
                      )
                    )
                  ),
                  u.a.createElement(
                    'tbody',
                    null,
                    T()(h).call(h, function(e) {
                      return u.a.createElement(
                        'tr',
                        null,
                        u.a.createElement('td', null, e.date.toString()),
                        u.a.createElement('td', null, e.purpose),
                        u.a.createElement('td', null, e.amount),
                        u.a.createElement(
                          'td',
                          null,
                          u.a.createElement(
                            O.a,
                            {
                              variant: 'danger',
                              onClick: function() {
                                return g(e.id)
                              },
                            },
                            u.a.createElement(
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
        Z = a('1MJ/'),
        q = s.a.useStore
      t.default = function() {
        var e = Object(r.useState)(null),
          t = l()(e, 2),
          a = (t[0], t[1], q('core', 'spending')),
          n = a.core
        a.spending, s.a.getActions('core').setUserName
        return u.a.createElement(
          u.a.Fragment,
          null,
          u.a.createElement(
            m.a,
            null,
            u.a.createElement(
              o.a,
              null,
              !n.userName &&
                u.a.createElement(
                  i.a,
                  { variant: 'warning' },
                  'Visit ',
                  u.a.createElement(c.b, { to: '/dashboard' }, 'dashboard'),
                  ' to set your name'
                )
            )
          ),
          u.a.createElement(U, null),
          u.a.createElement(Z.a, null)
        )
      }
    },
  },
])
