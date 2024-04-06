---
title: Windows TSKILL command
description: Learn how to use the Windows TSKILL command to terminate running processes from the command line.
---

The Windows TSKILL command is a powerful tool that allows users to terminate running processes directly from the command line. This command can be particularly useful when a program becomes unresponsive or when you need to stop a process quickly. By using the TSKILL command, you can easily end tasks without the need to open the Task Manager. This command gives you greater control over the processes running on your computer and can help improve system performance by quickly ending unresponsive or unwanted tasks.

## TSKILL Syntax:
```cmd
tskill [options] [processid | processname]
```
## Options:
| Option     | Description                                              |
|------------|----------------------------------------------------------|
| /A         | Ends all matching processes on the system.               |
| /ID <pid>  | Specifies the numeric Process ID for the process to end. |
| /IM <name> | Specifies the image name of the process to end.          |

## Parameters:
| Parameter   | Description                                                                      |
|-------------|----------------------------------------------------------------------------------|
| processid   | The numeric Process ID of the process to be terminated.                           |
| processname | The name of the process to be terminated.                                         |

:::caution
Use the `tskill` command with caution as it forcibly terminates processes, which may result in data loss or corruption if not used carefully.
:::
## TSKILL Usage:
### End a Process by Process ID
```cmd
tskill 1234
```
Terminates the process with the Process ID 1234.

### End a Process by Process Name
```cmd
tskill notepad.exe
```
Terminates the process named "notepad.exe".

### End Multiple Processes by Process Name
```cmd
tskill /A Chrome
```
Terminates all processes with names containing "Chrome".

### End a Process on a Remote Computer
```cmd
tskill /S RemotePC calc.exe
```
Terminates the "calc.exe" process running on a remote computer named "RemotePC".
:::tip
Make sure to use the tskill command with caution, as it terminates a specified process without any warning or prompts.
:::

### How do I use tskill in Windows?
To use the tskill command in Windows, execute the following command:
```cmd
tskill process_name
```

### Can I use tskill to end a process by its ID?
Yes, you can use tskill to terminate a process by its process ID (PID) in Windows. Here's an example:
```cmd
tskill 1234
```

### Is there a way to force an immediate termination of a process using tskill?
To force an immediate termination of a process with tskill, use the `/f` option. Here's how you can do it:
```cmd
tskill /f process_name
```

### How can I list all processes to identify the one I want to terminate with tskill?
You can list all processes using the `tasklist` command in Windows. Here's an example:
```cmd
tasklist
```

### Can tskill be used remotely to end a process on another computer?
Yes, you can use tskill to end a process on a remote computer by specifying the computer name. Here's an example:
```cmd
tskill /s computer_name process_name
```

### Is there a way to log off a user with tskill?
Yes, you can log off a user with tskill using the `/l` option. Here's an example:
```cmd
tskill /l username
```

### Can I use tskill to end multiple processes at once?
Yes, you can end multiple processes at once with tskill by specifying multiple process names. Here's an example:
```cmd
tskill process_name1 process_name2
```

## Applications of the TSKILL Command
- Terminate a running process
- End a task by process ID
- End a task by process name
- Terminate a process on a remote computer
- Forcefully end a task without confirmation prompts