let myresume={
    skills:[],
    hobbies:[],
    languages:[],
    personal_details:{

    },
    education:[
            {
                ins_name:"",
                percentage:"",
                year:""
            },
            {
                ins_name:"",
                percentage:"",
                year:""
            },
            {
                ins_name:"",
                percentage:"",
                year:""
            }
    ],
    projects:[
        {
            project_name:"",
            project_details:""
        },
        {
            project_name:"",
            project_details:""
        }
    ],
    experience:[
        {
            companay_name:"",
            work_details:"",
            role:"",
            working_year:""
        },
         {
            companay_name:"",
            work_details:"",
            role:"",
            working_year:""
        }
    ]
};
    

// function get(ele,key){
//     // myresume.name=ele.value;
//     myresume[key]=ele.value;
//     preview()
//     // document.getElementById("code").innerHTML=JSON.stringify(myresume)
// }

function get(ele,key,personal_key,index,edu_key){

        if(personal_key){
            myresume[personal_key][key]=ele.value;
        }
        else if(edu_key){
            myresume[key][index][edu_key]=ele.value;
        }
        else{
            myresume[key]=ele.value;
        }
    
        preview()
}

function addArr(key,id){
    let a=document.getElementById(id).value;
    myresume[key].push(a)
    document.getElementById(id).value=""
    preview()
}



function preview(){
    document.getElementById("code").innerHTML=JSON.stringify(myresume,null,4)
}
// function get_1(ele){
//     myresume.email=ele.value;
//     preview()
//     // document.getElementById("code").innerHTML=JSON.stringify(myresume)
// }