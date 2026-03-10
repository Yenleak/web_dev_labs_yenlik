def min_of_four(a, b, c, d):
    res = a
    if b < res:
        res = b
    if c < res:
        res = c
    if d < res:
        res = d
    return res

def main():
    try:
        data = list(map(int, input().split()))
        if len(data) == 4:
            a, b, c, d = data
            print(min_of_four(a, b, c, d))
    except EOFError:
        pass

if __name__ == "__main__":
    main()
