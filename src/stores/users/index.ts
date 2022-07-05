import { defineStore } from "pinia";

interface UserState {
  firstName: string;
  lastName: string;
}

export const useUsers = defineStore("users", {
  state: () => ({
    firstName: "First",
    lastName: "Second",
  }),
  getters: {
    fullName(state: UserState) {
      return `${state.firstName} ${state.lastName}`;
    },
  },
  actions: {
    hello() {
      alert(`Hello i am ${this.fullName}`);
    },
  },
});
