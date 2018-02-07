import express from 'express'
import bodyParser from 'body-parser'
import {
  Nuxt,
  Builder
} from 'nuxt'
import * as Datastore from 'nedb-core'
import bcrypt from 'bcrypt'

const db = new Datastore({
  filename: 'server/db/user',
  autoload: true
})

import api from './api'

const app = express()
const host = process.env.HOST || '127.0.0.1'
const port = process.env.PORT || 3000

app.set('port', port)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))

app.use('/api', api)

let config = require('../nuxt.config.js')
config.dev = !(process.env.NODE_ENV === 'production')

const nuxt = new Nuxt(config)

if (config.dev) {
  const builder = new Builder(nuxt)
  builder.build()
}

app.use(nuxt.render)

app.listen(port, host)
console.log('Server listening on ' + host + ':' + port) // eslint-disable-line no-console

db
  .find({
      identifier: 1
    }, (error, user) => {
      if (!user) {
        const administrator = {
          identifier: 1,
          firstName: 'Alfarr',
          lastName: 'Ferdinand',
          password: bcrypt.hashSync('123456', bcrypt.genSaltSync(6))
        }

        db
          .insert(administrator, (error) => {
            if (error) throw new Error(error)
          })
        }
      })
