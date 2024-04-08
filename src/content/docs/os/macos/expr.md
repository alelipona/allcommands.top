---
title: expr MacOS command
description: Learn how to use the expr command in MacOS to evaluate expressions and manipulate text easily.
---

The expr command in MacOS is a versatile tool that allows users to perform arithmetic operations, compare strings, and extract substrings from text. By using a combination of operators and functions, such as addition, subtraction, multiplication, and division, users can perform complex calculations with ease. The expr command can also be used to compare strings for equality, determine string lengths, and extract substrings based on specified patterns. With its wide range of functionalities, the expr command is a powerful tool for processing text and performing mathematical operations in the MacOS terminal.

## expr Syntax:
```bash
expr arg1 operator arg2
```
## Options:
| Option | Description                |
|--------|----------------------------|
| -      | Subtraction operator       |
| *      | Multiplication operator    |
| /      | Division operator          |
| %      | Modulo (remainder) operator|
| :      | Pattern matching operator   |

## Parameters:
| Parameter | Description                             |
|-----------|-----------------------------------------|
| arg1      | The first argument or variable           |
| operator  | The operator (e.g., +, -, *, /)         |
| arg2      | The second argument or variable          |

:::caution
Be cautious when using the expr command as improper syntax or usage can result in unexpected outcomes.
:::
## expr bash Examples:
### Perform Basic Arithmetic
```bash
expr 5 + 3
```
This command will add two numbers (5 and 3) and produce the result.

### Concatenate Strings
```bash
expr "Hello " : '\(.*\)'
```
Concatenates the string "Hello " with the appropriate regular expression pattern to output the whole string.

### Extract a Substring
```bash
echo "example string" | expr "x\(.*\)s" : 'x\(.*\)s'
```
This will extract the substring between the characters "x" and "s" from the given string.

### Check Numeric Value
```bash
expr 10 \> 5
```
Evaluates the expression to check if 10 is greater than 5 and returns the result as 1 (true) or 0 (false).

### Find String Length
```bash
expr length "Linux"
```
Calculates the length of the string "Linux" and returns the count of characters.

### Replace Character in String
```bash
expr "apple" : '\(.*\)l' | xargs printf "%s%s"
```
Replaces the character "l" in the string "apple" with the given regular expression pattern.
:::tip
When using the expr command in MacOS, make sure to pay attention to the syntax and the specific options available for the operation you want to perform. Refer to the man page or help documentation for detailed information on how to use expr effectively.
:::

### How do I use expr in MacOS?
To use the expr command in MacOS, execute the following command:
```bash
expr --option <value>
```

### How can I perform mathematical operations with expr in MacOS?
You can use the expr command to perform mathematical operations in MacOS by providing the expression directly in the command. For example:
```bash
expr 5 + 3
```

### How do I concatenate strings using expr in MacOS?
To concatenate strings using the expr command in MacOS, you can use the : operator. Here's an example:
```bash
expr "Hello, " : "Hello, " "World"
```

### How can I extract substrings with expr in MacOS?
To extract substrings using the expr command in MacOS, you can specify the starting position and length of the substring. For example:
```bash
expr substr "example" 3 4
```

### How do I check if two values are equal with expr in MacOS?
To check if two values are equal using the expr command in MacOS, you can use the = operator. Here's an example:
```bash
expr "value1" = "value1"
```

### How can I find the length of a string with expr in MacOS?
To find the length of a string using the expr command in MacOS, you can use the length function. For example:
```bash
expr length "Hello, World"
```

### How do I increment a value by a certain amount with expr in MacOS?
To increment a value by a certain amount using the expr command in MacOS, you can use the + operator. Here's an example:
```bash
expr 5 + 3
```

### How can I handle arithmetic expressions with expr in MacOS?
To handle arithmetic expressions using the expr command in MacOS, make sure to enclose the expression in quotes to avoid shell interpretation. For example:
```bash
expr "5 * (3 + 2)"
```
## Applications of the expr command

- Perform arithmetic operations
- Manipulate strings
- Extract substrings
- Increment or decrement numbers
- Concatenate strings