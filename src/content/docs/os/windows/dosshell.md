---
title: DOSSHELL Windows command
description: Learn how to use the DOSSHELL command in Windows to manage files and directories from the command line efficiently.
---

The DOSSHELL command is a powerful tool in Windows that allows users to manage files and directories directly from the command line. With DOSSHELL, you can navigate through folders, create, delete, and modify files, as well as perform various operations on directories. This command is particularly useful for users who prefer using the command line interface to manage their files and folders efficiently. By mastering the DOSSHELL command, you can streamline your file management tasks and improve your overall productivity when working with Windows operating systems.
## DOSSHELL Syntax:
```cmd
dosshell [drive:][path] [/switch]
```
## Windows DOSSHELL Options:
| Option  | Description                      |
|---------|----------------------------------|
| /B      | Displays the screen in black and white.         |
| /C      | Disables the Clock display.            |
| /D      | Disables the display refresh.          |
| /F      | Enables the Full-screen mode.            |
| /H      | Enables the Help menu.            |
| /M      | Disables the Menu bar.          |
| /N      | Disables the status bar.         |
| /T      | Disables the Title bar.         |

## DOSSHELL Parameters:
| Parameter | Description                   |
|-----------|-------------------------------|
| [drive:]  | Specifies the drive letter of the disk you want to access. |
| [path]    | Specifies the directory you want to open in DOSSHELL.     |
| /switch   | Specifies a specific option to apply when opening DOSSHELL.|

:::caution
Exercise caution while using the dosshell command as it directly interacts with the system files and can potentially alter or delete important data. Make sure to double-check the parameters and options you provide to avoid unintended consequences.
:::
## How to use DOSSHELL command:
### List all files and directories in the current directory
```cmd
dosshell /l
```
Lists all files and directories in the current directory.

### Change the directory to a specific directory
```cmd
dosshell /c C:\Windows
```
Changes the directory to "C:\Windows".

### Launch DOSSHELL with a specific configuration file
```cmd
dosshell /r myconfig.cnf
```
Launches DOSSHELL with the specified configuration file "myconfig.cnf".

### Open DOSSHELL in a specific display mode
```cmd
dosshell /m 2
```
Opens DOSSHELL in display mode 2.

### Run a specific batch script in DOSSHELL
```cmd
dosshell /b myscript.bat
```
Runs the batch script "myscript.bat" in DOSSHELL.

### Customize DOSSHELL colors
```cmd
dosshell /f 3
```
Customizes DOSSHELL colors with the color scheme 3.

### Print information about the DOSSHELL command
```cmd
dosshell /?
```
Displays information about the parameters and usage of the DOSSHELL command.

### Exit DOSSHELL
```cmd
dosshell /x
```
Exits the DOSSHELL program.
:::tip
When using the dosshell command in CMD, make sure to carefully follow the syntax and options specified in the examples provided to avoid any errors or unexpected results.
:::

### How do I use dosshell in CMD?
To use the dosshell command in CMD, execute the following command:
```cmd
dosshell --option <value>
```

### What are the main options available with dosshell in CMD?
The dosshell command in CMD offers several options for different functionalities. You can explore these options by running:
```cmd
dosshell --help
```

### How can I navigate directories using dosshell in CMD?
To navigate directories using dosshell, you can use the "cd" command followed by the directory path. For example:
```cmd
dosshell cd C:\FolderName
```

### How do I list the contents of a directory with dosshell in CMD?
To list the contents of a directory in dosshell, you can use the "dir" command. Here's an example:
```cmd
dosshell dir
```

### Can I create a new directory with dosshell in CMD?
Yes, you can create a new directory using dosshell by using the "md" command. For instance:
```cmd
dosshell md NewFolder
```

### How can I delete a file in dosshell with CMD?
To delete a file using dosshell in CMD, you can use the "del" command followed by the file name. For example:
```cmd
dosshell del FileName.txt
```

### Is it possible to copy files with dosshell in CMD?
Yes, you can copy files using dosshell in CMD by using the "copy" command. Here is an example:
```cmd
dosshell copy File1.txt C:\DestinationFolder
```

### How do I move a file to another directory with dosshell in CMD?
To move a file to another directory using dosshell in CMD, you can use the "move" command. For instance:
```cmd
dosshell move File1.txt C:\DestinationFolder
```

### Can dosshell in CMD be used to rename files?
Yes, you can rename files using dosshell in CMD with the "ren" command. Here's an example:
```cmd
dosshell ren OldFileName.txt NewFileName.txt
```

## Applications of the DOSSHELL Command

1. Managing files and directories
2. Running DOS commands and utilities
3. Customizing the DOS environment
4. Controlling the execution of other programs