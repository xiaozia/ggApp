local util = require "server.account.util"
local resty_redis = require "resty.redis"
local _M = {}

function _M:new(config)
	config = config or util.config().db.config
	local db = resty_redis:new()
	if config.timeout then
		db:set_timeout(config.timeout)
	end
	local ok,err = db:connect(config.host,config.port)
	assert(ok,err)
	if config.auth then
		ok,err = db:auth(config.auth)
		assert(ok,err)
	end
	return db
end

function _M:close(db)
	db:set_keepalive(10000,100)
end

return _M
