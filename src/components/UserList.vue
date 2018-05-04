<template>
  <div class="container">
      <button class="btn-danger" id="logout-btn" @click="logout">
          Logout
      </button>
    <h1>List of Users</h1>
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="input-group">
            <input type="text" class="form-control" placeholder="Search for..." v-model="search">
            <span class="input-group-btn">
              <button class="btn btn-primary" type="button">
                <span class="glyphicon glyphicon-search"></span>
              </button>
              <router-link to="/adduser" tag="button"  class="btn btn-success" type="button">
                <span class="glyphicon glyphicon-plus"></span>
              </router-link>
            </span>
          </div>
          <!-- /input-group -->
        </div>
        <!-- /.col-lg-6 -->
      </div>

      
  <div class="col-sm-6 col-md-4" v-for="users in filteredUsers" v-bind:key="users._id">
    <div class="thumbnail">
      <img id="profile-img" v-bind:src= users.imageUrl />
      <div class="caption">
        <h3>{{users.firstName}}  {{users.lastName}}</h3>
        <p>{{users.mobileNo}}</p>
        <p>{{users.email}}</p>
        <p>{{users.facebook}}</p>
    
      </div>
      <router-link :to="{ path: 'updateuser/' + users._id}" class="btn btn-xs btn-warning" tag="button" type="button">
              <span class="glyphicon glyphicon-pencil"></span>
            </router-link>
            <button class="btn btn-xs btn-danger" data-toggle="modal" data-target=".bd-example-modal-sm" @click="DELETE(users._id)"><span class="glyphicon glyphicon-trash"></span></button>
    </div>
  </div>

      <!-- /.row -->
    </div>


    <div class="modal fade bd-example-modal-sm" id="myModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
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




  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'users',
  data () {
    return {
      Users: [],
      uid: '',
      search: ''
    }
  },
  methods: {
    delUser (userId) {
      var url = 'http://localhost:8082/users/' + userId
      axios.delete(url)
        .then((response) => {
          console.log('Delete UserId: ' + userId)
        })
        .catch((error) => {
          console.log(error)
        })
      window.location.reload()
    },
    DELETE (id) {
      // eslint-disable-next-line
      $('#my-modal').modal('show')
      this.uid = id
    },
      logout () {
localStorage.removeItem('Token')
window.location.href = "http://localhost:8080/#/"
    }
  },
  computed: {
    filteredUsers: function () {
      return this.Users.filter((user) => {
        return user.firstName.match(this.search) || user.lastName.match(this.search)
      })
    }
  },
  mounted () {
        console.log("Mounnted")
    if(localStorage.getItem('Token') == null){
      window.location.href = "http://localhost:8080/#/"
    }
    axios.get('http://localhost:8082/users')
      .then((response) => {
        console.log(response.data)
        this.Users = response.data
      })
      .catch((error) => {
        console.log(error)
      })
  }
}

</script>

<style>

  .thumbnail {
      margin-top: 40px;
  }

  #profile-img{
    height:170px;
    width:auto;
    max-width:500px;
      
  }

  #logout-btn{
    /* position: absolute;
    top: 8px;
    right: 16px; */
    /* position: absolute; */
    margin-left : 125%;
  }

</style>



// mame url

// https://www.iphone-droid.net/wp-content/uploads/2013/09/Mamegoma-icon.png