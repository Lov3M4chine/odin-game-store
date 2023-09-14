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
