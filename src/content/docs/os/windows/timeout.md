---
title: Windows TIMEOUT command
description: Learn how to use the Windows timeout command to delay a specified amount of time before executing the next command.
---

The Windows timeout command is used to introduce a delay for a specified period before executing the next command. This can be useful in batch scripts or command prompt to pause the script for a certain amount of time. The timeout value can be specified in seconds, with a maximum limit of 100 seconds. Additionally, the timeout command can be customized with options to ignore key presses during the countdown or display a message to the user. This command can help manage the flow of a script, add delays between commands, or create timed prompts for user interaction.
## TIMEOUT Syntax:
```cmd
timeout [/t Timeout] [/nobreak]
```

## Options:
| Option   | Description                                          |
|----------|------------------------------------------------------|
| /t       | Specifies the time in seconds to wait (default: 1).  |
| /nobreak | Ignores key presses and waits for specified time.   |

## Parameters:
There are no parameters for the timeout command.

:::caution
Be cautious when using the timeout command as it will pause execution for the specified time period without any other input. Make sure to specify the time in seconds accurately to avoid unintended delays in your scripts or commands.
:::
## TIMEOUT Usage:
### Delayed Shutdown
```cmd
timeout 60 /nobreak && shutdown -s -t 0
```
Delays the system shutdown for 60 seconds.

### Time-Limited File Copy
```cmd
timeout 10 & copy file1.txt folder2\
```
Ensures that the file copy operation stops after 10 seconds.

### Scheduled System Restart
```cmd
timeout /t 600 && shutdown -r -t 0
```
Schedules a system restart in 10 minutes (600 seconds).

### Pausing a Script
```cmd
timeout 5 & pause
```
Pauses the script execution for 5 seconds.
:::tip
When using the timeout command in Windows, make sure to specify the time in seconds after which the command should time out. Additionally, consider using the /nobreak option to prevent the command from being interrupted by key presses.
:::

## Common Questions on TIMEOUT Usage:
### How do I use timeout in Windows?
To use the timeout command in Windows, execute the following command:
```cmd
timeout /t 5
```

### What is the purpose of the timeout command in Windows?
The timeout command in Windows is used to delay the execution of a batch file for a specified number of seconds.

### How can I make the timeout command in Windows not to be interrupted by key presses?
To prevent the timeout command from being interrupted by key presses, use the /nobreak option. Here is an example:
```cmd
timeout /t 10 /nobreak
```

### Can I use the timeout command in a batch file to introduce delays between commands?
Yes, you can use the timeout command in a batch file to introduce delays between commands. Here is an example:
```cmd
command1
timeout /t 3
command2
```

### Is there a way to force the timeout command to timeout immediately?
Yes, you can force the timeout command to timeout immediately by specifying a time of 0 seconds. Here is an example:
```cmd
timeout /t 0
```

### How can I cancel a running timeout command in Windows?
To cancel a running timeout command in Windows, you can press Ctrl + C.

### Can I customize the message displayed by the timeout command in Windows?
Yes, you can customize the message displayed by the timeout command using the /nobreak option followed by a custom message. Here is an example:
```cmd
timeout /t 5 /nobreak /nobreakmsg "Press any key to continue..."
```

## Applications of the TIMEOUT Command

- Pausing the execution of a batch script for a specified amount of time.
- Delaying the execution of a command or script.
- Creating a delay in automated tasks or scripts.
- Providing a break between actions in a batch file.
- Waiting for a specific period before performing the next task.