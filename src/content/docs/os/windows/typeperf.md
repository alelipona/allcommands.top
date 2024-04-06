---
title: TYPEPERF Windows command
description: Learn how to use the Windows typeperf command to gather performance data and create custom monitoring tools.
---

The Windows typeperf command is a powerful tool used to collect performance data from various system components. By specifying specific counters and intervals, users can gather valuable information to analyze system performance and troubleshoot issues. Typeperf can be used in scripts and batch files to create custom monitoring tools tailored to specific needs. With its flexibility and ease of use, the typeperf command is a valuable asset for system administrators and power users looking to optimize system performance.
## TYPEPERF Syntax:
```cmd
typeperf [options] [count] [interval]
```
## Options:
| Option              | Description                                |
|---------------------|--------------------------------------------|
| -?                  | Displays the typeperf command syntax       |
| -q                  | Queries the computer for performance data  |
| -sc <computer>      | Specifies the remote computer to query     |
| -si <hostname>      | Specifies the remote computer to query     |
| -o <filename>       | Specifies the output file for the data     |
| -f <format>         | Specifies the format for the output        |
| -cfg <filename>     | Enables the collection of performance data from a configuration file |

## Parameters:
| Parameter           | Description                                            |
|---------------------|--------------------------------------------------------|
| count               | Specifies the number of samples to display             |
| interval            | Specifies the time in seconds between each sample      |


:::caution
Exercise caution when using the typeperf command, especially when querying remote computers, as it may impact system performance. Make sure to understand the options and parameters before running the command.
:::
## TYPEPERF CMD Examples:
### Monitor Processor Usage
```cmd
typeperf "\Processor(_Total)\% Processor Time"
```
Retrieves the percentage of processor usage for all processors on the system.

### Monitor Memory Usage
```cmd
typeperf "\Memory\Available MBytes"
```
Displays the total amount of physical memory available on the system in megabytes.

### Monitor Disk Usage
```cmd
typeperf "\LogicalDisk(C:)\% Free Space"
```
Shows the percentage of free space on the C: drive.

### Monitor Network Interface Traffic
```cmd
typeperf "\Network Interface(*)\Bytes Total/sec"
```
Monitors the total number of bytes transmitted and received per second on all network interfaces.

### Monitor Process ID
```cmd
typeperf "\Process(EXCEL)\ID Process"
```
Gets the process ID of the Excel application.

### Monitor System Uptime
```cmd
typeperf "\System\System Up Time"
```
Shows the system uptime in seconds.
:::tip
When using the typeperf command in Windows, make sure to refer to the official documentation or use the "--help" option to explore the various available options and parameters for collecting performance counter data.
:::

### How do I use typeperf in Windows?
To use the typeperf command in Windows, execute the following command:
```cmd
typeperf --option <value>
```

### What is the purpose of the typeperf command in Windows?
The typeperf command in Windows is used to retrieve performance counter data for monitoring system performance.

### How can I display a list of available performance objects using typeperf?
To display a list of available performance objects with typeperf, use the following command:
```cmd
typeperf /q
```

### How do I specify the interval for data collection with typeperf in Windows?
To specify the interval for data collection using typeperf, you can use the "-si" or "--sampleinterval" option followed by the desired interval in seconds. For example:
```cmd
typeperf "\Processor(_Total)\% Processor Time" -si 5
```

### Is it possible to save the collected data to a log file with typeperf?
Yes, you can save the collected data to a log file by using the "/o" or "--output" option followed by the path to the output file. For example:
```cmd
typeperf "\Memory\Available MBytes" -o C:\Logs\memory_log.csv
```

### How can I filter the performance counters to monitor specific system components with typeperf?
To filter the performance counters and monitor specific system components, you can specify them in the command. For example:
```cmd
typeperf "\LogicalDisk(*)\Avg. Disk Bytes/Write" "\LogicalDisk(*)\Avg. Disk Bytes/Read"
```

### How do I stop the data collection process with typeperf in Windows?
To stop the data collection process with typeperf, you can press "Ctrl + C" in the command prompt where typeperf is running.

### How can I format the output of the typeperf command in Windows?
To format the output of the typeperf command, you can use the "-sc" or "--scale" option to specify the scale factor for the data. For example:
```cmd
typeperf "\Processor(_Total)\% Processor Time" -sc 1
```
## Applications of the TYPEPERF Command

- Monitoring system performance
- Collecting performance data for analysis
- Troubleshooting performance-related issues
- Creating custom performance monitoring profiles
- Automating performance monitoring tasks