Invoke-WebRequest -Uri "http://mockbin.com/har" -Method POST -Headers @{"content-type" = "application/json"} -Body "{""foo"":null}"
