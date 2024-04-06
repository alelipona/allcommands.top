---
title: lsattr Linux Command Guide
description: Discover how to use the lsattr command in Linux to view and modify file attributes. 
---

The Linux lsattr command is used to view and modify file attributes on ext2/ext3/ext4 file systems. It displays the attributes of files and directories, such as whether a file can be modified, deleted, or whether the file is immutable. By using lsattr, you can control the behavior of files and directories to enhance security and prevent accidental changes.

## lsattr Syntax:
```bash
lsattr [option] [parameter]
```
## Options:
| Option | Description                            |
|--------|----------------------------------------|
| -a     | List all files in specified directories|
| -d     | List directories like other files      |
| -E     | Cancel the effect of any previous -R   |
| -R     | Recursively list attributes in directories|
| -V     | Output version information and exit    |

## Parameters:
| Parameter | Description                           |
|-----------|---------------------------------------|
| filename  | File or directory name to show attributes for|
| directory | List attributes for the directory and its contents|

:::caution
It is essential to use the lsattr command carefully as changing attributes could potentially affect the behavior of files and directories in the system.
:::
## lsattr Command Samples:
### List Permissions of a File
```bash
lsattr file.txt
```
Display the attributes of a specific file named "file.txt".

### View All Attributes of a Directory
```bash
lsattr -d directory
```
Show all attributes of a directory named "directory".

### Show Only Inode Status
```bash
lsattr -i file.txt
```
Display only the inode status of a file named "file.txt".

### Recursively List File and Directory Attributes
```bash
lsattr -R /path/to/directory
```
List recursively all attributes of files and directories within the specified directory.

### Display Attributes with Long Listing Format
```bash
lsattr -l file.txt
```
Show the attributes of a file with a long listing format.

### Modify Immutable Attribute of a File
```bash
lsattr -i +i file.txt
```
Set the immutable attribute for a file named "file.txt".

### Remove Immutable Attribute from a File
```bash
lsattr -i -i file.txt
```
Remove the immutable attribute from a file named "file.txt".
:::tip
When using the lsattr command in Linux, make sure to carefully review the attributes displayed for files or directories. Understanding the meanings of each attribute is crucial for making informed decisions about file permissions and security settings.
:::

## lsattr FAQ:
{Questions}

### How do I use lsattr in Linux?
To use the lsattr command in Linux, execute the following command:
```bash
lsattr --A /path/to/directory
```

### What does the lsattr command display in Linux?
The lsattr command displays the attributes of files or directories in Linux.

### How can I view all attributes of a file using lsattr?
To view all attributes of a file in Linux, you can use the following command syntax:
```bash
lsattr -d /path/to/file
```

### How do I remove a specific attribute from a file with lsattr?
To remove a specific attribute from a file using lsattr in Linux, you can use the following command structure:
```bash
chattr -<attribute> /path/to/file
```

### Can lsattr display only a specific type of attribute?
Yes, lsattr in Linux can be used to display only a specific type of attribute using the following command format:
```bash
lsattr -a /path/to/directory
```

### How do I recursively list attributes of files and directories with lsattr?
To recursively list attributes of files and directories in Linux using lsattr, you can execute the command as follows:
```bash
lsattr -R /path/to/directory
```
## Applications of the lsattr command

- Viewing the attributes of files and directories on a Linux system
- Checking if a file or directory has immutable, append-only, or other special attributes set
- Determining if a file or directory is protected against certain operations
- Managing advanced file and directory permissions and protections on a Linux system