;(window.webpackJsonp = window.webpackJsonp || []).push([
  [7],
  {
    '/WPn': function(e, a, t) {
      'use strict'
      var n = t('q1tI'),
        l = t.n(n),
        r = t('JI6e'),
        c = t('TUci'),
        s = t('3Z9Z')
      a.a = function(e) {
        var a = e.children
        return l.a.createElement(
          s.a,
          null,
          l.a.createElement(
            r.a,
            null,
            l.a.createElement(c.a, { variant: 'primary' }, a)
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
    CByF: function(e, a, t) {
      'use strict'
      var n = t('q1tI'),
        l = t.n(n),
        r = t('55Ip'),
        c = t('JI6e'),
        s = t('TUci'),
        i = t('3Z9Z'),
        o = t('HQzF').a.useStore
      a.a = function() {
        return o('core').core.userName
          ? null
          : l.a.createElement(
              i.a,
              null,
              l.a.createElement(
                c.a,
                null,
                l.a.createElement(
                  s.a,
                  { variant: 'warning' },
                  'Visit ',
                  l.a.createElement(r.b, { to: '/dashboard' }, 'dashboard'),
                  ' to set your name'
                )
              )
            )
      }
    },
    EdMw: function(e, a, t) {
      'use strict'
      t.r(a)
      var n = t('q1tI'),
        l = t.n(n),
        r = t('CByF'),
        c = t('dflB'),
        s = t('/WPn')
      a.default = function() {
        return l.a.createElement(
          l.a.Fragment,
          null,
          l.a.createElement(r.a, null),
          l.a.createElement(c.a, {
            label: 'Income amount',
            storeKey: 'income',
            listUrl: '/income/list',
          }),
          l.a.createElement(
            s.a,
            null,
            'This page is rendered inside the Income module'
          )
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
        v = { show: !0, transition: f.a, closeLabel: 'Close alert' },
        C = { show: 'onClose' },
        w = i.a.forwardRef(function(e, a) {
          var t = Object(o.a)(e, C),
            r = t.bsPrefix,
            s = t.show,
            m = t.closeLabel,
            d = t.className,
            f = t.children,
            p = t.variant,
            v = t.onClose,
            w = t.dismissible,
            h = t.transition,
            N = Object(l.a)(t, [
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
            O = Object(b.b)(r, 'alert'),
            j = Object(u.a)(function(e) {
              v(!1, e)
            }),
            I = i.a.createElement(
              'div',
              Object(n.a)({ role: 'alert' }, h ? N : void 0, {
                className: c()(d, O, p && O + '-' + p, w && O + '-dismissible'),
              }),
              w && i.a.createElement(E.a, { onClick: j, label: m }),
              f
            )
          return h
            ? i.a.createElement(
                h,
                Object(n.a)({ unmountOnExit: !0, ref: a }, N, { in: s }),
                I
              )
            : s
            ? I
            : null
        }),
        h = Object(d.a)('h4')
      ;(h.displayName = 'DivStyledAsH4'),
        (w.displayName = 'Alert'),
        (w.defaultProps = v),
        (w.Link = Object(m.a)('alert-link', { Component: p.a })),
        (w.Heading = Object(m.a)('alert-heading', { Component: h })),
        (a.a = w)
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
    dflB: function(e, a, t) {
      'use strict'
      var n = t('q1tI'),
        l = t.n(n),
        r = t('55Ip'),
        c = t('JI6e'),
        s = t('TUci'),
        i = t('3Z9Z'),
        o = t('HQzF').a.useStore
      a.a = function(e) {
        var a = e.label,
          t = e.storeKey,
          n = e.listUrl,
          u = o(t)[t]
        return l.a.createElement(
          i.a,
          null,
          l.a.createElement(
            c.a,
            null,
            l.a.createElement(
              s.a,
              { variant: 'info' },
              l.a.createElement(s.a.Heading, null, a, ': ', u.total),
              l.a.createElement('hr', null),
              l.a.createElement(
                'p',
                { className: 'mb-0' },
                'Visit ',
                l.a.createElement(r.b, { to: n }, 'list'),
                ' to edit data'
              )
            )
          )
        )
      }
    },
  },
])
