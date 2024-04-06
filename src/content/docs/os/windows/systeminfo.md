---
title: SYSTEMINFO Windows command
description: Retrieve detailed information about your Windows system with the systeminfo command.
---

The Windows systeminfo command provides a comprehensive overview of your system's configuration, including hardware, software, and network details. This utility can be used to check system uptime, operating system version, installed updates, network statistics, and much more. By running systeminfo from the command prompt, users can quickly access crucial information about their Windows environment for troubleshooting, monitoring, and maintenance purposes.

## SYSTEMINFO Syntax:
```cmd
systeminfo [/s <computer>] [/u <domain>\<user> [/p [<password>]]] [/fo {TABLE | LIST | CSV}] [/nh] [/?]
```

## Options:
| Option           | Description                                      |
|------------------|--------------------------------------------------|
| /s <computer>    | Specifies the remote system to connect to.       |
| /u <user>        | Sets the username for the remote system.         |
| /p <password>    | Specifies the password for the username.         |
| /fo              | Specifies the output format (TABLE, LIST, CSV).  |
| /nh              | Suppresses column headers in the output.         |
| /?               | Displays help for the command.                   |

## Parameters:
| Parameter         | Description                                |
|-------------------|--------------------------------------------|
| /s <computer>     | Specifies the remote system to query.      |
| /u <domain>\<user>| Sets the username along with the domain.    |
| /p <password>     | Specifies the password for the user.       |
| /fo               | Specifies the format of the output.         |
| /nh               | Suppresses column headers in the output.   |
| /?                | Displays help information for the command. |

:::caution
Exercise caution when using the systeminfo command with sensitive data such as usernames and passwords, as they may be visible in the command history or output.
:::
## SYSTEMINFO CMD Examples:
### Display Basic System Information
```cmd
systeminfo
```
Displays basic system information like OS name, version, and system manufacturer.

### Display Detailed System Information
```cmd
systeminfo /fo list
```
Displays detailed system information in a list format.

### Display Information for a Remote Computer
```cmd
systeminfo /s ComputerName
```
Displays system information for a remote computer specified by "ComputerName".

### Display Information in CSV Format
```cmd
systeminfo /fo csv
```
Displays system information in CSV format.

### Display Hotfix Information
```cmd
systeminfo /fo table /nh
```
Displays installed hotfix information in table format excluding column headers.

### Display Information as XML
```cmd
systeminfo /fo xml
```
Displays system information in XML format.
:::tip
When using the systeminfo command in Windows, make sure to run it from an elevated Command Prompt to ensure accurate and complete system information.
:::

### How do I use systeminfo in Windows?
To use the systeminfo command in Windows, execute the following command:
```cmd
systeminfo
```

### What is the purpose of the /s option in systeminfo?
The /s option in the systeminfo command allows you to specify a remote system to gather system information from. This can be useful for checking the configuration of another computer on the network.
```cmd
systeminfo /s <remote_system_name>
```

### How can I get a list of all hotfixes installed on my system using systeminfo?
To retrieve a list of all hotfixes installed on your system with the systeminfo command, run the following command:
```cmd
systeminfo /fo table
```

### How do I display only the software environment information with systeminfo?
To display only the software environment information using systeminfo, use the /swe switch in the command as follows:
```cmd
systeminfo /swe
```

### What is the significance of the /u and /p options in systeminfo?
The /u and /p options in the systeminfo command are used to provide a username and password for accessing a remote system. This is necessary when querying system information from a remote computer that requires authentication.
```cmd
systeminfo /s <remote_system_name> /u <username> /p <password>
```

### How can I export the system information displayed by systeminfo to a text file?
You can export the system information displayed by systeminfo to a text file by using the output redirection feature in Windows. Simply run the command with the desired options and append "> output.txt" to the command to save the output to a file.
```cmd
systeminfo /fo table > output.txt
```

### Is it possible to customize the output format of systeminfo?
Yes, you can customize the output format of systeminfo by using the /fo switch followed by the desired format. For example, you can display the output in list format by using the /fo list option.
```cmd
systeminfo /fo list
```
## Applications of the SYSTEMINFO Command

- Retrieve detailed system information
- List installed hotfixes
- Display current system configuration
- Check system security settings
- Verify system resources and utilization
- Identify installed software and components
- View system boot time
- Monitor system uptime