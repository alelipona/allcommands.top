---
title: RPCINFO Windows Command Guide
description: Discover how to use the Windows rpcinfo command to query RPC services and troubleshoot network connectivity.
---

The Windows rpcinfo command is a powerful tool for querying RPC services on a network, allowing users to troubleshoot connectivity and diagnose potential issues. By using rpcinfo, users can identify available RPC services, check the status of remote services, and verify communication between different network nodes. This command is particularly useful for system administrators and network engineers who need to ensure that RPC services are functioning properly for seamless communication within a network environment.
## RPCINFO Syntax:
```cmd
rpcinfo [options] [host]
```
## Options:
| Option | Description                      |
|--------|----------------------------------|
| -p     | Display the RPC program numbers. |
| -n     | Numeric output.                  |
| -d     | Display detailed output.         |
| -t     | Set a timeout value.             |
| -u     | Use UDP protocol instead of TCP. |

## Parameters:
| Parameter | Description                       |
|-----------|-----------------------------------|
| host      | Specifies the host to query RPC information. |

:::caution
Exercise caution when using the rpcinfo command, as it provides detailed information about RPC services on a remote host. Inappropriate use of this command may lead to security vulnerabilities or unintended consequences.
:::
## RPCINFO Command Samples:
### Display RPC services on a specific host
```cmd
rpcinfo -p 192.168.1.10
```
Displays the RPC services running on the host with the IP address 192.168.1.10.

### List all registered RPC services
```cmd
rpcinfo -p
```
Lists all registered RPC services on the local host.

### Query the portmapper service status
```cmd
rpcinfo -b
```
Queries the status of the portmapper service on the local host.

### Display the program number and version for a specific RPC service
```cmd
rpcinfo -p 192.168.1.20 nfs
```
Displays the program number and version for the NFS RPC service on the host with the IP address 192.168.1.20.

### List all registered RPC services on a specific network broadcast address
```cmd
rpcinfo -n 192.168.1.255
```
Lists all registered RPC services on the network with the broadcast address 192.168.1.255.

### Display information about a specific RPC program
```cmd
rpcinfo -T udp 192.168.1.30 100227
```
Displays detailed information about the RPC program with the program number 100227 running on the host with the IP address 192.168.1.30.

### Check the RPC service status on a range of ports
```cmd
rpcinfo -p -T tcp 192.168.1.40-50
```
Checks the status of RPC services running on TCP ports within the range 192.168.1.40 to 192.168.1.50.
### How do I use rpcinfo in Windows?
To use the rpcinfo command in Windows, execute the following command:
```cmd
rpcinfo --help
```

### What are some common options used with rpcinfo in Windows?
Common options used with rpcinfo in Windows include:
```cmd
rpcinfo -p <hostname>
```

### How can I list all registered RPC services using rpcinfo in Windows?
To list all registered RPC services using rpcinfo in Windows, you can use the following command:
```cmd
rpcinfo -p <hostname>
```

### Is there a way to query a specific program number using rpcinfo in Windows?
Yes, you can query a specific program number using rpcinfo in Windows with the following command:
```cmd
rpcinfo -p <hostname> <program_number>
```

### How can I find the port number of an RPC service using rpcinfo in Windows?
To find the port number of an RPC service using rpcinfo in Windows, you can run the command:
```cmd
rpcinfo -n <hostname> <program_number>
```

### Can rpcinfo be used to help diagnose RPC issues in Windows?
Yes, rpcinfo can be a helpful tool in diagnosing RPC issues in Windows by querying RPC services and checking their availability and status.

## Applications of the RPCINFO Command

- Listing all registered RPC interfaces
- Displaying the programs available on a remote RPC server
- Verifying the availability of RPC services on a server
- Testing the connection to an RPC server
- Debugging RPC-related issues