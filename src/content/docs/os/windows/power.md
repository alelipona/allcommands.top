---
title: Windows POWER command
description: Master the Windows POWER command with ease. Learn how to harness the power of this versatile tool for greater efficiency on your Windows system.
---

The Windows POWER command is a powerful and versatile tool that allows users to perform various tasks quickly and efficiently. By utilizing the command prompt, users can carry out a wide range of operations, such as managing files and folders, running scripts, and executing system commands. Whether you are a novice user or an advanced IT professional, mastering the Windows POWER command can significantly enhance your productivity and efficiency while working on your Windows system.

## POWER Syntax:
```cmd
power [option] [parameter]
```
## Options:
| Option    | Description                     |
|-----------|---------------------------------|
| -on       | Turn on the power                |
| -off      | Turn off the power               |
| -restart  | Restart the power                |

## Parameters:
| Parameter | Description                     |
|-----------|---------------------------------|
| machine   | Specify the target machine       |
| user      | Specify the user for authentication |

:::caution
Caution: Use the power command with caution, as it directly controls the power state of the target machine.
:::
## POWER Usage:
### Shut Down the Computer
```cmd
shutdown /s
```
Initiates a system shutdown immediately.

### Restart the Computer
```cmd
shutdown /r
```
Restarts the computer after a specified time delay or immediately.

### Log Off the Current User
```cmd
shutdown /l
```
Logs off the current user without shutting down or restarting the computer.

### Cancel a Scheduled Shutdown
```cmd
shutdown /a
```
Cancels a scheduled shutdown, if there is any.
:::tip
When using the power command in Windows CMD, make sure to run the command prompt as an administrator to avoid any permission issues.
:::

### How do I use power in Windows?
To use the power command in Windows, execute the following command:
```cmd
power --option <value>
```

### How can I check the available options for the power command?
To display the available options for the power command, you can use the following command:
```cmd
power --help
```

### How do I initiate a full shutdown of my Windows system using the power command?
To perform a full shutdown of your Windows system using the power command, you can use the following command:
```cmd
power --shutdown
```

### How do I restart my Windows system using the power command?
To restart your Windows system using the power command, you can execute the following command:
```cmd
power --restart
```

### How can I log off the current user session in Windows using the power command?
To log off the current user session in Windows using the power command, you can run the following command:
```cmd
power --logoff
```

### Can I put my Windows system into sleep mode using the power command?
Yes, you can put your Windows system into sleep mode using the power command. Use the following command:
```cmd
power --sleep
```

### How do I hibernate my Windows system via the power command?
To hibernate your Windows system using the power command, you can use the following command:
```cmd
power --hibernate
```

## Applications of the POWER Command

1. Calculating the power of a number in batch scripts or command prompt.
2. Automating calculations that involve exponents.
3. Performing complex mathematical operations that require power calculations.
4. Writing scripts that involve power operations efficiently.
5. Useful in calculations related to electrical engineering or physics.