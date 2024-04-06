---
title: What is NBTSTAT Windows command?
description: Learn about the NBTSTAT Windows command, its usage, options, and how to troubleshoot NetBIOS name resolution issues.
---

NBTSTAT is a Windows command used to troubleshoot NetBIOS name resolution issues. It displays NetBIOS over TCP/IP (NetBT) statistics, such as protocol statistics and current connections. This command can be helpful in identifying and resolving network-related problems.

## NBTSTAT Syntax:
```cmd
nbtstat [options] [parameters]
```

## NBTSTAT Options:

| Options | Descriptions                         |
|---------|--------------------------------------|
| -a      | Lists the NetBIOS name table of a remote computer |
| -A      | Lists the NetBIOS name table of a remote computer and includes the IP address |
| -c      | Lists the contents of the NetBIOS name cache           |
| -n      | Lists the local NetBIOS name table                  |
| -r      | Lists NetBIOS name resolution statistics     |
| -R      | Purges and reloads the remote cache name table     |
| -s      | Shows NetBIOS client and server sessions |
| -S      | Lists sessions in the NetBIOS session table      |
| -RR     | Releases and then refreshes the NetBIOS name cache      |

## Parameters:

| Parameters  | Descriptions                      |
|-------------|-----------------------------------|
|<ComputerName>| Specifies the name of the remote computer to view/modify NetBIOS information|
## NBTSTAT Command Usage Examples:
### Display NetBIOS Name Table
```cmd
nbtstat -n
```
This command displays the local NetBIOS name table, which contains the names of local NetBIOS resources.

### Display Remote NetBIOS Name Table Addresses
```cmd
nbtstat -A 192.168.1.1
```
This command displays the NetBIOS name table of a remote computer with the specified IP address (in this case, 192.168.1.1) along with its MAC address and group name information.

### Enumerate NetBIOS Shares
```cmd
nbtstat -S 192.168.1.1
```
Enumerates the NetBIOS shares on a remote computer with the IP address 192.168.. This Use this command to understand the and Use this command to  
### Use this command to Understand this command. Display the list of shared resources on the remote computer.

### Show NetBIOS Local Statistics
```cmd
nbtstat -s
```
Shows the statistics of local NetBIOS usage, including the number of sessions, users, and names being used on the computer.

### Release and Renew NetBIOS Names

```cmd
nbtstat -RR
```
Releases and renews NetBIOS names for both the local machine and the remote computer.


### Find NetBIOS conflicts with the IP address
```cmd
nbtstat -c
```
Identifies any conflicts in NetBIOS names that may arise between the local and remote computers. as
:::tip
When using the nbtstat command in Windows, make sure to run the command prompt as an administrator to avoid any permission issues.
:::

### How do I use nbtstat in Windows?
To use the nbtstat command in CMD, execute the following command:
```cmd
nbtstat -a computer_name
```

### What does the "-a" option do in nbtstat?
The "-a" option in nbtstat allows you to display the NetBIOS name table of a remote computer specified by "computer_name".
```cmd
nbtstat -a computer_name
```

### How can I view the local NetBIOS name cache with nbtstat?
To view the local NetBIOS name cache with nbtstat, use the following command:
```cmd
nbtstat -c
```

### How to refresh the NetBIOS name cache using nbtstat?
To refresh the NetBIOS name cache, you can use the following nbtstat command:
```cmd
nbtstat -R
```

### How to release and refresh the NetBIOS name cache in one go with nbtstat?
To release and refresh the NetBIOS name cache in one go, you can use the following nbtstat command:
```cmd
nbtstat -RR
```

### How to display NetBIOS name resolution statistics with nbtstat?
To display NetBIOS name resolution statistics, you can use the following nbtstat command:
```cmd
nbtstat -s
```

### Can nbtstat display NetBIOS names and their IP addresses?
Yes, nbtstat can display NetBIOS names and their IP addresses by using the following command:
```cmd
nbtstat -n
```

### How to show the NetBIOS name of a computer by its IP address using nbtstat?
To show the NetBIOS name of a computer by its IP address, use the following nbtstat command:
```cmd
nbtstat -A IP_address
```
## Applications of the NBTSTAT Command

- Display NetBIOS name cache
- Display NetBIOS name table
- Display NetBIOS scope ID
- Display NetBIOS adapter information
- Purge NetBIOS name cache
- Resolve NetBIOS name to IP address