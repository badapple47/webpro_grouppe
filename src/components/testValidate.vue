<template>
  <div class="validate">

      <form id="app" @submit="checkForm" >
  
  <p v-if="errors.length">
    <b>Please correct the following error(s):</b>
    <ul>
      <li v-for="error in errors">{{ error }}</li>
    </ul>
  </p>
  
  <p>
    <label for="name">Name</label>
    <input type="text" name="name" id="name" v-model="name">
  </p>

  <p>
    <label for="age">Age</label>
    <input type="number" name="age" id="age" v-model="age" min="0">
  </p>

  <p>
    <label for="movie">Favorite Movie</label>
    <select name="movie" id="movie" v-model="movie">
      <option>Star Wars</option>
      <option>Vanilla Sky</option>
      <option>Atomic Blonde</option>
    </select>
  </p>

  <p>
    <input type="submit" value="Submit" @click="check">  
  </p>

</form>

  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'home',
  data () {
    return {
   
    errors:[],
    name:null,
    age:null,
    movie:null
    }
  },
  methods:{
    checkForm:function(e) {
      if(this.name && this.age) return true;
      this.errors = [];
      if(!this.name) this.errors.push("Name required.");
      if(!this.age) this.errors.push("Age required.");
      e.preventDefault();
    },
    check(){
        console.log("check")
        if(this.errors == ''){
            console.log("null")

        }else{
            console.log("other")
        }
    }
 
  },
  mounted(){

    





  }
}
</script>

<style>
.news-container{
  width: 90%;
}
.news-detail{
  text-align: left;
}
.breadcrumb{
  text-align: left;
}
.news-detail-row{
  margin: 0px;
}
.news-img{
  width: 100%;
  height: 400px;
  padding: 20px;
  object-fit: scale-down;
}
.detail-body{
  padding: 20px;
}
.paragraph{
  text-indent: 40pt;
}
.list-news-card-img{
	width: 100%;
  height: 280px;
  object-fit: cover;
}
.card{
  border-style: none;
}
.card-body{
  padding: 10px;
}
.card-text-cap{
  text-overflow: ellipsis;
}
.list-news-card{
  width: 80%;
	text-align: left;
  color: black;
  margin: 50px 0px 20px 0px;
  border-radius: 0px;
}
.no-padding{
  padding: 0px;
}
.toppic{
  margin-top: 10px;
  font-size: 18px;
  font-weight: 600;
}
a:hover {
    text-decoration: none;
}
.eventImage{
   width: 100%;
  height: 200px;
  object-fit: cover;

}
.event-container{
  /* margin: 0px 150px 0px 150px; */
  width: 60%;
}
</style>
