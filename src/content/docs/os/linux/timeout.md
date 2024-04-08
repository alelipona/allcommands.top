---
title: timeout Linux command
description: Learn how to use the timeout command in Linux to set time limits for running commands and programs to prevent them from running indefinitely.
---

The timeout command in Linux allows users to run other commands with a specified time limit, after which the command will be terminated. This can help prevent commands from running indefinitely and consuming system resources. The syntax for the timeout command is simple, requiring only the desired duration and the command to be executed. Users can also customize the behavior of the timeout command by specifying what signal to send when the time limit is reached. This functionality can be useful for automating tasks, managing system resources, and ensuring that processes do not cause system slowdowns or crashes.

## timeout Syntax:
```bash
timeout [option] [duration] [command]
```
## Options:
| Option | Description              |
|--------|--------------------------|
| -s     | Specify a different signal to send |
| -k     | Kill the process after the timeout|
| --preserve-status | Return the command's exit status |
| --foreground | Run the command in the foreground instead of the background |

## Parameters:
| Parameter | Description              |
|-----------|--------------------------|
| duration  | Timeout duration in seconds |
| command   | Command to execute with the timeout |

:::caution
Always ensure that the 'timeout' command is used responsibly to prevent unintended consequences such as prematurely terminating critical processes or systems.
:::
## timeout bash Examples:
### Run a Command with a Time Limit
```bash
timeout 5s ls -l
```
Runs the "ls -l" command with a time limit of 5 seconds.

### Terminate a Command After a Specific Duration
```bash
timeout 3m sleep 10
```
Terminates the sleep command after 3 minutes.

### Display Custom Error Message with Timeout
```bash
timeout --kill-after=8s --signal=KILL 6s ping google.com
```
Runs the ping command for 6 seconds and sends a KILL signal if it exceeds 8 seconds.

### Run a Command in the Background with Timeout
```bash
timeout 10s bash -c "sleep 15" &
```
Runs the sleep command with a duration of 15 seconds in the background, terminating it after 10 seconds.

### Specify Timeout in Minutes
```bash
timeout 2m ls
```
Runs the ls command with a timeout of 2 minutes.

### Use a Different Signal for Timeout
```bash
timeout --signal=SIGTERM 3s find / -name "*.txt"
```
Runs the find command with a timeout of 3 seconds, using the SIGTERM signal for termination.
:::tip
When using the `timeout` command in Linux, be mindful of the execution time limit you set to prevent unexpected termination of processes. Always test the command with a suitable timeout value before using it in production environments.
:::

## timeout Command Help Center:

### How do I use timeout in Linux?
To use the timeout command in Linux, execute the following command:
```bash
timeout --option <value>
```

### How can I specify the timeout duration in seconds?
You can specify the timeout duration in seconds by providing the value directly in the command. For example:
```bash
timeout 10s <command>
```

### Can I send a specific signal to the process when it times out?
Yes, you can send a specific signal to the process when it times out using the `--signal` option. Here's an example:
```bash
timeout --signal=SIGTERM 5s <command>
```

### Is there a default signal sent when no specific signal is provided for timeout?
By default, when no signal is specified for timeout, a `SIGTERM` signal is sent to the process. Here's an example:
```bash
timeout 3s <command>
```

### How do I ignore the exit status of the command being run with timeout?
If you want to ignore the exit status of the command run with timeout, you can use the `--preserve-status` option. For example:
```bash
timeout --preserve-status 5s <command>
```

### Can I show a custom message when the command times out with timeout?
Yes, you can display a custom message when the command times out using the `--foreground` option along with the `--kill-after` option. Here's an example:
```bash
timeout --foreground --kill-after=10s 15s <command>
```

### How can I prevent timeout from killing commands in a subshell?
To prevent timeout from killing commands in a subshell, add `exec` before the command. For example:
```bash
timeout 10s exec <command>
```

### How do I display help information for the timeout command?
You can view the help information for the timeout command by using the `--help` option. Here's an example:
```bash
timeout --help
```

## Applications of the timeout command
- Limiting the execution time of a command or script
- Monitoring long-running processes
- Automating tasks by setting a specific time limit
- Preventing resource exhaustion caused by processes running indefinitely
- Controlling the duration of a command's execution