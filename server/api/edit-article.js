import {
  Router
} from 'express'
import * as Datastore from 'nedb-core'

const router = Router()

router.patch('/administration/edit', function(req, res, next) {
  let db = new Datastore({
    filename: __dirname + '/../db/article',
    autoload: true
  })

  let id = req.body.id
  let title = req.body.title
  let text = req.body.text

  db
    .update({
      _id: id
    }, {
      $set: {
        title,
        text
      }
    }, error => {
      db.persistence.compactDatafile()
      if (!error) return res.sendStatus(200)
    })
})

export default router
