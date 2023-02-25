<template>

      <body>
        <br>

        <section class="container">
          <header>SignUp</header>
          
          
          <form action="#" class="form">
            <div class="column">

              <div class="input-box">
                <label>First Name</label>
                <input type="text" name="fname" placeholder="Enter first name" required />
              </div>

              <div class="input-box">
                <label>Last Name</label>
                <input type="text" name="lname" placeholder="Enter Last name" required />
              </div>
            </div>

            <div class="column">
              <div class="input-box">
                <label>Mobile Number</label>
                <input type="text" placeholder="Enter 10 digit number" required />
              </div>
            </div>
            <div class="gender-box">
              <h3>Gender</h3>
              <div class="gender-option">
                <div class="gender">
                  <input type="radio" id="check-male" name="gender" checked />
                  <label for="check-male">Male</label>
                </div>
                <div class="gender">
                  <input type="radio" id="check-female" name="gender" />
                  <label for="check-female">Female</label>
                </div>

              </div>
            </div>
            <div class="input-box address">
              <label>Address</label>
              <input type="text" name="address" placeholder="Enter street address" required />
              <div class="input-box">
                <label>Landmark</label>
              <input type="text" name="address" placeholder="Enter Landmark" required />
              </div>
              <div class="column">
                <div class="input-box">
                  <label class="form-label">State</label>
                <select class="select-box"  required>
                  <option selected disabled value="">Choose...</option>
                  <option>Goa</option>

                </select>
              </div>

                <div class="input-box">

                  <label class="form-label">District</label>
                  <select class="select-box" id="countrySelect" onchange="makeSubmenu(this.value)" required>
                    <option selected disabled value="">Choose...</option>
                    <option>North</option>
                    <option>South</option>

                  </select>
                </div>
                <div class="input-box">

                  <label class="form-label">Taluka</label>
                  <select class="select-box" id="citySelect" required>
                    <option selected disabled value="">Choose...</option>
                    <option></option>

                  </select>
                </div>

                <div class="input-box">
                    <label>Pin Code</label>
                    <input type="text" placeholder="Enter postal code" required />
                </div>
              </div>
              <div class="input-box">
                <span class="details">Password</span>
                <input type="text" name="password" placeholder="Enter your password" required>
              </div>
              <div class="input-box">
                <span class="details">Confirm Password</span>
                <input type="text" name="confirmPassword" placeholder="Confirm your password" required>
              </div>
            </div>
            <div class="button" onclick="displaySelected()">
                <input type="submit" value="Register">
              </div>
              <div class="input-box">

                <p>already signed up?  <router-link :to="{name : 'Login' }" >Login</router-link></p>
              </div>
          </form>
        </section>
      </body>

</template>
<style>
@import '../assets/style.css';

.sidebar{
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width:260px;
  background: #11101d;
}
.logo-details{
  height: 60px;
  width: 100%;
  display: flex;
  align-items: center;

}
.logo-details i{
  font-size: 30px;
  color: white;
  height: 50px;
  min-height: 78px;
  text-align: center;
  line-height: 50px;
}
.bx {
  font-family: boxicons !important;
  font-weight: 400;
  font-style: normal;
  font-variant: normal;
  line-height: 1;
  text-rendering: auto;
  display: contents;
  text-transform: none;
}

.logo_name{
  color: white;
  font-family: 'Edu TAS Beginner', cursive;
  font-size: 38px;
  font-weight: 800;
  padding: 0px 36px;
}
.nav-links{
 
  height: 100%;
  padding-top: 30px;
}
.nav-links li{
  
  position: relative;
  list-style: none;
  transition: all 0.1s ease;
  -webkit-transition: all 0.1s ease;
  -moz-transition: all 0.1s ease;
  -ms-transition: all 0.1s ease;
  -o-transition: all 0.1s ease;
}
.nav-links li:hover{
  background-color: #1d1b31;
}
.icon-link{
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.nav-links li i{
  height: 50px;
  min-height: 78px;
  text-align: center;
  line-height: 50px;
  color: #fff;
  font-size: 20px;
}
.nav-links li a{
  display: inline-block;
  align-items: center;
  text-decoration: none;
}

.link_name{
  font-size: 18px;
  font-weight: 400;
  color: #fff;
}
.sub-menu{
  padding: 6px 6px 14px 70px;
  margin-top: -10px;
  background-color: #1d1b31;
  /*display: none;*/
}
.sub-menu a{
  color: #fff;
  font-size: 15px;
  padding: 5px 0;
  white-space: nowrap;
  opacity: 0.6;
  transition: all 0.2s ease;
}
.sub-menu a:hover{
  opacity: 1;
}
.sidebar.close .nav-links li .sub-menu{
  position: absolute;
  left: 100%;
  top: -10px;
  margin-top: 0%;
  padding: 10px 20px;
  border-radius: 0 6px 6px 0;
  transition: all 0.4s ease;
  opacity: 0;
  pointer-events: none;

}
.sidebar.close .nav-links li:hover .sub-menu{
  top: 0;
  opacity: 1;
  pointer-events: auto;
}
.sidebar .nav-links li .sub-menu .link_name{
  display: none;
}
.sidebar.close .nav-links li .sub-menu .link_name{
  font-size: 19px;
  opacity: 10;
  display: block;
}
.sidebar.close .nav-links li .sub-menu .blank{
  opacity: 1;
  pointer-events: auto;
  padding: 3px 20px 6px 16px;
}
.sidebar.close .nav-links li:hover .sub-menu .blank{
  top: 50%;
  transform: translateY(-50%);
}
</style>

<script>
   
   
   

</script>