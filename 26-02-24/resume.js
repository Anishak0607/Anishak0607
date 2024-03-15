let myresume={
    skill:[],
    language:[],
    hobby:[],
    personal_details:{},
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
function gen(ele,key){
    myresume[key]=ele.value
    preview()
}
function gen(ele,key,parent_key,index,child_key){
    if(parent_key){
        myresume[parent_key][key]=ele.value
    }
    else if(child_key){
        myresume[key][index][child_key]=ele.value
    }
    else {
        myresume[key]=ele.value
    }
    preview()
        
}



function add(key, id){
    let input=document.getElementById(id).value
    myresume[key].push(input)
    document.getElementById(id).value=""
    preview()
}


function preview(){
    document.getElementById('code').innerHTML=JSON.stringify(myresume,null,4)
}




let resumes=[]

function save(){
    resumes.push(myresume)
    data=JSON.stringify(resumes)
    localStorage.setItem("resumes",data)
    resumes=[]
    myresume=""
    
}

function submit(){
    localStorage.setItem('details',JSON.stringify(myresume))
    location="list.html"
}

function check(){ 
        let get= localStorage.getItem("details")
        let show_data= JSON.parse(get)
        show= document.createElement("h4")
        show.innerHTML = `Name:${show_data.personal_details}`;
        let div_var = document.getElementById("frist")
       div_var.append(show)
}


function save(){
    if(! localStorage.getItem("my_resume")){
        localStorage.setItem("my_resume",JSON.stringify([]))
    }

let  new_data=localStorage.getItem("my_resume")
let new_data_parsed=JSON.parse(new_data)
let uptate_data=[ ...new_data_parsed,myresume]

    localStorage.setItem("my_resume",JSON.stringify(uptate_data))
    location="view.html"
}

function new_resume(){
    let new_bio=localStorage.getItem("my_resume")
    let new_bio_parsed=JSON.parse(new_bio)
    let render="";
    for(const input in new_bio_parsed){
        // render=render+`<li><a href="list.html?index=${input}">${new_bio_parsed[input].title}</a></li>`

        // delete

        render=render+`<li><a href="view.html?index=${input}">
        ${new_bio_parsed[input].title}</a><button type=button onclick="del(${input})">delete</button></li>
        <a href="edit.html?index=${input}"><button type=button onclick="names('${input}')">edit</button></a>`
    }
    document.getElementById("list").innerHTML=render
    
    

    
    }






function del(erase){
                   
    let uptateresume=[]
    let new_del=localStorage.getItem("my_resume")
    let new_delparsed=JSON.parse(new_del)
    for(const each in new_delparsed){
        if(each!=erase){
            uptateresume.push(new_delparsed[each])
        }
    }
      

    localStorage.setItem("my_resume",JSON.stringify(uptateresume))

    window.location="view.html"
    


} 




function submit(id){
    let parms = new URLSearchParams(document.location.search);
    let index = parms.get("index");

    let update_get_data = localStorage.getItem("my_resume");
    let update_parse_data = JSON.parse(update_get_data);


    if(id=='skill'){

        let addskill=document.getElementById('skill')
        let addnew=document.createElement('input')
        addnew.setAttribute('type','text')
        addnew.setAttribute('placeholder','add new skill')
        addnew.setAttribute('class','inputskill')
        addskill.appendChild(addnew)

        update_parse_data[index].skill.push(addnew.value)
    }
}

function names(){  //upatae the values
    let parms = new URLSearchParams(document.location.search);
    let index = parms.get("index");

    let update_get_data = localStorage.getItem("my_resume");
    let update_parse_data = JSON.parse(update_get_data);

     document.getElementById("update_title").value = update_parse_data[index].title


     let update_skill=''
     for(const each of update_parse_data[index].skill){
        update_skill=update_skill+`<input class="inputskill" value=${each}/>`
     }
     document.getElementById("skill").innerHTML=update_skill
    
    let update_lang=''
    for(const each of update_parse_data[index].language){
        update_lang=update_lang+`<input class="inputlang" value=${each}/>` 
    }
    document.getElementById("lang").innerHTML=update_lang

    let update_hobby=""
    for(const each in update_parse_data[index].hobby){
        update_hobby=update_hobby+`<input class="inputhobby" value=${each}/>`

    }
    document.getElementById("hobby").innerHTML=update_hobby

    let prase_education=update_parse_data[index].education
    let new_edu=""

    for(const each in prase_education){
        new_edu=new_edu+`<tr>
                        <td><input value="${prase_education[each].ins_name}" onkeyup="operation(this,${each},'ins_name','education')"/></td>
                        <td><input value="${prase_education[each].percentage}" onkeyup="operation(this,${each},'percentage','education')"/></td>
                        <td><input value="${prase_education[each].year}" onkeyup="operation(this,${each},'year','education')"/></td>
                        <tr>`
    }
        document.getElementById("edittable").innerHTML=new_edu


        let prase_projects=update_parse_data[index].projects
        let new_projects=""

    for(const each in prase_projects){
        new_projects=new_projects+`<tr>
                                    <td><input value="${prase_projects[each].project_name}" onkeyup="operation(this,${each},'project_name','projects')"/></td>
                                    <td><input value="${prase_projects[each].project_details}" onkeyup="operation(this,${each},'projects_details','projects')"/></td>
                                    </tr>`
        }

        document.getElementById("editproject").innerHTML=new_projects

        let prase_exp=update_parse_data[index].experience
        let new_exp=""

        for(const each in prase_exp){
            new_exp=new_exp+`<tr>
                                <td><input value="${prase_exp[each].companay_name}"onkeyup="operation(this,${each},'companay_name','experience')"/></td>
                                <td><input value="${prase_exp[each].work_details}"onkeyup="operation(this,${each},'work_details','experience')"/></td>
                                <td><input value="${prase_exp[each].role}"onkeyup="operation(this,${each},'role','experience')"/></td>
                                <td><input value="${prase_exp[each].working_year}"onkeyup="operation(this,${each},'working_year','experience')"/></td>
                                </tr>`
        }
    
        document.getElementById("editexp").innerHTML=new_exp
   
}

 function operation(element,index_no,key_word,parent_keys){

     let parms = new URLSearchParams(document.location.search);
    let index = parms.get("index");
    let update_get_data = localStorage.getItem("my_resume");
    let update_parse_data = JSON.parse(update_get_data);

    update_parse_data[index][parent_keys][index_no][key_word]=element.value


    localStorage.setItem('my_resume',JSON.stringify(update_parse_data))

 }

function update(){
    let parms = new URLSearchParams(document.location.search);
    let index = parms.get("index");
    let update_get_data = localStorage.getItem("my_resume");
    let update_parse_data = JSON.parse(update_get_data);


    let new_title=document.getElementById("update_title").value
    let new_name=document.getElementById("update_name").value
    let new_email=document.getElementById("update_email").value
    let new_age=document.getElementById("update_age").value
    let new_contact=document.getElementById("update_contact").value
    let new_dec=document.getElementById("update_dec").value
    let new_fname=document.getElementById("fname").value
    let new_mname=document.getElementById("mname").value

    //let updated_name=[];

    // for(const each in update_parse_data){
    //     if(index==each){
    //         update_parse_data[each].title=new_title

    //     }
    //     updated_name.push(update_parse_data[each])
        
    // }

    update_parse_data[index].title=new_title
    update_parse_data[index].name=new_name
    update_parse_data[index].email=new_email
    update_parse_data[index].age=new_age
    update_parse_data[index].contact=new_contact
    update_parse_data[index].declaration=new_dec
    update_parse_data[index].personal_details.father_name=new_fname
    update_parse_data[index].personal_details.mother_name=new_mname


    let update_skills=document.getElementsByClassName("inputskill")
    let final_skills=[]
    for(const each of update_skills){
        final_skills.push(each.value)
    }
    update_parse_data[index].skill=final_skills

    let update_lang=document.getElementsByClassName("inputlang")
    let final_lang=[]
    for(const each of update_lang){
        final_lang.push(each.value)
    }
    update_parse_data[index].language=final_lang


    let update_hobby=document.getElementsByClassName("inputhobby")
    let final_hobby=[]
    for(const each of update_hobby){
        final_hobby.push(each.value)
    }

    update_parse_data[index].hobby=final_hobby



    localStorage.setItem("my_resume",JSON.stringify(update_parse_data))
    window.location="view.html"
}



function full(){
    let parms = new URLSearchParams(document.location.search);
    let index = parms.get("index");

    let update_get_data = localStorage.getItem("my_resume");
    let update_parse_data = JSON.parse(update_get_data);

    document.getElementById("title").innerHTML =update_parse_data[index].title;
    document.getElementById("name").innerHTML =update_parse_data[index].name;
    document.getElementById("email").innerHTML =update_parse_data[index].email;
    document.getElementById("age").innerHTML =update_parse_data[index].age;
    document.getElementById("contact").innerHTML =update_parse_data[index].Contact;
    document.getElementById("declaration").innerHTML =update_parse_data[index].declaration;
    
    document.getElementById("two").innerHTML =update_parse_data[index].skill;
   
                            // education

    let table_value="";
    for( const  each of update_parse_data[index].education){
        table_value=table_value+`<tr>
                                <td>${each.ins_name}</td>
                                <td>${each.percentage}</td>
                                <td>${each.year}</td>
                    
                                </tr>`
                            }
    
 document.getElementById("tr").innerHTML =table_value;  
 
                            // expericence
    
    let exp_value="";
    for(const each of update_parse_data[index].experience){
        exp_value=exp_value+`<tr>
                                <td>${each.comapany_name}</td>
                                <td>${each.work_details}</td>
                                <td>${each.role}</td>
                                <td>${each.working_year}</td>
                            </tr>`
                            }

document.getElementById("exp").innerHTML =exp_value; 


    let pro_value="";
    for(const each of update_parse_data[index].projects){
        pro_value=pro_value+`<tr>
                                <td> ${each.project_name}</td>
                                <td>${each.project_details}</td>
                            </tr>`
    }

document.getElementById("pro").innerHTML=pro_value;

  
}


 


