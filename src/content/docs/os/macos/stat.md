---
title: stat MacOS command
description: Learn how to use the stat command on MacOS to view detailed file information.
---

The stat command on MacOS is a useful tool for viewing detailed information about files, such as their size, permissions, timestamps, and more. This command provides a way to access metadata that is not easily visible through the regular user interface. By using the stat command, you can quickly retrieve various attributes of a file, helping you to manage and work with files more effectively. Whether you need to check the last modification time of a file or verify its size, the stat command gives you a comprehensive overview of the file's metadata at a glance. Familiarizing yourself with this command can enhance your productivity when working with files on MacOS.

## stat Syntax:
```bash
stat [option] [filename]
```

## Options:
| Option | Description                       |
|--------|-----------------------------------|
| -f     | Display information in filesystem format |
| -s     | Display only size information      |
| -t     | Display information in terse format |
| -x     | Display information in XML format  |

## Parameters:
| Parameter | Description                           |
|-----------|---------------------------------------|
| filename  | The name of the file to get details for |

:::caution
Exercise caution when using the stat command as it provides detailed information about the specified file which may be sensitive.
:::
## stat bash Examples:
### Check File Information
```bash
stat file.txt
```
Displays detailed information about the file "file.txt".

### Display Information in Human-Readable Format
```bash
stat -f file.txt
```
Shows the file information in a human-readable format.

### Check Inode Information
```bash
stat -f file.txt
```
Retrieves the inode details of the file "file.txt".

### Display Information in Numeric Format
```bash
stat -f file.txt -c "%i %s"
```
Shows specific file details in a numeric format.

### Check Access and Modified Time
```bash
stat -f file.txt -c "%x %y"
```
Displays the access and modified times of the file "file.txt".

### Show File Size in Bytes
```bash
stat -f file.txt -c "%s"
```
Outputs the file size in bytes for "file.txt".
:::tip
When using the stat command in MacOS, make sure to refer to the man page or help section for detailed information on various options and how to customize the output to suit your requirements.
:::

## stat Command Help Center:

### How do I use stat in MacOS?
To use the stat command in MacOS, execute the following command:
```bash
stat --option <value>
```

### How can I display information about a file using stat in MacOS?
To display information about a file using stat in MacOS, use the following command:
```bash
stat /path/to/file
```

### How do I get the output in a specific format with stat in MacOS?
To get the output in a specific format with stat in MacOS, you can use the following command:
```bash
stat -f "Format string" /path/to/file
```

### How can I show only the permissions of a file with stat in MacOS?
To show only the permissions of a file using stat in MacOS, you can run the following command:
```bash
stat -f "%Sp" /path/to/file
```

### How can I get the size of a file in a human-readable format with stat in MacOS?
To get the size of a file in a human-readable format using stat in MacOS, you can use the following command:
```bash
stat -f "%z" /path/to/file
```

### How do I display the last access time of a file with stat in MacOS?
To display the last access time of a file using stat in MacOS, you can run the following command:
```bash
stat -f "%Sa" /path/to/file
```

### How can I view the inode number of a file with stat in MacOS?
To view the inode number of a file using stat in MacOS, you can use the following command:
```bash
stat -f "%i" /path/to/file
```

### How do I show the birth time (creation time) of a file with stat in MacOS?
To show the birth time (creation time) of a file using stat in MacOS, you can execute the following command:
```bash
stat -f "%SB" /path/to/file
```
## Applications of the stat command

- Checking file permissions
- Viewing file size
- Displaying file creation, modification, and access times
- Checking file type
- Retaining file information for scripting purposes