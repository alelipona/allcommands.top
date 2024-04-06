---
title: Windows NET1 command
description: Learn how to use the Windows net1 command to manage network resources efficiently.
---

The Windows net1 command is used to manage network resources such as user accounts, services, and shares. This command allows users to view or modify the network configuration, connect to shared resources, disconnect users from a shared resource, and more. By utilizing the net1 command, administrators can efficiently manage network resources and troubleshoot network-related issues.

## NET1 Syntax:
```cmd
net1 [option] [parameter]
```
## Options:
| Option   | Description                           |
|----------|---------------------------------------|
| /help    | Displays help for the net1 command.   |
| /add     | Adds a new user or group.             |
| /delete  | Deletes a user or group.              |
| /modify  | Modifies a user or group.             |
| /view    | Displays information about users.      |

## Parameters:
| Parameter | Description                            |
|-----------|----------------------------------------|
| username  | Specifies the username.                |
| group     | Specifies the group name.              |
| fullname  | Specifies the full name of a user.      |
| description | Specifies a description for a user or group. |
:::caution
Exercise caution when using the net1 command as it can directly impact user and group management on the system. Make sure to have the necessary permissions before executing any operations.
:::
## NET1 Usage:
### Create a New Network Connection
```cmd
net1 use Z: \\server\share
```
Creates a new network connection to the specified server and share path.

### List All Shared Resources on a Server
```cmd
net1 view \\server_name
```
Displays a list of all the shared resources on the specified server.

### Disconnect from a Network Share
```cmd
net1 use Z: /delete
```
Disconnects the network drive Z: from the computer.

### Display Information About a User or Computer
```cmd
net1 user username
```
Displays detailed information about a specific user account.
:::tip
When using the net1 command in Windows, make sure to run it with administrative privileges to avoid any permission issues. Additionally, always double-check the syntax and options of the command to ensure the desired actions are performed accurately.
:::

## Common Questions on NET1 Usage:

### How do I use net1 in Windows?
To use the net1 command in Windows, execute the following command:
```cmd
net1 --option <value>
```

### How can I list all open files on a network server using net1?
To list all open files on a network server, use the following command:
```cmd
net1 file /server:<serverName>
```

### How do I view a list of shared resources on a server with net1 in Windows?
To view a list of shared resources on a server, run the command:
```cmd
net1 view \\serverName
```

### What is the command to disconnect a network share in Windows using net1?
To disconnect a network share, use the following command:
```cmd
net1 use /DELETE
```

### How can I display domain user account information with net1 in Windows?
To display domain user account information, execute the command:
```cmd
net1 user /domain
```

### How do I force a user to log off in Windows using the net1 command?
To force a user to log off, run the following command:
```cmd
net1 user <username> /DELETE
```

### What is the command syntax to manage network groups in Windows using net1?
To manage network groups, use the command syntax:
```cmd
net1 group /<action> <groupName>
```

## Applications of the NET1 Command

1. `NET1 SHARE`: Displays or configures file shared resources.
2. `NET1 USE`: Connects a computer to or disconnects a computer from a shared resource or displays information about computer connections.
3. `NET1 VIEW`: Displays a list of resources being shared on a computer.
4. `NET1 USER`: Adds or modifies user accounts, or displays user account information.
5. `NET1 GROUP`: Adds, deletes, displays, or modifies global groups.
6. `NET1 LOCALGROUP`: Adds, deletes, displays, or modifies local groups.
7. `NET1 ACCOUNTS`: Sets the domain user account and password policy.
8. `NET1 COMPUTER`: Manages secure channel passwords.
9. `NET1 CONFIG`: Redisplay the current configuration.
10. `NET1 CONTINUE`: Restarts a service.