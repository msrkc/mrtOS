import Vue from "vue";
export const eventHub = new Vue({
  data: {
    cachedWindow: null
  }
});

export const triggerMouseEvent = function triggerMouseEvent(node, eventType) {
  var clickEvent = document.createEvent("MouseEvents");
  clickEvent.initEvent(eventType, true, true);
  node.dispatchEvent(clickEvent);
};
