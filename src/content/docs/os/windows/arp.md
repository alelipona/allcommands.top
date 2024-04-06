---
title: ARP Windows command
description: Learn how to use the Windows arp command to manage the Address Resolution Protocol cache on your system. 
---

The Windows arp command allows users to view and modify the Address Resolution Protocol (ARP) cache. This command-line tool can be used to display the contents of the ARP cache, add static ARP entries, and remove ARP cache entries. By managing the ARP cache, users can resolve networking issues and troubleshoot connectivity problems on their Windows systems. ARP is essential for mapping IP addresses to MAC addresses in a local network, and the arp command provides a simple way to interact with this vital networking protocol.

## ARP Syntax:
```cmd
arp [-a] [-g [GatewayIP]] [-d IP] [-s IP MAC] [InterfaceIndex]
```

## Windows ARP Options:
| Option   | Description                             |
|----------|-----------------------------------------|
| -a       | Display current ARP entries.            |
| -g       | Display ARP entries on the specified gateway. |
| -d       | Delete the ARP entry for the specified IP address. |
| -s       | Add a static ARP entry for the specified IP address and MAC address. |

## ARP Parameters:
| Parameter     | Description                                     |
|---------------|-------------------------------------------------|
| IP            | Specifies the Internet Protocol (IP) address.   |
| MAC           | Specifies the Media Access Control (MAC) address. |
| InterfaceIndex| Specifies the interface index.                   |

:::caution
Caution: Incorrect use of the arp command can lead to network connectivity issues. Exercise caution when adding, deleting, or modifying ARP entries as it can disrupt network communication.
:::

## How to use arp command:
### Display ARP Table
```cmd
arp -a
```
Displays the current ARP table on the system.

### Add a Static ARP Entry
```cmd
arp -s 192.168.1.100 00-11-22-33-44-55
```
Adds a static ARP entry mapping IP address "192.168.1.100" to MAC address "00-11-22-33-44-55".

### Delete ARP Entry
```cmd
arp -d 192.168.1.100
```
Deletes the ARP entry corresponding to the IP address "192.168.1.100".

### Clear ARP Cache
```cmd
arp -d *
```
Clears the entire ARP cache by deleting all entries.

### Display ARP Cache for a Specific Interface
```cmd
arp -a -N 192.168.1.1
```
Displays the ARP cache for the specific interface with the IP address "192.168.1.1".

### Query Specific IP Address
```cmd
arp -a 192.168.1.100
```
Queries and displays the ARP entry for the specific IP address "192.168.1.100".

### Enable Dynamic ARP Cache Timeout
```cmd
arp -s 192.168.1.100 00-11-22-33-44-55 temp
```
Adds a dynamic ARP entry with a timeout for the IP address "192.168.1.100".

### Modify Existing ARP Entry
```cmd
arp -s 192.168.1.100 00-11-22-33-44-55 1
```
Modifies the MAC address associated with the IP address "192.168.1.100" in the ARP cache.
:::tip
When using the arp command in CMD, make sure to run the command with administrative privileges to ensure proper functionality.
:::

### How do I use arp in CMD?
To use the arp command in CMD, execute the following command:
```cmd
arp -a
```
---

### What does the arp -a command do in CMD?
When you run the following command in CMD:
```cmd
arp -a
```
It displays the ARP cache of all network interfaces on the local computer.

### How can I clear the ARP cache using arp in CMD?
To clear the ARP cache using the arp command in CMD, use the following command:
```cmd
arp -d
```
---

### How do I add a static ARP entry in CMD?
To add a static ARP entry in CMD using the arp command, execute the following command:
```cmd
arp -s <IPAddress> <MACAddress>
```
---

## Applications of the arp Command

1. Display the ARP cache: ```arp -a```
2. Add an ARP entry for a specific IP address: ```arp -s <IPAddress> <MACAddress>```
3. Delete an ARP entry: ```arp -d <IPAddress>```