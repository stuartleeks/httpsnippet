Invoke-WebRequest -Uri "http://mockbin.com/har" -Method POST -Headers @{"content-type" = "application/x-www-form-urlencoded"} -Body "foo=bar&hello=world"
