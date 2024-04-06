---
title: Windows RASDIAL command
description: Learn about the Windows rasdial command and how to use it to connect and disconnect from a network. 
---

The Windows rasdial command is a built-in tool that allows users to connect and disconnect from a network. It is particularly useful for establishing VPN connections or dial-up connections. By using the rasdial command in the command prompt, users can easily manage their network connections without the need for a graphical user interface. This command supports various parameters for configuring connections, setting up credentials, and managing VPN connections. Whether you need to connect to a remote network, disconnect from a network, or troubleshoot connection issues, the rasdial command provides a convenient and efficient way to handle network connections directly from the command line.
## RASDIAL Syntax:
```cmd
rasdial [entryname [username [password|*]] [/domain:domainname]]
```
## Options:
| Option | Description                  |
|--------|------------------------------|
| entryname | Specifies the name of the entry to dial. |
| username | Specifies the username for the connection. |
| password | Specifies the password for the connection. |
| * | Prompts for the password for the connection. |
| /domain:domainname | Specifies the domain where the user account is located. |

## Parameters:
| Parameter | Description                  |
|-----------|------------------------------|
| entryname | Specifies the name of the entry to dial. |
| username | Specifies the username for the connection. |
| password | Specifies the password for the connection. |
| domainname | Specifies the domain where the user account is located. |

:::caution
Exercise caution when using the `rasdial` command as it involves passing sensitive information like passwords in plain text. Make sure to protect this information and avoid using this command on shared or unsecured systems.
:::
## RASDIAL Usage:
### Connect to a VPN Network
```cmd
rasdial "VPN Connection Name" username password
```
Establishes a connection to a VPN network by providing the connection name, username, and password.

### Disconnect from a VPN Network
```cmd
rasdial "VPN Connection Name" /d
```
Terminates the connection to a VPN network specified by its connection name.

### View Available Connections
```cmd
rasdial
```
Lists all available network connections that can be used with the RASDIAL command.

### Connect to a VPN Network using a Smart Card
```cmd
rasdial "VPN Connection Name" smarcard
```
Establish a connection to a VPN network using a smart card for authentication.
:::tip
It is recommended to run the `rasdial` command in an elevated Command Prompt (Run as administrator) to avoid any potential permission issues.
:::

### How do I connect to a VPN using rasdial?
To connect to a VPN using rasdial, use the following command:
```cmd
rasdial "VPNConnectionName" Username Password
```

### How do I disconnect from a VPN using rasdial?
To disconnect from a VPN using rasdial, use the following command:
```cmd
rasdial "VPNConnectionName" /disconnect
```

### How can I list all the available network connections with rasdial?
To list all available network connections using rasdial, execute the following command:
```cmd
rasdial
```

### How do I save my credentials when connecting with rasdial?
To save your credentials when connecting with rasdial, include the `/savecred` option in the command:
```cmd
rasdial "VPNConnectionName" Username Password /savecred
```

### How can I show detailed information about a specific connection with rasdial?
To display detailed information about a specific connection using rasdial, run the command with the connection name:
```cmd
rasdial "VPNConnectionName" /status
```

### Can I use rasdial to dial a phonebook entry?
Yes, you can dial a phonebook entry using rasdial. Use the following command format:
```cmd
rasdial phonebook-entry-name username password
```

## Applications of the RASDIAL Command

- Establishing a dial-up or VPN connection
- Disconnecting an active dial-up or VPN connection
- Querying information about active connections