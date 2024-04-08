---
title: telnet Linux Command Guide
description: Learn how to use the telnet command in Linux to establish interactive text-based communication with remote systems. 
---

The Linux telnet command allows users to connect to remote hosts using the Telnet protocol. It enables interactive text-based communication for troubleshooting, testing, and administration purposes. By specifying the host and port, users can establish a connection and interact with the remote system through a command-line interface. Telnet can be a useful tool for network administrators and developers who need to access and manage remote systems efficiently.
## telnet Syntax:
```bash
telnet [options] [host [port]]
```
## Options:
| Option         | Description                           |
|----------------|---------------------------------------|
| -8             | Force IPv8 protocol usage             |
| -4             | Force IPv4 protocol usage             |
| -6             | Force IPv6 protocol usage             |
| -E             | Do not escape control characters      |
| -K             | Send function key strokes as is       |
| -L             | Suppress warn messages                |
| -X             | Display in hexadecimal                 |
| -a             | Print all valid addresses             |
| -b             | Bind to a particular interface        |

## Parameters:
| Parameter       | Description                           |
|-----------------|---------------------------------------|
| host            | Specify the host to connect to        |
| port            | Specify the port to connect to        |
| options         | Optional additional parameters        |

:::caution
Exercise caution while using the telnet command, as it transmits data over the network in plain text, which can be intercepted. Avoid using telnet with sensitive information unless in a secure, trusted environment.
:::
## telnet Command Samples:
### Connect to a remote server on port 80
```bash
telnet www.example.com 80
```
Establishes a telnet connection with the server www.example.com on port 80.

### Check connectivity to a specific port on a server
```bash
telnet 192.168.1.1 22
```
Verifies the connectivity to port 22 on the server with IP address 192.168.1.1 using telnet.

### Test SMTP server connectivity
```bash
telnet mail.example.com 25
```
Tests the connectivity to the SMTP server mail.example.com on port 25 using telnet.

### Establish an HTTP connection to a website
```bash
telnet www.google.com 80
```
Connects to the website www.google.com on port 80 using telnet to simulate an HTTP connection.

### Access a remote UNIX shell
```bash
telnet 192.168.1.10
```
Initiates a telnet connection to the UNIX shell on the server with IP address 192.168.1.10.

### Test POP3 server connectivity
```bash
telnet pop.example.com 110
```
Checks the connectivity to the POP3 server pop.example.com on port 110 using telnet.

### Retrieve a webpage using telnet
```bash
telnet www.wikipedia.org 80
GET /wiki/Main_Page HTTP/1.1
Host: www.wikipedia.org
```
Retrieves the main webpage from the website www.wikipedia.org by sending an HTTP request via telnet.
:::tip
When using the telnet command in Linux, make sure to specify the target host and port correctly to establish the desired network connection. Additionally, consider the security implications of using telnet, as it transmits data in plain text and can pose security risks.
:::

## telnet FAQ:
### How do I use telnet in Linux?
To use the telnet command in Linux, execute the following command:
```bash
telnet <hostname> <port>
```

### What is telnet used for in Linux?
Telnet is used in Linux for establishing a command-line interface connection to a remote host over a network.

### How can I check if telnet is installed on my Linux system?
To check if telnet is installed on your Linux system, run the following command:
```bash
telnet
```

### How do I quit or exit telnet in Linux?
To quit or exit from a telnet session in Linux, use the following keyboard shortcut:
```bash
Ctrl + ] and then type "quit"
```

### How can I specify a different port when using telnet in Linux?
To specify a different port when using telnet in Linux, use the following command syntax:
```bash
telnet <hostname> <port>
```

### Can telnet be used for encrypted connections in Linux?
Telnet transmits data in plain text and does not provide encryption. It is recommended to use secure alternatives like SSH for encrypted connections in Linux.
## Applications of the telnet command

- Troubleshooting network connectivity
- Testing remote server services
- Checking if a specific port is open on a remote host
- Remote administration of devices
- Network device configuration and management