---
title: arp command in Linux
description: Learn how to use the Linux arp command to view and manipulate the Address Resolution Protocol (ARP) cache and tables on your system.
---

The Linux arp command allows users to view and manipulate the Address Resolution Protocol (ARP) cache and tables. It is a valuable tool for troubleshooting network connectivity issues and managing network configurations. With arp, users can display the ARP cache, add static ARP entries, and delete existing entries. By understanding how to use the ARP command effectively, users can ensure smooth and efficient network communication within their Linux system.
## arp Syntax:
```bash
arp [OPTION] [ADDRESS]
```

## Linux arp Options:
| Option         | Description                                             |
|----------------|---------------------------------------------------------|
| -a, --inet     | Display the ARP table for IPv4 addresses                |
| -A, --addr      | Display the ARP table for all network addresses         |
| -n, --numeric  | Show numerical addresses instead of resolving hostnames |
| -d, --delete   | Delete an entry specified by ADDRESS                     |
| -v, --verbose  | Display detailed information                             |
| -i, --device   | Specify the network interface to operate on              |
| -s, --set      | Create a new entry for the specified ADDRESS             |

## arp Parameters:
| Parameter | Description                                |
|-----------|--------------------------------------------|
| ADDRESS   | Specifies the target network address       |

:::caution
Exercise caution while using the arp command as incorrect operations can affect network connectivity and introduce security risks.
:::
## How to use arp command:
### Display ARP Table
```bash
arp
```
Displays the ARP table showing the IP and MAC addresses of devices connected to the network.

### Display ARP Table for a Specific Interface
```bash
arp -i eth0
```
Displays the ARP table for a specific network interface, such as eth0.

### Clear ARP Cache
```bash
sudo arp -d 192.168.1.1
```
Clears the ARP cache entry for the specified IP address "192.168.1.1".

### Resolve MAC Address from IP Address
```bash
arp 192.168.1.1
```
Resolves and displays the MAC address corresponding to the IP address "192.168.1.1".

### Add a Static ARP Entry
```bash
sudo arp -s 192.168.1.2 00:11:22:33:44:55
```
Adds a static ARP entry mapping IP address "192.168.1.2" to MAC address "00:11:22:33:44:55".

### Delete a Static ARP Entry
```bash
sudo arp -d 192.168.1.2
```
Deletes the static ARP entry for the specified IP address "192.168.1.2".

### Display ARP Table with Numeric Values
```bash
arp -n
```
Displays the ARP table with numeric values (IP and MAC addresses) without resolving hostnames.

### Display ARP Cache Information
```bash
arp -v
```
Displays additional information about the ARP cache entries such as age and hardware type.
:::tip
When using the arp command in Linux, make sure to have the necessary permissions to view and manipulate the ARP cache. Also, be cautious when modifying the ARP table as it can affect network connectivity.
:::

### How do I use arp in Linux?
To use the arp command in Linux, execute the following command:
```bash
arp
```

### How do I display the ARP cache in Linux?
To display the ARP cache in Linux, use the following command:
```bash
arp -n
```

### How do I add an entry to the ARP cache in Linux?
To add an entry to the ARP cache in Linux, you can use the following command format:
```bash
arp -s <IP_address> <MAC_address>
```

### How do I delete an entry from the ARP cache in Linux?
To delete an entry from the ARP cache in Linux, use the following command:
```bash
arp -d <IP_address>
```

### How do I flush the ARP cache in Linux?
To flush the ARP cache in Linux, you can use the following command:
```bash
ip -s -s neigh flush all
```

### How do I set a specific timeout for ARP cache entries in Linux?
To set a specific timeout for ARP cache entries in Linux, execute the following command:
```bash
echo "600" > /proc/sys/net/ipv4/neigh/default/gc_stale_time
```

### How do I prevent ARP cache poisoning in Linux?
To prevent ARP cache poisoning in Linux, you can enable ARP inspection on your network switches and use tools like arpwatch to monitor ARP activities.

### How do I view detailed information about an IP in the ARP cache in Linux?
To view detailed information about an IP in the ARP cache in Linux, you can use the following command:
```bash
arp -a <IP_address>
```

## Applications of the arp Command

- Display and modify the IP-to-MAC address translation tables
- View the ARP cache
- Debug networking issues related to ARP
- Spoofing attacks detection and prevention
- Troubleshoot connectivity problems