<template>
    <div class="dingdanxinxi-add" v-loading="loading">
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span> 添加订单信息</span>
            </div>


            <el-form :model="form" ref="formModel" label-width="130px" status-icon validate-on-rule-change>
                <el-form-item label="订单编号" prop="dingdanbianhao" :rules="[{required:true, message:'请填写订单编号'}]">
                    <el-input placeholder="输入订单编号" style="width:250px;" v-model="form.dingdanbianhao"/>
                </el-form-item>

                <el-form-item label="订单信息" prop="dingdanxinxi">
                    <div id="dataListdingdanxinxi" style="text-align: left;">
                        <table class="table table-hover">
                            <thead>
                            <tr>
                                <th>商品编号</th>
                                <th>分类</th>
                                <th>商品名称</th>
                                <th>图片</th>
                                <th>价格</th>
                                <th>购买数量</th>
                                <th>小计</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for="dataMap in dataList">
                                <td>{{ dataMap.shangpinbianhao }}</td>
                                <td>
                                    <e-select-view module="shangpinfenlei" :value="dataMap.fenlei" select="id"
                                                   show="fenleimingcheng"></e-select-view>
                                </td>
                                <td>{{ dataMap.shangpinmingcheng }}</td>
                                <td>
                                    <e-img :src="dataMap.tupian" style="max-width:120px"/>
                                </td>
                                <td>{{ dataMap.jiage }}</td>
                                <td>{{ dataMap.goumaishuliang }}</td>
                                <td>{{ dataMap.xiaoji }}</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </el-form-item>

                <el-form-item   label="订单金额"   prop="dingdanjine" required
                              :rules="[{required:true, message:'请填写订单金额'}, {validator:rule.checkNumber,  message:'输入一个有效数字'}]">
                    <el-input   placeholder="输入订单金额"   style="width:250px;" v-model="form.dingdanjine"/>
                </el-form-item>

                <el-form-item label="收餐人" prop="shoucanren" required :rules="[{required:true, message:'请填写收餐人'}]">
                    <el-input placeholder="输入收餐人" style="width:250px;" v-model="form.shoucanren"/>
                </el-form-item>

                <el-form-item label="联系电话" prop="lianxidianhua" required
                              :rules="[{required:true, message:'请填写联系电话'}, {validator:rule.checkPhone, message:'请输入正确手机号码'}]">
                    <el-input placeholder="输入联系电话" style="width:250px;" v-model="form.lianxidianhua"/>
                </el-form-item>

                <el-form-item label="收餐地址" prop="shoucandizhi" required :rules="[{required:true, message:'请填写收餐地址'}]">
                    <el-input placeholder="输入收餐地址" style="width:450px;" v-model="form.shoucandizhi"/>
                </el-form-item>

                <el-form-item label="存餐位置" prop="cuncanweizhi" required :rules="[{required:true, message:'请填写存餐位置'}]">
                    <el-input placeholder="输入存餐位置" style="width:450px;" v-model="form.cuncanweizhi"/>
                </el-form-item>

                <el-form-item label="顾客体温" prop="guketiwen" required
                              :rules="[{required:true, message:'请填写顾客体温'}, {validator:rule.checkNumber, message:'输入一个有效数字'}]">
                    <el-input placeholder="输入顾客体温" style="width:250px;" v-model="form.guketiwen"/>
                </el-form-item>

                <el-form-item label="是否隔离" prop="shifougeli" required :rules="[{required:true, message:'请填写是否隔离'}]">
                    <el-select v-model="form.shifougeli">
                        <el-option label="是" value="是"></el-option>
                        <el-option label="否" value="否"></el-option>
                    </el-select>
                </el-form-item>

                <el-form-item label="备注" prop="beizhu">
                    <el-input type="textarea" v-model="form.beizhu"></el-input>
                </el-form-item>

                <el-form-item label="下单人" prop="xiadanren">
                    <el-input v-model="form.xiadanren" readonly style="width: 250px;"></el-input>
                </el-form-item>

                <el-form-item v-if="btnText">
                    <el-button type="primary" @click="submit">{{ btnText }}</el-button>
                </el-form-item>
            </el-form>

        </el-card>
    </div>
</template>
<style type="text/scss" scoped lang="scss">
    .dingdanxinxi-add {

    }
</style>
<script>
    import api from '@/api'
    import rule from '@/utils/rule'
    import {extend} from '@/utils/extend'


    export default {
        name: 'dingdanxinxi-add',
        data() {
            return {
                rule,
                loading: false,
                form: {
                    dingdanbianhao: rule.getID(),
                    dingdanxinxi: '',
                    dingdanjine: this.$route.query.sum_xiaoji,
                    shoucanren: '',
                    lianxidianhua: '',
                    shoucandizhi: '',
                    cuncanweizhi: '',
                    guketiwen: '',
                    shifougeli: '',
                    beizhu: '',
                    dingdanzhuangtai: '待确认',
                    xiadanren: this.$store.state.user.session.username,
                    iszf: "否"

                },

                dataList: [],

            }
        },
        watch: {},
        props: {
            isRead: {
                type: Boolean,
                default: true
            },
            btnText: {
                type: String,
                default: '提交'
            },
        },

        computed: {},
        methods: {
            submit() {
                this.$refs.formModel.validate().then(res => {
                    if (this.loading) return;
                    this.loading = true;
                    var form = this.form;

                    this.$post(api.dingdanxinxi.insert, form).then(res => {
                        this.loading = false;
                        if (res.code == api.code.OK) {
                            this.$message.success('添加成功');
                            this.$emit('success', res.data);
                            this.$refs.formModel.resetFields();
                            this.loadInfo();
                        } else {
                            this.$message.error(res.msg);
                        }
                    }).catch(err => {
                        this.loading = false;
                        this.$message.error(err.message);
                    })

                }).catch(err => {
                    console.log(err.message);
                })

            },
            loadInfo() {

                var form = this.form;
                // 获取模块得数据
                this.loading = true;
                this.$post(api.dingdanxinxi.create, {
                    id: this.$route.query.id
                }).then(res => {
                    this.loading = false;
                    if (res.code == api.code.OK) {
                        extend(this, res.data);
                    } else {
                        this.$message.error(res.msg);
                        this.$router.go(-1);
                    }
                }).catch(err => {
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
