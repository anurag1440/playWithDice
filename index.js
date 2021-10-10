var randomNumber1=Math.floor(Math.random()*6)+1;//1-6
randomImage1= "dice"+randomNumber1+".png";//dice1-dice6
randomImageSource1="images/"+randomImage1;//images/dice1-images/dice6
var image1 = document.querySelectorAll("img")[0];//selecting first element of img tag
image1.setAttribute("src",randomImageSource1);//change attribute from src to randomImageSource


var randomNumber2=Math.floor(Math.random()*6)+1;
randomImage2= "dice"+randomNumber2+".png";//dice1-dice6
randomImageSource2="images/"+randomImage2;//images/dice1-images/dice6
var image2 = document.querySelectorAll("img")[1];//selecting first element of img tag
image2.setAttribute("src",randomImageSource2);//change attribute from src to randomImageSource

if(randomNumber1===randomNumber2){
    document.querySelector("h1").textContent="Draw !";
}
else if(randomNumber1>randomNumber2){
    document.querySelector("h1").textContent="🚩 Player 1 wins !";
}
else{
    document.querySelector("h1").textContent="Player 2 wins 🚩 !";
}


