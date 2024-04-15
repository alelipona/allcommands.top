---
title: hostname MacOS Command Guide
description: Learn how to use the hostname command in MacOS to view or set the hostname of your computer system. Understand the syntax, options, and practical examples of changing the hostname on your Mac.
---

The `hostname` command in MacOS allows users to view or set the hostname of their computer system. The hostname is used to identify the device on a network, and changing it can be useful for various reasons. This guide will explain the syntax of the `hostname` command, along with the available options for viewing and setting the hostname. Whether you need to troubleshoot network issues, customize your system's identification, or simply understand more about MacOS commands, this guide will provide you with the information you need.
## hostname Syntax:
```bash
hostname [option]
```
## Options:
| Option | Description                  |
|--------|------------------------------|
| -f     | Display the fully qualified domain name. |
| -s     | Display the short hostname.  |
| -i     | Display the network address. |
| -h     | Display help information.    |

## Parameters:
| Parameter | Description                                      |
|-----------|--------------------------------------------------|
|           | No parameters. This command does not require any parameters. |

:::caution
Exercise caution when using the hostname command, as it can display sensitive information about the system that may be accessible to unauthorized users if not used carefully.
:::
## hostname Command Samples:
### Display the current hostname
```bash
hostname
```
This command shows the current hostname of the system.

### Change the hostname
```bash
sudo scutil --set HostName NewHostName
```
This command changes the hostname of the system to "NewHostName".

### Display the fully qualified domain name (FQDN)
```bash
hostname -f
```
Shows the fully qualified domain name of the system.

### Display the local domain name
```bash
hostname -d
```
Displays the local domain name of the system.

### Display the truncated hostname
```bash
hostname -s
```
Shows the truncated version of the hostname.

### Display all information
```bash
hostname -A
```
Displays all the available information about the hostname.

### Display the DNS domain name
```bash
hostname -y
```
Shows the DNS domain name of the system.
:::tip
When using the hostname command in MacOS, remember that certain options may require superuser privileges, so make sure to use sudo if needed.
:::

### How do I display the current hostname in MacOS?
To display the current hostname in MacOS, use the following command:
```bash
hostname
```

### How do I set a new hostname in MacOS?
To set a new hostname in MacOS, use the following command:
```bash
sudo scutil --set HostName <new_hostname>
```

### How do I display the fully qualified domain name (FQDN) of the system in MacOS?
To display the fully qualified domain name (FQDN) of the system in MacOS, use the following command:
```bash
hostname -f
```

### How do I display the local hostname in MacOS?
To display the local hostname in MacOS, use the following command:
```bash
hostname -s
```

### How do I display the network hostname in MacOS?
To display the network hostname in MacOS, use the following command:
```bash
hostname -A
```

### How do I set the local hostname in MacOS?
To set the local hostname in MacOS, use the following command:
```bash
sudo scutil --set LocalHostName <new_local_hostname>
```
## Applications of the hostname command

- Display the current hostname of the macOS system
- Set or change the hostname of the macOS system
- Display the Fully Qualified Domain Name (FQDN) of the macOS system
- Display the local domain name of the macOS system