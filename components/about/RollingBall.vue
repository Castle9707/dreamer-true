<template>
  <div class="frame absolute overflow-hidden"> 
    <div class="center">
      <div class="sphere">
        <div class="circle-1"></div>
        <div class="circle-2"></div>
        <div class="circle-3"></div>
        <div class="circle-4"></div>
        <div class="circle-5"></div>
        <div class="circle-6"></div>
        <div class="circle-7"></div>
        <div class="circle-8"></div>
        <div class="circle-9"></div>
        <div class="circle-10"></div>
        <div class="circle-11"></div>
        <div class="circle-12"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.frame {
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  margin: auto;
  border-radius: 2px;
	/* box-shadow: 4px 8px 16px 0 rgba(0,0,0,0.1); */
	display: flex;
	align-items: center;
	justify-content: center;
}
.center {
  position: relative;
  width: 10rem;
  height: 10rem;
  perspective: 1000px;
}

.sphere {
  width: 100%;
  height: 100%;
  animation: roll 10s infinite alternate;
  transform-style: preserve-3d;
}

[class^="circle-"] {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, .1);
  border-radius: 10rem;
  box-shadow: 0 0 15px rgba(255, 255, 255, .3);
  border: 2px solid white;
}

.circle-1 { transform: rotateX(30deg) rotateY(0deg); }
.circle-2 { transform: rotateX(60deg) rotateY(0deg); }
.circle-3 { transform: rotateX(90deg) rotateY(0deg); }
.circle-4 { transform: rotateX(120deg) rotateY(0deg); }
.circle-5 { transform: rotateX(150deg) rotateY(0deg); }
.circle-6 { transform: rotateX(180deg) rotateY(0deg); }
.circle-7 { transform: rotateY(30deg); }
.circle-8 { transform: rotateY(60deg); }
.circle-9 { transform: rotateY(90deg); }
.circle-10 { transform: rotateY(120deg); }
.circle-11 { transform: rotateY(150deg); }
.circle-12 { transform: rotateY(180deg); }

@keyframes roll {
  0% { transform: rotateX(0) rotateY(0) rotateZ(0);}
  20% { transform: rotateX(50deg) rotateY(15deg) rotateZ(90deg);  }
	40% { transform: rotateX(120deg) rotateY(180deg) rotateZ(90deg);  }
	60% { transform: rotateX(45deg) rotateY(270deg) rotateZ(90deg);  }
	80% { transform: rotateX(100deg) rotateY(70deg) rotateZ(25deg);  }
	100% { transform: rotateX(120deg) rotateY(95deg) rotateZ(360deg);  }
}
</style>