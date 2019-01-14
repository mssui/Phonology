<template>
  <div class="about">
    <navbar />
    <animation />
    <h1>Most up voted post will be here</h1>
    <footerComponent />
  </div>
</template>
<script>
import animation from "@/components/animation.vue"
import navbar from "@/components/navbar.vue"
import footerComponent from "@/components/footerComponent.vue"

export default {
  name: 'likedposts',
  components: {
    navbar,
    animation,
    footerComponent
  },
}
</script>