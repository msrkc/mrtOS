<template>
  <div :id="id" class="window">
    <div class="window--title">
      <button @click="closeWindow" class="window--title-icons">
        <i class="material-icons">change_history</i>
        <i class="material-icons">crop_square</i>
        <i class="material-icons">radio_button_unchecked</i>
      </button>
    </div>
    <div class="window--content">
      <div :is="content"></div>
    </div>
  </div>
</template>

<script>
import { TweenLite, Draggable } from "gsap/all";
import { eventHub, triggerMouseEvent } from "@/EventHub.js";
export default {
  name: "Window",
  props: ["id", "title", "content", "index"],
  data() {
    return {
      draggable: null
    };
  },
  methods: {
    closeWindow() {
      eventHub.$emit("close-window", this.index);
    }
  },
  mounted() {
    var id = "#" + this.$el.id;
    var title = this.title;
    var x = 0,
      y = 0;

    if (
      eventHub.cachedWindow &&
      document.getElementById(eventHub.cachedWindow)
    ) {
      var windowEl = document.getElementById(eventHub.cachedWindow);
      x = windowEl.getBoundingClientRect().left + 15;
      y = windowEl.getBoundingClientRect().top + 15;
    }

    TweenLite.set(id, {
      x: x,
      y: y
    });

    this.draggable = Draggable.create(id, {
      type: "x,y",
      edgeResistance: 0.65,
      bounds: ".window--restrictor",
      onPress: function onPress() {
        eventHub.$emit("window-focused", title);
      }
    });

    // LOL, "press"
    triggerMouseEvent(this.$el, "mousedown");
    triggerMouseEvent(this.$el, "mouseup");

    eventHub.cachedWindow = this.$el.id;
  }
};
</script>

<style></style>
