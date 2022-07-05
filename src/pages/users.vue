<template>
  <article
    class="w-1/5 mx-auto flex justify-center items-center flex-col h-screen gap-2"
  >
    <div>First name : {{ users.firstName }}</div>
    <div>Last name : {{ users.lastName }}</div>
    <div>Full name : {{ users.fullName }}</div>
    <button
      class="w-full border border-gray-500 rounded-md"
      @click="onHelloClick"
    >
      Hello
    </button>
  </article>
</template>

<script lang="ts">
import { useUsers } from "@/stores";
import { defineComponent } from "vue";

export default defineComponent({
  name: "UsersPage",
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
