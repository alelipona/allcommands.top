---
title: IPCONFIG CMD Windows
description: Learn how to use the Windows IPCONFIG command to view and manage network configuration settings. Find IP address, subnet mask, and default gateway information effortlessly.
---
IPCONFIG is a Windows command that displays all current TCP/IP network configuration values, such as the IP address, subnet mask, and default gateway. It also allows you to refresh the Dynamic Host Configuration Protocol (DHCP) and Domain Name System (DNS) settings, release and renew IP addresses, and perform troubleshooting tasks on the network connection. Additionally, IPCONFIG can be used to display and flush the DNS resolver cache.
## IPCONFIG Syntax:
```cmd
{Syntax}
```
## Options:
| Option | Description                                     |
|--------|-------------------------------------------------|
| /all   | Displays detailed configuration information     |
| /release | Releases the IP address for the specified adapter |
| /renew   | Renews the IP address for the specified adapter   |
| /flushdns | Purges the DNS Resolver cache                     |
| /displaydns | Displays the contents of the DNS Resolver cache   |
| /registerdns | Refreshes all DHCP leases and re-registers DNS names |

***
## Parameters:
| Parameter | Description                                   |
|-----------|-----------------------------------------------|
| ConnectionName | Specifies the network connection name for which you want to show the IP configuration  |

:::caution
{Warning}
:::
***
## Examples:

### Display IP configuration information
```cmd
ipconfig
```
This command displays the IP configuration information for all network interfaces on the Windows system.

### Release and renew IP address
```cmd
ipconfig /release
ipconfig /renew
```
These commands release the current IP address and then renew it by requesting a new IP address from the DHCP server.

### Display DNS resolver cache
```cmd
ipconfig /displaydns
```
This command shows the contents of the DNS resolver cache, including all resolved DNS entries and their Time-To-Live (TTL) values.
:::tip
When using the IPCONFIG command in CMD, make sure to run the command with administrative privileges to access all the available options and information.
:::

### How do I display all network connections using IPCONFIG in CMD?
To display all network connections using IPCONFIG in CMD, execute the following command:
```cmd
IPCONFIG /all
```
---

### How do I release the IP address using IPCONFIG in CMD?
To release the IP address using IPCONFIG in CMD, execute the following command:
```cmd
IPCONFIG /release
```
---

### How do I renew the IP address using IPCONFIG in CMD?
To renew the IP address using IPCONFIG in CMD, execute the following command:
```cmd
IPCONFIG /renew
```
---

### How do I flush the DNS resolver cache using IPCONFIG in CMD?
To flush the DNS resolver cache using IPCONFIG in CMD, execute the following command:
```cmd
IPCONFIG /flushdns
```
---