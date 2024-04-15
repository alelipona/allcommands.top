---
title: traceroute6 MacOS command
description: Perform network diagnostics with the traceroute6 command on MacOS. Find the path packets take to a destination using IPv6.
---

The MacOS traceroute6 command is a network diagnostic tool used to trace the path that packets take to reach a destination using IPv6. It helps identify network issues such as latency and packet loss by sending packets with varying Time-to-Live (TTL) values and analyzing the responses from intermediary routers. By mapping out the network hops, users can pinpoint where connectivity problems may arise and troubleshoot accordingly. This command is particularly useful for network administrators and individuals looking to optimize their network performance.

## traceroute6 Syntax:
```bash
traceroute6 [options] destination
```
## traceroute6 Options:
| Option          | Description                              |
|-----------------|------------------------------------------|
| -I              | Use ICMPv6 ECHO requests for tracing     |
| -m maxttl       | Set the maximum number of hops           |
| -s sourceroute  | Use the strict source routing option      |
| -q nqueries     | Set the number of probe packets per hop  |
| -w waittime     | Set the time to wait for a response      |
| -p port         | Set the destination port number          |
| -F             | Do not fragment the probes               |
| -A             | Print AS number with IP address          |
| -n             | Do not try to map IP addresses to hostnames|


:::caution
Use caution when running the traceroute6 command as it sends packets to the destination address which could potentially be seen as suspicious activity. Make sure you have permissions to trace the route to the specified destination.
:::

## Parameters:
| Parameter   | Description                           |
|-------------|---------------------------------------|
| destination | The destination address to trace the route to |
## traceroute6 Command Usage Examples:
### Trace Route to a Domain Name
```bash
traceroute6 google.com
```
Traces the route to the domain name "google.com" using IPv6.

### Trace Route to an IPv6 Address
```bash
traceroute6 2607:f8b0:4006:801::200e
```
Traces the route to the IPv6 address "2607:f8b0:4006:801::200e" to identify network hops.

### Set Maximum Hops for Trace Route
```bash
traceroute6 -m 15 twitter.com
```
Defines a maximum of 15 hops when tracing the route to the domain name "twitter.com".

### Verbose Output for Detail Information
```bash
traceroute6 -v -n facebook.com
```
Displays a verbose output with detailed information while tracing the route to the domain name "facebook.com".

### Specify a Source Address
```bash
traceroute6 -s 2606:4700::6812:a346 youtube.com
```
Specifies the source address "2606:4700::6812:a346" while tracing the route to the domain name "youtube.com".
:::tip
When using the traceroute6 command in MacOS, remember to specify the destination by providing the domain name or IP address. Additionally, you can include various options to customize the output according to your needs.
:::

### How do I use traceroute6 in MacOS?
To use the traceroute6 command in bash, execute the following command:
```bash
traceroute6 example.com
```

### What are some common options for the traceroute6 command in MacOS?
Some common options for the traceroute6 command in MacOS include:
```bash
traceroute6 -I example.com
```

### How can I set the maximum number of hops in traceroute6 on MacOS?
To set the maximum number of hops in traceroute6 on MacOS, you can use the following command:
```bash
traceroute6 -m 30 example.com
```

### How do I display the AS (Autonomous System) numbers in traceroute6 on MacOS?
You can display the AS (Autonomous System) numbers in traceroute6 on MacOS using the following command:
```bash
traceroute6 -A example.com
```

### Can I specify the interface to use with the traceroute6 command in MacOS?
Yes, you can specify the interface to use with the traceroute6 command in MacOS. Here is an example command:
```bash
traceroute6 -I eth0 example.com
```

### How do I resolve and display IP addresses in traceroute6 on MacOS?
To resolve and display IP addresses in traceroute6 on MacOS, use the following command:
```bash
traceroute6 -n example.com
```

### Is it possible to set the timeout for each probe in traceroute6 on MacOS?
Yes, it is possible to set the timeout for each probe in traceroute6 on MacOS. Here is an example command:
```bash
traceroute6 -w 2 example.com
```

### How can I perform a reverse DNS lookup in traceroute6 on MacOS?
To perform a reverse DNS lookup in traceroute6 on MacOS, you can use the following command:
```bash
traceroute6 -N example.com
```
## Applications of the traceroute6 command

- Troubleshooting network connectivity issues
- Identifying network bottlenecks
- Mapping the route packets take across a network
- Diagnosing latency issues
- Analyzing network paths and performance