export function processGameImages(game) {
  if (game.cover && game.cover.url) {
    game.cover.url = replaceCoverSize(game.cover.url, 't_cover_big')
  }

  if (game.screenshots) {
    game.screenshots = game.screenshots.map((screenshot) => {
      if (screenshot.url) {
        screenshot.url = replaceCoverSize(screenshot.url, 't_screenshot_huge')
      }
      return screenshot
    })
  }

  return game
}

export function replaceCoverSize(url, size = 't_cover_big') {
  if (!url) return url
  return url.replace(/t_[a-z_]+/, size)
}

export function determineDataFieldParameters(dataType) {
  switch (dataType) {
    case 'recentlyReleased':
      return 'fields name,summary,cover.url,genres,platforms.name,platforms.platform_logo,screenshots.url,rating,release_dates.y; where platforms = (6,130,167,49,169,48) & cover.url != null & release_dates.y > 2022; sort release_dates.y desc; limit 10;'
    case 'top100':
      return 'fields name, ... ; your request data for top100'
    default:
      throw {
        name: 'UnsupportedDataTypeError',
        message: `Unsupported dataType '${dataType}' provided...`
      }
  }
}

export function setDataFieldParameters(req, res, next) {
  req.dataFieldParameters = determineDataFieldParameters(req.query.dataType)
  next()
}

export function determineEndpoint(dataType) {
  switch (dataType) {
    case 'recentlyReleased':
      return 'https://api.igdb.com/v4/games'
    case 'top100':
      return 'https://api.igdb.com/v4/games'
    default:
      throw {
        name: 'UnsupportedDataTypeError',
        message: `Unsupported dataType '${dataType}' provided...`
      }
  }
}

export function setEndpoint(req, res, next) {
  req.endpoint = determineEndpoint(req.query.dataType)
  next()
}
