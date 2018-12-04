<template>
  <div class="msite">
    <!--头部-->
    <div class="head">
      <span class="left"></span>
      <span class="middle">
        <i class="iconSearch"></i>
        <input type="text" placeholder="搜索商品，共19913款好物"/>
      </span>
      <span class="right"><button>登录</button></span>
    </div>

  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'

  export default {

    data () {
      return {

      }
    },

    mounted () {
      this.$store.dispatch('')
      this.$store.dispatch('')
    },

    computed: {
      ...mapState([]),
    },

    components: {

    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .msite
    width 100%
    height: 100%
    .head
      height 88px
      padding: .21333rem .4rem
      display flex
      .left
        width: 1.84rem;
        height: .53333rem;
        background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-11d65342f9.png);
        display: inline-block;
        margin-right: .26667rem;
        background-size: cover;
        background-position: center
        margin-top 0.15rem
      .middle
        /*display flex*/
        flex 1
        flex-flow row nowrap
        align-items center
        justify-content: center;
        height: .84667rem;
        width 0.8rem
        font-size: .38rem;
        background-color: #ededed;
        border-radius: .10667rem
        position relative
        .iconSearch
          flex-grow 1
          display flex
          display: inline-block;
          vertical-align: middle;
          background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-2fb94833aa.png);
          background-repeat: no-repeat;
          background-size: 100% 100%;
          width: .37333rem;
          height: .37333rem;
          margin-right: .13333rem
          background-color #fff
          padding-top 0.15rem
          position absolute
          top 0.18rem
          left 0.18rem
          background-color: #ededed;
        input
          position absolute
          top 0rem
          left 0.8rem
          color #666
          height: 0.84667rem
          background-color: #ededed;
      .right
        button
          width: .98667rem;
          height: .53333rem;
          line-height: .53333rem;
          text-align: center;
          color: #b4282d;
          border: 1px solid #b4282d;
          border-radius: .10667rem;
          margin-left: .21333rem
          margin-top 0.15rem
          font-size 0.28rem
</style>
