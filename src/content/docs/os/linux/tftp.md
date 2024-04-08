---
title: tftp command in Linux
description: Learn how to efficiently transfer files using the Linux tftp command. Optimize your network management and system administration with this versatile tool.
---

The Trivial File Transfer Protocol (TFTP) command in Linux allows users to transfer files between devices. With its simple functionality and minimal security features, the tftp command is commonly used for network management tasks, firmware updates, and system recovery. By utilizing UDP as its underlying protocol, tftp provides a lightweight and efficient solution for transferring files over a network. This guide will walk you through the basics of the tftp command in Linux, including how to initiate file transfers, troubleshoot common issues, and optimize network performance.
## tftp Syntax:
```bash
tftp [option] [host] [port]
```
## Linux tftp Options:

| Option | Description                        |
|--------|------------------------------------|
| -c     | Send file after connection is established |
| -g     | Get file |
| -l     | Local file name                      |
| -r     | Remote file name                     |
| -p     | Use local UDP port                   |
| -v     | Verbose mode                         |
| -b     | Transfer file in binary mode         |
| -m     | Set the size of the transfer buffer  |
| -t     | Set the timeout interval             |

## tftp Parameters:

| Parameter | Description                               |
|-----------|-------------------------------------------|
| host      | The hostname or IP address of the remote server |
| port      | The UDP port number to use for the connection    |
  
:::caution
Exercise caution when using the tftp command as it operates without user authentication, making it potentially insecure for transferring sensitive files.
:::
## How to use tftp command:

### Copy a file from a remote tftp server to the local machine
```bash
tftp -g -r file.txt -l file.txt 192.168.1.100
```

### Transfer a file to a remote tftp server
```bash
tftp -p -r file.txt -l file.txt 192.168.1.100
```

### Retrieve a file from a remote tftp server interactively
```bash
tftp 192.168.1.100
tftp> get file.txt
```

### Transfer a file to a remote tftp server interactively
```bash
tftp 192.168.1.100
tftp> put file.txt
```

### Specify a different timeout for tftp connection
```bash
tftp -t 10 192.168.1.100
```

### Display extended help for the tftp command
```bash
tftp --help
```

### Display version information of tftp
```bash
tftp --version
```

### Transfer a file using a specific port (UDP port 69 by default)
```bash
tftp -r file.txt -l file.txt -P 12345 192.168.1.100
```
:::tip
When using the tftp command in Linux, ensure that the necessary permissions are set for read/write access to the directories involved in transferring files. It is also recommended to use tftp in a secure network environment to prevent unauthorized access.
:::

## tftp Command Troubleshooting Q&A:
### How do I use tftp in Linux?
To use the tftp command in Linux, execute the following command:
```bash
tftp --option <value>
```

### How do I transfer a file using tftp in bash?
To transfer a file using tftp in bash, use the following command:
```bash
tftp -g -r filename -l destination_path remote_host
```

### How do I specify a custom tftp server port?
To specify a custom tftp server port, use the `-p` option in the tftp command. 
```bash
tftp -p custom_port -g -r filename remote_host
```

### How can I troubleshoot tftp connection issues?
To troubleshoot tftp connection issues, check that the tftp server is running, verify the network connectivity between the client and server, and ensure that any firewalls or security measures are not blocking the tftp traffic.

### How do I get a file from a remote tftp server?
To get a file from a remote tftp server, use the following command:
```bash
tftp -g -r filename -l local_file remote_host
```

### How do I send a file to a remote tftp server?
To send a file to a remote tftp server, use the following command:
```bash
tftp -p custom_port -g -l local_file -r remote_file remote_host
```

### How do I list files on a tftp server?
To list files on a tftp server, use the following command:
```bash
tftp -v remote_host
```

### How do I set a timeout for tftp connections?
To set a timeout for tftp connections, use the `-t` option followed by the timeout value in seconds. 
```bash
tftp -t timeout_value -g -r filename remote_host
```

### How do I use tftp in interactive mode?
To use tftp in interactive mode, simply execute the `tftp` command without any additional options in the terminal. 
```bash
tftp
```

## Applications of the tftp command

- Transferring files to and from a remote server
- Bootstrapping devices over a network
- Network configuration and monitoring
- Flashing firmware on devices
- Backup and restore operations