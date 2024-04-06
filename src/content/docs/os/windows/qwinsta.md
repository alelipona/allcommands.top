---
title: All About QWINSTA Windows command
description: Complete guide on using the QWINSTA command in Windows for managing remote desktop sessions.
---

The Windows qwinsta command is a powerful tool for managing remote desktop sessions. With qwinsta, users can view information about active remote desktop sessions, such as session ID, username, state, and session type. This command is especially useful for system administrators who need to manage multiple remote desktop sessions on a Windows server. By using qwinsta, administrators can easily identify and disconnect idle or disconnected sessions, troubleshoot session-related issues, and improve overall system performance.

## QWINSTA Syntax:
```cmd
qwinsta [Optional parameters]
```
## Options:
| Option | Description                  |
|--------|------------------------------|
| /?     | Displays help for qwinsta     |

## Parameters:
| Parameter | Description                             |
|-----------|-----------------------------------------|
| SESSIONNAME| Filters the results to the specified session name |
| /SERVER:ServerName | Specifies the remote server to connect to | 

:::caution
Caution: Ensure that you have the necessary permissions to run qwinsta command, especially when using it on remote servers. Misuse of this command can impact system stability and security.
::: 
## QWINSTA CMD Examples:
### List all Remote Desktop Sessions
```cmd
qwinsta
```
Display a list of all active Remote Desktop sessions on the system.

### Get Detailed Information of Specific Session ID
```cmd
qwinsta 2
```
Retrieve detailed information for the specific session ID "2".

### Logoff a Remote Desktop Session
```cmd
logoff 3
```
Log off the Remote Desktop session with the session ID "3".

### Display Help Information for QWINSTA
```cmd
qwinsta /?
```
View the help and usage information for the QWINSTA command.

### Filter the Output by Username
```cmd
qwinsta /server:computername /filter:user=username
```
Filter the output to display Remote Desktop sessions belonging to a specific username on the specified server.

### Show Session Information in a List Format
```cmd
qwinsta /server:computername /mode:table
```
Display session information in a tabular format for easier readability.
:::tip
When using the qwinsta command in Windows, make sure to run it with administrative privileges to avoid any access or permission issues.
:::

## QWINSTA Command Help Center:

### How do I use qwinsta in Windows?
To use the qwinsta command in Windows, execute the following command:
```cmd
qwinsta
```

### What does qwinsta command do in Windows?
The qwinsta command in Windows is used to display information about Remote Desktop Services sessions.

### How can I list all Remote Desktop Sessions using qwinsta?
To list all Remote Desktop Sessions using qwinsta, you can run the command:
```cmd
qwinsta /server:servername
```

### How to filter the results of qwinsta based on a specific RDS session state?
You can filter the results of qwinsta based on a specific RDS session state by using the following command:
```cmd
qwinsta | find "Disc"
```

### How to log off a user session with qwinsta?
To log off a user session using qwinsta, you can run the command:
```cmd
rwinsta <sessionid>
```

### How to retrieve detailed information about a specific session with qwinsta?
To retrieve detailed information about a specific session using qwinsta, execute the command:
```cmd
qwinsta <sessionid>
```

### Can qwinsta be used to query Remote Desktop Session Host servers?
Yes, qwinsta can be used to query Remote Desktop Session Host servers by specifying the server name in the command:
```cmd
qwinsta /server:RDSServerName
```

### How to display the session ID along with the session names using qwinsta?
To display the session ID along with the session names using qwinsta, run the command:
```cmd
qwinsta /v
```
## Applications of the QWINSTA Command

- Check the active sessions on a Windows server
- Display information about Terminal Services sessions
- Disconnect or log off a user session from the command line