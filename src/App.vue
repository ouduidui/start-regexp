<template>
  <div flex="~ col" min-h-screen select-none>
    <main flex-1 container m-auto pt-10>
      <router-view :key="$route.fullPath" />
    </main>
    <Footer />
  </div>
  <toast />
</template>
