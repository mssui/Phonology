<template>
<div id="app">
   <!--
ESKI OLAN BASLAR    -->
<nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item">
        <router-link :to="{name: 'mainland'}">
             <strong>SDN</strong> 
          </router-link>
        <!-- <img src="../assets/logo.png" alt="Logo" width="200" height="70"> -->
      </a>
      <a role="button"
        class="navbar-burger burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
         @click="showNav = !showNav" :class="{ 'is-active': showNav }"
      >
        <span aria-hidden="true" />
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu" :class="{ 'is-active': showNav }">
      <div class="navbar-start">
        <a class="navbar-item">
          <router-link :to="{name: 'mainland'}">
            Anasayfa
          </router-link>

        </a>

        <a class="navbar-item">
           <router-link :to="{name: 'likedposts'}">
            En çok oylananlar
          </router-link>
          
        </a>

        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link">
             <router-link :to="{name: 'contact'}">
            İletişim
          </router-link>
          </a>

          <div class="navbar-dropdown">
            <a class="navbar-item">
               <router-link :to="{name: 'about'}">
            Nedir?
          </router-link>
            </a>
            <a class="navbar-item">
               <router-link :to="{name: 'contact'}">
            İletişim
          </router-link>
            </a>

          </div>
        </div>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div
            v-if="isloggedin"
            class="buttons"
          >
            <a class="button is-primary" @click="$router.push('profile/'+ isloggedin)">
              Dashboard
            </a>
            <a class="button is-warning" @click="userLogout">
              Logout
            </a>
            <p v-if="statusText">
              {{ statusText }}
            </p>
          </div>
          <div
            v-else
            class="buttons"
          >
            <a class="button is-primary" @click="signup">
              <strong>Sign up</strong>
            </a>
              <!-- SIGNUP MODAL Starts -->
            <div class="modal signup">
              <div class="modal-background has-background-lightgray" />
              <div class="modal-content fcolor">
                <!-- Signup Form Starts -->
                <div class="block loginform">
                  <signupComponent />

                </div>
              </div>
               <button class="modal-close is-large" aria-label="close" @click="closesignup"/>

             </div>
            <!-- LOGIN MODAL Starts -->
          <a class="button is-light is-pulled-right" @click="login">
              Log in
          </a>

            <div class="modal login">
              <div class="modal-background has-background-lightgray" />
              <div class="modal-content fcolor">
                <!-- Login Form Starts -->
                <div class="block loginform">
                  <loginComponent />
                  <!-- Login -->
                </div>
              </div>
              <button class="modal-close is-large" aria-label="close" @click="closelogin"/>  
            </div>        
        </div>
      </div>
    </div>
    </div>
  </nav>
  </div>
</template>

<script>
import axios from "axios";
import signupComponent from "./signupComponent.vue";
import loginComponent from "./loginComponent.vue";

export default {
  name: "Navbar",
  data() {
    return {
      showNav: false,
      isloggedin: localStorage.getItem("user"),
      statusText: null
    };
  },
  components: {
    signupComponent,
    loginComponent
  },
  methods: {
    signup() {
      document.querySelector(".signup").classList.add("is-active");
    },
    login() {
      document.querySelector(".login").classList.add("is-active");
    },
    closelogin() {
      document.querySelector(".login").classList.remove("is-active");
    },
    closesignup() {
      document.querySelector(".signup").classList.remove("is-active");
    },
    userLogout() {
      const self = this;
      //  if (localStorage.getItem('user') != null){
      axios
        .get("auth/logout")
        .then(response => {
          console.log(response.data.message);
          self.statusText = response.data.message; // Show logged out message to user
          localStorage.removeItem("user");
          self.isloggedin = null
          self.$router.push("/");
        })
        .catch(error => {
          console.log(error);
        });
      // }
    }
  }
};
</script>

<style>
.navbar-item-img{max-height: 70px;}
.navbar{height: 70px;}
.loginform {
  margin: 2em;
}
.fcolor {
  color: lightslategray;
  background-color: rgba(230, 227, 227, 0.856);
}
</style>
