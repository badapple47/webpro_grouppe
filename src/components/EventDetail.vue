<template>
  <div class="news-detail">
    <div class="container event-container" >


   

<div class="panel panel-default">
  <div class="panel-body">
                <span>
                     <img class="eventImage" v-bind:src= Event.image alt="Card image cap" >
                    </span>
                    


              
                      <div class="detail-body" >
                     <p> {{Event.description}} : Noew this view is => {{Event.view}} </p> 
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
    <div class="page-header">
  <h3>Example page header <small>Subtext for header</small></h3>


</div>
  <div class="col-md-10" >
    </div>

     <div class="col-md-2" >
       <button class="btn btn-outline-secondary read-more-btn"  @click="checkIfUserAlreadyJoinEvent" tag="button" type="button" data-toggle="modal" data-target=".eventRegister">
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
        
            <div class="container-fluid">
           <p style="text-align: center;"> คุณต้องการเข้าร่วมงาน {{Event.event}} นี้หรือไม่ </p> </div>
            <button type="button"  class="btn btn-success center-block" style="border-radius: 15px; width: 200px;" v-if="userAlreadyJoinEvent==true" disabled @click="registerEvent">ตกลง</button>
            <button type="button"  class="btn btn-success center-block" style="border-radius: 15px; width: 200px;" v-else  @click="registerEvent">ตกลง</button>
            
          </div>

          


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
      Event: [],
      userAlreadyJoinEvent: false 

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

  let userID = this.Event.userId
      userID.forEach(element => {
        if (element == this.userID) {

          this.userAlreadyJoinEvent = true

        }else{
          this.userAlreadyJoinEvent = false
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
.eventImage{
   width: 100%;
  height: 200px;
  object-fit: cover;

}

</style>
