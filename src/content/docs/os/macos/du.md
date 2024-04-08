---
title: MacOS du command
description: Discover how to efficiently analyze disk usage on MacOS with the du command. 
---

The MacOS du command is a powerful tool for analyzing disk usage on your system. By displaying the size of directories and files, you can identify storage-hungry items and manage your disk space effectively. With various options to customize the output format, you can delve deep into specific directories or exclude certain files from the analysis. By understanding the disk usage distribution, you can optimize storage capacity and improve system performance.

## du Syntax:
```bash
du [option] [parameter]
```

## Options:
| Option         | Description                                     |
|----------------|-------------------------------------------------|
| -d, --max-depth | Limit the output to a specific depth            |
| -h, --human-readable | Print sizes in human readable format        |
| -s, --summarize  | Display only a total for each argument        |

## Parameters:
| Parameter      | Description                                   |
|----------------|-----------------------------------------------|
| directory      | Specify the directory to analyze              |

:::caution
Exercise caution while using the du command as it can consume a significant amount of system resources when scanning large directories with deep nesting levels.
:::
## du Usage:
### List Sizes of Files and Directories in the Current Directory
```bash
du -sh *
```
Displays the total sizes of files and directories in the current directory.

### Display Sizes of Files and Directories with Human-readable Format
```bash
du -h
```
Displays sizes of files and directories in a human-readable format.

### List Sizes of Files and Directories Sorted by Size
```bash
du -sh * | sort -h
```
Lists the sizes of files and directories sorted by size.

### Show Sizes of Files and Directories in a Specific Directory
```bash
du -h /path/to/directory
```
Displays sizes of files and directories in a specific directory.
:::tip
When using the `du` command in MacOS, keep in mind that it is used to estimate file space usage. Remember to refer to the command's manual (`man du`) for additional options and features available. 
:::

{Questions}

## Applications of the du command

- Checking disk usage of directories and files
- Identifying large files or directories
- Monitoring disk usage to prevent running out of disk space
- Analyzing disk usage to free up storage
- Verifying if certain files or directories are taking up too much space