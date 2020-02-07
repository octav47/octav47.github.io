;(window.webpackJsonp = window.webpackJsonp || []).push([
  [6],
  {
    '/WPn': function(e, a, t) {
      'use strict'
      var n = t('q1tI'),
        l = t.n(n),
        r = t('JI6e'),
        c = t('TUci'),
        i = t('3Z9Z')
      a.a = function(e) {
        var a = e.children
        return l.a.createElement(
          i.a,
          null,
          l.a.createElement(
            r.a,
            null,
            l.a.createElement(c.a, { variant: 'primary' }, a)
          )
        )
      }
    },
    '1Bf2': function(e, a, t) {
      'use strict'
      t.r(a)
      var n = t('zLi2'),
        l = t.n(n),
        r = t('q1tI'),
        c = t.n(r),
        i = t('55Ip'),
        s = t('3Z9Z'),
        o = t('JI6e'),
        u = t('wx14'),
        m = t('zLVn'),
        d = t('TSYQ'),
        p = t.n(d),
        f = t('vUet'),
        b = c.a.forwardRef(function(e, a) {
          var t,
            n = e.as,
            l = void 0 === n ? 'div' : n,
            r = e.className,
            i = e.fluid,
            s = e.bsPrefix,
            o = Object(m.a)(e, ['as', 'className', 'fluid', 'bsPrefix']),
            d =
              (((t = {})[(s = Object(f.b)(s, 'jumbotron'))] = !0),
              (t[s + '-fluid'] = i),
              t)
          return c.a.createElement(
            l,
            Object(u.a)({ ref: a }, o, { className: p()(r, d) })
          )
        })
      ;(b.defaultProps = { fluid: !1 }), (b.displayName = 'Jumbotron')
      var E = b,
        v = t('TUci'),
        O = t('zUrK'),
        N = t('jDKy'),
        j = t('cWnB'),
        C = t('HQzF'),
        x = t('/WPn'),
        y = C.a.useStore
      a.default = function() {
        var e = Object(r.useState)(null),
          a = l()(e, 2),
          t = a[0],
          n = a[1],
          u = y('core', 'spending', 'income'),
          m = u.core,
          d = u.spending,
          p = u.income,
          f = C.a.getActions('core').setUserName
        return c.a.createElement(
          c.a.Fragment,
          null,
          m.userName &&
            c.a.createElement(
              s.a,
              null,
              c.a.createElement(
                o.a,
                null,
                c.a.createElement(
                  E,
                  null,
                  c.a.createElement('h1', null, 'Hello, ', m.userName, '!'),
                  c.a.createElement(
                    'p',
                    null,
                    "Go to modules' pages to see some storeon things"
                  ),
                  c.a.createElement(
                    'p',
                    null,
                    c.a.createElement(
                      j.a,
                      {
                        onClick: function() {
                          n(null), f(null)
                        },
                        variant: 'outline-success',
                      },
                      'Clear name'
                    )
                  )
                )
              )
            ),
          c.a.createElement(
            s.a,
            null,
            c.a.createElement(
              o.a,
              null,
              !m.userName &&
                c.a.createElement(
                  v.a,
                  { variant: 'success' },
                  c.a.createElement(v.a.Heading, null, 'Hello, coder!'),
                  c.a.createElement(
                    O.a,
                    { className: 'mb-3' },
                    c.a.createElement(
                      O.a.Prepend,
                      null,
                      c.a.createElement(
                        j.a,
                        {
                          variant: 'outline-secondary',
                          onClick: function() {
                            return f(t)
                          },
                        },
                        'Set name'
                      )
                    ),
                    c.a.createElement(N.a, {
                      'aria-describedby': 'basic-addon1',
                      onChange: function(e) {
                        return n(e.target.value)
                      },
                      value: t,
                    })
                  )
                )
            )
          ),
          d.total || p.total
            ? c.a.createElement(
                s.a,
                null,
                c.a.createElement(
                  o.a,
                  null,
                  c.a.createElement(
                    v.a,
                    { variant: 'info' },
                    d.total || p.total
                      ? c.a.createElement(
                          v.a.Heading,
                          null,
                          'Balance: ',
                          p.total - d.total
                        )
                      : null,
                    d.total
                      ? c.a.createElement(
                          'p',
                          null,
                          'Spending total: ',
                          d.total
                        )
                      : null,
                    p.total
                      ? c.a.createElement('p', null, 'Income total: ', p.total)
                      : null
                  )
                )
              )
            : c.a.createElement(
                s.a,
                null,
                c.a.createElement(
                  o.a,
                  null,
                  c.a.createElement(
                    v.a,
                    { variant: 'info' },
                    c.a.createElement(v.a.Heading, null, 'No balance data'),
                    c.a.createElement(
                      'p',
                      null,
                      'Add ',
                      c.a.createElement(i.b, { to: '/income' }, 'income'),
                      ' or',
                      ' ',
                      c.a.createElement(i.b, { to: '/spending' }, 'spending'),
                      ' item to see balance'
                    )
                  )
                )
              ),
          c.a.createElement(
            x.a,
            null,
            'This page is rendered inside the core module'
          )
        )
      }
    },
    '7xGa': function(e, a, t) {
      'use strict'
      var n,
        l = t('wx14'),
        r = t('zLVn'),
        c = t('TSYQ'),
        i = t.n(c),
        s = t('YECM'),
        o = t('q1tI'),
        u = t.n(o),
        m = t('dRu9'),
        d = t('z+q/'),
        p = (((n = {})[m.b] = 'show'), (n[m.a] = 'show'), n),
        f = u.a.forwardRef(function(e, a) {
          var t = e.className,
            n = e.children,
            c = Object(r.a)(e, ['className', 'children']),
            f = Object(o.useCallback)(
              function(e) {
                Object(d.a)(e), c.onEnter && c.onEnter(e)
              },
              [c]
            )
          return u.a.createElement(
            m.e,
            Object(l.a)({ ref: a, addEndListener: s.a }, c, { onEnter: f }),
            function(e, a) {
              return u.a.cloneElement(
                n,
                Object(l.a)({}, a, {
                  className: i()('fade', t, n.props.className, p[e]),
                })
              )
            }
          )
        })
      ;(f.defaultProps = {
        in: !1,
        timeout: 300,
        mountOnEnter: !1,
        unmountOnExit: !1,
        appear: !1,
      }),
        (f.displayName = 'Fade'),
        (a.a = f)
    },
    '9Iqo': function(e, a, t) {
      'use strict'
      var n = t('q1tI'),
        l = t.n(n).a.createContext({ controlId: void 0 })
      a.a = l
    },
    Mlt0: function(e, a, t) {
      'use strict'
      var n = t('wx14'),
        l = t('zLVn'),
        r = t('TSYQ'),
        c = t.n(r),
        i = t('q1tI'),
        s = t.n(i),
        o = t('17x9'),
        u = t.n(o),
        m = { type: u.a.string.isRequired, as: u.a.elementType },
        d = s.a.forwardRef(function(e, a) {
          var t = e.as,
            r = void 0 === t ? 'div' : t,
            i = e.className,
            o = e.type,
            u = Object(l.a)(e, ['as', 'className', 'type'])
          return s.a.createElement(
            r,
            Object(n.a)({}, u, {
              ref: a,
              className: c()(i, o && o + '-feedback'),
            })
          )
        })
      ;(d.displayName = 'Feedback'),
        (d.propTypes = m),
        (d.defaultProps = { type: 'valid' }),
        (a.a = d)
    },
    TUci: function(e, a, t) {
      'use strict'
      var n = t('wx14'),
        l = t('zLVn'),
        r = t('TSYQ'),
        c = t.n(r),
        i = t('q1tI'),
        s = t.n(i),
        o = t('JCAc'),
        u = t('ZCiN'),
        m = t('YdCC'),
        d = t('U1MP'),
        p = t('vUet'),
        f = t('7xGa'),
        b = t('XQC9'),
        E = t('dbZe'),
        v = { show: !0, transition: f.a, closeLabel: 'Close alert' },
        O = { show: 'onClose' },
        N = s.a.forwardRef(function(e, a) {
          var t = Object(o.a)(e, O),
            r = t.bsPrefix,
            i = t.show,
            m = t.closeLabel,
            d = t.className,
            f = t.children,
            E = t.variant,
            v = t.onClose,
            N = t.dismissible,
            j = t.transition,
            C = Object(l.a)(t, [
              'bsPrefix',
              'show',
              'closeLabel',
              'className',
              'children',
              'variant',
              'onClose',
              'dismissible',
              'transition',
            ]),
            x = Object(p.b)(r, 'alert'),
            y = Object(u.a)(function(e) {
              v(!1, e)
            }),
            w = s.a.createElement(
              'div',
              Object(n.a)({ role: 'alert' }, j ? C : void 0, {
                className: c()(d, x, E && x + '-' + E, N && x + '-dismissible'),
              }),
              N && s.a.createElement(b.a, { onClick: y, label: m }),
              f
            )
          return j
            ? s.a.createElement(
                j,
                Object(n.a)({ unmountOnExit: !0, ref: a }, C, { in: i }),
                w
              )
            : i
            ? w
            : null
        }),
        j = Object(d.a)('h4')
      ;(j.displayName = 'DivStyledAsH4'),
        (N.displayName = 'Alert'),
        (N.defaultProps = v),
        (N.Link = Object(m.a)('alert-link', { Component: E.a })),
        (N.Heading = Object(m.a)('alert-heading', { Component: j })),
        (a.a = N)
    },
    U1MP: function(e, a, t) {
      'use strict'
      var n = t('wx14'),
        l = t('q1tI'),
        r = t.n(l),
        c = t('TSYQ'),
        i = t.n(c)
      a.a = function(e) {
        return r.a.forwardRef(function(a, t) {
          return r.a.createElement(
            'div',
            Object(n.a)({}, a, { ref: t, className: i()(a.className, e) })
          )
        })
      }
    },
    XQC9: function(e, a, t) {
      'use strict'
      var n = t('wx14'),
        l = t('zLVn'),
        r = t('17x9'),
        c = t.n(r),
        i = t('q1tI'),
        s = t.n(i),
        o = t('TSYQ'),
        u = t.n(o),
        m = { label: c.a.string.isRequired, onClick: c.a.func },
        d = s.a.forwardRef(function(e, a) {
          var t = e.label,
            r = e.onClick,
            c = e.className,
            i = Object(l.a)(e, ['label', 'onClick', 'className'])
          return s.a.createElement(
            'button',
            Object(n.a)(
              {
                ref: a,
                type: 'button',
                className: u()('close', c),
                onClick: r,
              },
              i
            ),
            s.a.createElement('span', { 'aria-hidden': 'true' }, '×'),
            s.a.createElement('span', { className: 'sr-only' }, t)
          )
        })
      ;(d.displayName = 'CloseButton'),
        (d.propTypes = m),
        (d.defaultProps = { label: 'Close' }),
        (a.a = d)
    },
    jDKy: function(e, a, t) {
      'use strict'
      var n = t('wx14'),
        l = t('zLVn'),
        r = t('TSYQ'),
        c = t.n(r),
        i = t('q1tI'),
        s = t.n(i),
        o = (t('2W6z'), t('Mlt0')),
        u = t('9Iqo'),
        m = t('vUet'),
        d = s.a.forwardRef(function(e, a) {
          var t,
            r,
            o = e.bsPrefix,
            d = e.type,
            p = e.size,
            f = e.id,
            b = e.className,
            E = e.isValid,
            v = e.isInvalid,
            O = e.plaintext,
            N = e.readOnly,
            j = e.as,
            C = void 0 === j ? 'input' : j,
            x = Object(l.a)(e, [
              'bsPrefix',
              'type',
              'size',
              'id',
              'className',
              'isValid',
              'isInvalid',
              'plaintext',
              'readOnly',
              'as',
            ]),
            y = Object(i.useContext)(u.a).controlId
          if (((o = Object(m.b)(o, 'form-control')), O))
            ((r = {})[o + '-plaintext'] = !0), (t = r)
          else if ('file' === d) {
            var w
            ;((w = {})[o + '-file'] = !0), (t = w)
          } else {
            var g
            ;((g = {})[o] = !0), (g[o + '-' + p] = p), (t = g)
          }
          return s.a.createElement(
            C,
            Object(n.a)({}, x, {
              type: d,
              ref: a,
              readOnly: N,
              id: f || y,
              className: c()(b, t, E && 'is-valid', v && 'is-invalid'),
            })
          )
        })
      ;(d.displayName = 'FormControl'), (d.Feedback = o.a), (a.a = d)
    },
    zUrK: function(e, a, t) {
      'use strict'
      var n = t('wx14'),
        l = t('zLVn'),
        r = t('TSYQ'),
        c = t.n(r),
        i = t('q1tI'),
        s = t.n(i),
        o = t('YdCC'),
        u = t('vUet'),
        m = s.a.forwardRef(function(e, a) {
          var t = e.bsPrefix,
            r = e.size,
            i = e.className,
            o = e.as,
            m = void 0 === o ? 'div' : o,
            d = Object(l.a)(e, ['bsPrefix', 'size', 'className', 'as'])
          return (
            (t = Object(u.b)(t, 'input-group')),
            s.a.createElement(
              m,
              Object(n.a)({ ref: a }, d, {
                className: c()(i, t, r && t + '-' + r),
              })
            )
          )
        }),
        d = Object(o.a)('input-group-append'),
        p = Object(o.a)('input-group-prepend'),
        f = Object(o.a)('input-group-text', { Component: 'span' })
      ;(m.displayName = 'InputGroup'),
        (m.Text = f),
        (m.Radio = function(e) {
          return s.a.createElement(
            f,
            null,
            s.a.createElement('input', Object(n.a)({ type: 'radio' }, e))
          )
        }),
        (m.Checkbox = function(e) {
          return s.a.createElement(
            f,
            null,
            s.a.createElement('input', Object(n.a)({ type: 'checkbox' }, e))
          )
        }),
        (m.Append = d),
        (m.Prepend = p),
        (a.a = m)
    },
  },
])
