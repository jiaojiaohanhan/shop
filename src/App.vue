<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/> -->

    <!-- <div class="box">Hello world</div> -->

    <router-view></router-view>
    <ul class="footer-bar">
      <li class="footer-bar-item">
        <router-link to="/">首页</router-link>
      </li>
      <li class="footer-bar-item">
        <router-link to="/category">分类</router-link>
      </li>
      <li class="footer-bar-item">
        <router-link to="/cart">购物车</router-link>
      </li>
      <li class="footer-bar-item">
        <router-link to="/profile">我的</router-link>
      </li>
    </ul>
  </div>
</template>

<style lang="scss">
// #app {
//   font-family: 'Avenir', Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
// }
// #nav {
//   padding: 30px;
//   a {
//     font-weight: bold;
//     color: #2c3e50;
//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }

// .box{
//   width: 100%;
//   height: 200px;
//   background-color: #f00;
// }
// @media (max-width: 400px) {
//   .box{
//     width: 50%;
//     background-color: #00f;
//   }
// }

.footer-bar{
  display:flex;
  background-color: #eee;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 1rem;
  line-height: 1rem;
  &-item{
    flex-grow: 1;
    text-align: center;
  }
}
</style>
