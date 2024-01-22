angle_1=int(input("enter a value"))
angle_2=int(input("enter a value"))
angle_3=int(input("enter a value"))

if (angle_1==angle_2==angle_3):
    print("triangle is equilateral")
elif (angle_1==angle_2 or angle_2==angle_3 or angle_3==angle_1) and (angle_1+angle_2+angle_3==180):
    print("triangle is isosceles")
else:
    print("triangle is scalene triangle.")