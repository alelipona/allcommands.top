---
title: Windows SHOWMOUNT command
description: Learn how to use the Windows showmount command to display mounted file systems on NFS servers.
---

The Windows showmount command is used to display the mounted file systems on NFS servers. This command helps users to view the shared directories and resources on remote NFS servers. By running the showmount command with specific options, users can retrieve information about mounted directories, hosts, or exports. This can be useful for troubleshooting, managing network shares, and ensuring proper connectivity between NFS clients and servers. The showmount command is an essential tool for system administrators working with NFS environments on Windows systems.
## SHOWMOUNT Syntax:
```cmd
showmount [option] [parameter]
```
## Options:
| Option                | Description                                |
|-----------------------|--------------------------------------------|
| -e                    | List the exports available on the server   |
| -d                    | Dump all clients that access the server    |
| -a                    | List all clients that access the server    |

## Parameters:
| Parameter             | Description                                |
|-----------------------|--------------------------------------------|
| Server               | Specifies the hostname or IP address of the server to query |

:::caution
Exercise caution when using the showmount command as it can expose sensitive information about server exports and client accesses. Only use this command on authorized systems with appropriate permissions.
:::
## SHOWMOUNT Usage:
### Show all exported directories
```cmd
showmount -e server1
```
Displays all directories that are currently exported by the server named "server1".

### Show clients mounting a specific directory
```cmd
showmount -a /path/to/directory
```
Lists all clients that have mounted the specified directory "/path/to/directory".

### Display only the list of directories
```cmd
showmount -d server1
```
Shows only the directories being exported by the server named "server1".

### Show detailed information for all exports
```cmd
showmount -a -e server1
```
Provides detailed information about all exports on the server "server1", including the clients mounting each exported directory.
:::tip
When using the showmount command in Windows, it is important to ensure that you have the necessary permissions and network access to query the NFS server. Additionally, make sure the NFS client is installed and properly configured on your Windows system before using the showmount command.
:::

## Common Questions on SHOWMOUNT Usage:
### How do I use showmount in Windows?
To use the showmount command in Windows, execute the following command:
```cmd
showmount --help
```

### What is the purpose of showmount in Windows?
The showmount command in Windows is used to display information about NFS (Network File System) exports on a specified NFS server.
```cmd
showmount -e nfs_server_address
```

### How can I list all NFS shares using showmount in Windows?
To list all NFS shares on a specific server in Windows, you can use the showmount command with the "--all" option.
```cmd
showmount --all nfs_server_address
```

### Can showmount display only specific NFS shares in Windows?
Yes, you can use the showmount command with the "-d" option followed by the directory path to display specific NFS shares in Windows.
```cmd
showmount -d /path/to/directory nfs_server_address
```

### How to showmount NFS shares with their clients in Windows?
To display NFS shares along with the client IP addresses that have currently mounted them in Windows, use the showmount command with the "-a" option.
```cmd
showmount -a nfs_server_address
```

### Is it possible to force unmount NFS shares using showmount in Windows?
Yes, you can force unmount NFS shares by using the showmount command with the "-f" option followed by the NFS server address and the share path.
```cmd
showmount -f nfs_server_address:/path/to/share
```

### How do I display verbose output with showmount in Windows?
To show verbose output while using the showmount command in Windows, you can include the "-v" option in your command.
```cmd
showmount -v nfs_server_address
```
## Applications of the SHOWMOUNT Command

- Display exported directories for NFS server