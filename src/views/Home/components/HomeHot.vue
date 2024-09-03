<template>
  <HomePanel title="人气推荐" sub-title="人气upup">
    <div class="card-container">
      <el-row :gutter="10" type="flex" justify="center">
        <el-col v-for="item in hotProducts" :key="item.id" :xs="12" :sm="12" :lg="6">
          <RouterLink to="/">
            <el-card shadow="hover" class="product-card" style="margin-bottom: 10px;">
              <img v-img-lazy="item.picture" style="width: 100%" :alt="item.alt" />
              <template #footer>
                <span class="proTittle">{{ item.title }}</span>
              </template>
            </el-card>
          </RouterLink>
        </el-col>
      </el-row>
    </div>
  </HomePanel>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import HomePanel from './HomePanel.vue'
import { getHotAPI } from '@/apis/home'

const hotProducts = ref([])

const getHotporducts = async () => {
  const res = await getHotAPI()
  hotProducts.value = res.result
}

onMounted(() => {
  getHotporducts()
})
</script>

<style scoped lang="scss">
.product-card {
  max-width: 100%;
  width: 100%;
}

.proTittle {
  display: block;
  text-align: center;
  font-size: 1.5rem;
  color: #333;
  font-weight: bold;
}

.proTittle:hover {
    color: $xtxColor;
  }
</style>
