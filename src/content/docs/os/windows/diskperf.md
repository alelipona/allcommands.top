---
title: DISKPERF Windows command
description: Learn how to use the Windows diskperf command to enable or disable performance counters for physical and logical disks.
---

The Windows diskperf command is a utility that allows users to enable or disable the collection of performance counters for physical and logical disks on a Windows system. By default, disk performance counters are enabled, but users can use the diskperf command to turn them off if needed. This command can be particularly useful for troubleshooting disk performance issues or monitoring system performance over time. The diskperf command can be run from the Command Prompt and offers various options for managing disk performance counters. It is important to note that changing the status of disk performance counters may require administrative privileges.

## DISKPERF Syntax:
```cmd
diskperf [start | stop] [LogicalDisk]
```

## Windows DISKPERF Options:
| Option      | Description                                |
|-------------|--------------------------------------------|
| start       | Starts the disk performance counters.       |
| stop        | Stops the disk performance counters.        |
| LogicalDisk | Specifies a logical disk to start or stop.  |

## DISKPERF Parameters:
| Parameter    | Description                                |
|--------------|--------------------------------------------|
| start        | Starts collecting performance data.        |
| stop         | Stops collecting performance data.         |
| LogicalDisk  | The specific logical disk to collect data. |

:::caution
Using the diskperf command without caution may lead to unnecessary disk monitoring and potentially impact system performance. It is recommended to only enable disk performance monitoring when needed and disable it once the required data has been collected.
:::

## How to use DISKPERF command:
### Enable Disk Performance Counters
```cmd
diskperf -Y
```
Enables system wide disk performance counters.

### Disable Disk Performance Counters
```cmd
diskperf -N
```
Disables system wide disk performance counters.

### Display Disk Performance Counter Status
```cmd
diskperf -YX
```
Displays the current status of disk performance counters.

### Enable Disk Performance Counters for Specific Drives
```cmd
diskperf -Y C:
```
Enables disk performance counters for the specified drive (e.g., drive C).

### Disable Disk Performance Counters for Specific Drives
```cmd
diskperf -N D:
```
Disables disk performance counters for the specified drive (e.g., drive D).

### Enable Disk Performance Counters and Include Logical Drives
```cmd
diskperf -YL
```
Enables disk performance counters for logical drives as well.

### Display Disk Performance Counters Help Information
```cmd
diskperf -?
```
Displays help information and usage guidelines for the diskperf command.

### Enable Disk Performance Counters and Include Volume Performance Counters
```cmd
diskperf -YV
```
Enables disk performance counters and includes volume performance counters.

:::tip
Remember that the diskperf command in Windows CMD is a powerful tool but should be used with caution, especially when making changes to disk performance settings. Always ensure you have the necessary permissions before executing any diskperf commands.
:::

### How do I use diskperf in CMD?
To use the diskperf command in CMD, execute the following command:
```cmd
diskperf --y
```

### What is the purpose of the diskperf command?
The diskperf command is used to enable or disable the disk performance counters on a Windows system.

### How can I enable disk performance counters in CMD?
You can enable disk performance counters in CMD by running the following command:
```cmd
diskperf -y
```

### How can I disable disk performance counters using the diskperf command?
To disable disk performance counters using the diskperf command, you can use the following syntax:
```cmd
diskperf -n
```

### How do I check the current status of disk performance counters?
To check the current status of disk performance counters in CMD, you can use the following command:
```cmd
diskperf -s
```

### Can I reset the disk performance counters using diskperf?
Yes, you can reset the disk performance counters using the diskperf command by running:
```cmd
diskperf -r
```

### How can I log disk performance data with diskperf?
To log disk performance data using diskperf in CMD, you can execute the following command:
```cmd
diskperf -yd
```

### What is the command to display the disk performance data log settings?
To display the disk performance data log settings using the diskperf command, you can use the following syntax:
```cmd
diskperf -yd
```

### Can I set a specific sampling interval for disk performance data logging with diskperf?
Yes, you can set a specific sampling interval for disk performance data logging using diskperf in CMD by running the following command:
```cmd
diskperf -yd -t 5
```
## Applications of the DISKPERF Command

- Enable performance counters for physical and logical disks.
- Enable performance counters for all disks on the system.
- Disable performance counters for all disks on the system.
- Display the current state of disk performance counters.
- View the command syntax and parameters for the DISKPERF command.