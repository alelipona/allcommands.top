---
title: IPXROUTE Windows Command Guide
description: Learn how to use the Windows ipxroute command to manage IPX network routes efficiently.
---

The Windows ipxroute command allows users to manage and view IPX routing tables, add and delete static IPX routes, and display detailed information about IPX interfaces and services. This command is useful for network administrators to troubleshoot connectivity issues and optimize IPX network performance.

## IPXROUTE Syntax:
```cmd
ipxroute [command] [options]
```
## Options:
| Option | Description                        |
|--------|------------------------------------|
| add    | Adds a static IPX route.           |
| delete | Deletes a static IPX route.        |
| print  | Displays the contents of the IPX routing table. |

## Parameters:
| Parameter | Description                                          |
|-----------|------------------------------------------------------|
| network   | Specifies the network address in hexadecimal format. |
| interface | Specifies the network interface.                     |

:::caution
Exercise caution when using the ipxroute command, as it can affect the IPX routing configuration of your system. Incorrect usage may result in network connectivity issues or misrouting of traffic. Make sure to have a good understanding of IPX routing concepts before making changes with this command.
:::
## IPXROUTE Command Samples:
### Display IPX Network Configuration
```cmd
ipxroute
```
Displays the current IPX routing table and configuration settings.

### Add a Static IPX Route
```cmd
ipxroute add 4d8100162e24 4d8 0 b1a7
```
Adds a static IPX route with the network, node, hop count, and interface specified.

### Delete a Static IPX Route
```cmd
ipxroute delete 4d8100162e24
```
Deletes a static IPX route with the specified network address.

### Display Help Information
```cmd
ipxroute /?
```
Displays detailed information about the IPXROUTE command and its usage.

### Display All IPX Routes in Detailed Format
```cmd
ipxroute print
```
Displays all IPX routes in detail, including network address, node address, hop count, and interface.

### Disable IPX Routing
```cmd
ipxroute disable
```
Disables IPX routing on the Windows system.

### Enable IPX Routing
```cmd
ipxroute enable
```
Enables IPX routing on the Windows system.
:::tip
When using the ipxroute command in Windows, make sure to run it with administrative privileges to avoid any permission-related errors.
:::

## IPXROUTE FAQ:
### How do I use ipxroute in Windows?
To use the ipxroute command in Windows, execute the following command:
```cmd
ipxroute --option <value>
```

### What is the purpose of the ipxroute command in Windows?
The ipxroute command in Windows is used to manage and configure IPX (Internetwork Packet Exchange) routing tables.

### How can I display the IPX routing table in Windows using ipxroute?
To display the IPX routing table in Windows using ipxroute, you can use the following command:
```cmd
ipxroute print
```

### How do I add a new entry to the IPX routing table with ipxroute in Windows?
To add a new entry to the IPX routing table using ipxroute in Windows, you can use a command similar to the following example:
```cmd
ipxroute add network 1234 via 4567
```

### Can I delete a specific entry from the IPX routing table using ipxroute in Windows?
Yes, you can delete a specific entry from the IPX routing table using ipxroute in Windows by running a command similar to the following example:
```cmd
ipxroute delete network 1234
```

### How do I flush all entries from the IPX routing table with ipxroute in Windows?
To flush all entries from the IPX routing table using ipxroute in Windows, you can execute the following command:
```cmd
ipxroute flush
```
## Applications of the IPXROUTE Command

- Display or modify the IPX routing table
- Add a static route to the IPX routing table
- Delete a static route from the IPX routing table