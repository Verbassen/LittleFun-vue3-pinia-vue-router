<template>
    <div>
        <LayoutNav/>
        <LayoutHeader/>
        <!-- 二级路由出口 -->
        <router-view></router-view>
        <layout-footer/>
        
    </div>
</template>

<script setup>
import LayoutNav from './components/LayoutNav.vue';
import LayoutHeader from './components/LayoutHeader.vue';
import LayoutFooter from './components/LayoutFooter.vue';
import { useCategoryStore } from '@/stores/categoryStore';
import { onMounted } from 'vue';

const categoryStore = useCategoryStore();
onMounted(() => {
    categoryStore.getCategory();
});
</script>

<style lang="scss" scoped>

</style>