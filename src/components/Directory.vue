<template>
  <div class="directory">
  
    <img class="text-left" id="bg" v-bind:src='"../../static/img/wallpaper.png"' height="600" width="1200" />
  
    <br/>
    <br/>
    <br/>
  
  
  
  
    <div class="container" >
      <div class="row">
        <div class="col-lg-6" >
  
  
  
          <h3 id="alumnia-detail">สมาชิกทั้งหมด 0 คน</h3>
          <h3 id="alumnia-detail" style="color:#ffcc00; margin-top:0%;">อัพเดทล่าสุด 5/5/2018</h3>
  
  
        </div>
        <div class="col-lg-6" id="search">
          
          
  <div class="col-lg-9">
  
  
          <div class="input-group" >
            <input type="text" class="form-control" placeholder="Search for...">
            <span class="input-group-btn">
            <button class="btn btn-default" type="button">Go!</button>
            </span>
          </div>

  </div>
  <div class="col-lg-3">
          <div class="btn-group" style="margin-left:-60%;">
  <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    รุ่น <span class="caret"></span>
  </button>
  <ul class="dropdown-menu">
    <li><a href="#">เครื่องกล</a></li>
    <li><a href="#">เคมี</a></li>
    <li><a href="#">โยธา</a></li>
    <li><a href="#">คอม</a></li>
    <li><a href="#">อุตสาหการ</a></li>
    <li><a href="#">ไฟฟ้า</a></li>
    <li><a href="#">ชีวะการแพทย์</a></li>
    <li role="separator" class="divider"></li>
    <li><a href="#">อาจารย์ & การศึกษา</a></li>
  </ul>
</div>
  </div> 
          
  
        </div>
  
  
  
  

      </div>
  
  
  
  
      <div class="col-sm-6 col-md-3" v-for="users in filteredUsers" v-bind:key="users._id">
        <div class="thumbnail">
          <img id="profile-img" v-bind:src= users.imageUrl />
          <div class="caption">
            <h3>{{users.firstName}} {{users.lastName}}</h3>
            <p>{{users.mobileNo}}</p>
            <p>{{users.email}}</p>
            <p>{{users.facebook}}</p>
  
          </div>
          <router-link :to="{ path: 'updateuser/' + users._id}" class="btn btn-xs btn-warning" tag="button" type="button">
            <span class="glyphicon glyphicon-pencil"></span>
          </router-link>
          <button class="btn btn-xs btn-danger" data-toggle="modal" data-target=".bd-example-modal-sm" ><span class="glyphicon glyphicon-trash"></span></button>
        </div>
      </div>
  
      <!-- /.row -->
    </div>
  
  
    
  
  
  
  
  </div>
</template>

<script>
  import axios from "axios";
  export default {
    name: "users",
    data() {
      return {
        Users: [],
        uid: "",
        search: ""
      };
    },
    methods: {
      logout() {
        localStorage.removeItem("Token");
        window.location.href = "http://localhost:8080/#/";
      }
    },
    computed: {
      filteredUsers: function() {
        return this.Users.filter(user => {
          return (
            user.firstName.match(this.search) || user.lastName.match(this.search)
          );
        });
      }
    },
    mounted() {
       if (localStorage.getItem('reloaded')) {
        // The page was just reloaded. Clear the value from local storage
        // so that it will reload the next time this page is visited.
        localStorage.removeItem('reloaded');
    } else {
        // Set a flag so that we know not to reload the page twice.
        localStorage.setItem('reloaded', '1');
        location.reload();
    }
   localStorage.setItem('Header', 'true');
   
      axios
        .get("http://localhost:8082/alumnia")
        .then(response => {
          
          this.Users = response.data;
          console.log(this.Users);
        })
        .catch(error => {
          console.log(error);
        });
    }
  };
</script>

<style>
  .thumbnail {
    margin-top: 40px;
  }
  
  #profile-img {
    height: 170px;
    width: auto;
    max-width: 500px;
  }
  
  #logout-btn {
    /* position: absolute;
        top: 8px;
        right: 16px; */
    /* position: absolute; */
    margin-left: 125%;
  }
  
  #bg {
    position: fixed;
    top: 0;
    left: 0;
    /* Preserve aspet ratio */
    min-width: 100%;
    min-height: 100%;
    /* filter: contrast(50%); */
    z-index: -5;
    /* filter: grayscale(20%); */
  }
  
  #search {
    margin-top: 3%;

  }
  
  #alumnia-detail {
    margin-top: 4%;
    margin-left: -40%;
    color: white;
  }
</style>
