<template>
    <div v-loading="loading">
        <div>
            <e-container>
                <el-row :gutter="15">
                    <el-col :md="24" :sm="24">


                        <el-carousel indicator-position="outside" height="320px">
                            <el-carousel-item v-for="item in bhtList" :key="item.id">
                                <div style="background-size: cover" @click="$goto(item.url)"
                                     :style="{'background-image': 'url('+item.image+')',width:'100%', height: '320px'}">
                                </div>
                            </el-carousel-item>
                        </el-carousel>


                    </el-col>

                </el-row>
            </e-container>
        </div>
        <div>
            <e-container>
                <el-row :gutter="15">

                    <el-col :md="8" :sm="8">
                        <e-animated animate="swing" duration="1s" delay="0s" count="1">
                            <e-module-model-box title="热销">
                                <div class="floor_goods_wrap clearfix">
                                    <el-row :gutter="20">
                                        <el-col :md="12" v-for="r in shangpinxinxilist1">
                                            <div class="floor_goods_wrap_li">
                                                <div class="floor_goods_wrap_b">
                                                    <router-link :to="{path:'/shangpinxinxidetail',query:{id:r.id}}"
                                                                 class="floor_goods_img">
                                                        <e-img-box :src="r.tupian" pb="80"></e-img-box>
                                                    </router-link>
                                                    <router-link :to="{path:'/shangpinxinxidetail',query:{id:r.id}}"
                                                                 class="floor_goods_tit"
                                                                 v-html="$substr(r.shangpinmingcheng,20)"></router-link>
                                                    <router-link :to="{path:'/shangpinxinxidetail',query:{id:r.id}}"
                                                                 class="floor_goods_txt"
                                                                 v-html="$substr(r.shangpinxiangqing,20)"></router-link>
                                                    <router-link :to="{path:'/shangpinxinxidetail',query:{id:r.id}}"
                                                                 class="floor_goods_price">
                                                        ￥{{ r.jiage }}元  销量{{ r.xiaoliang }}
                                                    </router-link>
                                                </div>
                                            </div>
                                        </el-col>
                                    </el-row>
                                </div>

                            </e-module-model-box>

                        </e-animated>
                    </el-col>
                    <el-col :md="8" :sm="8">
                        <e-animated animate="swing" duration="1s" delay="0s" count="1">
                            <e-module-model-box title="最新">
                                <div class="floor_goods_wrap clearfix">
                                    <el-row :gutter="20">
                                        <el-col :md="12" v-for="r in shangpinxinxilist2">
                                            <div class="floor_goods_wrap_li">
                                                <div class="floor_goods_wrap_b">
                                                    <router-link :to="{path:'/shangpinxinxidetail',query:{id:r.id}}"
                                                                 class="floor_goods_img">
                                                        <e-img-box :src="r.tupian" pb="80"></e-img-box>
                                                    </router-link>
                                                    <router-link :to="{path:'/shangpinxinxidetail',query:{id:r.id}}"
                                                                 class="floor_goods_tit"
                                                                 v-html="$substr(r.shangpinmingcheng,20)"></router-link>
                                                    <router-link :to="{path:'/shangpinxinxidetail',query:{id:r.id}}"
                                                                 class="floor_goods_txt"
                                                                 v-html="$substr(r.shangpinxiangqing,20)"></router-link>
                                                    <router-link :to="{path:'/shangpinxinxidetail',query:{id:r.id}}"
                                                                 class="floor_goods_price">
                                                        ￥{{ r.jiage }}元 销量{{ r.xiaoliang }}
                                                    </router-link>
                                                </div>
                                            </div>
                                        </el-col>
                                    </el-row>
                                </div>

                            </e-module-model-box>

                        </e-animated>
                    </el-col>
                    <el-col :md="8" :sm="8">
                        <e-animated animate="swing" duration="1s" delay="0s" count="1">
                            <e-module-model-box title="推荐">
                                <div class="floor_goods_wrap clearfix">
                                    <el-row :gutter="20">
                                        <el-col :md="12" v-for="r in shangpinxinxilist3">
                                            <div class="floor_goods_wrap_li">
                                                <div class="floor_goods_wrap_b">
                                                    <router-link :to="{path:'/shangpinxinxidetail',query:{id:r.id}}"
                                                                 class="floor_goods_img">
                                                        <e-img-box :src="r.tupian" pb="80"></e-img-box>
                                                    </router-link>
                                                    <router-link :to="{path:'/shangpinxinxidetail',query:{id:r.id}}"
                                                                 class="floor_goods_tit"
                                                                 v-html="$substr(r.shangpinmingcheng,20)"></router-link>
                                                    <router-link :to="{path:'/shangpinxinxidetail',query:{id:r.id}}"
                                                                 class="floor_goods_txt"
                                                                 v-html="$substr(r.shangpinxiangqing,20)"></router-link>
                                                    <router-link :to="{path:'/shangpinxinxidetail',query:{id:r.id}}"
                                                                 class="floor_goods_price">
                                                        ￥{{ r.jiage }}元 销量{{ r.xiaoliang }}
                                                    </router-link>
                                                </div>
                                            </div>
                                        </el-col>
                                    </el-row>
                                </div>

                            </e-module-model-box>

                        </e-animated>
                    </el-col>
                </el-row>
            </e-container>
        </div>
        <div>
            <e-container>
                <el-row :gutter="15">
                    <el-col :md="24" :sm="24">
                        <e-animated animate="tada" duration="1s" delay="0s" count="1">
                            <div class="jianli">

                                <h3 class="title wow zoomInLeft animated" data-wow-delay=".5s" ref="title">全部商品</h3>
                                <div class="sap_tabs">
                                    <div id="horizontalTab" style="display: block; width: 100%; margin: 0px;">
                                        <ul class="resp-tabs-list wow fadeInUp animated clearfix" data-wow-delay=".7s">
                                            <li class="resp-tab-item" :class="{'resp-tab-active':tabActive == 0}"
                                                @click="tabActive=0"><span>热菜</span></li>
                                            <li class="resp-tab-item" :class="{'resp-tab-active':tabActive == 1}"
                                                @click="tabActive=1"><span>凉菜</span></li>
                                            <li class="resp-tab-item" :class="{'resp-tab-active':tabActive == 2}"
                                                @click="tabActive=2"><span>汤品</span></li>
                                            <li class="resp-tab-item" :class="{'resp-tab-active':tabActive == 3}"
                                                @click="tabActive=3"><span>其它</span></li>
                                        </ul>
                                        <div class="resp-tabs-container">
                                            <div class="tab-1 resp-tab-content" v-show="tabActive == 0">
                                                <div class="tab_img clearfix">
                                                    <el-row :gutter="20">
                                                        <el-col :md="6" v-for="r in shangpinxinxilist4">
                                                            <div class="portfolio-grids">
                                                                <div class="grid">
                                                                    <router-link
                                                                            :to="{path:'/shangpinxinxidetail',query:{id:r.id}}"
                                                                            class="swipebox">
                                                                        <e-img-box :src="r.tupian" pb="100"></e-img-box>
                                                                        <div class="figcaption">
                                                                            <h4><span
                                                                                    v-text="r.shangpinmingcheng"></span>
                                                                            </h4>
                                                                            <h4>价格<span
                                                                                    v-text="r.jiage"></span>元
                                                                            </h4>
                                                                            <h4>销量<span
                                                                                    v-text="r.xiaoliang"></span>
                                                                            </h4>
                                                                            <p v-text="$substr(r.shangpinxiangqing,30)"></p>
                                                                        </div>
                                                                    </router-link>
                                                                </div>
                                                            </div>
                                                        </el-col>
                                                    </el-row>
                                                </div>
                                            </div>
                                            <div class="tab-1 resp-tab-content" v-show="tabActive == 1">
                                                <div class="tab_img clearfix">
                                                    <el-row :gutter="20">
                                                        <el-col :md="6" v-for="r in shangpinxinxilist5">
                                                            <div class="portfolio-grids">
                                                                <div class="grid">
                                                                    <router-link
                                                                            :to="{path:'/shangpinxinxidetail',query:{id:r.id}}"
                                                                            class="swipebox">
                                                                        <e-img-box :src="r.tupian" pb="100"></e-img-box>
                                                                        <div class="figcaption">
                                                                            <h4><span
                                                                                    v-text="r.shangpinmingcheng"></span>
                                                                            </h4>
                                                                            <h4>价格<span
                                                                                    v-text="r.jiage"></span>元
                                                                            </h4>
                                                                            <h4>销量<span
                                                                                    v-text="r.xiaoliang"></span>
                                                                            </h4>
                                                                            <p v-text="$substr(r.shangpinxiangqing,30)"></p>
                                                                        </div>
                                                                    </router-link>
                                                                </div>
                                                            </div>
                                                        </el-col>
                                                    </el-row>
                                                </div>
                                            </div>
                                            <div class="tab-1 resp-tab-content" v-show="tabActive == 2">
                                                <div class="tab_img clearfix">
                                                    <el-row :gutter="20">
                                                        <el-col :md="6" v-for="r in shangpinxinxilist6">
                                                            <div class="portfolio-grids">
                                                                <div class="grid">
                                                                    <router-link
                                                                            :to="{path:'/shangpinxinxidetail',query:{id:r.id}}"
                                                                            class="swipebox">
                                                                        <e-img-box :src="r.tupian" pb="100"></e-img-box>
                                                                        <div class="figcaption">
                                                                            <h4><span
                                                                                    v-text="r.shangpinmingcheng"></span>
                                                                            </h4>
                                                                            <h4>价格<span
                                                                                    v-text="r.jiage"></span>元
                                                                            </h4>
                                                                            <h4>销量<span
                                                                                    v-text="r.xiaoliang"></span>
                                                                            </h4>
                                                                            <p v-text="$substr(r.shangpinxiangqing,30)"></p>
                                                                        </div>
                                                                    </router-link>
                                                                </div>
                                                            </div>
                                                        </el-col>
                                                    </el-row>
                                                </div>
                                            </div>
                                            <div class="tab-1 resp-tab-content" v-show="tabActive == 3">
                                                <div class="tab_img clearfix">
                                                    <el-row :gutter="20">
                                                        <el-col :md="6" v-for="r in shangpinxinxilist7">
                                                            <div class="portfolio-grids">
                                                                <div class="grid">
                                                                    <router-link
                                                                            :to="{path:'/shangpinxinxidetail',query:{id:r.id}}"
                                                                            class="swipebox">
                                                                        <e-img-box :src="r.tupian" pb="100"></e-img-box>
                                                                        <div class="figcaption">
                                                                            <h4><span
                                                                                    v-text="r.shangpinmingcheng"></span>
                                                                            </h4>
                                                                            <h4>价格<span
                                                                                    v-text="r.jiage"></span>元
                                                                            </h4>
                                                                            <h4>销量<span
                                                                                    v-text="r.xiaoliang"></span>
                                                                            </h4>
                                                                            <p v-text="$substr(r.shangpinxiangqing,30)"></p>
                                                                        </div>
                                                                    </router-link>
                                                                </div>
                                                            </div>
                                                        </el-col>
                                                    </el-row>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </e-animated>
                    </el-col>

                </el-row>
            </e-container>
        </div>
        <div>
            <e-container>
                <el-row :gutter="15">
                    <el-col :md="24" :sm="24">
                        <e-animated animate="shake" duration="1s" delay="0s" count="1">
                            <e-module-model-box title="最新资讯">


                                <div class="">
                                    <e-news-list v-for="r in xinwenxinxilist8" :key="r.id"
                                                 :to="'/xinwenxinxidetail?id='+r.id"
                                                 :title="r.biaoti"
                                                 :description="r.neirong"
                                                 :len="30"
                                                 :image="r.tupian"

                                    >

                                    </e-news-list>
                                </div>


                            </e-module-model-box>

                        </e-animated>
                    </el-col>

                </el-row>
            </e-container>
        </div>
    </div>
</template>
<style type="text/scss" scoped lang="scss">
</style>
<script>
    import api from '@/api';
    import {extend} from '@/utils/extend';

    export default {
        data() {
            return {
                loading: false,
                bhtList: [],
                shangpinxinxilist1: [],
                shangpinxinxilist2: [],
                shangpinxinxilist3: [],
                shangpinxinxilist4: [],
                shangpinxinxilist5: [],
                shangpinxinxilist6: [],
                shangpinxinxilist7: [],
                tabActive: 0,
                xinwenxinxilist8: [],
            }
        },
        watch: {},
        computed: {},
        methods: {
            loadPageData() {
                if (this.loading) return;
                this.loading = true;
                this.$get('/index').then(res => {
                    this.loading = false;
                    if (res.code == api.code.OK) {
                        extend(this, res.data);
                    } else {
                        this.$message.error(res.msg);
                    }
                }).catch(err => {
                    this.loading = false;
                    this.$message.error(err.message);
                });
            },
        },
        created() {
            this.loadPageData();
        },
        mounted() {
        },
        destroyed() {
        }
    }
</script>
