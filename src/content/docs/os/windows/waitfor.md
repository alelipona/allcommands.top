---
title: Windows WAITFOR command
description: Executes a program on time and appears to hold up the execution until the specified time is met. Learn about the usage and options of the Windows waitfor command.
---

The Windows WAITFOR command is used to wait for or send a signal to a batch file or script. It can be utilized to execute a program at a specified time or delay the execution of a program until a specific time is reached. The command provides flexibility by allowing users to set a time limit for the wait operation and specifying the signal to wait for. This can be particularly useful in scenarios where synchronization between different processes is required or when automating tasks that need to wait for a specific condition to be met.

## WAITFOR Syntax:
```cmd
waitfor [/s Server] [<Options>] [<Parameter>]
```
## Options:
| Option      | Description                                            |
|-------------|--------------------------------------------------------|
| /s Server   | Specifies the name or IP address of the server to connect to. |

## Parameters:
| Parameter   | Description                                            |
|-------------|--------------------------------------------------------|
| Options     | Can be any combination of /si, /t, /f, /p, /q, /n, /x. |

:::caution
Caution: The waitfor command is used to send or wait for a signal on a system. Incorrect usage of this command can lead to unintended consequences or system errors. Please use with caution and ensure the options and parameters are specified correctly.
:::
## WAITFOR Usage:
### Wait for a Specific Time
```cmd
waitfor /T 10
```
Waits for 10 seconds before continuing with the next command.

### Wait for a Specific Event
```cmd
waitfor /S ServerReady /T 30
```
Waits for the event "ServerReady" for 30 seconds before proceeding.

### Wait for User Input
```cmd
waitfor PressAnyKey /T 0
```
Waits indefinitely until the user presses any key. 

### Wait for a Specific Signal
```cmd
waitfor /si ServerDown /t 60
```
Waits for the specific signal "ServerDown" for 60 seconds before moving on.
:::tip
It is important to note that the waitfor command is primarily used in scripts or batch files to pause execution until a specified signal is received. Make sure to tailor the usage of this command to the specific needs of your scripts or automation tasks.
:::

### How do I use waitfor in Windows?
To use the waitfor command in Windows, execute the following command:
```cmd
waitfor --signal SIGNAL_NAME
```

### What is the purpose of the waitfor command?
The waitfor command is used in Windows to pause the execution of a script or batch file until a specified signal is received. 

### How to specify a timeout for the waitfor command?
To specify a timeout for the waitfor command in Windows, you can use the /t option followed by the timeout value in seconds. For example:
```cmd
waitfor /t 60 --signal SIGNAL_NAME
```

### Can multiple signals be specified with the waitfor command?
Yes, multiple signals can be specified with the waitfor command in Windows. Simply list the signal names separated by spaces. For example:
```cmd
waitfor --signal SIGNAL1 SIGNAL2 SIGNAL3
```

### How can I check the list of existing signals recognized by the waitfor command?
To check the list of existing signals recognized by the waitfor command in Windows, you can use the following command:
```cmd
waitfor /?
```

### Is there a way to delete a specific signal created with the waitfor command?
Yes, you can delete a specific signal created with the waitfor command in Windows using the /s option followed by the signal name. For example:
```cmd
waitfor /s SIGNAL_NAME
```

### How can I create a permanent signal with the waitfor command?
To create a permanent signal with the waitfor command in Windows, you can use the /s option followed by the signal name and the /d option to make the signal persistent. Example:
```cmd
waitfor /s SIGNAL_NAME /d
```

## Applications of the WAITFOR Command

- Synchronizing tasks or processes in batch files
- Delaying the execution of a command or script
- Pausing a batch file until a specific condition is met