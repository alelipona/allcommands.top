---
title: What is HOSTNAME Windows command?
description: Learn how to use the HOSTNAME command in Windows to view or change the computer's name. 
---

The Windows hostname command allows users to display or alter the name of the computer. It is a useful tool for identifying and managing network connections.

## HOSTNAME Syntax:
```cmd
hostname [options] [parameter]
```

## HOSTNAME Options:
| Option    | Description                            |
|-----------|----------------------------------------|
| /?        | Displays help for the hostname command.|

:::caution
Be cautious when using the hostname command in Windows as it may change the computer's name, affecting network connectivity and system settings. Double-check the parameters before executing the command.
:::

## Parameters:
| Parameter        | Description                                |
|------------------|--------------------------------------------|
| NewHostName      | Specifies the new host name for the computer.|
## HOSTNAME Command Usage Examples:
### Display Hostname
```cmd
hostname
```
Displays the hostname of the computer.

### Set Hostname
```cmd
hostname NewHostName
```
Sets the hostname of the computer to "NewHostName".

### Display IP Address of Hostname
```cmd
hostname -i
```
Displays the IP address associated with the hostname of the computer.

### Display DNS Domain Name
```cmd
hostname -d
```
Displays the DNS domain name part of the FQDN (Fully Qualified Domain Name) of the computer.

### Reset Hostname to Default
```cmd
hostname
```
Resets the hostname of the computer to the default hostname.
:::tip
When using the hostname command in Windows CMD, make sure to run the command with the necessary permissions if you encounter any "Access Denied" errors. Additionally, the hostname command can be useful for identifying the name of the computer within a network or for troubleshooting network-related issues.
:::

## How to use HOSTNAME?:
### How do I use hostname in Windows?
To use the hostname command in CMD, execute the following command:
```cmd
hostname
```

### What is the purpose of the hostname command in Windows?
The hostname command in Windows is used to display the name of the current computer within a network.
```cmd
hostname
```

### How can I set a new hostname using CMD in Windows?
To set a new hostname in Windows CMD, you can use the following command:
```cmd
hostname NewHostName
```

### Is there a way to display the fully qualified domain name (FQDN) of the computer using the hostname command?
Yes, you can display the FQDN of the computer by running the following command:
```cmd
hostname /f
```

### Can I find the IP address associated with the hostname using CMD in Windows?
Yes, you can find the IP address associated with the hostname by using the following command:
```cmd
hostname -i
```

### How do I show all the available options and syntax for the hostname command in CMD?
To display all available options and syntax for the hostname command, you can use the following command:
```cmd
hostname /?
```

### Is it possible to clear the hostname of the computer using the CMD command?
Yes, you can clear the hostname of the computer by using the following command:
```cmd
hostname ""
```

### How do I display the NetBIOS name of the computer in Windows using the hostname command?
To display the NetBIOS name of the computer, you can use the following command:
```cmd
hostname /n
```
## Applications of the HOSTNAME Command

- Display the current host name of the computer
- Change the host name of the computer