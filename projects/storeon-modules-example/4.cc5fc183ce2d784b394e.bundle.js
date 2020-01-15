;(window.webpackJsonp = window.webpackJsonp || []).push([
  [4],
  {
    '1Bf2': function(e, a, t) {
      'use strict'
      t.r(a)
      var n = t('zLi2'),
        l = t.n(n),
        r = t('q1tI'),
        c = t.n(r),
        s = t('3Z9Z'),
        i = t('JI6e'),
        o = t('xXt2'),
        u = t('TUci'),
        m = t('zUrK'),
        d = t('jDKy'),
        f = t('cWnB'),
        p = t('HQzF'),
        b = function() {
          return c.a.createElement(
            s.a,
            null,
            c.a.createElement(
              i.a,
              null,
              c.a.createElement(
                u.a,
                { variant: 'primary' },
                'This page is rendered inside the core module'
              )
            )
          )
        },
        E = p.a.useStore
      a.default = function() {
        var e = Object(r.useState)(null),
          a = l()(e, 2),
          t = a[0],
          n = a[1],
          v = E('core', 'spending', 'income'),
          O = v.core,
          N = v.spending,
          j = v.income,
          x = p.a.getActions('core').setUserName
        return c.a.createElement(
          c.a.Fragment,
          null,
          O.userName &&
            c.a.createElement(
              s.a,
              null,
              c.a.createElement(
                i.a,
                null,
                c.a.createElement(
                  o.a,
                  null,
                  c.a.createElement('h1', null, 'Hello, ', O.userName, '!'),
                  c.a.createElement(
                    'p',
                    null,
                    "Go to modules' pages to see some storeon things"
                  ),
                  c.a.createElement(
                    'p',
                    null,
                    c.a.createElement(
                      f.a,
                      {
                        onClick: function() {
                          n(null), x(null)
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
              i.a,
              null,
              !O.userName &&
                c.a.createElement(
                  u.a,
                  { variant: 'success' },
                  c.a.createElement(u.a.Heading, null, 'Hello, coder!'),
                  c.a.createElement(
                    m.a,
                    { className: 'mb-3' },
                    c.a.createElement(
                      m.a.Prepend,
                      null,
                      c.a.createElement(
                        f.a,
                        {
                          variant: 'outline-secondary',
                          onClick: function() {
                            return x(t)
                          },
                        },
                        'Set name'
                      )
                    ),
                    c.a.createElement(d.a, {
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
          (N.total || j.total) &&
            c.a.createElement(
              s.a,
              null,
              c.a.createElement(
                i.a,
                null,
                c.a.createElement(
                  u.a,
                  { variant: 'info' },
                  N.total &&
                    j.total &&
                    c.a.createElement(
                      u.a.Heading,
                      null,
                      'Balance: ',
                      j.total - N.total
                    ),
                  N.total &&
                    c.a.createElement('p', null, 'Spending total: ', N.total),
                  j.total &&
                    c.a.createElement('p', null, 'Income total: ', j.total)
                )
              )
            ),
          c.a.createElement(b, null)
        )
      }
    },
    '7xGa': function(e, a, t) {
      'use strict'
      var n,
        l = t('wx14'),
        r = t('zLVn'),
        c = t('TSYQ'),
        s = t.n(c),
        i = t('YECM'),
        o = t('q1tI'),
        u = t.n(o),
        m = t('dRu9'),
        d = t('z+q/'),
        f = (((n = {})[m.b] = 'show'), (n[m.a] = 'show'), n),
        p = u.a.forwardRef(function(e, a) {
          var t = e.className,
            n = e.children,
            c = Object(r.a)(e, ['className', 'children']),
            p = Object(o.useCallback)(
              function(e) {
                Object(d.a)(e), c.onEnter && c.onEnter(e)
              },
              [c]
            )
          return u.a.createElement(
            m.e,
            Object(l.a)({ ref: a, addEndListener: i.a }, c, { onEnter: p }),
            function(e, a) {
              return u.a.cloneElement(
                n,
                Object(l.a)({}, a, {
                  className: s()('fade', t, n.props.className, f[e]),
                })
              )
            }
          )
        })
      ;(p.defaultProps = {
        in: !1,
        timeout: 300,
        mountOnEnter: !1,
        unmountOnExit: !1,
        appear: !1,
      }),
        (p.displayName = 'Fade'),
        (a.a = p)
    },
    TUci: function(e, a, t) {
      'use strict'
      var n = t('wx14'),
        l = t('zLVn'),
        r = t('TSYQ'),
        c = t.n(r),
        s = t('q1tI'),
        i = t.n(s),
        o = t('JCAc'),
        u = t('ZCiN'),
        m = t('YdCC'),
        d = t('U1MP'),
        f = t('vUet'),
        p = t('7xGa'),
        b = t('XQC9'),
        E = t('dbZe'),
        v = { show: !0, transition: p.a, closeLabel: 'Close alert' },
        O = { show: 'onClose' },
        N = i.a.forwardRef(function(e, a) {
          var t = Object(o.a)(e, O),
            r = t.bsPrefix,
            s = t.show,
            m = t.closeLabel,
            d = t.className,
            p = t.children,
            E = t.variant,
            v = t.onClose,
            N = t.dismissible,
            j = t.transition,
            x = Object(l.a)(t, [
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
            C = Object(f.b)(r, 'alert'),
            y = Object(u.a)(function(e) {
              v(!1, e)
            }),
            w = i.a.createElement(
              'div',
              Object(n.a)({ role: 'alert' }, j ? x : void 0, {
                className: c()(d, C, E && C + '-' + E, N && C + '-dismissible'),
              }),
              N && i.a.createElement(b.a, { onClick: y, label: m }),
              p
            )
          return j
            ? i.a.createElement(
                j,
                Object(n.a)({ unmountOnExit: !0, ref: a }, x, { in: s }),
                w
              )
            : s
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
        s = t.n(c)
      a.a = function(e) {
        return r.a.forwardRef(function(a, t) {
          return r.a.createElement(
            'div',
            Object(n.a)({}, a, { ref: t, className: s()(a.className, e) })
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
        s = t('q1tI'),
        i = t.n(s),
        o = t('TSYQ'),
        u = t.n(o),
        m = { label: c.a.string.isRequired, onClick: c.a.func },
        d = i.a.forwardRef(function(e, a) {
          var t = e.label,
            r = e.onClick,
            c = e.className,
            s = Object(l.a)(e, ['label', 'onClick', 'className'])
          return i.a.createElement(
            'button',
            Object(n.a)(
              {
                ref: a,
                type: 'button',
                className: u()('close', c),
                onClick: r,
              },
              s
            ),
            i.a.createElement('span', { 'aria-hidden': 'true' }, '×'),
            i.a.createElement('span', { className: 'sr-only' }, t)
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
        s = t('q1tI'),
        i = t.n(s),
        o = (t('2W6z'), t('17x9')),
        u = t.n(o),
        m = { type: u.a.string.isRequired, as: u.a.elementType },
        d = i.a.forwardRef(function(e, a) {
          var t = e.as,
            r = void 0 === t ? 'div' : t,
            s = e.className,
            o = e.type,
            u = Object(l.a)(e, ['as', 'className', 'type'])
          return i.a.createElement(
            r,
            Object(n.a)({}, u, {
              ref: a,
              className: c()(s, o && o + '-feedback'),
            })
          )
        })
      ;(d.displayName = 'Feedback'),
        (d.propTypes = m),
        (d.defaultProps = { type: 'valid' })
      var f = d,
        p = i.a.createContext({ controlId: void 0 }),
        b = t('vUet'),
        E = i.a.forwardRef(function(e, a) {
          var t,
            r,
            o = e.bsPrefix,
            u = e.type,
            m = e.size,
            d = e.id,
            f = e.className,
            E = e.isValid,
            v = e.isInvalid,
            O = e.plaintext,
            N = e.readOnly,
            j = e.as,
            x = void 0 === j ? 'input' : j,
            C = Object(l.a)(e, [
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
            y = Object(s.useContext)(p).controlId
          if (((o = Object(b.b)(o, 'form-control')), O))
            ((r = {})[o + '-plaintext'] = !0), (t = r)
          else if ('file' === u) {
            var w
            ;((w = {})[o + '-file'] = !0), (t = w)
          } else {
            var h
            ;((h = {})[o] = !0), (h[o + '-' + m] = m), (t = h)
          }
          return i.a.createElement(
            x,
            Object(n.a)({}, C, {
              type: u,
              ref: a,
              readOnly: N,
              id: d || y,
              className: c()(f, t, E && 'is-valid', v && 'is-invalid'),
            })
          )
        })
      ;(E.displayName = 'FormControl'), (E.Feedback = f)
      a.a = E
    },
    xXt2: function(e, a, t) {
      'use strict'
      var n = t('wx14'),
        l = t('zLVn'),
        r = t('q1tI'),
        c = t.n(r),
        s = t('TSYQ'),
        i = t.n(s),
        o = t('vUet'),
        u = c.a.forwardRef(function(e, a) {
          var t,
            r = e.as,
            s = void 0 === r ? 'div' : r,
            u = e.className,
            m = e.fluid,
            d = e.bsPrefix,
            f = Object(l.a)(e, ['as', 'className', 'fluid', 'bsPrefix']),
            p =
              (((t = {})[(d = Object(o.b)(d, 'jumbotron'))] = !0),
              (t[d + '-fluid'] = m),
              t)
          return c.a.createElement(
            s,
            Object(n.a)({ ref: a }, f, { className: i()(u, p) })
          )
        })
      ;(u.defaultProps = { fluid: !1 }),
        (u.displayName = 'Jumbotron'),
        (a.a = u)
    },
    zUrK: function(e, a, t) {
      'use strict'
      var n = t('wx14'),
        l = t('zLVn'),
        r = t('TSYQ'),
        c = t.n(r),
        s = t('q1tI'),
        i = t.n(s),
        o = t('YdCC'),
        u = t('vUet'),
        m = i.a.forwardRef(function(e, a) {
          var t = e.bsPrefix,
            r = e.size,
            s = e.className,
            o = e.as,
            m = void 0 === o ? 'div' : o,
            d = Object(l.a)(e, ['bsPrefix', 'size', 'className', 'as'])
          return (
            (t = Object(u.b)(t, 'input-group')),
            i.a.createElement(
              m,
              Object(n.a)({ ref: a }, d, {
                className: c()(s, t, r && t + '-' + r),
              })
            )
          )
        }),
        d = Object(o.a)('input-group-append'),
        f = Object(o.a)('input-group-prepend'),
        p = Object(o.a)('input-group-text', { Component: 'span' })
      ;(m.displayName = 'InputGroup'),
        (m.Text = p),
        (m.Radio = function(e) {
          return i.a.createElement(
            p,
            null,
            i.a.createElement('input', Object(n.a)({ type: 'radio' }, e))
          )
        }),
        (m.Checkbox = function(e) {
          return i.a.createElement(
            p,
            null,
            i.a.createElement('input', Object(n.a)({ type: 'checkbox' }, e))
          )
        }),
        (m.Append = d),
        (m.Prepend = f),
        (a.a = m)
    },
  },
])
