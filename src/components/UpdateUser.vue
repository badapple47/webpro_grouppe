<template>
  <div class="container">
    <form>
      <div class="well">
        <h4>Update User</h4>
        <div class="form-group" >
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
        </div>
      </div>
      <button  tag="button" type="submit" class="btn btn-large btn-block btn-primary full-width" @click="updateToAPI">
        <!-- <span @click="updateToAPI">Submit</span> -->
        Submit
      </button>
      <!-- <router-link to="/home" tag="button" type="submit" class="btn btn-large btn-block btn-primary full-width">
        <span @click="updateToAPI">Submit</span>
      </router-link> -->
      <router-link to="/home" tag="button" class="btn btn-large btn-block btn-success full-width" type="button">
        <span>Back to User Page</span>
      </router-link>
      <!-- <button class="btn btn-default" role="button" @click="updateToAPI">Button</button> -->
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
        imageUrl: ''
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
</style>
