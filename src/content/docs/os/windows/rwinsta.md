---
title: RWINSTA command in Windows
description: Windows rwinsta command allows users to reset a remote desktop session, providing a quick and efficient way to manage user sessions on a Windows server.
---

The Windows rwinsta command is a useful tool for system administrators to manage remote desktop sessions on Windows servers. With this command, users can reset sessions, freeing up system resources and ensuring smooth operation. By specifying the session ID, administrators can disconnect or log off users remotely, without the need for physical access to the server. This command is particularly helpful in environments where multiple users access the server concurrently, allowing for efficient session management and improved system performance.

## RWINSTA Syntax:
```cmd
rwinsta [SessionID] [/V]
```

## Windows RWINSTA Options:
| Option   | Description                                     |
|----------|-------------------------------------------------|
| SessionID| Specifies the ID of the session to reset.       |
| /V       | Displays information about the actions performed.|

## RWINSTA Parameters:
| Parameter | Description                                       |
|-----------|---------------------------------------------------|
| SessionID | The ID of the session to reset.                   |

:::caution
Exercise caution when using the rwinsta command as it can immediately log off a user session without warning or confirmation.
:::
## How to use RWINSTA command:
### Log off a specific session ID
```cmd
rwinsta 2
```
Logs off the session with the ID of 2.
### Log off a session remotely
```cmd
rwinsta /server:Server01 3
```
Logs off the session with the ID of 3 on the remote server Server01.
### List all sessions on a remote server
```cmd
rwinsta /server:Server02
```
Lists all active sessions on the remote server Server02.
### Display detailed information about a specific session
```cmd
rwinsta /server:Server03 4 /v
```
Displays detailed information about the session with ID 4 on Server03.
### Log off all disconnected sessions
```cmd
rwinsta /server:Server04 /disc
```
Logs off all disconnected sessions on the remote server Server04.
### Reset a session on a remote server
```cmd
rwinsta /server:Server05 5 /reset
```
Resets the session with ID 5 on the remote server Server05.
### Log off a specific session and force the disconnection
```cmd
rwinsta /server:Server06 6 /v /f
```
Logs off the session with ID 6 on Server06 and forces the disconnection.
### Log off all sessions on a remote server
```cmd
rwinsta /server:Server07 /all
```
Logs off all sessions on the remote server Server07.
:::tip
When using the rwinsta command in Windows CMD, make sure to double-check the session ID you want to disconnect, as terminating the wrong session can lead to loss of data and potentially disrupt the system.
:::

### How do I use rwinsta in Windows?
To use the rwinsta command in Windows, execute the following command:
```cmd
rwinsta <SessionID>
```

### How can I disconnect a specific user session using rwinsta?
To disconnect a specific user session with rwinsta, run the command with the session ID of the user you wish to log off:
```cmd
rwinsta 2
```

### How do I force log off a user session with rwinsta?
To force log off a user session using rwinsta, add the /server option followed by the target server name and /v (verbose) flag as shown:
```cmd
rwinsta /server:ServerName /v
```

### Can I list all Remote Desktop (RDP) sessions with the rwinsta command?
Yes, you can list all Remote Desktop sessions using a separate command before using rwinsta. To list all sessions, execute:
```cmd
qwinsta
```

### How do I remotely log off another user using rwinsta from the command line?
To remotely log off another user from the command line with rwinsta, specify both the server name and the session ID for the remote logoff operation:
```cmd
rwinsta /server:ServerName <SessionID>
```

### What is the difference between rwinsta and logoff commands in Windows CMD?
While rwinsta is used to reset (log off) a Remote Desktop Protocol (RDP) session, the logoff command is used to close a local user session. rwinsta is specifically for RDP sessions.

### How do I log off a user with a temporary desktop session using the rwinsta command?
To log off a user with a temporary desktop session in Windows CMD with rwinsta, specify the session ID of the temporary session you want to disconnect:
```cmd
rwinsta 3
```

### Can rwinsta be used to log off multiple user sessions simultaneously in Windows?
Yes, rwinsta can be used to log off multiple user sessions simultaneously. To do this, run rwinsta commands for each session ID you wish to log off:
```cmd
rwinsta 1
rwinsta 2
rwinsta 3
```

## Applications of the RWINSTA Command

- Log off a user from a Remote Desktop session
- Disconnect a Remote Desktop session
- List the sessions on a Remote Desktop Session Host server