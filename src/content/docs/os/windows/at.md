---
title: AT Windows Command Guide
description: A comprehensive guide to the Windows at command. Learn how to schedule tasks and automate processes with this powerful tool.
---

The Windows at command allows users to schedule tasks and automate processes on their computers. This command is useful for running scripts, launching programs, and performing various actions at specific times or intervals. By using the at command, users can improve efficiency and productivity by automating repetitive tasks. This guide provides an in-depth look at the at command, including syntax, options, and examples of how to use it effectively. Whether you are a novice or an experienced user, this guide will help you harness the power of the Windows at command to streamline your workflow and save time.

## AT Syntax:
```cmd
at [\\ComputerName] [Time] [/interactive] [/every:date[,...] | /next:date[,...]] "command"
```

## Options:
| Option       | Description                               |
|--------------|-------------------------------------------|
| \\ComputerName | Specifies the remote computer to schedule a command on. |
| Time         | Specifies the time when the command will run. |
| /interactive | Allows the command to interact with the desktop of the user who is logged on at the time the command runs. |
| /every       | Schedules a command to run on specified days. |
| /next        | Schedules a command to run on the next specified day. |

## Parameters:
| Parameter   | Description                                  |
|-------------|----------------------------------------------|
| command     | Specifies the command that will be run.     |
| date        | Specifies the date for recurring executions of the command, using one or more days, such as Mon, Tue, Wed, Thu, Fri, Sat, Sun. | 

:::caution
Use caution when scheduling tasks with the `at` command as it can execute commands on a remote computer, run commands interactively on the desktop, and set recurring tasks. Make sure to double-check the command and time settings before scheduling tasks with the `at` command.
:::
## AT Command Samples:
### Schedule a Task to Run at a Specific Time
```cmd
at 10:00 PM /every:M,T,W,Th,F,S,Su notepad.exe
```
Schedules the execution of Notepad at 10:00 PM every day from Monday to Sunday.

### Schedule a Task to Run in One Hour
```cmd
at 15:30 + 1:00 /interactive calc.exe
```
Schedules the Calculator to run interactively in 1 hour and 30 minutes from the current time.

### Schedule a Task to Run on a Specific Date
```cmd
at 11:00 12/25/2023 shutdown /s /f /t 0
```
Schedules a system shutdown at 11:00 AM on December 25, 2023.

### List All Scheduled Tasks
```cmd
at
```
Displays a list of all tasks currently scheduled to run using the at command.

### Delete a Scheduled Task
```cmd
at 3 /delete
```
Deletes the scheduled task with the ID number 3.
:::tip
When using the `at` command in Windows CMD, make sure to carefully specify the time and date for the task to run to avoid unexpected execution. Double-check the command parameters to ensure the task gets scheduled correctly.
:::

## AT FAQ:

### How do I use at in CMD?
To use the at command in CMD, execute the following command:
```cmd
at --option <value>
```
---

### What are some common options for the at command in CMD?
To see common options for the at command in CMD, use the following command:
```cmd
at /?
```
---

### How can I schedule a task to run using the at command in CMD?
To schedule a task to run using the at command in CMD, use the following command structure:
```cmd
at <time> /interactive <command>
```
---

### How do I view all scheduled tasks with the at command in CMD?
To view all scheduled tasks with the at command in CMD, execute the following command:
```cmd
at
```
---

### Can I delete a scheduled task with the at command in CMD?
Yes, you can delete a scheduled task with the at command in CMD using the following syntax:
```cmd
at <taskID> /delete
```
---

### How can I schedule a task to run daily at a specific time using the at command in CMD?
To schedule a task to run daily at a specific time using the at command in CMD, use the following command format:
```cmd
at <time> /every:<day> "<command>"
```
---
## Applications of the at Command

- Scheduling one-time tasks to run at a specific time in the future
- Running batch files or executable files at a scheduled time
- Automating repetitive tasks by setting them to run at regular intervals
- Managing scheduled tasks on a local computer without the need for a separate task scheduler