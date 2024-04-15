---
title: netstat command in MacOS
description: Learn how to use the netstat command in MacOS to display network connections, routing tables, interface statistics, masquerade connections, and multicast memberships.
---

The netstat command in MacOS allows users to display network connections, routing tables, interface statistics, masquerade connections, and multicast memberships. It helps troubleshoot network issues and monitor network activity effectively.
## netstat Syntax:
```bash
netstat [ options ] [ parameters ]
```

## MacOS netstat Options:
| Option              | Description                            |
|---------------------|----------------------------------------|
| -a, --all           | Show both listening and non-listening sockets. |
| -t, --tcp           | Display TCP protocol sockets.           |
| -u, --udp           | Display UDP protocol sockets.           |
| -i, --interfaces    | Show network interfaces.                |
| -r, --routing       | Display the kernel routing tables.      |
| -s, --statistics    | Display network statistics.              |
| -p, --programs      | Show process using sockets.             |
| -A family, --address-family=family | Show only sockets of specified address family: inet, inet6, unix. |
| -n, --numeric       | Show numerical addresses.                |
| -l, --listening     | Show only listening sockets.            |
| -c, --continuous    | Continuously display information.        |
| -F form, --fib=filename | Display routing information from file. |

## netstat Parameters:
| Parameter                | Description                            |
|--------------------------|----------------------------------------|
| destination              | Display routing information for the specified destination. |
| interface                | Display information specific to the given network interface. |
| protocol                 | Display information for the specified protocol (tcp, udp, etc). |
| host                     | Display information for the specified host. |
| port                     | Display information for the specified port. |

:::caution
Exercise caution when using the netstat command, as it provides detailed network information that may expose sensitive data if shared or used improperly.
:::
## How to use netstat command:
### Display All Listening Ports
```bash
netstat -l
```
Display a list of all listening ports on the system.

### Display Statistics for All Protocols
```bash
netstat -s
```
Show statistics for all networking protocols.

### Display Kernel Routing Table
```bash
netstat -r
```
Show the kernel routing table.

### Display PID and Program for Each Connection
```bash
netstat -p
```
Display the PID and program name for each connection.

### Display Network Interface Statistics
```bash
netstat -i
```
Display network interface statistics.

### Display Only IPv4 Connections
```bash
netstat -4
```
Show only IPv4 connections.

### Display Only TCP Connections
```bash
netstat -t
```
Show only TCP connections.

### Display All Listening UDP Ports
```bash
netstat -u
```
Show all listening UDP ports on the system.
:::tip
When using the netstat command in MacOS, make sure to refer to the man pages (`man netstat`) for detailed information on the available options and their usage. Additionally, consider using the `-r` option to display the kernel routing tables, and the `-t` option to show TCP connections. Experiment with different options to customize the output based on your requirements.
:::

### How do I use netstat in MacOS?
To use the netstat command in MacOS, execute the following command:
```bash
netstat --option <value>
```

### How can I display active network connections with netstat in MacOS?
To display active network connections in MacOS using netstat, run the following command:
```bash
netstat -an
```

### How do I check for listening ports with netstat on MacOS?
To check for listening ports in MacOS using netstat, use the following command:
```bash
netstat -tuln
```

### How to show the PID/Program name along with network connections in MacOS using netstat?
To display the PID/Program name along with network connections in MacOS using netstat, execute the command below:
```bash
netstat -ap
```

### How do I filter netstat output by a specific protocol in MacOS?
To filter netstat output by a specific protocol in MacOS, use the following command:
```bash
netstat -t -p tcp
```

### How can I show the routing table in MacOS using netstat?
To display the routing table in MacOS using netstat, run the following command:
```bash
netstat -nr
```

### How to display statistics for each protocol using netstat in MacOS?
To display statistics for each protocol in MacOS using netstat, execute the following command:
```bash
netstat -s
```

### How do I show both listening and non-listening sockets in MacOS using netstat?
To show both listening and non-listening sockets in MacOS using netstat, use the following command:
```bash
netstat -a
```

### How can I display only the numeric values in the output of netstat on MacOS?
To display only numeric values in the output of netstat in MacOS, run the following command:
```bash
netstat -n
```

## Applications of the netstat command

- Display network connections
- Display routing table information
- Display interface statistics
- Display multicast group information
- Display network protocol statistics