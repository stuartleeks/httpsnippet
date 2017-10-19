$session = New-Object Microsoft.PowerShell.Commands.WebRequestSession
$session.Cookies.Add((New-Object System.Net.Cookie("foo", "bar", "/", "mockbin.com")))
$session.Cookies.Add((New-Object System.Net.Cookie("bar", "baz", "/", "mockbin.com")))
Invoke-WebRequest -Uri "http://mockbin.com/har" -WebSession $session -Method POST
