---
title: netstat Linux Command Guide
description: Learn how to use the netstat command in Linux to display network connections, routing tables, interface statistics, and more.
---

The netstat command in Linux is used to display various network-related information such as network connections, routing tables, interface statistics, masquerade connections, multicast memberships, and more. It provides valuable insights into the networking activities of the system, helping users diagnose network-related issues and monitor network performance. By utilizing different options and flags, users can customize the output to focus on specific information of interest. Overall, netstat is a powerful command-line tool for network troubleshooting and analysis in Linux systems.

## netstat Syntax:
```bash
netstat [option] [parameter]
```

## Options:

| Option | Description                               |
|--------|-------------------------------------------|
| -a     | Show both listening and non-listening sockets. |
| -t     | Display TCP connections.                  |
| -u     | Display UDP connections.                  |
| -n     | Show numerical addresses instead of resolving hostnames. |
| -p     | Show the PID and name of the program to which each socket belongs. |
| -l     | Show only listening sockets.              |
| -r     | Display the routing table.                |
| -c     | Display the netstat information continuously. |
| -h     | Display help information.                 |

## Parameters:

| Parameter   | Description                                  |
|-------------|----------------------------------------------|
| address     | Display information for the specified address. |
| interface   | Display information for the specified network interface. |
| network     | Display information for the specified network type. |

:::caution
Exercise caution when using the netstat command as it provides sensitive information about network connections, routing tables, and program names associated with network connections. Be mindful of the data you are revealing and avoid sharing it in insecure or untrusted environments.
:::

## netstat Command Samples:

### Display All Listening Ports
```bash
netstat -tuln
```
This command displays all listening TCP and UDP ports with numeric addresses.

### Display Kernel Routing Information
```bash
netstat -r
```
Displays the kernel routing table, which includes information about network interfaces and routes.

### Display All Established Connections
```bash
netstat -atn
```
Shows all established TCP connections with numeric addresses.

### Display Network Statistics
```bash
netstat -s
```
Displays network statistics for different protocols like TCP, UDP, ICMP, and more.

### Display PID and Program Name for Network Connections
```bash
netstat -tulnp
```
Shows the PID (Process ID) and program name along with TCP and UDP listening ports.

### Display Summary of Network Statistics
```bash
netstat -s
```
Provides a summary of various network statistics, including errors, packet drops, and more.

### Display All Listening IPv4 and IPv6 Ports
```bash
netstat -tuln -4 -6
```
Displays all listening IPv4 and IPv6 ports with numeric addresses.
:::tip
When using the netstat command in Linux, make sure to refer to the command's manual (`man netstat`) to explore all available options and understand their functionality.
:::

### How do I use netstat to display all listening ports in Linux?
To display all listening ports with netstat in Linux, use the following command:
```bash
netstat -tuln
```

### How can I show all established connections with netstat in Linux?
To show all established connections using netstat in Linux, run the following command:
```bash
netstat -tan
```

### How do I use netstat to display both listening and non-listening sockets?
To display both listening and non-listening sockets with netstat in Linux, you can use the following command:
```bash
netstat -a
```

### What is the netstat command to show the process ID of the program using a specific port?
To show the process ID of the program using a specific port with netstat in Linux, execute the following command:
```bash
netstat -tulpn
```

### How can I use netstat to continuously monitor network connections?
To continuously monitor network connections using netstat in Linux, you can utilize the following command:
```bash
netstat -c
```

### How do I display the routing table with netstat in Linux?
To display the routing table with netstat in Linux, simply run the following command:
```bash
netstat -r
```
## Applications of the netstat command

- Display network connections
- Display routing table information
- Display interface statistics
- Display multicast group information
- Display network protocol statistics