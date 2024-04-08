---
title: tcpflow Linux command
description: Learn how to use the tcpflow command in Linux to capture and analyze network traffic. 
---

The Linux tcpflow command allows users to capture and analyze network traffic in real-time. By intercepting packets and displaying the data in a human-readable format, tcpflow provides valuable insights into network communication. This tool can be especially useful for network administrators and security professionals looking to monitor and troubleshoot network connections. With tcpflow, users can examine the contents of TCP connections, including HTTP requests, file transfers, and more. It offers a straightforward way to track network activity and diagnose potential issues, making it a valuable asset in any Linux user's toolkit.

## tcpflow Syntax:
```bash
tcpflow [options] [expression]
```
## Options:
| Option | Description |
| ------ | ----------- |
| -a     | Print addresses and ports in alphanumeric rather than numeric format |
| -c     | Print "packet control info" |
| -e     | Print ethernet header info |
| -h     | Display help text |
| -i     | Specify an interface to capture traffic (only available with -r) |
| -l     | Only reassemble one side of the conversation |
| -n     | Suppress resolving IP addresses to hostnames |
| -q     | Be quiet (don't print summary lines) |
| -r     | Read packets from a pcap dump file |
| -t     | Timestamp packets and output in "raw" format |
| -x     | Print the data contents of each direction of the conversation in hex |
| -w     | Write output packets in writable pcap format |

## Parameters:
| Parameter  | Description                                          |
| ---------- | ---------------------------------------------------- |
| expression | Specify filter expression (e.g., host 192.168.1.1)    |

## tcpflow bash Examples:
### Capture all TCP traffic on a specific interface
```bash
tcpflow -i eth0
```
Captures all TCP traffic on the eth0 interface.


### Save captured packets to a file
```bash
tcpflow -i eth0 -o captured_packets.txt
```
Captures packets on the eth0 interface and saves them to a file named captured_packets.txt.


### Display verbose output of captured packets
```bash
tcpflow -v -i eth0
```
Captures TCP packets on the eth0 interface and displays verbose output.


### Capture packets using a specific port number
```bash
tcpflow -p port_number -i eth0
```
Captures TCP packets on a specific port number on the eth0 interface.


### Filter captured packets based on IP addresses
```bash
tcpflow dst host 192.168.1.1
```
Filters captured packets to display only those with a destination IP address of 192.168.1.1.


### Monitor live TCP traffic on a specific interface
```bash
tcpflow -c -i eth0
```
Monitors live TCP traffic on the eth0 interface continuously.
:::tip
When using the tcpflow command in Linux, make sure to have proper permissions to capture network traffic. Additionally, consider using other tools like Wireshark in conjunction with tcpflow for more detailed network analysis.
:::

## tcpflow Command Help Center:
### How do I use tcpflow in Linux?
To use the tcpflow command in Linux, execute the following command:
```bash
tcpflow --option <value>
```

### How can I filter the output of tcpflow to capture specific network traffic?
To filter the output of tcpflow and capture specific network traffic, you can use the following command:
```bash
tcpflow -c
```

### How can I save the output of tcpflow to a specific file?
To save the output of tcpflow to a specific file, you can use the following command:
```bash
tcpflow -o <output_file>
```

### How can I display verbose output while using tcpflow?
To display verbose output while using tcpflow, you can use the following command:
```bash
tcpflow -v
```

### How can I limit the number of packets captured by tcpflow?
To limit the number of packets captured by tcpflow, you can use the following command:
```bash
tcpflow -c <packet_limit>
```

### How can I capture and display both sides of the communication with tcpflow?
To capture and display both sides of the communication with tcpflow, you can use the following command:
```bash
tcpflow -a
```

### How can I capture and display only binary data with tcpflow?
To capture and display only binary data with tcpflow, you can use the following command:
```bash
tcpflow -B
```

### How can I display the version of tcpflow installed on my system?
To display the version of tcpflow installed on your system, you can use the following command:
```bash
tcpflow -V
```
## Applications of the tcpflow command

- Capturing and storing network traffic
- Monitoring network communications
- Analyzing network activities
- Troubleshooting network issues
- Examining packets for security purposes