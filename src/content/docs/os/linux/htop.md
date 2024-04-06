---
title: htop Linux Command Guide
description: The htop command in Linux is a powerful interactive process viewer that provides real-time information. Learn how to use htop with this comprehensive guide.
---

The htop command in Linux is a powerful interactive process viewer that provides real-time information about system resources and running processes. It is a user-friendly alternative to the traditional top command, offering a more intuitive and customizable interface. With htop, users can easily monitor CPU, memory, and swap usage, as well as manage processes with features like sorting and searching. This guide will walk you through the basics of using htop and help you leverage its advanced capabilities for efficient system monitoring and management.
## htop Syntax:
```bash
htop [option]
```
## Options:
| Option | Description                |
|--------|----------------------------|
| -C     | Sort by CPU usage          |
| -M     | Sort by memory usage       |
| -u     | Show processes of a user   |
| -p     | Show specific PIDs         |
| -t     | Tree view mode             |
| -H     | Show threads              |
| -d     | Delay between updates (in seconds) |
| -s     | Cumulative time mode      |
| -p     | Process ID                |
| -c     | Command name/ full path    |
| -v     | Version info              |
| -h     | Help                      |

## Parameters:
| Parameter | Description          |
|-----------|----------------------|
| None      | No specific parameter|

:::caution
Exercise caution when using the `htop` command as it provides detailed system information and can affect system performance.
:::
## htop Command Samples:
### Monitor System Resources
```bash
htop
```
Launches the htop command to monitor system resources interactively in a colorful and efficient way.

### Sort Processes by CPU Usage
```bash
htop --sort-key=PERCENT_CPU
```
Starts htop and sorts the processes based on CPU usage in descending order.

### Sort Processes by Memory Usage
```bash
htop --sort-key=PERCENT_MEM
```
Runs htop and sorts the processes by memory usage in descending order.

### Search for a Specific Process Name
```bash
htop -p "firefox"
```
Filters the process list in htop to show only processes related to "firefox".

### Highlight Running Processes
```bash
htop --highlight-changes
```
Highlights any new processes that start or end while htop is running.

### Show Processes in a Tree View
```bash
htop --tree
```
Displays processes in a tree view, illustrating the parent-child relationship between processes.

### Save Configuration Settings
```bash
htop -C
```
Saves the current configuration settings in htop for future use.
:::tip
When using the htop command in Linux, you can press F1 for help to view all the available options and keybindings. This can be helpful for understanding and utilizing the functionality of htop more effectively.
:::

## htop FAQ:
### How do I use htop in Linux?
To use the htop command in Linux, execute the following command:
```bash
htop
```

### How can I search for a process in htop?
To search for a process in htop, press F3 and enter the search term. This will highlight the process that matches the search term.

### How do I kill a process in htop?
To kill a process in htop, select the process by using the arrow keys and then press F9. Confirm the kill signal by pressing Enter.

### How can I change the way processes are sorted in htop?
To change the way processes are sorted in htop, press F6. You can then select the sorting parameter such as PID, CPU usage, memory usage, and more.

### How can I view detailed information about a process in htop?
To view detailed information about a process in htop, select the process using the arrow keys and then press F1 for help. This will show you all the available options for viewing process information.

### How do I save the current htop configuration settings?
To save the current htop configuration settings, press F10. This will save the settings to the htop configuration file for future use.

## Applications of the htop command

- Monitoring system resources
- Managing running processes
- Sorting processes by various criteria
- Searching for specific processes
- Renicing processes
- Killing processes
- Tree view of processes
- Viewing detailed process information
- Customizing display settings