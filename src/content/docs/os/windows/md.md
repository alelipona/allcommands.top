---
title: MD command in Windows
description: Learn how to create directories in Windows using the MD command. Easily make new folders with this simple command.
---

The MD command in Windows allows users to create new directories or folders within the file system. By simply typing "md" followed by the desired directory name, users can quickly organize their files and data. This command is especially useful for those looking to streamline their file management process and maintain a well-structured storage system.

## MD Syntax:
```cmd
md [drive:] path
```
## Windows MD Options:
| Option  | Description                       |
|---------|-----------------------------------|
| /?      | Displays help for md command.     |

## MD Parameters:
| Parameter  | Description                        |
|------------|------------------------------------|
| [drive:]   | Specifies the drive letter followed by a colon. This is optional. |
| path       | Specifies the directory path to create. |  

:::caution
Ensure the specified path exists and that you have the necessary permissions to create directories in the specified location.
:::
## How to use MD command:

### Create a New Directory
```cmd
md Documents
```
Creates a new directory named "Documents".

### Create Multiple Directories at Once
```cmd
md Pictures Videos Music
```
Creates multiple directories named "Pictures", "Videos", and "Music".

### Create Nested Directories
```cmd
md Documents\Work
```
Creates a directory named "Work" inside the "Documents" directory.

### Create Directory with Spaces in Name
```cmd
md "Vacation Photos"
```
Creates a directory named "Vacation Photos".

### Create Directory on a Different Drive
```cmd
md D:\Backup
```
Creates a directory named "Backup" on drive D:.

### Create Hidden Directory
```cmd
md Documents +h
```
Creates a hidden directory named "Documents".

### Create Read-only Directory
```cmd
md Videos +r
```
Creates a read-only directory named "Videos".

### Create Directory with Specific Permissions
```cmd
md Music +a "John:R"
```
Creates a directory named "Music" with permission for user John to read.
:::tip
When using the `md` command in Windows CMD, make sure to provide the necessary options and values correctly to create directories as intended.
:::

### How do I use md in Windows?
To use the md command in Windows, execute the following command:
```cmd
md C:\Users\MyUser\Documents\NewFolder
```

### What is the purpose of md in CMD?
The `md` command in CMD is used to create a new directory or folder.

### How can I create multiple directories at once with md?
To create multiple directories at once using the md command, you can specify the paths separated by spaces like this:
```cmd
md C:\Users\MyUser\Documents\Folder1 C:\Users\MyUser\Documents\Folder2
```

### Can I create a nested directory structure with md?
Yes, you can create a nested directory structure with the md command by specifying the full path including the parent directories that do not yet exist. For example:
```cmd
md C:\Users\MyUser\Documents\ParentFolder\ChildFolder
```

### How do I create a directory with a specific name using md?
To create a directory with a specific name using the md command, specify the desired directory name in the path like this:
```cmd
md C:\Users\MyUser\Documents\SpecificFolderName
```

### Is it possible to create hidden directories with md?
Yes, you can create hidden directories with the md command by setting the attributes for the directory. For example, to create a hidden directory named "HiddenFolder", you can use:
```cmd
md C:\Users\MyUser\Documents\HiddenFolder
attrib +h C:\Users\MyUser\Documents\HiddenFolder
```

### How can I create directories using relative paths with md?
To create directories using relative paths with the md command, navigate to the desired parent directory first and then specify the relative path to create the new directory. For example:
```cmd
cd C:\Users\MyUser\Documents
md NewFolder
```

### What should I do if the md command fails to create a directory?
If the md command fails to create a directory, ensure that you have the necessary permissions to create directories in the specified location. You can also check if the path provided is valid and correct any syntax errors in the command.


## Applications of the MD Command

1. Creating new directories/folders
2. Making nested directories
3. Specifying directory paths
4. Creating multiple directories at once
5. Setting directory attributes