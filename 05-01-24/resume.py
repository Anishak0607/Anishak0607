resume={}
# getname=input("Enter a name")
# resume["name"]=getname

# mobile_no=int(input("enter a mobile number"))
# resume["getmobileno"]=mobile_no

# email=input("enter a email")
# resume["email"]=email


# objective=input("enter a objective")
# resume["objective"]=objective

# education=int(input("how many education you have"))
# resume["education"]=[]
# for studies in range(education):

    

#     course=input("enter a course")
#     branch=input("enter a branch")
#     institution=input("enter a institution")
#     CGPA=input("enter a cgpa")
#     year=int(input("enter a year"))

#     resume["education"].append({ 
#                                     "course":course,
#                                     "Branch":branch,
#                                     "Institution":institution,
#                                     "CGPA" :CGPA,
#                                     "Year":year
#                                     })



def new_education( resume1,resume2):
    for studies in range(resume1):
     
        course=input("enter a course")
        branch=input("enter a branch")
        institution=input("enter a institution")
        CGPA=input("enter a cgpa")
        year=int(input("enter a year"))

        resume["education"].append({ 
                                    "course":course,
                                    "Branch":branch,
                                    "Institution":institution,
                                    "CGPA" :CGPA,
                                    "Year":year
                                    })
    return(resume2)

education=int(input("how many education you have"))
resume["education"]=[]
uptate=new_education(education,resume["education"])
resume["education"]=uptate         


def hobby 

hobbies=input("enter a hobby")

print(resume)






