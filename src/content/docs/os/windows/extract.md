---
title: EXTRACT Windows Command Guide
description: Learn how to use the Windows extract command efficiently to unzip files with ease.
---

The Windows extract command is a built-in tool that allows you to extract files from compressed folders or files. It is a convenient way to unzip files quickly and efficiently without the need for third-party software. By using the extract command in the command prompt, you can easily decompress files and access their contents. This guide will walk you through the different options and parameters available with the extract command to help you make the most out of this useful tool on Windows.

## EXTRACT Syntax:
```cmd
expand [source file] -F:[destination folder]
```

## Options:
| Option | Description                               |
|--------|-------------------------------------------|
| -F:    | Specify the destination folder for extraction. |

## Parameters:
| Parameter     | Description                                   |
|---------------|-----------------------------------------------|
| source file   | The file to be extracted.                     |
| destination folder | The folder where the file will be extracted to. |

:::caution
Caution: Incorrect usage of the extract command may result in overwriting existing files or incorrect extraction. Make sure to double-check the source and destination paths before executing the command.
:::
## EXTRACT Command Samples:
### Extract a ZIP file
```cmd
extract example.zip
```
Extracts the contents of the "example.zip" file in the current directory.

### Extract a ZIP file to a Specific Directory
```cmd
extract example.zip -d C:\Destination\
```
Extracts the contents of the "example.zip" file to the specified destination directory.

### Extract a Specific File from a ZIP Archive
```cmd
extract example.zip -o specific_file.txt
```
Extracts only the "specific_file.txt" from the "example.zip" archive.

### Extract a CAB file
```cmd
extract example.cab
```
Extracts the contents of the "example.cab" file in the current directory.

### Extract a RAR file
```cmd
extract example.rar
```
Extracts the contents of the "example.rar" file in the current directory.

### Extract an ISO file
```cmd
extract example.iso
```
Extracts the contents of the "example.iso" file in the current directory.

### Extract All Files Recursively from a ZIP Archive
```cmd
extract example.zip -e
```
Extracts all files recursively from the "example.zip" archive.
:::tip
When using the Windows CMD extract command, make sure to carefully specify the correct options and values to extract the desired files or content efficiently.
:::

## EXTRACT FAQ:
### How do I use extract in Windows?
To use the extract command in Windows, execute the following command:
```cmd
extract --option <value>
```

### What is the purpose of the Windows CMD extract command?
The extract command in Windows is used to extract the contents of a compressed file, such as a .cab or .msu file.

### How can I extract a specific file using the Windows extract command?
To extract a specific file using the extract command in Windows, use the following syntax:
```cmd
extract /A source.cab target.cab file.txt
```

### Can I extract multiple files simultaneously with the Windows CMD extract command?
Yes, you can extract multiple files simultaneously using the extract command in Windows by specifying the files after the target location. Here's an example:
```cmd
extract /A source.cab target.cab file1.txt file2.txt
```

### How to extract files from a specific directory using the Windows extract command?
To extract files from a specific directory using the extract command in Windows, you can provide the directory path along with the file name. Here's an example:
```cmd
extract /A source.cab target.cab directory\file.txt
```

### Is it possible to extract files with their full paths using the Windows CMD extract command?
Yes, you can extract files along with their full paths using the extract command in Windows. Simply specify the full path of the file during extraction. Here's an example:
```cmd
extract /A source.cab target.cab C:\directory\subdirectory\file.txt
```
## Applications of the EXTRACT Command

- Extract files from a compressed folder
- View the contents of a compressed folder
- Extract specific files from a compressed folder
- Extract files from a compressed folder to a specific location