---
title: MacOS df command
description: Learn how to use the MacOS df command to check disk space usage efficiently. Use this command to monitor available space on your system easily.
---

The MacOS df command is a useful tool for checking disk space usage on your system. It displays the amount of disk space used and available on mounted file systems. This command can help you easily monitor your disk space usage and identify any areas that may be running low on storage. By running df with different options, you can customize the output to suit your needs. This versatile command is essential for system administrators and users alike to ensure optimal performance and avoid running out of disk space.

## df Syntax:
```bash
df [option] [parameter]
```
## Options:
| Option | Description                         |
|--------|-------------------------------------|
| -h     | Print sizes in human readable format|
| -T     | Show file system type               |
| -l     | Only display local file systems     |
| -t     | Limit the type of file systems shown|
| -i     | Display inode information           |

## Parameters:
| Parameter | Description                            |
|-----------|----------------------------------------|
| file      | Display information about a specific file or directory|
| directory | Display information about a specific directory          |

:::caution
Exercise caution when using the `df` command, especially if you are not familiar with its options and parameters. Incorrect usage may lead to unintended outcomes or errors.
:::
## df Usage:
### Display Filesystem Information
```bash
df
```
Shows information about all mounted filesystems.

### Display Filesystem Usage of a Specific Directory
```bash
df /path/to/directory
```
Displays the disk space usage of the specified directory.

### Display Filesystem Usage in Human-Readable Format
```bash
df -h
```
Shows filesystem information in a more human-readable format, displaying sizes in KB, MB, or GB.

### Display Filesystem Inode Information
```bash
df -i
```
Provides information on the number of used and available inodes on each mounted filesystem.
:::tip
When using the df command in MacOS, make sure to familiarize yourself with the available options and their functionality. This will help you effectively analyze disk space usage on your system and troubleshoot any storage-related issues.
:::

### How do I use df in MacOS?
To use the df command in MacOS, execute the following command:
```bash
df -h
```

### What is the purpose of the -h option in df command on MacOS?
The -h option in the df command on MacOS is used to display disk space in a human-readable format, making it easier to interpret the output.
```bash
df -h
```

### How can I exclude certain file systems from the df command output in MacOS?
To exclude certain file systems from the df command output in MacOS, use the -x option followed by the file system type you want to exclude. 
```bash
df -x exfat
```

### How do I show file system inodes information using df on MacOS?
To display file system inodes information using the df command on MacOS, use the -i option.
```bash
df -i
```

### How can I display the total size of a specific file system with df on MacOS?
To show the total size of a specific file system using the df command on MacOS, specify the file system as an argument. 
```bash
df /dev/disk1s1
```

### How do I get a summary header line with df on MacOS?
To obtain a summary header line with the df command on MacOS, include the -T option in your command.
```bash
df -T
```

### How can I sort the output of the df command based on specific criteria in MacOS?
To sort the output of the df command based on specific criteria, such as the amount of available space, utilize the sort command in combination with df.
```bash
df -h | sort -n -k4
```

## Applications of the df command

- Check disk space usage
- Display file system information
- Monitor available disk space
- Verify mount points
- Troubleshoot disk space issues