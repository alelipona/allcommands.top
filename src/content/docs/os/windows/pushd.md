---
title: What is PUSHD Windows command?
description: Learn about the Windows pushd command, its functionality, and how to use it for navigating directories efficiently.
---

The Windows pushd command is a built-in command that allows you to change the current directory quickly and efficiently in the Command Prompt or batch files. It saves the current directory for later retrieval and then changes to a new specified directory.

## PUSHD Syntax:
```cmd
pushd [path]
```
## PUSHD Options:

| Option | Description                              |
|--------|------------------------------------------|
| /?     | Displays help for the pushd command.      |

:::caution
Avoid using the pushd command on network locations as it may cause unexpected behavior.
:::

## Parameters:
| Parameter | Description                                            |
|-----------|--------------------------------------------------------|
| path      | Specifies the directory to change to and store for use |
## PUSHD Command Usage Examples:
### Change to a Different Directory
```cmd
pushd C:\Users\John\Documents
```
Changes the current directory to "C:\Users\John\Documents".

### Save Current Directory and Change to a Different One
```cmd
pushd D:\Projects
```
Saves the current directory and changes to "D:\Projects".

### List Directory Stack
```cmd
pushd
```
Displays the directory stack, showing the saved directories.

### Change Directory Using Directory Stack Index
```cmd
pushd +2
```
Switches the current directory to the directory at index 2 in the directory stack.

### Return to Previous Directory
```cmd
pushd -
```
Returns to the previous directory in the stack.
:::tip
Remember that the pushd command in Windows CMD is used to change the current directory and also save the current directory for later use with the popd command. This can be especially useful when working with multiple directories within a script or batch file.
:::

### How do I use pushd in Windows?
To use the pushd command in CMD, execute the following command:
```cmd
pushd C:\Users\Example\Documents
```

### What is the purpose of pushd in Windows CMD?
The pushd command in Windows CMD is used to change the current directory and push the previous current directory onto a directory stack.

### How can I navigate to a specific directory using pushd?
You can navigate to a specific directory using pushd by specifying the path to the desired directory when running the command. For example:
```cmd
pushd D:\Projects
```

### Can I use pushd to switch between directories in Windows CMD?
Yes, you can use pushd to switch between directories in Windows CMD. Each time you use pushd, it will change the current directory to the specified path.

### How do I view the directory stack after using pushd?
To view the directory stack after using pushd in Windows CMD, you can use the `dirs` command. This will display the list of directories stored in the stack.

### How do I clear the directory stack created by pushd?
To clear the directory stack created by pushd in Windows CMD, you can use the `popd` command. This will remove directories from the stack and change the current directory back to the previous one.

### Is it possible to use pushd with relative paths in Windows CMD?
Yes, you can use pushd with relative paths in Windows CMD. For example:
```cmd
pushd ..\Projects
```

### How can I use pushd and popd together in a batch script?
You can use pushd and popd together in a batch script to navigate between directories and maintain a directory stack. Here's an example:
```cmd
pushd C:\Users\Example\Documents
REM Do some operations in this directory
popd
REM Now back to the previous directory
```

## Applications of the PUSHD Command
- To change the current directory and push it onto the directory stack.