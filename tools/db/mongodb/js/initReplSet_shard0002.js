rs.initiate()
rs.add("127.0.0.1:27027")
rs.add("127.0.0.1:27028")
rs.add("127.0.0.1:27029")
printjson(rs.status())
