<template>
    <div class="wrapper">

        <div class="backgroundA-container">
            <div class="bg-1"></div>
            <div class="bg-2"></div>

        </div>
        <div class="about-container">

            <div class="imageA-container">
                <img src="./images/banner-1.jpg" alt="">

            </div>

            <div class="text-container">
                <h1>About us</h1>
                <p>This is an ecommerce platform for the farmers and the customers where they can sell and buy directly.</p>
               <p>Aim:aim to help Goan farmers to connect directly to consumers, set their own crop prices and discourage them to go for distress sale of agricultural products. </p>
                <a href="">Read More</a>

            </div>

        </div>
    </div>
</template>
<style>
.wrapper{
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
}
.backgroundA-container{
    width: 100%;
    min-height: 100vh;
    display: flex; 
}
.bg-1{
    flex: 1;
    background-color: rgb(180, 243, 175);
}
.bg-2{
    flex: 1;
    background-color: rgb(163, 236, 240);
}
.about-container{
    width: 85%;
    min-height: 80vh;
    position: absolute;
    background-color: white;
    box-shadow: 24px 24px 30px #6d8dad;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 40px;
    border-radius: 5px;
}
.imageA-container{
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
}
.imageA-container img {
    width: 500px;
    height: 500px;
    margin: 20px;
    border-radius: 10px;
}
.text-container{
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    font-size: 22px;
}
.text-container h1{
    font-size: 70px;
    padding: 20px 0px;
}
.text-container a{
    text-decoration: none;
    padding: 12px;
    margin: 50px 0px;
    background-color: rebeccapurple;
    border: 2px solid transparent;
    color: white;
    border-radius: 5px;
    transition: .3s all ease;
}
.text-container a:hover{
    background-color: transparent;
    color: black;
    border: 2px solid rebeccapurple;
}
@media screen and (max-width: 1600px){
    .about-container{
        width: 90%;
    }
    .imageA-container img{
        width: 400px;
        height: 400px;
    }
    .text-container h1{
        font-size: 50px;
    }
}
@media screen and (max-width: 1100px){
    .about-container{
        flex-direction: column;
    }
    .imageA-container img{
        width: 300px;
        height: 300px;
    }
    .text-container {
        align-items: center;
    }
}
</style>