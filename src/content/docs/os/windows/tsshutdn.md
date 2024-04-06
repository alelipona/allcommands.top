---
title: TSSHUTDN Windows Command Guide
description: Learn how to use the Windows tsshutdn command with this comprehensive guide. Find syntax, parameters, and examples to manage Terminal Services sessions efficiently.
---

The Windows tsshutdn command is used to shut down or restart a terminal server. This command can be run from the command prompt and allows administrators to manage Terminal Services sessions effectively. By specifying different parameters, users can customize the behavior of the shutdown process, such as setting a delay before the shutdown occurs or specifying the message to be displayed to users. Understanding how to use the tsshutdn command can help administrators maintain control over their terminal server environment and ensure that sessions are managed efficiently.

## TSSHUTDN Syntax:
```cmd
tsshutdn [{/? | /help}] [/delay:SecondsToWait] [/reboot] [/powerdown] [/logoff]
```

## Options:
| Option        | Description                               |
|---------------|-------------------------------------------|
| /?            | Displays help for the command             |
| /help         | Displays help for the command             |
| /delay        | Sets the number of seconds to wait before taking action       |
| /reboot       | Shuts down and reboots the system         |
| /powerdown    | Shuts down the system (default if no option specified)        |
| /logoff       | Logs off the current user without shutting down the system     |

## Parameters:
There are no specific parameters for the tsshutdn command.

:::caution
Be cautious when using the tsshutdn command as it can shut down or reboot the system abruptly, potentially causing loss of unsaved data or interruptions to ongoing processes. Make sure to save all your work before initiating the shutdown or reboot process.
:::
## TSSHUTDN Command Samples:
### Restart the Local Computer Immediately
```cmd
tsshutdn /R /IMMEDIATE
```
Initiates an immediate restart on the local computer without any prior warning.

### Shutdown a Remote Computer with a Specified Message
```cmd
tsshutdn /M "This computer will shut down in 10 minutes!" /P /SERVER:RemoteComputerName
```
Shuts down a remote computer named 'RemoteComputerName' with a specified message and a 10-minute countdown.

### Log Off the Current User and Force All Applications to Close
```cmd
tsshutdn /L /V /F
```
Logs off the current user, forces all applications to close, and displays a warning dialog.

### Display Help Information for the TSSHUTDN Command
```cmd
tsshutdn /?
```
Shows detailed information about the usage options and parameters of the tsshutdn command.

### Abort a Previously Initiated Shutdown
```cmd
tsshutdn /A
```
Cancels a previously scheduled shutdown or restart operation on the system.

### Restart the Local Computer and Specify a Warning Time
```cmd
tsshutdn /R /T 600
```
Initiates a system restart on the local computer with a warning message displayed 10 minutes before the restart.

### Schedule a Shutdown of the Local Computer at a Specific Time
```cmd
tsshutdn /S /T 1800
```
Schedules a shutdown of the local computer after a 30-minute delay.
:::tip
When using the tsshutdn command in Windows, make sure to have the necessary permissions to shut down the system or reboot it remotely. Always double-check your command parameters before executing to prevent accidental shutdowns of critical systems.
:::

## TSSHUTDN FAQ:
{Questions}

### How do I use tsshutdn in Windows?
To use the tsshutdn command in Windows, execute the following command:
```cmd
tsshutdn --delay <seconds>
```

### What is the purpose of the tsshutdn command in Windows?
The tsshutdn command is used to shut down or reboot a terminal server remotely.

### How can I schedule a system shutdown using tsshutdn?
To schedule a system shutdown with tsshutdn with a specific delay and message, use the following command:
```cmd
tsshutdn --delay 300 --message "This system will shut down in 5 minutes for maintenance."
```

### Can tsshutdn be used to log off all users connected to a terminal server?
Yes, you can use the tsshutdn command with the “--all” parameter to log off all users connected to the terminal server. Here is an example:
```cmd
tsshutdn --logoff --all
```

### How can I force users to log off their sessions with tsshutdn?
To force users to log off their sessions using tsshutdn, you can use the “--poweroff” parameter. Here is an example of the command:
```cmd
tsshutdn --poweroff
```

### Is it possible to cancel a scheduled shutdown with tsshutdn?
Yes, you can cancel a scheduled shutdown by using the following command:
```cmd
tsshutdn --cancel
```
## Applications of the TSSHUTDN Command

- Shut down a terminal server
- Log off all connected users
- Restart the terminal server