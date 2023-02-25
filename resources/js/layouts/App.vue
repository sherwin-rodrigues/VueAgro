


<template>
    <!-- <div>

        <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
            <router-link class="navbar-brand" :to="{name :'Home' }">Home </router-link>
            <ul class="navbar-nav">
                <li class="nav-item">
                    <router-link class="text-white" :to="{name : 'Login' }" >Login</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="text-white ml-2" :to="{name : 'Register' }" > Register</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="text-white ml-2" :to="{name : 'Contact' }" > Contact</router-link>
                </li>
                
            </ul>
        </nav>
    </div> -->
    <v-app>
        <v-main>
          <navigationVue/>
        </v-main>
      </v-app>
    <header class="header">
        <div class="icons">

            <div id="menu-btn" class="fa fa-menu" ><fa icon="bars" id="menu-btn"/></div>
        </div>
        &nbsp; &nbsp;&nbsp;&nbsp;
        <router-link class="logo" :to="{name :'Home' }">AgroMart </router-link>
        <div class="cent">

            <nav class="navbar">
                <div id="close-navbar" class="fas fa-times"></div>
                <!-- 
                <router-link class="navbar-brand" :to="{name : 'Register' }" > Register</router-link>

                <router-link class="navbar-brand" :to="{name :'navi' }">navigation </router-link>
                    <router-link class="navbar-brand" :to="{name : 'Login' }" >Login</router-link>
                --> <div class="navbar-start">


                    <router-link class="navbar-brand" :to="{name :'Home' }">Home </router-link>
                    
                    <router-link class="navbar-brand" :to="{name : 'About' }" >About Us</router-link>    
                    <router-link class="navbar-brand" :to="{name : 'Contact' }" > Contact</router-link>
                    <router-link class="navbar-brand" :to="{name : 'productDetail' }" > pd</router-link>
                </div>
            </nav>
        </div>
        <div class="icons">
            <router-link class="navbar-brand" :to="{name : 'Cart' }" >

                <div class="">
                    <fa icon="shopping-cart" />
                    
                </div>
            </router-link>
        </div>
        &nbsp;
  
     <div class="icons">
        <router-link class="navbar-brand" :to="{name : 'Login' }" >

            <div id="account-btn"><fa icon="user" /></div>
        </router-link>
        
     </div>
  
  </header>

       <router-view></router-view>

</template>




