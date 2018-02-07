import {mapMutations} from 'vuex'
import {
  markdown
} from 'markdown'
import debounce from 'lodash/debounce'

export default {
  data () {
    return {
      isLoading: false
    }
  },

  computed: {
    article: {
      get () {
        return this.$store.state.Article.article
      }
    },

    formattedTitle: {
      get () {
        return markdown.toHTML(`# ${this.article.title}`)
      }
    },

    formattedText: {
      get () {
        return markdown.toHTML(this.article.text)
      }
    }
  },

  watch: {
    article: {
      handler () {
        this.isLoading = true
        if (this.article.title || this.article.text) this.saveArticle()
      },

      deep: true
    }
  },

  methods: {
    saveArticle: debounce(async function () {
      await this.$store.dispatch('Article/patchArticle')
      this.isLoading = false
    }, 2000),

    ...mapMutations({
      setTitle: 'Article/SET_TITLE',
      setText: 'Article/SET_TEXT'
    })
  }
}
