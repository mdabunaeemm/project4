const datas=[
    {
        title:"The Bag",
        price:"$59",
        para:"Vary nice designed Bag",
        img:"./img/bag1.jpeg"
    },
    {
        title:"The Bag",
        price:"$59",
        para:"Vary nice designed Bag",
        img:"./img/bag2.jpeg"
    },
    {
        title:"The Bag",
        price:"$59",
        para:"Vary nice designed Bag",
        img:"./img/bag3.jpeg"
    },
    {
        title:"The Bag",
        price:"$59",
        para:"Vary nice designed Bag",
        img:"./img/bag4.jpeg"
    },
    {
        title:"The Bag",
        price:"$59",
        para:"Vary nice designed Bag",
        img:"./img/bag5.jpeg"
    },
    {
        title:"Laptop",
        price:"$1000",
        para:"Vary nice designed Apple laptop",
        img:"./img/laptop1.jpg"
    },
    {
        title:"Laptop",
        price:"$1000",
        para:"Vary nice designed Apple laptop",
        img:"./img/laptop2.jpeg"
    },
    {
        title:"Laptop",
        price:"$1000",
        para:"Vary nice designed Apple laptop",
        img:"./img/laptop3.jpg"
    },
    {
        title:"Laptop",
        price:"$1000",
        para:"Vary nice designed Apple laptop",
        img:"./img/laptop4.jpg"
    },
    {
        title:"Laptop",
        price:"$1000",
        para:"Vary nice designed Apple laptop",
        img:"./img/laptop5.jpg"
    },
    {
        title:"Shoes",
        price:"$100",
        para:"Vary nice designed Shoes",
        img:"./img/shoes1.jpeg"
    },
    {
        title:"Shoes",
        price:"$100",
        para:"Vary nice designed Shoes",
        img:"./img/shoes2.jpeg"
    },
    {
        title:"Shoes",
        price:"$100",
        para:"Vary nice designed Shoes",
        img:"./img/shoes3.jpeg"
    },
    {
        title:"Shoes",
        price:"$100",
        para:"Vary nice designed Shoes",
        img:"./img/shoes4.jpeg"
    },
    {
        title:"Shoes",
        price:"$100",
        para:"Vary nice designed Shoes",
        img:"./img/shoes5.jpeg"
    },

];

// this code is for showing products
const main =document.querySelector(".main");
let mydata = datas.map(data=>{
    let container = document.createElement("div");
    container.setAttribute("class","container");
    main.appendChild(container);
    let img = document.createElement("div");
    img.setAttribute("class","img")
    container.appendChild(img);

    let pic=document.createElement("img");
    pic.setAttribute("src","")
    img.appendChild(pic);
    let information =document.createElement("div");
    information.setAttribute("class","information");
    container.appendChild(information)
    let titlePrice=document.createElement("div");
    information.appendChild(titlePrice);
    titlePrice.setAttribute("class","title-price");
    let title = document.createElement("h3");
    titlePrice.appendChild(title);
    title.setAttribute("class","title");
    let price=document.createElement("h3");
    price.setAttribute("class","price");
    titlePrice.appendChild(price);
    let para = document.createElement("p");
    information.appendChild(para);
    let react = document.createElement("div");
    information.appendChild(react)
    react.setAttribute("class","react")
    let buy = document.createElement("i");
    buy.setAttribute("class","fa fa-shopping-bag")
    let love = document.createElement("i");
    love.setAttribute("class","fa fa-heart")
    let cart = document.createElement("i");
    cart.setAttribute("class","fa fa-shopping-cart");
    react.append(buy,love,cart);
    title.innerHTML=data.title;
    price.innerHTML=data.price
    para.innerHTML=data.para;
    pic.src=data.img;
    return container;
})


// this code is for header
let barsTimes=document.querySelector("#bars-times")
let nav =document.querySelector(".navber ul");
let navber =document.querySelector(".navber .show-hide");
navber.addEventListener("click", function(){
    if(nav.style.display==="none"){
        nav.style.display="flex"
        barsTimes.className="fa fa-times";
    }else{
        nav.style.display="none"
        barsTimes.className="fa fa-bars";
    }
})


// this code is for forms
let SignupNow = document.querySelectorAll(".signupNow");
let signupForm = document.querySelector(".signup");

let loginNow = document.querySelectorAll(".loginNow");
let loginForm = document.querySelector(".login");
loginNow.forEach(function(loginNow){
    loginNow.addEventListener("click",function(e){
        if(loginForm.style.display="none"){
        loginForm.style.display="flex";
        signupForm.style.display="none";
    }
    })
})

SignupNow.forEach(function(SignupNow){
    SignupNow.addEventListener("click",function(e){
        if(signupForm.style.display="none"){
        signupForm.style.display="flex";
        loginForm.style.display="none"
        
    }
    })
})

let cancel =document.querySelectorAll(".cancel");
cancel.forEach(function(cancel){
    cancel.addEventListener("click", function(e){
        if(e){
        loginForm.style.display="none";
        signupForm.style.display="none";
        orderForm.style.display="none";
        }
    })
})

// this code is for filter
let filter =document.querySelectorAll(".filter li");
filter.forEach(function(filter){
    filter.addEventListener("click",function(e){
            mydata.map((singledata)=> {
            let theData=singledata.lastChild.firstChild.firstChild;
            let hiddendata=theData.parentNode.parentNode.parentNode;
                if(e.target.innerHTML===theData.innerHTML){
                    hiddendata.style.display="flex";
                }else if(e.target.innerHTML==="All"){
                    
                    hiddendata.style.display="flex";
                }else{
                    e.target.style.color="black";
                    hiddendata.style.display="none";
                }
            
        })
    })
})
let react = document.querySelectorAll(".fa-shopping-bag");
let orderForm=document.querySelector(".order-form");
let orderProduct=document.querySelector(".order-product");
react.forEach((react)=>{
    react.addEventListener("click",function(e){
        console.log(e.currentTarget);
        let hiddendata=this.parentNode.parentNode.parentNode;
        console.log(hiddendata)
        console.log(orderProduct.innerHTML)
        orderProduct.innerHTML=hiddendata.innerHTML;
        orderForm.style.display="flex";
        console.log(typeof(orderProduct))
    })
})



// const getData = ()=>{
//     const xhr = new XMLHttpRequest();
//     xhr.open("get","https://www.pexels.com/photo/portrait-ohttps://www.pexels.com/photo/white-wooden-framed-glass-window-10594491/f-bulldog-9992762/")
//     xhr.onload=()=>{
//         let data=xhr.response;
//         let jsData=JSON.parse(data);
//         img.src=jsData[0].url;
//         console.log(jsData);

//     }
//     xhr.send();
// }
// getData();