<template>
    <div class="shangpinxinxi-detail" v-loading="loading">
        <div>
            <e-container>
                <el-row :gutter="15">
                    <el-col :md="24" :sm="24">
                        <div class="row4 hjlgf">
                            <div class="row clearfix">
                                <div class="row1">
                                    <e-image-toggle :images="map.tupian"></e-image-toggle>
                                </div>
                                <div class="row2">
                                    <section class="product-details add-cart">
                                        <header class="entry-header">
                                            <h1 class="entry-title uppercase" v-text="map.shangpinmingcheng"></h1>
                                        </header>
                                        <article class="entry-content">
                                            <figure>
                                                <span class="entry-price inline-middle">￥{{ map.jiage }}</span>
                                                <ul class="entry-meta unstyled">
                                                    <li>
                                                        <span class="key">销量:</span>
                                                        <span class="value">{{ map.xiaoliang }}</span>
                                                    </li>
                                                </ul>
                                                <div class="rate-bar inline-middle">
                                                    <div class="rateit" data-rateit-backingfld="#backing0"
                                                         data-rateit-starwidth="12" data-rateit-starheight="12"
                                                         data-rateit-resetable="false" data-rateit-ispreset="true"
                                                         data-rateit-min="0" data-rateit-max="5"></div>
                                                </div>
                                                <router-link :to="'/gouwucheadd?id='+map.id"
                                                             class="btn btn-default btn-lg btn-round add-to-cart">加入购物车
                                                </router-link>
                                                <e-collect v-model="isCollect"
                                                           module="shangpinxinxi"
                                                           ziduan="shangpinmingcheng"
                                                           :id="map.id"></e-collect>
                                            </figure>
                                        </article>
                                    </section>
                                </div>
                            </div>

                        </div>
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
                loading: false,   // 加载
                isCollect: false, // 是否已经收藏
                map: {
                    shangpinbianhao: '',
                    fenlei: '',
                    shangpinmingcheng: '',
                    tupian: '',
                    jiage: '',
                    xiaoliang: '',
                    shangpinxiangqing: '',
                },
            }
        },
        props: {
            id: {
                type: [String, Number],
                required: true
            }
        },
        watch: {
            id: {
                handler() {
                    this.loadDetail();
                },
                immediate: true
            },
        },
        computed: {},
        methods: {
            loadDetail() {
                if (this.loading) return;
                this.loading = true;
                this.$get(api.shangpinxinxi.webdetail, {
                    id: this.id
                }).then(res => {
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
        },
        mounted() {
        },
        destroyed() {
        }
    }
</script>
