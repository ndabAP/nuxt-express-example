import axios from 'axios'

const actions = {
  postArticle () {
    return new Promise(async (resolve, reject) => {
      try {
        let {
          data
        } = await axios
          .post('http://localhost:3000/api/administration/create')

        resolve(data)
      } catch (error) {
        reject(error)
      }
    })
  },

  getArticle ({state = undefined}, id) {
    return new Promise(async (resolve, reject) => {
      try {
        let {data} = await axios.get('http://localhost:3000/api/get-article', {
          params: {
            id
          }
        })
        resolve(data)
      } catch (error) {
        reject(error)
      }
    })
  },

  patchArticle ({state}) {
    return new Promise(async (resolve, reject) => {
      try {
        await axios
          .patch('http://localhost:3000/api/administration/edit', {
            id: state.article._id,
            title: state.article.title,
            text: state.article.text
          })

        resolve()
      } catch (error) {
        reject(error)
      }
    })
  },

  deleteArticle () {}
}

export default actions
