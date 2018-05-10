<template>
  <div class="news-detail">
    <div class="container">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="/#/home">Home</a></li>
          <li class="breadcrumb-item active" aria-current="page">{{News.news}}</li>
        </ol>
      </nav>
      <H1>{{News.news}}</H1>
      <span>
        <img class="news-img" v-bind:src= News.image alt="Card image cap">
      </span>
      <div class="detail-body">
        <p class="paragraph"> {{News.description}}</p>
        <!-- <p class="paragraph"> สำหรับภาพถ่ายที่ถูกรวบรวมเอาไว้นี้ เป็นภาพถ่ายในอิริยาบทต่าง ๆ ของน้องหมาสายพันธุ์ซามอยด์ ที่แสดงให้เห็นถึงความสดใส ขี้เล่น น่ารัก เป็นมิตร มีลักษณะรูปร่างคล้ายหมีขาวตัวโต จึงไม่แปลกที่น้องหมาพันธุ์นี้จะครองใจและเป็นที่นิยมเลี้ยงไปทั่วโลก</p> -->
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'home',
  data () {
    return {
      msg: 'EGCO427',
       User: {
        username: '',
        password: '',
      },
      News:[]
    }
  },
  methods: {
    addToAPI () {
      let newUser = {
        username: this.User.username,
        password: this.User.password,
     
      }
      console.log(newUser)
      axios.post('http://localhost:8082/authen', newUser)
        .then((response) => {
          console.log(response.data)
          if(response.data == "Okay!"){
            console.log("Okay let's go")
            localStorage.setItem('Token', 'asdasdasdasd');
           window.location.href = "http://localhost:8080/#/home"

          }
        })
        .catch((error) => {
          console.log(error)
        })
    }
  },
  mounted(){
    this.userID = localStorage.getItem('userID')


     axios.get('http://localhost:8082/showNews/' + this.$route.params.userId)
      .then((response) => {
// console.log(response.data)
        this.News = response.data
        // console.log(this.Event.userId)

      })
      .catch((error) => {
        console.log(error)
      })


  }
}
</script>

<style>
.news-detail{
  text-align: left;
}
.breadcrumb{
  text-align: left;
}
.news-img{
  width: 100%;
  height: 400px;
  margin: 20px;
  object-fit: scale-down;
}
.detail-body{
  padding: 20px;
}
.paragraph{
  text-indent: 40pt;
}
</style>
