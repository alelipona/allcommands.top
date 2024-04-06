---
title: Windows FSUTIL command
description: Learn how to use the Windows fsutil command to manage filesystems efficiently.
---

The Windows fsutil command is a powerful tool for managing filesystems in Windows operating systems. It provides a wide range of functions for working with NTFS file systems, such as creating junction points, querying file system information, managing sparse files, and much more. With fsutil, users can perform various tasks to optimize and troubleshoot filesystem issues effectively. Whether it's checking disk quotas, setting quotas, or managing reparse points, fsutil offers a comprehensive set of commands to streamline filesystem management tasks.

## FSUTIL Syntax:
```cmd
fsutil [command] [options] [parameters]
```
## Options:
| Option      | Description                              |
|-------------|------------------------------------------|
| option1     | Description of option1                   |
| option2     | Description of option2                   |
| option3     | Description of option3                   |

## Parameters:
| Parameter   | Description                              |
|-------------|------------------------------------------|
| parameter1  | Description of parameter1                |
| parameter2  | Description of parameter2                |
| parameter3  | Description of parameter3                |

:::caution
Exercise caution when using the fsutil command as it can affect critical file system settings. Make sure to double-check your command inputs before executing them to avoid unintended consequences.
:::
## FSUTIL Usage:
### Create a new NTFS file
```cmd
fsutil file createnew C:\Users\NewFile.txt 1000
```
Creates a new file named "NewFile.txt" with a size of 1000 bytes.

### Resize an NTFS log file
```cmd
fsutil usn deletejournal /N C:
```
Deletes the Change Journal for the C: volume.

### Set a volume's dirty bit
```cmd
fsutil dirty set C:
```
Marks the C: volume as dirty, indicating that a chkdsk scan should be run on the next reboot.

### Defragment a specified volume
```cmd
fsutil file layout C:
```
Displays the file layout of the specified volume to check for fragmentation.
:::tip
When using the fsutil command in Windows, ensure that you have administrative privileges to avoid any permission issues.
:::

### How do I use fsutil in Windows?
To use the fsutil command in Windows, execute the following command:
```cmd
fsutil --file <filename>
```

### What are some common fsutil commands for managing file systems?
Common fsutil commands include checking disk space, managing file IDs, setting short names, and querying file system behavior.

### How can I check free space on a disk using fsutil?
To check the free space on a disk using fsutil, run the following command:
```cmd
fsutil volume diskfree C:
```

### How do I create a new file with a specific size using fsutil?
To create a new file with a specific size using fsutil, use the following command:
```cmd
fsutil file createnew <filepath> <size>
```

### Can fsutil be used to disable short file name generation?
Yes, fsutil can be used to disable short file name generation with the following command:
```cmd
fsutil behavior set disable8dot3 1
```

### How do I find the NTFS file system sector size with fsutil?
To find the NTFS file system sector size using fsutil, execute the following command:
```cmd
fsutil fsinfo ntfsinfo C:
```

### Is it possible to set a volume label using fsutil?
Yes, you can set a volume label using fsutil by running the following command:
```cmd
fsutil volume label C: <label>
```

## Applications of the FSUTIL Command

1. **File System Utility**: manage file systems and perform tasks related to NTFS and FAT file systems.
2. **Volume Management**: manipulate volumes, including dismounting, querying, and configuring volume parameters.
3. **Sparse File Control**: create, query, set, and remove sparse file attributes.
4. **Hard Link Management**: create, query, and delete hard links.
5. **Object IDs**: manage Object IDs for files or directories.
6. **Quota Management**: control and configure disk quotas on NTFS volumes.
7. **Usn Management**: query and configure the Update Sequence Number (USN) change journal.
8. **Reparse Point Management**: create, query, delete, set and get information on reparse points and their data.
9. **Transaction Control**: control transactions for file operations within specified directories.
10. **Memory Usage Tracking**: track and manage memory usage for testing and debugging purposes.