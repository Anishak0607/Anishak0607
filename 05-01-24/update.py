my_resume1={
    
                #  "name":"Anish kumar",
                #  "mobile_no":7708527721,
                #  "email":"anishak0607@gmail.com",

     
                #  "objective":"Looking forward for an opportunity where in I canimprove my academic and professional qualification andutilize my ability that would benefit me, the institution andall those around me.",


                #  "experience":[
                # {
                #     "company_name":"HDB finance",
                # #     "designation":"sales officer",

                #  }
                # ],

                "projects_working":
                                [
                                    {
                                        "project_name":"Planning and designing of Water Tank",
                                        "project_details":"using the autocad design the water tank and calucalte the strenth"
                                    },

                                    {
                                         "project_name":"lanning and designing of Marriage Hall Building",
                                         "project_details":"calulate the value of the total area of maarrige hall and design the marriage hall"
                                    },
                                         
                                    {
                                        "project_name":"Experimental Investigation of Concrete with partially replaced by Fine Aggregate by Saw Dust",
                                        "project_details":"using the concreate replcae the cement that place saw dust find the value of the concrete strenth and tension"

                                    }
                                ],

                "education":[
                 {
                    "course": "sslc",
                    "Institution" : "MTPKN matriculation School",
                    "Board" : "State Board",
                    "Percentage" : 81,
                    "Year" :2015,
                },
                {
                    "course":"hslc",
                    "Institution":"St marys higher sec School",
                    "Board" :"State Board",
                    "Percentage" :59,
                    "Year" : 2017,
                },
                { 
                    "course" : "Bachelor of Engineering",
                    "Branch" : "Mechanical",
                    "Institution" : "DMI engineering college aralvaimozli",
                    "University" :"Anna University, Chennai",
                    "CGPA" : "7.02",
                    "Year" : "2017-2021",
                },
                ],
            
                # "skills":["python","html","css"],


                # "personal_details":{
                    "father_name":"Edward kumar",
                    "dob":"06-07-2000",
                    "address":{
                        "door_no":"3/33b",
                        "street_name":"Poonga_nager",
                        "area":"Madavalayam",
                        "city":"Thovalai",
                        "state":"Tamilnadu",
                        "pincode":"629302"},
                     "hobbies":["Traveling","watching_cricket","listening music"],
                     "language":["tamil","english"],
                     }
            # }
# print(my_resume1)


                                    #function





# my_resume1["education"].append({ "Course" : "Bachelor of Engineering",
#                                  "Branch" : "Mechanical",
#                                  "Institution" : "DMI engineering college aralvaimozli",
#                                  "University" :"Anna University, Chennai",
#                                  "CGPA" : "8.40",
#                                  "Year" : "2014-2021"})

# print(my_resume1)


# my_resume1["projects"].append("food management")

# print(my_resume1)

# for details in my_resume1["education"]:
#     if details["course"]=="hslc":
#         details["course"]="12th"
        
# print(my_resume1)

                              #    add project

# new=input("do you have a extra projects")

# for add in my_resume1["projects"]:
#     if new=="yes":
#         new=input("enter a projects")
#         my_resume1["add"].append("new")
#     print(my_resume1)


# new=input("do you have a extra projects")
# if new=="yes":
#         new=input("enter a projects")
#         my_resume1["projects"].append("new")
# print(my_resume1)



# new_project=input("do you have a extra projects")
# if new_project=="yes":
#      project_name=input("enter a project name")
#      project_details=input("enter a details")

#      my_resume1["projects_working"].append(
#                                             {"project_name":project_name,
#                                             "project_details":project_details}
#                                            )
#      print(my_resume1)
   

    #   using function to add eductaion

def new_education( my_resume1):
    new=input("Do you want add education")
    if new=="yes":
        course=input("enter a course")
        branch=input("enter a branch")
        institution=input("enter a institution")
        CGPA=input("enter a cgpa")
        year=int(input("enter a year"))

        my_resume1.append({ 
                                    "course":course,
                                    "Branch":branch,
                                    "Institution":institution,
                                    "CGPA" :CGPA,
                                    "Year":year
                                    })
    return(my_resume1)

uptate=new_education(my_resume1["education"])
my_resume1["education"]=uptate
print(my_resume1)




    



