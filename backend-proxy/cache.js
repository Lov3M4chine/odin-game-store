import NodeCache from 'node-cache'

const cache = new NodeCache({ stdTTL: 24 * 60 * 60 })

export function checkCache(req, res, next, key) {
  const cachedData = cache.get(key)
  console.log('Checking cach...')
  if (cachedData) {
    console.log('....cache found')
    req.cachedData = cachedData
  } else {
    console.log('....cache not found')
  }
  next()
}

export function getCache(req, res, next) {
  if (req.cachedData) {
    console.log('Fetching from cache')
    return res.json(req.cachedData)
  }
  next()
}

export function setCache(key, data) {
  console.log('Setting cache')
  return cache.set(key, data)
}
