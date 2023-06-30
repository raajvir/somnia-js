def generate_values(a, b, z):
    if z < 2:
        raise ValueError("z must be greater than or equal to 2.")
    
    if b <= a:
        raise ValueError("b must be greater than a.")
    
    step = (b - a) / (z - 1)  # Uniform step size
    
    values = []
    current_value = a
    
    for _ in range(z):
        values.append(current_value)
        current_value += step
    
    return values

def jijou(x, y, z):
    outList = [x, y]

    i = 1
    while sum(outList) < z:
        i += 1
        print(outList)
        outList = generate_values(x, y, i)

    return outList


# Example usage
x = 5
y = 10
z = 60 * 24

result = jijou(x, y, z)
print("Final: ", result)
print(sum(result), "dd", z)  # Verify that the sum is equal to z


