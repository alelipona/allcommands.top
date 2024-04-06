---
title: nping Linux Command Guide
description: Learn how to use the Linux nping command for network packet generation, manipulation, and analysis. 
---

Nping is a powerful tool for network packet generation, manipulation, and analysis in Linux. It allows users to send custom packets and perform various networking tasks such as host discovery, service scanning, and network inventory. Nping supports multiple protocols and options, making it a versatile choice for network administrators and security professionals.
## nping Syntax:
```bash
nping [options] [target]
```
## Options:
| Option          | Description                                    |
|-----------------|------------------------------------------------|
| -6              | Use IPv6 mode                                  |
| -c <count>      | Number of packets to send                      |
| -p <port>       | Specify port number to use                     |
| -H <hostname>   | Specify a target hostname                       |
| -S <source>     | Specify source address                         |
| -T             | Enable IP Timestamp option                     |
| -v             | Increase verbosity level                       |
| -V             | Print version information                      |
| -h             | List available options and information         |

## Parameters:
| Parameter   | Description                                   |
|------------- |-----------------------------------------------|
| target       | The target host or IP address to ping         | 

:::caution
Exercise caution while using nping command as it sends network packets which could disrupt network operations if not used correctly.
:::
## nping Command Samples:

### Ping a Specific IP Address
```bash
nping 192.168.1.1
```
Pings the specific IP address "192.168.1.1" to test network connectivity.

### Perform a TCP SYN Ping
```bash
nping --tcp -p 80 192.168.1.1
```
Performs a TCP SYN ping to port 80 on the IP address "192.168.1.1".

### UDP Ping to a Specific Port
```bash
nping --udp -p 53 192.168.1.1
```
Sends a UDP ping to port 53 on the IP address "192.168.1.1".

### Continuous Ping with Interval
```bash
nping --icmp -c 10 -i 1 192.168.1.1
```
Sends 10 ICMP ping packets with an interval of 1 second to the IP address "192.168.1.1".

### Ping Sweep of a Subnet
```bash
nping --tcp 192.168.1.0/24
```
Performs a ping sweep on all IP addresses within the subnet "192.168.1.0/24".

### Ping using IPv6 Address
```bash
nping -6 2001:db8::1
```
Sends ping packets using IPv6 address "2001:db8::1".

### DNS Query with Ping
```bash
nping --dns 8.8.8.8
```
Sends a DNS query to the DNS server at IP address 8.8.8.8 using ping.
:::tip
When using the nping command in Linux, make sure to carefully read the command's options and parameters to ensure accurate and effective network packet analysis and manipulation.
:::

## nping FAQ:
### How do I use nping in Linux?
To use the nping command in Linux, execute the following command:
```bash
nping --tcp -p 80 example.com
```

### What is the purpose of nping in Linux?
The nping command in Linux is used for network packet generation, response analysis, and response time measurement.

### Can nping be used for port scanning in Linux?
Yes, nping can be utilized for port scanning in Linux by specifying the desired ports using the `-p` option.

### How can I perform a ping sweep using nping in Linux?
To conduct a ping sweep using nping in Linux, you can use the following command:
```bash
nping --icmp -sn 192.168.1.0/24
```

### Is it possible to specify the packet size with nping in Linux?
Yes, you can specify the packet size when using nping in Linux by adding the `--data` option followed by the desired size in bytes.

### How do I save the results of an nping scan to a file in Linux?
To save the results of an nping scan to a file in Linux, you can use output redirection as shown below:
```bash
nping 192.168.1.1 > scan_results.txt
```

## Applications of the nping command

- Network discovery
- Host discovery
- Port scanning
- Packet generation and manipulation
- Firewalking
- OS fingerprinting
- Service version detection
- Firewall testing
- Scriptable network testing with Lua