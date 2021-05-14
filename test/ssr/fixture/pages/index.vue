<template>
  <div id="target">
    <section id="simple" v-aspect-ratio="'16:9'"></section>
    <div style="color: red" v-aspect-ratio="'16:9'"></div>
    <div :style="{ color: 'red' }" v-aspect-ratio="'16:9'"></div>
    <div :style="[{ color: 'red' }]" v-aspect-ratio="'16:9'"></div>
  </div>
</template>
