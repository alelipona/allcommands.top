---
title: nice command in MacOS
description: Adjust process priority in MacOS with the nice command.
---

The nice command in MacOS allows users to adjust the priority of processes for better system performance. By changing the process priority level, users can allocate more or fewer system resources to specific tasks, optimizing overall performance. This command can be particularly useful when running multiple tasks simultaneously, as it helps prevent one process from dominating system resources.
## nice Syntax:
```bash
nice [option] [command]
```
## MacOS nice Options:
| Option | Description |
|--------|-------------|
| -n [value] | Specify a positive or negative adjustment to the process' scheduling priority. The default value is 10. |

## nice Parameters:
| Parameter | Description |
|-----------|-------------|
| command | The command to be executed with different scheduling priority. |
:::caution
Be cautious when using the `nice` command as adjusting the scheduling priority of a process can impact system performance and resource allocation. It is recommended to only adjust the priority when necessary and with consideration of system resources.
:::
## How to use nice command:
### Set the CPU priority of a command
```bash
nice -n 10 ./my_command
```
Runs the command "my_command" with a lower CPU priority level of 10.

### Launch a process with higher priority
```bash
nice -n -10 ./my_command
```
Executes the command "my_command" with a higher CPU priority level of -10.

### See the current nice value of a running process
```bash
nice -n -p $(pgrep my_process)
```
Displays the current nice value of the process named "my_process".

### Run a command with maximum priority
```bash
sudo nice -n -20 ./my_critical_command
```
Executes the command "my_critical_command" with the highest CPU priority level of -20.

### Change the nice value of a running process
```bash
sudo renice -n 5 $(pgrep my_process)
```
Adjusts the nice value of the running command named "my_process" to a new level of 5.

### Run a process with default priority
```bash
nice ./my_command
```
Launches the command "my_command" with the default CPU priority level of 10.

### Check the nice value of a specific PID
```bash
sudo nice -n -p 1234
```
Retrieves the nice value of the process with the PID 1234.

### Run a command with higher priority in a limited interval
```bash
nice -n -5 timeout 30s ./my_command
```
Executes the command "my_command" with slightly higher CPU priority level of -5 for 30 seconds.
:::tip
When using the nice command in MacOS, make sure to understand how it affects the CPU priority of the specified command. By adjusting the niceness value, you can control the priority of processes, allowing you to manage resource allocation effectively.
:::

### How do I use nice in MacOS?
To use the nice command in MacOS, execute the following command:
```bash
nice --adjustment=10 ./my_script.sh
```

### How can I change the priority of a command with nice?
To adjust the priority of a command using nice in MacOS, you can set the niceness value. A lower value indicates a higher priority.
```bash
nice -n 10 ./my_command
```

### Can I renice a process in MacOS with nice?
Yes, you can use the renice command in MacOS to change the priority of a running process.
```bash
renice 10 -p 12345
```

### How can I monitor the priority of a process with nice?
To check the priority of a process in MacOS that was started with nice, you can use the ps command with the -l flag.
```bash
ps -l -p 12345
```

### What is the default niceness value in macOS?
In MacOS, the default niceness value is typically 0. Lower values represent higher priority levels, while higher values represent lower priority levels.

### How can I increase the priority of a process in MacOS?
To raise the priority of a process in MacOS using nice, set a lower niceness value. 
```bash
nice -n -10 ./high_priority_script.sh
```

### How do I renice a command to a lower priority level in MacOS?
You can use the renice command in MacOS to decrease the priority of a running process.
```bash
renice +10 -p 12345
```

### Can I use nice to start a process with a specific priority level in MacOS?
Yes, you can use the nice command to launch a process with a particular priority level.
```bash
nice -n 5 ./specific_priority_script.sh
```

### How can I list all processes sorted by priority in MacOS?
To list all processes sorted by priority in MacOS, you can use the following command:
```bash
ps -eo nice,pid,comm --sort nice
```
## Applications of the nice command

1. Prioritizing CPU usage of processes
2. Running processes with lower priority
3. Adjusting the scheduling priority of processes