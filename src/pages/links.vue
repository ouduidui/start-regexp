<script setup lang="ts">
const links = [
  {
    title: 'I Hate Regex',
    url: 'https://ihateregex.io/',
  },
  {
    title: 'Regexper',
    url: 'https://regexper.com/',
  },
  {
    title: 'MDN | Regular Expressions',
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions',
  },
  {
    title: 'ReX',
    url: 'https://rex.antfu.me/',
  },
  {
    title: 'RegExr',
    url: 'https://regexr.com/',
  },
]
</script>

<template>
  <div
    flex="~ col"
    items-center
    justify-center
    font-mono
    text="xl center gray-500 dark:gray-100"
  >
    <h1
      text="3xl"
      mt-5
      mb-10
    >
      More Links About Regex
    </h1>
    <a
      v-for="(link, index) in links"
      :key="index"
      :href="link.url"
      target="blank"
      py-3
      my-2
      border="b-2 gray-500/0 hover:gray-500 dark:gray-100/0 hover:dark:gray-100"
    >
      {{ link.title }}
    </a>
  </div>
</template>
