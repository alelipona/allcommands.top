---
title: NETSTAT Windows Command Guide
description: Learn how to use the powerful Windows netstat command to display network connections, routing tables, interface statistics, and more.
---

The Windows netstat command is a versatile tool for displaying active network connections, routing tables, interface statistics, and other important networking information. By running netstat in the command prompt, users can quickly identify established TCP connections, view listening ports, check network interface details, and troubleshoot network-related issues. This handy command provides vital insights into a system's network activity, making it an essential tool for network administrators, IT professionals, and anyone looking to understand and optimize their network connections on a Windows operating system.

## NETSTAT Syntax:
```cmd
netstat [option] [parameter]
```

## Options:
| Option | Description                             |
|--------|-----------------------------------------|
| -a     | Displays all connections and listening ports.   |
| -b     | Displays the executable involved in creating each connection or listening port. |
| -e     | Displays Ethernet statistics. |
| -f     | Displays Fully Qualified Domain Names (FQDN) for foreign addresses. |
| -n     | Displays addresses and port numbers in numerical form. |
| -o     | Displays the owning process ID associated with each connection. |
| -p     | Shows connections for the specified protocol. |
| -r     | Displays the contents of the routing table. |
| -s     | Displays per-protocol statistics. |
| -t     | Displays the current connection offload state. |

## Parameters:
| Parameter | Description                             |
|-----------|-----------------------------------------|
| protocol  | Specifies the protocol to display. Can be TCP, UDP, TCPv6, or UDPv6. |
| interval  | Redisplays the output every "interval" seconds.|

:::caution
Exercise caution while using the netstat command as it provides sensitive information about network connections and services. Make sure you have the necessary permissions before using this command to prevent any unauthorized access or modification.
:::
## NETSTAT Command Samples:
### Display All Active Network Connections
```cmd
netstat
```
Displays all active network connections and listening ports.

### Display Active TCP Connections
```cmd
netstat -a
```
Displays all active TCP connections and listening ports.

### Display Active UDP Connections
```cmd
netstat -u
```
Displays all active UDP connections.

### Display PID and Process Name for Active Connections
```cmd
netstat -b
```
Displays the PID and process name for each active connection.

### Display Statistics for Network Interfaces
```cmd
netstat -e
```
Displays statistics for network interfaces, including packets and bytes sent and received.

### Display Active Connections in Numerical Form
```cmd
netstat -n
```
Displays active connections in numerical form (IP addresses and port numbers).

### Display Routing Table
```cmd
netstat -r
```
Displays the routing table, including destination, gateway, and interface information.
:::tip
It is recommended to run the netstat command with administrative privileges (Run as Administrator) for full access to all network-related information.
:::

## NETSTAT FAQ:
### How do I use netstat in Windows?
To use the netstat command in Windows, execute the following command:
```cmd
netstat --option <value>
```

### What is the purpose of netstat in Windows?
The netstat command in Windows is used to display active TCP connections, listening ports, and related network statistics.

### How can I display all active TCP connections using netstat?
To display all active TCP connections, run the following command:
```cmd
netstat -a
```

### How do I list all listening ports with netstat in Windows?
To list all listening ports, use the following netstat command:
```cmd
netstat -an
```

### How can I find the PID (Process ID) associated with a specific network connection using netstat?
To find the PID associated with a network connection, you can execute:
```cmd
netstat -ano
```

### How can I filter the netstat output to only display specific protocol connections, such as TCP or UDP?
To filter the netstat output by protocol (TCP or UDP), you can use:
```cmd
netstat -t  //for TCP connections
netstat -u  //for UDP connections
```
## Applications of the NETSTAT Command

- Displaying active network connections
- Listing listening ports
- Showing network statistics
- Displaying the routing table