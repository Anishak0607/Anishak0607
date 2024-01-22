students_marks=[
                {
                    "name":"Anish",
                    "place":"Nagercoil",
                    "major":"maths",
                    "marks":[
                                 {
                                    "subject_name":"Tamil",
                                    "mark_scored":98,
                                    "maximum_marks":100,
                                },
                                {
                                    "subject_name":"english",
                                    "mark_scored":98,
                                    "maximum_marks":100,
                                },
                                {
                                    "subject_name":"Maths",
                                    "mark_scored":85,
                                    "maximum_marks":100,
                                },
                                {
                                    "subject_name":"chemistry",
                                    "mark_scored":94,
                                    "maximum_marks":100,                   
                                                    },
                                {
                                    "subject_name":"physics",
                                    "mark_scored":91,
                                    "maximum_marks":100,
                                },
                            ],
                        "age":25,

                        "hobbies":["travelling","video games"],

                        "gender":"male",
                        
                        "ncc":True,

                        "sports":["cricket","football","volleyball"],

                        "total_annual_income":80000
                },
                {
                    
                    "name":"Abisha",
                    "place":"Nagercoil",
                    "major":"maths",
                    "marks":[
                                 {
                                    "subject_name":"Tamil",
                                    "mark_scored":90,
                                    "maximum_marks":100,
                                },
                                {
                                    "subject_name":"english",
                                    "mark_scored":93,
                                    "maximum_marks":100,
                                },
                                {
                                    "subject_name":"Maths",
                                    "mark_scored":82,
                                    "maximum_marks":100,
                                },
                                {
                                    "subject_name":"chemistry",
                                    "mark_scored":97,
                                    "maximum_marks":100,                   
                                                    },
                                {
                                    "subject_name":"physics",
                                    "mark_scored":94,
                                    "maximum_marks":100,
                                },
                            ],
                        "age":21,

                        "hobbies":["travelling","video games"],

                        "gender":"female",
                        
                        "ncc":True,

                        "sports":["cricket","football","volleyball"],

                        "total_annual_income":45000
                },
                {
                    
                    "name":"kumar",
                    "place":"Nagercoil",
                    "major":"maths",
                    "marks":[
                                 {
                                    "subject_name":"Tamil",
                                    "mark_scored":78,
                                    "maximum_marks":100,
                                },
                                {
                                    "subject_name":"english",
                                    "mark_scored":89,
                                    "maximum_marks":100,
                                },
                                {
                                    "subject_name":"Maths",
                                    "mark_scored":82,
                                    "maximum_marks":100,
                                },
                                {
                                    "subject_name":"chemistry",
                                    "mark_scored":90,
                                    "maximum_marks":100,                   
                                 },
                                {
                                    "subject_name":"physics",
                                    "mark_scored":94,
                                    "maximum_marks":100,
                                },
                            ],
                        "age":22,

                        "hobbies":["travelling","video games"],

                        "gender":"male",
                        
                        "ncc":False,

                        "sports":["cricket","football","volleyball"],

                        "total_annual_income":75000
                },
                {
                    
                    "name":"anitha",
                    "place":"Nagercoil",
                    "major":"maths",
                    "marks":[
                                 {
                                    "subject_name":"Tamil",
                                    "mark_scored":90,
                                    "maximum_marks":100,
                                },
                                {
                                    "subject_name":"english",
                                    "mark_scored":85,
                                    "maximum_marks":100,
                                },
                                {
                                    "subject_name":"Maths",
                                    "mark_scored":81,
                                    "maximum_marks":100,
                                },
                                {
                                    "subject_name":"chemistry",
                                    "mark_scored":68,
                                    "maximum_marks":100,                   
                                                    },
                                {
                                    "subject_name":"physics",
                                    "mark_scored":74,
                                    "maximum_marks":100,
                                },
                            ],
                        "age":20,

                        "hobbies":["travelling","video games"],

                        "gender":"female",
                        
                        "ncc":False,

                        "sports":["cricket","football","volleyball"],

                        "total_annual_income":45000
                },
                {
                    
                    "name":"Abish",
                    "place":"Nagercoil",
                    "major":"maths",
                    "marks":[
                                 {
                                    "subject_name":"Tamil",
                                    "mark_scored":74,
                                    "maximum_marks":100,
                                },
                                {
                                    "subject_name":"english",
                                    "mark_scored":93,
                                    "maximum_marks":100,
                                },
                                {
                                    "subject_name":"Maths",
                                    "mark_scored":87,
                                    "maximum_marks":100,
                                },
                                {
                                    "subject_name":"chemistry",
                                    "mark_scored":97,
                                    "maximum_marks":100,                   
                                                    },
                                {
                                    "subject_name":"physics",
                                    "mark_scored":45,
                                    "maximum_marks":100,
                                },
                            ],
                        "age":23,

                        "hobbies":["travelling","video games"],

                        "gender":"male",
                        
                        "ncc":True,

                        "sports":["cricket","football","volleyball"],

                        "total_annual_income":100000
                },
                {
                    
                    "name":"babu",
                    "place":"Nagercoil",
                    "major":"maths",
                    "marks":[
                                 {
                                    "subject_name":"Tamil",
                                    "mark_scored":90,
                                    "maximum_marks":100,
                                },
                                {
                                    "subject_name":"english",
                                    "mark_scored":93,
                                    "maximum_marks":100,
                                },
                                {
                                    "subject_name":"Maths",
                                    "mark_scored":82,
                                    "maximum_marks":100,
                                },
                                {
                                    "subject_name":"chemistry",
                                    "mark_scored":97,
                                    "maximum_marks":100,                   
                                                    },
                                {
                                    "subject_name":"physics",
                                    "mark_scored":94,
                                    "maximum_marks":100,
                                },
                            ],
                        "age":25,

                        "hobbies":["travelling","video games"],

                        "gender":"male",
                        
                        "ncc":True,

                        "sports":["cricket","football","volleyball"],

                        "total_annual_income":45000
                },


               ]

for student in students_marks:

    total=0
    for mark in student["marks"]:
        total=total+mark["mark_scored"]
        # print(total)

    if student["age"]<=24 and student["total_annual_income"]<=80000 and student["gender"]=="male":
        print(student["name"],total)  
    elif student["age"]<=22 and student["total_annual_income"]<=50000 and student["gender"]=="female":
        print(student["name"],total) 













