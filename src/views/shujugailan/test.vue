<template>
  <div style="width: 100%; display: flex; justify-content: center">
    <div style=" width: 1200px;background-color:pink;">
      <el-table
          :data="tableData"
          border
          style="width: 100%;">
        <el-table-column
            prop="shangpinmingcheng"
            label="菜名"
            width="180">
        </el-table-column>
        <el-table-column
            prop="chushi"
            label="厨师"
            width="180">
        </el-table-column>
        <el-table-column
            prop="yuancailiao"
            label="原材料">
        </el-table-column>
      </el-table>
    </div>
  </div>

</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }]
    }
  },
  created() {
    let arr = []
    axios.get('http://127.0.0.1:7001/shujugailan').then(res => {
      console.log(res);
      res.data.data.forEach(item => {
        arr.push({shangpinmingcheng:item.shangpinmingcheng,chushi:item.chushi,yuancailiao:item.yuancailiao})
      })
      console.log(arr);
      this.tableData = arr
      console.log(this.tableData);
    })
  }
}
</script>
