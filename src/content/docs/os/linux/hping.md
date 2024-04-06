---
title: hping command in Linux
description: Learn how to use the hping command in Linux for network troubleshooting, security testing, and packet crafting with our comprehensive guide.
---

The hping command in Linux is a powerful tool for network administrators and security professionals to analyze networks, perform security testing, and craft customized packets. It allows users to send various types of packets using different protocols, making it a versatile option for troubleshooting and testing network configurations. With hping, users can perform tasks such as host discovery, advanced port scanning, firewall testing, and packet manipulation. By utilizing its flexible syntax and extensive features, users can gain valuable insights into network behavior and security vulnerabilities.
## hping Syntax:
```bash
hping [options] host
```

## Linux hping Options:
| Option                 | Description                           |
|------------------------|---------------------------------------|
| -c <count>             | Stop after sending <count> packets    |
| -p <port>              | Destination port                      |
| -S                     | Stealth scan mode                     |
| -A                     | ACK scan mode                         |
| -V                     | Print version information             |
| -h                     | Print help information                |

## hping Parameters:
| Parameter  | Description                         |
|------------|-------------------------------------|
| host       | Destination host to ping            |

:::caution
Exercise caution when using the hping command as it can be used for malicious purposes like denial-of-service attacks or network scanning. Make sure you have proper authorization before using it.
:::
## How to use hping command:

### Send a UDP packet to a specific port
```bash
hping3 -2 -c 1 -p 80 <target_ip>
```
Sends a single UDP packet to port 80 on the specified target IP address.

### Perform a ping scan on a network range
```bash
hping3 -S -p 80 --scan 1-100 <network_range>
```
Scans ports 1 to 100 on the specified network range using TCP SYN packets.

### Send a SYN packet to a specific port
```bash
hping3 -S -p 22 <target_ip>
```
Sends a TCP SYN packet to port 22 (SSH) on the target IP address.

### Perform a traceroute-like action
```bash
hping3 -V -1 -traceroute <target_ip>
```
Performs a traceroute-like action using ICMP messages to the target IP address.

### Flood a target with TCP SYN packets
```bash
hping3 --flood -p 80 <target_ip>
```
Floods the specified target with TCP SYN packets on port 80.

### Send a custom TCP packet with specific TTL
```bash
hping3 -S -p 443 --ttl 100 <target_ip>
```
Sends a custom TCP packet with TTL set to 100 to port 443 on the target IP address.

### Perform a stealth port scan on a network range
```bash
hping3 -S --scan 1-10000 -p 80 <network_range>
```
Performs a stealth scan on ports 1 to 10000 on the specified network range using TCP SYN packets.

### Generate a decoy IP address in packets
```bash
hping3 -S -a <decoy_ip> <target_ip>
```
Sends packets to the target IP address with a decoy source IP address to obfuscate the real sender.
:::tip
When using the hping command in Linux, make sure to refer to the command's documentation or manual pages for detailed information on different options and their usage. Experimenting with different flags and values in a controlled environment can help you understand the capabilities of hping better.
:::

### How do I use hping in bash?
To use the hping command in Linux, execute the following command:
```bash
hping <target>
```

### What is the purpose of the hping command in Linux?
The hping command in Linux is primarily used for active network testing and manipulation, including firewall testing, advanced traceroute functionality, and network discovery.

### How can I perform a TCP SYN ping using hping in Linux?
To perform a TCP SYN ping using hping in Linux, you can use the following command:
```bash
hping -S <target>
```

### How do I specify a custom source IP address with hping in Linux?
You can specify a custom source IP address with hping in Linux by using the following command:
```bash
hping --spoof <source_ip> <target>
```

### Can hping be used for port scanning in Linux?
Yes, hping can be used for port scanning in Linux. To scan a range of ports using hping, you can use the following command:
```bash
hping -S -p <start_port>-<end_port> <target>
```

### How do I send custom packets with hping in Linux?
To send custom packets with hping in Linux, you can use the following command format as an example:
```bash
hping --icmp <custom_packet_data> <target>
```

### Is it possible to perform a traceroute using hping in Linux?
Yes, hping can be used to perform a traceroute in Linux. To do this, you can use the following command:
```bash
hping --traceroute <target>
```

### How do I set the Time to Live (TTL) value in hping for packet transmission in Linux?
To set the TTL value for packet transmission using hping in Linux, you can use the following command:
```bash
hping --ttl <ttl_value> <target>
```

### Can hping be used for firewall testing in Linux?
Yes, hping is commonly used for firewall testing in Linux. By crafting specific packets and sending them to the target, hping can help assess the effectiveness of firewall rules.

## Applications of the hping command

- Firewall testing
- Network scanning
- Packet crafting
- Network performance testing
- Path MTU discovery
- Remote operating system fingerprinting
- DoS attacks detection and prevention