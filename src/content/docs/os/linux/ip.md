---
title: ip Linux Command Guide
description: Learn how to manage network configuration with the ip command in Linux.
---

The ip command in Linux is a versatile tool used to manage network configurations. It allows users to display, configure, and manage network interfaces, IP addresses, routes, and more. With ip, you can troubleshoot network issues, set up virtual interfaces, assign multiple IP addresses to a single interface, and manage routing tables effectively. This command replaces the older ifconfig and route commands, providing a more robust and modern solution for configuring network settings in Linux distributions.

## ip Syntax:
```bash
ip [options] [parameters]
```
## Options:
| Option | Description                           |
|--------|---------------------------------------|
| link   | Network device-specific operations    |
| address| Address-specific operations           |
| route  | Routing table-specific operations      |
| neighbor| Neighbor-specific operations          |
| -s     | Display short output                  |
| -h     | Display help message                  |

## Parameters:
| Parameter   | Description                                     |
|-------------|-------------------------------------------------|
| address     | Target IP address                               |
| interface   | Interface name or id                            |
| network     | Network name or IP address                      |
| show        | Display specific information                    |
| help        | Display help message                            |

:::caution
Exercise caution when using the `ip` command as it has powerful functionalities that can make changes to the network configuration of your system. Ensure that you have the necessary permissions and knowledge before executing commands.
:::
## ip Command Samples:
### Display Network Interfaces
```bash
ip address show
```
Shows the configuration of all network interfaces on the system.

### Assign an IP Address to an Interface
```bash
ip address add 192.168.1.10/24 dev eth0
```
Assigns the IP address "192.168.1.10" with a subnet mask of 24 to the interface "eth0".

### Bring Down an Interface
```bash
ip link set eth0 down
```
Brings down the network interface "eth0".

### Display the Routing Table
```bash
ip route show
```
Displays the current routing table of the system.

### Add a Static Route
```bash
ip route add 192.168.2.0/24 via 192.168.1.1
```
Adds a static route for the network "192.168.2.0/24" via the gateway "192.168.1.1".

### Flush ARP Cache
```bash
ip neigh flush all
```
Flushes the ARP cache, removing all entries.

### Manage IPv6 Addresses
```bash
ip -6 address show
```
Displays IPv6 addresses and related information for all interfaces.
:::tip
When using the ip command in Linux, make sure to refer to the command's man page or help option (`ip --help`) to explore the various available options and functionalities.
:::

## ip FAQ:
### How do I use ip in Linux?
To use the ip command in Linux, execute the following command:
```bash
ip --option <value>
```

### How can I display information about network interfaces using ip?
You can display information about network interfaces using the following ip command:
```bash
ip addr show
```

### How do I add a new IP address to a network interface with ip in Linux?
To add a new IP address to a network interface using the ip command, run the following command:
```bash
ip addr add <ip_address>/<subnet_mask> dev <interface>
```

### How can I list all the routes with ip in Linux?
To list all the routes using the ip command in Linux, use the following command:
```bash
ip route show
```

### How do I delete an IP address from a network interface with ip?
To delete an IP address from a network interface using the ip command, you can use the following command:
```bash
ip addr del <ip_address>/<subnet_mask> dev <interface>
```

### How can I flush all IP addresses of a network interface with ip in Linux?
To flush all IP addresses of a network interface using the ip command, you can run the following command:
```bash
ip addr flush dev <interface>
```
## Applications of the ip command

- Assigning an IP address to a network interface
- Bringing up or taking down a network interface
- Displaying information about network interfaces
- Managing routing tables and rules
- Setting up virtual network interfaces
- Managing ARP cache
- Managing Multicast addresses
- Managing tunneling interfaces