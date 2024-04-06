---
title: NFSADMIN Windows Command Guide
description: Manage NFS settings in Windows using the nfsadmin command. Learn how to configure NFS client and server settings efficiently.
---

The Windows nfsadmin command allows users to manage NFS settings efficiently on Windows systems. With this command, users can configure various NFS client and server settings to ensure optimal performance and connectivity. Whether you need to set up NFS shares, modify mount options, or troubleshoot NFS-related issues, the nfsadmin command provides a comprehensive set of options to meet your needs. Streamline your NFS configuration process with the nfsadmin command and ensure seamless NFS functionality on your Windows system.
## NFSADMIN Syntax:
```cmd
nfsadmin [option] [parameter]
```
## Options:
| Option | Description                   |
|--------|-------------------------------|
| -o     | Displays the current NFS server configuration. |
| -s     | Sets the NFS server configuration.           |
| -u     | Unsets the NFS server configuration.         |

## Parameters:
| Parameter | Description                                       |
|-----------|---------------------------------------------------|
| port      | Specifies the port number for the NFS server.     |
| proto     | Specifies the protocol version for the NFS server.|

:::caution
Exercise caution when using the nfsadmin command, as it can modify the configuration of the NFS server and potentially impact its functionality.
:::
## NFSADMIN Command Samples:
### Display NFS client settings
```cmd
nfsadmin client -o show
```
This command displays the current NFS client settings.

### Display NFS server settings
```cmd
nfsadmin server -o show
```
Displays the current NFS server settings.

### Enable NFS client logging
```cmd
nfsadmin client -o logging on
```
Enables logging for NFS client operations.

### Disable NFS client logging
```cmd
nfsadmin client -o logging off
```
Disables logging for NFS client operations.

### Start NFS client service
```cmd
nfsadmin client -o start
```
Starts the NFS client service.

### Stop NFS client service
```cmd
nfsadmin client -o stop
```
Stops the NFS client service.

### Flush NFS client cache
```cmd
nfsadmin client -o clean
```
Cleans the client's NFS cache.
:::tip
When using the nfsadmin command in Windows, make sure to run the command prompt as an administrator to avoid any permission-related issues.
:::

## NFSADMIN FAQ:
### How do I use nfsadmin in Windows?
To use the nfsadmin command in Windows, execute the following command:
```cmd
nfsadmin --list
```

### What is the purpose of the nfsadmin --list command?
The nfsadmin --list command is used to display the current NFS server configuration on the Windows system.
```cmd
nfsadmin --list
```

### How can I start the NFS service using nfsadmin in Windows?
You can start the NFS service using the following command:
```cmd
nfsadmin --start
```

### How do I stop the NFS service with nfsadmin in Windows?
To stop the NFS service using nfsadmin in Windows, use the command below:
```cmd
nfsadmin --stop
```

### How can I configure NFS share permissions using nfsadmin?
To configure NFS share permissions with nfsadmin, use the following command structure:
```cmd
nfsadmin --permission <share_name> /user:<user_name>:<permission_level>
```

### What is the command syntax for exporting an NFS share with nfsadmin?
To export an NFS share using nfsadmin, use the following command syntax:
```cmd
nfsadmin --export <share_name> <path>
```

## Applications of the NFSADMIN Command

- List NFS client settings: `nfsadmin client [Options]`
- List NFS server settings: `nfsadmin server [Options]`
- Manage NFS server identity: `nfsadmin server identity [Options]`
- Set server quota limits: `nfsadmin server quota [Options]`
- Display server statistics: `nfsadmin server stats [Options]`
- Manage mount points for NFS shares: `nfsadmin mapping [Options]`