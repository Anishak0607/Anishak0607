nums = [5,2,4]
target=6
result=[]


for number in nums:         
    for num1 in nums:                   
        if number+num1==target:     
            result.append(nums.index(number))       
print(result)   