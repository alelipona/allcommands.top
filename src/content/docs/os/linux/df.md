---
title: df Linux command
description: Check disk space usage on your Linux system with the df command.
---

The df command in Linux is used to display the amount of available and used disk space on the file system. It shows information such as total disk space, used space, available space, and the filesystem type. By running df, you can quickly check the status of your system's disk space and identify any potential issues that may require attention. The command is simple to use and can be a handy tool for monitoring disk usage, managing storage capacity, and troubleshooting storage-related issues on your Linux system.

## df Syntax:
```bash
df [option] [parameter]
```
## Options:
| Option | Description             |
|--------|-------------------------|
| -h     | Print sizes in human readable format (e.g., 1K 234M 2G)       |
| -T     | Show filesystem type    |
| -t     | Limit the display to filesystem types specified             |
| -hT    | Combination of -h and -T options                           |
| -k     | Show sizes in 1024-byte blocks                            |
| -m     | Show sizes in megabytes                                  |
| -P     | Use POSIX output format                                 |
| -a     | Include pseudo, inaccessible, clean, and dirty filesystems |
| -x     | Exclude the specified filesystem type from the report     |

## Parameters:
| Parameter            | Description                        |
|----------------------|------------------------------------|
| Filesystem           | Show information for a specific filesystem  |


:::caution
Make sure to use the df command carefully, as it displays information about disk usage on the system which may be critical for the system's operation.
:::
## df bash Examples:
### List Filesystem Space Usage
```bash
df
```
Displays the disk usage of all filesystems.

### Show Filesystem Space Usage in Human-Readable Format
```bash
df -h
```
Displays the disk usage of all filesystems in a human-readable format.

### Display Specific Filesystem Space Usage
```bash
df /dev/sda1
```
Displays the disk usage of the specific filesystem "/dev/sda1".

### Show Inode Usage for Filesystems
```bash
df -i
```
Displays inode usage for all mounted filesystems.

### Display Filesystem Space Usage Excluding Some Filesystems
```bash
df -x tmpfs
```
Excludes the filesystem type tmpfs from the disk usage display.

### Display Filesystem Space Usage and Sort by Filesystem Type
```bash
df -T
```
Displays the disk usage of all filesystems sorted by filesystem type.
:::tip
Remember to use the appropriate options with the df command to display specific information, such as disk space usage in human-readable format or limiting the output to a specific filesystem type.
:::

### How do I use df in Linux?
To use the df command in Linux, execute the following command:
```bash
df
```

### What options can I use with df to display human-readable disk space usage?
To display disk space usage in human-readable format with df, use the -h option:
```bash
df -h
```

### How can I show the file system type along with disk space using df?
To display the file system type along with disk space information, use the -T option with df:
```bash
df -T
```

### How do I exclude specific filesystem types from the df output?
To exclude specific filesystem types from the df command output, use the -x option followed by the filesystem type you want to exclude:
```bash
df -x tmpfs
```

### How can I display the total and available inodes using df?
To display the total and available inodes along with disk space information, use the -i option with df:
```bash
df -i
```

### How to show disk space usage for a specific filesystem with df?
To display disk space usage for a specific filesystem, specify the mount point of the filesystem as an argument to the df command:
```bash
df /mnt/data
```

### How do I get a summary of disk space usage with total, used, and available space using df?
To get a summary of disk space usage with total, used, and available space, use the -h option along with the -t option set to the file system type:
```bash
df -h -t ext4
```

### How can I display disk space statistics in 1K blocks with df?
To show disk space statistics in 1K blocks format using df, use the -k option:
```bash
df -k
```
## Applications of the df command
- Check disk space usage
- Display available disk space
- Show filesystem usage
- Determine disk space allocated to each filesystem
- Identify the disk space used by a specific directory
- Monitor disk usage trends