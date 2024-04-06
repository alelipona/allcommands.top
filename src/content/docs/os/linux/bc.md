---
title: Linux bc command
description:  Learn how to perform mathematical calculations in the Linux terminal with the bc command. From basic arithmetic to more complex equations, this guide will help you unleash the power of bc.
---
The Linux bc command is a versatile tool for performing mathematical calculations in the terminal. Whether you need to do basic arithmetic operations like addition, subtraction, multiplication, and division or more complex calculations involving advanced mathematical functions, bc has got you covered. This guide will walk you through the basics of using bc, including syntax and command options, so you can harness the full power of this handy utility. Enhance your productivity and efficiency by mastering the bc command in Linux.
## bc Syntax:
```bash
bc [options] [file]
```
## Options:
| Option | Description |
|--------|-------------|
| -h, --help | Display help message and exit |
| -i | Start bc in interactive mode |
| -q | Turn off all warnings |
| -s | Enable standard math library functions |

## Parameters:
| Parameter | Description |
|-----------|-------------|
| file | Specify a file to read and execute commands from | 

:::caution
Be careful with using the 'bc' command as it performs arbitrary precision arithmetic. Incorrect usage may lead to unexpected results, especially when dealing with large numbers or complex expressions.
:::
## bc Usage:
### Simple Arithmetic Calculation
```bash
echo "5 + 3" | bc
```
Performs a simple addition calculation with the bc command.

### Calculate Square Root
```bash
echo "sqrt(25)" | bc -l
```
Calculates the square root of 25 using the -l option to load the math library in bc.

### Perform Trigonometric Functions
```bash
echo "s(45)" | bc -l
```
Uses the bc command with the -l option to perform trigonometric functions, such as calculating the sine of 45 degrees.

### Calculate Exponential Function
```bash
echo "e(2)" | bc -l
```
Calculates the exponential function of 2 using the math library in bc.
:::tip
When using the bc command in Linux, make sure to carefully review and understand the mathematical expressions and functions you are inputting to avoid errors in calculations. Additionally, always use proper syntax and formatting to ensure accurate results.
:::

### How do I use bc in Linux?
To use the bc command in Linux, execute the following command:
```bash
bc -l <<< "10 * 2"
```

### What is the purpose of the -l option in bc?
The -l option in the bc command is used to load the math library, enabling access to additional mathematical functions like sine, cosine, and square root. 
```bash
bc -l <<< "s(0.5)"
```

### How can I calculate with a specific scale or precision in bc?
You can set the scale or precision in bc using the "scale" variable. For example, to perform calculations with a precision of 5 decimal places:
```bash
echo "scale=5; 7 / 3" | bc
```

### Can bc be used for floating-point arithmetic in Linux?
Yes, the bc command in Linux supports floating-point arithmetic, making it suitable for precise mathematical calculations involving decimal numbers.
```bash
bc <<< "5.2 * 3.7"
```

### How can I perform exponentiation in bc?
To calculate exponentiation in bc, you can use the power operator (^). For example, to compute 2 to the power of 3:
```bash
bc <<< "2^3"
```

### Is there a way to use bc within a script for automation?
Yes, you can incorporate bc commands within bash scripts to automate mathematical calculations and process outputs as needed.
```bash
#!/bin/bash
result=$(bc <<< "4 * 6")
echo "The result is: $result"
```

### How can I use bc for factorial calculations in Linux?
To calculate the factorial of a number using bc in Linux, you can utilize the factorial (factorial) function. For example, to determine the factorial of 5:
```bash
echo "factorial(5)" | bc -l
```

## Applications of the bc Command

- Perform arithmetic operations
- Calculate mathematical expressions
- Support for mathematical functions
- Precision control for calculations
- Interactive mode for on-the-fly calculations