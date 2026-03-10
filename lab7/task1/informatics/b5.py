def power(a, n):
    res = 1.0
    for _ in range(n):
        res *= a
    return res

try:
    data = input().split()
    if len(data) == 2:
        a = float(data[0])
        n = int(data[1])
        
        print(power(a, n))
except EOFError:
    pass
