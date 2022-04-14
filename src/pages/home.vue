<script setup lang="ts">
const router = useRouter()
const startHandle = () => {
  router.push('/1')
}

const moreLinkHandle = () => {
  router.push('/more')
}
</script>

<template>
  <div
    flex="~ col"
    mt-30
    items-center
    justify-center
    font-mono
    text="center gray-500 dark:gray-100"
  >
    <img
      src="../assets/logo.svg"
      h-40
      mb-10
    >
    <h1
      text="6xl"
      mb-5
    >
      Start RegExp
    </h1>
    <p text-xl>
      The game will get you started with regular expressions.
    </p>
    <button
      text-xl
      mt-10
      w-50
      p="y-2"
      border="2 gray-500 dark:gray-100"
      opacity="80 hover:100"
      @click="startHandle"
    >
      Start
    </button>
    <button
      text-xl
      mt-5
      w-50
      p="y-2"
      opacity="80 hover:100"
      border="2 gray-500 dark:gray-100"
      @click="moreLinkHandle"
    >
      More Link
    </button>
  </div>
</template>
