<template>
  <div class="directory">
  
    <img class="text-left" id="bg" v-bind:src='"../../static/img/wallpaper.png"' height="600" width="1200" />
  
    <br/>
    <br/>
    <br/>
  
  
  
  
    <div class="container" >
      <div class="row">
        <div class="col-lg-6" >
  
  
  
          <h3 id="alumnia-detail">สมาชิกทั้งหมด  {{Users.length}} คน</h3>
          <h3 id="alumnia-detail" style="color:#ffcc00; margin-top:0%;">อัพเดทล่าสุด 5/5/2018</h3>
  
  
        </div>
        <div class="col-lg-6" id="search">
          
          
  <div class="col-lg-9">
  
  
          <div class="input-group" >
            <input type="text" class="form-control" placeholder="Search for..." v-model="search" @click="sortMode(1)">
            <span class="input-group-btn">
            <button class="btn btn-default" type="button" >Go!</button>
            </span>
          </div>

  </div>
  <div class="col-lg-3">
          <div class="btn-group" style="margin-left:-40%;">
  <!-- <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    รุ่น <span class="caret"></span>
  </button>
  <ul class="dropdown-menu" v-bind="sortbyDepartment" @click="sort">
       <option selected disabled>ภาค</option>      
    <option value="เครื่องกล">เครื่องกล</option>
    <option value="เคมี">เคมี</option>
    <option value="โยธา">โยธา</option>
    <option value="คอม">คอม</option>
    <option value="อุตสาหะการ">อุตสาหะการ</option>
    <option value="ไฟฟ้า">ไฟฟ้า</option>
    <option value="ชีวะการแพทย์">ชีวะการแพทย์</option>
  </ul> -->

  <select v-model="search2" @click="sortMode(2)">
   <option disabled value="">ค้นหาตามภาค</option>   
    <option value="เครื่องกล">เครื่องกล</option>
    <option value="เคมี">เคมี</option>
    <option value="โยธา">โยธา</option>
    <option value="คอม">คอม</option>
    <option value="อุตสาหะการ">อุตสาหะการ</option>
    <option value="ไฟฟ้า">ไฟฟ้า</option>
    <option value="ชีวะการแพทย์">ชีวะการแพทย์</option>
</select>

</div>





  </div> 
          
  
        </div>
  
  
  
  

      </div>
  
  
  
  
      <div class="col-sm-6 col-md-3" v-for="users in filteredUsers" v-bind:key="users._id">
        <div class="thumbnail">
          <!-- <img id="profile-img" v-bind:src= users.imageUrl /> -->
          <img class="img-responsive center-block" id="profile-img" v-if="users.imageURL != undefined" v-bind:src= users.imageURL />
      <img class="img-responsive center-block" id="profile-img"  v-else  v-bind:src= imageDefault />
          <div class="caption">
            <h3>{{users.nameTH}} </h3>
            <p>{{users.nameEng}}</p>
            <p>{{users.department}}</p>
            <p>{{users.studentID}}</p>
        
  
          </div>
        
          <button class="btn btn-xs btn-primary" data-toggle="modal" data-target=".bd-example-modal-sm" ><span >Detail</span></button>
        </div>
      </div>
  
      <!-- /.row -->
    </div>
  
  
    
  
  
  
  
  </div>
</template>

<script>
  import axios from "axios";
  export default {
    
    data() {
      return {
        imageDefault: 'https://www.iphone-droid.net/wp-content/uploads/2013/09/Mamegoma-icon.png',
        Users: [],
        uid: "",
        search: "",
        search2: "",
        sortbyDepartment : "",
        searchMode: ''
      };
    },
    methods: {
      logout() {
        localStorage.removeItem("Token");
        window.location.href = "http://localhost:8080/#/";
      },
      sortMode(mode){
        if(mode == 1){
        this.searchMode = "searchbox"
        }else if (mode == 2){
        this.searchMode = "department"
        }
        
        console.log(this.searchMode)
      }
    },
    computed: {
      filteredUsers: function() {
       
        return this.Users.filter(user => {
          

           if( user.department == undefined){
console.log("ตรวจพบ user ไม่มี department สลับไปใช้ username มาโชว์แทน")
              return (
            
            user.username.match(this.search) 
          );

        }else{

        if(this.searchMode == "searchbox"){
          return (
                    user.nameTH.match(this.search) 
                  );
        }else if(this.searchMode == "department"){
          return (
                    user.department.match(this.search2) 
                  );

        }else{

          return (
                    user.department.match(this.search) 
                  );

        }
        
          
        }
        
         
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

     if(localStorage.getItem('nameTH') == null){
    window.location.href = "http://localhost:8080/#/updateuser/" + localStorage.getItem('userID')
    }
   
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
