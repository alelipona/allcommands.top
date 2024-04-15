---
title: top MacOS command
description: Learn how to use the top command in MacOS to monitor system processes, CPU usage, and memory usage in real time. 
---

The top command in MacOS is a powerful tool for monitoring system processes, CPU usage, and memory usage in real time. By using the top command, you can view a dynamic, continually updating list of processes running on your Mac, sorted by various criteria such as CPU usage, memory usage, and more. This allows you to quickly identify any resource-intensive processes that may be slowing down your system and take appropriate action. In addition, the top command provides useful information about system performance, such as load averages, uptime, and total number of processes. With its customizable display options and powerful features, the top command is an essential tool for system administrators, advanced users, and anyone looking to optimize their MacOS system performance.
## top Syntax:
```bash
top [options]
```
## Options:
| Option | Description                          |
|--------|--------------------------------------|
| -h     | Display a help message               |
| -o     | Specify the sorting order            |
| -q     | Run in secure mode (disables some commands) |
| -S     | Cumulative mode (include child threads) |
| -s     | Update frequency in seconds          |
| -u     | Display processes for a specific user |
| -l     | Display the average load            |
| -n     | Number of updates before exiting    |

## Parameters:
| Parameter | Description                   |
|-----------|-------------------------------|
| username  | Display processes for a specific user by providing the username |
| PID       | Display processes for specific Process ID (PID) by providing the PID |
| interval  | Set the update frequency in seconds by providing the interval value |
| count     | Set the number of updates before exiting by providing the count value |

:::caution
Exercise caution while using the `top` command as it provides detailed system process information and can be overwhelming for beginners. Be mindful of sorting options and be sure to refer to the man page for more details before making changes to the system based on the information provided by `top`.
:::
## top bash Examples:
### Displaying CPU Utilization
```bash
top -o cpu
```
This command displays a dynamic view of the top processes on the system, sorted by CPU utilization.

### Filtering Processes by User
```bash
top -u username
```
Filters the display to show only processes owned by a specific user, in this case, "username".

### Sort Processes by Memory Usage
```bash
top -o mem
```
Sorts the processes based on their memory usage, displaying the ones using the most memory at the top.

### Displaying a Specific Number of Processes
```bash
top -l 5
```
Limits the number of processes displayed to 5, providing a concise overview of system activity.

### Highlighting Processes Using a Specific User ID
```bash
top -pid username
```
Highlights the processes owned by the user with the specified user ID (PID).

### Show Threads Instead of Processes
```bash
top -H
```
Switches the display to show individual threads within each process instead of the processes themselves.
:::tip
Remember to use the "-n" flag with the top command in MacOS to specify how many updates you want to see before top exits. This can be useful for monitoring real-time system metrics over a specific period of time.
:::

## top Command Help Center:

### How can I monitor CPU usage with top in MacOS?
To monitor CPU usage with the top command in MacOS, use the following command:
```bash
top -o cpu
```

### How can I display memory information using top in MacOS?
To display memory information using the top command in MacOS, run the following command:
```bash
top -o rsize
```

### How do I sort processes by user with top in MacOS?
To sort processes by user using the top command in MacOS, use the following command:
```bash
top -o user
```

### How can I change the update interval in top for MacOS?
To change the update interval in top for MacOS, use the following command:
```bash
top -s 5
```

### How do I show processes in a tree view with top in MacOS?
To show processes in a tree view using the top command in MacOS, execute the following command:
```bash
top -O -p
```

### How do I limit the number of processes displayed with top in MacOS?
To limit the number of processes displayed using the top command in MacOS, run the following command:
```bash
top -l 5
```

### How can I display process threads with top in MacOS?
To display process threads using the top command in MacOS, use the following command:
```bash
top -H
```

### How do I save the current top configuration in MacOS?
To save the current top configuration in MacOS, use the following command:
```bash
top -R
```
## Applications of the top command

- Monitoring system processes
- Checking CPU usage
- Analyzing memory usage
- Viewing resource allocation
- Identifying bottlenecks
- Troubleshooting performance issues