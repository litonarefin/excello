<template>
  <div class="testimonial-widget-one">
    <slider
      animation="fade"
      width="100%"
      >
      <slider-item v-for="(i, index) in list" :key="index">
        <div class="testimonial-content">
          <img class="testimonial-author-img" src="../images/avatar/2.jpg" alt="" />
          <div class="testimonial-author">John</div>
          <div class="testimonial-author-position">Founder-Ceo. Dell Corp</div>

          <div class="testimonial-text">
            <i class="fa fa-quote-left"></i>  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation .
            <i class="fa fa-quote-right"></i>
          </div>
        </div>
      </slider-item>
    </slider>
  </div>
</template>

<script>
import { Slider, SliderItem } from 'vue-easy-slider'

  export default {
    data () {
      return {
        list: [
          { backgroundColor: '#3f51b5', width: '100%', height: '100%' },
          { backgroundColor: '#eee', width: '100%', height: '100%' },
          { backgroundColor: '#f44336', width: '100%', height: '100%' },
        ],
      }
    },
    components: {
      Slider,
      SliderItem
    }
  }
</script>