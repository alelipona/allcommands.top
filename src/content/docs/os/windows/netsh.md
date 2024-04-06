---
title: NETSH Windows Command Guide
description: Learn how to use the Windows netsh command to manage network settings, troubleshoot connectivity issues, and configure network interfaces efficiently.
---

The Windows netsh command is a powerful tool for managing network settings, troubleshooting connectivity issues, and configuring network interfaces efficiently. With netsh, you can view or change the network configuration of your computer, set parameters such as IP addresses and DNS servers, and diagnose and resolve network problems. This command-line utility provides a wide range of functionalities for networking tasks, making it an essential tool for network administrators and advanced users.
## NETSH Syntax:
```cmd
netsh [command] [subcommand] [options] [parameters]
```
## Options:
| Option      | Description                            |
|-------------|----------------------------------------|
| /?          | Displays help for the specified command. |

## Parameters:
No specific parameters for the general netsh command.

:::caution
Exercise caution when using the netsh command as it can affect system network settings and configurations. Make sure to have a good understanding of the command syntax and its effects before making any changes.
:::
## NETSH Command Samples:
### Show Interface Information
```cmd
netsh interface show interface
```
Displays information about all network interfaces on the system.

### Disable a Network Adapter
```cmd
netsh interface set interface "Ethernet" admin=disable
```
Disables the network adapter named "Ethernet".

### View Wireless Networks
```cmd
netsh wlan show networks
```
Shows a list of available wireless networks.

### Change IP Address
```cmd
netsh interface ipv4 set address "Ethernet" static 192.168.1.100 255.255.255.0 192.168.1.1
```
Sets a static IP address, subnet mask, and default gateway for the network adapter named "Ethernet".

### Export Wireless Network Profile
```cmd
netsh wlan export profile name="YourNetwork" key=clear
```
Exports the wireless network profile named "YourNetwork" with the password visible in clear text.

### Set DNS Server
```cmd
netsh interface ipv4 set dns "Local Area Connection" static 8.8.8.8
```
Configures the DNS server address for the network adapter named "Local Area Connection".

### Configure Firewall Rules
```cmd
netsh advfirewall firewall add rule name="Block Website" dir=out action=block remoteip=www.example.com
```
Adds a new outbound firewall rule to block outgoing connections to a specific website.
:::tip
When using the netsh command in Windows, it is important to run it with administrative privileges to ensure proper execution and access to network configuration settings.
:::

## NETSH FAQ:
### How do I use netsh in Windows?
To use the netsh command in Windows, execute the following command:
```cmd
netsh --option <value>
```

### How can I list all available netsh contexts?
To list all available netsh contexts, use the following command:
```cmd
netsh ? 
```

### How do I show all settings in a specific netsh context?
To display all settings in a specific netsh context, use the following command:
```cmd
netsh advfirewall show currentprofile
```

### How can I reset the TCP/IP stack using netsh?
To reset the TCP/IP stack using netsh, run the following command:
```cmd
netsh int ip reset
```

### How do I configure a static IP address using netsh?
To configure a static IP address using netsh, use the following command as an example:
```cmd
netsh interface ipv4 set address "Local Area Connection" static 192.168.1.100 255.255.255.0 192.168.1.1
```

### How can I export netsh configurations to a file?
To export netsh configurations to a file, execute the following command:
```cmd
netsh dump > netsh-config.txt
```
## Applications of the NETSH Command

- Configure network interfaces
- Manage Windows Firewall
- Diagnose network issues
- Configure, monitor, and troubleshoot network settings
- Configure DHCP settings
- Manage routing tables
- Monitor network statistics
- Configure and manage wireless networks