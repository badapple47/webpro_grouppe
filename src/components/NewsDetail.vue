<template>
  <div class="news-detail">
    <div class="container event-container" >


   

<div class="panel panel-default">
  <div class="panel-body">

    <div class="page-header">
  <h2>{{News.news}} <small ></small></h2> <p class="text-right ">จำนวนการเข้าชม : {{News.view}}</p>
</div>

                <span>
                     <img class="eventImage" v-bind:src= News.image alt="Card image cap" >
                    </span>
                    


              
                      <div class="detail-body" >
                     <p> {{News.description}}  </p> 
                    </div>

                 


     

									
  </div>
  <div class="panel-footer">
   <p> @{{News.location}} วันที่ {{News.day}} {{News.month}} {{News.year}} </p>
    </div>
</div>

<div class="panel panel-default">
  <div class="panel-body">


      <GmapMap
  :center="{lat:13.794650, lng:100.323465}"
  :zoom="13"
  map-type-id="terrain"
  style="width: 800px; height: 300px;"
>

</GmapMap>
      
  

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
      },
      News:[]
    }
  },
  methods: {
    addToAPI () {
      let newUser = {
        username: this.User.username,
        password: this.User.password,
     
      }
      console.log(newUser)
      axios.post('http://localhost:8082/authen', newUser)
        .then((response) => {
          console.log(response.data)
          if(response.data == "Okay!"){
            console.log("Okay let's go")
            localStorage.setItem('Token', 'asdasdasdasd');
           window.location.href = "http://localhost:8080/#/home"

          }
        })
        .catch((error) => {
          console.log(error)
        })
    }
  },
  mounted(){

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

      if(localStorage.getItem('Token') == null ){
        window.location.href = "http://localhost:8080/#/"
      }
      else if(localStorage.getItem('nameTH') == null) {
        window.location.href = "http://localhost:8080/#/updateuser/" + localStorage.getItem('userID')
      }
      
    this.userID = localStorage.getItem('userID')

      axios.get('http://localhost:8082/updateNewsView/' + this.$route.params.userId)
      .then((response) => {
// console.log(response.data)
        this.News = response.data
        console.log(response.data)

      })
      .catch((error) => {
        console.log(error)
      })

     axios.get('http://localhost:8082/showNews/' + this.$route.params.userId)
      .then((response) => {
// console.log(response.data)
        this.News = response.data
        console.log(this.News.location)

      })
      .catch((error) => {
        console.log(error)
      })

      


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
