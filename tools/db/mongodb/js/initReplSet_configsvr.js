rs.initiate()
rs.add("127.0.0.1:28017")
rs.add("127.0.0.1:28018")
rs.add("127.0.0.1:28019")
printjson(rs.status())
