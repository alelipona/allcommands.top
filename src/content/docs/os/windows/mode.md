---
title: MODE Windows Command Guide
description: Learn how to use the MODE command in Windows to configure system devices, serial ports, and more. Find out the syntax, parameters, and options for this versatile command.
---

The MODE command in Windows allows users to configure system devices, specifically the COM and LPT ports. By using various parameters and options, users can change settings such as baud rate, parity, data bits, and stop bits for serial ports. Additionally, the MODE command can be used to redirect printing outputs to different devices or to enable line delay. This command offers flexibility and customization for managing system devices efficiently.
## MODE Syntax:
```cmd
MODE [device] [baud] [,] [parity] [,] [dataBits] [,] [stopBits] [,] [xon=on|off] [,] [oem] [,] [ansi]
```
## Options:
| Option      | Description                           |
|-------------|---------------------------------------|
| device      | The specific device to configure      |
| baud        | Sets the baud rate                     |
| parity      | Sets the parity (even, odd, none)     |
| dataBits    | Sets the number of data bits          |
| stopBits    | Sets the number of stop bits (1, 2)  |
| xon         | Enables or disables XON flow control  |
| oem         | Specifies if the device is OEM        |
| ansi        | Specifies if the device is ANSI       |

## Parameters:
There are no specific parameters for the MODE command.

:::caution
Exercise caution when using the MODE command as it directly manipulates device settings, which may impact the operation of the device connected to the specified port. Make sure to provide accurate values for baud rate, parity, data bits, stop bits, and other settings to avoid any issues with the device communication.
:::
## MODE Command Samples:
### Set the computer's current code page to 437
```cmd
mode con cp select=437
```
Changes the computer's current code page to 437, which is often used for English language support.

### Display current console input/output code pages
```cmd
mode con cp
```
Shows the current code page settings for console input and output.

### Redirect printer output to a file
```cmd
mode > output.txt
```
Redirects the output from the mode command to a file named "output.txt".

### Set the printer to print in landscape orientation
```cmd
mode lpt1: landscape
```
Sets the printer connected to LPT1 to print in landscape orientation.

### Set the serial port COM1 to use even parity
```cmd
mode com1: parity=e
```
Configures the serial port COM1 to use even parity for data transmission.

### Disable the serial port COM2
```cmd
mode com2: off
```
Turns off the serial port COM2 to disable its functionality.

### Display all available printer ports
```cmd
mode
```
Lists all available printer ports and their current configurations.
:::tip
When using the mode command in Windows, make sure to double-check the specific options and values applicable to your system requirements. Incorrect usage of the mode command can result in unexpected changes to your system settings.
:::

## MODE FAQ:
### How do I use mode in Windows?
To use the mode command in Windows, execute the following command:
```cmd
mode --option <value>
```

### What are some common options with the mode command?
Some common options with the mode command include setting the COM port communication parameters and setting display mode options.

### How do I display the current mode settings in Windows?
To display the current mode settings in Windows, use the following command:
```cmd
mode
```

### How do I change the console code page with the mode command?
To change the console code page using the mode command, you can use the following command:
```cmd
mode CON: CP SELECT=<code_page_number>
```

### Can I use the mode command to switch between text and graphics modes?
Yes, you can use the mode command to switch between text and graphics modes on Windows. Execute the following command to switch between the modes:
```cmd
mode con: cols=80 lines=25
```

### How do I set the baud rate with the mode command?
To set the baud rate using the mode command in Windows, you can use the following command:
```cmd
mode COM1:9600,N,8,1
```
## Applications of the MODE Command

- Set or display system configuration
- Configure serial port communication parameters
- Configure parallel port settings
- Display information about device settings
- Redirect console input and output to a file