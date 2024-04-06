---
title: du Linux Command Guide
description: A comprehensive guide to the Linux du command, including usage, options, and examples.
---

The du command in Linux is used to estimate file space usage. It displays the amount of disk space used by files and directories. It is a handy tool for monitoring disk usage and identifying space-consuming files and directories. The du command provides various options to customize the output and is commonly used in shell scripts for disk usage analysis.

## du Syntax:
```bash
du [options] [files or directories]
```

## Options:

| Option | Description                  |
|--------|------------------------------|
| -a     | Display the disk usage of individual files and directories          |
| -c     | Display a total disk usage at the end of the output                   |
| -h     | Show sizes in human-readable format (e.g., 1K 234M 2G)                |
| -s     | Display only a total for each argument                              |
| -k     | Display sizes in kilobytes                                          |
| -m     | Display sizes in megabytes                                          |
| -B     | Specify block size for disk usage (default: 1024 bytes)               |

## Parameters:

| Parameter          | Description                            |
|--------------------|----------------------------------------|
| files or directories | Specify the files or directories for which disk usage should be calculated |  

:::caution
Exercise caution when using the du command, as it can display a lot of information and may take longer to process, especially if used on large directories or the root directory.
:::
## du Command Samples:
### Display Disk Usage for a Specific Directory
```bash
du /home/user/documents
```
Shows disk usage for the directory "/home/user/documents".

### Display Disk Usage in Human-Readable Format
```bash
du -h /var/log
```
Displays disk usage in a human-readable format for the directory "/var/log".

### Display Total Disk Usage of Files in a Directory
```bash
du -s /var/www/html
```
Shows the total disk usage of files in the directory "/var/www/html".

### Display Disk Usage for All Files and Directories
```bash
du -a /usr/local
```
Shows disk usage for all files and directories under "/usr/local".

### Sort and Display Disk Usage Summary
```bash
du -s * | sort -n
```
Sorts and displays disk usage summary for the current directory.

### Display Disk Usage of Only Subdirectories
```bash
du -d 1 /opt
```
Shows disk usage for only the immediate subdirectories of "/opt".

### Display Disk Usage Summary Excluding Files
```bash
du -c --exclude=*.log /var/www/html
```
Displays disk usage summary while excluding all files with ".log" extension in "/var/www/html".
:::tip
When using the du command in Linux, it can be helpful to know that by default it displays disk usage in kilobytes. To get a more human-readable output, you can use the `-h` flag to display sizes in a more understandable format.
:::

## du FAQ:

### How can I display disk usage in a more human-readable format with du?
To display disk usage in a more human-readable format using du, add the `-h` flag to the command:
```bash
du -h
```

### How can I display the total disk usage of a specific directory with du?
To display the total disk usage of a specific directory using du, execute the command with the directory path as an argument, like this:
```bash
du /path/to/directory
```

### How can I list disk usage for subdirectories with du in Linux?
To list disk usage for subdirectories using du in Linux, use the `-d` flag followed by the desired depth level. For example, to list disk usage up to 2 levels deep, use:
```bash
du -d 2
```

### How can I sort the output of du by disk usage size in Linux?
To sort the output of du by disk usage size in Linux, combine the du command with the `sort` command and use the `-n` flag to sort numerically. Here's an example:
```bash
du | sort -n
```

### How can I exclude specific directories or files from du command output?
To exclude specific directories or files from du command output, use the `--exclude` flag followed by the directory or file you want to exclude. For example, to exclude a directory named "exclude_me", use:
```bash
du --exclude=exclude_me
```

### How can I limit the depth of subdirectory levels to show with du in Linux?
To limit the depth of subdirectory levels shown with du in Linux, combine the `-max-depth` flag with the desired depth level. For example, to limit to show only the top-level directories, use:
```bash
du --max-depth=1
```
## Applications of the du command

- Checking disk usage of files and directories
- Finding the size of a specific file or directory
- Identifying large files or directories that are consuming disk space
- Analyzing disk usage to free up space
- Monitoring changes in disk usage over time
- Generating reports on disk usage for further analysis