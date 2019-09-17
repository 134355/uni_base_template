import minRequest from './config'

export default {
	apis: {
		uniapp (data) {
			return minRequest.get('/s', data)
		}
	}
}
