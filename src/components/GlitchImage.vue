<template>
  <div>
    <h1>glitch effect demo</h1>
    <h2>纯CSS模拟信号故障特效</h2>
    <div class="wrapper">
      <div :class="`container container${i}`" v-for="i in imagesSrc.length" :key="i">
        <img :class="`img${j}`" v-for="j in 5" :key="j" :src="imagesSrc[i-1]" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      imagesSrc:[
        '../../static/img1.jpg',
        '../../static/img2.jpg',
        '../../static/img3.jpg',
        '../../static/img4.jpg',
        '../../static/img5.jpg',
        '../../static/img6.jpg',
        '../../static/img7.jpg',
        '../../static/img8.jpg',
        '../../static/img9.jpg',
        '../../static/img10.jpg'
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
h1, h2{
  text-align: center;
}
h1{
  font-size: 3rem;
}
h2{
  margin-bottom: 50px;
}
.wrapper{
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  align-content: center;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
}
.container{
  padding: 0;
  margin: 10px 0;
  position: relative;
  width: 500px;
  height: 320px;
  overflow: hidden;
}
img{
  width: 100%;
  height: 100%;
  position: absolute;
  object-fit: fill;
}

@for $n from 1 through 12{
  .container#{$n} img:nth-child(n+2) {
    opacity: 0;
  }
  .container#{$n} {
    cursor: pointer;
  }
  .container#{$n}:hover img:nth-child(n+2) {
    opacity: 1;
  }
  .container#{$n}:hover > .img2{
    filter: hue-rotate(60deg) opacity(0.1);
    transform: translate3d(3px, -3px, 0);
    animation: glitch2-#{$n} #{3+random(3)}s ease #{random(5) / 10}s infinite alternate;
  }
  .container#{$n}:hover > .img3{
    filter: hue-rotate(240deg) opacity(0.3) saturate(2);
    transform: translate3d(-4px, 4px, 0);
    animation: glitch3-#{$n} #{3+random(3)}s ease-in #{random(5) / 10}s infinite alternate;
  }
  .container#{$n}:hover > .img4{
    filter: hue-rotate(150deg) opacity(0.5);
    transform: translate3d(2px, -2px, 0);
    animation: glitch4-#{$n} #{3+random(3)}s ease-out #{random(5) / 10}s infinite alternate;
  }
  .container#{$n}:hover > .img5{
    filter: hue-rotate(180deg) opacity(0.8) saturate(0.2);
    transform: translate3d(-2px, 2px, 0);
    animation: glitch5-#{$n} #{3+random(3)}s step-end infinite;
  }
  @keyframes glitch2-#{$n} {
    $steps: 25 + random(25);
    @for $i from 0 through $steps{
      $randomBase: random(320);
      #{percentage($i * (1 / $steps) / 2)} {
        filter: brightness(random(30) / 10) hue-rotate(random(360)+deg);
        clip: rect($randomBase+px, (490+random(20))+px, ($randomBase + random(30))+px, (random(40) - 30)+px);
      }
    }
    to {
      clip: rect(0, 9999px, 500, 0)
    }
  }
  @keyframes glitch3-#{$n} {
    $steps: 25 + random(25);
    @for $i from 0 through $steps{
      $randomBase: random(320);
      #{percentage($i * (1 / $steps) / 2)} {
        filter: blur(random(5)+px);
        transform: scale(0.9 + random(2) / 10) translate3d((random(100) / 10 * 2)+px, (-1 * random(10))+px, 0);
        clip: rect($randomBase+px, (490+random(20))+px, ($randomBase + random(40))+px, (random(20) - 10)+px);
      }
    }
    to {
      clip: rect(0, 9999px, 500, 0)
    }
  }
  @keyframes glitch4-#{$n} {
    $steps: 25 + random(25);
    @for $i from 0 through $steps{
      $randomBase: random(320);
      #{percentage($i * (1 / $steps) / 2)} {
        filter: contrast(random(30) / 10) brightness(random(30) / 10) saturate(random(50)/10);
        clip: rect($randomBase+px, (490+random(20))+px, ($randomBase + random(30))+px, (random(20) - 10)+px);
      }
    }
    to {
      clip: rect(0, 9999px, 500, 0);
    }
  }
  @keyframes glitch5-#{$n} {
    // $steps: 25+random(25);
    // @for $i from 0 through $steps{
    //   $randomBase: random(320);
    //   #{percentage($i * (1 / $steps) / 2)} {
    //     filter: blur(random(5)+px);
    //     transform: translate3d((random(100) / 10 * -2)+px, random(10)+px, 0) scale(0.9 + random(2)/10);
    //     clip: rect($randomBase+px, (490+random(20))+px, ($randomBase + random(50))+px, (random(20) - 10)+px);
    //   // $randomBase: random(500);
    //   // #{percentage($i * (1 / $steps) / 3)} {
    //   //   clip: rect(random(20)+px, $randomBase+px, (300 + random(20))+px, ($randomBase - random(15))+px);
    //   }
    // }
    // to {
    //   clip: rect(0, 9999px, 500, 0);
    // }
    0% { 
      opacity: 0.2; 
      transform: translate3d(20px, 5px, 0);
    }
    33% {
      opacity: 0;
      transform: translate3d(-20, -5, 0) scale(1.1);
    }
    100% { 
      opacity: 0;
      transform: translate3d(0,0,0) scale(1);
    }
  }
}
</style>

