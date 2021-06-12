<template>
    <div class="dingdanqueren-add" v-loading="loading">
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                                    <el-page-header @back="$router.go(-1)" content="编辑订单确认">
                    </el-page-header>
                            </div>
            

            <el-form :model="form" ref="formModel" label-width="130px" status-icon validate-on-rule-change>
                                <el-form-item v-if="isRead" label="订单编号" prop="dingdanbianhao">
                                            {{  form.dingdanbianhao  }}                                    </el-form-item>

                                <el-form-item v-if="isRead" label="订单信息" prop="dingdanxinxi">
                                            <div id="dataListdingdanxinxi" style="text-align: left;"><table class="table table-hover"><thead><tr><th>商品编号</th><th>分类</th><th>商品名称</th><th>图片</th><th>价格</th><th>购买数量</th><th>小计</th></tr></thead><tbody><tr v-for="dataMap in dataList"><td>{{  dataMap.shangpinbianhao  }}</td><td> <e-select-view module="shangpinfenlei" :value="dataMap.fenlei" select="id" show="fenleimingcheng"></e-select-view></td><td>{{  dataMap.shangpinmingcheng  }}</td><td><e-img :src="dataMap.tupian" style="max-width:120px" /></td><td>{{  dataMap.jiage  }}</td><td>{{  dataMap.goumaishuliang  }}</td><td>{{  dataMap.xiaoji  }}</td></tr></tbody></table></div>                                    </el-form-item>

                                <el-form-item v-if="isRead" label="订单金额" prop="dingdanjine" :rules="[{validator:rule.checkNumber, message:'输入一个有效数字'}]">
                                            {{  form.dingdanjine  }}                                    </el-form-item>

                                <el-form-item v-if="isRead" label="顾客体温" prop="guketiwen" :rules="[{validator:rule.checkNumber, message:'输入一个有效数字'}]">
                                            {{  form.guketiwen  }}                                    </el-form-item>

                                <el-form-item v-if="isRead" label="下单人" prop="xiadanren">
                                            {{  form.xiadanren  }}                                    </el-form-item>

                                <el-form-item label="接单备注" prop="jiedanbeizhu" required :rules="[{required:true, message:'请填写接单备注'}]">
                                            <el-input type="textarea" v-model="form.jiedanbeizhu"></el-input>                                    </el-form-item>

                                <el-form-item label="操作人" prop="caozuoren">
                                            <el-input v-model="form.caozuoren" readonly style="width: 250px;"></el-input>                                    </el-form-item>

                                <el-form-item v-if="btnText">
                    <el-button type="primary" @click="submit">{{ btnText }}</el-button>
                </el-form-item>
            </el-form>

        </el-card>
    </div>
</template>
<style type="text/scss" scoped lang="scss">
.dingdanqueren-add{

}
</style>
<script>
    import api from '@/api'
    import rule from '@/utils/rule'
    import { extend } from '@/utils/extend'

    
    export default {
        name:'dingdanqueren-add',
        data() {
            return {
                                rule,
                loading:false,
                form:{
                    dingdanbianhao:'',
                    dingdanxinxi:'',
                    dingdanjine:'',
                    guketiwen:'',
xiadanren:this.$store.state.user.session.username,                    jiedanbeizhu:'',
caozuoren:this.$store.state.user.session.username,
            dingdanxinxiid:0,
                        
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

                    this.$post(api.dingdanqueren.update , form).then(res=>{
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
                this.$post(api.dingdanqueren.edit , {
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
