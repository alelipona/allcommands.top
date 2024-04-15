---
title: pkill MacOS command
description: MacOS pkill command allows users to terminate processes using keywords. Learn how to efficiently manage processes on Mac with pkill.
---

The MacOS pkill command is a powerful tool for terminating processes based on specific criteria or keywords. By using pkill, users can efficiently manage running processes on their Mac systems. Instead of having to manually find and kill processes one by one, pkill allows for the termination of multiple processes at once, streamlining the process management workflow. With pkill, users can specify the criteria for process termination, such as process name or other attributes, making it a versatile and flexible command for managing system processes effectively.

## pkill Syntax:
```bash
pkill [option] [parameter]
```

## pkill Options:
| Option | Description                           |
|--------|---------------------------------------|
| -l     | List all available signal names      |
| -o     | Oldest process (it is recommended to use with -x) |
| -x     | Require an exact match for the process name |
| -u     | Specify the username of the processes to be signaled |

:::caution
Exercise caution while using the pkill command as it can terminate processes abruptly, leading to potential data loss or system instability.
:::

## Parameters:
| Parameter      | Description                           |
|----------------|---------------------------------------|
| process_name   | The name of the process to be killed  |

## pkill Command Usage Examples:
### Terminate a Process by Name
```bash
pkill -f "chrome"
```
This command will terminate any process with the name "chrome".

### Kill a Process by PID
```bash
pkill -9 -P 1234
```
This will send a SIGKILL signal (forceful termination) to the process with PID 1234 and all its child processes.

### Stop Multiple Processes
```bash
pkill -f "python.*script"
```
This command will stop all processes whose name matches the regular expression "python.*script".

### Terminate a Process by Username
```bash
pkill -u username firefox
```
Kills all instances of the "firefox" process owned by the user with the username "username".

### Stop a Process Group
```bash
pkill -g 5678
```
This command will kill all processes that are in the same process group as the process with PGID 5678.
:::tip
When using the pkill command in MacOS, be mindful of the process names or identifiers you provide as arguments to avoid accidentally terminating important processes.
:::

### How do I use pkill in MacOS?
To use the pkill command in bash, execute the following command:
```bash
pkill --signal <signal_number> <process_name>
```

### How do I forcefully kill a process in MacOS using pkill?
To forcibly kill a process in MacOS using pkill, you can use the following command:
```bash
pkill -9 <process_name>
```

### How do I kill all processes by a specific user in MacOS using pkill?
To kill all processes owned by a specific user in MacOS using pkill, run the following command:
```bash
pkill -u <username>
```

### How do I list the processes that match a pattern before killing them with pkill in MacOS?
To list the processes that match a pattern before killing them using pkill in MacOS, use the following command:
```bash
pgrep -l <pattern>
```

### How can I quiet the output of pkill in MacOS?
To quiet the output of the pkill command in MacOS, you can use the following command:
```bash
pkill -o <options> <process_name>
```

### How can I include the parent process in the kill operation with pkill in MacOS?
To include the parent processes in the kill operation using pkill in MacOS, execute the command below:
```bash
pkill -P <parent_pid> <process_name>
```

### How do I perform a case-insensitive kill with pkill in MacOS?
To perform a case-insensitive kill with pkill in MacOS, you can use the following command:
```bash
pkill -i <process_name>
```

### How do I kill a process by its process identifier with pkill in MacOS?
To kill a process by its process identifier using pkill in MacOS, run the following command:
```bash
pkill -s <signal_number> -P <parent_pid> <process_pid>
```
## Applications of the pkill command

- Terminating a process by name
- Sending signals to processes
- Simplifying the process termination process