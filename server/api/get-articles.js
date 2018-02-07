import {
  Router
} from 'express'
import * as Datastore from 'nedb-core'

const router = Router()

router.get('/get-articles', function(req, res, next) {
  let db = new Datastore({
    filename: __dirname + '/../db/article',
    autoload: true
  })

  db.find({}).sort({createdDate: -1}).exec((err, articles) => res.json(articles))
})

export default router
