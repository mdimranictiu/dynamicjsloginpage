let btn=document.getElementById('btn');
btn.addEventListener('click',function(){
    let display1=document.querySelector('.display');
    display1.style.display="block";
    display1.style.trasform="scale(1.5)";
    btn.style.display="none";
    
});
let close=document.getElementById('close');
close.addEventListener('click',function(){
    document.querySelector('.display').style.display="none";
    document.getElementById('btn').style.display="block";
});
let btnhover=document.querySelector('.btnd');
btnhover.addEventListener('mouseover',function(){
    let showbtn=document.getElementById('btn1');
    showbtn.style.opacity="1";
    showbtn.style.transition="0.5s";
});
// get info
var btnnw=document.querySelector('.btnd');
btnnw.addEventListener('click',function(e){
    e.preventDefault();
    let username=document.getElementById('username').value;
    let password=document.getElementById('password').value;
    if(username=='admin' && password=='123'){
        var txt=document.getElementById('h2');
        txt.style.color="#4BB543";
        txt.innerText="Congratulations !!! Have a nice day";
       
       location.href="https://www.facebook.com/imransitzone";
    }
    else{
        var txt=document.getElementById('h2');
        txt.style.color="red";
        txt.innerText="Opps !!! Pls Try again";
        alert("username: admin pass: 123");
        
    }
    
    document.getElementById('username').value="";
    document.getElementById('password').value="";
    
})

