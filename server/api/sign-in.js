import {
  Router
} from 'express'
import * as Datastore from 'nedb-core'
import bcrypt from 'bcrypt'
import CryptographyService from './services/CryptographyService'

const router = Router()

router.post('/sign-in', function(req, res, next) {
  let db = new Datastore({
    filename: __dirname + '/../db/user',
    autoload: true
  })

  let firstName = req.body.firstName
  let password = req.body.password

  db
    .findOne({
      firstName
    }, (error, user) => {
      if (user && bcrypt.compareSync(password, user.password)) {
        res.cookie('identifier', CryptographyService.encrypt(user.identifier))
        return res.sendStatus(200)
      } else return res.sendStatus(403)
    })
})

export default router
