import api from '../../../utils/axios'

const getJokeByCategory = async (category) => {

  let params = {}

  if (category) {
    params.category = category
  }

  return await api.get('random', { params })
}

export default getJokeByCategory