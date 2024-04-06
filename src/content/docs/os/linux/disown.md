---
title: disown Linux command
description: Learn how to use the disown command in Linux to remove jobs from the shell's job table, allowing them to run independently of the current shell.
---

The disown command in Linux is used to remove jobs from the shell's job table, allowing them to run independently of the current shell. When a job is disowned, it will not be affected by the shell's exit or hangup signals. This command can be useful when needing to keep a process running after logging out of a remote shell or closing a terminal window. To disown a job, you can use the disown command followed by the job's process ID or job ID. Additionally, you can use the -h flag to mark a job so that it is not affected by the SIGHUP signal. Overall, the disown command provides a convenient way to manage and monitor long-running processes in Linux systems.
## disown Syntax:
```bash
disown [-h] [-ar] [jobspec]
```
## Options:
| Option | Description                               |
|--------|-------------------------------------------|
| -h     | Remove a job from the table of active jobs. |
| -a     | Remove all jobs if no jobspec is provided.    |
| -r     | Remove only running jobs.                     |

## Parameters:
| Parameter | Description                |
|-----------|----------------------------|
| jobspec   | The job ID to be disowned. | 

:::caution
Use the disown command with caution as it can detach running processes from the shell, making them immune to terminal hangups. This can lead to unexpected behavior if not used carefully.
:::
## disown bash Examples:
### Run a command in the background and disown it
```bash
gedit file.txt &
disown
```
Runs gedit in the background and disowns it, allowing it to continue running even if the terminal is closed.

### Disown a specific job by its job ID
```bash
firefox &
disown %1
```
Starts Firefox in the background, disowns it by using its job ID, which is %1 in this case.

### Disown multiple jobs by their job IDs
```bash
gedit file1.txt &
gedit file2.txt &
gedit file3.txt &
disown %1 %2 %3
```
Starts multiple instances of gedit in the background, disowns each of them using their job IDs.

### Disown all background processes
```bash
gedit file.txt &
firefox &
code file.html &
disown -a
```
Starts multiple processes in the background and disowns all of them using the -a flag.

### Disown a specific job by its PID
```bash
nohup sleep 60 &
disown $(pgrep -o sleep)
```
Starts a sleep process in the background, finds its PID with pgrep, and disowns it using the PID.

### Disown a process after it has been started
```bash
gedit file.txt
<Ctrl+Z>
bg
disown
```
Starts gedit, pauses it with Ctrl+Z, resumes it in the background with bg, and disowns it to detach it from the terminal.
:::tip
When using the disown command in Linux, remember that it is used to remove jobs from the shell’s job table, so they do not receive SIGHUP signals. This can be useful when you want to keep a process running even after you log out of the shell. However, be cautious when using disown as the job will no longer be associated with the shell, which means you won't be able to manage it using built-in job control features like fg, bg, or jobs.
:::

## disown Command Help Center:

### How do I use disown in Linux?
To use the disown command in Linux, execute the following command:
```bash
disown --option <value>
```

### When should I use the disown command in Linux?
The disown command in Linux is useful when you want to remove a process from the shell's job table, preventing it from receiving SIGHUP signals when the shell session is terminated. This can help in keeping processes running even after you log out of the shell.

### How can I list all jobs in the shell's job table in Linux?
You can list all jobs in the shell's job table in Linux by using the jobs command. Here is an example:
```bash
jobs
```

### How do I disown a specific job by its job number in Linux?
To disown a specific job by its job number in Linux, you can use the disown command followed by the job number preceded by a percent sign (%). Here is an example:
```bash
disown %1
```

### Can I disown a background process in Linux?
Yes, you can disown a background process in Linux using the disown command. Simply identify the job number of the background process and disown it to remove it from the shell's job table.

### How do I disown multiple jobs in Linux?
To disown multiple jobs in Linux, you can specify multiple job numbers separated by commas after the disown command. Here is an example:
```bash
disown %1, %2, %3
```

### Is it possible to disown a running process in Linux?
Yes, it is possible to disown a running process in Linux. By using the disown command with the appropriate job number or process ID, you can remove a running process from the shell's job table.

### How can I check if a process has been successfully disowned in Linux?
To check if a process has been successfully disowned in Linux, you can use the jobs command to list the current shell's jobs. If the process is no longer listed, it has been successfully disowned.

## Applications of the disown command

- To remove a job from the shell's job table, allowing it to continue running in the background without being affected by the shell.
- To prevent a background job from being terminated when the shell session is ended or closed.
- To manage and control background processes independently from the shell that spawned them.