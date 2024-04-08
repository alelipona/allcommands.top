---
title: strace command in Linux
description: Trace system calls and signals in Linux with the powerful strace command. Learn how to diagnose and troubleshoot issues efficiently.
---

The strace command in Linux is a powerful utility used to trace system calls and signals made by a program. By monitoring interactions between processes and the kernel, strace helps diagnose and troubleshoot issues efficiently. This tool can be invaluable for understanding the behavior of programs, identifying performance bottlenecks, and debugging complex problems. By providing detailed insight into how programs interact with the operating system, strace is a key asset for system administrators and developers alike.

## strace Syntax:
```bash
strace [options] command [args]
```
## Linux strace Options:
| Option | Description |
|--------|-------------|
| -c     | Print a summary of the counts of each system call and exit |
| -f     | Trace child processes as they are created by currently traced processes |
| -o filename | Write the trace output to the specified filename |
| -p pid | Attach to the process with the specified process ID and begin tracing |
| -s size | Specify the maximum string size to print (default is 32) |
| -t     | Prefix each line of the trace with the time of day |
| -T     | Prefix each line with the time spent in each system call |
| -e trace=set | Perform a filtered trace based on the specified set of system calls |
| -y     | Print paths associated with file descriptor arguments |
| -E var=value | Set the value of an environment variable for the traced process |
| -h     | Display help message and exit |

## strace Parameters:
| Parameter | Description |
|-----------|-------------|
| command   | The command to be traced |
| args      | Optional arguments to be passed to the command |

:::caution
Exercise caution when using the strace command as it can generate a large amount of output, especially when tracing complex processes. Use it with a specific command or process to avoid overwhelming the terminal with excessive information.
:::
## How to use strace command:
### Trace a Process by PID
```bash
strace -p <PID>
```
This command traces the system calls made by the process with the specified PID.

### Trace a Command
```bash
strace ls
```
Executes the "ls" command while tracing the system calls it makes.

### Trace a Process and Its Children
```bash
strace -f command
```
Traces the specified command and any child processes it spawns.

### Save strace Output to a File
```bash
strace -o output.txt command
```
Redirects the strace output of the command to the specified file.

### Display Time Taken by Each System Call
```bash
strace -T command
```
Shows the time taken by each system call made by the specified command.

### Trace System Calls related to File I/O
```bash
strace -e trace=file command
```
Traces only the system calls related to file operations made by the specified command.

### Trace Only Specific System Calls
```bash
strace -e trace=open,read command
```
Traces only the "open" and "read" system calls made by the specified command.

### Filter Output for a Specific System Call
```bash
strace -e open command
```
Filters the strace output to display only the system call "open" made by the specified command.
:::tip
When using the strace command in Linux, make sure to carefully analyze the output to identify any issues or errors. Pay attention to system calls, signals, and error messages to diagnose problems effectively.
:::

### How do I use strace in Linux?
To use the strace command in Linux, execute the following command:
```bash
strace ls
```

### What is the purpose of the strace command in Linux?
The strace command in Linux is used to trace and display the system calls and signals made by a process. It is helpful for troubleshooting and understanding the behavior of programs.

### How can I trace a specific process with strace in bash?
To trace a specific process with strace in bash, use the following command:
```bash
strace -p <PID>
```

### How do I save the strace output to a file in Linux?
To save the strace output to a file in Linux, run the command with output redirection, like this:
```bash
strace ls > output.txt
```

### Can strace be used to trace multiple processes simultaneously in Linux?
Yes, strace can be used to trace multiple processes simultaneously in Linux by specifying multiple process IDs (PIDs) separated by commas.
```bash
strace -p <PID1>,<PID2>
```

### How can I show timestamps with strace output in Linux?
To show timestamps with strace output in Linux, use the -t option in the command:
```bash
strace -t ls
```

### Is it possible to follow forks with strace in bash?
Yes, it is possible to follow forks with strace in bash using the -f option in the command. This option traces child processes as they are created.
```bash
strace -f ls
```

### How can I display both system calls and signals with strace in Linux?
To display both system calls and signals with strace in Linux, use the -v option in the command:
```bash
strace -v ls
```

## Applications of the strace command

- Debugging system calls and signals
- Tracing and analyzing the behavior of programs
- Troubleshooting and identifying issues with applications
- Monitoring system calls and function calls
- Analyzing the performance of programs
- Studying the interactions between processes and the kernel
- Understanding the flow of data between processes and the system