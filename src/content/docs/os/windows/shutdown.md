---
title: Windows SHUTDOWN command
description: Learn how to use the Windows shutdown command to turn off, restart, or log off your computer directly from the command prompt.
---

The Windows shutdown command allows users to manage their computer's power options directly from the command prompt. It offers various parameters to shut down, restart, log off, hibernate, or sleep the computer. By using this command, users can efficiently control their system's power state without going through the graphical user interface. Whether you need to schedule a shutdown or troubleshoot power-related issues, the Windows shutdown command provides a convenient and flexible solution for managing power options on Windows operating systems.

## SHUTDOWN Syntax:
```cmd
shutdown [/s [/t <seconds>] [/f]] [/r [/t <seconds>] [/f]] [/l] [/h] [/p] [/a] [/?]
```

## Options:
| Option     | Description                                     |
|------------|-------------------------------------------------|
| /s         | Shutdown the computer                           |
| /r         | Shutdown and restart the computer               |
| /l         | Log off the current user                        |
| /h         | Hibernate the computer                          |
| /p         | Turn off the local computer with no time delay  |
| /a         | Abort a system shutdown                          |
| /?         | Display help message                            |

## Parameters:
| Parameter  | Description                                   |
|------------|-----------------------------------------------|
| /t <seconds> | Set the time in seconds before executing the specified operation    |
| /f         | Force running of the command, if needed       |

:::caution
Exercise caution when using the shutdown command, especially with the /s, /r, and /f options, as it can lead to immediate shutdown or restart of the computer without warning. Make sure to save any important work before executing the command.
:::
## SHUTDOWN Usage:
### Shutdown immediately
```cmd
shutdown /s /f /t 0
```
Initiates a shutdown process immediately without any delay.

### Shutdown with a message
```cmd
shutdown /s /t 60 /c "System will be shut down in 1 minute for maintenance."
```
Sets a countdown timer of 60 seconds and displays the specified message before shutting down.

### Restart the system
```cmd
shutdown /r /t 30
```
Restarts the system after a delay of 30 seconds.

### Abort a scheduled shutdown
```cmd
shutdown /a
```
Cancels a previously scheduled system shutdown.
:::tip
When using the shutdown command in Windows, make sure to carefully select the appropriate options to avoid unintended consequences. It is recommended to review the available options and understand their impact before executing the command.
:::

## Common Questions on SHUTDOWN Usage:
### How do I use shutdown in Windows?
To use the shutdown command in Windows, execute the following command:
```cmd
shutdown /s /f /t 0
```

### What is the command to shutdown a remote computer?
To shutdown a remote computer using the shutdown command in Windows, execute the following command:
```cmd
shutdown /m \\computername /s /f /t 0
```

### How can I schedule a shutdown in Windows?
To schedule a shutdown at a specific time using the shutdown command in Windows, execute the following command:
```cmd
shutdown /s /f /t <seconds until shutdown>
```

### What command can I use to restart my computer using CMD?
To restart your computer using the shutdown command in Windows, execute the following command:
```cmd
shutdown /r /f /t 0
```

### How do I cancel a scheduled shutdown in Windows?
To cancel a scheduled shutdown using the shutdown command in Windows, execute the following command:
```cmd
shutdown /a
```

### Is it possible to log off the current user with the shutdown command?
Yes, you can log off the current user using the shutdown command in Windows by executing the following command:
```cmd
shutdown /l
```

### How do I force applications to close during shutdown in Windows?
To force applications to close during shutdown using the shutdown command in Windows, execute the following command:
```cmd
shutdown /s /f /t 0
```

## Applications of the SHUTDOWN Command

- Shut down the local computer: `shutdown /s`
- Restart the local computer: `shutdown /r`
- Log off the current user: `shutdown /l`
- Display a message in the System Shutdown window: `shutdown /i`
- Abort a system shutdown: `shutdown /a`
- Hibernate the local computer: `shutdown /h`
- Shut down a remote computer: `shutdown /m \\ComputerName`
- Force applications to close without warning: `shutdown /f`
- Set a time delay before performing the shutdown/restart: `shutdown /t xxx`