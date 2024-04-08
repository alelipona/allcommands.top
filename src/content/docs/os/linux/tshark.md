---
title: tshark Linux command
description: The Linux tshark command is a powerful tool for capturing and analyzing network packets. Learn how to use tshark to monitor network traffic.
---

Tshark is a command-line network protocol analyzer that lets you capture or display packet information. It is a versatile tool for network troubleshooting and security analysis. With tshark, you can capture live data from a network interface or read packets from a file. The tool offers various options for filtering and analyzing network traffic, making it easier to identify issues, troubleshoot network problems, and monitor network security. Tshark supports a wide range of protocols and provides detailed information about each packet captured, including source and destination addresses, protocol type, and payload data. It is a valuable tool for network administrators, security professionals, and anyone working with network data.

## tshark Syntax:
```bash
tshark [options] [capture_filter] [read_filter] [write_filter] ...
```

## Options:
| Option                  | Description                                     |
|-------------------------|-------------------------------------------------|
| -i \<interface>         | Set the interface to capture packets from       |
| -f \<capture_filter>    | Set the capture filter to restrict packet capture|
| -R \<read_filter>       | Set the display filter for reading packets     |
| -Y \<write_filter>      | Set the display filter for writing packets     |
| -w \<output_file>       | Write the captured packets to a file           |
| -r \<input_file>        | Read packets from a specified input file        |
| -V                      | Display packet details verbosely               |
| -e \<field>             | Print the value of the specified field         |
| -T fields               | Print selected fields                        |
| -z <statistics>         | Output various statistics about the capture file|

## Parameters:
| Parameter               | Description                                     |
|-------------------------|-------------------------------------------------|
| capture_filter          | Specifies the filter expression for capturing packets|
| read_filter             | Specifies the filter expression for reading packets|
| write_filter            | Specifies the filter expression for writing packets|

:::caution
Exercise caution when using the tshark command as it involves capturing and analyzing network packets, which may involve sensitive information. Make sure you have the necessary permissions to capture packets from the specified interface. Improper use may lead to breaching privacy or security.
:::

## tshark bash Examples:
### Capture and Display Live Packets
```bash
tshark
```
Captures and displays live packets in the terminal.

### Capture Packets to a File
```bash
tshark -i eth0 -w capture.pcap
```
Captures packets from interface "eth0" and saves them to a file named "capture.pcap".

### Filter Packets by Protocol
```bash
tshark -i eth0 -f "tcp port 80"
```
Captures packets on interface "eth0" and filters them to show only TCP packets on port 80.

### Display Packet Details
```bash
tshark -r capture.pcap
```
Reads a previously saved capture file "capture.pcap" and displays detailed information about the packets.

### Decode Packets in HEX and ASCII
```bash
tshark -r capture.pcap -x
```
Reads a capture file "capture.pcap" and decodes the packets in both HEX and ASCII formats.

### Display Packet Summary
```bash
tshark -r capture.pcap -q -z io,phs
```
Reads a capture file "capture.pcap" and displays a summary of packet sizes in a tabular format.
:::tip
When using the tshark command in Linux, make sure you have the necessary permissions to capture network traffic if running the command as a non-root user. It's recommended to familiarize yourself with various options and filters available in tshark to make the most out of network packet analysis.
:::

### How do I capture packets with tshark?
To capture packets using tshark in Linux, use the following command:
```bash
tshark -i <interface>
```

### How do I display packet details with tshark?
To display packet details using tshark in Linux, use the following command:
```bash
tshark -V
```

### How do I apply a display filter with tshark?
To apply a display filter using tshark in Linux, use the following command:
```bash
tshark -Y <filter>
```

### How do I save captured packets to a file with tshark?
To save captured packets to a file using tshark in Linux, use the following command:
```bash
tshark -i <interface> -w <output_file>
```

### How do I read saved packet files with tshark?
To read saved packet files using tshark in Linux, use the following command:
```bash
tshark -r <input_file>
```

### How do I capture a specific number of packets with tshark?
To capture a specific number of packets using tshark in Linux, use the following command:
```bash
tshark -c <count>
```

### How do I list available interfaces for packet capturing with tshark?
To list available interfaces for packet capturing using tshark in Linux, use the following command:
```bash
tshark -D
```

### How do I decode encrypted traffic with tshark?
To decode encrypted traffic using tshark in Linux, use the following command:
```bash
tshark -o <ssl.keys_list>:<ssl.keys_string>
```
## Applications of the tshark command

- Capture live network packets
- Analyze saved packet capture files
- Display detailed packet information
- Filter packets based on specific criteria
- Generate statistics from network traffic
- Decrypt encrypted packets
- Export packet data to other tools or formats