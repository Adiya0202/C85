canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

car1_width=120;
car1_height=70;
car1_x=10;
car1_y=10;
car1_img="https://i.postimg.cc/9rqYz9HM/car1.png";

car2_width=120;
car2_height=70;
car2_x=10;
car2_y=100;
car2_img="https://i.postimg.cc/tnnW1Kff/car2.png";

background_img="road.jpg";
back_x=750;
back_y=0;
back_width=70;
back_height=600;
back_img="finish line.jpg";

function add(){
    background_tag=new Image();
    background_tag.src=background_img;
    background_tag.onload=uploadbackground;
    
    car1_tag=new Image();
    car1_tag.src=car1_img;
    car1_tag.onload=uploadcar1;

    car2_tag=new Image();
    car2_tag.src=car2_img;
    car2_tag.onload=uploadcar2;

    back_tag=new Image();
    back_tag.src=back_img;
    back_tag.onload=uploadback;
}

function uploadback(){
    ctx.drawImage(back_tag,back_x,back_y,back_width,back_height);
}
function uploadcar1(){
    ctx.drawImage(car1_tag,car1_x,car1_y,car1_width,car1_height);
}

function uploadbackground(){
    ctx.drawImage(background_tag,0,0,canvas.width,canvas.height);
}

function uploadcar2(){
    ctx.drawImage(car2_tag,car2_x,car2_y,car2_width,car2_height);
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    keyPressed=e.keyCode;
    if(keyPressed=='38'){
        car1_up();
    }
    if(keyPressed=='40'){
        car1_down();
    }
    if(keyPressed=='37'){
        car1_left();
    }
    if(keyPressed=='39'){
        car1_right();
    }
    if(keyPressed=='87'){
        car2_up();
    }
    if(keyPressed=='83'){
        car2_down();
    }
    if(keyPressed=='65'){
        car2_left();
    }
    if(keyPressed=='68'){
        car2_right();
    }
    if(car1_x>=700){
        document.getElementById("status").innerHTML="car1 won!!!";
    }
    else if(car2_x>=700){
        document.getElementById("status").innerHTML="car2 won!!!";
    }
}
function car1_up(){
    if(car1_y>=0){
        car1_y=car1_y-10;
        uploadbackground();
        uploadcar1();
        uploadcar2();
        uploadback();
    }
}
function car2_up(){
    if(car2_y>=0){
        car2_y=car2_y-10;
        uploadbackground();
        uploadcar1();
        uploadcar2();
        uploadback();
    }
}
function car1_down(){
    if(car1_y<=500){
        car1_y=car1_y+10;
        uploadbackground();
        uploadcar1();
        uploadcar2();
        uploadback();
    }
}
function car2_down(){
    if(car2_y<=500){
        car2_y=car2_y+10;
        uploadbackground();
        uploadcar1();
        uploadcar2();
        uploadback();
    }
}
function car1_left(){
    if(car1_x>=0){
        car1_x=car1_x-10;
        uploadbackground();
        uploadcar1();
        uploadcar2();
        uploadback();
    }
}
function car2_left(){
    if(car2_x>=0){
        car2_x=car2_x-10;
        uploadbackground();
        uploadcar1();
        uploadcar2();
        uploadback();
    }
}
function car1_right(){
    if(car1_x<=700){
        car1_x=car1_x+10;
        uploadbackground();
        uploadcar1();
        uploadcar2();
        uploadback();
    }
}
function car2_right(){
    if(car2_x<=700){
        car2_x=car2_x+10;
        uploadbackground();
        uploadcar1();
        uploadcar2();
        uploadback();
    }
}