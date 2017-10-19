Invoke-WebRequest -Uri "http://mockbin.com/har" -Method POST -Headers @{"content-type" = "text/plain"} -Body "Hello World"
