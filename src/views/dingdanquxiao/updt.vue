<template>
    <div class="dingdanquxiao-add" v-loading="loading">
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                                    <el-page-header @back="$router.go(-1)" content="编辑订单取消">
                    </el-page-header>
                            </div>
            

            <el-form :model="form" ref="formModel" label-width="130px" status-icon validate-on-rule-change>
                                <el-form-item v-if="isRead" label="订单编号" prop="dingdanbianhao">
                                            {{  form.dingdanbianhao  }}                                    </el-form-item>

                                <el-form-item v-if="isRead" label="订单信息" prop="dingdanxinxi">
                                            <div id="dataListdingdanxinxi" style="text-align: left;"><table class="table table-hover"><thead><tr><th>商品编号</th><th>分类</th><th>商品名称</th><th>图片</th><th>价格</th><th>购买数量</th><th>小计</th></tr></thead><tbody><tr v-for="dataMap in dataList"><td>{{  dataMap.shangpinbianhao  }}</td><td> <e-select-view module="shangpinfenlei" :value="dataMap.fenlei" select="id" show="fenleimingcheng"></e-select-view></td><td>{{  dataMap.shangpinmingcheng  }}</td><td><e-img :src="dataMap.tupian" style="max-width:120px" /></td><td>{{  dataMap.jiage  }}</td><td>{{  dataMap.goumaishuliang  }}</td><td>{{  dataMap.xiaoji  }}</td></tr></tbody></table></div>                                    </el-form-item>

                                <el-form-item v-if="isRead" label="订单金额" prop="dingdanjine" :rules="[{validator:rule.checkNumber, message:'输入一个有效数字'}]">
                                            {{  form.dingdanjine  }}                                    </el-form-item>

                                <el-form-item v-if="isRead" label="安排配送" prop="anpaipeisong">
                                            <table>
            <tr>
            <td colspan="2">安排配送：</td>
</tr><tr><td style="width: 130px">工号</td><td>{{  form.gonghao  }}</td></tr><tr><td style="width: 130px">姓名</td><td>{{  form.xingming  }}</td></tr><tr><td style="width: 130px">配送员体温</td><td>{{  form.peisongyuantiwen  }}</td></tr></table>                                    </el-form-item>

                                <el-form-item v-if="isRead" label="外卖图片" prop="waimaitupian">
                                            <e-img :src="form.waimaitupian" style="max-width:120px" />                                    </el-form-item>

                                <el-form-item v-if="isRead" label="配送照片" prop="peisongzhaopian">
                                            <e-img :src="form.peisongzhaopian" style="max-width:120px" />                                    </el-form-item>

                                <el-form-item label="取消原因" prop="quxiaoyuanyin" required :rules="[{required:true, message:'请填写取消原因'}]">
                                            <el-input type="textarea" v-model="form.quxiaoyuanyin"></el-input>                                    </el-form-item>

                                <el-form-item label="取消人" prop="quxiaoren">
                                            <el-input v-model="form.quxiaoren" readonly style="width: 250px;"></el-input>                                    </el-form-item>

                                <el-form-item v-if="btnText">
                    <el-button type="primary" @click="submit">{{ btnText }}</el-button>
                </el-form-item>
            </el-form>

        </el-card>
    </div>
</template>
<style type="text/scss" scoped lang="scss">
.dingdanquxiao-add{

}
</style>
<script>
    import api from '@/api'
    import rule from '@/utils/rule'
    import { extend } from '@/utils/extend'

    
    export default {
        name:'dingdanquxiao-add',
        data() {
            return {
                                rule,
                loading:false,
                form:{
                    dingdanbianhao:'',
                    dingdanxinxi:'',
                    dingdanjine:'',
                    anpaipeisong:'',
                    gonghao:'',
                    xingming:'',
                    waimaitupian:'',
                    peisongzhaopian:'',
                    quxiaoyuanyin:'',
quxiaoren:this.$store.state.user.session.username,
            dingdanpeisongid:0,
                        
                },

                        dataList:[],
            
            }
        },
                watch: {
                        id: {
                handler() {
                    this.loadInfo();
                }
            }
                    },
        props: {
            isRead:{
                type:Boolean,
                default:true
            },
            btnText:{
                type:String,
                default:'提交'
            },
                        id: {
                type: [String, Number],
                required: true
            },
                    },

        computed: {},
        methods: {
            submit(){
                this.$refs.formModel.validate().then(res=>{
                    if(this.loading)return;
                    this.loading = true;
                    var form = this.form;

                    this.$post(api.dingdanquxiao.update , form).then(res=>{
                        this.loading = false;
                        if(res.code == api.code.OK){
                            this.$message.success('添加成功');
                            this.$emit('success' , res.data);
                            this.$refs.formModel.resetFields();
                                                        this.$router.go(-1);
                                                    }else{
                            this.$message.error(res.msg);
                        }
                    }).catch(err=>{
                        this.loading = false;
                        this.$message.error(err.message);
                    })

                }).catch(err=>{
                    console.log(err.message);
                })

            },
            loadInfo(){

                                // 更新数据,获取数据
                this.loading = true;
                var form = this.form;
                this.$post(api.dingdanquxiao.edit , {
                    id:this.id
                }).then(res=>{
                    this.loading = false;
                    if(res.code == api.code.OK){
                        extend(this , res.data);
                        this.form = res.data.mmm;

                    }else{
                        this.$message.error(res.msg);
                        this.$router.go(-1);
                    }
                }).catch(err=>{
                    this.$message.error(err.message);
                    this.$router.go(-1);
                });
                            },
                    },
        created() {
            this.loadInfo();
                    },
        mounted() {
                    },
        destroyed() {
                    }
    }
</script>
