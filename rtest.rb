username = "abc' OR '0=0"
password = "123' OR '0=0"
qry = "SELECT Username, Password FROM users
  WHERE Username='" + username + "' AND Password='" + password + "'"

p qry