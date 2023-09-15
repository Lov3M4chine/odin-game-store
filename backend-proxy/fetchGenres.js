import axios from 'axios'

export default async function fetchGenresByIds(ids, accessToken) {
  try {
    const endpoint = 'https://api.igdb.com/v4/genres'
    const data = `fields name; where id = (${ids.join(',')});`

    const response = await axios({
      method: 'post',
      url: endpoint,
      headers: {
        Accept: 'application/json',
        'Client-ID': process.env.IGDB_CLIENT_ID,
        Authorization: `Bearer ${accessToken}`
      },
      data: data
    })

    // Mapping the response to a simple object for easier lookup later
    const genresMap = {}
    response.data.forEach((genre) => {
      genresMap[genre.id] = genre.name
    })

    return genresMap
  } catch (error) {
    console.error('Error fetching genres:', error)
    throw error
  }
}
