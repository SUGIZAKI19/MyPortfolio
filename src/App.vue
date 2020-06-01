<template>
  <div style="width: 100%; margin: auto; min-width:375px; max-width:900px;">
    <router-view name="header"></router-view>
    <transition
      name="fade"
      mode="out-in"
      @before-enter="beforeEnter"
    >
      <router-view></router-view>
    </transition>
    <router-view name="footer"></router-view>
  </div>
</template>

<script>
export default {
  methods: {
    beforeEnter() {
      this.$root.$emit("triggerScroll");
    }
  }
};
</script>


<style scoped>
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.6s;
}
</style>
