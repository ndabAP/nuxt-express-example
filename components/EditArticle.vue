<template>
<div class="row">
  <div class="col">
    <div class="form-group">
      <input
        class="mb-3 form-control"
        :value="article.title"
        @input="setTitle($event.target.value)"
        type="text">
    </div>

    <div class="form-group">
      <textarea
        class="form-control"
        :value="article.text"
        @input="setText($event.target.value)"
        :rows="25">
      </textarea>
    </div>
  </div>

  <div class="col" :class="{loading: isLoading}">
    <span v-html="formattedTitle"></span>
    <span v-html="formattedText"></span>
  </div>
</div>
</template>

<script>
import ArticleMixin from './mixins/ArticleMixin'

export default {
  mixins: [ArticleMixin]
}
</script>

<style>
  .loading {
    opacity: 0.5;
  }
</style>
