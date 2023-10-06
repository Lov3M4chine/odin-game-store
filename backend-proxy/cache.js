const NodeCache = require('node-cache')

const cache = new NodeCache({ stdTTL: 24 * 60 * 60 })

function checkCache(req, res, next, key) {
  console.log('Checking cache')
  if (req.query.dataType === 'search') {
    return next()
  }

  const cachedData = cache.get(key)
  if (cachedData) {
    req.cachedData = cachedData
  }
  next()
}

function getCache(req, res, next) {
  console.log('Getting data from cache')
  if (req.query.dataType === 'search') {
    return next()
  }

  if (req.cachedData) {
    return res.json(req.cachedData)
  }
  next()
}

function setCache(req, key, data) {
  console.log('Setting data in cache')
  if (req.query.dataType !== 'search') {
    return cache.set(key, data)
  }
}

module.exports = {
  checkCache,
  getCache,
  setCache
}
