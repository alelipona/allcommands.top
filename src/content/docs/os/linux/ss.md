---
title: ss Linux command
description: The Linux ss command is a powerful tool for displaying socket statistics. Learn how to use ss command for network troubleshooting and monitoring.
---

The Linux ss command is a versatile tool for displaying socket statistics. It can provide information on network connections, routing tables, and interface statistics. With ss command, users can analyze network performance, troubleshoot connection issues, and monitor network activity in real-time.

Unlike the netstat command, ss command offers more detailed and up-to-date information about sockets. It is faster and more efficient, making it a preferred choice for system administrators and network engineers. By utilizing various options and filters, users can customize the output to meet their specific requirements.

With ss command, users can examine TCP, UDP, and RAW sockets, as well as Unix domain sockets. They can view socket states, timer information, and process information associated with sockets. This comprehensive tool allows for in-depth analysis of network connections and helps identify potential network problems.

Overall, the ss command is a valuable utility for managing network connections and diagnosing network issues on Linux systems. Whether you are a beginner or an experienced user, mastering the ss command can enhance your network troubleshooting skills and improve your overall system performance.

## ss Syntax:
```bash
ss [options] [filters]
```
## Options:
| Option | Description |
|--------|-------------|
| -h, --help | Display help information |
| -t, --tcp | Show TCP sockets |
| -u, --udp | Show UDP sockets |
| -l, --listening | Display only listening sockets |
| -a, --all | Display all sockets |
| -n, --numeric | Show numerical addresses |
| -p, --processes | Show process using the sockets |
| -o, --options | Display timer information |
| -m, --memory | Display socket memory usage |
| -s, --summary | Display summary statistics |
| -r, --resolve | Resolve IP addresses |
| -F, --family FAMILY | Show sockets of type FAMILY (inet, inet6, link, unix) |

## Parameters:
| Parameter | Description |
|-----------|-------------|
| filters | Filter the output based on specific criteria such as state, user, port, etc. |

:::caution
Exercise caution when using the ss command as it provides detailed information about network sockets and processes. Make sure you have the necessary permissions to view this sensitive data.
:::
## ss bash Examples:
### Display all TCP and UDP sockets
```bash
ss -a
```
Displays all TCP and UDP sockets.

### Show listening TCP and UDP sockets
```bash
ss -l
```
Shows only listening TCP and UDP sockets.

### Show all TCP sockets
```bash
ss -t
```
Shows all TCP sockets.

### Show all UDP sockets
```bash
ss -u
```
Shows all UDP sockets.

### Display network statistics
```bash
ss -s
```
Displays network statistics.

### Show process information
```bash
ss -p
```
Shows process information for each socket connection.
:::tip
When using the ss command in Linux, ensure you have the necessary permissions to view socket statistics, as some options may require root privileges.
:::

### How do I display all listening TCP ports using ss?
To display all listening TCP ports using ss, execute the following command:
```bash
ss -tln
```

### How can I show all established connections with ss?
To show all established connections using ss, use the following command:
```bash
ss -t state established
```

### How do I list all UDP sockets with ss in Linux?
To list all UDP sockets using ss in Linux, you can run the following command:
```bash
ss -uln
```

### How can I display all sockets in numerical form with ss?
To display all sockets in numerical form using ss, use the following command:
```bash
ss -n
```

### How do I filter ss output based on specific criteria?
To filter ss output based on specific criteria, you can use the following command:
```bash
ss state LISTEN sport = :22
```

### How can I show detailed TCP socket information with ss?
To show detailed TCP socket information using ss, execute the following command:
```bash
ss -t -a
```

### How do I monitor system socket statistics continuously with ss?
To monitor system socket statistics continuously using ss, run the following command:
```bash
watch -n 1 ss -s
```

### How can I display summary statistics for different socket types with ss?
To display summary statistics for different socket types using ss, use the following command:
```bash
ss -s
```
## Applications of the ss command

- Display detailed information about network connections
- Show socket statistics
- Monitor network bandwidth
- Filter and display specific types of connections
- Find the current state of network ports
- Troubleshoot network-related issues