---
title: ping6 command in Linux
description: Learn how to use the ping6 command in Linux to test the connectivity of IPv6 addresses.
---

The Linux ping6 command is used to test the connectivity between devices using IPv6 addresses. It sends ICMPv6 Echo Request packets to a specified destination and waits for a response. This command is helpful in troubleshooting network connectivity issues specifically related to IPv6 addresses. By analyzing the ping6 output, users can determine if a device is reachable over an IPv6 network and measure the round-trip time for packets to reach their destination. It is an essential tool for network administrators and users working with IPv6 protocols.

## ping6 Syntax:
```bash
ping6 [option] [target]
```

## Linux ping6 Options:
| Option | Description                           |
|--------|---------------------------------------|
| -c     | Stop after sending count number of packets |
| -f     | Flood ping (send packets as fast as possible) |
| -n     | No hostname lookup                       |
| -q     | Quiet output, only display summary       |
| -t     | Set the Time to Live (TTL) value          |
| -v     | Verbose output                          |

## ping6 Parameters:
| Parameter | Description                  |
|-----------|------------------------------|
| target    | Hostname or IP address to ping|

:::caution
Avoid overloading a network or system with excessive pings using the flood option (-f) as it may lead to network congestion or system instability.
:::
## How to use ping6 command:
### Basic Ping6 Command
```bash
ping6 example.com
```
Sends ICMPv6 echo requests to “example.com” to test network connectivity.

### Ping6 with Count Limit
```bash
ping6 -c 5 example.com
```
Sends ICMPv6 echo requests to “example.com” with a limit of 5 packets.

### Ping6 with Interval
```bash
ping6 -i 2 example.com
```
Sends ICMPv6 echo requests to “example.com” with a 2-second interval between packets.

### Ping6 with Specific Source Interface
```bash
ping6 -I eth0 example.com
```
Sends ICMPv6 echo requests to “example.com” using the “eth0” network interface.

### Ping6 with IPv6 Address
```bash
ping6 2001:db8::1
```
Pings the specific IPv6 address “2001:db8::1” to test network connectivity.

### Ping6 with Flood Mode
```bash
ping6 -f example.com
```
Pings “example.com” using flood mode to send packets as fast as possible.

### Ping6 with DNS Lookup
```bash
ping6 -n example.com
```
Sends ICMPv6 echo requests to “example.com” without performing DNS resolution.

### Verbose Ping6 Output
```bash
ping6 -v example.com
```
Prints verbose output while pinging “example.com”.
:::tip
When using the ping6 command, make sure to replace `<value>` with the appropriate options or arguments needed for your specific use case. Additionally, ensure that you have the necessary permissions to run the ping6 command on your system.
:::

### How do I use ping6 in bash?
To use the ping6 command in Linux, execute the following command:
```bash
ping6
```

### How do I specify the number of packets to send with ping6?
To specify the number of packets to send with ping6, use the `-c` option followed by the desired packet count. For example:
```bash
ping6 -c 5 example.com
```

### How do I set the interval between ping6 packets?
To set the interval between ping6 packets, use the `-i` option followed by the time interval in seconds. For example:
```bash
ping6 -i 1 example.com
```

### How do I increase the timeout for ping6 responses?
To increase the timeout for ping6 responses, use the `-W` option followed by the timeout value in seconds. For example:
```bash
ping6 -W 5 example.com
```

### How do I perform continuous pinging with ping6?
To perform continuous pinging with ping6, use the `-c` option with a large number or no specified count. For example:
```bash
ping6 -c example.com
```

### How do I limit the number of hops in ping6?
To limit the number of hops in ping6, use the `-m` option followed by the maximum hop count. For example:
```bash
ping6 -m 10 example.com
```

### How do I increase the size of the ICMPv6 echo request packets in ping6?
To increase the size of the ICMPv6 echo request packets in ping6, use the `-s` option followed by the desired packet size in bytes. For example:
```bash
ping6 -s 100 example.com
```

### How do I resolve IP addresses to hostnames in ping6?
To resolve IP addresses to hostnames in ping6, use the `-n` option to disable hostname resolution. For example:
```bash
ping6 -n example.com
```

### How do I enable verbose output with ping6?
To enable verbose output with ping6, use the `-v` option. For example:
```bash
ping6 -v example.com
```

## Applications of the ping6 command

- Troubleshooting network connectivity issues
- Checking the reachability of a remote host over IPv6
- Verifying network configuration for IPv6 addresses
- Testing the round-trip time between a source and destination over IPv6
- Diagnosing packet loss in an IPv6 network
- Checking the status of IPv6-capable devices on the network