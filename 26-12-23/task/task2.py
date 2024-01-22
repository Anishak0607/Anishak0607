a=int(input("enter a number"))
b=int(input("enter a number"))
c=int(input("enter a number"))

if a>b and a>c:
    print("a is high")
elif b>c and b>a:
    print("b is high")
elif c>a and c>b:
    print("c is high")
elif a==b or a==c :
    print(a," is same and maximum")
elif b==c or b==a:
    print(b,"is same and maximum")
else:
    print("all value equal")