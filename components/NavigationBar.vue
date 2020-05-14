<template>
  <div>
    <p>
        <span v-for="route in routes" :key="route.url">
            <span v-if="route.url">
        <nuxt-link :to="route.url">
            {{route.name}}
        </nuxt-link>
        </span>
        <span v-else> {{route.name}}</span> <i class="fas fa-angle-right" v-if="route != routes[routes.length - 1]"></i>
        </span>
    </p>
  </div>
</template>
<script>
export default {
  props: ["routes"]
};
</script>
<style>
</style>