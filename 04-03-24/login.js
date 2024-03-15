
let details={}


function login(){
        let username=document.getElementById('name').value 
        let user_email=document.getElementById('email').value 
        let pass=document.getElementById('password').value 


    details.name=username
    details.email=user_email
    details.password=pass

    console.log(details)

    if (user_email==="anishak0607@gmail.com" && pass==="123456"){
        alert("login")
        let convert=JSON.stringify(details)
        localStorage.setItem("detail",convert)
        window.location="home.html"
    }
    else{
        alert("wrong")
    }


    

}

function checked(){
    let local=localStorage.getItem("detail")
    let localstore=JSON.parse(local);
    let user=document.createElement("h1")
    user.innerHTML=`welcome ${localstore.name}`
    let home=document.getElementById("home");
    home.append(user)



}

function destory(){
    localStorage.clear()
    window.location="login.html"
}