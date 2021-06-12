// 滚动事件监听

import Vue from 'vue'

// 绑定事件

export const scroll = new Vue({
    data:{
        scrollTop:0, // 当前位置
        bodyHeight:0
    },
    methods:{
        getScrollTopBodyHeight()
        {
            var bodyH =(document.documentElement.clientHeight || document.body.clientHeight);
            return this.scrollTop + bodyH;
        }
    }
});

function scrollEvent()
{
    var st = (document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop);
    scroll.scrollTop = st;
    scroll.$emit('update-scroll' , scroll.scrollTop);
}


export function offsetTop(element) {
    var top;
    while (element.offsetTop === void 0) {
        element = element.parentNode;
    }
    top = element.offsetTop;
    while (element = element.offsetParent) {
        top += element.offsetTop;
    }
    return top;
}

window.addEventListener('load' , function (){
    window.addEventListener("scroll" , scrollEvent);
    window.addEventListener("resize" , scrollEvent);

});



