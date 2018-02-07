import {
  Router
} from 'express'
import * as Datastore from 'nedb-core'

const router = Router()

router.delete('/delete-article', function(req, res, next) {
  let db = new Datastore({
    filename: __dirname + '/../db/article',
    autoload: true
  })

  let id = req.query.id

  let article = db
    .remove({
      _id: id
    }, error => {
      if (!error) res.sendStatus(200)
    })
})

export default router
