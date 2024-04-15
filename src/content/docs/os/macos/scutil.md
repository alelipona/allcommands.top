---
title: scutil MacOS Command Guide
description: Learn how to use the scutil command on MacOS to manage system configuration settings.
---

The MacOS scutil command is a powerful tool for managing system configuration settings. It allows users to interact with the system configuration database, modify network settings, and perform various tasks related to networking and system configuration. With scutil, users can query, set, and delete configuration parameters, as well as perform tasks such as changing the computer name, hostname, and network interface settings. Additionally, the scutil command can be used to troubleshoot networking issues, manage network proxies, and configure VPN settings. Overall, the scutil command is a versatile tool for customizing and managing MacOS system settings.
## scutil Syntax:
```bash
scutil [command] [parameters]
```
## Options:
| Option | Description                  |
|--------|------------------------------|
| -r     | Read configuration values.   |
| -w     | Write configuration values.  |
| -nc    | Do not cache this value.     |
| -n     | Read notification (no wait). |
| -nN    | Read notification (wait).    |
| -nP    | Read notification (poll).    |
| -rN    | Release notification.        |
| -a     | Authenticate.                |
| -h     | Help.                        |

## Parameters:
| Parameter      | Description                                             |
|----------------|---------------------------------------------------------|
| key            | The key name to read or write.                          |
| value          | The value to write.                                     |
| service        | The service to operate on.                              |
| reason         | The reason for changing state.                          |
| keypath        | Key path for notification registration.                |
| name           | The name of the notification to operate on.             |
| callback       | The callback program to execute.                        |
| arguments      | The arguments to pass to the callback program.          |
| config-file    | The configuration file that contains the configuration.|

:::caution
Exercise caution when using the `scutil` command as incorrect usage can potentially modify system settings and configurations leading to unexpected behavior.
:::
## scutil Command Samples:
### Show System Hostname
```bash
scutil --get HostName
```
Displays the current system hostname.

### Show DNS Resolver Configuration
```bash
scutil --dns
```
Shows the DNS resolver configuration details.

### Set Hostname
```bash
sudo scutil --set HostName new_hostname
```
Sets the system hostname to the specified value.

### Show Current Network Configuration
```bash
scutil --get LocalHostName
scutil --get ComputerName
```
Displays the current local hostname and computer name.

### Show System Global Hostname
```bash
scutil --get LocalHostName
```
Shows the global system hostname.

### Show all Power Source Information
```bash
scutil --power
```
Displays information about all available power sources.

### Show VPN Status
```bash
scutil --nc list
```
Shows the status of network interfaces including VPN connections.
:::tip
When using the scutil command in MacOS, make sure to refer to the official documentation or man pages for detailed information on available options and usage. Additionally, exercise caution when making changes to network configurations using scutil to avoid any unexpected network disruptions.
:::

## scutil FAQ:
### How do I set the computer's hostname using scutil in MacOS?
To set the computer's hostname with scutil in MacOS, use the following command:
```bash
sudo scutil --set HostName your-new-hostname
```

### How do I display the current network configuration using scutil in MacOS?
To display the current network configuration with scutil in MacOS, execute the following command:
```bash
scutil --get LocalHostName
```

### How do I list all network services with scutil in MacOS?
To list all network services using scutil in MacOS, run the following command:
```bash
scutil --nc list
```

### How can I view the current IPv4 configuration using scutil in MacOS?
To view the current IPv4 configuration with scutil in MacOS, use the following command:
```bash
scutil --get State:/Network/Global/IPv4
```

### How do I delete a specific network service with scutil in MacOS?
To delete a specific network service using scutil in MacOS, use the following command:
```bash
sudo scutil --nc delete "interface_name"
```

### How can I view the current DNS configuration with scutil in MacOS?
To view the current DNS configuration using scutil in MacOS, run the following command:
```bash
scutil --dns
```
## Applications of the scutil command

- Changing network settings
- Configuring DNS settings
- Managing network services
- Displaying network information
- Setting computer hostname
- Configuring dynamic store
- Managing interface settings
- Checking reachability of network hosts