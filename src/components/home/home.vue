<template>
  <div class="home-page">
    <h1>下方是mockjs&axios模拟的随机文本以及简单echarts图表,测试git上传</h1>
    <div id="myChart" :style="{width: '100%', height: '300px'}"></div>
    <div v-for="item in dataList" :key="item.id">
      <div class="flex-demo">
        <h3>
			    {{item.articleTitle}}
			  </h3>
        <p>
          {{item.articleContent}}
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'homePage',
  data() {
    return {
      dataList: []
    }
  },
  mounted() {
    let myChart = this.$echarts.init(document.getElementById('myChart'))
    // 绘制图表
    myChart.setOption({
      title: { text: '在Vue中使用echarts', x: 'center' },
      tooltip: {},
      xAxis: {
        data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
      },
      yAxis: {},
      series: [{
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
      }]
    });
  },
  created() {
    var vm = this;
    vm.$axios({
      method: 'post',
      url: '/blog/articleQurey',
      data: {}
    }).then(function(res) {
      vm.dataList = res.data.data;
    })
  }
}

</script>
<style scoped>
.flex-demo {
  width: 90%;
  margin: 0 auto;
  height: 140px;
}

.flex-demo p {
  word-wrap: break-word;
  text-align: left;
}

</style>
