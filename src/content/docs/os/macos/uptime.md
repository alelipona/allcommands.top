---
title: MacOS uptime bash
description: Check your system's uptime on MacOS using the command line. Learn how to view the time since your computer was last rebooted with the uptime command.
---

The MacOS uptime command allows users to check how long their system has been running since the last reboot. By entering a simple command in the terminal, users can quickly view the uptime of their Mac device. This information can be useful for troubleshooting, system maintenance, and monitoring the stability of the computer. The uptime command displays the time since the last reboot in days, hours, minutes, and seconds, providing a comprehensive overview of the system's operational status. It is a convenient tool for tracking system performance and identifying any issues related to system uptime.

## uptime Syntax:
```bash
uptime
```

## Options:
| Option | Description                     |
|--------|---------------------------------|
| -h     | Display help message            |
  
## Parameters:
| Parameter | Description                 |
|-----------|-----------------------------|
| None      |                             |

:::caution
Exercise caution when using the uptime command, as it does not have any additional options or parameters which could affect its output.
:::
## uptime Usage:
### Check System Uptime
```bash
uptime
```
Displays how long the system has been running.

### Display Uptime in More Readable Format
```bash
uptime -p
```
Shows the uptime in a more user-friendly format.

### Show Load Averages
```bash
uptime -s
```
Displays the time when the system was last booted.

### Show Current Time and Uptime
```bash
uptime -V
```
Shows the current time and system uptime.
:::tip
When using the uptime command in MacOS, remember that it provides information about system uptime, load averages, and current time. Make sure to refer to the command's manual or help documentation for more detailed options and usage instructions.
:::

### How do I use uptime in MacOS?
To use the uptime command in MacOS, execute the following command:
```bash
uptime
```

### What is the option to display uptime in MacOS?
To display uptime in a more readable format in MacOS, use the following command:
```bash
uptime -p
```

### How can I see load averages with uptime in MacOS?
To view load averages as well as uptime in MacOS, run the following command:
```bash
uptime
```

### Can I check system uptime history with uptime in MacOS?
To check the history of system uptime with the uptime command in MacOS, run the following command:
```bash
sysctl kern.boottime
```

### What is the refresh rate for uptime in MacOS?
To set a specific refresh rate for displaying system uptime in MacOS, use the following command:
```bash
uptime -s
```

### How can I get the timeframe when the system was started with uptime in MacOS?
To get the specific date and time when the system was started using the uptime command in MacOS, run the following command:
```bash
uptime -s
```

### Is it possible to customize the information displayed by uptime in MacOS?
Yes, you can customize the output of the uptime command in MacOS using various options, such as -p for a more human-readable format.
```bash
uptime -p
```

## Applications of the uptime MacOS command

- Checking how long a Mac system has been running without a restart
- Monitoring system stability and performance over time
- Determining if any recent changes or updates have affected system reliability
- Troubleshooting issues related to system crashes or unexpected reboots
- Analyzing trends in system uptime for maintenance scheduling or proactive actions.