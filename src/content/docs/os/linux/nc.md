---
title: What is nc Linux command?
description: Learn how to use the Linux nc command for network connections, file transfers, and port scanning.
---

The Linux nc command, also known as netcat, is a versatile networking tool used for reading and writing data across network connections using TCP or UDP. It can also be used for port scanning, transferring files, as a simple network server, and much more.
## nc Syntax:
```bash
nc [options] [destination] [port]
```
## nc Options:
| Option | Description |
| ------ | ----------- |
| -h     | Display help message and exit. |
| -l     | Used to specify to operate in listening mode. |
| -p     | Specify source port. |
| -u     | Use UDP instead of the default TCP. |
| -v     | Increase verbosity level. |

:::caution
Exercise caution when using the `nc` command as it can be used for network scanning, port scanning, and other potentially malicious activities. Always ensure you have permission before using it, as misuse could lead to security vulnerabilities or legal consequences.
:::

## Parameters:
| Parameter   | Description                           |
| ----------- | ------------------------------------- |
| destination | Hostname or IP address of the target. |
| port        | Port number to connect to.            |
## nc Command Usage Examples:
### Send Text to a Server
```bash
echo "Hello, world!" | nc example.com 80
```
Sends the text "Hello, world!" to the server at example.com on port 80.

### Check if a Remote Host is Reachable
```bash
nc -zv example.com 443
```
Checks if the host example.com on port 443 is reachable using the `-z` and `-v` flags.

### Transfer Files Over the Network
```bash
nc -l -p 1234 > received_file.txt
```
Starts a TCP server on port 1234 and saves the received data to the file received_file.txt.

### Connect to a Remote SSH Server
```bash
nc -v example.com 22
```
Initiates a connection to the SSH server at example.com on port 22 using the `-v` flag for verbosity.

### Port Scanning
```bash
nc -zv example.com 1-100
```
Scans ports 1 to 100 on the host example.com to check for open ports using the `-z` and `-v` flags.
:::tip
When using the nc command in Linux, remember to refer to the command's manual page (`man nc`) for a comprehensive list of options and detailed explanations. 
:::

### How do I use nc in Linux?
To use the nc command in bash, execute the following command:
```bash
nc --option <value>
```

### What is the purpose of the nc command?
The nc command, also known as netcat, is used for reading/writing data across network connections using TCP or UDP protocols.
```bash
nc -l -p 1234 
```

### How can I listen for incoming connections with nc?
To listen for incoming TCP connections on a specific port using nc, use the following command:
```bash
nc -l -p <port_number>
```

### How can I perform a port scan using nc?
To perform a port scan on a specific target using nc, you can iterate over a range of ports with the following command:
```bash
nc -zv <target_ip> <start_port>-<end_port>
```

### How do I transfer files using nc?
To transfer a file from one host to another using nc, you can accomplish this by redirecting the file content through the network connection. On the receiving end, output the content to a specified file.
```bash
nc -l -p 1234 > received_file.txt
```

### How can I check if a port is open using nc?
To check if a specific port is open on a target host, you can connect to it using nc and see if the connection is successful.
```bash
nc -zv <target_ip> <port_number>
```

### How do I create a simple web server using nc?
You can create a simple web server using nc to serve static files. For example, to serve a single HTML file, you can run the following command:
```bash
while true; do nc -l -p 8080 -q 1 < index.html; done
```

### How can I use nc for chat-like communication between two hosts?
To establish a chat-like communication between two hosts using nc, run nc on both hosts in listening mode to read and write messages.
```bash
# On host A
nc -l -p 1234

# On host B
nc <host_A_IP> 1234
```

## Applications of the nc command

- Port scanning
- Network debugging and exploration
- Transferring files
- Remote shell access
- Chat/Messaging
- Forwarding or redirecting ports
- Network daemon testing
- Proxying network connections