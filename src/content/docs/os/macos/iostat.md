---
title: iostat MacOS Command Guide
description: A comprehensive guide to the iostat command on MacOS, including usage, options, and examples.
---

The MacOS iostat command provides essential information about system input/output statistics, helping users monitor disk and CPU performance. With various options like -C, -w, -c, and -d, users can customize the output to display specific metrics. By analyzing disk utilization, CPU idle time, and other key indicators, users can optimize system performance and identify bottlenecks effectively. Ideal for system administrators, the iostat command is a powerful tool for performance tuning and troubleshooting on MacOS.

## iostat Syntax:
```bash
iostat [interval] [count]
```
## Options:
| Option | Description                  |
|--------|------------------------------|
| -C     | Print output in a condensed format.                         |
| -c     | Print individual CPU utilization.                          |
| -d     | Display disk utilization report.                           |
| -h     | Output in a human-readable format.                         |
| -n     | Report network utilization.                                 |
| -t     | Include the time of day in the report.                     |
| -w     | Report statistics for I/O devices.                         |
| -x     | Report extended disk statistics.                           |

## Parameters:
| Parameter | Description                                                                  |
|-----------|------------------------------------------------------------------------------|
| interval  | Specifies the time in seconds between each report. Default is 1 second.     |
| count     | Indicates the number of reports generated at intervals determined by the interval parameter. If count is not specified, iostat will continue to run until interrupted. |

:::caution
Exercise caution when using the iostat command, as it provides detailed performance statistics that can be overwhelming for inexperienced users. It is advised to refer to the manual or seek guidance before interpreting the output.
:::
## iostat Command Samples:
### Display CPU Utilization
```bash
iostat -c
```
Displays CPU utilization statistics.

### Monitor Disk I/O Activity
```bash
iostat -d
```
Monitors disk I/O activity.

### Display System Load Average
```bash
iostat -w 2
```
Displays system load average every 2 seconds.

### Show Interrupts
```bash
iostat -i
```
Displays the interrupt statistics.

### Display Network I/O Statistics
```bash
iostat -n
```
Displays network I/O statistics.

### Monitor CPU Utilization in Real-Time
```bash
iostat -C 5
```
Monitors CPU utilization in real-time every 5 seconds.

### Display All Statistics Together
```bash
iostat -z
```
Displays all statistics together.
:::tip
When using the iostat command in MacOS, consider using different options to gather specific information about system input/output statistics. Experiment with different flags and parameters to customize the output according to your needs.
:::

## iostat FAQ:
### How do I use iostat in MacOS?
To use the iostat command in MacOS, execute the following command:
```bash
iostat
```

### What is the purpose of the -w option in iostat?
The -w option in iostat is used to set the interval between each report's output. This allows you to control how often the statistics are displayed. 
```bash
iostat -w 5
```

### How can I display extended disk I/O statistics with iostat?
To display extended disk I/O statistics with iostat, use the -d flag in the command. This will provide detailed information about disk operations.
```bash
iostat -d
```

### How to show CPU statistics in iostat for MacOS?
To display CPU statistics in iostat for MacOS, use the -c flag in the command. This will show details on CPU usage and activity.
```bash
iostat -c
```

### Can I monitor specific disk partitions with iostat?
Yes, you can monitor specific disk partitions with iostat by specifying the partition(s) you want to track. Use the -n flag followed by the partition name(s) in the command.
```bash
iostat -n disk1 disk2
```

### How to continuously monitor system input/output statistics with iostat?
To continuously monitor system input/output statistics with iostat, use the -t flag in the command. This will display a timestamp for each report.
```bash
iostat -t
```
## Applications of the iostat command

- Monitoring system input/output (I/O) device loading
- Analyzing disk performance
- Troubleshooting disk bottlenecks
- Tracking disk utilization and throughput