---
title: file command in Linux
description: Learn how to use the file command in Linux to determine the file type and encoding of a file. Identify whether a file is a text file, binary file, or compressed file with this useful command.
---

The Linux file command is used to determine the file type and encoding of a specified file. It can identify whether a file is a text file, binary file, or a compressed file. By running the file command followed by the name of the file, users can quickly obtain information about the file type. This can be helpful in various scenarios, such as when working with unknown files or needing to verify the format of a file. The file command is a versatile tool for understanding the characteristics of files on a Linux system.
## file Syntax:
```bash
file [option] [parameter]
```

## Linux file Options:
| Option | Description |
| ------ | ----------- |
| -b     | Do not print anything except the type |
| -d     | Show just the device number |
| -i     | Show the inode number |
| -k     | Show the block counts |
| -l     | Show a symbolic link |
| -L     | Follow symbolic links |
| -n     | Show the file's numeric ID |
| -s     | Show the size in bytes |
| -t     | Show the file type |
| -z     | Show the last timezone change |

## file Parameters:
| Parameter | Description |
| --------- | ----------- |
| file      | The file(s) to determine the type of |

:::caution
Exercise caution when using the 'file' command with the -L option, as it may lead to following symbolic links and potentially showing unexpected results or behavior.
:::
## How to use file command:
### Check File Type
```bash
file example.txt
```
Determine the type of file "example.txt".

### Check Multiple Files
```bash
file file1 file2 file3
```
Check the file type of multiple files: "file1", "file2", and "file3".

### Display File Information
```bash
file -s example.jpg
```
Display summarized file information for "example.jpg".

### Check All Files in a Directory
```bash
file /path/to/directory/*
```
Check the file type of all files in a specific directory.

### Recursive File Type Check
```bash
file -r /path/to/directory
```
Recursively display the file type of all files in a directory.

### Display MIME Type
```bash
file -i example.pdf
```
Show only the MIME type of the file "example.pdf".

### Check File Type by Extension
```bash
file --mime-type example.docx
```
Check the file type of "example.docx" based on its extension.

### File Type of a Remote File
```bash
file -i https://example.com/file.zip
```
Determine the MIME type of a remote file "https://example.com/file.zip".
:::tip
When using the `file` command in Linux, make sure to familiarize yourself with various options available to customize the output and get detailed information about the files you are analyzing.
:::

### How do I use file in Linux?
To use the file command in Linux, execute the following command:
```bash
file --option <value>
```

### What is the purpose of the file command in bash?
The file command in bash is used to determine the type of a file.

### How can I get detailed information about a file using file in Linux?
To get detailed information about a file in Linux, you can use the following command:
```bash
file -i filename
```

### How to check the file type using file in bash?
You can check the file type using the file command with the `-b` option. Here's an example:
```bash
file -b filename
```

### How can I determine the MIME type of a file in Linux using file?
To determine the MIME type of a file in Linux, you can use the following command:
```bash
file -i filename
```

### How to identify the encoding of a file in Linux using file command?
You can identify the encoding of a file in Linux using the following command:
```bash
file -bi filename
```

### How can I check if a file is an ASCII text file using file in bash?
To check if a file is an ASCII text file in bash, you can use the following command:
```bash
file -i filename | grep "charset=us-ascii"
```

### How to recursively check the file type of all files in a directory in Linux using file?
You can recursively check the file type of all files in a directory in Linux using the following command:
```bash
file /path/to/directory/*
```

### How to display only the file type without additional information in Linux using file command?
To display only the file type without additional information in Linux, you can use the following command:
```bash
file -b filename
```

## Applications of the file command

- Checking the type of a file
- Determining the encoding of a file
- Identifying the file format
- Inspecting file contents
- Handling unknown file types