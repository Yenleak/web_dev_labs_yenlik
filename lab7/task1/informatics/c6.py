def xor(x, y):
    return x != y

try:
    data = input().split()
    if len(data) == 2:
        x = bool(int(data[0]))
        y = bool(int(data[1]))
        
        result = xor(x, y)
        print(int(result))
except EOFError:
    pass
