<script setup>
import { Search } from '@element-plus/icons-vue'
</script>

<template>
  <header class="app-header">
    <div class="container">
      <h1 class="logo">
        <RouterLink to="/">乐淘坊</RouterLink>
      </h1>
      <ul class="app-header-nav">
        <li class="home">
          <RouterLink to="/">首页</RouterLink>
        </li>
        <li><RouterLink to="/">居家</RouterLink></li>
        <li><RouterLink to="/">美食</RouterLink></li>
        <li><RouterLink to="/">服饰</RouterLink></li>
      </ul>
      <div class="search">
        <el-input v-model="input" :prefix-icon="Search" style="width: 240px;" placeholder="搜一搜" clearable />
      </div>
      <!-- 头部购物车 -->
    </div>
  </header>
</template>

<style scoped lang="scss">
.app-header {
  background: rgb(247, 249, 250);

  .container {
    display: flex;
    align-items: center;
  }

  .logo {
    width: 150px;

    a {
      display: block;
      height: 80px;
      width: 100%;
      margin: 10px;
      text-indent: -9999px;
      background: url('@/assets/images/logo.png') no-repeat center / contain;
    }
  }

  .app-header-nav {
    width: 820px;
    display: flex;
    padding-left: 40px;
    position: relative;
    z-index: 998;

    li {
      margin-right: 40px;
      width: 38px;
      text-align: center;
      color: #343432;
      a {
        font-size: 16px;
        font-weight: bold;
        line-height: 32px;
        height: 32px;
        display: inline-block;

        &:hover {
          color: $xtxColor;
          border-bottom: 1px solid $btnhoverColor;
        }
      }

      .active {
        color: $xtxColor;
        border-bottom: 1px solid $btnhoverColor;
      }
    }
  }

  .search {
    width: 240px;
    height: 32px;
    position: relative;
    line-height: 32px;
  }

  .cart {
    width: 50px;

    .curr {
      height: 32px;
      line-height: 32px;
      text-align: center;
      position: relative;
      display: block;

      .icon-cart {
        font-size: 22px;
      }

      em {
        font-style: normal;
        position: absolute;
        right: 0;
        top: 0;
        padding: 1px 6px;
        line-height: 1;
        background: $helpColor;
        color: #fff;
        font-size: 12px;
        border-radius: 10px;
        font-family: Arial;
      }
    }
  }
}
</style>
