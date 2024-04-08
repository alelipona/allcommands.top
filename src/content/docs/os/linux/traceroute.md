---
title: What is traceroute Linux command?
description: Find out how to use the traceroute command in Linux to trace the path that packets take to reach a destination.
---

The traceroute command in Linux allows users to trace the route that packets take to reach a specified destination, providing valuable insight into network connectivity and potential issues. By showing each hop along the path to the destination, including any delays or failures, traceroute helps pinpoint connection problems and aids in troubleshooting network performance issues.

## traceroute Syntax:
```bash
traceroute [options] host
```

## traceroute Options:
| Option | Description |
|--------|-------------|
| -n     | Do not resolve hostnames |
| -m max_hops | Set the maximum number of hops |
| -f first_ttl | Set the initial time-to-live value |
| -q nqueries | Set the number of queries to send per hop |
| -p port | Set the destination port number |
| -t tos | Set the Type of Service field in the IP header |
| -w waittime | Set the number of seconds to wait for a response |
| -I | Use ICMP ECHO for tracerouting |
| -U | Use UDP to tunnel the traceroute |

## Parameters:
| Parameter | Description |
|-----------|-------------|
| host      | The destination host to trace the route to |
## traceroute Command Usage Examples:
### Traceroute to a Domain Name
```bash
traceroute google.com
```
Traces the route that packets take to reach the domain name "google.com".

### Traceroute with Maximum Hops
```bash
traceroute -m 15 yahoo.com
```
Limits the number of hops to 15 when tracing the route to the domain name "yahoo.com".

### Traceroute Using IPv6
```bash
traceroute -6 facebook.com
```
Performs a traceroute using IPv6 to trace the route to the domain name "facebook.com".

### Traceroute with No DNS Lookup
```bash
traceroute -n reddit.com
```
Initiates a traceroute without performing DNS lookup for the domain name "reddit.com".

### Traceroute with Packet Size Modification
```bash
traceroute -q 5 amazon.com
```
Sets the query packets per hop to 5 when tracing the route to the domain name "amazon.com".
:::tip
When using the traceroute command in Linux, it is important to remember that the utility sends a sequence of User Datagram Protocol (UDP) packets by default. However, you can also specify to use Internet Control Message Protocol (ICMP) echo requests or Transmission Control Protocol (TCP) SYN packets for the traceroute operation.
:::

### How do I use traceroute in Linux?
To use the traceroute command in bash, execute the following command:
```bash
traceroute www.example.com
```

### What is the purpose of traceroute in Linux?
Traceroute is used to trace the route that packets take to reach a destination host on an IP network.

### How can I specify the number of hops for the traceroute command?
You can specify the maximum number of hops for the traceroute command using the `-m` flag followed by the maximum number of hops.
```bash
traceroute -m 20 www.example.com
```

### How can I make traceroute to resolve IPs to hostnames?
To make traceroute resolve IP addresses to hostnames, use the `-n` flag to disable hostname resolution.
```bash
traceroute -n www.example.com
```

### Can I use traceroute with IPv6 addresses?
Yes, you can use traceroute with IPv6 addresses by specifying the `-6` option in the command.
```bash
traceroute -6 www.example.com
```

### How do I perform a traceroute using TCP packets instead of UDP in Linux?
To perform a traceroute using TCP packets instead of UDP in Linux, use the `-T` flag in the traceroute command.
```bash
traceroute -T www.example.com
```

### How can I increase the timeout for each probe in the traceroute command?
You can increase the timeout for each probe in the traceroute command using the `-w` flag followed by the timeout value in milliseconds.
```bash
traceroute -w 500 www.example.com
```

## Applications of the traceroute command

- Identifying the route taken by packets to reach a destination
- Diagnosing network connectivity issues
- Troubleshooting slow network connections
- Analyzing network latency and performance
- Mapping out networks and understanding their structure
- Identifying potential bottlenecks or points of failure in a network