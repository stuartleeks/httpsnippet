/**
 * @description
 * HTTP code snippet generator for Invoke-WebRequest
 *
 * @author
 * @stuartleeks
 *
 * for any questions or issues regarding the generated code snippet, please open an issue mentioning the author.
 */

'use strict'

var util = require('util')
var CodeBuilder = require('../../helpers/code-builder')

module.exports = function (source, options) {
  var opts = util._extend({
    indent: '  ',
    cors: true
  }, options)

  var code = new CodeBuilder(opts.indent)
  var methods = ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'HEAD', 'OPTIONS']
  var method = source.method.toUpperCase()
  var baseCommandString = ''
  var headersString = ''
  var methodString = ''
  var bodyString = ''
  var webSessionString = ''


  if (methods.indexOf(method) === -1) {
    return 'Method not supported'
  } else {
    baseCommandString = 'Invoke-WebRequest -Uri "' + source.fullUrl + '"';
    if (method !== 'GET') {
      methodString = ' -Method ' + method
    }
  }

  var headers = Object.keys(source.headersObj)
  if (headers.length) {
    headers.forEach(function (key) {
      if (headersString !== ''){
        headersString += '; '
      }
      headersString += '"' + key + '" = "' + source.headersObj[key] + '"'
    })
    headersString = ' -Headers @{' + headersString + '}'
  }

  if (source.cookies.length) {
    webSessionString = ' -WebSession $session'
    code.push('$session = New-Object Microsoft.PowerShell.Commands.WebRequestSession')
    source.cookies.forEach(function (cookie) {
      code.push('$session.Cookies.Add((New-Object System.Net.Cookie("%s", "%s", "/", "%s")))', cookie.name, cookie.value, source.uriObj.hostname)
    })
  }

  if (source.postData.text) {
   bodyString = ' -Body "' + source.postData.text.replace(/"/g, '""') + '"'
  }

  code.push("%s%s%s%s%s", baseCommandString, webSessionString, methodString, headersString, bodyString)
  return code.join()
}

module.exports.info = {
  key: 'invokewebrequest',
  title: 'Invoke-WebRequest',
  link: 'https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.utility/invoke-webrequest?view=powershell-6',
  description: 'PowerShell cmdlet for making HTTP calls'
}
