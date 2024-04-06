---
title: Windows SCHTASKS command
description: Manage scheduled tasks on Windows with the SCHTASKS command. Learn how to create, modify, run, end, or delete tasks efficiently.
---

The Windows SCHTASKS command allows users to manage scheduled tasks efficiently through the command line interface. It enables users to create, modify, run, end, or delete tasks on a local or remote computer. With SCHTASKS, users can schedule tasks to run at specific times or events, ensuring that critical operations are performed automatically without manual intervention. This command provides a flexible and powerful way to automate processes and improve productivity by executing tasks according to a predefined schedule. Users can also use SCHTASKS to export/import task configurations, view existing tasks, and troubleshoot any issues that may arise with scheduled tasks.

## SCHTASKS Syntax:
```cmd
schtasks /parameter [option] [parameter]
```
## Options:
| Option | Description                          |
|--------|--------------------------------------|
| /Create    | Creates a new scheduled task.        |
| /Delete    | Deletes a scheduled task.            |
| /Query     | Displays all scheduled tasks.        |
| /Run       | Runs a scheduled task immediately.   |
| /End       | Stops a running task.                |

## Parameters:
| Parameter    | Description                                |
|--------------|--------------------------------------------|
| /TN taskname | Specifies the name of the task.             |
| /U username  | Specifies the user context under which the task runs. |
| /P password  | Specifies the password for the user specified with the /U parameter.        |
| /S system    | Specifies the remote system to connect to. |
| /F           | Enables to forcefully terminate the task. |
:::caution
Exercise caution while using the schtasks command, especially when creating, deleting, or modifying scheduled tasks as it can affect system operations.
:::
### Create a Scheduled Task to Open Notepad
```cmd
schtasks /create /tn "OpenNotepad" /tr "notepad.exe" /sc daily /st 08:00
```
Creates a scheduled task named "OpenNotepad" that opens Notepad daily at 8:00 AM.

### Delete a Scheduled Task
```cmd
schtasks /delete /tn "OpenNotepad" /f
```
Deletes the scheduled task named "OpenNotepad" without confirmation.

### Display Details of All Scheduled Tasks
```cmd
schtasks /query /fo list
```
Lists details of all scheduled tasks in the system in a list format.

### Run a Scheduled Task Immediately
```cmd
schtasks /run /tn "OpenNotepad"
```
Runs the scheduled task named "OpenNotepad" immediately.
:::tip
When using the schtasks command in Windows, make sure to carefully review the options and values to ensure that the scheduled task is created or modified correctly.
:::

### How do I use schtasks in Windows?
To use the schtasks command in Windows, execute the following command:
```cmd
schtasks /create /tn "MyTask" /tr "C:\path\to\program.exe" /sc daily /st 08:00
```

### How do I schedule a task to run daily using schtasks?
To schedule a task to run daily with schtasks, use the following command:
```cmd
schtasks /create /tn "DailyTask" /tr "C:\path\to\script.bat" /sc daily /st 10:00
```

### How can I list all scheduled tasks in Windows with schtasks?
To list all scheduled tasks in Windows using schtasks, run the following command:
```cmd
schtasks /query
```

### How do I delete a scheduled task using schtasks?
To delete a scheduled task with schtasks, use the following command:
```cmd
schtasks /delete /tn "TaskName"
```

### How can I run a scheduled task immediately in Windows using schtasks?
To run a scheduled task immediately in Windows with schtasks, execute the following command:
```cmd
schtasks /run /tn "TaskName"
```

### How can I export a scheduled task to an XML file using schtasks?
To export a scheduled task to an XML file in Windows with schtasks, run the following command:
```cmd
schtasks /query /tn "TaskName" /xml > "C:\path\to\output.xml"
```

### How do I enable or disable a scheduled task using schtasks?
To enable or disable a scheduled task using schtasks in Windows, use the following commands:
```cmd
schtasks /change /tn "TaskName" /disable
schtasks /change /tn "TaskName" /enable
```

## Applications of the SCHTASKS Command

- Create tasks
- Delete tasks
- Query tasks
- Run tasks
- End tasks
- Change task properties
- Enable/disable tasks
- Import/export tasks
- Start/stop tasks
- Show task history