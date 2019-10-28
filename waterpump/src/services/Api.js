import fetch from 'isomorphic-fetch'

class Service {
	async getStatus() {
		const response = await fetch('/status')

		return response
	}
}

const service = new Service()

export default service
