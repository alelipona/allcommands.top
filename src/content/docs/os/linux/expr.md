---
title: expr Linux Command Guide
description: The Linux expr command is used for evaluating expressions and performing arithmetic operations. Learn how to use expr command in Linux.
---

The `expr` command in Linux is used for evaluating expressions and performing arithmetic operations. It can be used to perform various mathematical calculations, string manipulations, and logical operations. By utilizing operators such as addition (+), subtraction (-), multiplication (*), division (/), and modulus (%), users can quickly evaluate and manipulate numeric values. Additionally, the `expr` command can be used to compare values, test for equality, and perform other conditional operations. It is a versatile tool that can be utilized within shell scripts or directly from the command line to streamline tasks requiring mathematical or logical operations.
## expr Syntax:
```bash
expr [expression]
```
## Options:

| Option | Description                     |
|--------|---------------------------------|
| :      | Used to separate multiple expressions in one line. |

## Parameters:

| Parameter   | Description                                 |
|-------------|---------------------------------------------|
| expression  | The mathematical expression to be evaluated.|

:::caution
Be cautious when using the `expr` command as incorrect expressions may lead to unexpected results or errors. Ensure proper syntax and validate expressions before executing.
:::
## expr Command Samples:
### Perform Basic Arithmetic Operations
```bash
expr 10 + 5
```
Calculates the sum of 10 and 5 using the expr command.

### Evaluate an Arithmetic Expression
```bash
expr 20 \* 3
```
Evaluates the multiplication of 20 and 3 using the expr command.

### Increment a Variable
```bash
count=5
expr $count + 1
```
Increments the value of the variable count by 1.

### Check if Two Numbers are Equal
```bash
expr 10 = 10
```
Checks if the numbers 10 and 10 are equal using the expr command.

### Extract a Substring Length
```bash
string="HelloWorld"
expr length "$string"
```
Calculates the length of the substring "HelloWorld" using the expr command.

### Compare Two Numbers
```bash
expr 15 '>' 10
```
Compares whether 15 is greater than 10 using the expr command.

### Perform Arithmetic Operations within a Shell Script
```bash
#!/bin/bash
num1=20
num2=5
result=$(expr $num1 / $num2)
echo "Result: $result"
```
Performs division operation between num1 and num2 within a bash shell script using the expr command.
:::tip
When using the expr command in Linux, make sure to carefully structure your command to avoid errors as it is sensitive to syntax. Additionally, always refer to the man pages or online resources for more advanced usage and options.
:::

## expr FAQ:
### How do I use expr in Linux?
To use the expr command in Linux, execute the following command:
```bash
expr 10 + 5
```

### What is expr used for in Linux?
Expr is a command-line utility that evaluates expressions, performs text manipulation, and provides arithmetic operations in shell scripts.

### How can I perform subtraction using expr in Linux?
To perform subtraction using expr in Linux, use the following command format:
```bash
expr 15 - 6
```

### How do I concatenate strings using expr in Linux?
To concatenate strings using expr in Linux, use the following command format:
```bash
expr "Hello, " : '.*' "World"
```

### Can expr be used to compare numbers in Linux?
Yes, expr can be used to compare numbers in Linux by utilizing the equal sign (==) for comparison as shown in the following command:
```bash
expr 10 == 10
```

### How do I perform string length calculation using expr in Linux?
To calculate the length of a string using expr in Linux, use the following command format:
```bash
expr length "Linux"
```

## Applications of the expr command

1. Performing arithmetic operations
2. Extracting substrings from strings
3. Incrementing or decrementing values
4. Evaluating conditions and expressions
5. Converting infix expressions to postfix expressions