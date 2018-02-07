import {
  Router
} from 'express'
import * as Datastore from 'nedb-core'

const router = Router()

router.get('/get-article', function(req, res, next) {
  let db = new Datastore({
    filename: __dirname + '/../db/article',
    autoload: true
  })

  let id = req.query.id

  let article = db
    .findOne({
      _id: id
    }, (error, article) => res.json(article))
})

export default router
