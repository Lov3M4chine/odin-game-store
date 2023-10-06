function processGameImages(game) {
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

function replaceCoverSize(url, size = 't_cover_big') {
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
const COMMON_FIELDS = `fields name,summary,cover.url,genres.name,platforms,platforms.name,screenshots.url,aggregated_rating,release_dates.date,release_dates.human,game_engines.name,game_modes.name,involved_companies.company.name,storyline`

function determineDataFieldParameters(dataType, query) {
  switch (dataType) {
    // Search
    case 'search':
      if (!query) {
        throw new Error('Query is required for search dataType')
      }
      return `search "${query}"; ${COMMON_FIELDS}; where cover.url != null; limit 100;`
    // Top
    case 'recentlyReleased':
      return `${COMMON_FIELDS}; where platforms = (6,130,167,49,169,48) & cover.url != null & release_dates.date > ${threeMonthsAgoInSeconds} & release_dates.date < ${todayInSeconds}; sort release_dates.date desc; limit 500;`
    case 'top100':
      return `${COMMON_FIELDS}; where platforms = (6,130,167,49,169,48) & cover.url != null & aggregated_rating != null; sort aggregated_rating desc; limit 100;`
    case 'comingSoon':
      return `${COMMON_FIELDS}; where platforms = (6,130,167,49,169,48) & cover.url != null & release_dates.date > ${todayInSeconds} & release_dates.date < ${threeMonthsFromNowInSeconds}; sort release_dates.date asc; limit 500;`
    // Platforms
    case 'xbox':
      return `${COMMON_FIELDS}; where platforms = (169) & cover.url != null & aggregated_rating != null; sort aggregated_rating desc; limit 500;`
    case 'playstation':
      return `${COMMON_FIELDS}; where platforms = (167) & cover.url != null & aggregated_rating != null; sort aggregated_rating desc; limit 500;`
    case 'pc':
      return `${COMMON_FIELDS}; where platforms = (6) & cover.url != null & aggregated_rating != null; sort aggregated_rating desc; limit 500;`
    case 'switch':
      return `${COMMON_FIELDS}; where platforms = (130) & cover.url != null & aggregated_rating != null; sort aggregated_rating desc; limit 500;`
    // Genre
    case 'adventure':
      return `${COMMON_FIELDS}; where platforms = (6,130,167,49,169,48) & cover.url != null & aggregated_rating != null & genres.name = "Adventure"; sort aggregated_rating desc; limit 100;`
    case 'indie':
      return `${COMMON_FIELDS}; where platforms = (6,130,167,49,169,48) & cover.url != null & aggregated_rating != null & genres.name = "Indie"; sort aggregated_rating desc; limit 100;`
    case 'RPG':
      return `${COMMON_FIELDS}; where platforms = (6,130,167,49,169,48) & cover.url != null & aggregated_rating != null & genres.name = "Role-playing (RPG)"; sort aggregated_rating desc; limit 100;`
    case 'strategy':
      return `${COMMON_FIELDS}; where platforms = (6,130,167,49,169,48) & cover.url != null & aggregated_rating != null & genres.name = "Strategy"; sort aggregated_rating desc; limit 100;`
    case 'puzzle':
      return `${COMMON_FIELDS}; where platforms = (6,130,167,49,169,48) & cover.url != null & aggregated_rating != null & genres.name = "Puzzle"; sort aggregated_rating desc; limit 100;`
    case 'shooter':
      return `${COMMON_FIELDS}; where platforms = (6,130,167,49,169,48) & cover.url != null & aggregated_rating != null & genres.name = "Shooter"; sort aggregated_rating desc; limit 100;`
    default:
      throw new Error(`Unsupported dataType '${dataType}' provided...`)
  }
}

function setDataFieldParameters(req, res, next) {
  req.dataFieldParameters = determineDataFieldParameters(
    req.query.dataType,
    req.query.query
  )
  next()
}

module.exports = {
  processGameImages,
  replaceCoverSize,
  threeMonthsAgoInSeconds,
  threeMonthsFromNowInSeconds,
  todayInSeconds,
  COMMON_FIELDS,
  determineDataFieldParameters,
  setDataFieldParameters
}
