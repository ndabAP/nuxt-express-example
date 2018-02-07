import {
  Router
} from 'express'
import * as Datastore from 'nedb-core'

const router = Router()

router.post('/administration/create', function(req, res, next) {
  let db = new Datastore({
    filename: __dirname + '/../db/article',
    autoload: true
  })

  let title = ''
  let text = ''
  let createdDate = new Date()

  db
    .insert({
      title,
      text,
      createdDate
    }, (error, article) => {
      db.persistence.compactDatafile()
      if (!error) return res.json(article)
    })
})

export default router
