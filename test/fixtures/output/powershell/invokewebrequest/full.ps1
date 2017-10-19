$session = New-Object Microsoft.PowerShell.Commands.WebRequestSession
$session.Cookies.Add((New-Object System.Net.Cookie("foo", "bar", "/", "mockbin.com")))
$session.Cookies.Add((New-Object System.Net.Cookie("bar", "baz", "/", "mockbin.com")))
Invoke-WebRequest -Uri "http://mockbin.com/har?foo=bar&foo=baz&baz=abc&key=value" -WebSession $session -Method POST -Headers @{"content-type" = "application/x-www-form-urlencoded"; "accept" = "application/json"} -Body "foo=bar"
