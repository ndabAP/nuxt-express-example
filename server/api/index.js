import { Router } from 'express'
import signIn from './sign-in'
import createArticle from './create-article'
import editArticle from './edit-article'
import getArticles from './get-articles'
import getArticle from './get-article'
import deleteArticle from './delete-article'

const router = Router()

router.use(signIn)
router.use(createArticle)
router.use(editArticle)
router.use(getArticles)
router.use(getArticle)
router.use(deleteArticle)

export default router
