<template>
  <div class="container">

    <h2>- Blur + Hover effect</h2>
    <p class="p1">We make experimental short films</p>

    <h2>- Glitch</h2>
    <p class="p2 glitch" data-text="We make experimental short films">We make experimental short films</p>
    <p class="p2 glitch" data-text="We make experimental short films">We make experimental short films</p>

    <h2>- Glitch + Blur + Hover effect</h2>
    <p class="p3 glitch" data-text="We make experimental short films">We make experimental short films</p>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.container {
  background: black;
  font-family: snas-serif;
  padding: 30px;
}
h2 {
  color: white;
  font-weight: lighter;
}
p {
  color: white;
  font-size: 36px;
  cursor: pointer;
}
.p1 {
  color: transparent;
  text-shadow: 0 0 5px rgba(255, 255, 255, 0.5);
  transition: all 0.2s ease-out;
  &:hover {
    color: white;
  }
}
.glitch {
  position: relative;
}
@keyframes noise-anim {
  $steps: 20;
  @for $i from 0 through $steps {
    #{percentage($i*(1/$steps))} {
      clip: rect(random(100)+px, 9999px, random(100)+px, 0);
    }
  }
}
.glitch::after {
  content: attr(data-text);
  position: absolute;
  left: 2px;
  text-shadow: -1px 0 red;
  top: 0;
  color: white;
  background: black;
  overflow: hidden;
  clip: rect(0, 900px, 0, 0);
  animation: noise-anim 2s infinite linear alternate-reverse;
}

@keyframes noise-anim-2 {
  $steps: 20;
  @for $i from 0 through $steps {
    #{percentage($i*(1/$steps))} {
      clip: rect(random(100)+px, 9999px, random(100)+px, 0);
    }
  }
}
.glitch::before {
  content: attr(data-text);
  position: absolute;
  left: -1px;
  text-shadow: 1px 0 black;
  top: 0;
  color: white;
  background: black;
  overflow: hidden;
  clip: rect(0, 900px, 0, 0);
  animation: noise-anim-2 3s infinite linear alternate-reverse;
}

.p3.glitch {
  color: transparent;
  text-shadow: 0 0 4px rgba(255, 255, 255, 0.8);
  transition: all 0.2s ease-out;
  &:hover {
    color: white;
    //text-shadow: 0;
  }
}
.p3.glitch::after {
  opacity: 0.2;
  text-shadow: -3px 0 rgba(255, 0, 0, 0.9);
}
.p3.glitch::before {
  opacity: 0.2;
  text-shadow: 1px 0 rgba(255, 255, 255, 0.8);
}
</style>
