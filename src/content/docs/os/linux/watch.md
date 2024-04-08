---
title: Linux watch command
description: Learn how to use the Linux watch command to continuously monitor and display changes in a command's output. 
---

The Linux watch command is a handy tool that allows users to monitor the output of a specified command at regular intervals. It continuously executes the command and updates the display with the most recent output. This can be useful for keeping an eye on changing data, such as log files, system performance metrics, or program output. By default, watch refreshes every 2 seconds, but this interval can be customized. It provides a convenient way to observe and track real-time updates without the need for manual intervention. The watch command is a simple yet powerful utility for monitoring processes and staying informed of changes as they occur.

## watch Syntax:
```bash
watch [option] [command]
```
## Options:
| Option | Description                             |
|--------|-----------------------------------------|
| -n     | Specify the interval between command executions |
| -t     | Turn off watch's command line timestamp |
| -d     | Highlight the difference between successive updates |
| -h     | Display help information |

## Parameters:
| Parameter | Description                  |
|-----------|------------------------------|
| command   | The command to be watched    |

:::caution
Exercise caution when using the watch command with short intervals, as it can consume system resources, especially with commands that produce a lot of output.
:::
## watch Usage:
### Monitor System Time
```bash
watch date
```
This command will continuously display the system time.

### Monitor Disk Usage
```bash
watch df -h
```
Constantly monitors disk space usage on the system.

### Monitor Log File Changes
```bash
watch tail /var/log/syslog
```
Shows updates on the syslog file, displaying the last few lines.

### Monitor CPU Usage
```bash
watch -n 1 mpstat
```
Continuously displays CPU usage information refreshed every 1 second.
:::tip
When using the watch command in Linux, remember to specify the interval at which you want the command to be executed repeatedly. By default, watch refreshes every 2 seconds. You can change this interval using the -n or --interval option followed by the number of seconds.
:::

### How do I use watch in Linux?
To use the watch command in Linux, execute the following command:
```bash
watch ls
```

### How can I customize the refresh interval in watch?
To customize the refresh interval in the watch command, specify the interval using the -n or --interval option followed by the number of seconds. For example:
```bash
watch -n 5 ls -l
```

### How can I make watch highlight the changes in the output?
To make watch highlight the changes in the output, you can use the --differences or -d option. This will highlight the changes since the last refresh. For example:
```bash
watch --differences ls
```

### How do I stop watch from clearing the screen before each refresh?
To prevent watch from clearing the screen before each refresh, you can use the -c or --no-clear option. This will keep the previous output on the screen. For example:
```bash
watch --no-clear date
```

### How can I display the elapsed time and date alongside the command output in watch?
To display the elapsed time and date alongside the command output in watch, you can use the -t or --timestamp option. This will show the current time and date on each line of output. For example:
```bash
watch --timestamp ps aux
```

### How can I run a command with watch only a specific number of times?
To run a command with watch only a specific number of times, you can use the -c or --count option followed by the number of times you want the command to run. For example, the following command will run ls 5 times:
```bash
watch --count=5 ls
```

### How can I have watch display the output in color?
To make watch display the output in color, you can use the --color or -c option. This will enable color highlighting in the output. For example:
```bash
watch --color ls --color
```

## Applications of the watch command

- Monitoring system processes
- Checking the output of a command periodically
- Monitoring system resources
- Checking log file updates in real-time
- Monitoring system performance metrics