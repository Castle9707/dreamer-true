<script setup>
</script>

<template>
  <div class="card">
    <div class="card_img"></div>
    <div class="card_content">
      <div class="card_content_header">
        <h2 class="card_content_heading">瓦合</h2>
           <p class="card_content_subheading">草東沒有派對</p>
      </div>
      <p class="card_content_text">
        專輯簡介！
      </p>
    </div>
  </div>
</template>

<style>
.card {
	--circle-radius: 30px;
	width: 240px;
	min-height: 240px;
	background-color: #1e1e1e;
	border-radius: var(--circle-radius);
	overflow: hidden;
}
.card_img {
	position: relative;
	width: 100%;
	height: 240px;
	background: url(../../static/images/caodong.jpg) no-repeat center center / cover;
}
/* 文字內容 */
.card_content {
	position: relative;
	bottom: calc(var(--circle-radius) / 2);
	margin-inline: 40px;
	/* 利用 grid 將文字藏起來 */
	display: grid;
	grid-template-rows: min-content 0fr;
	transition: grid-template-rows 0.4s;
}
.card_content_heading {
	color: #fff;
}
.card_content_subheading {
	font-size: 14px;
	color: #fff;
}    
.card_content_text {
	font-size: 12px;
	color: #fff;
	overflow: hidden;
}
.card_img::before, .card_img::after {
	content: "";
	position: absolute;
}
/* 長方形白色區塊 */
.card_img::before {
	bottom: calc(var(--circle-radius) * -1);
	width: 100%;
	height: calc(var(--circle-radius) * 2);
	border-radius: var(--circle-radius) var(--circle-radius) 0 0;
	background-color: #1e1e1e;
}
/* 右上半圓形白色區塊 */
.card_img::after {
	right: 0;
	bottom: var(--circle-radius);
	width: calc(var(--circle-radius) * 2); 
	height: calc(var(--circle-radius) * 2); 
	border-radius: 50%;
	background: transparent;
	box-shadow: var(--circle-radius) var(--circle-radius) 0 0 #1e1e1e;
}

/* 動畫 */
.card_img {
	filter: blur(24px);
	transition: filter 0.2s linear;
}
.card:hover .card_img {
	filter: blur(0);
	transition-delay: 0s;
}
.card:hover .card_content {
	grid-template-rows: min-content 1fr;
	transition-delay: 0s;
}
.card_content_text {
	opacity: 0;
	transition: margin 0.2s, opacity 0.2s;
}
.card:hover .card_content_text {
	margin-top: 16px;
	opacity: 1;
	/* transition-delay: 0s, 0s; */
}
</style>