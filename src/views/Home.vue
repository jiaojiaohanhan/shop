<template>
  <!-- <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div> -->

  <!-- <div>首页
      <van-button type="primary">主要按钮</van-button>
      <van-icon name="success"/>
  </div> -->

  <div class="container">
      <van-nav-bar title="首页" class="nav-title">
          <van-icon name="search" slot="left"></van-icon>
          <van-icon name="cart" slot="right"></van-icon>
      </van-nav-bar>

      <!-- 轮播图 -->
      <div class="carousel">
          <van-swipe :autoplay="3000">
            <van-swipe-item class="carousel-item" v-for="(item, index) in carouselItem" :key="index">
              <img v-lazy="item.imgSrc" alt="">
            </van-swipe-item>
          </van-swipe>
      </div>

      <!-- 热门商品 -->
      <div class="hot">
        <p class="hot-title">热门商品</p>
        <swiper class="hot-swiper" :options="swiperOption">
           <swiper-slide v-for="(item, index) in hotProducts" :key="index">
                <div class="hot-swiper-content">
                    <img :src="item.img" alt="">
                    <div>{{item.name}}</div>
                    <div>￥{{item.price}}</div>
                </div>
           </swiper-slide>
        </swiper>
      </div>

      <!-- 推荐商品 -->
      <div class="variety">
          <p>推荐商品</p>
          <ul>
            <li class="variety-item" v-for="(item, index) in varietyItem" :key="index">
              <img :src="item.img" alt="">
              <p>{{item.name}}</p>
              <p>￥{{item.price}}</p>
            </li>
          </ul>
      </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import axios from 'axios'
import url from '@/service.config.js'

export default {
  // name: 'home',
  // components: {
  //   HelloWorld
  // }
  data() {
    return {
      carouselItem:[//轮播图
          {
              name:"img1",
              imgSrc:""
          },
          {
              name:"img2",
              imgSrc:""
          },
          {
              name:"img3",
              imgSrc:""
          }
      ],
      hotProducts:[//热门商品
          {
              name:"img1",
              img:"",
              price:100
          },
          {
              name:"img2",
              img:"",
              price:200
          },
          {
              name:"img3",
              img:"",
              price:300
          },
          {
              name:"img4",
              img:"",
              price:400
          },
          {
              name:"img5",
              img:"",
              price:500
          },
          {
              name:"img6",
              img:"",
              price:600
          }
      ],
      swiperOption:{
          slidesPerView:3
      },
      varietyItem:[//推荐商品
          // {
          //     name:"img1",
          //     img:"",
          //     price:100
          // },
          // {
          //     name:"img2",
          //     img:"",
          //     price:200
          // },
          // {
          //     name:"img3",
          //     img:"",
          //     price:300
          // },
          // {
          //     name:"img4",
          //     img:"",
          //     price:400
          // },
          // {
          //     name:"img5",
          //     img:"",
          //     price:500
          // },
          // {
          //     name:"img6",
          //     img:"",
          //     price:600
          // },
          // {
          //     name:"img5",
          //     img:"",
          //     price:500
          // },
          // {
          //     name:"img6",
          //     img:"",
          //     price:600
          // },
          // {
          //     name:"img5",
          //     img:"",
          //     price:500
          // },
          // {
          //     name:"img6",
          //     img:"",
          //     price:600
          // },
          // {
          //     name:"img5",
          //     img:"",
          //     price:500
          // },
          // {
          //     name:"img6",
          //     img:"",
          //     price:600
          // }
      ]
    }
  }, 
  components:{
    swiper,
    swiperSlide
  },
  created() {
    // axios.get("https://bird.ioliu.cn/v2?url=https://api.douban.com/v2/movie/top250").then(res=>{
    //     console.log(res);
    // });
    let url1 = 'http://www.xxxx.com/getList'
    let url2 = 'http://www.xxxx.com/getUser'
    let url3 = 'http://www.xxxx.com/regexp'
    let url4 = 'http://www.xxxx.com/theList'
    let url5 = url.getVarietyItem
    axios.get(url5).then(res=>{
      console.log(res);
      this.varietyItem = res.data;
    })
  },
}
</script>

<style lang="scss">
.container{
  background-color: #eee;
}
.nav-title{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 2!important;
}
.carousel{
  margin-top: 1rem;
  height: 3rem;
  &-item{
    img{
      width: 100rem;
      height: 3rem;
    }
  }
}
.hot{
  margin-top: 0.2rem;
  background-color: #fff;
  &-title{
    width: 100%;
    height: 0.5rem;
    padding-left: 0.2rem;
    line-height: 0.5rem;
    box-sizing: border-box;
  }
  &-swiper{
    &-content{
      width: 2rem;
      text-align: center;
      img{
        width: 2rem;
        height: 2rem;
      }
    }
  }
}
.variety{
  margin-top: 0.2rem;
  background-color: #fff;
  text-align: center;
  margin-bottom: 1rem;
  ul{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    // justify-content: space-between;
  }
  &-item{
    flex-basis: 45%;
  }
  img{
    width: 2rem;
    height: 2rem;
  }
}
</style>

