import Vue from 'vue'
import {
  markdown
} from 'markdown'

Vue.filter('markdown', text => markdown.toHTML(text))
Vue.filter('date', date => date.slice(0, 10))
