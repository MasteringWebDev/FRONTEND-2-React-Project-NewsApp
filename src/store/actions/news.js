export const FETCH_NEWS_REQUESTED = 'FETCH_NEWS_REQUESTED'
export const FETCH_NEWS_SUCCESS = 'FETCH_NEWS_SUCCESS'
export const FETCH_NEWS_FAILED = 'FETCH_NEWS_FAILED'

export const fetchNewsRequested = () => ({
  type: FETCH_NEWS_REQUESTED
})

export const fetchNewsSuccess = (data) => ({
  type: FETCH_NEWS_SUCCESS,
  payload: data
})

export const fetchNewsFailed = (error) => ({
  type: FETCH_NEWS_FAILED,
  payload: error.message
})

export const fetchNews = () => {
  const API_ENDPOINT = 'https://newsapi.org/v2/top-headlines'
  const API_KEY = 'f40203cc39184176a487521beaf0836b'  
  return async (dispatch) => {
    try {
      dispatch(fetchNewsRequested())
      const res = await fetch(`${API_ENDPOINT}?apiKey=${API_KEY}&country=us`)
      const jsonRes = await res.json()
      dispatch(fetchNewsSuccess(jsonRes.articles))
    } catch (error) {
      console.log(error)
      dispatch(fetchNewsFailed(error))
    }
  }
}
