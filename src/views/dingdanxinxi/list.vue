<template>

    <div class="v-list" v-loading="loading" element-loading-text="加载中">

        <el-card class="box-card">
            <div slot="header" class="clearfix">
                订单信息列表
            </div>
            <!-- 搜索 -->
            <div class="form-search">
                <el-form @submit.prevent.stop :inline="true" size="mini">
                    <el-form-item label="订单编号">

                        <el-input v-model="search.dingdanbianhao"></el-input>

                    </el-form-item>
                    <el-form-item label="收餐人">

                        <el-input v-model="search.shoucanren"></el-input>

                    </el-form-item>
                    <el-form-item label="存餐位置">

                        <el-input v-model="search.cuncanweizhi"></el-input>

                    </el-form-item>
                    <el-form-item label="是否隔离">

                        <el-select v-model="search.shifougeli">
                            <el-option label="请选择" value=""></el-option>
                            <el-option label="是" value="是"></el-option>
                            <el-option label="否" value="否"></el-option>
                        </el-select>

                    </el-form-item>
                    <el-form-item label="订单状态">

                        <el-select v-model="search.dingdanzhuangtai">
                            <el-option label="请选择" value=""></el-option>
                            <el-option label="待确认" value="待确认"></el-option>
                            <el-option label="已支付" value="已支付"></el-option>
                            <el-option label="已接单" value="已接单"></el-option>
                            <el-option label="已发货" value="已发货"></el-option>
                            <el-option label="已取消" value="已取消"></el-option>
                            <el-option label="已签收" value="已签收"></el-option>
                        </el-select>

                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="searchSubmit" icon="el-icon-search">查询</el-button>
                    </el-form-item>
                </el-form>
            </div>


            <el-table border :data="list" style="width: 100%" highlight-current-row>
                <el-table-column type="index" label="#"></el-table-column> <!-- 序号 -->

                <el-table-column label="订单编号" width="130">
                    <template slot-scope="{row}">
                        {{ row.dingdanbianhao }}
                    </template>
                </el-table-column>
                <el-table-column label="订单金额" width="80">
                    <template slot-scope="{row}">
                        {{ row.dingdanjine }}
                    </template>
                </el-table-column>
                <el-table-column label="收餐人" width="130">
                    <template slot-scope="{row}">
                        {{ row.shoucanren }}
                    </template>
                </el-table-column>
                <el-table-column label="联系电话" width="130">
                    <template slot-scope="{row}">
                        {{ row.lianxidianhua }}
                    </template>
                </el-table-column>
                <el-table-column label="收餐地址">
                    <template slot-scope="{row}">
                        {{ row.shoucandizhi }}
                    </template>
                </el-table-column>
                <el-table-column label="存餐位置">
                    <template slot-scope="{row}">
                        {{ row.cuncanweizhi }}
                    </template>
                </el-table-column>
                <el-table-column label="顾客体温" width="80">
                    <template slot-scope="{row}">
                        {{ row.guketiwen }}
                    </template>
                </el-table-column>
                <el-table-column label="是否隔离" width="80">
                    <template slot-scope="{row}">
                        {{ row.shifougeli }}
                    </template>
                </el-table-column>

                <el-table-column label="订单状态" width="80">
                    <template slot-scope="{row}">
                        {{ row.dingdanzhuangtai }}
                    </template>
                </el-table-column>
                <el-table-column label="下单人" width="80">
                    <template slot-scope="{row}">
                        {{ row.xiadanren }}
                    </template>
                </el-table-column>


                <el-table-column label="是否支付" width="60">
                    <template slot-scope="{row}">
                        {{ row.iszf }}
                    </template>
                </el-table-column>
                <!--<el-table-column label="添加时间">
        <template slot-scope="{row}">
            {{ row.addtime.substr(0,16) }}
        </template>
    </el-table-column>-->
                <el-table-column label="操作">
                    <template slot-scope="{row}">
                        <el-button-group>
                            <el-button @click="$goto('/admin/dingdanquerenadd?id='+row.id)" type="success" v-if="row.dingdanzhuangtai == '已支付'"
                                       icon="el-icon-plus" size="mini">
                                订单确认
                            </el-button>

                            <el-button @click="$goto('/admin/dingdanpeisongadd?id='+row.id)" type="success"  v-if="row.dingdanzhuangtai == '已接单'"
                                       icon="el-icon-plus" size="mini">
                                订单配送
                            </el-button>


                            <el-tooltip content="详情" placement="top">
                                <el-button @click="$goto({path:'/admin/dingdanxinxidetail',query:{id:row.id } })"
                                           icon="el-icon-info" type="info" size="mini"></el-button>
                            </el-tooltip>
                            <el-tooltip content="编辑" placement="top">
                                <el-button icon="el-icon-edit"
                                           @click="$goto({path:'/admin/dingdanxinxiupdt',query:{id:row.id } })"
                                           type="warning" size="mini"></el-button>
                            </el-tooltip>
                            <el-tooltip content="删除" placement="top">
                                <el-button icon="el-icon-delete" type="danger" size="mini" @click="deleteItem(row)">

                                </el-button>
                            </el-tooltip>
                        </el-button-group>
                    </template>
                </el-table-column>
            </el-table>
            <div style="margin-top: 10px;text-align: center">
                <el-pagination
                        @current-change="loadList"
                        :current-page="page"
                        :page-size="15"
                        layout="total, sizes, prev, pager, next, jumper"
                        :total="totalCount">
                </el-pagination>
            </div>

        </el-card>
    </div>
</template>
<style type="text/scss" scoped lang="scss">

</style>
<script>
    import api from '@/api';
    import {remove, checkIssh} from '@/utils/utils';
    import {extend} from '@/utils/extend';
    import objectDiff from 'objectdiff';


    /**
     * 后台列表页面
     */
    export default {
        data() {
            return {

                loading: false,
                list: [],
                search: {

                    dingdanbianhao: '',

                    shoucanren: '',

                    cuncanweizhi: '',

                    shifougeli: '',

                    dingdanzhuangtai: '',

                },
                total: {},
                page: 1, // 当前页
                pagesize: 12, // 页大小
                totalCount: 0, // 总行数


            }
        },
        watch: {},
        computed: {},
        methods: {
            searchSubmit() {
                this.loadList(1);
            },
            checkIssh,

            loadList(page) {
                // 防止重新点加载列表
                if (this.loading) return;
                this.loading = true;
                this.page = page;
                // 筛选条件
                var filter = extend(true, {}, this.search, {page: page + "", pagesize: this.pagesize + ""});
                var diff = objectDiff.diff(filter, this.$route.query);
                if (diff.changed != 'equal') { // 筛选的条件不一致则更新链接
                    this.$router.push({  // 更新query
                        path: this.$route.path,
                        query: filter
                    });
                }
                this.$post(api.dingdanxinxi.list, filter).then(res => {
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
            // 删除某行方法
            deleteItem(row) {
                this.$confirm('确定删除数据？', '提示', { // 弹出 确认框提示是否要删除
                    type: 'warning'
                }).then(() => {// 确定操作

                    this.loading = true; // 滚动条
                    this.$post(api.dingdanxinxi.delete, {// 提交后台
                        id: row.id
                    }).then(res => {
                        this.loading = false;
                        if (res.code != api.code.OK) {
                            this.$message.error(res.msg);
                        } else {
                            remove(this.list, row);
                        }
                    }).catch(err => { // 访问网络错误
                        this.loading = false;
                        this.$message.error(err.message)
                    })
                }).catch(() => {
                    // 取消操作
                })
            },

        },
        beforeRouteUpdate(to, form, next) {
            extend(this.search, to.query)
            this.loadList(1);
            next();
        },
        created() {
            var search = extend(this.search, this.$route.query)
            if (search.page) {
                this.page = Math.floor(this.$route.query.page)
                delete search.page
            }
            if (search.pagesize) {
                this.pagesize = Math.floor(this.$route.query.pagesize)
                delete search.pagesize
            }

            this.loadList(1);
        },
        mounted() {
        },
        destroyed() {
        }
    }
</script>
