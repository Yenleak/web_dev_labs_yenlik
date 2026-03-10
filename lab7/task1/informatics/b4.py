n = int(input())
elem = input().split() 

for i in range(n):
    number = int(elem[i]) 
    if number % 2 == 0: 
        print(number, end=' ')
