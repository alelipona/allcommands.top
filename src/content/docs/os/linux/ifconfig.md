---
title: ifconfig Linux command
description: Learn how to use the ifconfig command in Linux to manage network interfaces, configure IP addresses, and troubleshoot network connections efficiently.
---

The `ifconfig` command in Linux is used to view and configure network interfaces, assign IP addresses, enable or disable network interfaces, and diagnose network connection issues. By running `ifconfig` with appropriate options, users can display a list of all network interfaces on the system along with their current configurations. This command is essential for monitoring network traffic, troubleshooting connectivity problems, and configuring network settings. It is a versatile tool that provides valuable information about network interfaces and plays a crucial role in managing network connections effectively.

## ifconfig Syntax:
```bash
ifconfig [interface] [options]
```

## Options:
| Option           | Description                               |
|------------------|-------------------------------------------|
| -a               | Display all interfaces                     |
| -s               | Display a short summary                   |
| up               | Activate the specified interface          |
| down             | Deactivate the specified interface        |
| add              | Add a new IPv4 address                     |
| del              | Delete an IPv4 address                     |
| netmask          | Specify the netmask for an interface      |

## Parameters:
| Parameter   | Description                                    |
|-------------|------------------------------------------------|
| interface   | Specifies the network interface to configure   |
| options     | Additional configuration options                |

:::caution
Exercise caution when using the ifconfig command as it allows for direct manipulation of network interface configurations, which can impact network connectivity and system stability if not used carefully.
:::
## ifconfig bash Examples:
### Display All Network Interfaces
```bash
ifconfig
```
Displays information about all network interfaces on the system.

### Display Information for a Specific Interface
```bash
ifconfig eth0
```
Displays detailed information about the network interface "eth0".

### Enable a Network Interface
```bash
ifconfig eth0 up
```
Enables the network interface "eth0".

### Disable a Network Interface
```bash
ifconfig eth0 down
```
Disables the network interface "eth0".

### Assign an IP Address to an Interface
```bash
ifconfig eth0 192.168.1.100
```
Assigns the IP address "192.168.1.100" to the network interface "eth0".

### Change Netmask of an Interface
```bash
ifconfig eth0 netmask 255.255.255.0
```
Changes the netmask of the network interface "eth0" to "255.255.255.0".
:::tip
Remember to use the ifconfig command with caution, as it requires administrative privileges and can make changes to network configurations that may disrupt network connectivity if used incorrectly.
:::

### How do I use ifconfig in Linux?
To use the ifconfig command in Linux, execute the following command:
```bash
ifconfig
```

### How to display only IPv4 addresses using ifconfig?
To display only IPv4 addresses using ifconfig, use the following command:
```bash
ifconfig | grep -oE "inet addr:[^ ]*" | grep -oE "[0-9.]*"
```

### How to bring up a network interface using ifconfig?
To bring up a network interface using ifconfig, run the following command:
```bash
sudo ifconfig eth0 up
```

### How to assign an IP address to a network interface using ifconfig?
To assign an IP address to a network interface using ifconfig, use the following command:
```bash
sudo ifconfig eth0 192.168.1.10 netmask 255.255.255.0
```

### How to set a default gateway using ifconfig?
To set a default gateway using ifconfig, execute the following command:
```bash
sudo route add default gw 192.168.1.1
```

### How to display detailed information about all network interfaces using ifconfig?
To display detailed information about all network interfaces using ifconfig, run the following command:
```bash
ifconfig -a
```

### How to disable a network interface using ifconfig?
To disable a network interface using ifconfig, use the following command:
```bash
sudo ifconfig eth0 down
```

### How to change the MAC address of a network interface using ifconfig?
To change the MAC address of a network interface using ifconfig, execute the following command:
```bash
sudo ifconfig eth0 hw ether 00:11:22:33:44:55
```
## Applications of the ifconfig command

- Configure network interfaces
- Display network interface information
- Enable or disable network interfaces
- Assign IP addresses to network interfaces
- View current network configuration
- Troubleshoot network connectivity issues