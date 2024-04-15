---
title: ipconfig MacOS command
description: Easily configure your MacOS network settings with the ipconfig command.
---

The MacOS ipconfig command allows users to view and manipulate their network configuration settings. It provides information on IP addresses, network interfaces, routing tables, and more. By using various options and flags, users can troubleshoot network issues, renew DHCP leases, flush DNS caches, and perform other network-related tasks efficiently.

## ipconfig Syntax:
```bash
ipconfig [option] [parameter]
```

## ipconfig Options:

| Option | Description                  |
|--------|------------------------------|
| -a     | Display all information      |
| -h     | Display help message         |
| -r     | Release the DHCP lease       |
| -renew | Renew the DHCP lease         |
| -show  | Display information for a specified interface |
| -set   | Set the configuration for a specified interface |

:::caution
It is recommended to use the `ipconfig` command with caution as it can modify network settings and disrupt network connectivity if used improperly.
:::

## Parameters:

| Parameter     | Description                         |
|---------------|-------------------------------------|
| interfaceName | Name of the network interface       |
## ipconfig Command Usage Examples:
### Display the current network configuration
```bash
ipconfig getpacket en0
```
Displays the current network configuration for the specified interface "en0".

### Release the DHCP lease
```bash
sudo ipconfig set en0 BOOTP
```
Releases the DHCP lease for the specified interface "en0".

### Renew the DHCP lease
```bash
sudo ipconfig set en0 DHCP
```
Renews the DHCP lease for the specified interface "en0".

### Refresh the DHCP lease and configuration
```bash
sudo ipconfig set en0 BOOTP; sudo ipconfig set en0 DHCP
```
Refreshes the DHCP lease and configuration for the specified interface "en0".

### Display DNS cache information
```bash
ipconfig getpacket en0 | grep domain_name_server
```
Displays the DNS server information stored in the cache for the specified interface "en0".
:::tip
When using the ipconfig command in MacOS, make sure to run it with the appropriate options to achieve the desired network configuration or diagnostic information.
:::

### How do I use ipconfig in MacOS?
To use the ipconfig command in bash, execute the following command:
```bash
ipconfig
```

### How to release and renew DHCP lease using ipconfig in MacOS?
To release the DHCP lease and renew it using ipconfig, run the following commands:
```bash
ipconfig set en0 DHCP
```

### How to flush DNS cache with ipconfig in MacOS?
To flush the DNS cache using ipconfig on MacOS, use the following command:
```bash
sudo killall -HUP mDNSResponder
```

### How to display all network interfaces information with ipconfig in MacOS?
To display information for all network interfaces using ipconfig in MacOS, run the following command:
```bash
ifconfig -a
```

### How to view detailed information about a specific network interface with ipconfig in MacOS?
To view detailed information about a specific network interface using ipconfig in MacOS, execute the following command:
```bash
ifconfig en0
```

### How to renew DHCP lease for a specific network interface with ipconfig in MacOS?
To renew the DHCP lease for a specific network interface using ipconfig in MacOS, run the following command:
```bash
ipconfig set en0 DHCP
```

### How to set a static IP address using ipconfig in MacOS?
To set a static IP address for a network interface using ipconfig in MacOS, use the following command as an example:
```bash
sudo ipconfig set en0 MANUAL <ip_address> <subnet_mask>
```

### How to display only IPv4 addresses info using ipconfig in MacOS?
To display only IPv4 addresses information using ipconfig in MacOS, run the following command:
```bash
ifconfig | grep "inet "
```

## Applications of the ipconfig MacOS command

- Display network interface configuration
- Renew DHCP lease
- Release DHCP lease
- Flush DNS cache
- Display ARP cache
- Set interface to active or inactive
- Set interface configuration from a DHCP server
- Configure a manual static IP address