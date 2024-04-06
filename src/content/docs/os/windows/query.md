---
title: QUERY Windows Command Guide
description: Learn how to use the Windows query command to display information about processes, services, and other system resources. 
---

The Windows query command is a powerful tool that allows you to retrieve various types of information from your system. You can use it to display details about running processes, services, device drivers, and other system resources. By utilizing different options and parameters, you can customize the output to meet your specific needs. This command provides valuable insights into the inner workings of your Windows operating system, helping you troubleshoot issues and optimize performance.

## QUERY Syntax:
```cmd
dir [drive:][path][filename] [/a[[:]attributes]] [/b] [/c] [/d] [/l] [/n] [/o[[:]sortorder]] [/p] [/q] [/s] [/t[[:]timefield]] [/w] [/x] [/4] [/?]
```
## Options:
| Option | Description                                |
|--------|--------------------------------------------|
| /a     | Displays files with specified attributes. |
| /b     | Uses bare format (no heading information). |
| /c     | Display the thousand separator in file sizes. |
| /d     | Same as wide but files are list sorted by column. |
| /l     | Uses lowercase. |
| /n     | New long list format where filenames are on the far right. |
| /o     | List by files in sorted order. |
| /p     | Pauses after each screen of information. |
| /q     | Display the owner of the file. |
| /s     | Displays files in specified directory and all subdirectories. |
| /t     | Controls which time field displayed or used for sorting. |
| /w     | Uses wide list format. |
| /x     | This displays the short names generated for non-8dot3 file names. |
| /4     | Displays four-digit years. |
| /?     | Displays help. |

## Parameters:
| Parameter  | Description                             |
|------------|-----------------------------------------|
| drive:     | Specifies the drive to list.            |
| path       | Specifies the directory to list.        |
| filename   | Specifies the name of the file to list. |
  
:::caution
Exercise caution while using the `dir` command, as it interacts directly with the file system and can potentially delete or modify files if not used properly.
:::
## QUERY Command Samples:
### List All Running Processes
```cmd
query process
```
Displays a list of all running processes on the system.

### Display User Sessions
```cmd
query session
```
Shows information about all active user sessions on the system.

### Retrieve Information About Services
```cmd
query service
```
Provides details about the services running on the system.

### Display CPU Information
```cmd
query cpu
```
Retrieves information about the central processing units (CPUs) on the system.

### List Available Network Adapters
```cmd
query nic
```
Shows a list of all network interfaces available on the system.

### Display Memory Usage
```cmd
query memory
```
Provides information about the memory usage on the system.

### List Available Display Information
```cmd
query display
```
Shows details about the display devices connected to the system.
:::tip
When using the query command in Windows, make sure to carefully read the options available and understand their functionality to extract the desired information efficiently.
:::

## QUERY FAQ:
### How do I use query in Windows?
To use the query command in Windows, execute the following command:
```cmd
query session
```

### What does the query command do in Windows?
The query command in Windows is used to display information about processes, users, sessions, and other system details.

### How can I list all processes using the query command in Windows?
You can list all processes using the query command in Windows by running the following command:
```cmd
query process
```

### How do I display detailed information about a specific user with the query command in Windows?
To display detailed information about a specific user using the query command in Windows, use the following command:
```cmd
query user username
```

### Can I use the query command to get information about active sessions in Windows?
Yes, you can use the query command to get information about active sessions in Windows by running the following command:
```cmd
query session
```

### How do I check system uptime using the query command in Windows?
To check the system uptime using the query command in Windows, execute the following command:
```cmd
query os
```
## Applications of the QUERY Command

- Retrieve system information
- Display information about users
- Check the status of services
- Verify the existence of a user account
- List active sessions
- Get information about groups
- Display information about disks and volumes