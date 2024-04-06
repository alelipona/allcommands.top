---
title: What is CALL Windows command?
description: Learn how to use the CALL command in Windows to call one batch program from another.
---

The CALL command in Windows is used to call one batch program from another, allowing for the execution of multiple scripts in sequence. By using CALL, you can create more modular and organized scripts, improving the overall efficiency and maintenance of your batch files. This command is especially useful when you need to run a specific section of code multiple times within the same script or across different scripts. Additionally, CALL can pass control and parameters between batch files, enabling more complex and versatile scripting capabilities. Familiarizing yourself with the CALL command can enhance your batch scripting skills and help you streamline your automation tasks in Windows.
## CALL Syntax:
```cmd
tasklist [/s system [/u username [/p [password]]]] [/m [module] | /svc | /v]
```
## CALL Options:
| Option | Description                              |
|--------|------------------------------------------|
| /s     | Specifies the name or IP address of a remote computer (do not use with /svc option).   |
| /u     | Specifies the user context under which the command should execute (do not use with /svc option).   |
| /p     | Specifies a password for the given username (if required) (do not use with /svc option).   |
| /m     | Displays all tasks with DLL modules loaded that match the given pattern.   |
| /svc   | Displays services hosted in each process (do not use with /s option).   |
| /v     | Specifies that information should be displayed in verbose mode.   |

:::caution
Exercise caution when using the tasklist command, especially when specifying remote computers and providing usernames/passwords. Make sure to use the correct options to avoid unintended consequences.
:::

## Parameters:
| Parameter | Description                            |
|-----------|----------------------------------------|
| system    | The name or IP address of a remote computer. This is optional.                |
| username  | The username for the specified user context. This is optional.                |
| password  | The password associated with the username. This is optional.                |
| module    | Specifies a DLL module to display information for. This is optional.               |
## CALL Command Usage Examples:
### Call a Batch File
```cmd
call example.bat
```
Executes a batch file named "example.bat".

### Call a Command with Arguments
```cmd
call dir /w
```
Executes the "dir" command with the "/w" argument to display wide list format.

### Call a Program with Parameters
```cmd
call program.exe -inputFile data.txt
```
Executes a program named "program.exe" with the parameter "-inputFile data.txt".

### Call a Command without Exiting the Current Batch Script
```cmd
call another_script.bat
```
Executes another batch script named "another_script.bat" within the current batch script without exiting.

### Call a Command with Redirection
```cmd
call echo Hello > output.txt
```
Executes the "echo" command to write "Hello" to a file named "output.txt".
```
:::tip
When using the `call` command in CMD, make sure to provide the correct path to the batch file or program you want to execute. Additionally, remember that using the `call` command allows you to return to the current batch file after executing the specified command or batch file.
:::

### How do I use call in CMD?
To use the call command in CMD, execute the following command:
```cmd
call C:\path\to\batchfile.bat
```

### How can I pass arguments to a called batch file in CMD?
To pass arguments to a called batch file in CMD, use the following syntax:
```cmd
call C:\path\to\batchfile.bat arg1 arg2
```

### How to run a command in a separate command processor using call in CMD?
To run a command in a separate command processor using the call command in CMD, use the following syntax:
```cmd
call cmd /c "command"
```

### Can I call a function within a batch file using call in CMD?
Yes, you can call a function within a batch file using call in CMD. Use the following syntax:
```cmd
call :functionName
```

### How to use call with a label in CMD?
To use the call command with a label in CMD, execute the following command:
```cmd
call :labelName
```

### How do I use call to run a program in CMD?
To use the call command to run a program in CMD, execute the following command:
```cmd
call program.exe
```

### Is it possible to call another batch file and return to the original file in CMD?
Yes, it is possible to call another batch file and return to the original file in CMD using the call command. Use the following syntax:
```cmd
call C:\path\to\another\batchfile.bat
```

### How to call a subroutine within a batch file using call in CMD?
To call a subroutine within a batch file using the call command in CMD, use the following syntax:
```cmd
call :subroutineName
```
## Applications of the CALL Command

- Running a batch file from another batch file
- Calling a subroutine within a batch file
- Invoking a command or script with parameters from a batch file