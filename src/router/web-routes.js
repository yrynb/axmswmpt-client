
export default [
    {
        path:"shujugailan",
        name:"Indexshujugailan",
        component: () => import("@/views/shujugailan/shujugailan"),
        meta: { title:"数据概览"  }
    },
    {
        path:"mingcaiyouzhu",
        name:"Indexmingcaiyouzhu",
        // component: () => import("@/views/mingcaiyouzhu/mingcaiyouzhu"),
        component: () => import("@/views/shujugailan/test"),
        meta: { title:"名菜有主"  }
    },
{
    path:"yonghuadd",
        name:"IndexyonghuAdd",
    component: () => import("@/views/yonghu/webadd"),
    meta: { title:"用户添加"  }
},
{
    path:"xinwenxinxi",
        name:"IndexxinwenxinxiList",
    component: () => import("@/views/xinwenxinxi/index"),
    meta: { title:"新闻信息列表"  }
},
{
    path:"xinwenxinxidetail",
        name:"IndexxinwenxinxiDetail",
    props:route=>({id:route.query.id}),
    component: () => import("@/views/xinwenxinxi/webdetail"),
    meta: { title:"新闻信息详情"  }
},
{
    path:"liuyanbanadd",
        name:"IndexliuyanbanAdd",
    component: () => import("@/views/liuyanban/webadd"),
    meta: { title:"留言板添加" ,authLogin:true,msg:true }
},
{
    path:"shangpinxinxi",
        name:"IndexshangpinxinxiList",
    component: () => import("@/views/shangpinxinxi/index"),
    meta: { title:"商品信息列表"  }
},
{
    path:"shangpinxinxidetail",
        name:"IndexshangpinxinxiDetail",
    props:route=>({id:route.query.id}),
    component: () => import("@/views/shangpinxinxi/webdetail"),
    meta: { title:"商品信息详情"  }
},
{
    path:"gouwucheadd",
        name:"IndexgouwucheAdd",
    component: () => import("@/views/gouwuche/webadd"),
    meta: { title:"购物车添加" ,authLogin:true,msg:true }
},
]
