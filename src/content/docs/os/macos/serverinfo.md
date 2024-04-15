---
title: serverinfo MacOS command
description: Discover how to use the serverinfo command in MacOS to access information about the server such as version, hardware, and more.
---

The `serverinfo` command in MacOS provides users with a convenient way to retrieve essential information about the server they are connected to. By simply running this command in the Terminal, users can access details such as the server version, hardware specifications, IP address, and more. This information can be crucial for troubleshooting, server management, and monitoring purposes. Whether you are a system administrator or a curious user, the `serverinfo` command can be a valuable tool in your MacOS toolkit.

## serverinfo Syntax:
```bash
serverinfo [option] [parameter]
```
## serverinfo Options:
| Options | Description                   |
|---------|-------------------------------|
| -a      | Display all server information|
| -p      | Display server performance    |
| -d      | Display detailed server info  |
| -h      | Display help/documentation    |

:::caution
Exercise caution when using the serverinfo command, as it provides detailed system information that may be sensitive or confidential. Make sure you have the necessary permissions before running this command.
:::

## Parameters:
| Parameters   | Description                            |
|--------------|----------------------------------------|
| [option]     | Specifies the type of server information to display. Use -a for all, -p for performance, -d for detailed, or -h for help.|
| [parameter]  | Additional parameter or settings specific to the selected option. |
## serverinfo Command Usage Examples:
### Display Basic System Information
```bash
serverinfo --basic
```
Displays basic system information such as the system version, serial number, and hardware UUID.

### List Hardware Details
```bash
serverinfo --hardware
```
Lists detailed hardware information including the model identifier, processor type, and memory details.

### Show Network Configuration
```bash
serverinfo --network
```
Shows the network configuration settings such as the MAC address, network interfaces, and IPv4/IPv6 addresses.

### View Software Details
```bash
serverinfo --software
```
Views software-related information like the operating system version, kernel version, and boot volume details.

### Display Time Machine Status
```bash
serverinfo --timemachine
```
Displays the Time Machine backup status including the backup destination, interval, and last backup time.
:::tip
Make sure to read the man page for the `serverinfo` command (`man serverinfo`) to understand all the available options and how to use them effectively.
:::

### How do I use serverinfo in MacOS?
To use the serverinfo command in bash, execute the following command:
```bash
serverinfo
```

### What information does serverinfo provide in MacOS?
The `serverinfo` command in MacOS provides various system information such as the hostname, kernel version, boot time, and more.
```bash
serverinfo
```

### How can I get a specific system version with serverinfo in MacOS?
You can use the `system_version` option with the `serverinfo` command to retrieve the system version information.
```bash
serverinfo --system_version
```

### How do I display the hardware information with serverinfo in MacOS?
To display hardware information using the `serverinfo` command, you can use the `hardware` option.
```bash
serverinfo --hardware
```

### How can I check the networking details with serverinfo in MacOS?
To check networking details using the `serverinfo` command, you can use the `network` option.
```bash
serverinfo --network
```

### How do I get software details with serverinfo in MacOS?
You can retrieve software details using the `software` option with the `serverinfo` command.
```bash
serverinfo --software
```

### How can I display the time zone information using serverinfo in MacOS?
To display the time zone information with the `serverinfo` command, you can use the `time` option.
```bash
serverinfo --time
```

### How do I get details about the system’s storage with serverinfo in MacOS?
You can get details about the system's storage using the `storage` option with the `serverinfo` command.
```bash
serverinfo --storage
```
## Applications of the serverinfo command

- Gathering information about the server
- Checking server status
- Monitoring server health
- Troubleshooting server issues