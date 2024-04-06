---
title: MKDIR Windows Command Guide
description: Get to know how to create directories with the Windows mkdir command in this comprehensive guide.
---

The Windows mkdir command allows users to easily create directories in the Windows operating system. It is a simple yet powerful command that can be used in the Command Prompt or PowerShell to organize files and folders efficiently. With mkdir, you can create multiple directories at once, set permissions, and even create nested directories. Mastering the mkdir command can help streamline your file management tasks and keep your computer well-organized.

## MKDIR Syntax:
```cmd
mkdir [Option] [Directory]
```
## Options:
| Option | Description                                    |
|--------|------------------------------------------------|
| /A     | Creates a directory with specified attributes. |
| /D     | Creates a directory if it does not already exist. |
| /S     | Creates specified directory and all parent directories. |
| /V     | Verbose mode, displays detailed information.     |
| /Q     | Quiet mode, do not display any messages.         |

## Parameters:
| Parameter | Description                                   |
|-----------|-----------------------------------------------|
| Directory | Specifies the name and location of the directory to be created. | 

:::caution
Exercise caution when using the mkdir command to create directories, as it cannot be undone easily and may overwrite existing directories if not used correctly.
:::
## MKDIR Command Samples:
### Create a New Directory
```cmd
mkdir NewFolder
```
Creates a new directory named "NewFolder" in the current location.

### Create Multiple Directories
```cmd
mkdir Folder1 Folder2 Folder3
```
Creates multiple directories named "Folder1", "Folder2", and "Folder3" in the current location.

### Create a Nested Directory
```cmd
mkdir ParentFolder\ChildFolder
```
Creates a nested directory structure where "ChildFolder" is within "ParentFolder".

### Create a Directory with a Space in the Name
```cmd
mkdir "Directory with Space"
```
Creates a directory with a space in the name, enclosed in double quotation marks.

### Create a Directory on a Specific Drive
```cmd
mkdir D:\NewFolder
```
Creates a new directory named "NewFolder" on the D: drive.

### Create a Directory with Relative Path
```cmd
mkdir ..\RelativeFolder
```
Creates a new directory named "RelativeFolder" one level up in the directory structure.

### Create a Hidden Directory
```cmd
mkdir .hidden-folder
```
Creates a directory with a name starting with a dot, making it a hidden directory.
:::tip
When using the mkdir command in Windows CMD, make sure to provide a valid directory path as an argument. You can also use options like -p to create parent directories if they do not exist already.
:::

## MKDIR FAQ:
 
### How do I use mkdir in Windows?
To use the mkdir command in Windows, execute the following command:
```cmd
mkdir new_directory
```

### Can I create multiple directories at once with mkdir in Windows?
Yes, you can create multiple directories simultaneously with mkdir in Windows by specifying multiple directory names as arguments.
```cmd
mkdir dir1 dir2 dir3
```

### How can I create a directory with spaces in the name using mkdir in Windows?
To create a directory with spaces in the name using mkdir in Windows, enclose the directory name in double quotes.
```cmd
mkdir "directory with spaces"
```

### How can I create a directory within a specific path using mkdir in Windows?
You can specify the path where you want to create a directory using mkdir in Windows by providing the full path or a relative path.
```cmd
mkdir C:\Path\to\create\dir
```

### Can I create nested directories with a single command using mkdir in Windows?
Yes, you can create nested directories with a single command using the -p option with mkdir in Windows.
```cmd
mkdir -p parent_directory\child_directory
```

### How can I view a list of available options for the mkdir command in Windows?
To view a list of available options for the mkdir command in Windows, you can use the /? option.
```cmd
mkdir /?
```
## Applications of the MKDIR Command

- Create a new directory
- Create multiple directories at once with specified names
- Create nested directories (directories within directories)
- Create directories with specific permissions/attributes
- Create directories at specified paths