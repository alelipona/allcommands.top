---
title: networksetup MacOS command
description: Learn how to manage network settings on your Mac using the networksetup command. Find out how to configure, troubleshoot, and optimize your network connections efficiently.
---

The networksetup command in MacOS is a versatile tool for managing your network settings. With networksetup, you can configure network interfaces, change network settings, troubleshoot network issues, and optimize your network connections. This command allows you to view current network configurations, set up new network locations, join wireless networks, and even change proxy settings. By using networksetup, you can efficiently manage your network connections directly from the command line, saving you time and effort. Whether you need to set up a VPN connection, change DNS settings, or troubleshoot network connectivity problems, the networksetup command provides you with the flexibility and control you need to effectively manage your network on MacOS.
## networksetup Syntax:
```bash
networksetup -listallnetworkservices
```
## Options:
| Option | Description                           |
|--------|---------------------------------------|
| -listallnetworkservices | List all network services |

## Parameters:
No parameters for this command.

:::caution
Exercise caution when using the networksetup command as it can modify network settings and potentially disrupt network connections if used incorrectly.
:::
## networksetup bash Examples:

### Check Connected Network Services
```bash
networksetup -listallnetworkservices
```
This command lists all the network services that are currently connected on the MacOS system.

### Set Ethernet Service to Obtain IP Address Automatically (DHCP)
```bash
networksetup -setdhcp Ethernet
```
This command configures the Ethernet service to obtain an IP address automatically from a DHCP server.

### Connect to a Wireless Network
```bash
networksetup -setairportnetwork en0 WIFI_SSID WIFI_PASSWORD
```
Using this command, you can connect to a specific wireless network by specifying the SSID and password.

### Display Current DNS Server Configuration
```bash
networksetup -getdnsservers Wi-Fi
```
This command shows the current DNS server settings for the Wi-Fi network service.

### Set Proxy Configuration for a Network Service
```bash
networksetup -setwebproxy Ethernet 192.168.1.1 8080
```
This command sets the web proxy configuration for the Ethernet network service with the specified proxy server IP and port.

### Disable IPv6 for a Network Service
```bash
networksetup -setv6off Wi-Fi
```
Disables IPv6 on the Wi-Fi network service to improve network connectivity in certain environments.
:::tip
When using the networksetup command in MacOS, make sure to run it with appropriate permissions, such as using sudo if needed, to avoid any permission-related errors.
:::

### How do I use networksetup in MacOS?
To use the networksetup command in MacOS, execute the following command:
```bash
networksetup --listallnetworkservices
```

### How can I display network settings using networksetup in MacOS?
To display network settings using networksetup in MacOS, use the following command:
```bash
networksetup -getinfo Wi-Fi
```

### How do I set the DNS server using networksetup in MacOS?
To set the DNS server using networksetup in MacOS, use the following command:
```bash
networksetup -setdnsservers Wi-Fi 8.8.8.8 8.8.4.4
```

### How can I configure a proxy using networksetup in MacOS?
To configure a proxy using networksetup in MacOS, use the following command:
```bash
networksetup -setwebproxy Wi-Fi 127.0.0.1 8888
```

### How do I renew the DHCP lease using networksetup in MacOS?
To renew the DHCP lease using networksetup in MacOS, use the following command:
```bash
networksetup -renewdhcp Wi-Fi
```

### How can I join a Wi-Fi network using networksetup in MacOS?
To join a Wi-Fi network using networksetup in MacOS, use the following command:
```bash
networksetup -setairportnetwork en0 WIFI_SSID WIFI_PASSWORD
```

### How do I turn off a network service using networksetup in MacOS?
To turn off a network service using networksetup in MacOS, use the following command:
```bash
networksetup -setnetworkserviceenabled Wi-Fi off
```

### How can I list the available network services using networksetup in MacOS?
To list the available network services using networksetup in MacOS, use the following command:
```bash
networksetup -listallnetworkservices
```
## Applications of the networksetup command

- Displaying network settings
- Configuring network settings
- Managing network locations
- Setting Proxies
- Setting DHCP network configurations
- Managing VPN configurations
- Managing DNS configurations