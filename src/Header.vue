<template>
  <div id="header" >
    


<div class="modal fade modal-myEvent" id="myModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title" id="exampleModalLabel">Are you sure?</h1>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            Are you sure you want to delete this item? </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <router-link to="/home" class="btn btn-danger" tag="button" type="button">
              <span @click="delUser(uid)">Delete</span>
            </router-link>
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
      <form class="navbar-form navbar-left">
        <div class="form-group">
          <input type="text" class="form-control" placeholder="Search">
        </div>
        <button type="submit" class="btn btn-default">Submit</button>
      </form>
      <ul class="nav navbar-nav navbar-right">
        <li><a data-toggle="modal" data-target=".modal-myEvent">Event</a></li>
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
export default {
 data() {
      return {
        nameEng: '',
        userID: '',
        username: 'New User',
      };
    },

    methods: {
      logout() {
       localStorage.clear();
        window.location.href = "http://localhost:8080/#/";
   
      }
    },

    mounted(){

       this.nameEng = localStorage.getItem('nameEng')
       this.userID = localStorage.getItem('userID')
       this.username = localStorage.getItem('username')


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
