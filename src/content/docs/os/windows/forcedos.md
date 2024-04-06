---
title: All About FORCEDOS Windows command
description: Learn how to use the Windows forcedos command to run a program in the MS-DOS subsystem.
---

The Windows forcedos command allows you to run a specified program in the MS-DOS subsystem, even if the program is not designed for it. This command overrides the default behavior of Windows and can be useful for running legacy applications or troubleshooting compatibility issues. To use the forcedos command, simply specify the program that you want to run in MS-DOS mode. This command can be handy for advanced users who need to work with older software or diagnose compatibility problems.
## FORCEDOS Syntax:
```cmd
forcedos [option] [parameter]
```
## Options:
| Option    | Description                            |
|-----------|----------------------------------------|
| -f        | Force execution of the DOS command      |
| -r        | Run the DOS command in read-only mode   |

## Parameters:
| Parameter | Description                  |
|-----------|------------------------------|
| filename  | The name of the DOS command   |

:::caution
Caution: Use the forcedos command with caution as it can override system settings and potentially cause system instability.
:::
## FORCEDOS CMD Examples:
### Force a program to run in DOS mode
```cmd
forcedos notepad.exe
```
Forces the "notepad.exe" program to run in DOS mode.

### Run a batch file in DOS mode
```cmd
forcedos myscript.bat
```
Executes the "myscript.bat" batch file in DOS mode.

### Open Command Prompt in DOS mode
```cmd
forcedos cmd
```
Launches Command Prompt in DOS mode.

### Run a specific program in DOS mode with command line arguments
```cmd
forcedos myprogram.exe arg1 arg2
```
Executes the "myprogram.exe" program in DOS mode with arguments "arg1" and "arg2".

### Load a specific DOS configuration file
```cmd
forcedos /config myconfig.dos
```
Forces DOS to load the configuration settings specified in "myconfig.dos".

### Force a directory listing in DOS mode
```cmd
forcedos dir
```
Lists the files and directories in the current location in DOS mode.
:::tip
When using the forcedos command in Windows, make sure to carefully review the available options and their respective values to avoid unintended consequences or system disruptions.
:::

### How do I use forcedos in Windows?
To use the forcedos command in Windows, execute the following command:
```cmd
forcedos --option <value>
```

### What are the common options available with forcedos in Windows?
When using the forcedos command in Windows, some common options include:
```cmd
forcedos --option1 value1 --option2 value2
```

### How can I simulate a DOS environment using forcedos in Windows?
To simulate a DOS environment using forcedos in Windows, you can use the following command:
```cmd
forcedos --simulate-dos
```

### How do I force a program to run in a specific compatibility mode with forcedos in Windows?
To force a program to run in a specific compatibility mode using forcedos in Windows, use the following command:
```cmd
forcedos --compatibility-mode <program_name>
```

### Is there a way to run a specific application with elevated privileges using forcedos in Windows?
Yes, you can run a specific application with elevated privileges using forcedos in Windows by using the following command:
```cmd
forcedos --run-as-admin <program_name>
```

### How can I troubleshoot compatibility issues with older applications in Windows using forcedos?
To troubleshoot compatibility issues with older applications in Windows using forcedos, run the following command:
```cmd
forcedos --troubleshoot-compatibility <program_name>
```

### Can I run a batch file in a DOS-like environment with forcedos in Windows?
Yes, you can run a batch file in a DOS-like environment using forcedos in Windows with the following command:
```cmd
forcedos --run-batch-file <file_name.bat>
```
## Applications of the FORCEDOS Command

- Forcing a specified program to run with elevated privileges
- Bypassing User Account Control (UAC) restrictions
- Running a program as an administrator
- Overriding system security measures
- Forcing a program to execute in a specific way or directory