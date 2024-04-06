---
title: DEL Windows command
description: Learn how to efficiently delete files and directories using the DEL command in Windows.
---

The Windows DEL command allows users to delete specific files or directories from the command line interface. By utilizing different options and parameters, such as specifying the file path or using wildcards, users can effectively manage their files and free up disk space. It is important to exercise caution while using the DEL command to avoid accidentally deleting important files or system directories. Additionally, users should be aware of the potential permanence of deleting files using this command, as they may not be recoverable once deleted.

## DEL Syntax:
```cmd
del [option] [parameter]
```
## Windows DEL Options:
| Option   | Description                          |
|----------|--------------------------------------|
| /P       | Prompts for confirmation before deleting each file. |
| /F       | Force deleting of read-only files.   |
| /S       | Delete specified files from all subdirectories. |
| /Q       | Quiet mode, do not ask if ok to delete on global wildcard. |
| /A       | Selects files to delete based on attributes. |
| /A:attr  | Selects files to delete based on specified attributes. |
| /S       | Delete specified files from all subdirectories. |

## DEL Parameters:
| Parameter | Description                       |
|-----------|-----------------------------------|
| filename  | Specifies one or more files or directories to delete. Wildcards can be used.|
| folder    | Specifies a directory to delete.|
| drive:    | Specifies the drive containing the file(s) to delete. |

:::caution
Exercise caution when using the `del` command as it permanently deletes files and directories without moving them to the Recycle Bin. Make sure you are certain about the files you want to delete before executing the command.
:::
## How to use DEL command:
### Delete a Single File
```cmd
del filename.txt
```
Deletes the file "filename.txt" from the current directory.

### Delete All Files with a Specific Extension
```cmd
del *.txt
```
Deletes all files with the ".txt" extension from the current directory.

### Delete a File from a Specific Directory
```cmd
del C:\Folder\filename.txt
```
Deletes the file "filename.txt" from the directory "C:\Folder".

### Delete All Files in a Directory
```cmd
del /S /Q C:\Folder\*
```
Recursively deletes all files in the directory "C:\Folder" without prompting for confirmation.

### Delete a File by Using Wildcards
```cmd
del file*.txt
```
Deletes all files starting with "file" and having the ".txt" extension from the current directory.

### Delete Files Older than a Specific Date
```cmd
forfiles /p "C:\Folder" /s /m *.* /d -30 /c "cmd /c del @file"
```
Deletes all files in "C:\Folder" that are older than 30 days.

### Delete Read-Only Files
```cmd
del /A:R filename.txt
```
Deletes the read-only file "filename.txt" after removing its read-only attribute.

### Delete Files Quietly
```cmd
del /Q filename.txt
```
Deletes the file "filename.txt" without confirmation prompts.
:::tip
Remember to be cautious when using the del command in CMD, as it permanently deletes files and folders without sending them to the Recycle Bin. Double-check the path and file name before executing the command to avoid accidental data loss.
:::

### How do I use del in CMD?
To use the del command in CMD, execute the following command:
```cmd
del file.txt
```

### What is the syntax for deleting files with a specific extension using del in CMD?
To delete files with a specific extension using del in CMD, use the following command:
```cmd
del *.txt
```

### How can I use the del command in CMD to delete a folder?
To delete a folder with the del command in CMD, use the following command:
```cmd
del /s /q foldername
```

### How do I force delete read-only files with del in CMD?
To force delete read-only files using the del command in CMD, use the following command:
```cmd
del /f filename
```

### Can I delete multiple files at once with the del command in CMD?
Yes, you can delete multiple files at once with the del command in CMD using wildcards. For example:
```cmd
del file1.txt file2.txt
```

### How can I delete files older than a specific date using the del command in CMD?
To delete files older than a specific date with the del command in CMD, use the following command:
```cmd
forfiles /p "C:\path" /s /d -30 /c "cmd /c del @file"
```

### What is the difference between del and erase in CMD?
In CMD, del and erase commands are synonyms and perform the same function of deleting files. Both commands can be used interchangeably to delete files in Windows.

### How do I delete all files in a directory except for one specific file using the del command in CMD?
To delete all files in a directory except for one specific file with the del command in CMD, use the following command:
```cmd
del /q /s /a:-h-r-s *.* & del /q specificfile.txt
```
## Applications of the DEL Command

1. Deleting one or more files.
2. Deleting folders and their contents.
3. Deleting read-only files.
4. Deleting files using wildcards.
5. Deleting files based on attributes.
6. Deleting files interactively.
7. Deleting files silently without confirmation.
8. Deleting files from a specific directory.