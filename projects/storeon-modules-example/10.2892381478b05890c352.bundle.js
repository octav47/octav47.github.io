;(window.webpackJsonp = window.webpackJsonp || []).push([
  [10],
  {
    '/WPn': function(e, t, a) {
      'use strict'
      var n = a('q1tI'),
        r = a.n(n),
        l = a('JI6e'),
        u = a('TUci'),
        c = a('3Z9Z')
      t.a = function(e) {
        var t = e.children
        return r.a.createElement(
          c.a,
          null,
          r.a.createElement(
            l.a,
            null,
            r.a.createElement(u.a, { variant: 'primary' }, t)
          )
        )
      }
    },
    '/khs': function(e, t, a) {
      'use strict'
      var n = a('FLGM'),
        r = a.n(n),
        l = a('EcSs'),
        u = a.n(l),
        c = a('zLi2'),
        o = a.n(c),
        i = a('q1tI'),
        m = a.n(i),
        s = a('JI6e'),
        d = a('3Z9Z'),
        E = a('MBJH'),
        g = a('nP3w'),
        h = a('HQzF'),
        p = a('o+MX'),
        v = a.n(p),
        f = a('06Pm'),
        b = a.n(f),
        D = a('kA7L'),
        k = a.n(D),
        y = new ((function() {
          function e() {
            b()(this, e)
          }
          return (
            k()(e, [
              {
                key: 'getDoubleDigits',
                value: function(e) {
                  return ''.concat(e < 10 ? '0' + e : e)
                },
              },
              {
                key: 'format',
                value: function(e) {
                  var t,
                    a = new Date(e)
                  return v()(
                    (t = ''.concat(
                      [
                        this.getDoubleDigits(a.getHours()),
                        this.getDoubleDigits(a.getMinutes()),
                        this.getDoubleDigits(a.getSeconds()),
                      ].join(':'),
                      ' '
                    ))
                  ).call(
                    t,
                    [
                      this.getDoubleDigits(a.getDate()),
                      this.getDoubleDigits(a.getMonth() + 1),
                      a.getFullYear(),
                    ].join('.')
                  )
                },
              },
            ]),
            e
          )
        })())(),
        w = a('QojX'),
        F = a('cWnB'),
        I = a('zM5D'),
        C = a('zUrK'),
        S = h.a.useStore
      t.a = function(e) {
        var t = e.storeKey,
          a = Object(i.useState)(!1),
          n = o()(a, 2),
          l = n[0],
          c = n[1],
          p = S(t)[t],
          v = h.a.getActions(t),
          f = v.addItem,
          b = v.removeItem,
          D = p.items
        return m.a.createElement(
          m.a.Fragment,
          null,
          l &&
            m.a.createElement(
              I.a,
              {
                show: !0,
                onHide: function() {
                  c(!1)
                },
              },
              m.a.createElement(g.b, {
                noValidate: !0,
                onSubmit: function(e) {
                  var t = e.purpose,
                    a = e.amount
                  f({ date: new Date(), purpose: t, amount: +a }), c(!1)
                },
                render: function(e) {
                  var t = e.handleSubmit,
                    a = e.invalid
                  return m.a.createElement(
                    m.a.Fragment,
                    null,
                    m.a.createElement(
                      I.a.Header,
                      { closeButton: !0 },
                      m.a.createElement(I.a.Title, null, 'Add item')
                    ),
                    m.a.createElement(
                      I.a.Body,
                      null,
                      m.a.createElement(g.a, {
                        name: 'purpose',
                        validate: function(e) {
                          return e ? void 0 : 'Required'
                        },
                        render: function(e) {
                          var t = e.input,
                            a = e.meta
                          return m.a.createElement(
                            C.a,
                            { className: 'mb-3' },
                            m.a.createElement(
                              C.a.Prepend,
                              null,
                              m.a.createElement(C.a.Text, null, 'Purpose')
                            ),
                            m.a.createElement(
                              w.a.Control,
                              u()({}, t, { isInvalid: a.touched && a.error })
                            ),
                            a.touched && a.error
                              ? m.a.createElement(
                                  w.a.Control.Feedback,
                                  { type: 'invalid' },
                                  a.error
                                )
                              : null
                          )
                        },
                      }),
                      m.a.createElement(g.a, {
                        name: 'amount',
                        validate: function(e) {
                          return e && e > 0
                            ? void 0
                            : 'Must be a number greater than zero'
                        },
                        render: function(e) {
                          var t = e.input,
                            a = e.meta
                          return m.a.createElement(
                            C.a,
                            { className: 'mb-3' },
                            m.a.createElement(
                              C.a.Prepend,
                              null,
                              m.a.createElement(C.a.Text, null, '$')
                            ),
                            m.a.createElement(
                              w.a.Control,
                              u()({}, t, {
                                type: 'number',
                                isInvalid: a.touched && a.error,
                              })
                            ),
                            a.touched && a.error
                              ? m.a.createElement(
                                  w.a.Control.Feedback,
                                  { type: 'invalid' },
                                  a.error
                                )
                              : null
                          )
                        },
                      })
                    ),
                    m.a.createElement(
                      I.a.Footer,
                      null,
                      m.a.createElement(
                        F.a,
                        { disabled: a, variant: 'success', onClick: t },
                        'Add'
                      ),
                      m.a.createElement(
                        F.a,
                        {
                          variant: 'light',
                          onClick: function() {
                            return c(!1)
                          },
                        },
                        'Close'
                      )
                    )
                  )
                },
              })
            ),
          m.a.createElement(
            d.a,
            { className: 'mb-3' },
            m.a.createElement(
              s.a,
              null,
              m.a.createElement(
                F.a,
                {
                  variant: 'success',
                  onClick: function() {
                    return c(!0)
                  },
                },
                'Add'
              )
            )
          ),
          m.a.createElement(
            d.a,
            null,
            m.a.createElement(
              s.a,
              null,
              m.a.createElement(
                E.a,
                { responsive: !0 },
                m.a.createElement(
                  'thead',
                  null,
                  m.a.createElement(
                    'tr',
                    null,
                    m.a.createElement('th', null, 'Date'),
                    m.a.createElement('th', null, 'Purpose'),
                    m.a.createElement('th', null, 'Amount'),
                    m.a.createElement('th', null)
                  )
                ),
                m.a.createElement(
                  'tfoot',
                  null,
                  m.a.createElement(
                    'tr',
                    null,
                    m.a.createElement(
                      'td',
                      { colSpan: 4, className: 'text-right' },
                      'Total: ',
                      p.total
                    )
                  )
                ),
                m.a.createElement(
                  'tbody',
                  null,
                  r()(D).call(D, function(e) {
                    return m.a.createElement(
                      'tr',
                      { key: e.id },
                      m.a.createElement('td', null, y.format(e.date)),
                      m.a.createElement('td', null, e.purpose),
                      m.a.createElement('td', null, e.amount),
                      m.a.createElement(
                        'td',
                        null,
                        m.a.createElement(
                          F.a,
                          {
                            variant: 'danger',
                            onClick: function() {
                              return b(e.id)
                            },
                          },
                          m.a.createElement(
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
      }
    },
    CByF: function(e, t, a) {
      'use strict'
      var n = a('q1tI'),
        r = a.n(n),
        l = a('55Ip'),
        u = a('JI6e'),
        c = a('TUci'),
        o = a('3Z9Z'),
        i = a('HQzF').a.useStore
      t.a = function() {
        return i('core').core.userName
          ? null
          : r.a.createElement(
              o.a,
              null,
              r.a.createElement(
                u.a,
                null,
                r.a.createElement(
                  c.a,
                  { variant: 'warning' },
                  'Visit ',
                  r.a.createElement(l.b, { to: '/dashboard' }, 'dashboard'),
                  ' to set your name'
                )
              )
            )
      }
    },
    jDM8: function(e, t, a) {
      'use strict'
      a.r(t)
      var n = a('q1tI'),
        r = a.n(n),
        l = a('CByF'),
        u = a('/khs'),
        c = a('/WPn')
      t.default = function() {
        return r.a.createElement(
          r.a.Fragment,
          null,
          r.a.createElement(l.a, null),
          r.a.createElement(u.a, { storeKey: 'spending' }),
          r.a.createElement(
            c.a,
            null,
            'This page is rendered inside the Spending module'
          )
        )
      }
    },
  },
])
