---
title: tracepath command in Linux
description: Learn how to use the tracepath command in Linux to trace the route packets take from your device to a destination host.
---

The tracepath command in Linux is used to trace the route that packets take from your device to a destination host. It sends packets with increasing Time-To-Live (TTL) values and reports the IP addresses of the routers along the path. This tool is useful for network troubleshooting and understanding the network topology between your device and a remote host.

## tracepath Syntax:
```bash
tracepath [options] destination
```

## Linux tracepath Options:
| Option    | Description                      |
|-----------|----------------------------------|
| -b        | Use a flow-based algorithm        |
| -j        | Do not display the path           |
| -l NUM    | Set the maximum number of hops   |
| -m NUM    | Set the initial time-to-live      |
| -n        | Do not resolve addresses to hostnames |
| -p PORT   | Use a specific destination port   |
| -q NUM    | Set the number of queries        |
| -s NUM    | Set the source address           |
| -4        | Use IPv4                         |
| -6        | Use IPv6                         |

## tracepath Parameters:
| Parameter  | Description                            |
|------------|----------------------------------------|
| destination| The destination to trace the path to    |

:::caution
Exercise caution when using the `tracepath` command as it sends packets to the destination with an increasing time-to-live (TTL) field, which can trigger security measures in some networks and lead to potential misuse. Only use it for diagnosing network issues on networks where you have permission to do so.
:::
## How to use tracepath command:
### Trace the route to a specific domain
```bash
tracepath google.com
```
Traces the route taken to reach the domain "google.com".

### Trace the route to a specific IP address
```bash
tracepath 8.8.8.8
```
Traces the route taken to reach the IP address "8.8.8.8".

### Verbose tracing to a domain
```bash
tracepath -n -b -v facebook.com
```
Performs a verbose tracepath to the domain "facebook.com" without resolving addresses or symbolic names.

### Set the maximum number of hops
```bash
tracepath -m 15 twitter.com
```
Traces the route to the domain "twitter.com" with a maximum of 15 hops.

### Trace with IPv6
```bash
tracepath -6 youtube.com
```
Traces the IPv6 route to the domain "youtube.com".

### Using UDP protocol to trace
```bash
tracepath -u github.com
```
Traces the route to the domain "github.com" using the UDP protocol.

### Display timing information for each hop
```bash
tracepath -T 80 linkedin.com
```
Traces the route to the domain "linkedin.com" and displays timing information for each hop on port 80.

### Trace in reverse direction
```bash
tracepath -S 192.168.1.1 192.168.2.1
```
Traces the route from "192.168.1.1" to "192.168.2.1" in the reverse direction.
:::tip
When using the tracepath command in Linux, make sure to have appropriate permissions to execute the command. Additionally, ensure that the necessary network connectivity is available to trace the route to the specified destination successfully.
:::

### How do I use tracepath in Linux?
To use the tracepath command in Linux, execute the following command:
```bash
tracepath google.com
```

### What is the purpose of tracepath?
The tracepath command is used in Linux to trace the network path to a specific destination, showing the route taken by packets and the number of hops along the way.
```bash
tracepath example.com
```

### How can I specify the maximum number of hops in tracepath?
You can limit the number of hops to be displayed in tracepath by using the '-m' option followed by the maximum number of hops.
```bash
tracepath -m 20 example.com
```

### How do I perform a DNS lookup before tracing the path with tracepath?
To perform a DNS lookup before tracing the path, use the '-n' option in the tracepath command.
```bash
tracepath -n example.com
```

### Can I trace both IPv4 and IPv6 routes with tracepath?
Yes, you can trace both IPv4 and IPv6 routes in tracepath. Use the '-4' option for IPv4 and the '-6' option for IPv6.
```bash
tracepath -4 example.com
```

### How can I display the AS (Autonomous System) numbers in the tracepath output?
To display the AS numbers in the tracepath output, use the '-l' option when executing the command.
```bash
tracepath -l example.com
```

### Is it possible to set a specific source address for tracepath?
Yes, you can set a specific source address for tracepath using the '-s' option followed by the desired source IP address.
```bash
tracepath -s 192.168.1.10 example.com
```

### How can I increase the verbosity of tracepath output?
To increase the verbosity level of tracepath output, use the '-v' option multiple times to display additional information.
```bash
tracepath -vv example.com
```

## Applications of the tracepath command

- Check the path taken by packets to a destination
- Troubleshoot network connectivity issues
- Determine the number of hops to a destination
- Identify network bottlenecks
- Analyze the routing path to a specific host
- Discover the round-trip time for packets to reach a destination