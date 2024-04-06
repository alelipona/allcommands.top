---
title: TSCON command in Windows
description: Learn how to use the Windows tscon command to disconnect and reconnect a Remote Desktop Session. Find out the syntax, parameters, and options.
---

The Windows tscon command is a useful tool for managing Remote Desktop Sessions. It allows users to disconnect and reconnect to a session, providing flexibility and control. By understanding the syntax, parameters, and options of the tscon command, users can effectively manage their Remote Desktop connections.

## TSCON Syntax:
```cmd
tscon [sessionid] /dest:console
```

## Windows TSCON Options:
| Option    | Description                            |
|-----------|----------------------------------------|
| sessionid | Specifies the session ID to connect to |
| /dest     | Specifies the destination session (e.g., console) |

## TSCON Parameters:
| Parameter | Description                                   |
|-----------|-----------------------------------------------|
| sessionid | The numeric ID of the session to connect to   |
| /dest     | The destination session to connect to (e.g., console) |

:::caution
Exercise caution when using the `tscon` command as it deals with switching sessions, which can potentially disrupt work or cause loss of data if not used carefully.
:::
### Connect to Session 2
```cmd
tscon 2
```
Connects to session 2 on the local computer.

### Connect to Session 10 on Remote Computer “PC1”
```cmd
tscon /server:PC1 10
```
Connects to session 10 on the remote computer named "PC1".

### Connect to Session 1 with Credentials
```cmd
tscon 1 /password:12345
```
Connects to session 1 on the local computer, providing the password "12345".

### Disconnect Session ID 5
```cmd
tscon 5 /dest:console
```
Disconnects session 5 on the local computer.

### Query Session Status
```cmd
tscon /query
```
Displays information about all active sessions on the local computer.

### Connect to Session ID 3 Remotely
```cmd
tscon /server:PC2 3 /password:securePW
```
Connects to session 3 on a remote computer named "PC2", providing the password "securePW".

### Switch to Session 4
```cmd
tscon 4 /dest:console
```
Switches the session to session 4 on the local computer.

### Disconnect Specific Session
```cmd
tscon /dest:console /v
```
Disconnects the session specified by the /dest argument and displays additional information.
:::tip
When using the tscon command in Windows CMD, make sure to provide the correct session ID or session name to avoid any errors or unexpected behavior.
:::

### How do I use tscon in Windows?
To use the tscon command in Windows, execute the following command:
```cmd
tscon <sessionID | sessionname> [/password:<password>] [/v] [/vm]
```

### What is the purpose of the tscon command?
The tscon command is used to connect to an active session on a Windows system.

### How can I disconnect from a session using tscon?
To disconnect from a session using the tscon command, you can use the following syntax:
```cmd
tscon <sessionID | sessionname> /dest:console
```

### Can I use tscon to switch to a different session?
Yes, you can use the tscon command to switch to a specific session by providing the session ID or session name.

### How do I list active sessions using tscon?
To list active sessions on a Windows system using the tscon command, you can use the following command:
```cmd
query session
```

### Is it possible to reconnect to a disconnected session with tscon?
Yes, you can use the tscon command to reconnect to a disconnected session by specifying the session ID or session name.

### What are the options available with the tscon command?
The tscon command supports multiple options including specifying a password for the session, displaying verbose output, and controlling virtual machines.

### How do I log off a session using tscon?
To log off a session using the tscon command, you can use the following syntax:
```cmd
tscon <sessionID | sessionname> /dest:console
```

### Can I use tscon to interact with remote desktop sessions?
Yes, the tscon command can be used to interact with remote desktop sessions by specifying the session ID or session name.

## Applications of the TSCON Command

- Disconnect a remote desktop session
- Manage terminal server sessions
- Reconnect to a disconnected session