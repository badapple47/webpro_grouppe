<template>

  <div class="container">
    <img class="text-left" id="bg" v-bind:src='"../../static/img/wallpaper.png"' height="600" width="1200" />
    <form>
      <div class="col-md-6 col-md-offset-3">
      <div class="well" >
        <h4>Update User</h4>
        <div class="row">


      <img class="img-responsive center-block" id="profile-img"  v-bind:src= User.imageUrl />
  


</div>
        <!-- <div class="form-group" >
          <label class="pull-left">Contact ID </label>
          <input type="text" class="form-control" placeholder="Contact ID" v-model="User.contactId">
        </div>
        <div class="form-group" >
          <label class="pull-left">First Name: </label>
          <input type="text" class="form-control" placeholder="First Name" v-model="User.firstName">
        </div>
        <div class="form-group" >
          <label class="pull-left">Last Name: </label>
          <input type="text" class="form-control" placeholder="Last Name" v-model="User.lastName">
        </div>
        <div class="form-group" >
          <label class="pull-left">Mobile No </label>
          <input type="text" class="form-control" placeholder="Mobile No" v-model="User.mobileNo">
        </div>
        <div class="form-group" >
          <label class="pull-left">Email: </label>
          <input type="text" class="form-control" placeholder="Email" v-model="User.email">
        </div>
        <div class="form-group" >
          <label class="pull-left">Facebook </label>
          <input type="text" class="form-control" placeholder="Facebook" v-model="User.facebook">
        </div>
        <div class="form-group" >
          <label class="pull-left">Image Url </label>
          <input type="text" class="form-control" placeholder="Image Url" v-model="User.imageUrl">
        </div> -->

        <div class="form-group" >
          <label class="pull-left">ชื่อ-นามสกุล</label>
          <input type="text" class="form-control" placeholder="ชื่อ-นามสกุล">
        </div>
        <div class="form-group" >
          <label class="pull-left">Name-Surname</label>
          <input type="text" class="form-control" placeholder="Name-Surname">
        </div>
        <div class="form-group" >
          <label class="pull-left">เลขประจำตัวประชาชน<small style="color:grey;"> *ไม่เปิดเผยต่อสาธารณะ</small></label>
          <input type="text" class="form-control" placeholder="เลขประจำตัวประชาชน" >
        </div>
        <div class="form-group" >
          <label class="pull-left">ภาค</label>
          <select name="ภาค" style="width: 100%;">
      <option selected disabled>ภาค</option>      
    <option value="เครื่องกล">เครื่องกล</option>
    <option value="saab">เคมี</option>
    <option value="fiat">โยธา</option>
    <option value="audi">คอม</option>
    <option value="audi">อุตสาหะการ</option>
    <option value="audi">ไฟฟ้า</option>
    <option value="audi">ชีวะการแพทย์</option>
  </select>
        </div>

        
        <div class="form-group" >
          <label class="pull-left">รหัสนักศึกษา</label>
          <input type="text" class="form-control" placeholder="รหัสนักศึกษา">
        </div>
        <div class="form-group">
          <label class="pull-left">Image Url </label>
          <input type="text" class="form-control" placeholder="Image Url" v-model="User.imageUrl">
        </div> 

        
</br>
        <hr style="border-color:white; border-style:solid;">
        </br>

        <h3>ข้อมูลติดต่อ</h3>
        
        <div class="form-group" >
          <label class="pull-left">อีเมลล์</label>
          <input type="text" class="form-control" placeholder="johnmedapple@gmail.com" >
        </div>
        <div class="form-group" >
          <label class="pull-left">เบอร์ติดต่อ</label>
          <input type="text" class="form-control" placeholder="086XXXXXXX">
        </div>
        <div class="form-group" >
          <label class="pull-left">เว็บไซต์</label>
          <input type="text" class="form-control" placeholder="http://gogole.com" >
        </div>
      
<br>

         <button  tag="button" type="button" class="btn btn-large btn-block btn-primary center-block" style="width : 50%;" >
       
        Submit
      </button>

<br>
      <router-link to="/home" tag="button" class="btn btn-large btn-block btn-success center-block" type="button" style="width : 50%;">
        <span>Back to User Page</span>
      </router-link>
      </div>
     
      <!-- <button class="btn btn-default" role="button" @click="updateToAPI">Button</button> -->
      </div>
    </form>
  </div>


</template>

<script>
import axios from 'axios'
export default {
  name: 'UpdateUser',
  data () {
    return {
      msg: 'Update User',
      User: {
        firstName: '',
        lastName: '',
        email: '',
        contactId: '',
        mobileNo: '',
        facebook: '',
        imageUrl: 'https://www.iphone-droid.net/wp-content/uploads/2013/09/Mamegoma-icon.png'
      }
    }
  },
  methods: {
    updateToAPI () {
      console.log("CLICK")
      console.log(this.$route.params.userId)
        let newUser = {
       firstName: this.User.firstName,
        lastName: this.User.lastName,
        email: this.User.email,
        contactId : this.User.contactId,
        mobileNo : this.User.mobileNo,
        facebook: this.User.facebook,
        imageUrl: this.User.imageUrl
      }
      console.log(newUser)
      axios.post('http://localhost:8082/users/' + this.$route.params.userId, newUser)
        .then((response) => {
          console.log(response)
          // window.location.href = "http://localhost:8080/#/home"
        })
        .catch((error) => {
          console.log(error)
        })

      // window.location.reload()
    }
  },
  mounted () {
    axios.get('http://localhost:8082/users/' + this.$route.params.userId)
      .then((response) => {
        // console.log(response.data)
        this.User = response.data
      })
      .catch((error) => {
        console.log(error)
      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>



h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
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

  #profile-img{
     border: 1px solid #ddd;
width: 30%;
height: 10%;
margin-top: 5%;
margin-bottom: 5%;

  }


</style>
