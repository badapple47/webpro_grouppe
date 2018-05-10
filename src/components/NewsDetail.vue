<template>
  <div class="news-detail">
    <div class="row news-detail-row">
      <div class="col-xs-12 col-sm-8 col-md-8 col-lg-8">
        <div class="container news-container">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><a href="/#/home">Home</a></li>
              <li class="breadcrumb-item active" aria-current="page">News1</li>
            </ol>
          </nav>
          <div class="page-header">
            <h1>Example page header <small>Subtext for header</small></h1>
          </div>
          <span>
            <img class="news-img" src="https://www.petful.com/wp-content/uploads/2014/10/Samoyed.jpg" alt="Card image cap">
          </span>
          <div class="detail-body">
            <p class="paragraph"> เว็บไซด์ boredpanda ได้รวบรวมภาพถ่ายของน้องหมาสายพันธุ์ซามอยด์ในมุมต่าง ๆ เอาไว้ โดยสุนัขสายพันธุ์ซามอยด์นี้ถือเป็นสายพันธุ์ที่ดีสำหรับการเลี้ยงในครอบครัว เพราะเป็นสุนัขที่มีนิสัยดี ตื่นตัว ขี้เล่น เป็นมิตร และไม่ก้าวร้าว ทำให้ผู้พบเห็นต่างตกหลุมรัก และสุนัขพันธุ์ซามอยด์ยังได้รับฉายาว่า  พวกเขาแทบไม่ก้าวร้าวและเป็นมิตรมากจนทำให้พวกเขาได้รับชื่อเล่นว่า "smiley dog" หรือสุนัขหน้ายิ้มอีกด้วย ...</p>
            <p class="paragraph"> สำหรับภาพถ่ายที่ถูกรวบรวมเอาไว้นี้ เป็นภาพถ่ายในอิริยาบทต่าง ๆ ของน้องหมาสายพันธุ์ซามอยด์ ที่แสดงให้เห็นถึงความสดใส ขี้เล่น น่ารัก เป็นมิตร มีลักษณะรูปร่างคล้ายหมีขาวตัวโต จึงไม่แปลกที่น้องหมาพันธุ์นี้จะครองใจและเป็นที่นิยมเลี้ยงไปทั่วโลก</p>
          </div>
        </div>
      </div>
      <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4">
        <router-link to="eventdetail">
          <div class="card list-news-card" v-for="i in 4">
            <div class="row">
              <span>
                <img class="list-news-card-img" src="https://pbs.twimg.com/media/DKnbzS3UMAAra8W.jpg:large" alt="Card image cap">
              </span>
              <!-- <div class="card-body"> -->
                <p class="toppic">Cute Chimmy</p>
                <p class="card-text-cap paragraph">The President's tactics might work in North Korea, but diplomats fear the same approach to Tehran won't work, writes Mark Austin.</p>
              <!-- </div> -->
            </div>
          </div>
				</router-link>
      </div>
    </div><!-- row -->
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
      }
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
  }
}
</script>

<style>
.news-container{
  width: 90%;
}
.news-detail{
  text-align: left;
}
.breadcrumb{
  text-align: left;
}
.news-detail-row{
  margin: 0px;
}
.news-img{
  width: 100%;
  height: 400px;
  padding: 20px;
  object-fit: scale-down;
}
.detail-body{
  padding: 20px;
}
.paragraph{
  text-indent: 40pt;
}
.list-news-card-img{
	width: 100%;
  height: 280px;
  object-fit: cover;
}
.card{
  border-style: none;
}
.card-body{
  padding: 10px;
}
.card-text-cap{
  text-overflow: ellipsis;
}
.list-news-card{
  width: 80%;
	text-align: left;
  color: black;
  margin: 50px 0px 20px 0px;
  border-radius: 0px;
}
.no-padding{
  padding: 0px;
}
.toppic{
  margin-top: 10px;
  font-size: 18px;
  font-weight: 600;
}
a:hover {
    text-decoration: none;
}
</style>
