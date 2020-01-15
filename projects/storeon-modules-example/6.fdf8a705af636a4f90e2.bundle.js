;(window.webpackJsonp = window.webpackJsonp || []).push([
  [6],
  {
    '1MJ/': function(e, a, n) {
      'use strict'
      var t = n('q1tI'),
        l = n.n(t),
        r = n('JI6e'),
        s = n('TUci'),
        i = n('3Z9Z')
      a.a = function() {
        return l.a.createElement(
          i.a,
          null,
          l.a.createElement(
            r.a,
            null,
            l.a.createElement(
              s.a,
              { variant: 'primary' },
              'This page is rendered inside the Spending module'
            )
          )
        )
      }
    },
    '7xGa': function(e, a, n) {
      'use strict'
      var t,
        l = n('wx14'),
        r = n('zLVn'),
        s = n('TSYQ'),
        i = n.n(s),
        c = n('YECM'),
        o = n('q1tI'),
        u = n.n(o),
        m = n('dRu9'),
        d = n('z+q/'),
        b = (((t = {})[m.b] = 'show'), (t[m.a] = 'show'), t),
        f = u.a.forwardRef(function(e, a) {
          var n = e.className,
            t = e.children,
            s = Object(r.a)(e, ['className', 'children']),
            f = Object(o.useCallback)(
              function(e) {
                Object(d.a)(e), s.onEnter && s.onEnter(e)
              },
              [s]
            )
          return u.a.createElement(
            m.e,
            Object(l.a)({ ref: a, addEndListener: c.a }, s, { onEnter: f }),
            function(e, a) {
              return u.a.cloneElement(
                t,
                Object(l.a)({}, a, {
                  className: i()('fade', n, t.props.className, b[e]),
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
    TUci: function(e, a, n) {
      'use strict'
      var t = n('wx14'),
        l = n('zLVn'),
        r = n('TSYQ'),
        s = n.n(r),
        i = n('q1tI'),
        c = n.n(i),
        o = n('JCAc'),
        u = n('ZCiN'),
        m = n('YdCC'),
        d = n('U1MP'),
        b = n('vUet'),
        f = n('7xGa'),
        p = n('XQC9'),
        E = n('dbZe'),
        w = { show: !0, transition: f.a, closeLabel: 'Close alert' },
        C = { show: 'onClose' },
        v = c.a.forwardRef(function(e, a) {
          var n = Object(o.a)(e, C),
            r = n.bsPrefix,
            i = n.show,
            m = n.closeLabel,
            d = n.className,
            f = n.children,
            E = n.variant,
            w = n.onClose,
            v = n.dismissible,
            N = n.transition,
            O = Object(l.a)(n, [
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
            g = c.a.createElement(
              'div',
              Object(t.a)({ role: 'alert' }, N ? O : void 0, {
                className: s()(d, h, E && h + '-' + E, v && h + '-dismissible'),
              }),
              v && c.a.createElement(p.a, { onClick: j, label: m }),
              f
            )
          return N
            ? c.a.createElement(
                N,
                Object(t.a)({ unmountOnExit: !0, ref: a }, O, { in: i }),
                g
              )
            : i
            ? g
            : null
        }),
        N = Object(d.a)('h4')
      ;(N.displayName = 'DivStyledAsH4'),
        (v.displayName = 'Alert'),
        (v.defaultProps = w),
        (v.Link = Object(m.a)('alert-link', { Component: E.a })),
        (v.Heading = Object(m.a)('alert-heading', { Component: N })),
        (a.a = v)
    },
    U1MP: function(e, a, n) {
      'use strict'
      var t = n('wx14'),
        l = n('q1tI'),
        r = n.n(l),
        s = n('TSYQ'),
        i = n.n(s)
      a.a = function(e) {
        return r.a.forwardRef(function(a, n) {
          return r.a.createElement(
            'div',
            Object(t.a)({}, a, { ref: n, className: i()(a.className, e) })
          )
        })
      }
    },
    XQC9: function(e, a, n) {
      'use strict'
      var t = n('wx14'),
        l = n('zLVn'),
        r = n('17x9'),
        s = n.n(r),
        i = n('q1tI'),
        c = n.n(i),
        o = n('TSYQ'),
        u = n.n(o),
        m = { label: s.a.string.isRequired, onClick: s.a.func },
        d = c.a.forwardRef(function(e, a) {
          var n = e.label,
            r = e.onClick,
            s = e.className,
            i = Object(l.a)(e, ['label', 'onClick', 'className'])
          return c.a.createElement(
            'button',
            Object(t.a)(
              {
                ref: a,
                type: 'button',
                className: u()('close', s),
                onClick: r,
              },
              i
            ),
            c.a.createElement('span', { 'aria-hidden': 'true' }, '×'),
            c.a.createElement('span', { className: 'sr-only' }, n)
          )
        })
      ;(d.displayName = 'CloseButton'),
        (d.propTypes = m),
        (d.defaultProps = { label: 'Close' }),
        (a.a = d)
    },
    ZoaA: function(e, a, n) {
      'use strict'
      n.r(a)
      var t = n('q1tI'),
        l = n.n(t),
        r = n('55Ip'),
        s = n('3Z9Z'),
        i = n('JI6e'),
        c = n('TUci'),
        o = n('HQzF'),
        u = n('1MJ/'),
        m = o.a.useStore
      a.default = function() {
        var e = m('core', 'spending'),
          a = e.core,
          n = e.spending
        return l.a.createElement(
          l.a.Fragment,
          null,
          l.a.createElement(
            s.a,
            null,
            l.a.createElement(
              i.a,
              null,
              !a.userName &&
                l.a.createElement(
                  c.a,
                  { variant: 'warning' },
                  'Visit ',
                  l.a.createElement(r.b, { to: '/dashboard' }, 'dashboard'),
                  ' to set your name'
                )
            )
          ),
          l.a.createElement(
            s.a,
            null,
            l.a.createElement(
              i.a,
              null,
              l.a.createElement(
                c.a,
                { variant: 'info' },
                l.a.createElement(
                  c.a.Heading,
                  null,
                  'Spending amount: ',
                  n.total
                ),
                l.a.createElement('hr', null),
                l.a.createElement(
                  'p',
                  { className: 'mb-0' },
                  'Visit ',
                  l.a.createElement(r.b, { to: '/spending/list' }, 'list'),
                  ' to edit data'
                )
              )
            )
          ),
          l.a.createElement(u.a, null)
        )
      }
    },
  },
])
