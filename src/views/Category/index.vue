<script setup>
import { ArrowRight } from '@element-plus/icons-vue'
import GoodsItem from '../Home/components/GoodsItem.vue'
import { useCategory } from './composables/useCategory'
import { useBanner } from './composables/useBanner'

//获取分类数据
const {categoryData} = useCategory()

//获取商品banner数据
const { bannerList } = useBanner()

//监听滚动
// import { useScroll } from '@vueuse/core'
// onMounted(() => {
//   const { y } = useScroll(window)

//   watch(y, newValue => {
//     console.log('Scroll Y:', newValue)
//   })
// })
</script>

<template>
  <div class="top-category">
    <div class="container m-top-20">
      <!-- 面包屑 -->
      <div class="bread-container">
        <el-breadcrumb :separator-icon="ArrowRight">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>{{ categoryData.name }}</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <!-- 轮播图 -->
      <div class="home-banner">
        <el-carousel height="260px">
          <el-carousel-item v-for="item in bannerList" :key="item.id">
            <img :src="item.imgUrl" alt="" />
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="sub-list">
        <h3>全部分类</h3>
        <ul>
          <li v-for="i in categoryData.children" :key="i.id">
            <RouterLink :to="`/category/sub/${i.id}`">
              <img :src="i.picture" />
              <p>{{ i.name }}</p>
            </RouterLink>
          </li>
        </ul>
      </div>
      <div class="ref-goods" v-for="item in categoryData.children" :key="item.id">
        <div class="head">
          <h3>- {{ item.name }}-</h3>
        </div>
        <div class="body">
          <GoodsItem v-for="good in item.goods" :goods="good" :key="good.id" class="GoodsForm" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.top-category {
  h3 {
    font-size: 28px;
    color: #666;
    font-weight: normal;
    text-align: center;
    line-height: 100px;
  }

  .sub-list {
    margin-top: 20px;
    background-color: #fff;

    ul {
      display: flex;
      padding: 0 32px;
      flex-wrap: wrap;
      justify-content: center;

      li {
        width: 160px;
        height: 200px;
        border: 1px solid #d6d6d6;
        border-radius: 5px;
        margin: 3px;

        a {
          text-align: center;
          display: block;
          font-size: 1rem;
          color: #666;

          img {
            width: 130px;
            height: 150px;
            margin-top: 10px;
          }

          p {
            line-height: 40px;
          }

          &:hover {
            color: $xtxColor;
          }
        }
      }
    }
  }

  .ref-goods {
    background-color: #fff;
    margin-top: 20px;
    position: relative;

    .head {
      .xtx-more {
        position: absolute;
        top: 20px;
        right: 20px;
      }

      .tag {
        text-align: center;
        color: #999;
        font-size: 20px;
        position: relative;
        top: -20px;
      }
    }

    .body {
      display: flex;
      justify-content: space-around;
      padding: 0 30px 30px;
    }
  }

  .bread-container {
    padding: 25px 0;
  }
}

.home-banner {
  width: 840px;
  height: 260px;
  margin: 0 auto;

  img {
    width: 100%;
    height: 500px;
  }
}

.GoodsForm {
  width: 200px;
}
</style>
