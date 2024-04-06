---
title: Linux free command
description: Learn how to use the Linux free command to display the amount of free and used memory in the system.
---

The Linux free command is used to display the amount of free and used memory in the system. It provides information about the total amount of physical and swap memory, as well as the amount of memory used by buffers and cache. By default, the values are displayed in kilobytes, but you can also view them in megabytes or gigabytes. The free command also shows the total amount of available memory and the amount of memory that is free for applications to use. It is a useful tool for monitoring memory usage and identifying possible performance issues related to memory allocation.

## free Syntax:
```bash
free [options]
```
## Options:
| Option | Description                      |
|--------|----------------------------------|
| -h     | Show output in human-readable format (e.g., 1K 234M 2G) |
| -t     | Display total memory in addition to individual memory areas |

## Parameters:
| Parameter | Description                            |
|-----------|----------------------------------------|
| None      | No specific parameters for this command |

:::caution
It's important to note that the values shown by the `free` command are subject to change as memory is actively being used by various processes. It's advisable to interpret the results while being aware of any ongoing activities that might impact memory usage.
:::
## free Usage:
### Display Memory Usage Information
```bash
free
```
Displays the memory usage information in bytes.

### Display Memory Usage Information in Human Readable Format
```bash
free -h
```
Displays the memory usage information in a more human-readable format.

### Display Memory Usage Information with Specific Interval
```bash
free -s 5
```
Displays the memory usage information with a specific interval of 5 seconds.

### Display Memory Usage Information for a Specific User
```bash
free -u username
```
Displays the memory usage information for a specific user.
:::tip
It's important to note that the free command provides information on total and available memory in your system, helping you monitor memory usage and performance.
:::

### How do I use free in Linux?
To use the free command in Linux, execute the following command:
```bash
free
```

### How can I display the memory information in a more human-readable format?
To display memory information in a more human-readable format, you can use the '-h' option with the free command:
```bash
free -h
```

### How can I see the memory usage in megabytes instead of kilobytes?
To view the memory usage in megabytes instead of kilobytes, you can use the '-m' option with the free command:
```bash
free -m
```

### How can I display the total and used memory information along with buffers and caches?
To display total and used memory along with buffers and caches, you can use the '-t' option with the free command:
```bash
free -t
```

### How do I update memory information at regular intervals using free command?
To update memory information at regular intervals, you can combine the watch command with free command:
```bash
watch -n 1 free
```

### How can I filter the output to show specific information like only total or available memory?
To filter the output and display specific information like only total or available memory, you can use commands like 'awk' or 'grep'. For instance, to display only available memory:
```bash
free | grep Mem | awk '{print $7}'
```
## Applications of the free command

- Checking available memory
- Monitoring memory usage
- Troubleshooting memory-related issues