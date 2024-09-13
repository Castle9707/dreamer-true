<script>
import AlbumCard from '../components/card/AlbumCard.vue'

export default {
    name: 'IndexPage',
    components: { AlbumCard }
}
</script>

<template>
  <div>我是首頁。</div>
  <!-- 準備先排版一下卡片 4張*2 -->
  <AlbumCard />
</template>