---
title: tcpick command in Linux
description: Analyze network traffic with the tcpick command in Linux. Learn how to capture and filter packets for debugging and security analysis.
---

The tcpick command in Linux is a packet sniffer that allows users to capture and analyze network traffic. It can be used to intercept packets flowing through a network interface, helping with debugging and security analysis. Tcpick provides various options to filter captured packets based on protocols, ports, and IP addresses. It can display packet information such as source and destination IP addresses, ports, and packet payloads. With tcpick, users can monitor live network traffic in real-time and save captured packets to a file for later analysis. This powerful tool is commonly used by network administrators and security professionals for troubleshooting network issues and detecting suspicious activity.
## tcpick Syntax:
```bash
tcpick [options] [filter]
```
## Linux tcpick Options:
| Option           | Description                                         |
|------------------|-----------------------------------------------------|
| -h               | Display help message.                               |
| -V               | Output version information.                         |
| -i <interface>   | Specify the network interface to use.               |
| -p <port>        | Specify the port to filter on.                      |
| -w <file>        | Write the output to a file.                         |
| -F <filter>      | Specify a filter expression.                        |
| -T <type>        | Specify the traffic type (ascii, hex, etc).         |
| -r <file>        | Read from a previously saved file.                  |
| -c               | Colorize the output.                                |
| -s <number>      | Set the size of the capture buffer.                 |
| -A               | Enable ASCII presentation of data.                  |
| -B               | Enable multiple sessions displaying in ascii mode.  |
| -D               | Display packet time instead of relative time.      |

## tcpick Parameters:
| Parameter | Description                                     |
|-----------|-------------------------------------------------|
| filter    | Filter to apply when capturing network traffic. | 

:::caution
Exercise caution when using tcpick to capture network traffic, as it may expose sensitive information. Make sure you have the necessary permissions to monitor network traffic before using this tool.
:::
## How to use tcpick command:
 	
### Capture packets from a specific network interface
```bash
sudo tcpick -i eth0
```
Capture packets from network interface eth0.

### Display TCP packets only
```bash
tcpick -T
```
Display only TCP packets from the captured data.

### Save captured packets to a file
```bash
tcpick -C -o output.pcap
```
Save the captured packets to a file named output.pcap.

### Filter packets by source IP address
```bash
sudo tcpick -i eth0 src host 192.168.1.1
```
Capture packets from source IP address 192.168.1.1 from network interface eth0.

### Display only HTTP traffic
```bash
tcpick -P -yP -i eth0 port 80
```
Display only HTTP traffic from packets captured on network interface eth0.

### Monitor traffic on a specific port
```bash
tcpick -i eth0 port 443
```
Monitor network traffic on port 443 on network interface eth0.

### Capture and display packets in ASCII format
```bash
tcpick -C -C
```
Capture and display packets in ASCII format.

### Extract URLs from captured packets
```bash
tcpick -C -yP -T -i eth0 port 80 or port 443
```
Extract URLs from captured HTTP and HTTPS packets on network interface eth0.
:::tip
Make sure to run tcpick commands with the appropriate permissions, especially when performing packet capture operations. You may need to run tcpick with sudo or as the root user to access network interfaces.
:::

---

### How do I use tcpick in Linux?
To use the tcpick command in Linux, execute the following command:
```bash
tcpick --help
```

### What are some common options used with tcpick?
Some common options used with tcpick include:
```bash
tcpick -i eth0 -C -t -y -w output.pcap
```

### How can I capture network traffic with tcpick?
To capture network traffic with tcpick, you can use the following command:
```bash
tcpick -i eth0
```

### How do I specify a specific port with tcpick?
To specify a specific port with tcpick, use the `-p` option followed by the port number. For example:
```bash
tcpick -i eth0 -p 80
```

### How can I use tcpick to display the payload of captured packets?
To display the payload of captured packets with tcpick, you can use the `-y` option. Here's an example:
```bash
tcpick -i eth0 -y
```

### How do I save captured packets to a file with tcpick?
To save captured packets to a file with tcpick, use the `-w` option followed by the output file name. For example:
```bash
tcpick -i eth0 -w output.pcap
```

### Can I filter captured packets by IP address with tcpick?
Yes, you can filter captured packets by IP address using the `-A` and `-B` options. Here's an example:
```bash
tcpick -i eth0 -A 192.168.1.100 -B 192.168.1.200
```

### How can I extract HTTP traffic from captured packets using tcpick?
To extract HTTP traffic from captured packets with tcpick, you can use the `-o` option. For example:
```bash
tcpick -i eth0 -o http
```

## Applications of the tcpick command

- Capture network traffic
- Display captured data in different formats
- Filter captured data
- Save captured data to a file
- Replay captured data
- Extract data from captured files