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

const threeMonthsAgoInSeconds = (() => {
  const currentDate = new Date() // Gets the current date and time.
  currentDate.setMonth(currentDate.getMonth() - 3) // Subtracts three months.
  return Math.floor(currentDate.getTime() / 1000) // Gets the time in seconds since the Unix epoch.
})()

const threeMonthsFromNowInSeconds = (() => {
  const currentDate = new Date() // Gets the current date and time.
  currentDate.setMonth(currentDate.getMonth() + 3) // Subtracts three months.
  return Math.floor(currentDate.getTime() / 1000) // Gets the time in seconds since the Unix epoch.
})()

const todayInSeconds = Math.floor(Date.now() / 1000)

export function determineDataFieldParameters(dataType) {
  switch (dataType) {
    // Top
    case 'recentlyReleased':
      return `fields name,summary,cover.url,genres.name,platforms,platforms.name,screenshots.url,release_dates.date; where platforms = (6,130,167,49,169,48) & cover.url != null & release_dates.date > ${threeMonthsAgoInSeconds} & release_dates.date < ${todayInSeconds}; sort release_dates.date desc; limit 500;`
    case 'top100':
      return 'fields name,summary,cover.url,genres.name,platforms,platforms.name,screenshots.url,aggregated_rating; where platforms = (6,130,167,49,169,48) & cover.url != null & aggregated_rating != null; sort aggregated_rating desc; limit 100;'
    case 'comingSoon':
      return `fields name,summary,cover.url,genres.name,platforms,platforms.name,screenshots.url,release_dates.date; where platforms = (6,130,167,49,169,48) & cover.url != null & release_dates.date > ${todayInSeconds} & release_dates.date < ${threeMonthsFromNowInSeconds}; sort release_dates.date asc; limit 500;`
    // Platforms
    case 'xbox':
      return 'fields name,summary,cover.url,genres.name,platforms,platforms.name,screenshots.url,aggregated_rating; where platforms = (169) & cover.url != null & aggregated_rating != null; sort aggregated_rating desc; limit 500;'
    case 'playstation':
      return 'fields name,summary,cover.url,genres.name,platforms,platforms.name,screenshots.url,aggregated_rating; where platforms = (167) & cover.url != null & aggregated_rating != null; sort aggregated_rating desc; limit 500;'
    case 'pc':
      return 'fields name,summary,cover.url,genres.name,platforms,platforms.name,screenshots.url,aggregated_rating; where platforms = (6) & cover.url != null & aggregated_rating != null; sort aggregated_rating desc; limit 500;'
    case 'switch':
      return 'fields name,summary,cover.url,genres.name,platforms,platforms.name,screenshots.url,aggregated_rating; where platforms = (130) & cover.url != null & aggregated_rating != null; sort aggregated_rating desc; limit 500;'
    // Genre
    case 'adventure':
      return 'fields name,summary,cover.url,genres.name,platforms,platforms.name,screenshots.url,aggregated_rating; where platforms = (6,130,167,49,169,48) & cover.url != null & aggregated_rating != null & genres.name = "Adventure"; sort aggregated_rating desc; limit 100;'
    case 'indie':
      return 'fields name,summary,cover.url,genres.name,platforms,platforms.name,screenshots.url,aggregated_rating; where platforms = (6,130,167,49,169,48) & cover.url != null & aggregated_rating != null & genres.name = "Indie"; sort aggregated_rating desc; limit 100;'
    case 'RPG':
      return 'fields name,summary,cover.url,genres.name,platforms,platforms.name,screenshots.url,aggregated_rating; where platforms = (6,130,167,49,169,48) & cover.url != null & aggregated_rating != null & genres.name = "Role-playing (RPG)"; sort aggregated_rating desc; limit 100;'
    case 'strategy':
      return 'fields name,summary,cover.url,genres.name,platforms,platforms.name,screenshots.url,aggregated_rating; where platforms = (6,130,167,49,169,48) & cover.url != null & aggregated_rating != null & genres.name = "Strategy"; sort aggregated_rating desc; limit 100;'
    case 'puzzle':
      return 'fields name,summary,cover.url,genres.name,platforms,platforms.name,screenshots.url,aggregated_rating; where platforms = (6,130,167,49,169,48) & cover.url != null & aggregated_rating != null & genres.name = "Puzzle"; sort aggregated_rating desc; limit 100;'
    case 'shooter':
      return 'fields name,summary,cover.url,genres.name,platforms,platforms.name,screenshots.url,aggregated_rating; where platforms = (6,130,167,49,169,48) & cover.url != null & aggregated_rating != null & genres.name = "Shooter"; sort aggregated_rating desc; limit 100;'
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
