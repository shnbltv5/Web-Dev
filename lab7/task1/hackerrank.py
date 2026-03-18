# Say "Hello, World!"
print("Hello, World!")

# Arithmetic Operators
a = int(input())
b = int(input())
print(a + b)
print(a - b)
print(a * b)

# Division
print(a // b)
print(a / b)

# Loops
n = int(input())
for i in range(n):
    print(i * i)

# List comprehension
x = int(input())
y = int(input())
z = int(input())
n = int(input())

result = []
for i in range(x + 1):
    for j in range(y + 1):
        for k in range(z + 1):
            if i + j + k != n:
                result.append([i, j, k])

print(result)