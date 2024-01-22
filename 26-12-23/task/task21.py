unit=int(input("enter a unit"))
  
if unit<=50:
    bill_amount=(unit*0.5)
    print((bill_amount)+(20/100))
elif unit<=150 and unit>50:
    bill_amount=(unit*0.75)
    print((bill_amount)+(20/100))
elif unit<=250 and unit>150:
    bill_amount=(unit*1.20)
    print((bill_amount)+(20/100))
elif unit>250:
    bill_amount=(unit*1.50)
    print((bill_amount)+(20/100))
    
