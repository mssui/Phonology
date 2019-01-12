
<template>
<div>
  <navbar />
    <section class="hero is-primary is-small is-bold has-text-centered">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            Dashboard for {{user}}
          </h1>
          <h2 class="subtitle">
            {{ bio }}
          </h2>
          <figure class="image is-128x128 has-image-centered" >
          <img v-bind:src="userpic">
          </figure>

        </div>
      </div>
    </section>
 <div class="columns">
  <div class="column is-four-fifths">
    <h2 class="subtitle s-top">
            {{user}} kullanıcısının okumaları:
          </h2>
    <div id="contain-loop">
      <div class="column is-full is-centered"> 
          <div v-for="(post,index) in posts" :key="index"  class="box">
            <article class="media">
              <div class="media-left">
              <figure class="image is-64x64"><img src="https://img.icons8.com/doodle/1600/user-female-red-hair.png" alt="Image">
          </figure>
          </div>
          <div class="media-content"> 
            <div class="content">
            <div class="subtitle is-4 s-lft metincont">
              <a class="read">{{ post.title }} </a><span> diye yazılır,</span><span class="write"> {{ post.text }} diye okunur.</span>
              </div></div>
                <nav class="level is-mobile">
                  <div class="level-left s-lft">
                  <a class="level-item" aria-label="reply">
                    <span class="icon is-small"><i class="fas fa-arrow-alt-circle-up" aria-hidden="true"></i></span>
                  </a>
                  <a class="level-item " aria-label="retweet">
                    <span class="icon is-small"><i class="fas fa-arrow-alt-circle-down" aria-hidden="true"></i></span>
                  </a>
                  <a class="level-item" aria-label="like">
                  <span class="icon is-small"> <i class="fas fa-heart" aria-hidden="true"></i></span>
                  </a>
                  </div>
             </nav></div>
          </article>
          </div>
      </div>
    </div>
  </div>
  <div class="column">Auto</div>
  <div class="column">Auto</div>
</div>

  
    
</div>
</template>

<script>
import navbar from "@/components/navbar";
import axios from "axios";
export default {
  name: "profile",
  data() {
    return {
      user: null,
      errors: [],
      posts: [],
      titles: [],
      comments: [],
      mains: [],
      userpic: null,
      gender: null,
      bio: null,
      message: "Başka bir yüz seç",
      active:false
    };
  },
  methods: {
    mouseOver: function(){
           document.querySelector(".fa-edit").classList.add("is-active");
        },
        mouseOut:function(){
          this.active=false;
        },
        
  },
  components: {
    navbar
  },
  mounted() {
    if (localStorage.getItem("user") != null) {
      this.user = localStorage.getItem("user");
      axios.get(`http://localhost:3030/infos/${this.user}`).then(response => {
        this.bio = response.data[0].bio;
        this.gender = response.data[0].gender;
        this.userpic = response.data[0].image;
      });
    } else {
      this.$router.push("/auth/login");
    }
    axios
      .get(`http://localhost:3030/posts/${this.user}`)
      .then(response => {
        this.mains = JSON.stringify(response.data);
        this.mains = JSON.parse(this.mains);

        for (let i = 0; i < this.mains.length; i++) {
          const currentData = this.mains[i];
          this.posts.push({
            title: currentData.title,
            text: currentData.text
          });
        }
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>

<style >
.s-lft {
  margin-left: 15px;
}
.s-top {
  margin-top: 5px;
}
.has-image-centered {
  margin-left: auto;
  margin-right: auto;
}
.userpic {
  position: relative;
  width: 200px;
  height: 200px;
  padding: 10px;
  margin: 100px;
  background-color: white;
}

.editicon {
  padding: 10px;
  width: 20px;
  height: 20px;
  position: absolute;
  right: -20px;
  top: -20px;
}
</style>
