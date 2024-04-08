---
title: wireshark Linux command
description: Wireshark is a powerful command-line tool on Linux for network analysis, capturing, and protocol decoding. It allows users to inspect network traffic and troubleshoot issues efficiently.
---

Wireshark is a versatile command-line tool on Linux used for network analysis, capturing, and protocol decoding. It provides a comprehensive platform for monitoring and troubleshooting network traffic, allowing users to delve deep into packet inspection and analysis. With its robust set of features, Wireshark enables users to identify and resolve network issues effectively, making it an essential tool for network administrators and security professionals.

## wireshark Syntax:
```bash
wireshark [options] [parameters]
```

## Options:
| Option          | Description                              |
|-----------------|------------------------------------------|
| -k              | Start Wireshark without capturing packets|

## Parameters:
| Parameter       | Description                              |
|-----------------|------------------------------------------|
| file            | Open a specific capture file             |
| interface       | Start capturing on a specific interface   |

:::caution
Use Wireshark with caution as it involves capturing and analyzing network traffic which may involve sensitive information. Make sure you have the necessary permissions before using Wireshark.
:::
## wireshark bash Examples:
### Capture Packets on a Specific Interface
```bash
wireshark -i eth0
```
Captures packets on the interface "eth0".

### Display Captured Packets from a File
```bash
wireshark -r capture.pcap
```
Displays packets captured in the file "capture.pcap".

### Capture Packets Using a Specific Filter
```bash
wireshark -i wlan0 icmp
```
Captures packets on interface "wlan0" filtered by ICMP protocol.

### Save Captured Packets to a File
```bash
wireshark -i eth0 -w capture.pcap
```
Saves captured packets from interface "eth0" to a file named "capture.pcap".

### Start Wireshark with Root Privileges
```bash
sudo wireshark
```
Starts Wireshark with root privileges to capture packets on all interfaces.

### View Conversations in Wireshark
```bash
wireshark -r capture.pcap -z conv,tcp
```
Displays TCP conversations from the captured file "capture.pcap".
:::tip
When using the wireshark command in Linux, make sure to have the necessary permissions to capture network traffic. Typically, this requires running the command as root or with sudo privileges. Additionally, refer to the wireshark documentation for more advanced options and features.
:::

### How do I use wireshark in Linux?
To use the wireshark command in Linux, execute the following command:
```bash
wireshark
```

### How can I capture packets with wireshark in Linux?
To capture packets with wireshark in Linux, use the following command:
```bash
sudo wireshark -i <interface_name>
```

### How do I display captured packets in wireshark on Linux?
To display captured packets in wireshark on Linux, run the following command:
```bash
wireshark -r <file_name>
```

### How can I apply display filters in wireshark on Linux?
To apply display filters in wireshark on Linux, use the following command:
```bash
wireshark -k -f <display_filter>
```

### How do I save captured packets as a file in wireshark on Linux?
To save captured packets as a file in wireshark on Linux, execute the following command:
```bash
wireshark -i <interface_name> -w <output_file>
```

### How can I capture packets in promiscuous mode with wireshark on Linux?
To capture packets in promiscuous mode with wireshark on Linux, run the following command:
```bash
sudo wireshark -i <interface_name> -P
```

### How do I capture packets for a specific duration with wireshark on Linux?
To capture packets for a specific duration with wireshark on Linux, use the following command:
```bash
sudo timeout <duration> wireshark -i <interface_name>
```

### How can I view statistics of captured packets in wireshark on Linux?
To view statistics of captured packets in wireshark on Linux, execute the following command:
```bash
wireshark -r <file_name> -z io,stat,1,"<display_filter>"
```
## Applications of the wireshark command

- Capturing and analyzing network traffic
- Troubleshooting network issues
- Monitoring network activity
- Analyzing network protocols
- Identifying network security vulnerabilities