age=int(input("enter a age"))
sex=input("enter a sex")
married_status=input("enter a yes or no")

if sex=="female":
    print("work only in urban areas")
elif sex=="male" and age>=20 and age<=40:
    print(" work in anywhere")
elif sex=="male" and age>=40 and age<=60:
    print("work in urban areas only")
else:
    print("ERROR")
