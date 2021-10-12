import api from '../../../utils/axios'

const getJokeByCategory = async (category) => {

  let param = {}

  if (category) {
    param.category = category
  }

  return await api.get('random', param)
}

export default getJokeByCategory