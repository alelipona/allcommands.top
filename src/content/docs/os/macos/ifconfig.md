---
title: ifconfig command in MacOS
description: Configure network interfaces with ifconfig command in MacOS. Learn how to display, set up, or troubleshoot network connections on your Mac.
---

The `ifconfig` command in MacOS is used to configure network interfaces, display current network configuration, set up new network configurations, or troubleshoot network connectivity issues. With ifconfig, users can view information about all network interfaces, assign IP addresses, enable or disable network interfaces, and adjust network settings as needed. This powerful command is essential for managing network connections on MacOS devices.

## ifconfig Syntax:
```bash
ifconfig [interface] [options]
```

## MacOS ifconfig Options:
| Option | Description                            |
|--------|----------------------------------------|
| -a     | Display all interfaces                 |
| -v     | Display verbose output                 |
| -u     | Display interfaces configured up       |
| -l     | Display interfaces configured down     |
| -c     | Reset packet counters                  |
| -t     | Add a tunnel interface                 |

## ifconfig Parameters:
| Parameter  | Description                                                                 |
|------------|-----------------------------------------------------------------------------|
| interface  | Specifies the interface name (e.g., en0, en1) to show or configure         |
| options    | Optional options to display or configure settings for the specified interface |

:::caution
Exercise caution while using the ifconfig command as it allows for configuring network interfaces, which can disrupt network connectivity if not used properly.
:::
## How to use ifconfig command:
### Show Interface Configuration
```bash
ifconfig
```
Displays the configuration of all network interfaces.

### Show Detailed Interface Information
```bash
ifconfig en0
```
Displays detailed information about a specific network interface (in this case, "en0").

### Release DHCP Lease
```bash
sudo ifconfig en0 down
```
Releases the DHCP lease for the network interface "en0".

### Renew DHCP Lease
```bash
sudo ifconfig en0 up
```
Renews the DHCP lease for the network interface "en0".

### Set IP Address
```bash
sudo ifconfig en0 inet 192.168.1.10 netmask 255.255.255.0
```
Sets the IP address and netmask for the network interface "en0".

### Enable Promiscuous Mode
```bash
sudo ifconfig en0 promisc
```
Enables promiscuous mode on the network interface "en0".

### Disable Interface
```bash
sudo ifconfig en0 down
```
Disables the network interface "en0".

### Enable Interface
```bash
sudo ifconfig en0 up
```
Enables the network interface "en0".
:::tip
When using the `ifconfig` command in MacOS, it is important to note that some options may require superuser (root) privileges. You can use `sudo` before the command to execute it with elevated permissions.
:::

### How do I use ifconfig in MacOS?
To use the ifconfig command in MacOS, execute the following command:
```bash
ifconfig
```

### How do I display all network interfaces using ifconfig in MacOS?
To display all network interfaces using the ifconfig command in MacOS, run:
```bash
ifconfig -a
```

### How do I enable a network interface using ifconfig in MacOS?
To enable a network interface using the ifconfig command in MacOS, use the following syntax:
```bash
sudo ifconfig en0 up
```

### How do I disable a network interface using ifconfig in MacOS?
To disable a network interface using ifconfig in MacOS, you can use the following command:
```bash
sudo ifconfig en0 down
```

### How do I assign an IP address to a network interface using ifconfig in MacOS?
To assign an IP address to a network interface using ifconfig in MacOS, you can use a command similar to this:
```bash
sudo ifconfig en0 inet 192.168.1.100 netmask 255.255.255.0
```

### How do I change the MAC address of a network interface using ifconfig in MacOS?
To change the MAC address of a network interface using ifconfig in MacOS, you can run a command like this:
```bash
sudo ifconfig en0 ether 00:11:22:33:44:55
```

### How do I display only IPv4 addresses using ifconfig in MacOS?
To display only IPv4 addresses using the ifconfig command in MacOS, you can use the following command:
```bash
ifconfig | grep 'inet '
```

### How do I renew the DHCP lease using ifconfig in MacOS?
To renew the DHCP lease using ifconfig in MacOS, you can run the following command:
```bash
sudo ifconfig en0 dhcp
```

### How do I display detailed information about a specific network interface using ifconfig in MacOS?
To display detailed information about a specific network interface using ifconfig in MacOS, use the following command format:
```bash
ifconfig en0
```

## Applications of the ifconfig command

- View network interface configuration
- Enable or disable network interfaces
- Assign an IP address to a network interface
- Configure the subnet mask for a network interface
- View the MAC (Media Access Control) address of a network interface
- Check network connection status
- View network statistics and traffic on interfaces