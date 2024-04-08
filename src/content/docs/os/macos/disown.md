---
title: disown MacOS Command Guide
description: Learn how to use the MacOS disown command to remove background jobs and keep them running even after closing the terminal.
---

When working on the MacOS terminal, the disown command allows you to remove background jobs from the shell's job table. This command is useful for keeping processes running even after closing the terminal or logging out. By using disown, you can detach a background job from the current shell session, preventing it from being terminated when the shell session ends. This can be handy when you want to keep a process running in the background without being dependent on the terminal session.

## disown Syntax:
```bash
disown [-h] %1
```
## Options:
| Option | Description                        |
|--------|------------------------------------|
| -h     | Display help for the disown command|

## Parameters:
| Parameter | Description                                                         |
|-----------|---------------------------------------------------------------------|
| %1        | Job ID of the process to be disowned. Use %1 for the latest job ID.|

:::caution
Caution: The disown command is used to remove jobs from the shell's job table and avoid sending SIGHUP signals when exiting the shell. Ensure you understand the implications of disowning a process before using this command.
:::
## disown Command Samples:
### Disown a Running Process
```bash
disown -h %1
```
Disowns the job with job ID 1, removing it from the shell's job table.

### Disown Multiple Running Background Processes
```bash
disown -h %2 %3
```
Disowns the jobs with job IDs 2 and 3, removing them from the shell's job table.

### Disown All Running Background Processes
```bash
disown -a
```
Disowns all running background processes, removing them from the shell's job table.

### Disown a Specific Command by PID
```bash
disown -h $(pgrep -f "specific_command")
```
Disowns the process running the specific_command by finding its PID using pgrep.

### Disown a Process Group
```bash
disown -h -g 54321
```
Disowns the process group with process group ID 54321.

### Disown a Process with a Specific Job ID
```bash
disown -h -j 2
```
Disowns the process with the job ID 2 specifically.

### Disown a Process by PID
```bash
disown -h 12345
```
Disowns the process with PID 12345 from the shell's job table.
:::tip
When using the disown command in MacOS, make sure to carefully consider the implications of removing a job from the shell's job table. Disowning a process will detach it from the shell, making it immune to hangups and closes of the local terminal. Keep this in mind when disowning processes, as you won't be able to easily manage them through the shell afterwards.
:::

## disown FAQ:
### How do I use disown in MacOS?
To use the disown command in MacOS, execute the following command:
```bash
disown --option <value>
```

### Can I disown multiple jobs at once in MacOS?
Yes, you can disown multiple jobs at once in MacOS by specifying the job IDs separated by spaces. For example:
```bash
disown %1 %2 %3
```

### How can I check if a job is running in the background before disowning it in MacOS?
To check if a job is running in the background before disowning it in MacOS, you can use the `jobs` command to list the jobs associated with the current shell session. For example:
```bash
jobs
```

### Is there a way to disown a job and prevent it from receiving SIGHUP signals in MacOS?
Yes, you can disown a job and prevent it from receiving SIGHUP signals in MacOS by using the `-h` option with the disown command. For example:
```bash
disown -h %1
```

### How do I bring a disowned job back to the foreground in MacOS?
To bring a disowned job back to the foreground in MacOS, you can use the `fg` command followed by the job ID or job specification. For example:
```bash
fg %1
```

### Can I use disown with a specific process ID in MacOS?
Yes, you can use the disown command with a specific process ID in MacOS by specifying the PID preceded by a percent sign (%). For example:
```bash
disown %1234
```
## Applications of the disown command

- Running a process in the background
- Removing a job from the shell's job table
- Preventing a process from being terminated when the shell exits