---
title: What is REN Windows command?
description: Renaming files in Windows using the REN command allows you to efficiently change the name of a file or group of files in the command prompt.
---

The Windows REN command is used to rename files or directories in the command prompt. By using this command, you can quickly and easily change the name of a file or group of files without having to open a graphical user interface. This can be especially useful when needing to rename multiple files at once or when automating tasks through scripts.

## REN Syntax:
```cmd
ren [option] [parameter] [newname]
```

## REN Options:
| Option | Description                           |
|--------|---------------------------------------|
| /?     | Displays help at the command prompt.  |

:::caution
Exercise caution when using the ren command as renaming files or directories incorrectly can cause data loss or system errors.
:::

## Parameters:
| Parameter | Description                                                      |
|-----------|------------------------------------------------------------------|
| [option]  | Specifies command-line options that modify the behavior of the command. This is optional.       |
| [parameter] | Specifies the file or directory that you want to rename.         |
| [newname] | Specifies the new name for the file or directory.               |
## REN Command Usage Examples:
### Rename a File
```cmd
ren file.txt newfile.txt
```
Rename the file "file.txt" to "newfile.txt".

### Rename a Directory
```cmd
ren oldfolder newfolder
```
Rename the directory "oldfolder" to "newfolder".

### Rename File with Path
```cmd
ren "C:\Folder\file.exe" newfile.exe
```
Rename the file "file.exe" located in the "C:\Folder" directory to "newfile.exe".

### Rename File with Wildcard
```cmd
ren *.txt newfile.txt
```
Rename all files with the extension ".txt" to "newfile.txt".

### Rename File with Different Extension
```cmd
ren oldfile.txt newfile.exe
```
Change the extension of the file "oldfile.txt" to ".exe".
:::tip
Remember that the `ren` command is used to rename files or directories in Windows Command Prompt. Make sure to use the correct syntax and provide the old name and new name of the file or directory.
:::

### How do I use ren in Windows?
To use the ren command in CMD, execute the following command:
```cmd
ren "old_filename.txt" "new_filename.txt"
```

### How to rename a directory using ren in Windows?
To rename a directory using the ren command, follow this syntax:
```cmd
ren "old_directory" "new_directory"
```

### Can I use ren to rename multiple files at once in Windows?
Yes, you can rename multiple files at once using the ren command with wildcards. Here's an example:
```cmd
ren *.txt *.doc
```

### How to force overwrite an existing file when using ren in Windows?
To force overwrite an existing file with the same name when renaming, use the following command:
```cmd
ren /-Y "old_filename.txt" "new_filename.txt"
```

### Is it possible to include a path in the ren command for files in different directories?
You can specify a path in the ren command to rename files in different directories. Here's an example:
```cmd
ren "C:\Folder\old_filename.txt" "D:\NewFolder\new_filename.txt"
```

### How to rename a file on a network drive using ren in Windows?
When renaming a file on a network drive with the ren command, ensure you have the necessary permissions and use the correct syntax:
```cmd
ren "\\Server\Share\old_filename.txt" "new_filename.txt"
```

### How to revert a file back to its original name after using the ren command in Windows?
If you need to revert a file back to its original name after using ren, simply swap the old and new names in the command:
```cmd
ren "new_filename.txt" "old_filename.txt"
```

### Can I use wildcards to rename files with specific patterns using ren in Windows?
Yes, you can use wildcards to rename files based on specific patterns. Here's an example:
```cmd
ren "prefix_*.txt" "new_prefix_*.txt"
```
## Applications of the REN Command

- Renaming files
- Renaming directories/folders