<template>
  <div class="w-full h-full">
    <div class="w-3/4 mx-auto mt-10">
      <NuxtLink to="https://www.figma.com/proto/VIZzVxIO16JB9dtkfVFvmv/21day-challenge?page-id=1270%3A3&node-id=1561-92&node-type=frame&viewport=-777%2C630%2C0.11&t=QJh2Up7x7TO3sCv3-1&scaling=scale-down-width&content-scaling=fixed&starting-point-node-id=1576%3A158" target="_blank" rel="noopener" class="link-hover flex text-xl mb-2 mx-2">
        <h4>UI Works</h4>
        <i class="ms-auto ri-arrow-right-s-line"></i>
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped>
.link-hover {
  position: relative;
}

.link-hover::after {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  bottom: -4px;
  left: 0;
  background-color: currentColor;
  transition: width 0.3s ease-in-out;
}

.link-hover:hover::after {
  width: 97%;
}
</style>