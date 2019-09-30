<template>
  <v-app>
      <Welcome/>
  </v-app>
</template>

<script>
import Welcome from '@/components/Welcome'

export default {
  name: 'App',
  components: {
    Welcome
  },
  data: () => ({
    //
  }),
};
</script>

<style lang="scss">
div{
    word-wrap: break-word;
}

</style>