import NodeCache from 'node-cache'

const cache = new NodeCache({ stdTTL: 24 * 60 * 60 })

export function checkCache(req, res, next, key) {
  console.log(`Checking cache. DataType is ${req.query.dataType}`)
  if (req.query.dataType === 'search') {
    console.log(`Data type is search. Skipping cache check.`)
    return next()
  }

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
  if (req.query.dataType === 'search') {
    return next()
  }

  if (req.cachedData) {
    console.log('Fetching from cache')
    return res.json(req.cachedData)
  }
  next()
}

export function setCache(req, key, data) {
  if (req.query.dataType !== 'search') {
    console.log('Setting cache')
    return cache.set(key, data)
  }
}
