<template>
  <nav class="nav">
    <svg
      version="1.1"
      id="logo"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 56 49"
      enable-background="new 0 0 56 49"
      xml:space="preserve"
      class="nav--logo"
    >
      <polygon opacity="0.86" fill="#3794ff" points="1,1 1,48 55,48 " />
      <polygon opacity="0.86" fill="#3794ff" points="55,1 55,48 1,48 " />
    </svg>
    <span class="nav--title">
      {{ activeWindowTitle }}
    </span>
    <ul class="nav--menu">
      <li class="nav--menu-item">
        <span
          class="nav--menu-item-span"
          @click="closeOtherThan('welcomeDrop')"
        >
          File
        </span>
        <AppDropdown
          :menu="dropdowns.welcomeDrop"
          :menuItems="welcomeMenu"
          :open="$parent.openWindow"
          :close="closeOtherThan"
        />
      </li>
      <li class="nav--menu-item">
        <span
          class="nav--menu-item-span"
          @click="closeOtherThan('projectDrop')"
        >
          Edit
        </span>
        <AppDropdown
          :menu="dropdowns.projectDrop"
          :menuItems="projectMenu"
          :open="$parent.openWindow"
          :close="closeOtherThan"
        />
      </li>
      <li class="nav--menu-item">
        <span class="nav--menu-item-span" @click="$parent.openWindow('under')">
          View
        </span>
      </li>
      <li class="nav--menu-item">
        <span class="nav--menu-item-span" @click="$parent.openWindow('term')">
          Terminal
        </span>
      </li>
      <li class="nav--menu-item">
        <span class="nav--menu-item-span" @click="$parent.openWindow('under')">
          Help
        </span>
      </li>
    </ul>
  </nav>
</template>

<script>
import AppDropdown from "@/components/AppDropdown.vue";
export default {
  name: "AppHeader",
  components: { AppDropdown },
  props: ["activeWindowTitle"],
  data() {
    return {
      dropdowns: {
        welcomeDrop: false,
        projectDrop: false
      },
      welcomeMenu: [
        {
          name: "Item",
          windowId: "testWindow"
        },
        {
          name: "Item 2",
          windowId: "under"
        }
      ],
      projectMenu: [
        {
          name: "Item",
          windowId: "under"
        },
        {
          name: "Item 2",
          windowId: "testWindow"
        }
      ]
    };
  },
  methods: {
    closeOtherThan(clickedTo) {
      const dropdowns = this.dropdowns;
      Object.keys(dropdowns).forEach(function(entry) {
        if (entry === clickedTo) {
          dropdowns[entry] = !dropdowns[entry];
        }
        if (entry !== clickedTo) {
          dropdowns[entry] = false;
        }
      });
    }
  },
  mounted() {}
};
</script>

<style></style>
