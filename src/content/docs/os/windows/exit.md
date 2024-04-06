---
title: Windows EXIT command
description: Learn how to use the Windows exit command properly to close the Command Prompt or batch files easily. 
---

The Windows exit command is used to close the Command Prompt window or terminate a batch file. It allows users to exit the current Command Prompt session or terminate a batch file processing. By using the exit command, users can effectively close Command Prompt windows or end batch processes without any hassle. This command is a simple yet essential function for managing Command Prompt sessions and batch file operations in Windows operating systems.

## EXIT Syntax:
```cmd
exit
```
## Options:
| Option  | Description                       |
|---------|-----------------------------------|
| /?      | Displays help for the exit command |

## Parameters:
| Parameter | Description                                                         |
|-----------|---------------------------------------------------------------------|
| none      | Exiting the Command Prompt or script                                 |

:::caution
Caution: Ensure that all necessary work is saved before using the `exit` command, as it will close the Command Prompt or script without further confirmation.
:::
## EXIT Usage:
### Terminate the Command Prompt
```cmd
exit
```
This command terminates the Command Prompt window.

### Close Command Prompt after Running a Script
```cmd
echo "Hello, World!" & exit
```
This command prints "Hello, World!" in the Command Prompt window and then exits the window.

### Forcefully Close a Program
```cmd
taskkill /im notepad.exe & exit
```
This command forcefully closes the Notepad program and then exits the Command Prompt window.

### Prevent Execution of Following Commands with Fail-safe Exit
```cmd
echo "This is a fail-safe exit command" & if errorlevel 1 exit
```
This command prints a message and uses a fail-safe exit in case of an error condition. The Command Prompt window exits if an error occurs.
:::tip
Remember that the 'exit' command in Windows is used to close the Command Prompt or a batch file. Make sure to understand how to properly implement this command to avoid unexpected consequences.
:::

### How do I use exit in Windows?
To use the exit command in Windows, execute the following command:
```cmd
exit
```

### How can I force close Command Prompt using exit?
To force close Command Prompt using the exit command, run:
```cmd
exit /b
```

### How do I exit a batch file in Windows?
Exiting a batch file in Windows can be done by using the exit command. Here's an example:
```cmd
exit
```

### How to exit a loop using the exit command in Windows Command Prompt?
To exit a loop using the exit command in Windows Command Prompt, you can use it with a conditional statement. For example:
```cmd
IF %condition% == true exit
```

### Can I close Command Prompt without confirmation using exit?
Yes, you can close Command Prompt without confirmation using the /q (quiet) option with the exit command. Here's how:
```cmd
exit /q
```

### How do I use the exit command to return a specific ERRORLEVEL in Windows?
You can use the exit command to return a specific ERRORLEVEL by providing the desired number after the /b option. For instance:
```cmd
exit /b 5
```

## Applications of the EXIT Command
- Exiting the Command Prompt
- Closing a script or batch file
- Terminating a loop or program execution