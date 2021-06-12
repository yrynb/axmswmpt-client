<template>
    <div class="tiwenjiance-add" v-loading="loading">
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                                    <el-page-header @back="$router.go(-1)" content="编辑体温检测">
                    </el-page-header>
                            </div>
            

            <el-form :model="form" ref="formModel" label-width="130px" status-icon validate-on-rule-change>
                                <el-form-item v-if="isRead" label="工号" prop="gonghao">
                                            {{  form.gonghao  }}                                    </el-form-item>

                                <el-form-item v-if="isRead" label="姓名" prop="xingming">
                                            {{  form.xingming  }}                                    </el-form-item>

                                <el-form-item v-if="isRead" label="性别" prop="xingbie">
                                            {{  form.xingbie  }}                                    </el-form-item>

                                <el-form-item v-if="isRead" label="年龄" prop="nianling">
                                            {{  form.nianling  }}                                    </el-form-item>

                                <el-form-item label="检测体温" prop="jiancetiwen" required :rules="[{required:true, message:'请填写检测体温'}, {validator:rule.checkNumber, message:'输入一个有效数字'}]">
                                            <el-input placeholder="输入检测体温" style="width:250px;" v-model="form.jiancetiwen" />                                    </el-form-item>

                                <el-form-item label="状态" prop="zhuangtai" required :rules="[{required:true, message:'请填写状态'}]">
                                            <el-select v-model="form.zhuangtai" ><el-option label="体温正常" value="体温正常"></el-option>
<el-option label="体温异常" value="体温异常"></el-option>
</el-select>                                    </el-form-item>

                                <el-form-item label="备注" prop="beizhu">
                                            <el-input type="textarea" v-model="form.beizhu"></el-input>                                    </el-form-item>

                                <el-form-item label="检测人" prop="jianceren">
                                            <el-input v-model="form.jianceren" readonly style="width: 250px;"></el-input>                                    </el-form-item>

                                <el-form-item v-if="btnText">
                    <el-button type="primary" @click="submit">{{ btnText }}</el-button>
                </el-form-item>
            </el-form>

        </el-card>
    </div>
</template>
<style type="text/scss" scoped lang="scss">
.tiwenjiance-add{

}
</style>
<script>
    import api from '@/api'
    import rule from '@/utils/rule'
    import { extend } from '@/utils/extend'

    
    export default {
        name:'tiwenjiance-add',
        data() {
            return {
                                rule,
                loading:false,
                form:{
gonghao:this.$store.state.user.session.username,                    xingming:'',
                    xingbie:'',
                    nianling:'',
                    jiancetiwen:'',
                    zhuangtai:'',
                    beizhu:'',
jianceren:this.$store.state.user.session.username,
            peisongyuanid:0,
                        
                },

            
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

                    this.$post(api.tiwenjiance.update , form).then(res=>{
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
                this.$post(api.tiwenjiance.edit , {
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
