<template>
  <div class="news-detail">
    <div class="container event-container" >


      <div class="jumbotron" >
  <h1>{{Event.event}}</h1>
  <p>...</p>
  <p><a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a></p>
</div>

<div class="panel panel-default">
  <div class="panel-body">
                <span>
                      <img class="news-img" src="https://www.petful.com/wp-content/uploads/2014/10/Samoyed.jpg" alt="Card image cap">
                    </span>
                    


              
                      <div class="detail-body" >
                      <p class="paragraph"> เว็บไซด์ boredpanda ได้รวบรวมภาพถ่ายของน้องหมาสายพันธุ์ซามอยด์ในมุมต่าง ๆ เอาไว้ โดยสุนัขสายพันธุ์ซามอยด์นี้ถือเป็นสายพันธุ์ที่ดีสำหรับการเลี้ยงในครอบครัว เพราะเป็นสุนัขที่มีนิสัยดี ตื่นตัว ขี้เล่น เป็นมิตร และไม่ก้าวร้าว ทำให้ผู้พบเห็นต่างตกหลุมรัก และสุนัขพันธุ์ซามอยด์ยังได้รับฉายาว่า  พวกเขาแทบไม่ก้าวร้าวและเป็นมิตรมากจนทำให้พวกเขาได้รับชื่อเล่นว่า "smiley dog" หรือสุนัขหน้ายิ้มอีกด้วย ...</p>
                      <p class="paragraph"> สำหรับภาพถ่ายที่ถูกรวบรวมเอาไว้นี้ เป็นภาพถ่ายในอิริยาบทต่าง ๆ ของน้องหมาสายพันธุ์ซามอยด์ ที่แสดงให้เห็นถึงความสดใส ขี้เล่น น่ารัก เป็นมิตร มีลักษณะรูปร่างคล้ายหมีขาวตัวโต จึงไม่แปลกที่น้องหมาพันธุ์นี้จะครองใจและเป็นที่นิยมเลี้ยงไปทั่วโลก</p>
                    </div>

                 


     

									
  </div>
</div>

<div class="panel panel-default">
  <div class="panel-body">


      <GmapMap
  :center="{lat:13.794650, lng:100.323465}"
  :zoom="13"
  map-type-id="terrain"
  style="width: 800px; height: 300px;"
>

</GmapMap>
      
  

  </div>
</div>



<div class="panel panel-default">
  <div class="panel-body">

 <button class="btn btn-outline-secondary read-more-btn" tag="button" type="button" data-toggle="modal" data-target=".bd-example-modal-sm">
										<span>สมัคร</span>
 </button>    
      
  

  </div>
</div>


      
<div class="modal fade bd-example-modal-sm" id="myModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title" id="exampleModalLabel" style="text-align: center;">ยืนยัน</h1>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
           <p style="text-align: center;"> คุณต้องการเข้าร่วมงาน {{Event.event}} นี้หรือไม่ </p> </div>
            <button type="button" class="btn btn-primary center-block" style="border-radius: 15px;" @click="registerEvent">ตกลง</button>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal" >Close</button>
            
          </div>
        </div>
      </div>
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
      userID :'',
      Event: []

    }
  },
  methods: {
    registerEvent () {
      let eventInfo = {
        userID: this.userID,
        eventID: this.$route.params.userId,
     
      }
      console.log(eventInfo)
      axios.post('http://localhost:8082/updateMemberInEvent', eventInfo)
        .then((response) => {
          console.log(response.data)
          
        })
        .catch((error) => {
          console.log(error)
        })

         axios.post('http://localhost:8082/updateEventInMember', eventInfo)
        .then((response) => {
          console.log(response.data)
          
        })
        .catch((error) => {
          console.log(error)
        })

        location.reload();
    },
 
  },
  mounted(){
    this.userID = localStorage.getItem('userID')


     axios.get('http://localhost:8082/showEvent/' + this.$route.params.userId)
      .then((response) => {
console.log(response.data)
        this.Event = response.data

      })
      .catch((error) => {
        console.log(error)
      })


  }
}
</script>

<style>
.event-container{
  /* margin: 0px 150px 0px 150px; */
  width: 60%;
}
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
.read-more-btn{
	border-radius: 50px;
}
.btn-outline-secondary {
    color: #6c757d;
    background-color: transparent;
    background-image: none;
    border-color: #6c757d;
}
</style>
