<script>
import AlbumCard from '../components/card/AlbumCard.vue'

export default {
    name: 'IndexPage',
    components: { AlbumCard }
}
</script>

<template>
  <!-- 準備先排版一下卡片 4張*2 -->
  <div class="container mx-auto">
    <div class="columns-2 lg:columns-4 mt-4">
      <AlbumCard />
      <AlbumCard />
      <AlbumCard />
      <AlbumCard />
      <AlbumCard />
      <AlbumCard />
      <AlbumCard />
      <AlbumCard />
    </div>
  </div>
</template>