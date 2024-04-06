---
title: Windows EDLIN command
description: Learn how to use the Windows EDLIN command to create and edit text files directly from the command line. 
---

The Windows EDLIN command is a simple text editor used to create and edit text files directly from the command line interface. This command allows users to quickly make changes to files without the need for a graphical interface. With EDLIN, users can insert, delete, and modify text within a file using a series of commands. While not as user-friendly as modern text editors, EDLIN provides a lightweight and efficient way to work with text files in a command-line environment.
## EDLIN Syntax:
```cmd
edlin [Drive:][Path] FileName
```
## Options:
| Option | Description                   |
|--------|-------------------------------|
| /c     | Clears the screen before editing the file |
| /q     | Suppresses the display of filenames while editing multiple files |
| /p     | Enables color highlighting of various parts of the screen |
| /s     | Overrides the default display of filenames for multiple file editing |

## Parameters:
| Parameter | Description            |
|-----------|------------------------|
| [Drive:]  | Specifies the drive letter |
| [Path]    | Specifies the path to the file |
| FileName  | Specifies the name of the file to open |

:::caution
Exercise caution when using the edlin command as it is a basic line editor without a graphical interface, and it is important to be familiar with its command structure to avoid unintended changes to files.
:::
## EDLIN Usage:
### Create a New Text File
```cmd
edlin newfile.txt
```
Opens the edlin text editor to create and edit a new text file named "newfile.txt".

### Insert Text Into a File
```cmd
edlin existingfile.txt
```
Opens an existing file named "existingfile.txt" in the edlin text editor to insert or modify text.

### Save Changes and Exit
```cmd
edlin -s existingfile.txt
```
Saves changes made to the file named "existingfile.txt" using edlin and exits the text editor.

### Display Line Numbers
```cmd
edlin -n existingfile.txt
```
Opens the file named "existingfile.txt" in the edlin text editor and displays line numbers for each line of text.
:::tip
When using the edlin command in Windows, remember that it is a line-oriented text editor, which means you need to navigate and make changes on a line-by-line basis. Use the available options and commands carefully to edit your text files effectively.
:::

## Common Questions on EDLIN Usage:

### How do I use edlin in Windows?
To use the edlin command in Windows, execute the following command:
```cmd
edlin file.txt
```

### What is the purpose of edlin in Windows CMD?
The edlin command in Windows CMD is used as a line-oriented text editor to create or modify text files directly from the command line.

### How do I display a specific line in a text file using edlin?
You can display a specific line in a text file using edlin by specifying the line number when opening the file. For example:
```cmd
edlin file.txt:5
```

### Can I copy content from one file to another using edlin in Windows?
Yes, you can copy content from one file to another using edlin by utilizing the insert command along with the read command. Here is an example:
```cmd
edlin file1.txt
r file2.txt
w newfile.txt
```

### How can I save changes and exit edlin in Windows CMD?
To save changes and exit edlin in Windows CMD, use the write and quit commands. Here's how you can do it:
```cmd
edlin file.txt
w
q
```

### Is it possible to delete a specific line from a text file using edlin?
Yes, you can delete a specific line from a text file using edlin by referencing the line number along with the delete command. For instance:
```cmd
edlin file.txt
d5
```

### Can I navigate between lines efficiently while using edlin in Windows?
You can navigate between lines efficiently while using edlin in Windows by utilizing commands like next, previous, and go-to. Here is an example:
```cmd
edlin file.txt
n
p
g10
```

## Applications of the EDLIN Command

1. Creating or editing text files
2. Manipulating text within files
3. Viewing contents of text files
4. Searching for specific text within files
5. Copying and moving text within files