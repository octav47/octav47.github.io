import fetch from 'isomorphic-fetch'

class Service {
	async get(url) {
		const response = await fetch(url)

		return response
	}
}

const service = new Service()

export default service
