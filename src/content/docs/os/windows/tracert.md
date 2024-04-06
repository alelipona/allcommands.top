---
title: TRACERT command in Windows
description: Troubleshoot network connectivity issues with the Windows tracert command. Find the exact path packets take and pinpoint any delays or issues.
---

The TRACERT command in Windows is a powerful tool used to troubleshoot network connectivity issues. By tracing the route that packets take from your computer to a specified destination, you can identify each hop along the way and measure the latency between them. This can help you pinpoint any delays or issues that may be affecting your network connection. TRACERT is especially useful for diagnosing slow connections, packet loss, and other network problems. By analyzing the information provided by the TRACERT command, you can gain valuable insights into the performance of your network and take steps to optimize it for better connectivity.
## TRACERT Syntax:
```cmd
tracert [-d] [-h maximum_hops] [-j host-list] [-w timeout] target_name
```

## Windows TRACERT Options:
| Option       | Description                                     |
|--------------|-------------------------------------------------|
| -d           | Do not resolve addresses to hostnames           |
| -h maximum_hops | Maximum number of hops to search for target     |
| -j host-list  | Loose source route along host-list              |
| -w timeout    | Wait timeout for each reply in milliseconds      |

## TRACERT Parameters:
| Parameter    | Description                                     |
|--------------|-------------------------------------------------|
| target_name  | IP address or host name of the target to trace  |

:::caution
Using the TRACERT command can reveal sensitive information about the network path and should be used responsibly. Unauthorized use may be a violation of privacy and network security policies.
:::

## How to use TRACERT command:
### Trace Route to a Domain Name
```cmd
tracert www.example.com
```
Traces the route to the domain name "www.example.com" to determine network delays.

### Trace Route with Maximum Hops
```cmd
tracert -h 15 www.google.com
```
Traces the route to "www.google.com" with a maximum of 15 hops.

### Trace Route and Resolve IP Addresses to Hostnames
```cmd
tracert -d www.microsoft.com
```
Traces the route to "www.microsoft.com" without resolving IP addresses to hostnames.

### Trace Route and Display TIMESTAMP Information
```cmd
tracert -j 5 -w 500 www.apple.com
```
Traces the route to "www.apple.com" with 5 loose source routes and a timeout of 500 milliseconds for each reply.

### Trace Route and Bypass Intermediate Hops
```cmd
tracert -R www.amazon.com
```
Traces the route to "www.amazon.com" and bypasses intermediate hops using reverse trace.

### Trace Route and Set Time-To-Live (TTL)
```cmd
tracert -i 3 www.microsoft.com
```
Traces the route to "www.microsoft.com" and sets the Time-To-Live (TTL) value to 3.

### Trace Route and Control Timeouts
```cmd
tracert -w 100 www.yahoo.com
```
Traces the route to "www.yahoo.com" and sets the timeout in milliseconds to 100 for each reply.

### Trace Route and Use IPv4 Protocol
```cmd
tracert -4 www.cisco.com
```
Traces the route to "www.cisco.com" using only the IPv4 protocol.
:::tip
When using the tracert command in Windows CMD, make sure to have an active internet connection to trace the route to a specified destination successfully.
:::

### How do I use tracert in Windows?
To use the tracert command in Windows, execute the following command:
```cmd
tracert --option <value>
```

### How can I specify the maximum number of hops for tracert in CMD?
To specify the maximum number of hops for the tracert command in CMD, use the following command:
```cmd
tracert -h <max_hops> <destination>
```

### How do I get the AS Path information using tracert in Windows?
To get the AS Path information using the tracert command in Windows, execute the following command:
```cmd
tracert -A <destination>
```

### What is the command to resolve IP addresses to hostnames in tracert on CMD?
To resolve IP addresses to hostnames in tracert on CMD, use the following command:
```cmd
tracert -d <destination>
```

### How can I set the timeout value for tracert in Windows?
To set the timeout value for the tracert command in Windows, use the following command:
```cmd
tracert -w <timeout> <destination>
```

### How do I display the timestamp for each hop using tracert in CMD?
To display the timestamp for each hop using the tracert command in CMD, execute the following command:
```cmd
tracert -t <destination>
```

### How can I perform a reverse DNS lookup with tracert in Windows?
To perform a reverse DNS lookup with the tracert command in Windows, use the following command:
```cmd
tracert -R <destination>
```

### How do I save the tracert results to a file in CMD?
To save the tracert results to a file in CMD, execute the following command:
```cmd
tracert <destination> > C:\path\to\output.txt
```

### What is the command to bypass the routing table for tracert in Windows?
To bypass the routing table for the tracert command in Windows, use the following command:
```cmd
tracert -b <destination>
```

## Applications of the TRACERT Command

- Troubleshooting network connectivity issues
- Identifying the route that data packets take to reach a destination
- Diagnosing latency or packet loss in network connections
- Determining the number of hops between your computer and the destination
- Analyzing network performance and identifying bottlenecks