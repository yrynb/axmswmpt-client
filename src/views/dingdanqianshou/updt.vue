<template>
    <div class="dingdanqianshou-add" v-loading="loading">
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                                    <el-page-header @back="$router.go(-1)" content="编辑订单签收">
                    </el-page-header>
                            </div>
            

            <el-form :model="form" ref="formModel" label-width="130px" status-icon validate-on-rule-change>
                                <el-form-item v-if="isRead" label="订单编号" prop="dingdanbianhao">
                                            {{  form.dingdanbianhao  }}                                    </el-form-item>

                                <el-form-item v-if="isRead" label="订单信息" prop="dingdanxinxi">
                                            <div id="dataListdingdanxinxi" style="text-align: left;"><table class="table table-hover"><thead><tr><th>商品编号</th><th>分类</th><th>商品名称</th><th>图片</th><th>价格</th><th>购买数量</th><th>小计</th></tr></thead><tbody><tr v-for="dataMap in dataList"><td>{{  dataMap.shangpinbianhao  }}</td><td> <e-select-view module="shangpinfenlei" :value="dataMap.fenlei" select="id" show="fenleimingcheng"></e-select-view></td><td>{{  dataMap.shangpinmingcheng  }}</td><td><e-img :src="dataMap.tupian" style="max-width:120px" /></td><td>{{  dataMap.jiage  }}</td><td>{{  dataMap.goumaishuliang  }}</td><td>{{  dataMap.xiaoji  }}</td></tr></tbody></table></div>                                    </el-form-item>

                                <el-form-item v-if="isRead" label="订单金额" prop="dingdanjine" :rules="[{validator:rule.checkNumber, message:'输入一个有效数字'}]">
                                            {{  form.dingdanjine  }}                                    </el-form-item>

                                <el-form-item label="配送评级" prop="peisongpingji" required :rules="[{required:true, message:'请填写配送评级'}]">
                                            <el-select v-model="form.peisongpingji" ><el-option label="好评" value="好评"></el-option>
<el-option label="中评" value="中评"></el-option>
<el-option label="差评" value="差评"></el-option>
</el-select>                                    </el-form-item>

                                <el-form-item label="评价" prop="pingjia" required :rules="[{required:true, message:'请填写评价'}]">
                                            <el-input type="textarea" v-model="form.pingjia"></el-input>                                    </el-form-item>

                                <el-form-item label="评价人" prop="pingjiaren">
                                            <el-input v-model="form.pingjiaren" readonly style="width: 250px;"></el-input>                                    </el-form-item>

                                <el-form-item v-if="btnText">
                    <el-button type="primary" @click="submit">{{ btnText }}</el-button>
                </el-form-item>
            </el-form>

        </el-card>
    </div>
</template>
<style type="text/scss" scoped lang="scss">
.dingdanqianshou-add{

}
</style>
<script>
    import api from '@/api'
    import rule from '@/utils/rule'
    import { extend } from '@/utils/extend'

    
    export default {
        name:'dingdanqianshou-add',
        data() {
            return {
                                rule,
                loading:false,
                form:{
                    dingdanbianhao:'',
                    dingdanxinxi:'',
                    dingdanjine:'',
                    peisongpingji:'',
                    pingjia:'',
pingjiaren:this.$store.state.user.session.username,
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

                    this.$post(api.dingdanqianshou.update , form).then(res=>{
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
                this.$post(api.dingdanqianshou.edit , {
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
