---
title: GETMAC Windows Command Guide
description: Guide to using the Windows getmac command effectively for retrieving MAC addresses of network adapters.
---

The Windows getmac command is a powerful tool for retrieving the Media Access Control (MAC) address of network adapters on a Windows system. By running this command in the command prompt, you can quickly access the MAC address information for all active network interfaces. This can be useful for network troubleshooting, security monitoring, and system administration tasks. The getmac command provides a simple and efficient way to gather crucial network adapter details without the need for third-party software.

## GETMAC Syntax:
```cmd
getmac [/s Computer [/u [Domain]User [/p Password]]] [/fo {TABLE | LIST | CSV}] [/nh] [/v]
```
## Options:
| Option | Description                                |
|--------|--------------------------------------------|
| /s     | Specifies the remote system to connect to.|
| /u     | Specifies the user context under which the command should execute.|
| /p     | Specifies the password for the user context.|
| /fo    | Specifies the format for the output.       |
| /nh    | Suppresses column headers in the output.  |
| /v     | Specifies that detailed information is displayed. |

## Parameters:
No Parameters for the getmac command.

:::caution
Exercise caution when using the getmac command, especially when specifying a remote system, username, and password via the /s, /u, and /p options. Make sure to provide secure credentials to prevent unauthorized access.
::: 
## GETMAC Command Samples:
### Display MAC Addresses for All Network Adapters
```cmd
getmac
```
Retrieves and displays the MAC addresses for all network adapters installed on the system.

### Display MAC Address for a Specific Network Adapter
```cmd
getmac /s "Local Area Connection"
```
Displays the MAC address for a specific network adapter, in this case, "Local Area Connection".

### Display MAC Addresses for Remote Computers
```cmd
getmac /s COMPUTER_NAME
```
Retrieves and displays the MAC addresses of network adapters on a remote computer specified by "COMPUTER_NAME".

### Display MAC Addresses in Detailed Format
```cmd
getmac /v
```
Shows detailed information along with the MAC addresses of all network adapters.

### Save MAC Addresses to a File
```cmd
getmac /fo csv > mac_addresses.csv
```
Saves the MAC addresses of all network adapters to a CSV file named "mac_addresses.csv".

### Display MAC Addresses in a Specific Order
```cmd
getmac /nh /v
```
Displays MAC addresses in a specific order by hiding the column headers (/nh) in detailed format (/v).

### Display Help Information for the GETMAC Command
```cmd
getmac /?
```
Shows the help information and usage instructions for the GETMAC command.
:::tip
When using the getmac command in Windows, make sure to run the command prompt as an administrator to ensure accurate results.
:::

## GETMAC FAQ:

### How do I use getmac in Windows?
To use the getmac command in Windows, execute the following command:
```cmd
getmac
```

### What is the purpose of the getmac command?
The getmac command in Windows is used to display the Media Access Control (MAC) address and list of network adapters on a system.

### How can I get the MAC addresses of remote computers using getmac?
You can get the MAC addresses of remote computers by using the following command:
```cmd
getmac /s <remote_computer_name>
```

### Can I export the results of the getmac command to a file?
Yes, you can export the results of the getmac command to a file using output redirection in the command:
```cmd
getmac > C:\path\to\output.txt
```

### How do I display the MAC addresses in a specific format with getmac?
To display the MAC addresses in a specific format, you can use the "/fo" flag with options like "table", "list", or "csv":
```cmd
getmac /fo csv
```

### Is it possible to get detailed information about network adapters with getmac?
Yes, you can get detailed information about network adapters by using the "/v" flag with the getmac command:
```cmd
getmac /v
```
## Applications of the GETMAC Command

- Display the MAC address of network adapters
- Obtain the MAC address for troubleshooting network connectivity issues
- Verify the MAC address of a computer for security purposes