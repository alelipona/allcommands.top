---
title: Linux lsusb command
description: With the Linux lsusb command, you can list USB devices connected to your system, view their details, and troubleshoot connection issues.
---

The Linux lsusb command allows users to list all USB devices connected to the system, revealing information such as vendor ID, device ID, and device class. This command can be helpful for troubleshooting USB connection issues, identifying connected devices, and checking if they are recognized by the system. By running lsusb in the terminal, users can quickly obtain a detailed overview of all connected USB hardware.

## lsusb Syntax:
```bash
lsusb [options] [parameters]
```

## Options:
| Option       | Description                                       |
|--------------|---------------------------------------------------|
| -t           | Display a tree format                               |
| -v           | Verbose mode                                       |
| -s [bus:device]| Show only devices with specified bus and device numbers|

## Parameters:
| Parameter    | Description                                       |
|--------------|---------------------------------------------------|
| None         | Lists USB devices connected to the system          |

:::caution
Exercise caution while running lsusb command as it displays information about USB devices connected to the system, some of which may contain sensitive information.
:::

### List USB Devices
```bash
lsusb
```
Lists all connected USB devices.

### List USB Devices with Detailed Information
```bash
lsusb -v
```
Lists all connected USB devices with detailed information.

### List USB Devices in Tree Format
```bash
lsusb -t
```
Lists all connected USB devices in a tree-like format.

### List USB Devices and grep for a Specific Device
```bash
lsusb | grep "Logitech"
```
Lists all connected USB devices and filters the output to show devices with the keyword "Logitech".
:::tip
When using the lsusb command in Linux, make sure to have the necessary permissions to access USB devices. You might need to run the command with sudo or as root to view all connected USB devices.
:::

### How do I use lsusb in Linux?
To use the lsusb command in Linux, execute the following command:
```bash
lsusb
```

### How to display detailed information with lsusb?
To display detailed information about USB devices using lsusb, you can use the "-v" flag. 
```bash
lsusb -v
```

### How to list only bus information with lsusb?
To list just the bus information with lsusb, you can use the "-t" flag.
```bash
lsusb -t
```

### How to find a specific USB device with lsusb?
To find a specific USB device with lsusb, you can use the "-d" flag followed by the device's vendor and product IDs in hexadecimal format.
```bash
lsusb -d 05e3:0745
```

### How to show the device class ID along with lsusb?
To display the device class ID along with other information, you can include the "-v" flag along with the "-t" flag when using lsusb.
```bash
lsusb -tv
```

### How to list USB devices in a tree-like format with lsusb?
To list USB devices in a tree-like format, you can combine the "-t" and "-v" flags with lsusb for a hierarchical view of the devices.
```bash
lsusb -tvv
```

### How to refresh the list of connected USB devices with lsusb?
To refresh the list of connected USB devices in Linux using lsusb, you can use the "-r" flag to make the command continuously monitor for changes and update the output.
```bash
lsusb -r

## Applications of the lsusb command

1. Viewing a list of USB devices connected to the system
2. Checking the vendor and product IDs of USB devices
3. Troubleshooting USB device recognition issues
4. Verifying whether a specific USB device is recognized by the system
5. Providing information for debugging USB driver issues.