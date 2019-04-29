import TestWindow from "./components/Windows/TestWindow.vue";
import Under from "./components/Windows/Under.vue";
import Terminal from "./components/Windows/Terminal.vue";
const windows = [
  {
    title: "Test Window 🙃",
    id: "testWindow",
    isShowing: false,
    comp: TestWindow
  },
  {
    title: "Under Construction",
    id: "under",
    isShowing: false,
    comp: Under
  },
  {
    title: "term",
    id: "term",
    isShowing: true,
    comp: Terminal
  }
];

export default windows;
