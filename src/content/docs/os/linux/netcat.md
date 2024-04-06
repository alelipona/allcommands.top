---
title: Linux netcat command
description: Learn about the Linux netcat command, its uses, syntax, and options to transfer data over networks securely and efficiently.
---

Netcat (often referred to as the "Swiss Army knife of networking") is a powerful networking utility that allows for reading from and writing to network connections using TCP or UDP. It can act as a client or server, create outbound or inbound connections, and port scanning. Netcat is commonly used for network security auditing, transferring files, port forwarding, and as a backdoor. It is a versatile tool that is popular among system administrators, network engineers, and security professionals for its simplicity and effectiveness in various networking tasks.

## netcat Syntax:
```bash
nc [options] [hostname] [port]
```
## Options:
| Option | Description                     |
|--------|---------------------------------|
| -h     | Display help information         |
| -l     | Listen mode, for inbound connections |
| -v     | Verbose, show more information   |
| -n     | Numeric-only IP addresses and ports |
| -z     | Zero-I/O mode, used for scanning |

## Parameters:
| Parameter | Description                     |
|-----------|---------------------------------|
| hostname  | The name or IP address of the remote server |
| port      | The port number to connect to or listen on |

:::caution
Exercise caution when using netcat, as it can be a powerful tool but can also lead to security vulnerabilities if not used properly. Always consider the implications of sending or receiving data over the network using netcat.
:::
## netcat Usage:
### Transfer Files with Netcat
```bash
# on the receiver machine
nc -l -p 1234 > received_file.txt

# on the sender machine
nc receiver_ip_address 1234 < file_to_send.txt
```
Transfer a file from one machine to another using netcat.

### Scan Ports on a Remote Machine
```bash
nc -zv remote_host 1-100
```
Scan ports 1 to 100 on a remote machine to check for open ports.

### Chat Between Two Users
```bash
# on the host machine
nc -l 1234

# on the guest machine
nc host_machine_ip_address 1234
```
Establish a chat session between two users using netcat.

### Create a Simple Web Server
```bash
nc -l -p 8080 < index.html
```
Create a simple web server on port 8080 serving an index.html file.
:::tip
When using netcat in Linux, always ensure that you have the necessary permissions to execute the command and that you are aware of any potential security risks associated with its usage.
:::

### How do I establish a TCP connection using netcat in Linux?
To establish a TCP connection using netcat in Linux, use the following command:
```bash
nc <hostname> <port>
```

### How do I listen for incoming TCP connections with netcat in Linux?
To listen for incoming TCP connections with netcat in Linux, use the following command:
```bash
nc -l <port>
```

### How can I transfer a file using netcat in Linux?
To transfer a file using netcat in Linux, you can redirect the file content to netcat on the sending side and redirect the output to a file on the receiving side. Below is an example:
```bash
# On the sending side
cat file.txt | nc <destination> <port>

# On the receiving side
nc -l <port> > received_file.txt
```

### How do I perform a port scan using netcat in Linux?
To perform a port scan using netcat in Linux, you can specify a range of ports to scan. Below is an example:
```bash
nc -zv <hostname> 1-100
```

### How can I use netcat to troubleshoot network connectivity in Linux?
You can use netcat to check network connectivity by attempting to establish a connection to a specific host and port. This can help identify if the network path is open and reachable.
```bash
nc -vz <hostname> <port>
```

### How do I create a persistent backdoor with netcat in Linux?
To create a persistent backdoor with netcat in Linux, you can set up a listener on a specific port that stays open for incoming connections. Below is an example: 
```bash
nc -lvp <port> -e /bin/bash
```

### How can I use netcat for port forwarding in Linux?
You can use netcat for port forwarding in Linux by listening on a local port and forwarding data to a remote host and port. Below is an example:
```bash
# Local port forwarding
nc -l <local_port> | nc <remote_host> <remote_port>

# Remote port forwarding
nc -l -p <remote_port> | nc -w 1 <destination_host> <destination_port>
```

## Applications of the netcat command

- Port scanning
- Port forwarding
- Network debugging
- File transfer
- Remote shell
- Backdoor creation
- Banner grabbing