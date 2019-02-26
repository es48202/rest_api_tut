let mongoose = require('mongoose')

const server = 'ds149875.mlab.com:49875'
const database = 'rest_api_tut'
const user = 'tom_thumb'
const password = 'Mk23Zs75k'

mongoose.connect(`mongodb://${user}:${password}@${server}/${database}`)

let CustomerSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    required: true,
    unique: true
  }
})

module.exports = mongoose.model('Customer', CustomerSchema)
