<template>
    <div class="" :class="bindClass" :style="animatedStyle">
        <slot></slot>
    </div>
</template>
<style type="text/scss" lang="scss">
.isView{
    visibility: hidden;
}
</style>
<script>
// 动画组件
import {scroll,offsetTop} from "./scrollEvent";
import domEvent from '@/utils/dom-event'

export default {
    name: "e-animated",
    data() {
        return {
            bindClass:['isView'],
            isBindScroll:false
        }
    },
    watch: {
        animate(){
            this.bindScroll();
        },
        duration(){
            this.bindScroll();
        },
        delay(){
            this.bindScroll();
        },
        count(){
            this.bindScroll();
        },
    },
    props:{
        animate:String,
        duration:[String,Number],
        delay:[String,Number],
        offsetTop:{
            type:Number,
            default:0.2
        },
        count:{
            type:[String,Number],
            default:1
        }
    },
    computed: {
        animatedStyle(){
            return {
                animationDuration:this.duration+'s',
                animationDelay:this.delay+'s',
                animationIterationCount:this.count
            }
        }
    },
    methods: {
        updateAnimated(scrollTop)
        {
            var st = scrollTop;
            var sth = scroll.getScrollTopBodyHeight();
            var post = offsetTop(this.$el) + this.$el.offsetHeight * this.offsetTop;
            var posb = post + this.$el.offsetHeight
            //console.log(post,posb , st , sth)
            if ((post > st && post < sth) || (posb > st && posb < sth)) {
                var box = this.$el;
                domEvent.once(box , 'transitionend,animationend,webkitTransitionEnd' , ()=> {
                    this.bindClass = [];
                });
                box.style.visibility = 'visible'
                this.bindClass = ['animated',this.animate];
                this.offScroll();
            }
        },
        bindScroll(){
            if(!this.isBindScroll && this.animate){

                scroll.$on('update-scroll' , this.updateAnimated);
                this.isBindScroll = true;
                this.bindClass = ['isView'];

                this.$nextTick(()=>{
                    this.updateAnimated(scroll.scrollTop);
                })
            }
        },
        offScroll(){
            if(this.isBindScroll){
                scroll.$off('update-scroll' , this.updateAnimated);
                this.isBindScroll = false;
            }
        }
    },
    mounted() {
        this.bindScroll();
    },
    beforeDestroy() {
        this.offScroll();
    }
}
</script>