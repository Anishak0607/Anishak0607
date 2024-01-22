basicsalary=int(input("Enter Your  Salary:"))
if basicsalary<=10000:
    grosssalary=((basicsalary)+(basicsalary*20/100)+(basicsalary*80/100))
    print("Gross Salary:",grosssalary)
elif basicsalary<=20000 and basicsalary>10000:
    grosssalary=((basicsalary)+(basicsalary*25/100)+(basicsalary*90/100))
    print("Gross Salary:",grosssalary)
elif basicsalary>20000:
    grosssalary=((basicsalary)+(basicsalary*30/100)+(basicsalary*95/100))
    print("Gross Salary:",grosssalary)
