const harvestAuthClientId = 'lw64eqcifZFZKsey_YaE8zvw'
const harvestAuthUrl = new URL('https://id.getharvest.com/oauth2/authorize')
harvestAuthUrl.searchParams.append('client_id', harvestAuthClientId)
harvestAuthUrl.searchParams.append('response_type', 'code')
harvestAuthUrl.searchParams.append('redirect_uri', 'http://localhost:8080/auth')

export default {
  harvestAuthClientId,
  harvestAuthUrl
}
