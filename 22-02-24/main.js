
let a=5;
let b=6;

if(a>b){
    console.log("a is greater")
} 
else if(b>a){
    console.log("b is greater")
}
else{
    console.log("a and b is equal")
}

function getdata(){
    // console.log("wolks")
    let email=document.getElementById("email_address").value;
    console.log(email)
    let password=document.getElementById("pass").value;
    console.log(password)
}

function add(){
    let input_1=Number(document.getElementById("input_1").value)
    let input_2=Number(document.getElementById("input_2").value)
    let output=input_1+input_2
    console.log(output)
}
function large_num(){
    let a=Number(document.getElementById("input_3").value)
    let b=Number(document.getElementById("input_4").value)

    if(a>b){
        console.log("a is greater")
    }
    else if(b>a){
        console.log("b is greater")
    }
    else if(a==b){
        console.log("both are same")
    }
    else{
        console.log("invaild index")
    }
}
function odd_even(){
    let a=Number(document.getElementById("odd").value)
   

    if(a%2==0){
        console.log(a,"is even number")
    }
    else{
        console.log(a,"is odd number")
    }

}

function marks(){
    let tam=Number(document.getElementById("tam").value)
    let eng=Number(document.getElementById("eng").value)
    let maths=Number(document.getElementById("maths").value)
    let che=Number(document.getElementById("che").value)
    let phy=Number(document.getElementById("phy").value)
    let cs=Number(document.getElementById("cs").value)

    let maths_cutoff=maths/2

    let major_cutoff=(che+phy+cs)/3

    let lag_cutoff=(tam+eng)/2

    let total_major_cutoff=major_cutoff/4

    let total_lag_cutoff=lag_cutoff/4

    let over_all_cutoff=maths_cutoff+total_major_cutoff+total_lag_cutoff

    console.log(over_all_cutoff)




}

function total_units(){
    let unit=Number(document.getElementById("unit").value)
    

    if (unit<=50){
        let total=(unit*0.50)
        let add=total*1/5
        console.log(total+add)
    }
    else if(unit>50 && unit<=150){
        total=(unit*0.75)
        add=total*1/5
        console.log(total+add)
        
    }
    else if(unit>150 && unit<=250){
        total=(unit*1.20)
        add=total*1/5
        console.log(total+add)
       
    }
    else if(unit>250){
        total=(unit*1.50)
        add=total*1/5
        console.log(total+add)
        
    }
}


function G_salary(){
    let salary=Number(document.getElementById("salary").value)

    if(salary<=10000){
        let Hra=salary*0.2
        let Da=salary*0.8
        let total_salary=salary+Hra+Da
        console.log(total_salary)
    }
    else if(salary>10000 && salary<=20000){
        Hra=salary*0.25
        Da=salary*0.90
        total_salary=salary+Hra+Da
        console.log(total_salary)
    }
    else if(salary>20000){
        Hra=salary*0.3
        Da=salary*0.95
        total_salary=salary+Hra+Da
        console.log(total_salary)
    }
}


function total_marks(){
    let bio=Number(document.getElementById("bio").value)
    let maths=Number(document.getElementById("maths-1").value)
    let che=Number(document.getElementById("chem").value)
    let phy=Number(document.getElementById("phys").value)
    let cs=Number(document.getElementById("computer").value)

    console.log(bio,maths,che,phy,cs)


    let total_marks_sub=bio+maths+che+phy+cs
    let average=total_marks_sub/5


    if(average>=90){
        console.log("Grade-A")
    }
    else if(average>=80 && average<90){
        console.log("Grade-B")
    }
    else if(average>=70 && average<80){
        console.log("Grade-C")
    }
    else if(average>=60 && average<70){
        console.log("Grade-D")
    }
    else if(average>=40 && average<60){
        console.log("Grade-E")
    }
    else {
        console.log("Grade-F")
    }


}