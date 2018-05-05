/* eslint-disable */
<template>
  <div class="welcome">




    <img class="text-left" id="bg" v-bind:src='"../../static/img/wallpaper.png"' height="600" width="1200" />
    <img class="text-left" id="welcome-logo" v-bind:src='"../../static/img/grouppe2.png"' height="600" width="1200" />

       <h1 id="welcome-brand"> Grouppe </h1>

       <h4 id="welcome-quote"> Grouppe คือสารานุกรมชาว EGMU ที่คุณจะไม่พลาดทุกการติดต่อ กับเพื่อนๆ พี่ๆ น้องๆ ชาววิศวะมหิดล </h4>

    <button id="login-modal"class="btn btn-default" data-toggle="modal" data-target=".login-modal" @click="DELETE(users._id)">login</button>
    <button id="register-modal"class="btn btn-primary" data-toggle="modal" data-target=".register-modal" @click="DELETE(users._id)">register</button>

       <div class="modal fade login-modal" id="myModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title" id="exampleModalLabel">Login</h1>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
          <div class="container-fluid">
               <form>
    <div class="form-group">
      <label for="usr">Username</label>
      <input type="text" class="form-control" id="usr" v-model="User.username">
    </div>
    <div class="form-group">
      <label for="pwd">Password</label>
      <input type="password" class="form-control" id="pwd" v-model="User.password">
    </div>

    <router-link to="/home" class="btn btn-primary" tag="button" type="button">
              <span @click="delUser(uid)">login</span>
            </router-link>

  </form>
          </div>
            
            
            
            </div>

             
            
         
        </div>
      </div>
    </div>

    <div class="modal fade register-modal" id="myModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title" id="exampleModalLabel">Register</h1>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
                        <form>
    <div class="form-group">
      <label for="usr">Username</label>
      <input type="text" class="form-control" id="usr" v-model="User.username">
    </div>
    <div class="form-group">
      <label for="pwd">Password</label>
      <input type="password" class="form-control" id="pwd" v-model="User.password">
    </div>
    <div class="form-group">
      <label for="pwd">Confirm Password</label>
      <input type="password" class="form-control" id="conpwd" v-model="User.confirmPassword">
    </div>

    <router-link to="/home" class="btn btn-primary" tag="button" type="button">
              <span @click="delUser(uid)">Register</span>
            </router-link>

  </form>
  
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
       User: {
        username: '',
        password: '',
      }
    }
  },
  methods: {

  }
}

</script>

<style >


  #welcome-logo {
      /* height: 300px;
    width: 300px; */

    
  position: fixed;
  top: 38%;
  left: 50%;
  /* bring your own prefixes */
  transform: translate(-50%, -50%);

  height: 30%;
  width: 18%;
  }
  #welcome-brand {
      /* height: 300px;
    width: 300px; */

    
  position: fixed;
  top: 50%;
  left: 50%;
  /* bring your own prefixes */
  transform: translate(-50%, -50%);
  color: white;


  }

    #welcome-quote {
      /* height: 300px;
    width: 300px; */

    
  position: fixed;
  top: 61%;
  left: 50%;
  /* bring your own prefixes */
  transform: translate(-50%, -50%);
  color: white;


  }

  
  #login-modal {
      /* height: 300px;
    width: 300px; */

    
  position: fixed;
  top: 73%;
  left: 50%;
  width: 150px;
  height: 35px;
  /* bring your own prefixes */
  transform: translate(-50%, -50%);
  /* color: white; */

  }

    #register-modal {
      /* height: 300px;
    width: 300px; */

    
  position: fixed;
  top: 80%;
  left: 50%;
  width: 150px;
  height: 35px;
  /* bring your own prefixes */
  transform: translate(-50%, -50%);
  /* color: white; */


  }

  

  #bg {
 position: fixed; 
  top: 0; 
  left: 0; 

  /* Preserve aspet ratio */
  min-width: 100%;
  min-height: 100%;
  /* filter: contrast(50%); */
z-index:-5;
  /* filter: grayscale(20%); */


}


</style>

