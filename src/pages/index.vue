<template>
  <div class="index-wrap">
    <div class="index-left">
      <div class="index-left-block">
        <h2>全部产品</h2>
        <template v-for="product in productList">
          <h3 :key="product.id">{{ product.title }}</h3>
          <ul :key="product.id">
            <li v-for="item in product.list" :key="item.id">
              <a :href="item.url">{{ item.name }}</a>
              <span v-if="item.hot" class="hot-tag">HOT</span>
            </li>
          </ul>
          <div v-if="!product.last" :key="product.id" class="hr"></div>
        </template>
      </div>
      <div class="index-left-block">
        <h2>全部产品</h2>
        <ul>
          <li v-for="item in newsList" :key="item.id">
            <a :href="item.url" :key="item.id">{{  item.title }}</a>
          </li>
        </ul>
        <ul>
          <li v-for="item in productList.game" :key="item.id">
            <a :href="item.url">{{ item.name }}</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="index-right">
      <slide-show :slides="slides" :inv="slideSpeed" @onchange="doSomethingOnslideChange"></slide-show>
      <!-- <img src="../assets/slideShow/pic1.jpg" style="width: 900px;margin-bottom: 20px;"> -->
      <div class="index-board-list">
        <div class="index-board-item" v-for="(item, index) in boardList" :class="['index-board-' + item.id, {'line-last': (index+1)%2 === 0}]"  :key="item.id">
          <div class="index-board-item-inner">
            <h2>{{item.title}}</h2>
            <p>{{item.description}}</p>
            <div class="index-board-button">
              <router-link class="button" :to="{path:'detail'}">立即购买</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import slideShow from '../components/slideShow'
import axios from 'axios'
// eslint-disable-next-line
import data from '../mock/mock'
export default {
  components: {
    slideShow
  },
  created () {
    axios.get('api/getNewsList/')
      .then((res) => {
        console.log(res)
        this.newsList = res.data.list
      })
      .catch((error) => {
        console.log(error)
      })
    axios.get('api/getBoardList/')
      .then((res) => {
        console.log(res)
        this.boardList = res.data.list
      })
      .catch((error) => {
        console.log(error)
      })
    axios.get('api/getProductList/')
      .then((res) => {
        console.log(res)
        this.productList = res.data
      })
      .catch((error) => {
        console.log(error)
      })
    axios.get('api/getSlides/')
      .then((res) => {
        console.log(res)
        this.slides = res.data
      })
      .catch((error) => {
        console.log(error)
      })
  },
  data () {
    return {
      boardList: [],
      newsList: [],
      productList: {},
      slides: [],
      slideSpeed: 2000
    }
  },
  methods: {
    doSomethingOnslideChange () {
      console.log('doSomethingOnslideChange run')
    }
  }
}
</script>
<style scoped>
.index-wrap {
  width: 1200px;
  margin: 0 auto;
  overflow: hidden;
}
.index-left {
  float: left;
  width: 300px;
  text-align: left;
}
.index-right {
  float: left;
  width: 900px;
}
.index-left-block {
  margin: 15px;
  background: #fff;
  box-shadow: 0 0 1px #ddd;
}
.index-left-block .hr {
  margin-bottom: 20px;
  border-top: 2px solid rgba(227,228,232);
}
.index-left-block h2 {
  background: #4fc08d;
  color: #fff;
  padding: 10px 15px;
  margin-bottom: 20px;
}
.index-left-block h3 {
  padding: 0 15px 5px 15px;
  font-weight: bold;
  color: #222;
}
.index-left-block ul {
  padding: 10px 15px;
}
.index-left-block li {
  padding: 5px;
}
.index-board-list {
  overflow: hidden;
}
.index-board-item {
  float: left;
  width: 400px;
  background: #fff;
  box-shadow: 0 0 1px #ddd;
  padding: 20px;
  margin-right: 20px;
  margin-bottom: 20px;
}
.index-board-item-inner {
  min-height: 125px;
  padding-left: 120px;
}
.index-board-item-inner h2 {
  font-weight: bolder;
  margin-bottom: 20px;
}
.index-board-car .index-board-item-inner {
  background: url(../assets/images/1.png) no-repeat;
  background-size: 120px 120px;
}
.index-board-earth .index-board-item-inner {
  background: url(../assets/images/2.png) no-repeat;
  background-size: 120px 120px;
}
.index-board-loud .index-board-item-inner {
  background: url(../assets/images/3.png) no-repeat;
  background-size: 120px 120px;
}
.index-board-mountain .index-board-item-inner {
  background: url(../assets/images/4.png) no-repeat;
  background-size: 120px 120px;
}
.line-last {
  margin-right: 0;
}
.index-board-button {
  margin-top: 20px;
  width: 80px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  background: #4fc08d;
}
.index-board-button a {
  color: #fff;
}
.latest-news {
  min-height: 512px;
}
.hot-tag{
  background-color: red;
  color: #ffffff;
}
</style>
