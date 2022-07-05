<template>
  <main>
    <div>First name : {{ users.firstName }}</div>
    <div>Last name : {{ users.lastName }}</div>
    <div>Full name : {{ users.fullName }}</div>
    <button @click="onHelloClick">Hello</button>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useUsers } from "@/stores";

export default defineComponent({
  name: "App",
  components: {},
  setup() {
    // Declared useUsers store hook.
    const users = useUsers();

    // Hello button click event handler.
    const onHelloClick = () => users.hello();

    return {
      users,
      onHelloClick,
    };
  },
});
</script>

<style></style>
