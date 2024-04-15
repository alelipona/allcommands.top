---
title: touch command in MacOS
description: Learn how to create empty files or update file timestamps with the touch command in MacOS.
---

The MacOS touch command allows users to create empty files or update file timestamps. This command is commonly used in scripting to create placeholder files or update the last modified timestamp of a file. It is a versatile tool that can help manage file metadata efficiently on MacOS systems.
## touch Syntax:
```bash
touch [option] [file]
```

## MacOS touch Options:
| Option | Description             |
|--------|-------------------------|
| -a     | Change the access time  |
| -c     | Do not create the file  |
| -m     | Change the modification time |

## touch Parameters:
| Parameter | Description            |
|-----------|------------------------|
| file      | Name of the file to be created or updated |

:::caution
Exercise caution when using the touch command on MacOS as it can overwrite existing files if not used carefully.
:::
## How to use touch command:
### Create a New Empty File
```bash
touch newfile.txt
```
Creates a new empty file named "newfile.txt".

### Update the Access and Modification Time of a File
```bash
touch -t 202201011200 file.txt
```
Changes the access and modification times of "file.txt" to January 1st, 2022, 12:00 PM.

### Create Multiple New Files Simultaneously
```bash
touch file1.txt file2.txt file3.txt
```
Creates multiple empty files "file1.txt", "file2.txt", and "file3.txt" at once.

### Update Only the Access Time of a File
```bash
touch -a -t 202203041530 file.txt
```
Changes only the access time of "file.txt" to March 4th, 2023, 3:30 PM.

### Create a New Directory
```bash
touch -c new_directory
```
Creates a new directory named "new_directory".

### Update Only the Modification Time of a File
```bash
touch -m -t 202205102100 file.txt
```
Changes only the modification time of "file.txt" to May 10th, 2022, 9:00 PM.

### Update Both Access and Modification Times of a File
```bash
touch -t 202212312359.59 file.txt
```
Sets the access and modification times of "file.txt" to December 31st, 2022, 11:59:59 PM.

### Create a New File in a Specific Path
```bash
touch /path/to/directory/newfile.txt
```
Creates a new empty file named "newfile.txt" in the specified directory path.
:::tip
When using the touch command in MacOS, remember that it is primarily used to create an empty file or update the modification and access times of an existing file. Make sure to provide the correct file path and filename when using the touch command to avoid unintentional file creation or modification.
:::

### How do I use touch in MacOS?
To use the touch command in MacOS, execute the following command:
```bash
touch filename.txt
```

### What does the touch command do in MacOS?
The touch command in MacOS is used to create empty files or update the access and modification times of existing files. It is commonly used to update timestamp information on files.

### How can I create multiple files at once using touch in MacOS?
To create multiple files at once using touch in MacOS, you can specify the filenames as arguments to the touch command. For example:
```bash
touch file1.txt file2.txt file3.txt
```

### How do I change the access and modification times of a file with touch in MacOS?
To change the access and modification times of a file using touch in MacOS, you can specify the -t option followed by the desired timestamp in the format [[CC]YY]MMDDhhmm[.SS]. For example:
```bash
touch -t 202112251200.00 filename.txt
```

### Can I update only the access time of a file with touch in MacOS?
Yes, you can update only the access time of a file using the -a option with the touch command in MacOS. For example:
```bash
touch -a filename.txt
```

### How can I force the creation of a file with touch in MacOS?
To force the creation of a file with touch in MacOS, you can use the -c option. This will only create the file if it does not already exist. For example:
```bash
touch -c newfile.txt
```

### Can I specify a custom timestamp when creating a new file with touch in MacOS?
Yes, you can specify a custom timestamp when creating a new file with touch in MacOS using the -t option followed by the desired timestamp. Make sure to use the correct format for the timestamp. For example:
```bash
touch -t 202112251200.00 newfile.txt
```

### How do I update the timestamp of a file to the current time with touch in MacOS?
To update the timestamp of a file to the current time with touch in MacOS, you can simply execute the touch command followed by the filename. This will automatically update the access and modification times of the file to the current time. For example:
```bash
touch filename.txt
```
## Applications of the touch command

- Create an empty file
- Update the access and modification timestamps of a file
- Create multiple files at once with the same timestamp