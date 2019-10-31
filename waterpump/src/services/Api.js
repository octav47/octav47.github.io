import fetch from 'isomorphic-fetch'

class Service {
	async get(url) {
		const response = await fetch(url)
		const json = await response.json()

		return json
	}
}

const service = new Service()

export default service
