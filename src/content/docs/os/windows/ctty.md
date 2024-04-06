---
title: What is CTTY Windows command?
description: Command prompt enthusiasts can learn about the versatile Windows ctty command here. 
---

The Windows ctty command, short for "Change TTY", is a versatile tool that allows users to change the system console's device or file handling behavior. By utilizing the ctty command, users can redirect console input and output to different devices or files, offering greater flexibility and control over the command prompt environment. Whether you need to reroute output to a specific file or change the default input device, the ctty command provides a simple yet powerful solution. With its ability to enhance the command prompt experience, the ctty command is a valuable tool for Windows users looking to customize their console interactions.

## CTTY Syntax:
```cmd
ctty device
```

## CTTY Options:

| Option | Description                        |
|--------|------------------------------------|
| device | Specifies the device to use as the console input and output. |

## Parameters:
| Parameter | Description                                                      |
|-----------|------------------------------------------------------------------|
| device    | The device to be set as the console input and output.           |

:::caution
It is recommended to be cautious while using the `ctty` command as it can alter the console input and output device, potentially leading to loss of control over the system.
:::
## CTTY Command Usage Examples:
### Display the Current Console TTY Device
```cmd
ctty
```
Displays the current console TTY device.

### Change the Console TTY Device to COM2
```cmd
ctty com2
```
Changes the console TTY device to COM2.

### Reset the Console TTY Device Back to Default
```cmd
ctty con
```
Resets the console TTY device back to the default.

### Verify the Current Console TTY Device
```cmd
ctty yes
```
Verifies the current console TTY device configuration.

### Set the Console TTY Device to LPT1
```cmd
ctty lpt1
```
Sets the console TTY device to LPT1.
:::tip
Make sure to run the ctty command with the correct options to avoid unexpected results.
:::

### How do I use ctty in Windows?
To use the ctty command in CMD, execute the following command:
```cmd
ctty /1
```

### What does the ctty command do in Windows?
The ctty command is used to change the default input and output devices in the CMD window.

### How can I set a new default input device with ctty in Windows?
You can set a new default input device in CMD using the ctty command with the desired device number. For example:
```cmd
ctty /1
```

### How to revert back to the original default input device using ctty in Windows?
To revert back to the original default input device, you can use the ctty command with the device number 0. Here's an example:
```cmd
ctty /0
```

### Can ctty command be used to change the default output device in Windows CMD?
Yes, the ctty command can be used to change the default output device in the CMD window. You can specify the output device number with the command. For example:
```cmd
ctty /2
```

### How to display the current default input and output devices using ctty in Windows?
You can display the current default input and output devices in CMD by running the ctty command without any options. This will show the current input and output devices.

### Is it possible to change both the default input and output devices simultaneously with ctty in Windows CMD?
Yes, you can change both the default input and output devices simultaneously using the ctty command. Simply specify the desired input and output device numbers in the command. For example:
```cmd
ctty /1 2
```

### How to get help and see the available options for ctty in Windows?
To see the available options and get help for the ctty command in Windows, you can use the /? option. This will display the command syntax and available options.
```cmd
ctty /?
```
## Applications of the CTTY Command

1. Connect input and output devices to a specific device or file
2. Change the console input and output device
3. Redirect input and output to different sources
4. Assign an alternate device for input and output communication