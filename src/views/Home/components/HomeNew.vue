<template>
  <HomePanel title="新鲜好物" sub-title="重磅新品">
    <div class="card-container">
      <el-row :gutter="10" type="flex" justify="center">
        <el-col v-for="item in newProducts" :key="item.id" :xs="12" :sm="12" :lg="6">
          <RouterLink to="/">
            <el-card shadow="hover" class="product-card">
              <img v-img-lazy="item.picture" style="width: 100%" alt="" />
              <template #footer>
                <span class="proName">{{ item.name }}</span
                ><br />
                <span class="proPrice">&yen;{{ item.price }}</span>
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
import { getNewAPI } from '@/apis/home'

const newProducts = ref([])

const getNewporducts = async () => {
  const res = await getNewAPI()
  newProducts.value = res.result
}

onMounted(() => {
  getNewporducts()
})
</script>

<style scoped lang="scss">
.product-card {
  max-width: 100%;
  width: 100%;
}

.proName,
.proPrice {
  display: block;
  text-align: center;
  font-size: 1rem;
  color: #333;
}

.proPrice {
  color: $priceColor;
}

.proName:hover {
    color: $xtxColor;
  }
</style>
