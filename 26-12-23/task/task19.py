Physics=int(input("enter a mark"))

Chemistry=int(input("enter a mark"))

Biology=int(input("enter a mark"))

Mathematics=int(input("enter a mark"))

Computer=int(input("enter a mark"))

total=(Physics+Chemistry+Biology+Mathematics+Computer)/5

if (total>=90):
    print("Grade A")
elif (total>=80 and total<90):
    print("Grade B")
elif (total>=70 and total<80):
    print("Grade C")
elif (total>=60 and total<70):
    print("Grade D")
elif (total>=40 and total<60):
    print("Grade E")
else:
    print("Grade F")



