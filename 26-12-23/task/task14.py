angle_1=int(input("enter a value"))
angle_2=int(input("enter a value"))
angle_3=int(input("enter a value"))

if (angle_1==0 or angle_2==0 or angle_3==0):
     print("it is not a triangle")

elif  (angle_1+angle_2+angle_3==180):
    print("it is triangle")
    
else:
    print("it is not a triangle")
