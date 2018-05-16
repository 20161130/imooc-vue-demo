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
        <h3>最新消息类</h3>
        <ul>
          <li v-for="item in productList.game" :key="item.id">
            <a :href="item.url">{{ item.name }}</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="index-right">
      <slide-show :slides="slides"></slide-show>
      <div class="index-board-list">
        <div class="index-board-item" v-for="(item, index) in boardList" :class="['index-board-' + index, {'line-last': (index+1)%2 === 0}]"  :key="item.id">
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
export default {
  data () {
    return {
      productList: {
        pc: {
          title: 'PC产品',
          list: [
            {
              name: '数据统计',
              url: 'http://starcraft.com'
            },
            {
              name: '数据预测',
              url: 'http://warcraft.com'
            },
            {
              name: '流量分析',
              url: 'http://overwatch.com',
              hot: true
            },
            {
              name: '广告发布',
              url: 'http://hearstone.com'
            }
          ]
        },
        app: {
          title: '手机应用类',
          last: true,
          list: [
            {
              name: '91助手',
              url: 'http://weixin.com'
            },
            {
              name: '产品助手',
              url: 'http://twitter.com'
            },
            {
              name: '智能地图',
              url: 'http://maps.com'
            },
            {
              name: '团队语音',
              url: 'http://phone.com'
            }
          ]
        }
      }
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
.index-bord-item-inner {
  min-height: 125px;
  padding-left: 120px;
}
.index-board-0 .index-board-item-inner {
  background: url(../assets/images/1.png) no-repeat;
}
.index-board-1 .index-board-item-inner {
  background: url(../assets/images/2.png) no-repeat;
}
.index-board-2 .index-board-item-inner {
  background: url(../assets/images/3.png) no-repeat;
}
.index-board-3 .index-board-item-inner {
  background: url(../assets/images/4.png) no-repeat;
}
.line-last {
  margin-right: 0;
}
.index-board-button {
  margin-top: 20px;
}
.latest-news {
  min-height: 512px;
}
.hot-tag{
  background-color: red;
  color: #ffffff;
}
</style>
