---
title: What is uptime Linux command?
description: Check the running time of a Linux system with the uptime command. Learn how to view system uptime and load averages in Linux.
---

The Linux uptime command is used to check the system's running time, as well as load averages. It displays the current time, how long the system has been running, the number of users currently logged on, and load averages for the past 1, 5, and 15 minutes.

## uptime Syntax:
```bash
uptime [options]
```

## uptime Options:

| Option   | Description                                 |
|----------|---------------------------------------------|
| -p       | Display current uptime in a more human-readable format  |
| -s       | Display the time since the system was started     |
| -V       | Display version information                   |
 
:::caution
Avoid incorrect usage of uptime options as it may lead to inaccurate output.
:::

## Parameters:
None
## uptime Command Usage Examples:

### Display System Uptime
```bash
uptime
```
Shows how long the system has been running along with the current time, number of users, and load average.

### Display System Uptime in a Specific Format
```bash
uptime -p
```
Displays the uptime in a more human-readable format, showing only the time since the system was last booted.

### Display Uptime with Refresh Interval
```bash
watch -n 1 uptime
```
Updates the uptime display every 1 second, providing a real-time view of system uptime.

### Display Uptime and Load Average
```bash
uptime -s
```
Prints the system start time along with the current system time. Additionally, it shows the current number of users and load averages.

### Show the Uptime History
```bash
last reboot
```
View the reboot history of the system, showing when the system was last rebooted.
:::tip
When using the uptime command in Linux, remember to check the manual pages (`man uptime`) for more options and detailed information on how to interpret the output.
:::

### How do I use uptime in Linux?
To use the uptime command in bash, execute the following command:
```bash
uptime
```

### What information does uptime command provide?
The uptime command displays the current time, how long the system has been running, how many users are currently logged on, and the system load averages for the past 1, 5, and 15 minutes.
```bash
uptime
```

### How can I format the output of the uptime command?
You can format the output of the uptime command to display in a more user-friendly way using the `uptime -p` option. This will show the uptime in a more human-readable format.
```bash
uptime -p
```

### How can I see the system's load averages with uptime?
To display just the system's load averages without the other information provided by uptime, you can use the `-q` or `--load-average` option.
```bash
uptime -q
```

### How can I check when the system was last booted?
If you want to find out when the system was last booted along with the uptime information, use the `-s` or `--since` option.
```bash
uptime -s
```

### Can I see the number of logged-in users using uptime?
Yes, you can see the number of users logged in using uptime by using the `-u` or `--users` option.
```bash
uptime -u
```

### How can I get continuous updates of system uptime?
To get continuous updates of the system's uptime, you can use the `watch` command along with uptime. This will periodically run the uptime command and display the output.
```bash
watch uptime
```

### How can I get a snapshot of the current system load with uptime?
If you want a snapshot of the current system load without the uptime information, you can use the `-s` or `--sysinfo` option.
```bash
uptime -s
```

## Applications of the uptime command

1. Checking how long the system has been running since the last reboot.
2. Monitoring system availability and performance.
3. Evaluating system stability and reliability.
4. Determining peak usage times for maintenance scheduling.
5. Troubleshooting system crashes or performance issues.