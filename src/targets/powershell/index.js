'use strict'

module.exports = {
  info: {
    key: 'powershell',
    title: 'PowerShell',
    extname: '.ps1',
    default: 'invokewebrequest'
  },

  invokewebrequest: require('./invokewebrequest')
}
