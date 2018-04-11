# mine

> 利用css中的clip属性，结合sass中的插值、函数、循环等实现影视中常见的信号故障特效（glitch effect）。

>效果展示
>> ![glitch-effect](../demo/demo1.gif)

> 核心代码
```scss
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
```

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
