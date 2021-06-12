<template>
<div>
  <el-container style="margin-top: 10px;width: 1200px;display: block" >
    <el-main style="position: absolute;left: 50%;transform: translateX(-50%);width: 1200px">
<!--      <el-divider content-position="left">数据概览</el-divider>-->
      <el-row :gutter="10" style="padding:0;margin: 10px 0px">
        <el-col :span="6">
          <el-card style="padding: 10px">
            <div style="display: inline-block; padding-right: 20px; vertical-align: middle;">
              <img src="../../../public/js/img/home-01.png" style="width: 60px">
            </div>
            <div style="display: inline-block; padding-left: 40px; vertical-align: middle;">
              <div style="color: #455a64; font-size: 24px; padding-bottom: 5px">{{ssze}}</div>
              <div style="color: #99abb4;">营销额</div>
            </div>
          </el-card>
        </el-col>
        <el-col :span="6">
          <el-card style="padding: 10px">
            <div style="display: inline-block; padding-right: 20px; vertical-align: middle;">
              <img src="../../../public/js/img/home-02.png" style="width: 60px">
            </div>
            <div style="display: inline-block; padding-left: 40px; vertical-align: middle;">
              <div style="color: #455a64; font-size: 24px; padding-bottom: 5px">{{spsl}}</div>
              <div style="color: #99abb4;">商品</div>
            </div>
          </el-card>
        </el-col>
        <el-col :span="6">
          <el-card style="padding: 10px">
            <div style="display: inline-block; padding-right: 20px; vertical-align: middle;">
              <img src="../../../public/js/img/home-03.png" style="width: 60px">
            </div>
            <div style="display: inline-block; padding-left: 40px; vertical-align: middle;">
              <div style="color: #455a64; font-size: 24px; padding-bottom: 5px">{{ddsl}}</div>
              <div style="color: #99abb4;">订单</div>
            </div>
          </el-card>
        </el-col>
        <el-col :span="6">
          <el-card style="padding: 10px">
            <div style="display: inline-block; padding-right: 20px; vertical-align: middle;">
              <img src="../../../public/js/img/home-04.png" style="width: 60px">
            </div>
            <div style="display: inline-block; padding-left: 40px; vertical-align: middle;">
              <div style="color: #455a64; font-size: 24px; padding-bottom: 5px">{{yhsl}}</div>
              <div style="color: #99abb4;">用户</div>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
  <div style="display: flex;justify-content: center;">
    <div id="chart" style="width: 1200px;height: 600px;background-color:pink;margin-top: 150px"></div>
  </div>
</div>
</template>

<script>
import axios from 'axios'
let echarts = window.echarts

export default {
  name: "yonghugailan",
  data() {
    return {
      ssze: 1000,
      spsl: 16,
      ddsl: 18,
      yhsl: 98,
      pieOptionData: [],
      pieOptionSeries: [],
      pieOption: {
        "title":{
          "text":"商品销量统计"
        },
        "legend":{
          "x":"left",
          "y":"center",
          "orient":"vertical",
          "data":[
            "服饰1",
            "电子产品2",
            "零食3",
            "体育用品4"
          ]
        },
        "tooltip":{
          "show":true
        },
        "xAxis":null,
        "yAxis":null,
        "series":[
          {
            "name":"用户比例11",
            "type":"pie",
            "radius":"55%",
            "data":[
              {
                "name":"服饰11",
                "value":589
              },
              {
                "name":"电子产品11",
                "value":1874
              },
              {
                "name":"零食11",
                "value":995
              },
              {
                "name":"体育用品11",
                "value":2490
              }
            ]
          }
        ]
      }
    }
  },
  created() {
    axios.get('http://127.0.0.1:7001/shujugailan').then(res => {
      this.ssze = res.data.ssze
      this.spsl = res.data.spsl
      this.ddsl = res.data.ddsl
      this.yhsl = res.data.yhsl
    })

  },
  mounted() {
    let pieData = []
    let pieLegend = []
    function getdata() {
      axios.get('http://127.0.0.1:7001/shujugailan').then(res => {
        res.data.data.forEach(item => {
          if (item.xiaoliang>0){
            pieData.push({name:item.shangpinmingcheng, value:item.xiaoliang})
            pieLegend.push(item.shangpinmingcheng)
          }
        })
        loadEcharts()
      })
    }
    function loadEcharts(){
      let img = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMYAAADGCAYAAACJm/9dAAABS2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxMzggNzkuMTU5ODI0LCAyMDE2LzA5LzE0LTAxOjA5OjAxICAgICAgICAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIi8+CiA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgo8P3hwYWNrZXQgZW5kPSJyIj8+IEmuOgAAE/9JREFUeJztnXmQVeWZxn/dIA2UgsriGmNNrEQNTqSio0IEFXeFkqi4kpngEhXjqMm4MIldkrE1bnGIMmPcUkOiIi6gJIragLKI0Songo5ZJlHGFTADaoRuhZ4/nnPmnO4+l+7bfc85d3l+VV18373n3Ptyvve53/5+da1L6jDdYjgwBhgNHALMBn6Sq0VdcxlwGvACsAx4HliTq0VlRlNzY+LrfTO2o5LoDxwOHAmMA/4WiP+KzM3DqCJpAA4K/i4F2oBXgWbgWWAxsDEv48oZC6M9Q4EJwInAMcDAfM0pOXXA14K/y4FPgQXAfOBxYF1+ppUXFgYMBiYCp6PaoU+B694HFqEmyVJgVSbW9Y6bgCeBb6Am4GHALrH3B6L/+0RgM6pFHgQeAzZkaWi5UVejfYx64AjgXOAk1OToSCtqajyFHGZlVsalzH7oB+BYJJR+Cde0oKbi3cBCYEtWxmVNoT5GrQljGHAecD7wxYT3P0bNirlIEB9lZ1ouDEICOQk1H7dLuOYt4C7gZ8Da7EzLhloXxv7AJcCZdK4dWpAIHkDt7FrtjA5A/aszkFiSntP9wAzgP7M1LT0KCaM+YzuyZixy+leAb9O+sN9AHdDd0S/mbGpXFKD/+2z0LHZHz+aN2PsN6Bm+gjrsY7M2MEuqVRhHoU7yYjS6FPI5MAc4FNgHzUN4JKYz69Cz2Qc9qzno2YUcjZ7t8iBddVSbMEYDzwFPA6Nir28Afgx8CZiERpVM91iKntnfoGcYH606BNUez6GRr6qhWoSxF/AoKsQxsdfXAj9AHe2rgNXZm1Y1/A96hl8E/pn2HfExwBJUBntlb1rpqXRhbA/cDLyGxuJDPgSuBPYErqPGx+RLzAagCT3bK9GzDpmIyuJmVDYVS6UKow74e+APwPeIxuI/AX6Emkw3opldkw6fome8F3rmnwSv90Nl8gdURhU57FmJwtgHdfx+jpZwgCag7gW+DFyDa4gsWY+e+ZdRGYSTgUNRGS1GZVZRVJIwtgF+iMbQ4/2IF4ADgHOA93Kwy4j3UBkcgMokZAwqsx+iMqwIKkUYI4AXgelEzab1wAVoNOSVnOwynXkFlckFqIxAZTYdleGInOwqinIXRh1wMfASMDL2+hxgb+BOqngdTwWzBZXN3qisQkaisryYMu97lLMwhgHzgJ+ivRGgIcJJwd8HOdllus8HROUVDu/2R2U6D5VxWVKuwjgEVcnjY689jqrhOYl3mHJmDiq7x2OvjUdlfEguFnVBOQrju2gmdbcgvwmYitbweFtm5bIGleFUVKagMn4OlXlZUU7C6A/MQqs3w9GLN4ADgZloW6apbNpQWR5ItEBxG1Tms4iazLlTLsLYCW2IOTv22iNor3Il7JQzxbEKle0jsdfORj6wUy4WdaAchDEC+A1RW3MzcAVwKtW/UaiW+QiV8RWozEE+8Bu0yzBX8hbGwaiNuUeQ/xi1Q2/CTadaoA2V9Umo7EG+8Dw57/fIUxhHAs8AOwb5t9Cy8fm5WWTyYj4q+7eC/PZoOfspeRmUlzBOBn4FbBvkX0XVaLUEHDDFsxL5wG+DfAOKWHJOHsbkIYwpaAtluLRjEdol5nVO5j20tmpRkO+DAjFclLUhWQvjUhSSJYzdNA84DneyTcRHyCfmBfk64HYUbjQzshTGVOBWojUys9GoREuGNpjKoAX5xuwgXwfcQoY1R1bCmILWx4SimAWcBXyW0febyuMz5COzgnxYc0zJ4suzEMZEFKwrFMVDKAzL5oJ3GCM2I195KMjXIV86Ke0vTlsYR6CRhbBPMReYjEVhus9mNCseRpfvg5pYR6T5pWkKYz8UNSIcfVqIzmpoTfE7TXXyGfKdhUG+H/Kt1GbI0xLGMODXKJI4aIz6m1gUpue0Ih8Kw4MORj6Wyp6ONITRADyBwjyC4hEdjwMUmN6zAUU+fDPI7458LSlafa9IQxh3oZWToP/ICcDbKXyPqU3WouDT4Q/tQcjnSkqphXEJ6lyDOk2T8TIPU3pW0n4QZzLyvZJRSmGMQislQ65C1ZwxafAEioQYchPt4xX3ilIJYygaaw5HoB5BM5XGpMmtwMNBuh/ywaGFL+8+pRBGHYpAF+7R/h2anfR+CpM2bWj1bbhNdjfki70OzVMKYVxEFM1jE955Z7Il3AkYHvoznhKsqeqtML6KIluHfB93tk32rEK+F3Iz8s0e0xth9EXVVhjZ4QkUAcKYPPg3orhV/YH76MVx3b0RxhXA3wXpdehoYPcrTF60oRN5w6PjDkQ+2iN6Kox9UOj3kAtxMDSTP2uQL4ZcA+zbkw/qiTDqULUVTsM/RDRkZkzePEy0TL0B+WrRo1Q9Eca3iEKbrKfEM47GlIBLgP8N0mPQyU5FUawwdqDz7Lajjpty4wPg6lj+RqIwTd2iWGE0Ei3zXUEKi7eMKRF3IR8F+ew1W7m2E8UI4ytEEydbUIRqH9piypWOPnoR8uFuUYwwbiKKQj4LeLmIe43Jg5eJgilsQ/tuwFbprjBGEy37+IT27TdjypmriY5aHo/OB+yS7grjulj6JzhqoKkc3gNui+X/pTs3dUcYRxMNz/4FLyc3lcfNyHdBvnxMVzd0RxiNsfQNeO+2qTw2IN8N6XKEqithjCXaFbUWuKNndhmTOzOJ1lGNoovzN7oSxrRY+jbg057bZUyu/BX1j0OmFboQti6Mkah/AVr64SXlptKZiXwZ5NsjC124NWFcGkvfHftAYyqV9bRfrXFpoQvrWpckLjwcigKl9Qc+B74ErC6hgcbkxR7Af6NNTK3Abk3Njes6XlSoxvgO0c68R7EoTPWwGvk0KLLIBUkXJQmjHu3GC5lRWruMyZ24T58zbdy1nXSQJIxxwJ5B+nVgWentMiZXliHfBvn6kR0vSBJG/JTMu0tvkzFlQdy3O53S1LHzPRht8mhA56DtTjQpYkw1MQR4h8jXd25qbvz/kdeONcZEor3cT2FRmOrlQ3S+Bsjn2x1f1lEYZ8TSD6RolDHlwP2x9JnxN+JNqWHAu2h892NgZ7wExFQ3A4H3ge3QkQK7NjU3roH2NcaJRJHb5mNRmOrnU+TroEMvw8147YQxIZaeizG1QdzXTwwTYVNqAOpoD0Q99GGoOWVMtTMIRTBsQBHThzQ1N24Ma4zDkCgAFmNRmBqhqbnxI+C5IDsAOByiplR85m9BhnYZUw48FUsfCcnCeCYzc4wpD+I+Pw7UxxiOhqzq0HDtbgk3GlOVNDUrpMG0cde+A+yKjhPYuR7F2QknM57PxTpj8ifsZ9QBh9ajYGohS7O3x5iyIL6KfFQ9cHDsBQvD1Cpx3z+4LzAHnV3Whg75M6YWWQVciZpSrYX2fBtTE4Sd746U4pxvY6oOC8OYBCwMYxKwMIxJwMIwJgELw5gELAxjErAwjEnAwjAmAQvDmAQsDGMSsDCMScDCMCYBC8OYBCwMYxKwMIxJwMIwJgELw5gELAxjErAwjEnAwjAmAQvDmAQsDGMSsDCMScDCMCYBC8OYBCwMYxKwMIxJwMIwJgELw5gELAxjErAwjEnAwjAmAQvDmAQsDGMSsDCMScDCMCYBC8OYBCwMYxLoC1wKNABtwC3A5lwtMiYHpo27tg/wPaAOaO0LnAqMCt5fAPw2J9uMyZMRwI+D9PJ6YEXszW9kb48xZUHc91fUA8sKvGlMLTE6ll5eDyxF/QuAMdnbY0xZMDb4tw1YUg+sAVYGL+6K2lrG1AzTxl07Avk+wMqm5sY14XBtc+y6o7I1y5jcift8M0TzGM/E3jgmM3OMKQ+OjaWfBahrXVIHMABYBwwEWoBhwMdZW2dMDgxC3YkGYCMwpKm5cWNYY2wEng7SDcBx2dtnTC4ci3weYEFTc+NGaL8k5IlY+qSsrDImZ+K+/qsw0VEYnwfpE1GzyphqZgDyddBSqMfDN+LCWAssCtLbAeMzMc2Y/DgB+TrAwqbmxjXhGx1X194fS5+WtlXG5MyZsfQD8Tc6CmMuGpUCOB4YkqJRxuTJEOTjIJ9/LP5mR2GsR+IA9dS/lappxuTHZKLRqLlNzY3r428mbVS6N5Y+Ny2rjMmZuG/f2/HNJGE8C7wZpPel/apDY6qB0cBXg/SbBLPdcZKEsQW4J5a/pORmGZMvcZ++p6m5cUvHCwrt+f53ok74N4E9SmyYMXmxB/JpgFbk650oJIx1wOwg3Rf4bklNMyY/LkY+DfBgU3PjuqSLthYl5LZY+lxg+xIZZkxeDAbOi+VvK3Th1oTxCtHCwu2BC3tvlzG5chHRD/wzyMcT6SquVFMsfRleP2Uql4HIh0Ou39rFXQnjOWB5kB4GTO25XcbkylTkwyCfXrSVa7sViXB6LH0VaqcZU0kMRr4b8qOubuiOMBagmgNgR+Dy4u0yJle+j3wX5MtPdXVDd2PX/iCWvhzYpTi7jMmNXVAY2pAfFLowTneFsZRoh9+2dNFxMaaMuB75LMiHl3bnpmKinf8T8FmQngwcUMS9xuTBAchXQb57RXdvLEYYvwNmxu77aZH3G5MlHX10JvBGMTcXw3S0BRbgYNrPIhpTTpyHfBS0xGn6Vq7tRLHC+AtqUoVcD+xU5GcYkzbDad8PvgL5brfpSVPoP4iGb3cA/rUHn2FMmsxAvgnwPPDzYj+gJ8JoQ+umwmXppwGn9OBzjEmDU4gCebQgX20rfHkyPe08/xft22wzUfVlTJ4MB+6I5acDr/fkg3ozqnQj8FKQHgbchc4vMyYP6pAPhj/QLyMf7RG9EcbnwLeBTUF+Al6abvLjQuSDoCbUPxBF1iya3s5DvEb7SZNbgP16+ZnGFMsI4OZY/irkmz2mFBN0twPzg3R/YA4KrW5MFgxCPjcgyD9JCUZKSyGMNmAK8E6Q/wqK0+P+hkmbOhTRZu8g/w5qQhU9CtWRUi3pWIuGyFqD/MnoMHFj0uRyoqmCVuSDawpf3n1KudZpGe1nxW/AEdNNeownOrAe5HvLClxbNKVeBDgD+EWQ7gPMwp1xU3r2Q77VJ8j/AvleyUhjdex5wItBejA6pWb3FL7H1CbD0AEv4RbrF0lhMWsawtiExpPfDvJfAH6N94qb3jMYhXTaM8i/jXxtU6Ebekpa+ynWoLMHNgT5/YBHgX4pfZ+pfvohH9o/yG9APlaSznZH0txotBLFCA1Hqo5AYT8tDlMs2yDfOSLItyLfWpnWF6a9A28hcBY6+A90Qma802RMV/RBnevwdNXN6IiwhWl+aRZbUx8GvkM06TIJuA+Lw3RNH+Qrk4J8G3A+8EjaX5zVnu170JkEoTgmA79EVaQxSWyDaoowmEEb8qFOpx+lQZbBDG5HM5WhOE4DHsJ9DtOZfsg3Tg/ybSho2u1ZGZB1lI/bUFUY73M8hRcdmohBaCFg2KdoQ+ez3JqlEXmEv7mb9uuqDkd7yB3d0OyMfCEcfdqMfkjvKHhHSuQVF+oR4ETgr0F+fxSB2stHapcRwAtE8xQtwBnohzRz8gyY9gxwJFFYkz3RIrAT8jLI5MYJ6IdxzyC/HjgO7bPIhbwjCa4ADgNWB/ntgHlopaT3c1Q/dahTPQ+VPcgXxtLF+RVpk7cwQLOXB6FqFDR2fSPeCVjthDvvbiKa01qBfOHVvIwKKQdhALyPOly/jL12Mlo5OSIXi0yajEBle3LstfvRQMz7uVjUgXIRBmiF5NnAPxJFVd8bhei5CDetqoE6VJYvEW1H/QyV+VmksEq2p5STMEJmoF+OcA95fzRcNxcHdatkhqMyvAOVKaiMD6PEm4xKQTkKAzQ6NRJtcgqZgPojp+ZikekNp6CymxB7bT4q4+WJd+RMuQoDFGBhPKpmwyp2OFoqMBtHWa8EhgMPok52WNtvQjPZE4iOlCg7ylkYoOUAM4ADaX9Y+SQUP/d8yv//UIvUo7J5gyjAMqgMD0Rrnnod4iZNKsWpVqFhvEaipSQ7AHcCS1CVbMqDkahM7iQKxd+Kyu4gVJZlT6UIAzR6MZ3owYeMQgF878HrrfJkF1QGL6MyCQl/uKYTjTaWPZUkjJDX0czoFHSEFOj/MQX4PXAtDryQJYPRM/89KoPQp9YF+bH0MBR/nlSiMEDt0/vQWPhMoqjW2wLXAH9Ey0oG5mJdbTAQPeM/omceHhn8OSqTfVAZlXVfohCVKoyQD4GpwNdQiJ6QoWhZyZ+BaXhpSSkZhJ7pn9EzHhp770lUFlOJavOKpNKFEfI6WqF5KO37H8OB69DCtBtQjCvTM76ADnxcjZ5pfLJ1CXr2x1OBzaYkqkUYIUuBMcAxRIsSQe3gK4E/oTmQ0dmbVrGMRs/sT+jciXj/bQVwLHrmS7M3LT2qTRghT6ORkcODdEhfNAeyFB0schmwY+bWlT9D0LN5DT2rSejZhTyNnu0hwILMrcuAahVGyGJUe3wdHWnbEntvX7SP+F3gMbTUZAC1ywAkgMfQGqZb0TMKaUHP8OvomS7O1rxsqWtdUlOLVoejGdnzgD0S3v8IreGZi4I0fJydabmwHWoKTUR9tKRBitXo0MefkVI4zDxpam5MfL3WhBFSj/Z/nI/W7DQkXNOCdpE9jbbhVsSMbTcYARwFHI2aQ4X+748jQTQDWzKzLmMKCaNv4qvVzxbg2eBve/SLeTowjmg3WQP6NT02yL+Lmg/Lgr9VRGGAypU+SAijg7/DgF0LXLsZiWA2Cp68PgP7ypZarTEKMQzVIOPRr+rWJgivRkPA5cxVaIi1EJ+i2vAJVEOU7WrXtHCN0T3WovU+96DO6OEoksk4FNqn0n9F2tC+iGZUWy4CNuZqUZliYRRmI5pND2fUd0JDwKPRMGVLgfvKiRa0EegF1PxbDnyQq0UVwv8BNYmwIpIWBvwAAAAASUVORK5CYII=';
      let trafficWay = pieData
      let data = [];
      let color=['#00ffff','#00cfff','#006ced','#ffe000','#ffa800','#ff5b00','#ff3000']
      for (let i = 0; i < trafficWay.length; i++) {
        data.push({
          value: trafficWay[i].value,
          name: trafficWay[i].name,
          itemStyle: {
            normal: {
              borderWidth: 5,
              shadowBlur: 20,
              borderColor:color[i%(color.length)],
              shadowColor: color[i%(color.length)]
            }
          }
        }, {
          value: 2,
          name: '',
          itemStyle: {
            normal: {
              label: {
                show: false
              },
              labelLine: {
                show: false
              },
              color: 'rgba(0, 0, 0, 0)',
              borderColor: 'rgba(0, 0, 0, 0)',
              borderWidth: 0
            }
          }
        });
      }
      let seriesOption = [{
        name: '',
        type: 'pie',
        clockWise: false,
        radius: [105, 109],
        hoverAnimation: false,
        itemStyle: {
          normal: {
            label: {
              show: true,
              position: 'outside',
              color: '#ddd',
              formatter: function(params) {
                var percent = 0;
                var total = 0;
                for (var i = 0; i < trafficWay.length; i++) {
                  total += trafficWay[i].value;
                }
                percent = ((params.value / total) * 100).toFixed(0);
                if(params.name !== '') {
                  return '名称：' + params.name + '\n' + '\n' + '占百分比：' + percent + '%';
                }else {
                  return '';
                }
              },
            },
            labelLine: {
              length:30,
              length2:100,
              show: true,
              color:'#00ffff'
            }
          }
        },
        data: data
      }];
      let option = {
        backgroundColor: '#0A2E5D',
        color : color,
        title: {
          text: '销量统计',
          top: '48%',
          textAlign: "center",
          left: "49%",
          textStyle: {
            color: '#fff',
            fontSize: 22,
            fontWeight: '400'
          }
        },
        graphic: {
          elements: [{
            type: "image",
            z: 3,
            style: {
              image: img,
              width: 178,
              height: 178
            },
            left: 'center',
            top:  'center',
            position: [100, 100]
          }]
        },
        tooltip: {
          show: false
        },
        legend: {
          icon: "circle",
          orient: 'horizontal',
          // x: 'left',
          // data:['火车','飞机','客车','轮渡'],
          data:pieLegend,
          left: 50,
          top: 35,
          align: 'right',
          textStyle: {
            color: "#fff"
          },
          itemGap: 20
        },
        toolbox: {
          show: false
        },
        series: seriesOption
      }
      let chart = echarts.init(document.getElementById('chart'));
      chart.setOption(option)
    }
    getdata()
  }
}


</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
ul,li{
  list-style: none;
}
a {
  text-decoration: none;
  color: cornflowerblue;
}
body {
  font-size:14px;
  color:#333;
  background-color: #eeeeee;
}
img {
  border: none;
  vertical-align: middle;
}
input, textarea {
  outline: none;
  border: none;
}

textarea {
  resize: none;
  overflow: auto;
}
button {
  border: none;
  outline: none;
  cursor: pointer;
}
.upload-box {
  position: relative;
  width: 50px;
  height: 30px;
  line-height: 30px;
  background-color: #3a8ee6;
  border-radius: 5px;
  text-align: center;
  color: white;
}
input[type='file'] {
  width: 50px;
  height: 30px;
  opacity: 0;
  position: absolute;
  left: 0;
  top: 0;
}
.tip {
  position: relative;
  margin: 10px auto;
  height: 50px;
  line-height: 50px;
  color: white;
  text-align: center;
  border-radius: 10px;
  font-family: sans-serif;
}
.tip:after {
  content: '';
  position: absolute;
  width: 0;
  height: 0;
  border: 8px solid;
}
.right {
  background-color: deepskyblue;
}
.left {
  background-color: forestgreen;
}
.left:after {
  border-right-color: forestgreen;
  top: 50%;
  right: 100%;
  margin-top: -9px;
}
.right:after {
  border-left-color: deepskyblue;
  left: 100%;
  top: 50%;
  margin-top: -7px;
}
/*elementUI样式调整*/
[v-cloak] {
  display: none;
}
.el-header {
  padding-left: 0;
}
.el-aside,.el-menu {
  overflow-x: hidden;
}
.horizontal-collapse-transition {
  transition: 0s;
}
.el-menu a {
  color: white;
}
.el-menu .is-active a {
  color: #ffd04b;
}
.el-input__icon {
  line-height: 30px;
}
.el-input__inner{
  height: 30px;
  line-height: 30px;
}

</style>
