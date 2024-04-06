---
title: PATHPING command in Windows
description: Troubleshoot network latency and packet loss with the Windows pathping command.
---

The Windows pathping command is a network diagnostic tool that combines the functionality of ping and traceroute. It provides detailed information on network latency and packet loss by sending packets to each router on the way to a destination. Pathping is useful for troubleshooting network connectivity issues and identifying problematic network segments.

## PATHPING Syntax:
```cmd
pathping [-n] [-h maximum_hops] [-g host-list] [-p period] [-q num_queries] [-w timeout] [-T] [-R] [-g host-list] [-w timeout] [-4] [-6] target_name
```

## Windows PATHPING Options:
| Option     | Description                              |
|------------|------------------------------------------|
| -n         | No DNS name resolution                   |
| -h         | Maximum number of hops to search for target_name |
| -g         | Loose source route along host-list       |
| -p         | Period between two consecutive pings (in milliseconds) |
| -q         | Number of queries per hop               |
| -w         | Timeout in milliseconds                 |
| -T         | Disable Pathping hop-by-hop display     |
| -R         | Test Reverse Route                       |
| -4         | Force using IPv4                        |
| -6         | Force using IPv6                        |

## PATHPING Parameters:
| Parameter   | Description                            |
|-------------|----------------------------------------|
| target_name | Destination to trace the route to      |

:::caution
Be cautious when using the pathping command as it sends a large number of packets and can affect network performance. It is recommended to use it with care, especially in production environments.
:::
## How to use PATHPING command:
### Pathping a Domain Name
```cmd
pathping www.google.com
```
Executes a pathping command on the domain name "www.google.com" to identify network connectivity issues.

### Pathping an IP Address
```cmd
pathping 8.8.8.8
```
Runs a pathping command on the specific IP address “8.8.8.8” to trace the route and detect network problems.

### Pathping with Specific Number of Hops
```cmd
pathping -h 10 www.microsoft.com
```
Utilizes pathping with a specified number of hops (10) for tracing the route to the domain "www.microsoft.com".

### Pathping with Time Limit
```cmd
pathping -n -p 150 www.yahoo.com
```
Executes a pathping command with a time limit of 150 milliseconds on the domain "www.yahoo.com", and displays numerical data without resolving addresses.

### Pathping with Packet Size
```cmd
pathping -n -g 1500 www.apple.com
```
Runs pathping specifying a packet size of 1500 bytes on the domain "www.apple.com" to identify potential network issues more effectively.

### Pathping with Specific Interface
```cmd
pathping -i 1 192.168.1.1
```
Utilizes pathping with a specific interface (index 1) to pathping the IP address "192.168.1.1" and view the detailed route.

### Pathping and Disruption Detection
```cmd
pathping -q 5 -w 100 192.168.0.1
```
Performs a pathping command with a query count of 5 and timeout threshold of 100 milliseconds on the IP address "192.168.0.1" to detect disruptions along the route.

### Pathping and Path Recording
```cmd
pathping -n -T www.amazon.com
```
Executes a pathping command with path recording enabled on the domain "www.amazon.com" to track and analyze network routes more profoundly.
:::tip
When using the pathping command in Windows, make sure to run it with the necessary privileges to avoid any restrictions. Additionally, ensure that the target host or IP address is reachable from your network to obtain accurate results.
:::

## PATHPING Command Troubleshooting Q&A:
{Questions}

### How do I use pathping in Windows?
To use the pathping command in Windows, execute the following command:
```cmd
pathping --option <value>
```

### What is the syntax for pathping in CMD?
The syntax for pathping in CMD is as follows:
```cmd
pathping <hostname/IP address>
```

### How can pathping help troubleshoot network issues?
Pathping helps to identify network latency and packet loss issues by providing detailed statistics along the path to a destination.
```cmd
pathping www.example.com
```

### Can I customize the number of packets and pings with pathping in Windows?
Yes, you can customize the number of packets and pings using the "-n" flag in pathping. 
```cmd
pathping -n 100 www.example.com
```

### Is it possible to increase the time interval between pings in pathping?
Yes, you can adjust the time interval between pings using the "-i" flag in pathping.
```cmd
pathping -i 2 www.example.com
```

### How do I stop a pathping operation in CMD?
To stop a pathping operation in CMD, press Ctrl + C on your keyboard to interrupt the process.

### Can pathping resolve hostnames to IP addresses?
Yes, pathping can resolve hostnames to IP addresses automatically when provided as the target.
```cmd
pathping example.com
```

### Is there a way to save pathping results to a file in Windows?
You can save pathping results to a file by using the redirection operator. For example:
```cmd
pathping www.example.com > pathping_results.txt
```

### How do I interpret the output of pathping in Windows CMD?
To interpret the output of pathping, focus on the "Loss%" column for packet loss percentages and the "Avg" column for average round-trip times to different hops.
```cmd
pathping www.example.com
```

## Applications of the PATHPING Command

- Diagnosing network latency issues
- Troubleshooting network packet loss
- Identifying network routing problems
- Analyzing the performance of each hop along a network path
- Assessing the health of a network connection