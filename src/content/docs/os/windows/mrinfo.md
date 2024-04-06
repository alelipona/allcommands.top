---
title: Windows MRINFO command
description: Easily gather multicast information with the Windows MRINFO command. Learn how to use this command efficiently for network troubleshooting.
---

The Windows MRINFO command is a powerful tool for gathering multicast information on Windows systems. By using this command, network administrators can quickly retrieve essential data about multicast routing and forwarding, helping them diagnose and troubleshoot network issues effectively. MRINFO provides detailed insights into multicast group memberships, neighbors, interfaces, timers, and more, making it a valuable asset for maintaining a healthy multicast environment. With its user-friendly syntax and informative output, the Windows MRINFO command simplifies the process of monitoring and managing multicast traffic, enabling administrators to keep their networks running smoothly.

## MRINFO Syntax:
```cmd
mrinfo [options] [Parameters]
```
## Options:
| Option | Description                     |
|--------|---------------------------------|
| -v     | Verbose output                  |
| -d     | Debug output                    |
| -h     | Display help information         |

## Parameters:
| Parameter   | Description                             |
|-------------|-----------------------------------------|
| IPAddress   | IP address of the target machine        |
| HostName    | Hostname of the target machine          |
| FileName    | Name of the file to get information for  |

:::caution
Exercise caution when using the mrinfo command as it may provide sensitive information about the target machine. Make sure you have permission to access the specified IP address or hostname before running the command.
:::
## MRINFO Usage:
### Display Interface and Routing Information
```cmd
mrinfo
```
This command displays interface and routing information for the local system.

### Display Detailed Interface Information
```cmd
mrinfo -i
```
Displays detailed interface information including IP addresses and interface status for the local system.

### Display Summary of Routing Information
```cmd
mrinfo -r
```
Provides a summary of routing information for the local system.

### Display Additional System Information
```cmd
mrinfo -s
```
Displays additional system information such as hostname, OS version, and time zone.
:::tip
When using the mrinfo command in Windows, make sure to run the command with the necessary options and values to retrieve the desired information about multicast routing.
:::

## Common Questions on MRINFO Usage:

### How do I use mrinfo in Windows?
To use the mrinfo command in Windows, execute the following command:
```cmd
mrinfo --source 192.168.1.1
```

### What is the purpose of the mrinfo command in Windows?
The mrinfo command in Windows is used to query an IPv4 router to discover the list of interfaces on which it expects to receive IP multicast group membership reports.

### How can I display the multicast routes using mrinfo in Windows?
You can display multicast routes by executing the mrinfo command with the `--routes` option. Here is an example command:
```cmd
mrinfo --routes
```

### How do I specify a timeout value when using mrinfo in Windows?
To specify a timeout value when using the mrinfo command in Windows, you can use the `--timeout` option followed by the desired timeout value in seconds. Here is an example:
```cmd
mrinfo --timeout 5
```

### Can I obtain detailed information about a specific multicast group with mrinfo in Windows?
Yes, you can obtain detailed information about a specific multicast group by running the mrinfo command with the `--group` option followed by the multicast group IP address. Here is an example:
```cmd
mrinfo --group 239.1.1.1
```

### How do I list the multicast routers using mrinfo in Windows?
You can list the multicast routers by executing the mrinfo command with the `--routers` option. Here is an example command:
```cmd
mrinfo --routers
```

### Is it possible to get verbose output from the mrinfo command in Windows?
Yes, you can get verbose output by running the mrinfo command with the `--verbose` option. Here is an example:
```cmd
mrinfo --verbose
```

## Applications of the MRINFO Command
- Check multicast group membership information
- Display multicast routing table information
- Verify multicast routing information on a Windows system
- Troubleshoot multicast routing configuration issues