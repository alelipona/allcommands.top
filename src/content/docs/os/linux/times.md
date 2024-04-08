---
title: What is times Linux command?
description: The Linux times command is used to display process resource usage. It shows the total cpu time, system cpu time, and user cpu time.
---

The Linux times command is used to display process resource usage. It shows the total cpu time, system cpu time, and user cpu time.

## times Syntax:
```bash
times
```
## times Options:
| Option     | Description                   |
|------------|-------------------------------|
| None       | Displays the accumulated process times of the shell and its children.  |

:::caution
Be cautious when using the times command as it provides detailed system resource usage information and may overwhelm the terminal output if used in certain contexts.
:::

## Parameters:
None
## times Command Usage Examples:
### Measure CPU Time of a Command
```bash
times bash -c "ls -l"
```
Measures the amount of user and system CPU time consumed by the "ls -l" command.

### Retrieve Process Times
```bash
times
```
Displays the user and system times for the current process and its children.

### Measure Time Taken by a Process
```bash
times ls
```
Reports the user and system CPU time consumed by the "ls" command.

### Monitor Time Statistics of a Command
```bash
times sh -c "for i in {1..5}; do echo $i; done"
```
Tracks the CPU times for the shell running the loop that prints numbers from 1 to 5.

### Calculate Execution Time of a Script
```bash
times ./script.sh
```
Captures the user and system times for executing the "script.sh" script.

:::tip
When using the times command in Linux, remember that it is built into the shell itself rather than being an external command. This means that it does not have its own man page. To get information on how to use it, you can refer to the bash documentation by typing `help times` in your terminal.
:::

### How do I use times in Linux?
To use the times command in bash, execute the following command:
```bash
times
```

### What information does times provide in Linux?
The times command in Linux provides information on the resources used by a process and its children. This includes the user and system time used, as well as the system's elapsed real time.
```bash
times
```

### How can I redirect the output of times to a file in Linux?
To redirect the output of the times command to a file in Linux, you can use the following syntax:
```bash
times > output.txt
```

### Can I customize the format of the output from times in Linux?
Yes, you can customize the format of the output from the times command in Linux by using the TIMEFORMAT variable. Here's an example:
```bash
TIMEFORMAT="%R %U %S"
times
```

### How can I measure the resources used by a specific command in Linux using times?
To measure the resources used by a specific command in Linux using times, you can use the following syntax:
```bash
{ command you want to measure; } 2>&1 1>/dev/null | times
``` 

### Is there a way to capture only specific fields of output from the times command in Linux?
Yes, you can capture only specific fields of output from the times command in Linux by using a combination of shell commands or scripts to parse the output. Here's an example:
```bash
times | awk '{ print $1 }'
```

### How can I measure the execution time of a script in Linux using times?
To measure the execution time of a script in Linux using times, you can use the following syntax:
```bash
{ bash script.sh; } 2>&1 1>/dev/null | times
``` 

### Can the times command be used to get detailed process timing information in Linux?
No, the times command in Linux provides cumulated timing information for all the commands executed within the shell. If you require detailed process timing information, tools like 'time' or 'strace' might be more suitable.
```bash
times
```
## Applications of the times command

1. Calculating the amount of time it takes for a command to execute
2. Measuring the resource usage of a process, including CPU time and memory usage
3. Benchmarking the performance of a program
4. Monitoring the resource usage of a specific process
5. Collecting data on the execution of a command or script