---
title: iftop Linux Command Guide
description: Detailed guide on using the iftop command in Linux to monitor network traffic in real-time. Learn how to view active connections, bandwidth usage, and more.
---

The iftop command in Linux is used to monitor network bandwidth usage in real-time. It displays a list of network connections and the amount of data flowing through them. With iftop, you can easily identify which hosts are using the most bandwidth, monitor specific interfaces, and view overall network activity. This command is particularly useful for system administrators and network engineers who need to troubleshoot network issues or optimize network performance.
## iftop Syntax:
```bash
iftop [options] [filter]
```
## Options:
| Option | Description                             |
|--------|-----------------------------------------|
| -h     | Display help screen                      |
| -i     | Set the network interface to monitor      |
| -B     | Start iftop in batch mode                |
| -n     | Do not resolve hostnames. Display IP addresses instead |
| -N     | Do not resolve port numbers              |
| -F     | Display data as flow rather than packets |
| -f     | Filter expression for packets to display |
| -B     | Display bandwidth in bytes              |
| -b     | Display bandwidth in bits               |
| -T     | Display TCP traffic only                |
| -U     | Display UDP traffic only                |
| -P     | Display only packets matching the filter expression |

## Parameters:
| Parameter | Description                              |
|-----------|------------------------------------------|
| filter    | Specify a filter expression for packets to display | 

:::caution
Exercise caution while using the iftop command as it provides real-time network traffic monitoring, which may expose sensitive information. Ensure proper authorization and privacy considerations are in place before running this command.
:::
## iftop Command Samples:
### Monitor Incoming and Outgoing Traffic
```bash
iftop
```
Starts iftop to monitor incoming and outgoing network traffic.

### Monitor a Specific Network Interface
```bash
iftop -i eth0
```
Starts iftop to monitor network traffic on a specific interface (in this case, "eth0").

### Display Specific Host Traffic
```bash
iftop -f "src host 192.168.1.1 or dst host 192.168.1.1"
```
Filters the iftop output to display traffic only to or from the specific host "192.168.1.1".

### Check Traffic Based on a Subnet
```bash
iftop -F 192.168.1.0/24
```
Restricts the iftop output to monitor the traffic of hosts within the subnet "192.168.1.0/24".

### Set a Specific Display Filter
```bash
iftop -f "portrange 22-80"
```
Applies a display filter to show traffic only on ports 22 to 80.

### Display Cumulative Totals
```bash
iftop -t -s 1
```
Displays cumulative totals instead of a continuously updating graph, refreshing every 1 second.

### Monitor IPv6 Traffic
```bash
iftop -6
```
Starts iftop to monitor IPv6 traffic in addition to IPv4 traffic.
:::tip
When using the iftop command in Linux, make sure to run it with appropriate permissions, as it requires root privileges to capture network traffic. You can use sudo before the iftop command to run it with the necessary permissions.
:::

## iftop FAQ:
### How do I use iftop in Linux?
To use the iftop command in Linux, execute the following command:
```bash
iftop
```

### How can I specify a network interface with iftop?
You can specify a network interface with iftop by using the -i flag followed by the interface name. For example:
```bash
iftop -i eth0
```

### How to display specific hosts with iftop?
To display specific hosts with iftop, you can use the -f flag followed by a filter expression. For example, to display traffic only to or from a specific IP address, use:
```bash
iftop -f "src host 192.168.1.100 or dst host 192.168.1.100"
```

### How to change the refresh interval in iftop?
You can change the refresh interval in iftop by using the -t flag followed by the number of seconds. For example, to set the refresh interval to 5 seconds, use:
```bash
iftop -t 5
```

### How to display port numbers with iftop?
To display port numbers along with IP addresses in iftop, use the -P flag. For example:
```bash
iftop -P
```

### How to resolve hostnames with iftop?
You can resolve hostnames with iftop by using the -n flag. This will prevent iftop from performing DNS lookups. For example:
```bash
iftop -n
```
## Applications of the iftop command

- Monitor network bandwidth usage
- Identify the source and destination of network traffic
- View real-time data on network connections
- Identify which applications are consuming the most bandwidth
- Troubleshoot network congestion issues