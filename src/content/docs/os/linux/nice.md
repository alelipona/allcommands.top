---
title: nice command in Linux
description: Learn about the Linux nice command and how to prioritize CPU usage for processes.
---

The Linux nice command is used to set the priority of processes, allowing users to control CPU resource allocation. By adjusting the "niceness" levels, users can determine the importance of processes and influence how system resources are utilized. Nice values range from -20 to 19, with lower values indicating higher priority. This command is particularly useful for managing system performance and ensuring critical tasks receive adequate resources.

## nice Syntax:
```bash
nice [OPTION] [COMMAND [ARG]...]
```
## Linux nice Options:
| Option | Description                      |
|--------|----------------------------------|
| -n     | Specify a niceness value          |
| -adjust| Adjust the niceness by a certain value |

## nice Parameters:
| Parameter | Description                              |
|-----------|------------------------------------------|
| COMMAND   | Command to be executed                    |
| ARG       | Arguments to be passed to the command    |

:::caution
Using the nice command with a very high niceness value might limit the responsiveness of the process and have unintended consequences. Use with caution.
:::
## How to use nice command:
### Run a process with very low priority
```bash
nice -n 19 ./my_program
```
Runs the program "my_program" with very low priority.

### Increase the priority of a running process
```bash
renice -n -5 -p 12345
```
Increases the priority of the process with PID 12345 by setting its nice value to -5.

### Set the priority of a command before executing it
```bash
nice -n 10 ./my_script.sh
```
Sets the priority of the script "my_script.sh" to 10 before executing it.

### List the current nice values of all running processes
```bash
nice --10
```
Displays the current nice values of all running processes.

### Lower the priority of a currently running process
```bash
renice -n 5 -p 54321
```
Lowers the priority of the process with PID 54321 by setting its nice value to 5.

### Run a process with high priority
```bash
nice -n -15 ./important_program
```
Runs the important program "important_program" with high priority.

### Monitor resource usage and priority of a process
```bash
top -p 12345
```
Monitors the resource usage and priority of the process with PID 12345 using the top command.

### Run a command with specific priority level
```bash
nice --adjustment=15 ./low_priority_command
```
Runs the low priority command "low_priority_command" with a specific priority level of 15.
:::tip
When using the nice command in Linux, keep in mind that the lower the niceness value, the higher the priority of the process. The niceness value ranges from -20 (most favorable scheduling) to 19 (least favorable scheduling).
:::

### How do I use nice in Linux?
To use the nice command in Linux, execute the following command:
```bash
nice --adjustment=10 ./my_script.sh
```

### How can I run a command with a specific niceness value?
To run a command with a specific niceness value in Linux, use the following syntax:
```bash
nice -n 5 ./my_program
```

### How can I check the current niceness value of a process?
To check the current niceness value of a process in Linux, you can use the following command:
```bash
nice -n 10 --pid=1234
```

### How do I change the niceness value of a running process?
To change the niceness value of a running process in Linux, you can use the renice command with the following syntax:
```bash
renice -n 10 -p 1234
```

### How do I start a new process with a specific niceness value?
To start a new process with a specific niceness value in Linux, you can use the nice command followed by the desired niceness level, like this:
```bash
nice -n 15 ./my_script.sh
```

### How can I set the CPU affinity for a process using nice?
You can set the CPU affinity for a process using nice by combining it with the taskset command. Here is an example:
```bash
nice -n 10 taskset -c 0-3 ./my_program
```

### How do I view a list of running processes with their niceness values?
To view a list of running processes with their niceness values in Linux, you can use the following command:
```bash
ps -eo pid,comm,nice
```

### How can I run a command at a lower priority using nice?
To run a command at a lower priority in Linux, you can use the nice command with a higher niceness value. Here is an example:
```bash
nice -n 15 ./my_backup_script.sh
```

## Applications of the nice command

- Setting priority levels for processes
- Controlling resource allocation for processes
- Improving system performance by prioritizing important processes
- Running CPU-intensive tasks without impacting other operations
- Managing system load dynamically based on process requirements