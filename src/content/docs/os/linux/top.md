---
title: What is top Linux command?
description: The top command in Linux is a powerful utility used to monitor system resources such as CPU usage, memory utilization, and running processes in real-time.
---

The top command in Linux is a powerful utility used to monitor system resources such as CPU usage, memory utilization, and running processes in real-time. It allows users to identify performance bottlenecks and troubleshoot system issues effectively.

## top Syntax:
```bash
top [options]
```

## top Options:
| Option           | Description                                |
|------------------|--------------------------------------------|
| -h, --help       | Display help message                        |
| -d, --delay      | Specify refresh interval in seconds        |
| -p, --pid        | Monitor specific process ID                |
| -U, --user       | Display processes of a specific user       |
| -u, --user       | Monitor only processes of a specific user  |

:::caution
Avoid using top command without specifying any options as it may display a large number of processes and consume system resources.
:::

## Parameters:
None
## top Command Usage Examples:
### Displaying Top Processes
```bash
top
```
Displays a dynamic view of the top processes running on the system.

### Sorting by CPU Usage
```bash
top -o %CPU
```
Starts top with the processes sorted by the CPU utilization in descending order.

### Displaying Specific Number of Processes
```bash
top -n 5
```
Runs top and limits the output to display only the top 5 processes.

### Showing Processes for a Specific User
```bash
top -u username
```
Launches top and filters the processes to show only those owned by the specified username.

### Highlighting Threads
```bash
top -H
```
Starts top in a mode where individual threads are displayed separately for processes.
:::tip
When using the top command in Linux, navigation can be done using keyboard shortcuts. Press 'h' within the top command to view a help screen with a list of available commands and their functions.
:::

## How to use top?:
### How do I use top in Linux?
To use the top command in bash, execute the following command:
```bash
top
```

### What options can I use with top in Linux?
To specify options with the top command in Linux, you can use flags such as '-d' to set the delay time between updates. For example:
```bash
top -d 5
```

### How can I sort processes in top by CPU usage?
To sort the processes displayed by top in Linux by CPU usage, you can press 'Shift + P' while within the top command. This will arrange the processes based on their CPU consumption.

### How can I sort processes in top by memory usage?
To sort the processes displayed by top in Linux by memory usage, you can press 'Shift + M' while within the top command. This will arrange the processes based on their memory consumption.

### How to display a specific number of processes in top?
To set the number of processes shown in the top command in Linux, you can use the '-n' flag followed by the desired number. For example, to display only 10 processes, you can use:
```bash
top -n 10
```

### How to highlight running processes in top?
To highlight running processes in the top command in Linux, you can press 'z' while within the top interface. This action will display running processes in a different color for easier identification.

### How can I kill a process using top in Linux?
To kill a process using the top command in Linux, you can press 'k' while within the top interface. You will be prompted to enter the PID (Process ID) of the process you wish to terminate.

### How can I save the current configuration in top for future use?
To save the current configuration settings in the top command for future use, press 'W' while within the top interface. This will write the configuration to a file named '.toprc' in your home directory.

## Applications of the top command

- Monitor system resource usage
- View running processes
- Check CPU and memory usage
- Sort processes by different metrics
- Kill processes
- Toggle between different display modes
- Analyze system performance