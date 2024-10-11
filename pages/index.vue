<script>
import AlbumCard from '@/components/card/AlbumCard.vue'

export default {
    name: 'IndexPage',
    components: { AlbumCard }
}
</script>

<template>
  <div class="container mx-auto">
    <div class="columns-2 lg:columns-4 mt-4">
      <AlbumCard />
    </div>
  </div>
</template>