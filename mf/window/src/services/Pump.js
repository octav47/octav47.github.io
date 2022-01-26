import api from './Api'

class Service {
	async status() {
		const response = await api.get('/status')

		return response
	}

	async start() {
		const response = await api.get('/water_start')

		return response
	}

	async stop() {
		const response = await api.get('/water_stop')

		return response
	}
}

const service = new Service()

export default service
