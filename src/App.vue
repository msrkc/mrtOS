<template>
  <!-- eslint-disable vue/no-use-v-if-with-v-for  -->
  <div id="app">
    <AppHeader :activeWindowTitle="activeWindowTitle" />
    <div class="window--restrictor">
      <transition-group name="fade">
        <window
          v-if="window.isShowing"
          :id="window.id"
          v-for="(window, index) in windows"
          :key="index"
          :content="window.comp"
          :title="window.title"
          :index="window.id"
        >
        </window>
      </transition-group>
    </div>
    <AppFooter />
  </div>
</template>

<script>
import Window from "@/components/Window.vue";
import windows from "@/Windows.js";
import { eventHub, triggerMouseEvent } from "@/EventHub.js";
import AppHeader from "@/components/AppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";
export default {
  name: "app",
  components: {
    Window,
    AppHeader,
    AppFooter
  },
  data() {
    return {
      windows: windows,
      activeWindowTitle: "mrtOS"
    };
  },
  created() {
    eventHub.$on("close-window", this.closeWindow);
    eventHub.$on("window-focused", this.focusWindow);
  },
  methods: {
    closeWindow(element) {
      const match = this.windows.filter(x => x.id === element);
      match[0].isShowing = false;
      const closedWindowCount = this.windows.filter(w => !w.isShowing).length;
      if (closedWindowCount === this.windows.length) {
        this.focusWindow("mrtOS");
      }
    },
    focusWindow(title) {
      this.activeWindowTitle = title;
    },
    openWindow(element) {
      const match = this.windows.filter(x => x.id === element)[0];
      if (match.isShowing) {
        var el = document.getElementById(match.id);
        triggerMouseEvent(el, "mousedown");
        triggerMouseEvent(el, "mouseup");
      } else {
        match.isShowing = true;
      }
    }
  }
};
</script>

<style src="@/assets/style.styl" lang="stylus"></style>
