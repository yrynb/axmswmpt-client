<template>
    
    <div class="dingdanqueren-detail" v-loading="loading" ref="print">
        <el-page-header @back="goBack" content="详情页面"></el-page-header>
        <div class="admin-detail">

                        <div class="detail detail-text">
                <div class="detail-title">
                    订单编号：
                </div>
                <div class="detail-content">
                    {{ map.dingdanbianhao }}
                </div>
            </div>                                                <div class="detail detail-money">
                <div class="detail-title">
                    订单金额：
                </div>
                <div class="detail-content">
                    {{ map.dingdanjine }}
                </div>
            </div><div class="detail detail-money">
                <div class="detail-title">
                    顾客体温：
                </div>
                <div class="detail-content">
                    {{ map.guketiwen }}
                </div>
            </div>                        <div class="detail detail-textuser">
                <div class="detail-title">
                    下单人：
                </div>
                <div class="detail-content">
                    {{ map.xiadanren }}
                </div>
            </div><div class="detail detail-textuser">
                <div class="detail-title">
                    操作人：
                </div>
                <div class="detail-content">
                    {{ map.caozuoren }}
                </div>
            </div>                        <div class="detail detail-textarea">
                <div class="detail-title">
                    接单备注：
                </div>
                <div class="detail-content">
                    {{ map.jiedanbeizhu }}
                </div>
            </div>            
                                    <div class="detail detail-dataset">
                <div class="detail-title">
                    订单信息：
                </div>
                <div class="detail-content">
                    <div id="dataListdingdanxinxi" style="text-align: left;"><table class="table table-hover"><thead><tr><th>商品编号</th><th>分类</th><th>商品名称</th><th>图片</th><th>价格</th><th>购买数量</th><th>小计</th></tr></thead><tbody><tr v-for="dataMap in dataList"><td>{{  dataMap.shangpinbianhao  }}</td><td> <e-select-view module="shangpinfenlei" :value="dataMap.fenlei" select="id" show="fenleimingcheng"></e-select-view></td><td>{{  dataMap.shangpinmingcheng  }}</td><td><e-img :src="dataMap.tupian" style="max-width:120px" /></td><td>{{  dataMap.jiage  }}</td><td>{{  dataMap.goumaishuliang  }}</td><td>{{  dataMap.xiaoji  }}</td></tr></tbody></table></div>
                </div>
            </div>                        
        </div>
        <div class="mt10">
            <el-button type="default" class="hidePrint" @click="$router.go(-1)">
                返回
            </el-button>
            <el-button type="success" class="hidePrint" @click="$print">
                打印本页
            </el-button>
        </div>
    </div>
</template>
<style type="text/scss" scoped lang="scss">
.dingdanqueren-detail{
    .admin-detail {
        display: flex;
        flex-wrap: wrap;
        margin-top: 30px;
        .detail {
            width: 50%;
            padding: 5px;
            display: flex;
            margin-bottom: 10px;
            border-bottom: 1px solid #DEDEDE;
            .detail-title {
                width: 120px;
                text-align: right;
            }
            .detail-content {
                flex-grow: 1;
            }
        }
        .detail.detail-images {
            width: 100%;
            flex-wrap: wrap;
            .detail-title {
                display: none;
            }

            .detail-content {
                width: 100%;
                padding: 10px;
            }
        }
        .detail.detail-editor,.detail.detail-dataset  {
            width: 100%;
            flex-wrap: wrap;
            .detail-title {
                width: 100%;
                padding: 10px;
                margin-top: 10px;
                background: #9a0606;
                color: #ffffff;
                text-align: left;
            }
            .detail-content{
                padding: 10px;
            }
        }
    }
}
</style>
<script>
    import api from '@/api';
    import { extend } from '@/utils/extend';

    
    export default {
        data() {
            return {
                loading:false,
                map:{},

                                dataList:[],
                            }
        },
                props:{
            id:{
                type:[String,Number],
                required:true
            },
                    },
        watch: {
            id:{
                handler(){
                    this.loadDetail();
                },
                immediate:true
            }
        },
        computed: {
                    },
        methods: {
            goBack() {
                this.$router.go(-1)
            },
            loadDetail(){
                if(this.loading) return;
                this.loading = true;
                this.$get(api.dingdanqueren.detail , {
                    id:this.id
                }).then(res=>{
                    this.loading = false;
                    if(res.code == api.code.OK){
                        extend(this , res.data);
                    }else{
                        this.$message.error(res.msg);
                    }
                }).catch(err=>{
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
