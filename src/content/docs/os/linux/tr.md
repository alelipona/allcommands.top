---
title: tr command in Linux
description: The Linux tr command is a powerful tool for translating or deleting characters. Learn how to use tr for text manipulation in Linux.
---

The Linux tr command is a versatile utility for translating or deleting characters. It can be used to perform various text manipulation tasks, such as converting lowercase letters to uppercase, replacing specific characters, and deleting unwanted characters. The tr command is often used in conjunction with other commands in shell scripts to automate data processing tasks efficiently. It is a handy tool for anyone working with text data on the Linux command line.

## tr Syntax:
```bash
tr [OPTION]... SET1 [SET2]
```
## Linux tr Options:
| Option | Description                           |
|--------|---------------------------------------|
| -c     | Complement the set                    |
| -d     | Delete characters in SET1             |
| -s     | Squeeze multiple occurrences          |
| -t     | Translate using SET2                  |
| -u     | Transform only characters in SET1     |
| -C     | Complement the range                  |
| -d     | Delete characters in SET1             |
| -s     | Squeeze multiple occurrences          |
| -t     | Translate using SET2                  |
| -u     | Transform only characters in SET1     |

## tr Parameters:
| Parameter | Description                               |
|-----------|-------------------------------------------|
| SET1      | Specify the characters to replace or delete|
| SET2      | Specify the characters to replace with     |

:::caution
Exercise caution while using the tr command as it can alter or delete characters in the input data based on the specified options and parameters.
:::
## How to use tr command:
### Convert lowercase letter to uppercase
```bash
echo "hello world" | tr '[:lower:]' '[:upper:]'
```
This command converts all lowercase letters in the input string to uppercase.

### Remove specific characters from a string
```bash
echo "randomstring123" | tr -d '[:digit:]'
```
This tr command removes all digits from the input string.

### Translate spaces to tabs in a file
```bash
tr ' ' '\t' < input.txt > output.txt
```
This command translates all spaces in the input file to tabs and writes the output to a new file.

### Replace specific characters in a string
```bash
echo "hello" | tr 'el' '123'
```
This tr command replaces 'e' with '1' and 'l' with '2' in the input string.

### Count the number of words in a file
```bash
tr -s ' ' '\n' < input.txt | wc -l
```
This command counts the number of words in a file by converting spaces to newlines and then using wc to count the lines.

### Delete specific characters from a string
```bash
echo "hello123" | tr -d '[:alpha:]'
```
This tr command deletes all alphabetic characters from the input string.

### Remove duplicate characters in a string
```bash
echo "abbcccdddd" | tr -s '[:alpha:]'
```
This command squeezes multiple occurrences of alphabetic characters in the input string to a single occurrence.

### Convert tabs to spaces in a file
```bash
tr '\t' ' ' < input.txt > output.txt
```
This tr command converts all tabs in the input file to spaces and writes the output to a new file.
:::tip
When using the tr command in Linux, make sure to carefully choose the appropriate options and values to achieve the desired text transformations. Testing the command with different inputs can help ensure the expected results.
:::

### How do I use tr in Linux?
To use the tr command in Linux, execute the following command:
```bash
tr --option <value>
```

### How can I translate characters using tr in bash?
You can translate characters using the tr command in bash by specifying the characters to be replaced and the characters to replace them with. 
```bash
echo "hello" | tr 'el' 'xy'
```

### How do I delete characters using tr in Linux?
To delete characters using the tr command in Linux, simply omit the characters to replace with. 
```bash
echo "hello" | tr -d 'l'
```

### How can I convert lowercase to uppercase using tr in bash?
To convert lowercase to uppercase using tr in bash, specify the ranges of characters to be translated. 
```bash
echo "hello" | tr '[:lower:]' '[:upper:]'
```

### How do I squeeze repeated characters using tr in Linux?
To squeeze repeated characters using the tr command in Linux, use the `-s` option. 
```bash
echo "hello" | tr -s 'l'
```

### How can I use tr to complement a set of characters in bash?
You can complement a set of characters using the tr command in bash by using the `-c` option. 
```bash
echo "hello" | tr -c 'l'
```

### How do I truncate a set of characters using tr in Linux?
To truncate a set of characters using the tr command in Linux, only list the characters to keep in the translation set. 
```bash
echo "hello" | tr -d -c 'l'
```

### How can I squeeze consecutive occurrences of a set of characters using tr in bash?
You can squeeze consecutive occurrences of a set of characters using the tr command in bash by combining the `-s` option with the characters to squeeze. 
```bash
echo "hello" | tr -s 'lo'
```

## Applications of the tr command

- Translate characters
- Delete characters
- Squeeze repeated characters
- Convert uppercase to lowercase
- Convert lowercase to uppercase