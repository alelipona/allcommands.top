---
title: socat command in Linux
description: Learn how to use the powerful Linux socat command for data transfer and manipulation. 
---

socat is a versatile networking tool for data transfer and manipulation in Linux systems. It can establish two bidirectional byte streams and transfer data between them. With support for various protocols and options, socat is a powerful tool for network troubleshooting, port forwarding, and creating network connections. It can also act as a proxy or relay for network services.

## socat Syntax:
```bash
socat [options] <address1> <address2>
```
## Linux socat Options:
| Option         | Description                           |
|----------------|---------------------------------------|
| -d            | Display more debug messages           |
| -verbose      | Be more verbose                       |
| -v            | Print version information and exit    |
| -h            | Show help                             |
| -V            | Print version and exit                |
| -x            | Print hex dump of all data           |
| -u            | Use UDP instead of TCP               |
| -T            | Use TTY (terminal) mode              |
| -b            | Set buffer size                       |


## socat Parameters:
| Parameter | Description                             |
|------------|-----------------------------------------|
| address1  | Description of address1 parameter       |
| address2  | Description of address2 parameter       |

:::caution
Exercise caution while using the socat command as it can create network connections between two addresses, and incorrect usage may lead to unexpected behavior or security risks.
:::
## How to use socat command:

### Create a TCP Listener on Port 1234
```bash
socat TCP-LISTEN:1234 -
```
Creates a TCP listener on port 1234.

### Connect to a TCP Server
```bash
socat - TCP:example.com:80
```
Connects to a TCP server at example.com on port 80.

### Transfer Files Over TCP
```bash
socat -u FILE:/path/to/local/file TCP:example.com:12345
```
Transfers a file over TCP to a remote server at example.com on port 12345.

### Forward Local Port to Remote Host
```bash
socat TCP-LISTEN:8080,fork TCP:example.com:80
```
Forwards local port 8080 to the remote host example.com on port 80.

### Create a TCP Listener with Logging
```bash
socat TCP-LISTEN:1234,reuseaddr,fork SYSTEM:'tee output.log'
```
Creates a TCP listener on port 1234 with logging to a file named output.log.

### Establish a Secure SSL Tunnel
```bash
socat TCP4-LISTEN:1234,reuseaddr,fork OPENSSL:example.com:443,verify=0
```
Establishes a secure SSL tunnel from local port 1234 to the remote host example.com on port 443, with certificate verification disabled.

### Redirect UDP Traffic to TCP
```bash
socat UDP-LISTEN:1234,fork TCP:example.com:80
```
Redirects incoming UDP traffic on port 1234 to a TCP connection with the remote server at example.com on port 80.

### Connect to a Unix Socket
```bash
socat - UNIX-CONNECT:/path/to/socket
```
Connects to a Unix socket located at /path/to/socket.
:::tip
When using the socat command in Linux, make sure to carefully check the specified options and their values to ensure proper functionality and avoid unexpected issues.
:::

### How do I use socat in Linux?
To use the socat command in Linux, execute the following command:
```bash
socat --version
```

### What is the purpose of socat in bash?
The main purpose of socat in bash is to establish two bidirectional byte streams and transfer data between them.
```bash
socat TCP4-LISTEN:4444,fork EXEC:/bin/bash
```

### How can I create a simple TCP server using socat?
To create a simple TCP server using socat, you can use the following command:
```bash
socat TCP4-LISTEN:1234,reuseaddr,fork EXEC:/bin/cat
```

### How do I transfer a file using socat in Linux?
To transfer a file using socat in Linux, you can use the following command:
```bash
socat FILE:localfile.txt TCP4:remotehost:port
```

### Can I use socat for port forwarding in Linux?
Yes, you can use socat for port forwarding in Linux. Here's an example command:
```bash
socat TCP-LISTEN:8080,fork TCP:localhost:80
```

### How do I create a secure SSL/TLS connection with socat?
To create a secure SSL/TLS connection with socat, you can use the following command:
```bash
socat - OPENSSL:www.example.com:443,cert=client.pem,cafile=ca-certs.pem
```

### How can I use socat to redirect output to a file in Linux?
You can use socat to redirect output to a file in Linux by running the following command:
```bash
socat -u EXEC:'command',pty,stderr > output.txt
```

### Can I use socat to connect to a serial port in Linux?
Yes, you can use socat to connect to a serial port in Linux. Here's an example command:
```bash
socat -d -d pty,raw,echo=0 pty,raw,echo=0
```

### How do I create a simple UDP server using socat?
To create a simple UDP server using socat, you can use the following command:
```bash
socat -v UDP-LISTEN:1234,fork STDOUT
```

## Applications of the socat command

- Creating virtual serial connections
- Network debugging
- Proxying and forwarding data
- Port scanning
- SSL/TLS encryption
- Tunneling
- File transfer
- Shell redirection