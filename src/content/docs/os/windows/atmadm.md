---
title: All About ATMADM Windows command
description: Learn how to effectively manage ATM configurations with the Windows atmadm command.
---

The Windows atmadm command is a powerful tool for managing Asynchronous Transfer Mode (ATM) configurations. With atmadm, users can create virtual connections, modify connection parameters, and control ATM interfaces. This command provides essential functionality for network administrators working with ATM technology. By mastering the atmadm command, users can efficiently configure their ATM networks to meet specific requirements and optimize network performance.
## ATMADM Syntax:
```cmd
atmadm [options] [parameters]
```

## Options:
| Option     | Description                             |
|------------|-----------------------------------------|
| -c         | Displays the current ATM configuration. |
| -f         | Forces the network connections to be disconnected. |
| -s         | Stops the ATM services.                 |
| -r         | Restarts the ATM services.              |

## Parameters:
| Parameter  | Description                             |
|------------|-----------------------------------------|
| ATMID      | Specifies the ATM interface ID.         |
| SVCNAME    | Specifies the ATM connection service name. | 

:::caution
Exercise caution when using the atmadm command as it can disrupt ongoing network connections and services. Make sure to verify the parameters and options before execution to prevent any unintended consequences.
:::
## ATMADM CMD Examples:
### Add a Reservation
```cmd
atmadm addres -c IPV4 -i 192.168.1.100 -m 255.255.255.0
```
Adds a reservation for an IPv4 address with the specified IP address and subnet mask.

### Delete a Reservation
```cmd
atmadm delres -c IPV4 -i 192.168.1.100
```
Deletes a reservation for the specified IPv4 address.

### Show ATM PVC Information
```cmd
atmadm showmps -c <CircOrVcc> -n <PVCNumber>
```
Displays the ATM Permanent Virtual Circuit (PVC) information for the specified circuit or VCC number.

### Set ATM Emulation Mode
```cmd
atmadm setemul -e <EmulationType>
```
Sets the ATM emulation mode to the specified type.

### Show ATM Statistics
```cmd
atmadm querystats
```
Displays the current ATM statistics for the system.
:::tip
When using the atmadm command in Windows CMD, make sure to run the command with administrative privileges to avoid any permission errors.
:::

### How do I use atmadm in CMD?
To use the atmadm command in CMD, execute the following command:
```cmd
atmadm --config
```
---

### What is the purpose of the atmadm command?
The atmadm command in CMD is used for managing ATM mapping.
```cmd
atmadm --list
```
---

### How can I display a list of ATM devices using atmadm?
To display a list of ATM devices, you can use the atmadm command with the --list option.
```cmd
atmadm --list
```
---

### How do I add an ATM device using atmadm in CMD?
You can add an ATM device with the atmadm command by specifying the device's parameters.
```cmd
atmadm --add <device_parameters>
```
---

### Can I remove an ATM device with atmadm?
Yes, you can remove an ATM device using the atmadm command.
```cmd
atmadm --remove <device_id>
```
---

### How do I set configuration settings for an ATM device?
To configure settings for an ATM device, you can use the atmadm command with the --config option.
```cmd
atmadm --config
```
---

### What is the syntax for updating ATM parameters with atmadm?
To update ATM parameters, use the atmadm command with the --update option.
```cmd
atmadm --update <device_id> <new_parameters>
```
---

### Is there a command to display detailed information about an ATM device?
You can get detailed information about an ATM device by using the atmadm command with the --info option.
```cmd
atmadm --info <device_id>
```
---
## Applications of the atmadm Command

- Managing ATM network interfaces and connections.