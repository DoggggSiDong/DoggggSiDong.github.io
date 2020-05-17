<!--
<template>
  <div>
    <img src="@/assets/images/les_0.jpg" alt />
    <div class="les_text_1">
      <h2>
        你一直害怕别人知道你的目光追随的不是在打篮球的学长，而是旁边给他加油的女生。
        <br />
        <br />重新回到步入大学的那个夏天，
        <br />你还能拥有那些被你称为“过去”的东西吗？
        <br />
      </h2>
    </div>
    <div class="les_text_2">
      <h2>
        这就像是一个巨大的机械表盘因为某次故障开始逆回。
        <br />由于“喜欢上女生”这个变故，
        <br />上一次轮回里出现过的所有默认选项，都不再理所当然。
        <br />
        <br />
      </h2>
    </div>
    <div class="les_text_3">
      <h2>
        还有四年时间留给你，你该接受它吗？
        <br />还是试试能不能把它掐死？
        <br />
        <br />如果人生真的是由无数因与果组成的神圣迷宫，
        <br />这可能是你唯一一次机会知道那扇门背后的意义。
        <br />
        <br />你决定先不告诉任何人，悄悄拉开门，
        <br />朝着漆黑一片的柜子深处走去。
      </h2>
    </div>
    <button
      class="btn1"
      style="left: -8rem;right: 0;top: 45rem;width: 5rem;height: 3rem;animation-name: btn_animation1;"
      @click="turnPersonChoose"
    >
      <a href="#">
        <h1>NEXT&gt;&gt;&gt;</h1>
      </a>
    </button>
  </div>
</template>
-->
<script>
export default {
  name: "personIndex1",
  data(){
    return{
      list:[
        {'id':1,'bg':'les_1','aid':2,'bid':8,'atext':'A. 独自参加舞会','btext':'B. 回复他的邀请','astyle':'left: 0;right: 0;top: 15rem;width: 8rem;height: 3rem;animation-name: btn_animation2;','bstyle':'left: 3rem;right: 0rem;top: 10rem;width: 8rem;height: 3rem;animation-name: btn_animation3;','cid':'','ctext':'','cstyle':''},
        {'id':2,'bg':'les_4','aid':3,'bid':9,'atext':'A. 先不打扰她','btext':'B. 和她交个朋友','astyle':'right: 1rem;top: 15rem;width: 8rem;height: 3rem;text-align: right;animation-name: btn_animation8;','bstyle':'right: 1rem;top: 10rem;width: 8rem;height: 3rem;text-align: right;animation-name: btn_animation9;','cid':'','ctext':'','cstyle':''},
        {'id':3,'bg':'les_5_1','aid':4,'bid':'','atext':'大二下你终于<br>推掉了其他活动，<br>悄悄加入了ColorsWorld<br>&gt;&gt;&gt;','btext':'','astyle':'right: 0;top: 10rem;width: 15rem;height: 3rem;text-align: left;animation-name: btn_animation10;','bstyle':'','cid':'','ctext':'','cstyle':''},
        {'id':4,'bg':'les_5_2','aid':5,'bid':'','atext':'NEXT>>>','btext':'','astyle':'left: 10rem;right: 0rem;top: 1rem;width: 5rem;height: 3rem;text-align: left;animation-name: btn_animation11;','bstyle':'','cid':'','ctext':'','cstyle':''},
        {'id':5,'bg':'les_7','aid':6,'bid':10,'atext':'A. 公开甜蜜','btext':'B. 保持距离','astyle':'right: 1rem;top: 15rem;width: 8rem;height: 3rem;text-align: right;animation-name: btn_animation12;','bstyle':'right: 1rem;top: 10rem;width: 8rem;height: 3rem;text-align: right;animation-name: btn_animation1;','cid':'','ctext':'','cstyle':''},
        {'id':6,'bg':'les_11','aid':7,'bid':11,'atext':'A. 和她谈谈','btext':'B. 静观其变','astyle':'right: 1rem;top: 15rem;width: 8rem;height: 3rem;text-align: right;animation-name: btn_animation10;','bstyle':'right: 2rem;top: 10rem;width: 8rem;height: 3rem;text-align: center;animation-name: btn_animation13;','cid':'','ctext':'','cstyle':''},
        {'id':7,'bg':'les_12','aid':'','bid':'','atext':'点击分享海报','btext':'','astyle':'right:1rem;top:10rem;width:8rem;height:3rem;text-align:right;animation-name:btn_animation1;','bstyle':'','cid':'','ctext':'','cstyle':''},

        {'id':8,'bg':'les_2','aid':12,'bid':16,'atext':'A. 拒绝他','btext':'B. 答应他的告白','astyle':'right: 1rem;top: 15rem;width: 8rem;height: 3rem;text-align: right;animation-name: btn_animation8;','bstyle':'right: 1rem;top: 10rem;width: 8rem;height: 3rem;text-align: right;animation-name: btn_animation9;','cid':'','ctext':'','cstyle':''},
        {'id':9,'bg':'les_6','aid':13,'bid':13,'atext':'A. 保持现状','btext':'B. 试着接触别人','astyle':'left: 1rem;top: 15rem;width: 8rem;height: 3rem;text-align: left;animation-name: btn_animation12;','bstyle':'left: 1rem;top: 10rem;width: 8rem;height: 3rem;text-align: left;animation-name: btn_animation1;','cid':'','ctext':'','cstyle':''},
        {'id':10,'bg':'les_8','aid':17,'bid':17,'atext':'A. 保持现状','btext':'B. 走出圈子','astyle':'left: 2rem;top: 15rem;width: 8rem;height: 3rem;text-align: center;animation-name: btn_animation12;','bstyle':'left: 2rem;top: 10rem;width: 8rem;height: 3rem;text-align: center;animation-name: btn_animation1;','cid':'','ctext':'','cstyle':''},
        {'id':11,'bg':'les_13','aid':'','bid':'','atext':'点击分享海报','btext':'','astyle':'left: 0;right: 0;top: 15rem;width: 8rem;height: 3rem;text-align: center;animation-name: btn_animation12;','bstyle':'','cid':'','ctext':'','cstyle':''},

        {'id':12,'bg':'les_4','aid':3,'bid':9,'atext':'A. 先不打扰她','btext':'B. 和她交个朋友','astyle':'right: 1rem;top: 15rem;width: 8rem;height: 3rem;text-align: right;animation-name: btn_animation8;','bstyle':'right: 1rem;top: 10rem;width: 8rem;height: 3rem;text-align: right;animation-name: btn_animation9;','cid':'','ctext':'','cstyle':''},
        {'id':13,'bg':'les_7','aid':14,'bid':10,'atext':'A. 公开甜蜜','btext':'B. 保持距离','astyle':'right:1rem;top: 15rem; width: 8rem;height: 3rem; text-align: right;animation-name: btn_animation12','bstyle':'right:1rem; top: 10rem; width: 8rem; height: 3rem; text-align: right;animation-name:btn_animation1','cid':'','ctext':'','cstyle':''},
        {'id':14,'bg':'les_11','aid':15,'bid':11,'atext':'A. 和她谈谈','btext':'B. 静观其变','astyle':'right:1rem;top: 15rem; width: 8rem;height: 3rem; text-align: right;animation-name: btn_animation10','bstyle':'right:2rem; top: 10rem; width: 8rem; height: 3rem; text-align: center;animation-name:btn_animation13','cid':'','ctext':'','cstyle':''},
        {'id':15,'bg':'les_12','aid':'','bid':'','atext':'点击分享海报','btext':'','astyle':'right:1rem; top: 10rem; width: 8rem; height: 3rem; text-align: right;animation-name: btn_animation1','bstyle':'','cid':'','ctext':'','cstyle':''},

        {'id':16,'bg':'les_3','aid':'','bid':'','atext':'','btext':'','astyle':'','bstyle':'','cid':'','ctext':'','cstyle':''},
        {'id':17,'bg':'les_10','aid':'','bid':'','atext':'点击分享海报','btext':'','astyle':'right:1rem;top: 15rem; width: 8rem;height: 3rem; text-align: center;animation-name: btn_animation9','bstyle':'','cid':'','ctext':'','cstyle':''},
      ]
    }
  },
  methods:{
    turnPersonChoose(){
      this.$store.commit('changeList',this.list)
      this.$router.push({path:'/personChoose'})
    }
  }
};
</script>

<style scoped>
h2,
h1 {
  font-weight: 500;
  line-height: 1.1;
  color: #fff;
  margin-top: 20px;
  margin-bottom: 10px;
}
h1{font-weight: 300;}
a {
  text-decoration: none;
}
</style>
