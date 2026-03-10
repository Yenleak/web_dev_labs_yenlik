n = int(input())
a = input().split()

count = 0
for s in a:
    num = int(s)
    if num > 0:
        count += 1
print(count)
