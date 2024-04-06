---
title: Windows NETCFG command
description: Learn how to manage network configurations in Windows using the NETCFG command.
---

The Windows netcfg command allows users to install, configure, and manage networking components on a Windows system. By using various parameters, users can add and remove network components, display information about network adapters, set up protocols and services, and troubleshoot network-related issues. With the netcfg command, users have more control over their network configurations, making it easier to customize their network settings to meet their specific needs.

## NETCFG Syntax:
```cmd
netcfg [ -b ] [ -q ] [ -v ] [ -l path\to\logfile ] [ -winpe ]
```

## Options:
| Option    | Description                                                  |
|-----------|--------------------------------------------------------------|
| -b        | Rebuilds the network component registry settings without requiring a restart.|
| -q        | Suppresses all output except for errors.                     |
| -v        | Verbose mode. Displays detailed information during execution.|
| -l path\to\logfile | Specifies a custom log file location.                   |
| -winpe    | Run the command in Windows Preinstallation Environment (WinPE).|

## Parameters:
| Parameter | Description                                                  |
|-----------|--------------------------------------------------------------|
| None      | There are no specific parameters for the netcfg command.     |
:::caution
Exercise caution when using the netcfg command as it can modify critical network settings on your system. Make sure to double-check the options and parameters you use to avoid any unintended consequences.
:::
## NETCFG Usage:
### Display a List of Network Interface Devices
```cmd
netcfg -q
```
This command displays a list of network interface devices installed on the system.

### Disable a Network Interface Device
```cmd
netcfg -d "Ethernet"
```
Disables the network interface device named "Ethernet" on the system.

### Enable a Network Interface Device
```cmd
netcfg -e "Wi-Fi"
```
Enables the network interface device named "Wi-Fi" on the system.

### Reset TCP/IP Stack
```cmd
netcfg -t
```
Resets the TCP/IP stack on the system, which can help resolve network connectivity issues. 


:::tip
When using the netcfg command in Windows, make sure to run it with administrative privileges to avoid any permission issues.
:::

### How do I use netcfg in Windows?
To use the netcfg command in Windows, execute the following command:
```cmd
netcfg /l
```

### What does the "netcfg /l" command do?
The "netcfg /l" command lists all the network components and their associated profiles.

### How can I install a network component using netcfg?
To install a network component using netcfg, use the following command:
```cmd
netcfg -l <INFFile> install
```

### How do I uninstall a network component with netcfg?
To uninstall a network component using netcfg, run the command below:
```cmd
netcfg -u <ComponentId>
```

### Can I enable or disable a network component using netcfg?
Yes, you can enable or disable a network component with netcfg using the commands:
To enable: 
```cmd
netcfg -e <ComponentId>
```
To disable:
```cmd
netcfg -d <ComponentId>
```

### How do I refresh network settings with netcfg?
To refresh network settings using netcfg, use the following command:
```cmd
netcfg -s
```

## Applications of the NETCFG Command

- View network configuration
- Configure network settings
- Enable or disable network interfaces
- Set network parameters
- Modify network adapter properties
- Manage network protocols