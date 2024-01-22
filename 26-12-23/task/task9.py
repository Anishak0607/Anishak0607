letter=(input("enter a value"))


if (letter>="a" and letter<="z") or (letter>="A" and letter<="Z"):
    print("letter is alphabet")
elif letter>="0" and letter<="9":
    print("letter is digit")
else:
    print("letter is symbol")