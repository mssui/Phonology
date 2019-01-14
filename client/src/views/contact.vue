<template>
  <div class="contact">
    <navbar />
    <animation />
    <h1>This is a contact page</h1>
    <footerComponent />
  </div>
</template>


<script>
import animation from "@/components/animation.vue"
import navbar from "@/components/navbar.vue"
import footerComponent from "@/components/footerComponent.vue"

export default {
  name: 'contact',
  components: {
    navbar,
    animation,
    footerComponent
  },
}
</script>
