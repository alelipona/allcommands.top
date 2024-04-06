---
title: ncat Linux Command Guide
description: Learn how to use the ncat command in Linux for network connections, port scanning, and data transfer. Discover the syntax, options, and examples.
---

The ncat command in Linux is a powerful networking utility that allows for versatile network connections, port scanning, and data transfer. It provides a wide range of features and options, making it a valuable tool for network administrators and security professionals. Using ncat, you can create various types of connections, from simple TCP/UDP connections to complex SSL-encrypted connections. Additionally, ncat supports port scanning, proxying, and file transfer functionalities, providing a comprehensive solution for network-related tasks.
## ncat Syntax:
```bash
ncat [options] [host] [port]
```
## Options:
| Option              | Description                            |
|---------------------|----------------------------------------|
| -l, --listen        | Listen mode, for inbound connects      |
| -k, --keep-open     | Keep listening for additional connects |
| -e, --exec          | Execute specified command after connect|
| -p, --source-port   | Set source port number                 |
| -v, --verbose       | Be more verbose                        |
| -h, --help          | Show help message                      |

## Parameters:
| Parameter           | Description                            |
|---------------------|----------------------------------------|
| host                | Hostname or IP address to connect to   |
| port                | Port number to connect to              |

:::caution
Using ncat without proper understanding of the options and parameters can lead to unintended consequences, including security vulnerabilities. Exercise caution when using this command.
:::
## ncat Command Samples:

### Basic TCP Connection
```bash
ncat 127.0.0.1 80
```
Establishes a basic TCP connection to localhost on port 80.

### Listen for TCP Connections
```bash
ncat -l 1234
```
Starts listening for TCP connections on port 1234.

### Transfer Files Over TCP
```bash
ncat -l 1234 < file.txt
```
Listens on port 1234 and transfers the contents of file.txt to connecting clients.

### Port Scanning
```bash
ncat -zv 192.168.1.1 1-100
```
Scans ports 1 to 100 for any open ports on the specified IP address.

### Proxying Connections
```bash
ncat -l 8080 --sh-exec "ncat remote-server 80"
```
Acts as a proxy by listening on port 8080 and forwarding connections to a remote server on port 80.

### Chat Server
```bash
ncat -l 1234 --chat
```
Sets up a chat server that allows multiple clients to connect and communicate with each other over TCP.

### SSL/TLS Connection
```bash
ncat --ssl 192.168.1.1 443
```
Establishes an SSL/TLS encrypted connection to the specified IP address on port 443.
:::tip
When using the ncat command in Linux, ensure that you have the necessary permissions to run the command and that you are familiar with the options and flags to avoid unintended consequences.
:::

### How do I use ncat in Linux?
To use the ncat command in Linux, execute the following command:
```bash
ncat --option <value>
```

### What is the purpose of ncat in Linux?
{answer}

### How can I establish a TCP connection using ncat in Linux?
{answer}

### How do I perform port scanning with ncat in Linux?
{answer}

### How can I use ncat to transfer files in Linux?
{answer}

### Is it possible to run ncat as a server in Linux?
{answer}
## Applications of the ncat command

- Port scanning
- Network debugging and exploration
- Banner grabbing
- File transfer over the network
- Port forwarding
- Chat server/client functionality
- Remote shell access
- Proxying and redirection
- Setting up network services
- Network stress testing