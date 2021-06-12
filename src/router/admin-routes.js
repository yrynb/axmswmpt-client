import store from '@/store';

export default [
{
    path: 'pay',
        name: 'AdminPay',
    component: () => import('@/views/zhifu/zhifu'),
    meta: {authLogin: true},
},

{
    path: 'shoucangjilu',
        name: 'Adminshoucangjilu',
    component: () => import('@/views/shoucangjilu/list'),
    meta: {authLogin: true},
},

{
    path:"admins",
        name:"AdminadminsList",
    component: () => import("@/views/admins/list"),
    meta: { title:"管理员列表",authLogin:true }
},
{
    path:"adminsadd",
        name:"AdminadminsAdd",
    component: () => import("@/views/admins/add"),
    meta: { title:"添加管理员",authLogin:true }
},
{
    path:"adminsupdt",
        name:"AdminadminsUpdt",
    props:route=>({id:route.query.id}),
    component: () => import("@/views/admins/updt"),
    meta: { title:"编辑管理员",authLogin:true }
},
{
    path:"adminsupdtself",
        name:"AdminadminsUpdtSelf",
    props:route=>({id:store.state.user.session.id}),
    component: () => import("@/views/admins/updt"),
    meta: { title:"编辑管理员",authLogin:true }
},
{
    path:"yonghu",
        name:"AdminyonghuList",
    component: () => import("@/views/yonghu/list"),
    meta: { title:"用户列表",authLogin:true }
},
{
    path:"yonghuadd",
        name:"AdminyonghuAdd",
    component: () => import("@/views/yonghu/add"),
    meta: { title:"添加用户",authLogin:true }
},
{
    path:"yonghuupdt",
        name:"AdminyonghuUpdt",
    props:route=>({id:route.query.id}),
    component: () => import("@/views/yonghu/updt"),
    meta: { title:"编辑用户",authLogin:true }
},
{
    path:"yonghuupdtself",
        name:"AdminyonghuUpdtSelf",
    props:route=>({id:store.state.user.session.id}),
    component: () => import("@/views/yonghu/updt"),
    meta: { title:"编辑用户",authLogin:true }
},
{
    path:"xinwenfenlei",
        name:"AdminxinwenfenleiList",
    component: () => import("@/views/xinwenfenlei/list"),
    meta: { title:"新闻分类列表",authLogin:true }
},
{
    path:"xinwenfenleiadd",
        name:"AdminxinwenfenleiAdd",
    component: () => import("@/views/xinwenfenlei/add"),
    meta: { title:"添加新闻分类",authLogin:true }
},
{
    path:"xinwenfenleiupdt",
        name:"AdminxinwenfenleiUpdt",
    props:route=>({id:route.query.id}),
    component: () => import("@/views/xinwenfenlei/updt"),
    meta: { title:"编辑新闻分类",authLogin:true }
},
{
    path:"xinwenxinxi",
        name:"AdminxinwenxinxiList",
    component: () => import("@/views/xinwenxinxi/list"),
    meta: { title:"新闻信息列表",authLogin:true }
},
{
    path:"xinwenxinxi_tianjiaren",
        name:"AdminxinwenxinxiListtianjiaren",
    component: () => import("@/views/xinwenxinxi/list-tianjiaren"),
    meta: { title:"新闻信息列表",authLogin:true }
},
{
    path:"xinwenxinxiadd",
        name:"AdminxinwenxinxiAdd",
    component: () => import("@/views/xinwenxinxi/add"),
    meta: { title:"添加新闻信息",authLogin:true }
},
{
    path:"xinwenxinxiupdt",
        name:"AdminxinwenxinxiUpdt",
    props:route=>({id:route.query.id}),
    component: () => import("@/views/xinwenxinxi/updt"),
    meta: { title:"编辑新闻信息",authLogin:true }
},
{
    path:"xinwenxinxidetail",
        props:route=>({id:route.query.id}),
    name:"AdminxinwenxinxiDetail",
    component: () => import("@/views/xinwenxinxi/detail"),
    meta: { title:"新闻信息详情" }
},
{
    path:"youqinglianjie",
        name:"AdminyouqinglianjieList",
    component: () => import("@/views/youqinglianjie/list"),
    meta: { title:"友情链接列表",authLogin:true }
},
{
    path:"youqinglianjieadd",
        name:"AdminyouqinglianjieAdd",
    component: () => import("@/views/youqinglianjie/add"),
    meta: { title:"添加友情链接",authLogin:true }
},
{
    path:"youqinglianjieupdt",
        name:"AdminyouqinglianjieUpdt",
    props:route=>({id:route.query.id}),
    component: () => import("@/views/youqinglianjie/updt"),
    meta: { title:"编辑友情链接",authLogin:true }
},
{
    path:"liuyanban",
        name:"AdminliuyanbanList",
    component: () => import("@/views/liuyanban/list"),
    meta: { title:"留言板列表",authLogin:true }
},
{
    path:"liuyanban_liuyanren",
        name:"AdminliuyanbanListliuyanren",
    component: () => import("@/views/liuyanban/list-liuyanren"),
    meta: { title:"留言板列表",authLogin:true }
},
{
    path:"liuyanbanadd",
        name:"AdminliuyanbanAdd",
    component: () => import("@/views/liuyanban/add"),
    meta: { title:"添加留言板",authLogin:true }
},
{
    path:"liuyanbanupdt",
        name:"AdminliuyanbanUpdt",
    props:route=>({id:route.query.id}),
    component: () => import("@/views/liuyanban/updt"),
    meta: { title:"编辑留言板",authLogin:true }
},
{
    path:"lunbotu",
        name:"AdminlunbotuList",
    component: () => import("@/views/lunbotu/list"),
    meta: { title:"轮播图列表",authLogin:true }
},
{
    path:"lunbotuadd",
        name:"AdminlunbotuAdd",
    component: () => import("@/views/lunbotu/add"),
    meta: { title:"添加轮播图",authLogin:true }
},
{
    path:"lunbotuupdt",
        name:"AdminlunbotuUpdt",
    props:route=>({id:route.query.id}),
    component: () => import("@/views/lunbotu/updt"),
    meta: { title:"编辑轮播图",authLogin:true }
},
{
    path:"shangpinfenlei",
        name:"AdminshangpinfenleiList",
    component: () => import("@/views/shangpinfenlei/list"),
    meta: { title:"商品分类列表",authLogin:true }
},
{
    path:"shangpinfenleiadd",
        name:"AdminshangpinfenleiAdd",
    component: () => import("@/views/shangpinfenlei/add"),
    meta: { title:"添加商品分类",authLogin:true }
},
{
    path:"shangpinfenleiupdt",
        name:"AdminshangpinfenleiUpdt",
    props:route=>({id:route.query.id}),
    component: () => import("@/views/shangpinfenlei/updt"),
    meta: { title:"编辑商品分类",authLogin:true }
},
{
    path:"shangpinxinxi",
        name:"AdminshangpinxinxiList",
    component: () => import("@/views/shangpinxinxi/list"),
    meta: { title:"商品信息列表",authLogin:true }
},
{
    path:"shangpinxinxiadd",
        name:"AdminshangpinxinxiAdd",
    component: () => import("@/views/shangpinxinxi/add"),
    meta: { title:"添加商品信息",authLogin:true }
},
{
    path:"shangpinxinxiupdt",
        name:"AdminshangpinxinxiUpdt",
    props:route=>({id:route.query.id}),
    component: () => import("@/views/shangpinxinxi/updt"),
    meta: { title:"编辑商品信息",authLogin:true }
},
{
    path:"shangpinxinxidetail",
        props:route=>({id:route.query.id}),
    name:"AdminshangpinxinxiDetail",
    component: () => import("@/views/shangpinxinxi/detail"),
    meta: { title:"商品信息详情" }
},
{
    path:"gouwuche",
        name:"AdmingouwucheList",
    component: () => import("@/views/gouwuche/list"),
    meta: { title:"购物车列表",authLogin:true }
},
{
    path:"gouwuche_goumairen",
        name:"AdmingouwucheListgoumairen",
    component: () => import("@/views/gouwuche/list-goumairen"),
    meta: { title:"购物车列表",authLogin:true }
},
{
    path:"gouwucheadd",
        name:"AdmingouwucheAdd",
    component: () => import("@/views/gouwuche/add"),
    meta: { title:"添加购物车",authLogin:true }
},
{
    path:"gouwucheupdt",
        name:"AdmingouwucheUpdt",
    props:route=>({id:route.query.id}),
    component: () => import("@/views/gouwuche/updt"),
    meta: { title:"编辑购物车",authLogin:true }
},
{
    path:"gouwuchedetail",
        props:route=>({id:route.query.id}),
    name:"AdmingouwucheDetail",
    component: () => import("@/views/gouwuche/detail"),
    meta: { title:"购物车详情" }
},
{
    path:"dingdanxinxi",
        name:"AdmindingdanxinxiList",
    component: () => import("@/views/dingdanxinxi/list"),
    meta: { title:"订单信息列表",authLogin:true }
},
{
    path:"dingdanxinxi_xiadanren",
        name:"AdmindingdanxinxiListxiadanren",
    component: () => import("@/views/dingdanxinxi/list-xiadanren"),
    meta: { title:"订单信息列表",authLogin:true }
},
{
    path:"dingdanxinxiadd",
        name:"AdmindingdanxinxiAdd",
    component: () => import("@/views/dingdanxinxi/add"),
    meta: { title:"添加订单信息",authLogin:true }
},
{
    path:"dingdanxinxiupdt",
        name:"AdmindingdanxinxiUpdt",
    props:route=>({id:route.query.id}),
    component: () => import("@/views/dingdanxinxi/updt"),
    meta: { title:"编辑订单信息",authLogin:true }
},
{
    path:"dingdanxinxidetail",
        props:route=>({id:route.query.id}),
    name:"AdmindingdanxinxiDetail",
    component: () => import("@/views/dingdanxinxi/detail"),
    meta: { title:"订单信息详情" }
},
{
    path:"peisongyuan",
        name:"AdminpeisongyuanList",
    component: () => import("@/views/peisongyuan/list"),
    meta: { title:"配送员列表",authLogin:true }
},
{
    path:"peisongyuanadd",
        name:"AdminpeisongyuanAdd",
    component: () => import("@/views/peisongyuan/add"),
    meta: { title:"添加配送员",authLogin:true }
},
{
    path:"peisongyuanupdt",
        name:"AdminpeisongyuanUpdt",
    props:route=>({id:route.query.id}),
    component: () => import("@/views/peisongyuan/updt"),
    meta: { title:"编辑配送员",authLogin:true }
},
{
    path:"peisongyuanupdtself",
        name:"AdminpeisongyuanUpdtSelf",
    props:route=>({id:store.state.user.session.id}),
    component: () => import("@/views/peisongyuan/updt"),
    meta: { title:"编辑配送员",authLogin:true }
},
{
    path:"peisongyuandetail",
        props:route=>({id:route.query.id}),
    name:"AdminpeisongyuanDetail",
    component: () => import("@/views/peisongyuan/detail"),
    meta: { title:"配送员详情" }
},
{
    path:"dingdanqueren",
        name:"AdmindingdanquerenList",
    component: () => import("@/views/dingdanqueren/list"),
    meta: { title:"订单确认列表",authLogin:true }
},
{
    path:"dingdanqueren_xiadanren",
        name:"AdmindingdanquerenListxiadanren",
    component: () => import("@/views/dingdanqueren/list-xiadanren"),
    meta: { title:"订单确认列表",authLogin:true }
},
{
    path:"dingdanqueren_caozuoren",
        name:"AdmindingdanquerenListcaozuoren",
    component: () => import("@/views/dingdanqueren/list-caozuoren"),
    meta: { title:"订单确认列表",authLogin:true }
},
{
    path:"dingdanquerenadd",
        name:"AdmindingdanquerenAdd",
    component: () => import("@/views/dingdanqueren/add"),
    meta: { title:"添加订单确认",authLogin:true }
},
{
    path:"dingdanquerenupdt",
        name:"AdmindingdanquerenUpdt",
    props:route=>({id:route.query.id}),
    component: () => import("@/views/dingdanqueren/updt"),
    meta: { title:"编辑订单确认",authLogin:true }
},
{
    path:"dingdanquerendetail",
        props:route=>({id:route.query.id}),
    name:"AdmindingdanquerenDetail",
    component: () => import("@/views/dingdanqueren/detail"),
    meta: { title:"订单确认详情" }
},
{
    path:"tiwenjiance",
        name:"AdmintiwenjianceList",
    component: () => import("@/views/tiwenjiance/list"),
    meta: { title:"体温检测列表",authLogin:true }
},
{
    path:"tiwenjiance_gonghao",
        name:"AdmintiwenjianceListgonghao",
    component: () => import("@/views/tiwenjiance/list-gonghao"),
    meta: { title:"体温检测列表",authLogin:true }
},
{
    path:"tiwenjiance_jianceren",
        name:"AdmintiwenjianceListjianceren",
    component: () => import("@/views/tiwenjiance/list-jianceren"),
    meta: { title:"体温检测列表",authLogin:true }
},
{
    path:"tiwenjianceadd",
        name:"AdmintiwenjianceAdd",
    component: () => import("@/views/tiwenjiance/add"),
    meta: { title:"添加体温检测",authLogin:true }
},
{
    path:"tiwenjianceupdt",
        name:"AdmintiwenjianceUpdt",
    props:route=>({id:route.query.id}),
    component: () => import("@/views/tiwenjiance/updt"),
    meta: { title:"编辑体温检测",authLogin:true }
},
{
    path:"tiwenjiancedetail",
        props:route=>({id:route.query.id}),
    name:"AdmintiwenjianceDetail",
    component: () => import("@/views/tiwenjiance/detail"),
    meta: { title:"体温检测详情" }
},
{
    path:"dingdanpeisong",
        name:"AdmindingdanpeisongList",
    component: () => import("@/views/dingdanpeisong/list"),
    meta: { title:"订单配送列表",authLogin:true }
},
{
    path:"dingdanpeisong_xiadanren",
        name:"AdmindingdanpeisongListxiadanren",
    component: () => import("@/views/dingdanpeisong/list-xiadanren"),
    meta: { title:"订单配送列表",authLogin:true }
},
{
    path:"dingdanpeisong_caozuoren",
        name:"AdmindingdanpeisongListcaozuoren",
    component: () => import("@/views/dingdanpeisong/list-caozuoren"),
    meta: { title:"订单配送列表",authLogin:true }
},
{
    path:"dingdanpeisongadd",
        name:"AdmindingdanpeisongAdd",
    component: () => import("@/views/dingdanpeisong/add"),
    meta: { title:"添加订单配送",authLogin:true }
},
{
    path:"dingdanpeisongupdt",
        name:"AdmindingdanpeisongUpdt",
    props:route=>({id:route.query.id}),
    component: () => import("@/views/dingdanpeisong/updt"),
    meta: { title:"编辑订单配送",authLogin:true }
},
{
    path:"dingdanqianshou",
        name:"AdmindingdanqianshouList",
    component: () => import("@/views/dingdanqianshou/list"),
    meta: { title:"订单签收列表",authLogin:true }
},
{
    path:"dingdanqianshou_pingjiaren",
        name:"AdmindingdanqianshouListpingjiaren",
    component: () => import("@/views/dingdanqianshou/list-pingjiaren"),
    meta: { title:"订单签收列表",authLogin:true }
},
{
    path:"dingdanqianshouadd",
        name:"AdmindingdanqianshouAdd",
    component: () => import("@/views/dingdanqianshou/add"),
    meta: { title:"添加订单签收",authLogin:true }
},
{
    path:"dingdanqianshouupdt",
        name:"AdmindingdanqianshouUpdt",
    props:route=>({id:route.query.id}),
    component: () => import("@/views/dingdanqianshou/updt"),
    meta: { title:"编辑订单签收",authLogin:true }
},
{
    path:"dingdanqianshoudetail",
        props:route=>({id:route.query.id}),
    name:"AdmindingdanqianshouDetail",
    component: () => import("@/views/dingdanqianshou/detail"),
    meta: { title:"订单签收详情" }
},
{
    path:"dingdanquxiao",
        name:"AdmindingdanquxiaoList",
    component: () => import("@/views/dingdanquxiao/list"),
    meta: { title:"订单取消列表",authLogin:true }
},
{
    path:"dingdanquxiao_quxiaoren",
        name:"AdmindingdanquxiaoListquxiaoren",
    component: () => import("@/views/dingdanquxiao/list-quxiaoren"),
    meta: { title:"订单取消列表",authLogin:true }
},
{
    path:"dingdanquxiaoadd",
        name:"AdmindingdanquxiaoAdd",
    component: () => import("@/views/dingdanquxiao/add"),
    meta: { title:"添加订单取消",authLogin:true }
},
{
    path:"dingdanquxiaoupdt",
        name:"AdmindingdanquxiaoUpdt",
    props:route=>({id:route.query.id}),
    component: () => import("@/views/dingdanquxiao/updt"),
    meta: { title:"编辑订单取消",authLogin:true }
},
{
    path:"dingdanquxiaodetail",
        props:route=>({id:route.query.id}),
    name:"AdmindingdanquxiaoDetail",
    component: () => import("@/views/dingdanquxiao/detail"),
    meta: { title:"订单取消详情" }
},
]
