<template>
  <div class="hello window-small">
    <p class="cmd" v-html="entry" v-for="entry in history" :key="entry">
      {{ entry }}
    </p>
    <p class="input">
      <input type="text" v-model="cmd" @keyup.enter="process" autofocus />
    </p>
  </div>
</template>

<script>
export default {
  name: "AppTerminal",
  data() {
    return {
      cmd: "",
      history: [],
      commands: {
        help: "greet / about / why / twitter / github",
        greet: "Hello, World!",
        about: "murat.dev",
        github: "github.com/msrkc",
        twitter: "twitter.com/murats",
        why: "not?"
      }
    };
  },
  methods: {
    process() {
      this.history.push(this.cmd);

      if (this.commands.hasOwnProperty(this.cmd)) {
        this.history.push(this.commands[this.cmd]);
      } else {
        this.history.push(this.cmd + ": command not found");
      }

      this.cmd = "";
    }
  }
};
</script>
<style lang="stylus" scoped>
.cmd:nth-child(2n+1), .input {
  position: relative;
}

.cmd:nth-child(2n+1)::before, .input::before {
  color: #4faedf;
  content: '$';
  margin-right: 10px;
}

input[type=text] {
  background: 0 0;
  border: 0;
  color: inherit;
  display: inline-block;
  font-family: inherit;
  font-size: inherit;
  font-style: inherit;
  outline: 0;
}
</style>
