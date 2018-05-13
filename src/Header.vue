<template>
  <div id="header" >
    <nav class="navbar navbar-default navbar-fixed-top" style="background-color:white;">
      <div class="container-fluid">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
          <a class="navbar-brand " href="#/home">
            <img id="logo-grouppe" alt="Brand" src="../static/img/grouppe.png" >
          </a>
        </div>

        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav">
            <li class="active"><a href="#/home">Home <span class="sr-only">(current)</span></a></li>
            <li><a href="#/directory">Directory</a></li>
          </ul>
      
          <ul class="nav navbar-nav navbar-right">
            <li><a data-toggle="modal" data-target="#myEventModal">My Event</a></li>
            <li class="dropdown">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"> {{username}} <span class="caret"></span></a>
              <ul class="dropdown-menu">
                <li>
                <router-link :to="{ path: 'updateuser/' + userID}" >
                  <span> Edit Profile </span>
                </router-link>
                </li>
                <li role="separator" class="divider"></li>
                <li><a @click="logout()">Logout</a></li>
              </ul>
            </li>
          </ul>
        </div><!-- /.navbar-collapse -->
      </div><!-- /.container-fluid -->
    </nav>

    <!-- myEvent Modal -->
    <div id="myEventModal" class="modal fade" role="dialog">
      <div class="modal-dialog">

        <!-- Modal content-->
        <div class="modal-content member-detail-modal">
          <div class="modal-header custom-head">
            <button type="button" class="close" data-dismiss="modal">&times;</button>
            <h3 class="modal-title">กิจกรรมทั้งหมดที่คุณได้สมัครไว้</h3>
          </div>
          <div class="modal-body">
            <div v-for="(i,index) in eventArray" :key="index" @click="toEventPage(index)"data-dismiss="modal">
              <div class="row" style="margin: 0px 10px;">
                <div class="col-xs-1 col-sm-1 col-md-1 col-lg-1">
                  <i class="fas fa-bookmark bullet"></i>
                </div>
                <div class="col-xs-11 col-sm-11 col-md-11 col-lg-11">
                  <p style="font-size: 12pt; margin-bottom: 0px;">{{i}}</p>
                </div>
              </div>
              <hr>
            </div>
          </div>
          <div class="modal-footer" style="border-top: none; padding-top: 0px;">
            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>

import axios from 'axios'

export default {
  data() {
    return {
      nameEng: '',
      userID: '',
      username: 'New User',
      user:[],
      eventArray:[],
      event:[],
      eventIDArray:[]
    };
  },
  methods: {
    logout() {
      localStorage.clear();
      window.location.href = "http://egco427-project-badapple47.c9users.io:8080/#/";
    },
    toEventPage(num) {
      var thisfunc = this
      thisfunc.$router.push({ path: '/event/'+ this.user.eventId[num]})
    }
  },
  computed: {
    filteredUsers: function() {
      let event = this.eventArray
      console.log(event)
      return event.filter(user => {
        return (
          user.event.match(this.search) 
        );
      });
    }
  },
  mounted(){
    var i
    this.nameEng = localStorage.getItem('nameEng')
    this.userID = localStorage.getItem('userID')
    this.username = localStorage.getItem('username')
    console.log("blahblah : " + this.userID)
    if(this.userID != null){
      axios.get('http://egco427-project-badapple47.c9users.io:8082/alumnia/' + this.userID)
        .then((response) => {
          // console.log(response.data)
          this.user = response.data
          console.log("เข้ามาได้แล้ว")
          for(i = 0; i< this.user.eventId.length; i++){
            console.log("this is eventId : "+ this.user.eventId[i])
            axios.get('http://egco427-project-badapple47.c9users.io:8082/showEvent/'+ this.user.eventId[i])
              .then((response) =>{
                this.event = response.data
                console.log("this is event : ")
                this.eventArray.push(this.event.event)
                this.eventIDArray.push(this.user.eventId[i])
              })
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
#logo-grouppe{
  margin-left: 5%;
  margin-top: -5%;
  width: 120px;
  height: 40px;
}
.bullet{
  margin-top: 2px;
  font-size: 15pt;
  color: orange;
  text-shadow: 2px 2px 4px #000000;
}
.custom-head{
  background-color: aliceblue;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}
hr {
  margin-top: 10px;
  margin-bottom: 10px;
}
</style>
