/* eslint-disable */
<template>
  <div class="home">
    <div class="containerr">
			<div class="event">
				<div class="head">
					<div class="row">
						<div class="col-xs-2 col-sm-2 col-md-2 col-lg-2">
							<div class="label-title" ><h3>Event</h3></div>
						</div>
					</div>
				</div>
				<router-link to="eventdetail">
					<div class="lastest-event col-xs-12 col-sm-5 col-md-4 col-lg-4">
						<div class="card event-card" >
							<div class="lastest-card-body">
								<div class="row">
									<div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
										<div class="mounth">ส.ค.</div>
										<div class="day">26</div>
									</div>
									<div class="col-xs-9 col-sm-9 col-md-9 col-lg-9">
										<h4 class="card-title"><b>Bike for มันส์</b></h4>
									</div>
								</div>
								<div class="event-detail">
									<p class="card-text">ปั่นจักรยานสามขารอบมหิดลสิทธาคาร</p>
								</div>
							</div>
							<span>
								<img class="lastest-card-img" src="https://pbs.twimg.com/media/DKnclXMVoAA_lcf.jpg" alt="Card image cap">
							</span>
						</div>
					</div>
				</router-link>
				<router-link to="eventdetail">
					<div class="list-event col-xs-12 col-sm-7 col-md-8 col-lg-8">
						<div class="row">
							<div class="col-xs-12 col-sm-6 col-md-4 col-lg-4" v-for="i in 6" >
								<div class="card event-card">
									<span>
										<img class="card-img-top" src="https://pbs.twimg.com/media/DKnclXMVoAA_lcf.jpg" alt="Card image cap">
									</span>
									<div class="card-body">
										<h5 class="card-title"><b>Event1</b></h5>
										<p class="card-text">26 ส.ค.</p>
									</div>
								</div>
							</div>
						</div>
					</div> <!-- list-event -->
				</router-link>
			</div>
			<div class="news">
				<div class="head">
					<div class="row">
						<div class="col-xs-2 col-sm-2 col-md-2 col-lg-2">
							<div class="label-title"><h3>News</h3></div>
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col-xs-12 col-sm-6 col-md-4 col-lg-3" v-for="i in 6" >
						<div class="card news-card">
							<span>
								<img class="news-card-img" src="https://pbs.twimg.com/media/DKnbzS3UMAAra8W.jpg:large" alt="Card image cap">
            	</span>
							<div class="card-body news-card-body">
								<h4 class="">Cute Chimmy</h4>
								<p class="card-text paragraph">The cutest puppy in Mahidol University. He is food lovers.</p>
								<div class="right-item">
									<router-link :to="{ path: '/newsdetail'}" class="btn btn-outline-secondary read-more-btn" tag="button" type="button">
										<span>อ่านต่อ</span>
									</router-link>
									<!-- <button type="button" href="/newsdetail" class="btn btn-outline-secondary read-more-btn">อ่านต่อ</button> -->
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div> <!-- container -->
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
	 
	 console.log("Mounted")
    // if(localStorage.getItem('Token') == null){
    //   window.location.href = "http://localhost:8080/#/"
    // }
    axios.get('http://localhost:8082/alumnia')
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

<style >
.containerr{
	margin-left: 20px;
  margin-right: 20px;
}
.row{
  margin-left: 0px;
  margin-right: 0px;
}
.card{
  border: 1px solid rgba(0,0,0,.125);
  border-radius: 1rem;
  width: 100%;
  margin-top: 15px;
  margin-bottom: 15px;
}
.card-img-top{
  width: 100%;
  height: 90px;
  object-fit: cover;
  border-radius: calc(1rem - 1px);
}
.lastest-card-img{
	width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: calc(1rem - 1px);
}
.news-card-img{
	width: 100%;
  height: 280px;
  object-fit: cover;
  border-radius: calc(1rem - 1px);
}
.card-body{
  padding: 0px 10px 10px 10px;
}
.news-card-body{
	padding: 10px 0px 0px 0px;
}
.news-card{
	padding: 20px;
	text-align: left;
}
.event-card{
	border: 0px;
	color: black;
}
.lastest-card-body{
  padding: 0px 10px 10px 10px;
}
.card-title{
	text-align: center;
}
.lastest-event{
	/* padding: 0px 30px 0px 30px; */
	
}
.list-event{
	padding: 0px;
}
.news{
	width: auto;
}
.event{
	width: auto;
	height: 500px;
}
.head{
	margin-bottom: 20px;
}
.label-title{
	border-bottom: 3px solid gray;
	width: 90px;
}
.btn-outline-secondary {
    color: #6c757d;
    background-color: transparent;
    background-image: none;
    border-color: #6c757d;
}
.read-more-btn{
	border-radius: 50px;
}
.right-item{
	text-align: right;
}
.mounth{
	font-size: 18pt;
	color: rgb(219, 6, 6);
}
.day{
	font-size: 27pt;
}
.event-detail{
	margin-top: 10px;
	font-size: 13pt;
}
.paragraph{
  text-indent: 25pt;
	text-align: justify;
}
</style>

