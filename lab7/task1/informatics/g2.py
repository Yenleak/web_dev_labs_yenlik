import math

x = int(input())
min = x

for i in range(2, int(math.sqrt(x)) + 1):
    if x % i == 0:
        min = i
        break

print(min)
