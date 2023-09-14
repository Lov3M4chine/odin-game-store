import NodeCache from 'node-cache'

const cache = new NodeCache({ stdTTL: 24 * 60 * 60 })

export function checkCache(req, res, next, key) {
  const cachedData = cache.get(key)
  if (cachedData) {
    req.cachedData = cachedData
    next()
  } else {
    next()
  }
}

export function getCache(req, res, next) {
  if (req.cachedData) {
    console.log('Fetching from cache')
    return res.json(req.cachedData)
  }
  next()
}

export function setCache(key, data) {
  return cache.set(key, data)
}
