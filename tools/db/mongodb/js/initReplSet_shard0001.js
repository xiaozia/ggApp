rs.initiate()
rs.add("127.0.0.1:27017")
rs.add("127.0.0.1:27018")
rs.add("127.0.0.1:27019")
printjson(rs.status())
