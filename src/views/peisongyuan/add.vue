<template>
    <div class="peisongyuan-add" v-loading="loading">
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                                <span> 添加配送员</span>
                            </div>
            

            <el-form :model="form" ref="formModel" label-width="130px" status-icon validate-on-rule-change>
                                <el-form-item label="工号" prop="gonghao" required :rules="[{required:true, message:'请填写工号'}, {validator:rule.checkRemote, message:'内容重复了', checktype:'insert', module:'peisongyuan', col:'gonghao', trigger:'blur'}]">
                                            <el-input placeholder="输入工号" style="width:250px;" v-model="form.gonghao" />                                    </el-form-item>

                                <el-form-item label="密码" prop="mima" required :rules="[{required:true, message:'请填写密码'}]">
                                            <el-input placeholder="输入密码" style="width:250px;" v-model="form.mima" />                                    </el-form-item>

                                <el-form-item label="姓名" prop="xingming" required :rules="[{required:true, message:'请填写姓名'}]">
                                            <el-input placeholder="输入姓名" style="width:250px;" v-model="form.xingming" />                                    </el-form-item>

                                <el-form-item label="性别" prop="xingbie" required :rules="[{required:true, message:'请填写性别'}]">
                                            <el-select v-model="form.xingbie" ><el-option label="男" value="男"></el-option>
<el-option label="女" value="女"></el-option>
</el-select>                                    </el-form-item>

                                <el-form-item label="照片" prop="zhaopian">
                                            <e-upload-image v-model="form.zhaopian"></e-upload-image>                                    </el-form-item>

                                <el-form-item label="年龄" prop="nianling" required :rules="[{required:true, message:'请填写年龄'}]">
                                            <el-input placeholder="输入年龄" style="width:250px;" v-model="form.nianling" />                                    </el-form-item>

                                <el-form-item label="联系电话" prop="lianxidianhua" required :rules="[{required:true, message:'请填写联系电话'}, {validator:rule.checkPhone, message:'请输入正确手机号码'}]">
                                            <el-input placeholder="输入联系电话" style="width:250px;" v-model="form.lianxidianhua" />                                    </el-form-item>

                                <el-form-item label="备注" prop="beizhu">
                                            <el-input type="textarea" v-model="form.beizhu"></el-input>                                    </el-form-item>

                                <el-form-item v-if="btnText">
                    <el-button type="primary" @click="submit">{{ btnText }}</el-button>
                </el-form-item>
            </el-form>

        </el-card>
    </div>
</template>
<style type="text/scss" scoped lang="scss">
.peisongyuan-add{

}
</style>
<script>
    import api from '@/api'
    import rule from '@/utils/rule'
    import { extend } from '@/utils/extend'

    
    export default {
        name:'peisongyuan-add',
        data() {
            return {
                                rule,
                loading:false,
                form:{
                    gonghao:'',
                    mima:'',
                    xingming:'',
                    xingbie:'',
                    zhaopian:'',
                    nianling:'',
zhuangtai:'待检测',
                    lianxidianhua:'',
                    beizhu:'',

                                    
                },

            
            }
        },
                watch: {
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
                    },

        computed: {},
        methods: {
            submit(){
                this.$refs.formModel.validate().then(res=>{
                    if(this.loading)return;
                    this.loading = true;
                    var form = this.form;

                    this.$post(api.peisongyuan.insert , form).then(res=>{
                        this.loading = false;
                        if(res.code == api.code.OK){
                            this.$message.success('添加成功');
                            this.$emit('success' , res.data);
                            this.$refs.formModel.resetFields();
                                                        this.loadInfo();
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

                                var form = this.form;
                // 获取模块得数据
                this.loading = true;
                this.$post(api.peisongyuan.create , {
                    id:this.$route.query.id
                }).then(res=>{
                    this.loading = false;
                    if(res.code == api.code.OK){
                        extend(this , res.data);
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
