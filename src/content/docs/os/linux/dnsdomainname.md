---
title: dnsdomainname Linux command
description: Get the domain part of the FQDN (fully qualified domain name) of the system. Learn how to use the dnsdomainname command in Linux.
---

The dnsdomainname command in Linux is used to retrieve the domain part of the FQDN (fully qualified domain name) of the system. It is helpful in identifying the domain name associated with the host. This command can be useful for various networking and system administration tasks, providing information about the domain configuration of the system. By running dnsdomainname, users can quickly obtain the domain name without the hostname part, allowing for better management and troubleshooting capabilities in the Linux environment.

## dnsdomainname Syntax:
```bash
dnsdomainname
```
## Options:
| Option | Description                     |
|--------|---------------------------------|
|        |                                 |

## Parameters:
| Parameter | Description                    |
|-----------|--------------------------------|
|           |                                |

:::caution
Exercise caution when using the dnsdomainname command as it displays the domain name of the system based on the system provided by the NIS/YP (Network Information Service/ Yellow Page) or /etc/resolv.conf file. If the system is not configured properly or NIS/YP is not used, the command may not return the expected domain name.
:::
## dnsdomainname bash Examples:
### Display the DNS domain configured in the system
```bash
dnsdomainname
```
This command displays the DNS domain name configured on the system.

### Use the dnsdomainname command in a script
```bash
echo "The DNS domain name is $(dnsdomainname)"
```
This example demonstrates how to incorporate the dnsdomainname command into a script to display the DNS domain name dynamically.

### Set the DNS domain name using dnsdomainname
```bash
sudo hostname example.com
sudo dnsdomainname
```
Here, the hostname is set to "example.com" and then the dnsdomainname command is used to retrieve the configured DNS domain name.

### Check the DNS domain name in FQDN format
```bash
hostname -f
```
By combining the hostname and dnsdomainname commands, the FQDN (Fully Qualified Domain Name) of the system can be displayed.

### Show DNS domain name including the hostname
```bash
dnsdomainname -f
```
With the -f option, the dnsdomainname command can display the DNS domain name along with the hostname.

### Retrieve the NIS/YP domain name using dnsdomainname
```bash
dnsdomainname -yp
```
This command fetches the NIS/YP domain name configured on the system using the dnsdomainname command.
:::tip
When using the dnsdomainname command in Linux, remember that it is used to show the DNS domain name of the system. This is different from the hostname, which is the name of the machine in the network. If you need to display the DNS domain name of the system, dnsdomainname is the command to use.
:::

### How do I use dnsdomainname in Linux?
To use the dnsdomainname command in Linux, execute the following command:
```bash
dnsdomainname
```

### What is the purpose of the dnsdomainname command in Linux?
The dnsdomainname command in Linux is used to display the DNS domain name of the system.

### How can I show the FQDN using the dnsdomainname command?
To display the Fully Qualified Domain Name (FQDN) using the dnsdomainname command in Linux, use the following command:
```bash
dnsdomainname -f
```

### Can I set the domain name using the dnsdomainname command?
No, the dnsdomainname command is used to display the DNS domain name of the system and cannot be used to set the domain name.

### How do I display only the domain part of the FQDN with dnsdomainname?
To display only the domain part of the Fully Qualified Domain Name (FQDN) using dnsdomainname in Linux, you can run the following command:
```bash
dnsdomainname -d
```

### Can the dnsdomainname command display the hostname as well?
No, the dnsdomainname command in Linux does not display the hostname. It is specifically used to show the DNS domain name of the system.

### How do I get help with the dnsdomainname command?
To get help with the dnsdomainname command in Linux, you can refer to the man page by using the following command:
```bash
man dnsdomainname
```

### Is there a way to force dnsdomainname to use IPv4 or IPv6?
Yes, you can force the dnsdomainname command to use IPv4 or IPv6 by specifying the address family. To force IPv4, you can use the -4 option:
```bash
dnsdomainname -4
```
To force IPv6, you can use the -6 option:
```bash
dnsdomainname -6
```
## Applications of the dnsdomainname command

- Display the DNS domain name of the system