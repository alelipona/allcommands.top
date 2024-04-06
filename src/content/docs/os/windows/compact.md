---
title: What is COMPACT Windows command?
description: Learn how to use the Windows compact command efficiently to compress files and directories on your system.
---

The Windows compact command is a powerful tool that allows users to compress files and directories on their system, saving disk space and reducing storage usage. By using this command, you can reclaim valuable storage space on your hard drive by compressing files and directories with NTFS compression. This can be especially useful for freeing up space on your system drive or when transferring files over the network. The compact command offers various options to customize the compression process, such as specifying whether to compress subdirectories, setting the compression type, and viewing detailed compression statistics. Additionally, you can use the compact command to decompress previously compressed files and directories if needed. Overall, mastering the Windows compact command can help you better manage your storage space and optimize the performance of your system.

## COMPACT Syntax:
```cmd
compact [option] [parameter]
```

## COMPACT Options:
| Option | Description                     |
|--------|---------------------------------|
| /C     | Compresses the specified file    |
| /U     | Uncompresses the specified file  |
| /S     | Applies the action to the current directory and all subdirectories         |
| /A     | Display files compressed or uncompressed                                      |
| /I     | Ignore errors and continue the operation even if errors are detected         |
| /Q     | Reports only the most essential information related to the operation          |
| /I       | Ignore errors and continue the operation even if errors are detected         |
| /F       | Forces the compression or uncompression operation even if errors are detected |

## Parameters:
| Parameter  | Description                 |
|------------|-----------------------------|
| FileName   | Specifies the file to compress or uncompress   |
| /S         | Applies the action to the current directory and all subdirectories   |
| SubDirName | Specifies the subdirectory to compress or uncompress  |
| /I         | Ignore errors and continue the operation even if errors are detected |
## COMPACT Command Usage Examples:
### Compress a File
```cmd
compact /c file.txt
```
Compresses the specified file "file.txt" to reduce the file size.

### Decompress a File
```cmd
compact /u file.txt
```
Decompresses the specified compressed file "file.txt" to restore the original file size.

### List Compression State of Files
```cmd
compact /s:C:\Folder\ /a
```
Lists the compression state of files in the specified folder "C:\Folder\" including their sizes before and after compression.

### Compact a Directory (including subdirectories)
```cmd
compact /c /s:C:\Folder\
```
Compresses all files in the specified directory "C:\Folder\" and its subdirectories to save disk space.

### Display Help Information
```cmd
compact /?
```
Displays help information about the usage and parameters of the compact command.
:::tip
When using the compact command in CMD, make sure to carefully select the appropriate options to avoid unintended data loss or corruption. Always test the command in a controlled environment before running it on critical files or folders.
:::

### How do I use compact in CMD?
To use the compact command in CMD, execute the following command:
```cmd
compact /c /s:C:\ExampleFolder
```

### Can I use compact to compress specific files in CMD?
Yes, you can use the compact command to compress specific files in CMD. 
```cmd
compact /C C:\ExampleFolder\file.txt
```

### How can I decompress files with compact in CMD?
To decompress files with compact in CMD, you can use the /U parameter.
```cmd
compact /U C:\ExampleFolder\compressed_file.txt
```

### Is it possible to list the compression state of files with compact?
Yes, you can list the compression state of files using the compact command with the /s parameter.
```cmd
compact /s:C:\ExampleFolder
```

### How can I show detailed information about a compressed file with compact in CMD?
You can show detailed information about a compressed file in CMD using the /I parameter.
```cmd
compact /I C:\ExampleFolder\compressed_file.txt
```

### Can I set a compression state for a folder and its subfolders with compact?
Yes, you can set a compression state for a folder and its subfolders using the /S parameter.
```cmd
compact /C /S C:\ExampleFolder
```

### How can I exclude specific files or file types from compression with compact in CMD?
To exclude specific files or file types from compression using compact in CMD, use the /EXE parameter.
```cmd
compact /C /I /EXE:.txt /S C:\ExampleFolder
```
## Applications of the COMPACT Command

- Compress files or directories to save disk space
- View compression status of files
- Decompress files or directories to their original size
- Set compression attributes for files or directories