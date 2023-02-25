<template>
  <div class="white">

    <div class="card">
      <div class="container-fliud">
        <div class="wrapper row">
          <div class="preview col-md-6">
            
            <div class="preview-pic tab-content">
              <div class="tab-pane active" id="pic-1"><img src="./images/product-3.png" /></div>
              <div class="tab-pane" id="pic-2"><img src="./images/product-3.png" /></div>
              <div class="tab-pane" id="pic-3"><img src="./images/product-3.png" /></div>
              <div class="tab-pane" id="pic-4"><img src="./images/product-3.png" /></div>
              <div class="tab-pane" id="pic-5"><img src="./images/product-3.png" /></div>
            </div>
            <ul class="preview-thumbnail nav nav-tabs">
              <li class="active"><a data-target="#pic-1" data-toggle="tab"><img src="./images/product-3.png" /></a></li>
              <li><a data-target="#pic-2" data-toggle="tab"><img src="./images/product-3.png" /></a></li>
              <li><a data-target="#pic-3" data-toggle="tab"><img src="./images/product-3.png" /></a></li>
              <li><a data-target="#pic-4" data-toggle="tab"><img src="./images/product-3.png" /></a></li>
              <li><a data-target="#pic-5" data-toggle="tab"><img src="./images/product-3.png" /></a></li>
            </ul>
            
          </div>
          <div class="details col-md-6">
          <h3 class="product-title">Oranges</h3>
          <div class="rating">
            <div class="stars">
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
            </div>
           <!-- <span class="review-no">41 reviews</span>-->
          </div>
          <p class="product-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate nihil, adipisci similique eos minima sint sequi repudiandae sed quis odit assumenda necessitatibus aperiam quas quos nulla accusamus laudantium autem aliquid. Sunt quas minima, error praesentium officiis magni cum, incidunt explicabo perspiciatis, quasi at alias illum vel dicta qui vitae officia. Suspendisse quos? Tempus cras iure temporibus? Eu laudantium cubilia sem sem! Repudiandae et! Massa senectus enim minim sociosqu delectus posuere.</p>
          <h4 class="price">price: <span>Rs.180</span>/KG</h4>
          
          <div class="col-6">
           <div class="h6">Quantity :</div>
            <input type="number" class="form-control text-center w-100" value="1">
        </div>

          
          <div class="action">
            <br>
            <button class="add-to-cart btn btn-default" type="button">add to cart</button>&nbsp;
            <button class="like btn btn-default" type="button"><span><fa icon="arrow-left" /> Contact Supplier</span></button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <footer class="footer-distributed">

    <div class="footer-left">

        <h3>Agro<span>Mart</span></h3>

        <p class="footer-links">
            <a href="#" class="link-1">Home</a>
            
         
        
           
        
            <a href="#">About</a>
            
          
            
            <a href="#">Contact</a>
        </p>

        <p class="footer-company-name">AgroMart © 2023</p>
    </div>

    <div class="footer-center">

        <div>
            <i class="fa fa-map-marker"></i>
            <p><span>margao</span> goa,India</p>
        </div>

        <div>
            <i class="fa fa-phone"></i>
            <p>+91 929934555</p>
        </div>

        <div>
            <i class="fa fa-envelope"></i>
            <p><a href="#">.com</a></p>
        </div>

    </div>

    <div class="footer-right">

        <p class="footer-company-about">
            <span>About AgroMart</span>
           Agromart, headquartered in Goa .
        </p>

        <div class="footer-icons">

            <a href="#"><i class="fa fa-facebook"><fa icon="fa-facebook" /></i></a>
            <a href="#"><i class="fa fa-twitter"></i></a>
            <a href="#"><i class="fa fa-linkedin"></i></a>
            <a href="#"><i class="fa fa-github"></i></a>

        </div>

    </div>

</footer>
</div>
</template>
<style>
.text-center{
  font-size: medium;
  width: 25%;
}
.h6{
font-size: medium;
}
.col-lg-12{
  font-size: medium;
}

img {
  max-width: 100%; }
  
  .preview {
    display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
      -ms-flex-direction: column;
          flex-direction: column; }
  @media screen and (max-width: 996px) {
    .preview {
      margin-bottom: 20px; } }

.preview-pic {
  -webkit-box-flex: 1;
  -webkit-flex-grow: 1;
      -ms-flex-positive: 1;
          flex-grow: 1; }

.preview-thumbnail.nav-tabs {
  border: none;
  margin-top: 15px; }
  .preview-thumbnail.nav-tabs li {
    width: 18%;
    margin-right: 2.5%; }
    .preview-thumbnail.nav-tabs li img {
      max-width: 100%;
      display: block; }
    .preview-thumbnail.nav-tabs li a {
      padding: 0;
      margin: 0; }
    .preview-thumbnail.nav-tabs li:last-of-type {
      margin-right: 0; }

.tab-content {
  overflow: hidden; }
  .tab-content img {
    width: 100%;
    -webkit-animation-name: opacity;
            animation-name: opacity;
    -webkit-animation-duration: .3s;
            animation-duration: .3s; }

.card {
  margin-top: 1px;
  background: #eee;
  padding: 3em;
  line-height: 1.5em;
  border-radius: 16px;
font-size: medium; }

@media screen and (min-width: 997px) {
  .wrapper {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex; } }

.details {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
      -ms-flex-direction: column;
          flex-direction: column; }

.colors {
  -webkit-box-flex: 1;
  -webkit-flex-grow: 1;
      -ms-flex-positive: 1;
          flex-grow: 1; }

.product-title, .price, .sizes, .colors {
  text-transform: UPPERCASE;
  font-weight: bold; }

.checked, .price span {
  color: #ff9f1a; }

.product-title, .rating, .product-description, .price, .vote, .sizes {
  margin-bottom: 15px; }

.product-title {
  margin-top: 0; }

.size {
  margin-right: 10px; }
  .size:first-of-type {
    margin-left: 40px; }

.color {
  display: inline-block;
  vertical-align: middle;
  margin-right: 10px;
  height: 2em;
  width: 2em;
  border-radius: 2px; }
  .color:first-of-type {
    margin-left: 20px; }

.add-to-cart, .like {
  background: #ff9f1a;
  padding: 1.2em 1.5em;
  border: none;
  text-transform: UPPERCASE;
  font-weight: bold;
  color: #fff;
  -webkit-transition: background .3s ease;
          transition: background .3s ease; }
  .add-to-cart:hover, .like:hover {
    background: #b36800;
    color: #fff; }

.not-available {
  text-align: center;
  line-height: 2em; }
  .not-available:before {
    font-family: fontawesome;
    content: "\f00d";
    color: #fff; }

.orange {
  background: #ff9f1a; }

.green {
  background: #85ad00; }

.blue {
  background: #0076ad; }

.tooltip-inner {
  padding: 1.3em; }

@-webkit-keyframes opacity {
  0% {
    opacity: 0;
    -webkit-transform: scale(3);
            transform: scale(3); }
  100% {
    opacity: 1;
    -webkit-transform: scale(1);
            transform: scale(1); } }

@keyframes opacity {
  0% {
    opacity: 0;
    -webkit-transform: scale(3);
            transform: scale(3); }
  100% {
    opacity: 1;
    -webkit-transform: scale(1);
            transform: scale(1); } }

</style>