---
title: CD Windows command
description: Learn how to use the Windows cd command to change directories in the command prompt efficiently.
---

The Windows cd command is a powerful tool used in the command prompt to navigate through different directories on your computer. This command allows you to change the current directory to another directory of your choice quickly and easily. By typing "cd" followed by the desired directory path, you can move between folders, access files, and execute commands in a specific location. The cd command is an essential feature for anyone working in the command line interface, as it helps to streamline file management tasks and improve productivity. It is a fundamental command that every Windows user should be familiar with in order to efficiently navigate their file system.
## CD Syntax:
```cmd
cd [drive:][path]
```

## Windows CD Options:
| Option   | Description                                      |
|----------|--------------------------------------------------|
| /D       | Change current drive in addition to changing folder/path |

## CD Parameters:
| Parameter   | Description                                         |
|-------------|-----------------------------------------------------|
| drive:      | Specifies the drive to change to                    |
| path        | Specifies the directory or path to change to         |

:::caution
Exercise caution when using the cd command as incorrectly specifying the drive or path can result in unintended changes to your file system.
:::
## How to use CD command:
### Change to a Different Directory
```cmd
cd Documents
```
Changes the current directory to "Documents".

### Go up One Directory Level
```cmd
cd ..
```
Moves up one level in the directory structure.

### Move to the Root Directory of a Drive
```cmd
cd /
```
Changes the current directory to the root directory of the drive.

### Navigate to a Specific Folder Path
```cmd
cd C:\Program Files
```
Changes the current directory to the specified folder path.

### Return to the Previous Directory
```cmd
cd -
```
Returns to the previous directory that was accessed.

### List Available Drives
```cmd
cd /
```
Lists all available drives along with the drive letter.

### Access a Shared Network Folder
```cmd
cd \\servername\sharedfolder
```
Navigates to a shared network folder by specifying the server name and the shared folder name.

### Create a New Directory and Move Into It
```cmd
md NewFolder & cd NewFolder
```
Creates a new directory named "NewFolder" and then moves into that directory.
:::tip
To navigate through directories effectively using the cd command, remember to use relative or absolute paths depending on your current location and destination. Additionally, make use of tab completion by typing the first few letters of a directory name and pressing Tab to autocomplete, saving you time and effort.
:::

### How do I use cd in CMD?
To use the cd command in CMD, execute the following command:
```cmd
cd C:\Users
```

### How can I change to a specific directory in CMD?
To change to a specific directory using the cd command, provide the full path to the desired directory as follows:
```cmd
cd C:\Program Files
```

### How do I navigate up one level from my current directory in CMD?
To navigate up one level from your current directory in CMD, use the following command:
```cmd
cd..
```

### How can I switch to a directory located on a different drive in CMD?
To switch to a directory located on a different drive in CMD, use the drive letter followed by a colon and the path to the directory:
```cmd
cd D:\Documents
```

### How do I go back to the previous directory in CMD?
To go back to the previous directory in CMD, use the following command:
```cmd
cd -
```

### How can I change to a directory using a relative path in CMD?
To change to a directory using a relative path in CMD, specify the location relative to your current directory:
```cmd
cd Documents
```

### How do I list the contents of a directory after changing to it in CMD?
To list the contents of a directory after changing to it in CMD, execute the following commands:
```cmd
cd Documents
dir
```

### How do I display the full path of the current directory in CMD?
To display the full path of the current directory in CMD, enter the following command:
```cmd
cd
```

### How can I change to a directory with a space in its name in CMD?
To change to a directory with a space in its name in CMD, enclose the directory name in double quotation marks:
```cmd
cd "Program Files"
```

## Applications of the CD Command

1. Change the current working directory
2. Navigate between different directories
3. Switch between drives
4. Access specific folders or subdirectories
5. Change directories in a batch file