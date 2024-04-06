---
title: Windows PWLAUNCHER command
description: Windows PWLAUNCHER command allows users to run the Password Reset Wizard from the command line.
---

The Windows PWLAUNCHER command is a useful tool that allows users to initiate the Password Reset Wizard directly from the command line. This command can be handy for system administrators who need to reset passwords for multiple users efficiently. By utilizing the PWLAUNCHER command, users can streamline the password reset process and manage user accounts more effectively.
## PWLAUNCHER Syntax:
```cmd
pwlauncher [option] [parameter]
```

## Options:
| Option   | Description                             |
|----------|-----------------------------------------|
| -a       | Specify the action for the launcher     |
| -p       | Specify the path for the launcher       |
| -r       | Run the launcher                        |
| -h       | Display help for the launcher           |

## Parameters:
| Parameter  | Description                            |
|------------|----------------------------------------|
| action     | Action to be performed by the launcher |
| path       | Path to the launcher executable         |

:::caution
Exercise caution when using the pwlauncher command with the options and parameters to ensure correct execution and avoid errors.
:::
## PWLAUNCHER Usage:
### Launch a command prompt with pwlauncher
```cmd
pwlauncher cmd
```
Launches a command prompt using the pwlauncher utility.

### Run a specific command with pwlauncher
```cmd
pwlauncher echo Hello World
```
Executes the command "echo Hello World" using pwlauncher.

### Open PowerShell with pwlauncher
```cmd
pwlauncher powershell
```
Opens PowerShell using pwlauncher.

### Execute a batch script with pwlauncher
```cmd
pwlauncher C:\scripts\my_script.bat
```
Runs a batch script located at "C:\scripts\my_script.bat" with pwlauncher.
:::tip
When using the pwlauncher command in Windows, make sure to carefully read the documentation and understand the available options to customize the behavior according to your requirements.
:::

### How do I use pwlauncher in Windows?
To use the pwlauncher command in Windows, execute the following command:
```cmd
pwlauncher --option <value>
```

### How can I specify the directory path in pwlauncher?
In pwlauncher, you can specify the directory path using the following command:
```cmd
pwlauncher --directory "C:\path\to\directory"
```

### How do I list all available options in pwlauncher?
To list all available options in pwlauncher, you can use the following command:
```cmd
pwlauncher --help
```

### How do I run pwlauncher in verbose mode?
To run pwlauncher in verbose mode and see detailed output, use the following command:
```cmd
pwlauncher --verbose
```

### How can I set a specific timeout in pwlauncher?
To set a specific timeout in pwlauncher, you can use the following command:
```cmd
pwlauncher --timeout 60
```

### How do I use pwlauncher to launch a specific script?
To use pwlauncher to launch a specific script, you can execute the following command:
```cmd
pwlauncher --script "script_name"
```

### How do I force pwlauncher to overwrite existing files?
To force pwlauncher to overwrite existing files, use the following command:
```cmd
pwlauncher --force
```
## Applications of the PWLAUNCHER Command

- Launching specific applications with ProcessWire
- Managing and monitoring processes within the ProcessWire environment