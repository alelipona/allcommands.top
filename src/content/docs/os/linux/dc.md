---
title: Linux dc command
description: Perform mathematical calculations with the Linux dc command. Learn how to use this command efficiently for arithmetic operations in a terminal.
---

The Linux dc command is a versatile tool for performing mathematical calculations in a terminal environment. It allows users to conduct various arithmetic operations such as addition, subtraction, multiplication, division, exponentiation, and more. With its postfix notation system, users can input complex mathematical expressions efficiently. The dc command also supports features like defining and recalling macros, as well as setting the precision of results. By mastering the syntax and functionality of the dc command, users can streamline their workflow and handle mathematical tasks quickly and effectively in a command-line interface.

## dc Syntax:
```bash
dc [options] [parameters]
```
## Options:
| Option    | Description                     |
|-----------|---------------------------------|
| -e        | Specify an expression to be evaluated by dc               |
| -f        | Specify a file that contains expressions to be evaluated |
| -h        | Print a brief help message                                |
| --version | Print version information                                 |

## Parameters:
| Parameter | Description                                                                                 |
|-----------|---------------------------------------------------------------------------------------------|
| number    | Number or variable name to push onto the stack for further processing by dc               |
| expression| Math expression to be evaluated by dc                                                     |

:::caution
Exercise caution when using the `dc` command as it directly evaluates mathematical expressions, which could lead to unintended consequences if not formatted correctly.
:::
## dc Usage:
### Perform a Simple Arithmetic Calculation
```bash
echo "6 4 + p" | dc
```
This command calculates the sum of 6 and 4 using dc and prints the result.

### Calculate the Factorial of a Number
```bash
echo "5 1 -sa[la*]sadsmx" | dc
```
Calculates the factorial of 5 using dc (5! = 5x4x3x2x1) and displays the result.

### Convert Decimal Number to Binary
```bash
echo "10 2op" | dc
```
Converts decimal 10 to binary using dc and displays the binary representation (1010).

### Perform Division of Two Numbers
```bash
echo "12 4/p" | dc
```
Divides 12 by 4 using dc and outputs the result.
:::tip
When using the dc command in Linux, remember that it is a reverse-polish calculator that uses postfix notation. This means you enter numbers first, followed by the operation. For example, to add two numbers, you would enter them first, then the "+" operator.
:::

### How do I use dc in Linux?
To use the dc command in Linux, execute the following command:
```bash
dc
```

### What is postfix notation in dc?
Postfix notation is a way of writing mathematical expressions without the use of parentheses where the operators are placed after their operands. In dc, you would enter numbers first, then the operation. For example, to multiply 3 by 2, you would enter "3 2 *".
```bash
3 2 *
```

### How can I perform arithmetic operations in dc?
You can perform arithmetic operations in dc by using the respective operators. For example, to add two numbers, use the "+" operator. Here is an example of adding 5 and 3:
```bash
5 3 +
```

### How can I perform exponentiation in dc?
To perform exponentiation in dc, you can use the "^" operator. For example, to calculate 2 to the power of 3:
```bash
2 3 ^
```

### How do I display the result in dc?
To display the result of your calculations in dc, use the "p" command. This will print the top of the stack, which contains the result. Here is an example:
```bash
5 3 +
p
```

### Can I store and recall values in dc?
Yes, you can store and recall values in dc using registers denoted by letters. To store a value in a register, use the "r" command, followed by the register letter. Here is an example of storing the number 6 in register "a":
```bash
6 ra
```

### How do I exit dc?
To exit the dc command in Linux, you can use the "q" command. This will quit the dc calculator. Here is an example:
```bash
q
```

## Applications of the dc command

- Performing arithmetic calculations
- Converting between different number bases
- Creating scripts for mathematical operations
- Implementing simple reverse polish notation expressions
- Providing a simple calculator functionality on the command line