---
title: tac Linux Command Guide
description: Reverse the contents of a file line by line with the tac command in Linux. Learn how to use tac, options, and practical examples.
---

The tac command in Linux is used to display a file's contents in reverse order, line by line. It is the reverse of the cat command, displaying the last line first and the first line last. By default, tac reads the file line by line from the end to the beginning. It is commonly used with pipes to reverse the output of other commands or to display logs and files in a more convenient format. The tac command also provides options to modify its behavior, such as ignoring line terminators or using a specified delimiter.

## tac Syntax:
```bash
tac [option] [file]
```

## Options:
| Option | Description                      |
|--------|----------------------------------|
| -b     | Attach a string to each line      |
| -r     | Reverses the order of characters |
| -s     | Specifies a separator             |

## Parameters:
| Parameter | Description              |
|-----------|--------------------------|
| file      | The file to be displayed |
:::caution
Exercise caution when using the tac command as it reads the file in reverse order, which may be different from the standard forward chronological view.
:::
## tac Command Samples:
### Reverse lines in a file
```bash
tac file.txt
```
Prints the lines of a file in reverse order.

### Concatenate and reverse multiple files
```bash
tac file1.txt file2.txt
```
Concatenates multiple files and prints the content in reverse order.

### Reverse the output of a command
```bash
ls -l | tac
```
Displays the output of the "ls -l" command in reverse order.

### Reverse a file and save the output to a new file
```bash
tac file.txt > reversed_file.txt
```
Reverses the lines in a file and saves the output to a new file.

### Reverse a file and use a separator between lines
```bash
tac -s , file.txt
```
Prints the lines of a file in reverse order with a comma separator.

### Reverse a file and display line numbers
```bash
tac -n file.txt
```
Displays the lines of a file in reverse order with line numbers.

### Reverse a file and display specific line range
```bash
tac -r 1:10 file.txt
```
Prints lines 1 to 10 of a file in reverse order.
:::tip
When using the `tac` command in Linux, remember that it is the reverse of the `cat` command and prints the file content in reverse order. 
:::

## tac FAQ:
### How do I use tac in Linux?
To use the `tac` command in Linux, execute the following command:
```bash
tac file.txt
```

### Can I specify multiple files with tac in Linux?
Yes, you can specify multiple files with the `tac` command in Linux. Simply provide the file names as arguments.
```bash
tac file1.txt file2.txt
```

### How can I concatenate and reverse the content of files using tac in Linux?
To concatenate and reverse the content of multiple files using `tac` in Linux, you can use it with the cat command as shown below:
```bash
cat file1.txt file2.txt | tac
```

### Can I use tac to display specific lines from a file in reverse order in Linux?
Yes, you can use the `tac` command along with options like `sed` in Linux to display specific lines from a file in reverse order. 
```bash
sed -n '5,10p' file.txt | tac
```

### How can I reverse the content of a file without displaying line numbers in Linux using tac?
To reverse the content of a file without displaying line numbers using `tac` in Linux, you can use the following command:
```bash
tac -s '' file.txt
```

### Is it possible to display the last "n" lines of a file in reverse order with tac in Linux?
Yes, you can display the last "n" lines of a file in reverse order using `tac` in Linux with the `head` command to specify the number of lines.
```bash
tail -n 10 file.txt | tac
```

## Applications of the tac command

- Reverse the lines of a file
- Print the contents of a file in reverse order
- Concatenate and print files in reverse
- Useful for reading log files in chronological order