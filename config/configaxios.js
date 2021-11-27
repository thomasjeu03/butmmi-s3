import Axios from 'axios'

export default new Axios ({
  baseUrl: process.env.NODE_ENV==='developpement' ? param.localhost : param.prodhost
})
