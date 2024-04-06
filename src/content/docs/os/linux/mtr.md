---
title: mtr command in Linux
description: Discover the power of the mtr command in Linux for comprehensive network diagnostics and troubleshooting. 
---

The mtr command in Linux combines the functionality of 'traceroute' and 'ping' to provide extensive network diagnostic information. It continuously polls network routers along the path to a destination, displaying data on packet loss, latency, and network congestion. This real-time data visualization helps in troubleshooting network issues and identifying potential bottlenecks. With mtr, users can pinpoint network problems more effectively and make informed decisions to optimize network performance.

## mtr Syntax:
```bash
mtr [options] [hostname or IP address]
```

## Linux mtr Options:
| Option | Description                   |
|--------|-------------------------------|
| -h     | Display the help screen       |
| -4     | Use IPv4 only                 |
| -6     | Use IPv6 only                 |
| -c     | Number of pings to send       |
| -i     | Interval between pings (seconds) |
| -w     | Destination port number       |
| -r     | Bypass the reverse DNS lookup |
| -s     | Set the maximum packet size   |
| -t     | Set the TCP port number       |

## mtr Parameters:
| Parameter     | Description                            |
|---------------|----------------------------------------|
| hostname/IP   | The hostname or IP address to trace    |

:::caution
Exercise caution when using the mtr command as it continuously sends packets to the target host, which may cause network congestion or trigger security measures in some cases.
:::
## How to use mtr command:
### Trace the Route to a Website
```bash
mtr google.com
```
Traces the route to the website "google.com" showing the network hops and latency.

### Trace the Route to a Specific IP Address
```bash
mtr 8.8.8.8
```
Traces the route to the specific IP address "8.8.8.8" displaying network statistics.

### Increase the Interval Between Packets
```bash
mtr -i 5 google.com
```
Traces the route to "google.com" with an interval of 5 seconds between packets.

### Specify the Number of Packets to Send
```bash
mtr -c 10 google.com
```
Traces the route to "google.com" sending 10 packets before terminating.

### Print DNS Information in Output
```bash
mtr -n -r google.com
```
Traces the route to "google.com" without DNS resolution but showing IP addresses.

### Display Packet Loss Percentage
```bash
mtr -r --report google.com
```
Traces the route to "google.com" showing the percentage of packet loss.

### Trace the Route with Specific TCP/UDP Port
```bash
mtr --port 80 google.com
```
Traces the route to "google.com" using port 80 for both TCP and UDP.

### Save Output to a File
```bash
mtr google.com > trace_output.txt
```
Traces the route to "google.com" and saves the output to a file named "trace_output.txt".
:::tip
When using the mtr command in Linux, you can customize the output and behavior by exploring different options available with the command. Be sure to check the man pages (`man mtr`) for a comprehensive list of options and their descriptions.
:::

### How do I use mtr in Linux?
To use the mtr command in Linux, execute the following command:
```bash
mtr --report google.com
```

### How do I specify the number of packets to send with mtr in Linux?
To specify the number of packets to send with mtr in Linux, use the `-c` option followed by the number of packets. For example:
```bash
mtr -c 10 google.com
```

### How can I set an interval between packets in mtr in Linux?
To set an interval between packets in mtr in Linux, use the `-i` option followed by the interval time in seconds. Here is an example:
```bash
mtr -i 1 google.com
```

### How do I resolve hostnames to IP addresses in mtr in Linux?
To resolve hostnames to IP addresses in mtr in Linux, use the `-n` option. This option prevents hostname resolution. For example:
```bash
mtr -n google.com
```

### How can I specify a custom port in mtr in Linux?
To specify a custom port in mtr in Linux, use the `-P` option followed by the port number. Here's an example:
```bash
mtr -P 443 google.com
```

### How do I display AS numbers in mtr in Linux?
To display AS (Autonomous System) numbers in mtr output in Linux, use the `-z` option. This will show the AS path to the destination. For example:
```bash
mtr -z google.com
```

### How can I change the display mode of mtr in Linux?
To change the display mode of mtr in Linux, use the `-t` option followed by the desired mode. You can choose from 'normal', 'raw', or 'json'. Here's an example:
```bash
mtr -t raw google.com
```

### How do I set a specific timeout for mtr in Linux?
To set a specific timeout for mtr in Linux, use the `-w` option followed by the timeout value in seconds. For example:
```bash
mtr -w 2 google.com
```

### How can I specify the network interface to use with mtr in Linux?
To specify the network interface to use with mtr in Linux, use the `-i` option followed by the interface name. Here's an example:
```bash
mtr -i eth0 google.com
```

## Applications of the mtr command

- Network diagnostics
- Analyzing network latency
- Identifying packet loss
- Traceroute functionality with continuous monitoring
- Identifying network congestion
- Troubleshooting network issues
- Monitoring network performance