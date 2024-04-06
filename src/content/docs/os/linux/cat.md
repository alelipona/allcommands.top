---
title: Linux cat command
description: The Linux cat command concatenates and displays the content of files. It is a versatile tool that can also create, copy, and concatenate files.
---

The `cat` command in Linux is a versatile utility used to concatenate and display the content of files. It can also be used to create new files, copy the content of existing files, and concatenate multiple files into a single output. `Cat` stands for "concatenate" and is a fundamental tool in the Linux command-line environment. It is commonly used in shell scripts and terminal commands to manipulate and view text files efficiently. The `cat` command accepts various options and arguments to modify its behavior, providing flexibility and control to users.

## cat Syntax:
```bash
cat [option] [file]
```
## Options:
| Option   | Description                                         |
|----------|-----------------------------------------------------|
| -b       | Number non-blank output lines                       |
| -n       | Number all output lines                             |
| -s       | Squeeze multiple adjacent blank lines into one      |
| -E       | Display a $ at the end of each line                 |
| -T       | Display TAB characters as ^I                        |
| -v       | Display non-printing characters as ^ notation       |

## Parameters:
| Parameter   | Description                                         |
|-------------|-----------------------------------------------------|
| [file]      | Specify the file to be displayed, if not provided,  |
|             | cat reads from the standard input (stdin)           |

:::caution
The `cat` command is powerful and can cause issues if used incorrectly. It is essential to be cautious when using it to avoid accidental overwriting or deletion of files.
:::
## cat Usage:
### Display File Contents
```bash
cat file.txt
```
This command displays the contents of the file.txt on the terminal.

### Concatenate Multiple Files
```bash
cat file1.txt file2.txt
```
Concatenates and displays the contents of both file1.txt and file2.txt on the terminal.

### Create a New File
```bash
cat > newfile.txt
Hello, this is a new file.
Press Ctrl+D to save and exit.
```
Creates a new file named newfile.txt and allows you to input text. Press Ctrl+D to save and exit.

### Display Line Numbers
```bash
cat -n file.txt
```
Displays the contents of file.txt with line numbers shown at the beginning of each line.
:::tip
When using the cat command in Linux, remember that it is primarily used for concatenating files, displaying the contents of files, or creating new files. It is a versatile tool that can be combined with other commands to perform various file operations efficiently.
:::

### How can I display the contents of a file using cat in Linux?
To display the contents of a file using the cat command in Linux, run:
```bash
cat filename.txt
```

### How do I combine multiple files and display the output using cat in Linux?
To combine multiple files and display the output using the cat command in Linux, use:
```bash
cat file1.txt file2.txt
```

### How can I create a new file by combining existing files with cat in Linux?
To create a new file by combining existing files using the cat command in Linux, you can do:
```bash
cat file1.txt file2.txt > newfile.txt
```

### How do I number all output lines while displaying file contents with cat in Linux?
To number all output lines while displaying file contents using cat in Linux, execute:
```bash
cat -n filename.txt
```

### How can I display the contents of a file in reverse order with cat in Linux?
To display the contents of a file in reverse order using the cat command in Linux, use:
```bash
tac filename.txt | cat -n
```

### How do I append the content of a file to another file using cat in Linux?
To append the content of one file to another file with the cat command in Linux, run:
```bash
cat file1.txt >> file2.txt
```

## Applications of the cat Command

1. Viewing the contents of a file
2. Concatenating multiple files and displaying the output
3. Creating a new file by combining existing files
4. Appending the contents of one or more files to another file
5. Displaying line numbers while viewing a file
6. Creating a new file and entering text directly from the command line