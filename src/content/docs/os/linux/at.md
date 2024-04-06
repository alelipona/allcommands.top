---
title: at Linux command
description: Learn how to schedule tasks in Linux with the at command. Automate processes and improve efficiency with this powerful tool.
---

The Linux at command allows users to schedule tasks to be executed at a later time. It provides a way to automate processes on a Linux system, making it easier to manage tasks and improve efficiency. By using the at command, users can specify a time for a command to be run, making it a useful tool for system administrators and regular users alike. Tasks scheduled with the at command will run in the background, allowing users to continue working without interruptions. This command provides a convenient way to schedule one-time or recurring tasks, helping to streamline workflow and increase productivity on a Linux system.

## at Syntax:
```bash
at [-q queue] [-f file] [-mldv] TIME
```
## Options:
| Option  | Description                       |
|---------|-----------------------------------|
| -q      | Specifies the job queue to use.   |
| -f      | Reads commands from the specified file.   |
| -m      | Sends mail when the job has been completed.   |
| -l      | Lists the at jobs.   |
| -d      | Deletes the at job.   |
| -v      | Prints the version information.   |

## Parameters:
| Parameter  | Description                         |
|------------|-------------------------------------|
| TIME       | Specifies the time to run the job.  |

:::caution
Exercise caution when using the at command, as it allows scheduling tasks at a specified time. Make sure to double-check the time and options you provide to avoid unintended consequences.
:::
## at bash Examples:
### Schedule a command to run at a specific time
```bash
echo "Hello, World" | at 08:00 AM
```
Schedules the command "echo "Hello, World"" to run at 8:00 AM.

### Schedule a script to run in the future
```bash
at 09:30 PM -f /path/to/script.sh
```
Schedules the script "script.sh" to run at 9:30 PM.

### Schedule a one-time command to run after a delay
```bash
echo "Backup files" | at now + 1 hour
```
Schedules the command "echo "Backup files"" to run one hour from the current time.

### Schedule a recurring task
```bash
echo "Check disk space" | at 12:00 PM every Friday
```
Schedules the command "echo "Check disk space"" to run every Friday at 12:00 PM.

### View a list of scheduled tasks
```bash
at -l
```
Displays a list of all scheduled tasks.

### Remove a scheduled task
```bash
atrm <job_number>
```
Removes the scheduled task with a specific job number.
:::tip
Make sure to specify the time and date for the at command to execute the desired task at the correct moment. Double-check the syntax of your command to avoid any errors in scheduling tasks.
:::

## at Command Help Center:
### How do I use at in Linux?
To use the at command in Linux, execute the following command:
```bash
at --option <value>
```

### How can I schedule a task to run at a specific time with at in Linux?
To schedule a task to run at a specific time using the at command, use the following syntax:
```bash
echo "command to be executed" | at HH:MM YYYY-MM-DD
```

### How do I list the scheduled tasks with at in Linux?
To list the scheduled tasks using the at command, run the following command:
```bash
atq
```

### How can I view the details of a specific at job in Linux?
To view the details of a specific at job using the at command, use the following command with the job number:
```bash
at -c <job_number>
```

### How do I remove a scheduled task with at in Linux?
To remove a scheduled task using the at command, you can delete by specifying the job number like this:
```bash
atrm <job_number>
```

### How can I specify the working directory for an at job in Linux?
To set the working directory for an at job using the at command, use the cd command before executing the desired task:
```bash
echo "cd /path/to/directory && command" | at HH:MM YYYY-MM-DD
```

### How do I send an email when an at job is completed in Linux?
To receive an email notification when an at job is completed, include the `mail` command after your task, like this:
```bash
echo "command; mail -s 'Task completed' user@example.com" | at HH:MM YYYY-MM-DD
```

### How can I schedule a task to run periodically with at in Linux?
To schedule a task to run periodically at a specific interval using the at command, specify the interval using the `at` command within the task itself:
```bash
echo "command; at now + 1 hour" | at now
```
## Applications of the at Command

- Scheduling tasks to run at a specified time
- Automating repetitive tasks
- Running scripts or commands at a later time
- Managing batch jobs efficiently
- Handling one-time tasks without the need for a full-fledged scheduling system