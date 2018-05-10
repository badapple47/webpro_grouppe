<template>
  <div class="directory">
    <img class="text-left" id="bg" v-bind:src='"../../static/img/wallpaper.png"' height="600" width="1200" />
    <div class="container" >
      <div class="row">
        <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6" >
          <h3 id="alumnia-detail">สมาชิกทั้งหมด  {{numofalumnia}} คน</h3>
          <h3 id="alumnia-detail" style="color:#ffcc00; margin-top:0%;">อัพเดทล่าสุด 5/5/2018</h3>
        </div>
        <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6" id="search">
          <div class="col-lg-9">
            <div class="input-group" >
              <input type="text" class="form-control" placeholder="Search for..." v-model="search">
              <span class="input-group-btn">
              <button class="btn btn-default" type="button">Go!</button>
              </span>
            </div>
          </div>
          <div class="col-lg-3">
            <div class="btn-group" style="margin-left:-60%;">
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

              <select v-model="search" >
                <option selected disabled>ภาค</option>      
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
      </div><!-- /.row -->
  
      <div class="member-card" data-toggle="modal" data-target="#memberDetailModal">
        <div class="col-sm-6 col-md-3" v-for="users in filteredUsers" v-bind:key="users._id">
          <div class="thumbnail" @click="modalClicked(users)">
            <img id="profile-img" v-bind:src= users.imageURL />
            <div class="caption">
              <h4>{{users.nameEng}}</h4>
              <p>{{users.mobileNo}}</p>
              <p>{{users.email}}</p>
              <p>{{users.website}}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- MemberDtail Modal -->
      <div id="memberDetailModal" class="modal fade" role="dialog">
        <div class="modal-dialog modal-lg">

          <!-- Modal content-->
          <div class="modal-content member-detail-modal">
            <div class="modal-header detail-head">
              <button type="button" class="close" data-dismiss="modal">&times;</button>
              <!-- <h4 class="modal-title">Modal Header</h4> -->
            </div>
            <div class="modal-body">
              <div class="row">
                <div class="col-xs-12 col-sm-5 col-md-5 col-lg-5">
                  <img class="img-responsive center-block" id="profile-img-detail" v-bind:src= imageDefault />
                  <!-- <h3>{{users.nameEng}}</h3>
                  <p>{{users.mobileNo}}</p>
                  <p>{{users.email}}</p>
                  <p>{{users.website}}</p> -->
                  <h3>{{tempData.nameEng}}</h3>
                  <h4>{{tempData.nameTH}}</h4>
                  <h4>BCC#555</h4>
                  <h4>เพศ : ชาย</h4>
                  <h4>อายุ : 22</h4>
                  <h4>รหัสนักศึกษา : {{tempData.studentID}}</h4>
                </div>
                <div class="right-modal col-xs-12 col-sm-7 col-md-7 col-lg-7">
                  <form class="form-horizontal">
                    <div class="form-group">
                      <h4 class="col-sm-4 big-title">ข้อมูลติดต่อ :</h4>
                      <div class="col-sm-8">
                        <h4>Email : {{tempData.email}}</h4>
                        <h4>website : {{tempData.website}}</h4>
                      </div>
                    </div>
                    <div class="form-group">
                      <h4 class="col-sm-4 big-title">ที่ทำงานปัจจุบัน :</h4>
                      <div class="col-sm-8">
                        <h4>Eieieiei Co. Ltd</h4>
                      </div>
                    </div>
                    <div class="form-group">
                      <h4 class="col-sm-3 big-title">ภาษา :</h4>
                      <div class="col-sm-9">
                        <h4>Thai : Native</h4>
                        <h4>English : Beginner</h4>
                      </div>
                    </div>
                    <div class="form-group">
                      <h4 class="col-sm-3 big-title">ทักษะ :</h4>
                      <div class="col-sm-9">
                        <label class="skill">React</label>
                        <label class="skill">Angular</label>
                        <label class="skill">Database Design</label>
                        <label class="skill">Digital Marketing</label>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              
            </div>
          </div>

        </div>
      </div>
      
    </div><!-- container -->
  </div>
</template>

<script>
  import axios from "axios";
  export default {
    
    data() {
      return {
        Users: [{
          nameTH: '',
          nameEng: '',
          nationalID: '',
          department : '',
          studentID: '',
          imageURL: '',
          email: '',
          mobileNo: '',
          website: '',
        }],
        tempData: {
          nameTH: '',
          nameEng: '',
          nationalID: '',
          department : '',
          studentID: '',
          imageURL: '',
          email: '',
          mobileNo: '',
          website: '',
        },
        uid: "",
        search: "",
        numofalumnia: 0 ,
        sortbyDepartment : "",
        imageDefault: 'https://www.iphone-droid.net/wp-content/uploads/2013/09/Mamegoma-icon.png'
      };
    },
    methods: {
      logout() {
        localStorage.removeItem("Token");
        window.location.href = "http://localhost:8080/#/";
      },
      sort(value){
        console.log('hi')
        console.log(this.sortbyDepartment)
      },
      modalClicked(data) {
        this.tempData = data
      }
    },
    computed: {
      filteredUsers: function() {
        // 
        return this.Users.filter(user => {
          console.log(user)
          return (
            
            user.department.match(this.search) 
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
.container{
  margin-top: 100px;
}
.thumbnail {
  margin-top: 40px;
  cursor: pointer;
}

#profile-img-detail {
  height: 170px;
  width: auto;
  max-width: 500px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

#profile-img-detail {
  height: 200px;
  width: 200px;
  max-width: 500px;
  border-radius: 500px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  object-fit: cover;
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

.member-detail-modal {
  border-radius: 20px;
}

.right-modal{
  text-align: left;
}
.detail-head{
  border-bottom: none;
}

.big-title{
  font-size: 15pt;
  font-weight: 100;
  margin-top: 7px;
  color: orange;
}

.skill{
  font-size: 18px;
  font-weight: 100;
  color: rgb(85, 29, 85);
  padding: 3px 7px 3px 8px;
  border: 2px solid rgb(85, 29, 85);
  border-radius: 50px;
  margin-right: 5px;
}
</style>
