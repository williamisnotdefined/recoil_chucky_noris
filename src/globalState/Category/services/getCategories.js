import api from '../../../utils/axios'

const getCategories = async () => (
  await api.get('categories')
)

export default getCategories