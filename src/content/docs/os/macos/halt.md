---
title: MacOS halt command
description: Learn how to safely shut down or restart your Mac using the halt command in the Terminal. Find out the proper syntax and options to execute this command efficiently.
---

The MacOS halt command allows users to shut down or restart their Mac from the command line. This command can be useful for those who prefer using the Terminal for system control tasks or automation scripts. By entering the halt command with the appropriate options, users can initiate a safe shutdown or restart of their Mac without having to use the graphical interface. It is important to understand the proper syntax and options for the halt command to ensure that the operation is executed correctly and without any issues.

## halt Syntax:
```bash
sudo halt
```
## Options:
| Option | Description                           |
|--------|---------------------------------------|
| -n     | Do not sync the file system prior to halting. |
| -q     | Perform a quick halt without saving open files. |
| -h     | Halt and power off the system.         |

## Parameters:
| Parameter | Description                              |
|-----------|------------------------------------------|
|           | No specific parameters for the halt command.|

:::caution
Caution: Ensure that all necessary files are saved before using the halt command, as it will shut down the system immediately without further warning.
:::
## halt Usage:
{EXAMPLES}

### Halt the system immediately
```bash
sudo halt -n
```
This command will halt the system immediately without any warning or delay.

### Halt the system and display a message
```bash
sudo halt -p "System will shut down for maintenance at 2 PM"
```
The system will be halted after displaying the specified message.

### Halt the system and power off
```bash
sudo halt -p -o
```
This command will halt the system, display a message, and power off the machine.

### Halt the system and reboot
```bash
sudo halt -r
```
The system will halt and then automatically reboot.
:::tip
Remember to use the halt command with caution, as it will immediately shut down your system without warning. Make sure to save all your work before executing the command to avoid any data loss.
:::

### How do I use halt in MacOS?
To use the halt command in MacOS, execute the following command:
```bash
halt
```

### How do I force shutdown using halt in MacOS?
To force shutdown using the halt command in MacOS, add the `-q` or `--quick` option:
```bash
halt -q
```

### How do I schedule a shutdown using halt in MacOS?
To schedule a shutdown using the halt command in MacOS, add the `-t` or `--time` option followed by the time in minutes:
```bash
halt -t 10
```

### How do I halt and power off the system in MacOS?
To halt and power off the system using the halt command in MacOS, add the `-p` or `--power-off` option:
```bash
halt -p
```

### How do I halt and reboot the system in MacOS?
To halt and reboot the system using the halt command in MacOS, add the `-r` or `--reboot` option:
```bash
halt -r
```

### How do I cancel a scheduled shutdown in MacOS using halt?
To cancel a scheduled shutdown using the halt command in MacOS, use the `-c` or `--cancel` option:
```bash
halt -c
```

### How do I view available options for halt in MacOS?
To view the available options for the halt command in MacOS, use the `-h` or `--help` option:
```bash
halt -h
```

## Applications of the halt MacOS command

- Shutting down the macOS system completely.