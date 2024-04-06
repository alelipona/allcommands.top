---
title: ERASE command in Windows
description: The ERASE command in Windows allows users to delete files and directories permanently. It helps free up disk space and ensure privacy by securely removing sensitive data.
---

The ERASE command in Windows is a powerful tool that allows users to delete files and directories permanently from their system. This command helps free up disk space by removing unwanted data and can also be used to ensure privacy by securely erasing sensitive files. The ERASE command is a quick and efficient way to clean up your computer and remove any unnecessary clutter.

## ERASE Syntax:
```cmd
erase [drive:][path]filename
```

## Windows ERASE Options:
| Option | Description                           |
|--------|---------------------------------------|
| /P     | Overwrite every sector with 0 (zero) |
| /F     | Force deletion of read-only files     |

## ERASE Parameters:
| Parameter | Description                                       |
|-----------|---------------------------------------------------|
| drive:    | Specifies the drive to erase files from           |
| path      | Specifies the path of the file to be erased       |
| filename  | Specifies the name of the file to be erased       |

:::caution
Caution: These commands will permanently delete files and cannot be undone. Use with caution and make sure you have the correct path and file specified.
:::
## How to use ERASE command:
### Erase a Single File
```cmd
erase file.txt
```
Deletes the file named "file.txt" in the current directory.

### Erase Multiple Files
```cmd
erase file1.txt file2.docx file3.xlsx
```
Deletes multiple files ("file1.txt", "file2.docx", "file3.xlsx") in the current directory.

### Erase All Files in a Directory
```cmd
erase *.*
```
Deletes all files in the current directory.

### Erase Files in a Subdirectory
```cmd
erase /s /q directory\*.*
```
Recursively deletes all files in the specified subdirectory and its subdirectories silently.

### Erase Files Forcefully
```cmd
erase /f filename.txt
```
Forces deletion of a file named "filename.txt" without asking for confirmation.

### Erase Files with Long Filenames
```cmd
erase "\\?\C:\very_long_file_name_1234567890.txt"
```
Deletes a file with a long filename by using the extended path syntax.

### Erase Read-Only Files
```cmd
erase /f /a:r readonlyfile.txt
```
Forces deletion of a read-only file named "readonlyfile.txt" without confirmation.

### Erase Empty Directories
```cmd
erase /s /q /f directoryname
```
Removes an empty directory named "directoryname" and any empty subdirectories silently.
:::tip
When using the erase command in Windows CMD, ensure that you double-check the folder or file path you are specifying to avoid unintentional data loss. Always make sure to back up any important files before executing the erase command.
:::

### How do I use erase in Windows?
To use the erase command in Windows, execute the following command:
```cmd
erase C:\example\file.txt
```

### What is the purpose of the erase command in CMD?
The erase command in CMD is used to delete files or folders from a specified location on a Windows system.
```cmd
erase C:\example\folder /s
```

### Is it possible to recover data after using the erase command in Windows?
No, the erase command in Windows permanently deletes files and folders, making data recovery impossible. It is crucial to double-check before executing the command.
```cmd
erase D:\important\file.docx
```

### How can I delete multiple files using the erase command in CMD?
You can delete multiple files using the erase command in CMD by specifying the files separated by spaces.
```cmd
erase C:\example\file1.txt C:\example\file2.txt
```

### Can the erase command in Windows be used to delete system files?
Yes, the erase command in Windows can be used to delete system files, but it requires administrative privileges to do so.
```cmd
erase C:\Windows\System32\file.dll
```

### What happens if I use the erase command on a read-only file or folder?
If you attempt to use the erase command on a read-only file or folder, you will receive an error message indicating that the operation is not permitted.
```cmd
erase E:\example\read-only-file.txt
```

### How can I permanently delete a directory with all its contents using the erase command?
To permanently delete a directory with all its contents, you can use the /s flag with the erase command in CMD.
```cmd
erase D:\example\folder /s
```

### Is it possible to use wildcards with the erase command in Windows?
Yes, you can use wildcards with the erase command in Windows to delete multiple files based on a pattern matching criteria.
```cmd
erase C:\example\*.txt
```

### How can I list the files in a directory before using the erase command to avoid accidental deletions?
Before using the erase command, you can list the files in a directory by using the dir command to ensure you are deleting the correct files.
```cmd
dir C:\example
```

## Applications of the ERASE Command

- To delete one or more files.
- To delete directories and all their contents.
- To free up disk space by removing unwanted or temporary files.
- To clean up the system and improve performance.
- To remove sensitive or confidential information before selling or disposing of a computer.