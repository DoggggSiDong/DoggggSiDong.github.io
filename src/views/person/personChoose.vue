<template>
  <div>
    <img :src="src" alt />
    <button class="btn1" :style="astyle" @click="AClick">
      <a href="#">
        <h3 v-html="atext"></h3>
      </a>
    </button>
    <button class="btn1" :style="bstyle" @click="BClick" v-if="bid">
      <a href="#">
        <h3 v-html="btext"></h3>
      </a>
    </button>
    <button class="btn1" :style="cstyle" @click="CClick" v-if="cid">
      <a href="#">
        <h3 v-html="ctext"></h3>
      </a>
    </button>
  </div>
</template>

<script>
export default {
  name: "personChoose",
  data() {
    return {
      index: 1,
      src: "",
      astyle: "",
      bstyle: "",
      cstyle:'',
      atext: "",
      btext: "",
      ctext:'',
      aid:'',
      bid:'',
      cid:''
    };
  },
  mounted() {
    this.init('1')
  },
  methods:{
    init(id = 1){
      document.documentElement.scrollTop = document.body.scrollTop = 0
      let i = this.$store.state.personList.find(value => {
        return value.id == id;
      });
      if(i !== undefined){
        console.log(i)
        this.src = require(`../../assets/images/${i.bg}.jpg`);
        this.astyle = i.astyle;
        this.bstyle = i.bstyle;
        this.cstyle = i.cstyle;
        this.atext = i.atext;
        this.btext = i.btext;
        this.ctext = i.ctext;
        this.aid = i.aid
        this.bid = i.bid
        this.cid = i.cid
      }
    },
    AClick(){
      this.init(this.aid)
    },
    BClick(){
      this.init(this.bid)
    },
    CClick(){
      this.init(this.cid)
    }
  }
};
</script>

<style scoped>
</style>
