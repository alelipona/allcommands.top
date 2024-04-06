---
title: Windows TLNTADMN command
description: Learn how to use the Windows tlntadmn command to manage Telnet servers on your system efficiently.
---

The Windows tlntadmn command is a command-line tool that allows users to manage Telnet servers on their system. It provides various options for configuring and monitoring Telnet server settings, such as port numbers, allowed connections, and user permissions. With tlntadmn, users can easily enable or disable Telnet services, view current active sessions, and troubleshoot connection issues. This powerful tool helps system administrators efficiently manage Telnet services on Windows machines.
## TLNTADMN Syntax:
```cmd
tlntadmn [option] [parameter]
```

## Options:
| Option | Description                             |
|--------|-----------------------------------------|
| -s     | Specify the server to manage            |
| -p     | Specify the port number to use          |
| -d     | Disable connection control               |
| -e     | Enable connection control                |
| -r     | Turn on connection control and escape    |

## Parameters:
| Parameter  | Description                            |
|------------|----------------------------------------|
| ServerName | Specifies the name of the server to manage |
| PortNumber | Specifies the port number to use       |

:::caution
Exercise caution when using the 'tlntadmn' command as it manages telnet servers and can potentially affect network connections and configurations.
:::
## TLNTADMN Usage:
### Enable Telnet Server
```cmd
tlntadmn config sec /enable
```
Enables the Telnet server on the Windows machine.

### Disable Telnet Server
```cmd
tlntadmn config sec /disable
```
Disables the Telnet server on the Windows machine.

### Set Maximum Connections
```cmd
tlntadmn config maxconn 10
```
Sets the maximum number of Telnet connections to 10.

### Display Telnet Server Settings
```cmd
tlntadmn get setting
```
Displays the current configuration settings of the Telnet server.
:::tip
When using the tlntadmn command in Windows, make sure to run the command prompt as an administrator to avoid any permission issues.
:::

### How do I use tlntadmn in Windows?
To use the tlntadmn command in Windows, execute the following command:
```cmd
tlntadmn --help
```

### What is the purpose of the tlntadmn command?
The tlntadmn command is used in Windows for managing Telnet services and configurations.

### How can I list all Telnet sessions using tlntadmn?
To list all Telnet sessions using tlntadmn, you can use the following command:
```cmd
tlntadmn -s
```

### How do I start the Telnet service with tlntadmn?
You can start the Telnet service using tlntadmn with the following command:
```cmd
tlntadmn -s start
```

### Can I enable Telnet client and server using tlntadmn?
Yes, you can enable both Telnet client and server using tlntadmn. To enable the Telnet client, use this command:
```cmd
tlntadmn -i install
```

### How do I configure Telnet port settings with tlntadmn?
To configure Telnet port settings using tlntadmn, you can specify the port number with the following command:
```cmd
tlntadmn -p <port_number>
```

## Applications of the TLNTADMN Command

- Configure port information for Telnet
- Start/stop the Telnet service
- Manage Telnet sessions
- Configure Telnet server settings