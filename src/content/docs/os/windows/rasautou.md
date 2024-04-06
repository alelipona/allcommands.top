---
title: RASAUTOU command in Windows
description: Learn how to use the Windows rasautou command to manage Remote Access Service (RAS) authentication tokens and its parameters.
---

The rasautou command in Windows is used to manage Remote Access Service (RAS) authentication tokens. It can be used to add, delete, or display RAS authentication tokens. This command can also be used to control user access to a remote server. By using rasautou, users can manage their authentication tokens and maintain a secure connection to a remote server.

## RASAUTOU Syntax:
```cmd
rasautou [options] [parameters]
```

## Windows RASAUTOU Options:
| Option          | Description                   |
|-----------------|-------------------------------|
| /?              | Displays help for rasautou    |
| /C <command>    | Executes the specified command|
| /K <command>    | Executes the specified command and remains open |
| /H              | Sets history buffer size      |
| /I              | Interactive mode              |
| /W              | Ignores whitespace in parameter |

## RASAUTOU Parameters:
| Parameter     | Description                 |
|---------------|-----------------------------|
| program_name  | Specifies the program to run|
| command       | Specifies the command to run|

:::caution
Exercise caution when using the rasautou command, especially with elevated privileges, as it can execute commands with potential impact on the system.
:::
## How to use RASAUTOU command:
### Disconnect a RAS connection
```cmd
rasautou -d "My VPN Connection"
```
Disconnects the RAS connection named "My VPN Connection".

### List all RAS connections
```cmd
rasautou -l
```
Displays a list of all RAS connections.

### Show connection details
```cmd
rasautou -s "My Dial-Up Connection"
```
Displays detailed information about the RAS connection named "My Dial-Up Connection".

### Set the user credentials for a connection
```cmd
rasautou -u "My VPN Connection" JohnDoe mypassword
```
Sets the username and password for the RAS connection "My VPN Connection" to "JohnDoe" and "mypassword".

### Enable callback for a RAS connection
```cmd
rasautou -c "My VPN Connection"
```
Enables callback for the RAS connection named "My VPN Connection".

### Disable callback for a RAS connection
```cmd
rasautou -n "My VPN Connection"
```
Disables callback for the RAS connection named "My VPN Connection".

### Set the phonebook path for RAS connections
```cmd
rasautou -p "C:\CustomPhonebook"
```
Sets the phonebook path for RAS connections to "C:\CustomPhonebook".

### Show RAS statistics
```cmd
rasautou -t
```
Displays statistics related to RAS connections.
:::tip
When using the rasautou command in Windows, make sure to run the command prompt as an administrator to avoid permissions issues.
:::

### How do I use rasautou in Windows?
To use the rasautou command in Windows, execute the following command:
```cmd
rasautou --option <value>
```

### What is the purpose of the rasautou command in CMD?
The rasautou command in Windows CMD is used to manage remote access dial-up and VPN connections.

### How can I display all configured dial-up connections with rasautou?
You can display all configured dial-up connections using rasautou by running the following command:
```cmd
rasautou show dialin
```

### How do I disconnect a specific dial-up connection with rasautou?
To disconnect a specific dial-up connection using rasautou, use this command:
```cmd
rasautou hangup name "Connection Name"
```

### How can I view detailed information about a specific dial-up connection using rasautou?
To view detailed information about a specific dial-up connection with rasautou, use the following command:
```cmd
rasautou show config name "Connection Name"
```

### How do I create a new dial-up connection with rasautou in CMD?
To create a new dial-up connection using rasautou, execute the following command:
```cmd
rasautou add dialin InterfaceName="Connection Name" Address=<IP Address>
```

### Can I set the idle disconnect time for a dial-up connection with rasautou?
Yes, you can set the idle disconnect time for a dial-up connection using rasautou with the following command:
```cmd
rasautou set idledisconnecttime name "Connection Name" IDLETIMEINSECONDS
```

### How do I delete a specific dial-up connection with rasautou?
To delete a specific dial-up connection using rasautou, run the following command:
```cmd
rasautou delete dialin InterfaceName="Connection Name"
```

## Applications of the RASAUTOU Command

- Displays the Remote Access token of the current user.