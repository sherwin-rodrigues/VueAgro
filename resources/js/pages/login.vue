<template>
    <head>
        <link rel="stylesheet" href="../assets/login.css">
    </head>
    <br>
    <br>
    <br>
    <div class="container">
        <div class="login form">
          <header>Login</header>
          <form action="#">
            <div class="input-box">
                <i class="uil uil-user"></i>
                <input type="text" placeholder="Username" required>
              </div>
              <div class="input-box">
                <i class="fas fa-lock"></i>
                <input type="password" placeholder="Password" required>
              </div>
              <br><br>


                <div class="form-check">
                  <input type="checkbox" class="form-check-input" id="dropdownCheck2">
                  <label class="form-check-label" for="dropdownCheck2">
                    Remember me
                  </label>
                </div>
                <div class="input-box">

                  <a href="#">Forgot password?</a>
                </div>

            <div class="button">
                <input type="submit" value="Login">
              </div>
          </form>
          <div class="signup">
            <span class="signup">Don't have an account?
              <router-link :to="{name : 'Register' }" >SignUp</router-link>
            </span>
          </div>
        </div>
      </div>

</template>

