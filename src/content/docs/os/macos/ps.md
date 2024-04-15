---
title: ps command in MacOS
description: Learn how to use the ps command in MacOS to manage running processes efficiently.
---

The `ps` command in MacOS is a powerful tool used to display information about processes running on your system. It allows you to view detailed information such as process ID, terminal associated with the process, and resource usages. By using various options with the `ps` command, you can filter and format the output to suit your needs. Understanding how to use the `ps` command can help you identify and manage processes effectively on your MacOS system.

## ps Syntax:
```bash
ps [option] [parameters]
```

## MacOS ps Options:
| Option | Description                           |
|--------|---------------------------------------|
| -A     | Select all processes except both session leaders and processes not associated with a terminal. |
| -a     | Select all processes except both session leaders and processes not associated with a terminal. |
| -e     | Select all processes.                 |
| -u     | Display a user-oriented output format.|
| -x     | Lift the BSD-style "must have a tty" restriction.|

## ps Parameters:
| Parameter | Description                           |
|-----------|---------------------------------------|
| pid       | Process ID of the targeted process.   |
| user      | User name associated with the process.|
| command   | Command name or keyword to filter processes.|

:::caution
Exercise caution when working with the ps command as incorrect usage may lead to unintended consequences such as terminating important processes or misinterpreting the data displayed. Make sure to thoroughly understand the command options and parameters before using it.
:::
## How to use ps command:
### Display a List of All Running Processes
```bash
ps -A
```
Displays a list of all running processes on the system.

### Display Detailed Process Information
```bash
ps aux
```
Displays detailed information about all processes running on the system, including the user, CPU usage, memory usage, etc.

### Display Process Tree
```bash
ps axjf
```
Shows the process tree, displaying the hierarchical relationship between processes.

### Find Process by PID
```bash
ps -p 1234
```
Displays information about the process with the specific Process ID (PID) 1234.

### Display Processes Owned by a Specific User
```bash
ps -u username
```
Shows a list of processes owned by the specific user "username".

### Sort Processes by CPU Usage
```bash
ps aux --sort=-%cpu
```
Displays processes sorted by CPU usage in descending order.

### Display Full Command Line of Processes
```bash
ps auxww
```
Shows the full command line of processes, including arguments and options.

### Monitor Real-time Changes in Process Information
```bash
watch -n 1 'ps aux | grep processname'
```
Monitors real-time changes in process information for a specific process "processname".

:::tip
When using the ps command in MacOS, consider using the -A flag to display information about all processes in a user-friendly format.
:::

### How do I use ps in MacOS?
To use the ps command in MacOS, execute the following command:
```bash
ps -A
```

### How can I list all processes with ps in MacOS?
To list all processes with ps in MacOS, use the following command:
```bash
ps aux
```

### How do I display process trees with ps in MacOS?
To display process trees with ps in MacOS, you can use the following command:
```bash
ps axjf
```

### How can I show extended information with ps in MacOS?
To show extended information with ps in MacOS, run the following command:
```bash
ps -e -o pid,ppid,pgid,command
```

### How do I filter processes with ps in MacOS?
To filter processes with ps in MacOS, use the following command with grep:
```bash
ps aux | grep <process_name>
```

### How can I sort processes by memory usage with ps in MacOS?
To sort processes by memory usage with ps in MacOS, use the following command:
```bash
ps aux --sort -rss
```

### How do I show processes of a specific user with ps in MacOS?
To show processes of a specific user with ps in MacOS, run the following command:
```bash
ps -U <username>
```

### How do I display parent process IDs with ps in MacOS?
To display parent process IDs with ps in MacOS, execute the following command:
```bash
ps -o pid,ppid,comm
```

### How can I refresh the display continuously with ps in MacOS?
To refresh the display continuously with ps in MacOS, use the watch command along with ps:
```bash
watch -n 1 'ps aux'
```

## Applications of the ps command

- Viewing information about running processes
- Showing details about specific processes
- Checking resource utilization of processes
- Displaying a snapshot of the current processes
- Monitoring system activity and performance