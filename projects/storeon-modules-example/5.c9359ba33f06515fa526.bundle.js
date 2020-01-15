;(window.webpackJsonp = window.webpackJsonp || []).push([
  [5],
  {
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
        b = (((n = {})[m.b] = 'show'), (n[m.a] = 'show'), n),
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
            Object(l.a)({ ref: a, addEndListener: i.a }, c, { onEnter: f }),
            function(e, a) {
              return u.a.cloneElement(
                n,
                Object(l.a)({}, a, {
                  className: s()('fade', t, n.props.className, b[e]),
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
    EdMw: function(e, a, t) {
      'use strict'
      t.r(a)
      var n = t('q1tI'),
        l = t.n(n),
        r = t('55Ip'),
        c = t('3Z9Z'),
        s = t('JI6e'),
        i = t('TUci'),
        o = t('HQzF'),
        u = t('YaAy'),
        m = o.a.useStore
      a.default = function() {
        var e = m('core', 'income'),
          a = e.core,
          t = e.income
        return l.a.createElement(
          l.a.Fragment,
          null,
          l.a.createElement(
            c.a,
            null,
            l.a.createElement(
              s.a,
              null,
              !a.userName &&
                l.a.createElement(
                  i.a,
                  { variant: 'warning' },
                  'Visit ',
                  l.a.createElement(r.b, { to: '/dashboard' }, 'dashboard'),
                  ' to set your name'
                )
            )
          ),
          l.a.createElement(
            c.a,
            null,
            l.a.createElement(
              s.a,
              null,
              l.a.createElement(
                i.a,
                { variant: 'info' },
                l.a.createElement(
                  i.a.Heading,
                  null,
                  'income amount: ',
                  t.total
                ),
                l.a.createElement('hr', null),
                l.a.createElement(
                  'p',
                  { className: 'mb-0' },
                  'Visit ',
                  l.a.createElement(r.b, { to: '/income/list' }, 'list'),
                  ' to edit data'
                )
              )
            )
          ),
          l.a.createElement(u.a, null)
        )
      }
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
        b = t('vUet'),
        f = t('7xGa'),
        E = t('XQC9'),
        p = t('dbZe'),
        w = { show: !0, transition: f.a, closeLabel: 'Close alert' },
        C = { show: 'onClose' },
        v = i.a.forwardRef(function(e, a) {
          var t = Object(o.a)(e, C),
            r = t.bsPrefix,
            s = t.show,
            m = t.closeLabel,
            d = t.className,
            f = t.children,
            p = t.variant,
            w = t.onClose,
            v = t.dismissible,
            N = t.transition,
            O = Object(l.a)(t, [
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
            h = Object(b.b)(r, 'alert'),
            j = Object(u.a)(function(e) {
              w(!1, e)
            }),
            y = i.a.createElement(
              'div',
              Object(n.a)({ role: 'alert' }, N ? O : void 0, {
                className: c()(d, h, p && h + '-' + p, v && h + '-dismissible'),
              }),
              v && i.a.createElement(E.a, { onClick: j, label: m }),
              f
            )
          return N
            ? i.a.createElement(
                N,
                Object(n.a)({ unmountOnExit: !0, ref: a }, O, { in: s }),
                y
              )
            : s
            ? y
            : null
        }),
        N = Object(d.a)('h4')
      ;(N.displayName = 'DivStyledAsH4'),
        (v.displayName = 'Alert'),
        (v.defaultProps = w),
        (v.Link = Object(m.a)('alert-link', { Component: p.a })),
        (v.Heading = Object(m.a)('alert-heading', { Component: N })),
        (a.a = v)
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
    YaAy: function(e, a, t) {
      'use strict'
      var n = t('q1tI'),
        l = t.n(n),
        r = t('JI6e'),
        c = t('TUci'),
        s = t('3Z9Z')
      a.a = function() {
        return l.a.createElement(
          s.a,
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
