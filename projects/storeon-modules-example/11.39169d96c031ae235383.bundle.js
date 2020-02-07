;(window.webpackJsonp = window.webpackJsonp || []).push([
  [11],
  {
    shNG: function(e, o, s) {
      'use strict'
      s.r(o),
        (o.default = [
          {
            mainConfig: {
              name: 'core',
              fullName: 'Core module',
              description: 'Core module description',
              isSystem: !0,
            },
            routesImportPath: './core/config/routes.js',
            stateImportPath: './core/config/state.js',
          },
          {
            mainConfig: {
              name: 'income',
              fullName: 'Income',
              description: 'Dashboard for income',
              isSystem: !1,
            },
            routesImportPath: './modules/income/config/routes.js',
            stateImportPath: './modules/income/config/state.js',
          },
          {
            mainConfig: {
              name: 'spending',
              fullName: 'Spending',
              description: 'Dashboard for spending',
              isSystem: !1,
            },
            routesImportPath: './modules/spending/config/routes.js',
            stateImportPath: './modules/spending/config/state.js',
          },
        ])
    },
  },
])
