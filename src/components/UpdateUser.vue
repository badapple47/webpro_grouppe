<template>
 
  <div class="container"  >
    <img class="text-left" id="bg" v-bind:src='"../../static/img/wallpaper.png"' height="600" width="1200" />
    <form>
      <div class="col-md-6 col-md-offset-3" >
      <div class="well" style="background-color:white;" >
        <h4>Update User</h4>
        <div class="row" >


      <!-- <img class="img-responsive center-block" id="profile-img" v-if="User.imageURL != ''" v-bind:src= User.imageURL /> -->
      <img class="img-responsive center-block" id="profile-img"  v-if="User.imageURL == undefined || User.imageURL == '' || User.imageURL == null "  v-bind:src= imageDefault />
      <img class="img-responsive center-block" id="profile-img"  v-else  v-bind:src= User.imageURL />
      
  


</div>


<div class="panel panel-warning" v-if="warning1==true">
  <div class="panel-heading">
    <h3 class="panel-title">สำคัญ</h3>
  </div>
  <div class="panel-body">
    โปรดกรอกฟอร์มที่มี * ให้ครบทุกช่องในกรณีใช้งานครั้งแรก
  </div>
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
          <input type="text" class="form-control" placeholder="Image Url" v-model="User.imageURL">
        </div> -->

        <div class="form-group" >
          <label class="pull-left">ชื่อ-นามสกุล *</label>
          <input type="text" class="form-control" placeholder="ชื่อ-นามสกุล" v-model="User.nameTH">
        </div>
        <div class="form-group" >
          <label class="pull-left">Name-Surname *</label>
          <input type="text" class="form-control" placeholder="Name-Surname" v-model="User.nameEng">
        </div>
         <div class="form-group" >
          <label class="pull-left">วันเกิด *</label>
          
        <input class="form-control" id="date" name="student_dob" placeholder="DD/MM/YYYY" type="text" v-model="User.birthDate">
        </div>
        <div class="form-group" >
          <label class="pull-left">เลขประจำตัวประชาชน *<small style="color:grey;"> *ไม่เปิดเผยต่อสาธารณะ</small></label>
          <input type="text" class="form-control" placeholder="เลขประจำตัวประชาชน" v-model="User.nationalID">
        </div>
        <div class="form-group" >
          <label class="pull-left">ภาค *</label>
          <select name="ภาค" style="width: 100%;" v-model="User.department">
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

        
        <div class="form-group" >
          <label class="pull-left">รหัสนักศึกษา *</label>
          <input type="text" class="form-control" placeholder="รหัสนักศึกษา" v-model="User.studentID">
        </div>
        <div class="form-group">
          <label class="pull-left">Image Url </label>
          <input type="text" class="form-control" placeholder="Image Url" v-model="User.imageURL">
        </div> 

        

        <hr style="border-color:white; border-style:solid;">
        </br>

        <h3>ข้อมูลติดต่อ</h3>
        
        <div class="form-group" >
          <label class="pull-left">อีเมลล์ *</label>
          <input type="text" class="form-control" placeholder="johnmedapple@gmail.com" v-model="User.email">
        </div>
        <div class="form-group" >
          <label class="pull-left">เบอร์ติดต่อ *</label>
          <input type="text" class="form-control" placeholder="086XXXXXXX" v-model="User.mobileNo">
        </div>
        <div class="form-group" >
          <label class="pull-left">เว็บไซต์</label>
          <input type="text" class="form-control" placeholder="http://applebubee.com" v-model="User.website">
        </div>
        <div class="form-group" >
          <label class="pull-left">ที่ทำงาน</label>
          <input type="text" class="form-control" placeholder="CDG Thailand" v-model="User.work">
        </div>
        

      
        <hr style="border-color:white; border-style:solid;">
        </br>

        <h3>ทักษะ</h3>
        
        <div class="form-group" >
          <label class="pull-left">ทักษะ<small style="color:grey;"> เว้นวรรคด้วย ,</small></label>
          <input type="text" class="form-control" placeholder="HTML,Photoshop" v-model="User.skill">
        </div>
        <div class="form-group" >
          <label class="pull-left">ภาษาที่สามารถสื่อสารได้<small style="color:grey;"> เว้นวรรคด้วย ,</small></label>
          <input type="text" class="form-control" placeholder="อังกฤษ,ไทย" v-model="User.language">
        </div>
  


        <div class="panel panel-danger" v-if="warning2==true">
          <div class="panel-heading">
            <h3 class="panel-title">ผิดพลาด</h3>
          </div>
          <div class="panel-body">
            <li v-for="error in errors"> - {{ error }} <br></li>

          </div>
        </div>
      
          <br>

         <button  tag="button" type="button" class="btn btn-large btn-block btn-success center-block" style="width : 50%;" @click="updateToAPI">
       
        Submit
      </button>

<br>
      <router-link v-if="warning1==true" to="/home" tag="button" class="btn btn-large btn-block btn-primary center-block" type="button" style="width : 50%;">
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
      errors: [],
      warning1 : false ,
      warning2 : false ,
      msg: 'Update User',
      User: {
        nameTH: '',
        nameEng: '',
        nationalID: '',
        department : '',
        studentID: '',
        imageURL: '',
        email: '',
        mobileNo: '',
        website: '',
        language: '',
        skill: '',
        work:'',
        birthDate:'',
        

      },
      imageDefault: 'https://www.iphone-droid.net/wp-content/uploads/2013/09/Mamegoma-icon.png',
    }
  },
  methods: {
    validateForm(){

        
       if(this.User.nameTH == ""   || this.User.nameTH == undefined ){
        this.warning2 = true ;
        this.errors.push("กรุณาตรวจสอบชื่อภาษาไทย");
      }

        if( this.User.nameEng == "" ||  this.User.nameEng == undefined ) {
        this.warning2 = true ;
        this.errors.push("กรุณาตรวจสอบชื่อภาษาอังกฤษ");
      }

      if( this.User.department == "" ||  this.User.department == undefined ) {
        this.warning2 = true ;
        this.errors.push("กรุณาตรวจสอบภาค");
      }

       if(this.validateEmail(this.User.email) == false ){
        this.warning2 = true ;
        console.log("email wrong format")
        this.errors.push("กรุณาตรวจสอบอีเมลล์");

      } 
       if(this.User.nationalID.length != 13){
        this.warning2 = true ;
        this.errors.push("กรุณาตรวจสอบเลข 13 หลัก");

      } 

      if(this.User.studentID.length != 7){
        this.warning2 = true ;
        this.errors.push("กรุณาตรวจสอบเลขรหัสนักศึกษา");

      } 

      if(this.User.mobileNo.length != 10){
        this.warning2 = true ;
        this.errors.push("กรุณาตรวจสอบเบอร์โทรศัพท์");

      } 

      if(this.validateDate(this.User.birthDate == false)){
        this.warning2 = true ;
        this.errors.push("กรุณาเช็คฟอร์แมทของวันเกิด");

      } 
      
    },
    validateDate(date){

  var pattern =/^([0-9]{2})\/([0-9]{2})\/([0-9]{4})$/;
    pattern.test(date)
    console.log('kkk')


    },

validateEmail(email){

console.log("validateEmail ja")
   var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
    
  
},

    updateToAPI () {

  
this.errors = []
        this.validateForm()

console.log(this.errors.length)
        if(this.errors.length == 0){
          this.warning2 = false;

        
    

     


             console.log("CLICK")
      console.log(this.$route.params.userId)
        let newUser = {
        nameTH: this.User.nameTH,
        nameEng: this.User.nameEng,
        nationalID: this.User.nationalID,
        department : this.User.department,
        studentID : this.User.studentID,
        imageURL: this.User.imageURL,
        email: this.User.email,
        mobileNo: this.User.mobileNo,
        website: this.User.website,
         language: this.User.language,
        skill: this.User.skill,
        work: this.User.work,
        birthDate: this.User.birthDate,
      }
      console.log(newUser)
      axios.post('http://localhost:8082/updatealumnia/' + this.$route.params.userId, newUser)
        .then((response) => {
          console.log(response)
           window.location.href = "http://localhost:8080/#/home"

        })
        .catch((error) => {
          console.log(error)
        })

}

      


 
    }
  },
  mounted () {
    axios.get('http://localhost:8082/alumnia/' + this.$route.params.userId)
      .then((response) => {
console.log(response.data)
        this.User = response.data

      })
      .catch((error) => {
        console.log(error)
      })
      if( localStorage.getItem('nameEng') == undefined || localStorage.getItem('nameEng') == null){

        this.warning1 = true;

      }
      
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
