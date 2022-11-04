// Base url for fetching from either mock api or actual api
// Pass /?useMockApi=true into param for mock data
// DEV ONLY

const params = new Proxy(new URLSearchParams(window.location.search), {
  get: (searchParams, prop) => {
    return searchParams.get(prop)
  }
});

export const getBaseUrl = () => {
  // Get port from package.json (start-mockapi)
  return params.useMockApi ? 'http://localhost:3001/' : 'https://glacial-taiga-18173.herokuapp.com/'
}
