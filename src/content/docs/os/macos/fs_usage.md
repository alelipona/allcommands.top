---
title: fs_usage MacOS command
description: The fs_usage command in MacOS is a powerful tool for monitoring file system activity in real-time. Learn how to use fs_usage to track file operations and troubleshoot performance issues on your Mac system.
---

The `fs_usage` command in MacOS is a powerful tool for monitoring file system activity in real-time. It allows users to track various file operations such as file opens, reads, writes, and closes, as well as network filesystem activity. By providing detailed information about the processes and files involved in these operations, fs_usage can be a valuable tool for troubleshooting performance issues, identifying the source of disk I/O bottlenecks, and monitoring system activity. This command can be especially useful for system administrators, developers, and advanced users who need to analyze file system behavior and diagnose potential problems on their Mac systems. With its ability to display data continuously and filter information based on specific criteria, fs_usage offers a flexible and customizable solution for monitoring file system activity and gaining insights into the inner workings of your MacOS system.

## fs_usage Syntax:
```bash
fs_usage [options] [parameters]
```

## Options:
| Option | Description                     |
|--------|---------------------------------|
| -f     | Display File access information  |
| -w     | Display Accumulated write data  |
| -r     | Display File Attributes          |
| -d     | Display Disk Information         |
| -s     | Display write data rate          |
| -c     | Display kext and app bundleid    |
| -v     | Display verbose output           |

## Parameters:
| Parameter  | Description                             |
|------------|-----------------------------------------|
| file_path  | Specify a specific file or directory path to monitor |
| PID        | Specify the Process ID to monitor      |

:::caution
Exercise caution when using the fs_usage command as it monitors file system activity in real-time and can generate a large amount of output, potentially impacting system performance.
:::
## fs_usage bash Examples:
### Monitor System Calls
```bash
fs_usage
```
Displays a live stream of file system activity, showing system calls made by processes.

### Filter Output for Specific Process ID
```bash
fs_usage -p PID
```
Filters the fs_usage output to show only file system activity related to a specific process ID.

### Track File System Activity for a Specific Directory
```bash
fs_usage /path/to/directory
```
Monitors file system activity for a specific directory, displaying file operations within that directory.

### Display Detailed Information with Time Stamps
```bash
fs_usage -t
```
Enables timestamps in the fs_usage output, providing detailed information about file system activity with time references.

### Monitor Operations with Specific File Extension
```bash
fs_usage -f extension
```
Filters the fs_usage output to show file system operations involving files with a specific extension.

### Save Output to a File for Analysis
```bash
fs_usage > fs_usage_output.txt
```
Redirects the fs_usage command output to a text file for further analysis and review.
```
:::tip
When using the fs_usage command in MacOS, make sure to carefully read the available options and their respective values in the command's documentation to understand and utilize the command effectively.
:::

### How do I use fs_usage in MacOS?
To use the fs_usage command in MacOS, execute the following command:
```bash
fs_usage
```

### What is the purpose of the fs_usage command in MacOS?
The fs_usage command in MacOS is used to display file system activity in real-time.

### How can I filter the output of fs_usage by process ID?
To filter the output of fs_usage by process ID, use the following command:
```bash
fs_usage -f process <process_id>
```

### How can I monitor a specific file with fs_usage?
To monitor a specific file with fs_usage, use the following command:
```bash
fs_usage -f filesys <file_path>
```

### How do I use fs_usage to track disk activity in MacOS?
To track disk activity in MacOS using fs_usage, execute the following command:
```bash
fs_usage -f diskio
```

### Can I save the output of fs_usage to a file?
Yes, you can save the output of fs_usage to a file by using the following command:
```bash
fs_usage > output.txt
```

### How can I adjust the update interval of fs_usage output?
To adjust the update interval of fs_usage output, use the following command:
```bash
fs_usage -I <interval_in_seconds>
```

### Is there a way to display timestamps with the fs_usage output?
Yes, you can display timestamps with the fs_usage output by using the following command:
```bash
fs_usage -t
```
## Applications of the fs_usage command

1. Monitoring file system activity
2. Troubleshooting file system-related issues
3. Analyzing disk usage and performance
4. Capturing file system-related events for analysis