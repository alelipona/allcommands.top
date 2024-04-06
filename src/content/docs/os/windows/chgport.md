---
title: CHGPORT Windows command
description: Learn how to use the Windows chgport command to change the port number settings for COM and LPT ports.
---

The Windows chgport command is a command-line utility that allows users to change the port number settings for COM and LPT ports on a Windows computer. By using the chgport command, users can easily modify the configuration of these ports to suit their specific needs. This can be especially useful in situations where the default port settings are not ideal or compatible with the connected devices. The chgport command provides a simple and efficient way to manage port settings without the need for complex GUI tools.

## CHGPORT Syntax:
```cmd
chgport [options] [parameters]
```

## Windows CHGPORT Options:
| Option    | Description                               |
|-----------|-------------------------------------------|
| /query    | Display current port mappings              |
| /delete   | Delete a port mapping                      |
| /add      | Add a port mapping                         |

## CHGPORT Parameters:
| Parameter | Description                    |
|-----------|--------------------------------|
| port      | Specifies the port number       |
| target    | Specifies the target IP address |

:::caution
Exercise caution when using the chgport command as it can potentially disrupt network communications if configured incorrectly.
:::
## How to use CHGPORT command:
### Change the COM port for a device
```cmd
chgport COM1=COM3
```
This command changes the COM port for a device from COM1 to COM3.

### Display the current COM port mappings
```cmd
chgport
```
This command displays the current COM port mappings on the system.

### Add a new COM port mapping
```cmd
chgport COM5=COM7
```
This command adds a new COM port mapping, assigning COM7 to be the new port for device previously connected to COM5.

### Remove a COM port mapping
```cmd
chgport /delete COM2
```
This command removes the COM port mapping for COM2, disconnecting any devices previously connected to this port.

### Revert a COM port mapping
```cmd
chgport /revert COM6
```
This command reverts the changes made to the COM port mapping for COM6 to its default configuration.

### Change the LPT port for a device
```cmd
chgport LPT1=LPT2
```
This command changes the LPT port for a device from LPT1 to LPT2.

### Display the current LPT port mappings
```cmd
chgport /lpt
```
This command displays the current LPT port mappings on the system.

### Disable a specific port mapping
```cmd
chgport /delete LPT2
```
This command disables the LPT2 port mapping, preventing any devices from using this port.
:::tip
Make sure to run the chgport command with administrative privileges to avoid any permission-related issues.
:::

### How do I use chgport in CMD?
To use the chgport command in CMD, execute the following command:
```cmd
chgport --option <value>
```

### What is the purpose of the chgport command in Windows CMD?
The chgport command is used to change the COM port parameters for a specific serial port in Windows.
```cmd
chgport COM1 /baudrate 9600
```

### How can I list all the available options for the chgport command?
You can view all the available options for the chgport command by using the /? flag.
```cmd
chgport /?
```

### How do I change the baud rate of a specific COM port using chgport?
To change the baud rate of a specific COM port, you can use the following syntax:
```cmd
chgport COM2 /baudrate 115200
```

### Can I disable a COM port with the chgport command?
Yes, you can disable a COM port using the chgport command by setting the baud rate to 0.
```cmd
chgport COM3 /baudrate 0
```

### How do I reset the settings of a COM port to default using chgport?
To reset the settings of a COM port to default, you can specify the default settings for all parameters.
```cmd
chgport COM4 /baudrate 9600 /bytesize 8 /parity N /stopbits 1
```

### Is it possible to change multiple parameters of a COM port at once with chgport?
Yes, you can change multiple parameters of a COM port simultaneously by specifying all the desired parameters.
```cmd
chgport COM5 /baudrate 57600 /bytesize 7 /parity E /stopbits 2
```

### How can I confirm that the changes made with the chgport command are applied?
You can verify that the changes made with the chgport command are applied by checking the properties of the respective COM port in Device Manager.
```cmd
chgport COM1 /baudrate 4800
```

### What should I do if I encounter errors while using the chgport command?
If you encounter errors while using the chgport command, ensure that you have administrative privileges and that the port you are trying to modify is not in use by another application.
```cmd
chgport COM3 /baudrate 2400 /bytesize 7
```

## Applications of the CHGPORT Command

- Change the COM port or LPT port number mappings for devices.