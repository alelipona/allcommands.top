---
title: nohup Linux Command Guide
description: Learn how to use the Linux nohup command to run processes that won't be terminated even when exiting the session.
---

The Linux nohup command is used to run commands that prevent them from being terminated even when exiting the session. It stands for "no hang up" and is often used to run processes that need to continue running in the background. This command is particularly useful when running long-running tasks or scripts remotely over an SSH connection. By using nohup, you can ensure that your command will keep running even if the connection is lost or the session is ended.

## nohup Syntax:
```bash
nohup [option] [command] &
```
## Options:
| Option | Description                        |
|--------|------------------------------------|
| -n     | Ignore the hangup signal           |
| -c     | Reuse the same standard input       |
| -f     | Ignore access to the job control   |
| -p     | Preserve existing processes        |
| -help  | Display help for nohup command     |

## Parameters:
| Parameter | Description                        |
|-----------|------------------------------------|
| command   | The command to execute with nohup  |

:::caution
Caution: Ensure that the command runs without needing user input or it may fail unexpectedly when using nohup.
:::
## nohup Command Samples:
### Run a Command in the Background
```bash
nohup ./my_script.sh &
```
Runs the script "my_script.sh" in the background using nohup.

### Redirect Output to a File
```bash
nohup ./my_command.sh > output.log &
```
Executes "my_command.sh" using nohup and redirects the output to a file named "output.log".

### Continue Running a Process After Logout
```bash
nohup ./my_long_process.sh &
```
Starts a long-running process "my_long_process.sh" using nohup so that it continues running even after logout.

### Combine Standard Output and Error
```bash
nohup ./my_program 2>&1 > output.log &
```
Runs "my_program" using nohup, combining standard output and error messages and storing them in "output.log".

### Monitor System Metrics
```bash
nohup top -d 10 -b > top_metrics.log &
```
Starts monitoring system metrics using the "top" command with a 10-second delay, running in the background with nohup and outputting the results to "top_metrics.log".

### Execute a Command with Specific Arguments
```bash
nohup python my_script.py arg1 arg2 &
```
Runs a Python script "my_script.py" with arguments "arg1" and "arg2" using nohup to keep it running in the background.

### Schedule a Task for Delayed Execution
```bash
nohup sh -c 'sleep 3600 && ./my_delayed_task.sh' &
```
Schedules the execution of "my_delayed_task.sh" after a delay of 3600 seconds (1 hour) by combining "sleep" and nohup commands.
:::tip
Ensure you redirect the output and error messages when using the nohup command to prevent them from interrupting the command execution.
:::

### How can I run a command in the background using nohup?
To run a command in the background using nohup, use the following syntax:
```bash
nohup <command> &
```

### How can I save the output of a command run with nohup to a file?
To save the output of a command run with nohup to a file, you can use redirection as follows:
```bash
nohup <command> > output.log 2>&1 &
```

### How do I check the status of a background process started with nohup?
To check the status of a background process started with nohup, you can use the `ps` command with options to display all processes:
```bash
ps -ef | grep <process_name>
```

### How can I stop or terminate a process started with nohup?
To stop or terminate a process started with nohup, you can use the `kill` command followed by the process ID (PID):
```bash
kill <PID>
```

### Can I run multiple commands in the background with nohup?
Yes, you can run multiple commands in the background with nohup by separating them with semicolons. For example:
```bash
nohup <command1> ; <command2> &
```

### How can I run a nohup command on a remote server and disconnect without stopping the process?
To run a nohup command on a remote server and disconnect without stopping the process, you can use SSH along with nohup. For example:
```bash
ssh user@remote_server 'nohup command > output.log 2>&1 &'
```
## Applications of the nohup command

- Running a command in the background without being affected by hangups
- Keeping a process running even after the user logs out
- Preventing a process from being terminated when the terminal is closed