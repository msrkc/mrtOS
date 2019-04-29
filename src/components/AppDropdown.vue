<template>
  <div>
    <div class="nav--menu-item-dropdown" v-if="menu">
      <span
        class="nav--menu-item-dropdown-span"
        v-for="(item, index) in menuItems"
        :key="`${item + index}`"
        @click="
          open(item.windowId);
          close();
        "
      >
        {{ item.name }}</span
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "AppName",
  props: ["menu", "menuItems", "open", "close"],
  data() {
    return {};
  }
};
</script>
