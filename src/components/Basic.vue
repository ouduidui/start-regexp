<script setup lang="ts">
const __DEV__ = import.meta.env.DEV

const regStr = ref('')

const isCheck = ref(false)
const test = 'HelloWorld'

watch(regStr, (val) => {
  if (val) {
    const reg = new RegExp(val, 'g')
    isCheck.value = reg.test(test)
    // eslint-disable-next-line no-console
    __DEV__ && console.log(reg)
  }
  else {
    isCheck.value = false
  }
})

</script>

<template>
  <div text="xl center gray-500 dark:gray-100" font="mono">
    <div pt-10 pb-5>
      /
      <input
        v-model="regStr"
        bg-transparent
        rounded-3xl
        border-1
        outline-none
        p="x-4 y-1"
        text="center"
      >
      /g
    </div>
    <div flex="~" item-center justify-center>
      <div v-if="!isCheck" i-mdi-checkbox-blank-circle-outline mr-2 />
      <div v-else i-mdi-checkbox-marked-circle-outline mr-2 />
      <div>{{ test }}</div>
    </div>
  </div>
</template>

<style scope></style>
