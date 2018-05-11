<template>
  <div id="header" >
    


<div class="modal fade modal-myEvent" id="myModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title" id="exampleModalLabel">กิจกรรมทั้งหมดที่คุณได้สมัครไว้</h1>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body" >
              <p v-for="(i,index) in eventArray" :key="index" @click="toEventPage(index)">{{i}}</p></div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            
          </div>
        </div>
      </div>
    </div>

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
        <li><a data-toggle="modal" data-target=".modal-myEvent">My Event</a></li>
        <li class="dropdown">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"> {{username}} <span class="caret"></span></a>
          <ul class="dropdown-menu">
            <!-- <li><a href="/updateuser {{ }}">Edit Profile</a></li> -->
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
        window.location.href = "http://localhost:8080/#/";
   
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


       axios.get('http://localhost:8082/alumnia/' + this.userID)
          .then((response) => {
        // console.log(response.data)
        this.user = response.data
        console.log("เข้ามาได้แล้ว")

        for(i = 0; i< this.user.eventId.length; i++){
          console.log("this is eventId : "+ this.user.eventId[i])
            axios.get('http://localhost:8082/showEvent/'+ this.user.eventId[i])
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
</style>
