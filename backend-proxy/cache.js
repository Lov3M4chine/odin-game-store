import NodeCache from 'node-cache'

const cache = new NodeCache({ stdTTL: 24 * 60 * 60 })

export function checkCache(req, res, next, key) {
  if (req.query.dataType === 'search') {
    return next()
  }

  const cachedData = cache.get(key)
  if (cachedData) {
    req.cachedData = cachedData
  }
  next()
}

export function getCache(req, res, next) {
  if (req.query.dataType === 'search') {
    return next()
  }

  if (req.cachedData) {
    return res.json(req.cachedData)
  }
  next()
}

export function setCache(req, key, data) {
  if (req.query.dataType !== 'search') {
    return cache.set(key, data)
  }
}
