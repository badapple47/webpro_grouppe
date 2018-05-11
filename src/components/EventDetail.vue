<template>
  <div class="news-detail">
    <div class="container event-container" >


   

<div class="panel panel-default">
  <div class="panel-body">

    <div class="page-header">
  <h2>{{Event.event}} <small ></small></h2> <p class="text-right ">จำนวนการเข้าชม : {{Event.view}}</p>
</div>

                <span>
                     <img class="eventImage" v-bind:src= Event.image alt="Card image cap" >
                    </span>
                    


              
                      <div class="detail-body" >

                        <div class="modal-body">
             <div class="panel panel-success" v-if="userAlreadyJoinEvent == true">
          <div class="panel-heading">
            <h3 class="panel-title">ยินดีด้วย</h3>
          </div>
          <div class="panel-body">
            คุณสามารถเข้าไปรับ QR Code ยืนยันการสมัครได้โดยการกดสมัครอีกครั้ง 
          </div>
        </div>
        </div>

                     <p> {{Event.description}}  </p> 
                    </div>

                 


     

         
  </div>
  <div class="panel-footer">
   <p> @{{Event.location}} วันที่ {{Event.dayStart}} {{Event.monthStart}} {{Event.yearStart}} </p>
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
    <div class="page-header">
  <h3>เข้าร่วมกิจกรรม <small>กับเพื่อนของคุณ</small></h3>


</div>
  <div class="col-md-10" >
    <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3" v-for="(i,index) in userArray" :key="index">
      <div class="friendbox">
                
        <img class="friend-pic center-block img-circle" v-bind:src= pic  v-if="userIMGArray[index] == undefined || userIMGArray[index] == null" alt="Card image cap">
        <img class="friend-pic center-block img-circle" v-bind:src= userIMGArray[index] v-else alt="Card image cap">

        <label>{{i}}</label>
      </div>
    </div>
  </div>

     <div class="col-md-2" >
         <button class="btn btn-outline-secondary read-more-btn" v-if="userAlreadyJoinEvent==true" tag="button" type="button" data-toggle="modal" data-target=".eventRegister">
										<span>ดู QR Code</span>
 </button>   
       <button class="btn btn-outline-secondary read-more-btn" v-else   @click="checkIfUserAlreadyJoinEvent" tag="button" type="button" data-toggle="modal" data-target=".eventRegister">
										<span>สมัคร</span>
 </button>    
 
    </div>

 

  </div>
</div>


      
<div class="modal fade eventRegister" id="myModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title" id="exampleModalLabel" style="text-align: center;">ยืนยัน</h1>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
           <div class="modal-body">
             <div class="panel panel-danger" v-if="userAlreadyJoinEvent==true">
          <div class="panel-heading">
            <h3 class="panel-title">ผิดพลาด</h3>
          </div>
          <div class="panel-body">
            คุณได้ทำการสมัครเข้าร่วมกิจกรรมนี้ไปแล้ว
          </div>
        </div>
        
            <div class="container-fluid"  >
           <p style="text-align: center;"> คุณต้องการเข้าร่วมงาน {{Event.event}} นี้หรือไม่ </p> </div>
            <button type="button"  class="btn btn-success center-block" style="border-radius: 15px; width: 200px;" v-if="userAlreadyJoinEvent==true" disabled @click="registerEvent">ตกลง</button>
            <button type="button"  class="btn btn-success center-block" style="border-radius: 15px; width: 200px;" v-else  @click="registerEvent">ตกลง</button>
            
          </div>

          <qrcode :value="msg" v-if="userAlreadyJoinEvent==true" class="center-block" > </qrcode >
          <p style="text-align:center;" v-if="userAlreadyJoinEvent==true">* รหัสยืนยันการสมัคร </p>


          <div class="modal-footer" >
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
import VueQrcode from '@xkeshi/vue-qrcode'
export default {
  name: 'home',
  data () {
    return {
      msg: 'EGCO427',
      userID :'',
      Event: [],
      userAlreadyJoinEvent: false,
      event:[],
      userArray:[],
      user:[],
      userIMGArray:[],
      userAlreadyJoinEvent: false ,
      qrCode: '',
      pic: 'https://www.iphone-droid.net/wp-content/uploads/2013/09/Mamegoma-icon.png'

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
    checkIfUserAlreadyJoinEvent(){

      console.log("mounted")
      


  let userID = this.Event.userId
      userID.forEach(element => {
        if (element == this.userID) {

          this.userAlreadyJoinEvent = true
          this.qrCode = this.userID + this.$route.params.userId
          console.log("true")

        }else{
          
          // this.userAlreadyJoinEvent = false
          console.log("flase")
        }
        
      });

    },
 
  },
  mounted(){

   
    this.userID = localStorage.getItem('userID')

    axios.get('http://localhost:8082/updateEventView/' + this.$route.params.userId)
      .then((response) => {
// console.log(response.data)
        // console.log(this.Event.userId)

      })
      .catch((error) => {
        console.log(error)
      })

     axios.get('http://localhost:8082/showEvent/' + this.$route.params.userId)
      .then((response) => {
// console.log(response.data)
        this.Event = response.data
        // console.log(this.Event.userId)

      })
      .catch((error) => {
        console.log(error)
      })

      axios.get('http://localhost:8082/showEvent/'+this.$route.params.userId)
          .then((response) => {
        // console.log(response.data)
        this.event = response.data
        console.log("เข้ามาได้แล้วของหน้า Event : " + this.event)
        let i
        for(i = 0; i< this.event.userId.length; i++){
          console.log("this is eventId : "+ this.event.userId[i])
            axios.get('http://localhost:8082/alumnia/'+ this.event.userId[i])
                  .then((response) =>{
                    this.user = response.data
                    console.log(this.user.nameTH)

                    this.userArray.push(this.user.nameTH)
                    this.userIMGArray.push(this.user.imageURL)
                  })
        }

 this.checkIfUserAlreadyJoinEvent()
      })
      .catch((error) => {
        console.log(error)
      })


  },
   components:{

   'qrcode' : VueQrcode

  },
  
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
.eventImage{
   width: 100%;
  height: 200px;
  object-fit: cover;

}
.friend-pic{
  height: 60px;
  width: auto;
  max-width: 60px;
  object-fit: cover;
}
.friendbox{
  text-align: center;
}

</style>