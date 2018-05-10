/* eslint-disable */
<template>
  <div class="home">
    <div class="containerr">
			<div class="event col-xs-12 col-sm-12 col-md-12 col-lg-12">
				<div class="head">
					<div class="row">
						<div class="col-xs-2 col-sm-2 col-md-2 col-lg-2">
							<div class="label-title" ><h3>Event</h3></div>
						</div>
					</div>
				</div>

				<div class="lastest-event col-xs-12 col-sm-5 col-md-4 col-lg-4">
					<router-link to="eventdetail" :to="{ path: 'event/' + events[0]._id}">
						<div class="card event-card" >
							<div class="lastest-card-body">
								<div class="row">
									<div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
										<div class="mounth">{{events[0].monthStart}}</div>
										<div class="day">{{events[0].dayStart}}</div>
									</div>
									<div class="col-xs-9 col-sm-9 col-md-9 col-lg-9">
										<h4 class="card-title"><b>{{events[0].event}}</b></h4>
										<h5 class="card-title"><b>{{events[0].location}}</b></h5>
									</div>
								</div>
								<div class="event-detail">
									<p class="card-text">{{events[0].shortDescription}}</p>
								</div>
							</div>
							<span>
								<img class="lastest-card-img" v-bind:src= events[0].image alt="Card image cap">
							</span>
						</div>
					</router-link>
				</div>

				
				<div class="list-event col-xs-12 col-sm-7 col-md-8 col-lg-8">
					<div class="row">
						<div class="col-xs-12 col-sm-6 col-md-4 col-lg-4" v-for="event in filteredUsers" >
							<router-link to="eventdetail" :to="{ path: 'event/' + event._id}">
								<div class="card event-card">
									<span>
										<img class="card-img-top" v-bind:src= event.image alt="Card image cap">
									</span>
									<div class="card-body">
										<h5 class="card-title"><b>{{event.event}}</b></h5>
										<p class="card-text">{{event.dayStart}} {{events[0].monthStart}}</p>
									</div>
								</div>
							</router-link>
						</div>
					</div>
				</div> <!-- list-event -->
			</div>
			
			<div class="news col-xs-12 col-sm-12 col-md-12 col-lg-12">
				<div class="head">
					<div class="row">
						<div class="col-xs-2 col-sm-2 col-md-2 col-lg-2">
							<div class="label-title"><h3>News</h3></div>
						</div>								
					</div>
				</div>
				<div class="row">
					<div class="col-xs-12 col-sm-6 col-md-3 col-lg-3" v-for="i in 4" >
						<div class="card news-card">
							<span>
								<img class="news-card-img" src="https://pbs.twimg.com/media/DKnbzS3UMAAra8W.jpg:large" alt="Card image cap">
            	</span>
							<div class="card-body news-card-body">
								<h4 class="">Cute Chimmy</h4>
								<p class="card-text paragraph cap-cut">The cutest puppy in Mahidol University. He is food lovers.The cutest puppy in Mahidol University. He is food lovers.The cutest puppy in Mahidol University. He is food lovers.</p>
								<div class="right-item">
									<router-link :to="{ path: '/newsdetail'}" class="btn btn-outline-secondary read-more-btn" tag="button" type="button">
										<span>อ่านต่อ</span>
									</router-link>
								</div>
							</div>
						</div>
					</div>
				</div><!-- row -->
			</div>
		
    </div><!-- container -->
  </div>
</template>

<script>
import axios from 'axios'
import jsPDF from 'jsPDF'
import VueQrcode from '@xkeshi/vue-qrcode'

export default {
  name: 'home',
  data () {
 return {
				Users: [],
				events: [],
        uid: "",
        search: '',
      };
  },
  methods: {
   
		  toggleModal() {
        this.modalShown = !this.modalShown;
		},
		range : function (start, end) {
      return Array(end - start + 1).fill().map((_, idx) => start + idx)
	 },
	 genpdf(){

		 let doc = new jsPDF('p','pt','a4');
      doc.addHTML(document.body,function() {
          doc.save('html.pdf');
      });

	 }
	},
	computed: {
      filteredUsers: function() {
       
        return this.events.filter(user => {
          
          return (
                    user.event.match(this.search) 
                  );

        });
      }
		},
		components:{

			'qrcode' : VueQrcode

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
    if(localStorage.getItem('Token') == null){
      window.location.href = "http://localhost:8080/#/"
    }
    axios.get('http://localhost:8082/alumnia/' + localStorage.getItem('userID'))
      .then((response) => {
				console.log(response.data.nameTH);
				 this.Users = response.data;

				 		if(this.Users.nameTH == undefined){
					 window.location.href = "http://localhost:8080/#/updateuser/" + this.Users._id
					 location.reload();
				 }else{
 localStorage.setItem('nameTH', this.Users.nameTH);
				 localStorage.setItem('nameEng', this.Users.nameEng);
				 }
			})
			
      .catch((error) => {
        console.log(error)
			})

			axios
        .get("http://localhost:8082/event")
        .then(response => {
          
          this.events = response.data;
          console.log(this.events);
        })
        .catch(error => {
          console.log(error);
        });


			
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
	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
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
	border-width: 2px;
	border-radius: 50px;
}
.read-more-btn:hover{
	background-color: rgb(36, 32, 32);
	border-color: rgb(189, 188, 188);
	color: rgb(189, 188, 188);
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
a:hover {
    text-decoration: none;
}
.cap-cut{
	display: inline-block;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
	overflow: hidden;
}
</style>

