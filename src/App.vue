<template>
  <div class="main">
    <TheNav />
    <router-view @enlarge-text="onEnlargeText"/>
  </div>
</template>

<script>
import TheNav from '@/components/TheNav'

export default {
  name: 'app',
  components: {
    TheNav
  },
  methods: {
    onEnlargeText: function () {
        console.log('ahis')
      }
  }
}
</script>

<style scoped>
.main {
  margin: 0;
  padding: 0;
  display: inline-block;
  width: 100%;
}
</style>
