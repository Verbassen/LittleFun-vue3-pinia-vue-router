<template>
  <RouterLink to="/">
    <el-card shadow="hover" class="product-card">
      <img v-img-lazy="goods.picture" style="width: 100%; height: 163.4px" alt="" />
      <template #footer>
        <span class="proName">{{ goods.name }}</span
        ><br />
        <span class="proPrice">&yen;{{ goods.price }}</span>
      </template>
    </el-card>
  </RouterLink>
</template>

<script setup>
defineProps({
  goods: Object,
  default: () => {}
})
</script>

<style lang="scss" scoped>
.product-card {
  margin: 2px;
  .proName,
  .proPrice {
    display: block;
    text-align: center;
    font-size: 1rem;
    color: #333;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .proPrice {
    color: $priceColor;
  }
  .proName:hover {
    color: $xtxColor;
  }
}
</style>
