---
title: TSDISCON Windows Command Guide
description: Learn how to use the Windows tsdiscon command to disconnect a Remote Desktop Session. 
---

The Windows tsdiscon command is used to disconnect a Remote Desktop Session. This command is helpful for managing sessions remotely and can be particularly useful in environments where multiple users are connecting to a single machine. By using tsdiscon, you can quickly disconnect sessions without logging off the user, allowing them to resume their work later.
## TSDISCON Syntax:
```cmd
tsdiscon
```
## Options:
| Option    | Description                   |
|-----------|-------------------------------|
| None      | Disconnect the current session|

## Parameters:
| Parameter | Description                     |
|-----------|---------------------------------|
| None      | No parameters for this command  |

:::caution
Caution: Make sure to save any work before using the `tsdiscon` command as it will disconnect the current session without warning.
:::
## TSDISCON Command Samples:
### Disconnect the Remote Desktop Session for a Specific User
```cmd
tsdiscon /server:192.168.1.5 /v:USERNAME
```
Disconnects the remote desktop session for a specific user named "USERNAME" on the server with IP address "192.168.1.5".

### Disconnect the Current User from the Remote Desktop Session
```cmd
tsdiscon
```
Disconnects the current user from the remote desktop session they are logged into.

### Disconnect a Remote Desktop Session by Session ID
```cmd
tsdiscon /id:2
```
Disconnects the remote desktop session with the specified Session ID, in this case, Session ID 2.

### Disconnect a User from a Remote Server
```cmd
tsdiscon /server:192.168.1.10 /v:USERNAME
```
Disconnects the user named "USERNAME" from a remote server with the IP address "192.168.1.10".

### Disconnect All Remote Desktop Sessions
```cmd
tsdiscon /server:192.168.1.20 /dest:*
```
Disconnects all remote desktop sessions on the server with the IP address "192.168.1.20".

### Disconnect a Specific User from the Current Remote Desktop Session
```cmd
tsdiscon /v:USERNAME
```
Disconnects the specified user named "USERNAME" from the current remote desktop session.

### Disconnect a User from a Remote Desktop Session with a Specific Session ID
```cmd
tsdiscon /id:3 /v:USERNAME
```
Disconnects the user named "USERNAME" from the remote desktop session with the Session ID of 3.
:::tip
When using the tsdiscon command in Windows, make sure to run the command with administrative privileges to avoid any permission issues.
:::

## TSDISCON FAQ:
### How do I use tsdiscon in Windows?
To use the tsdiscon command in Windows, execute the following command:
```cmd
tsdiscon
```

### What is the purpose of the tsdiscon command?
The tsdiscon command is used to disconnect a Remote Desktop Session Host (RD Session Host) session.

### How can I disconnect a specific session using tsdiscon?
To disconnect a specific session, you can specify the session ID in the tsdiscon command. For example:
```cmd
tsdiscon <sessionID>
```

### Can I use tsdiscon without specifying a session ID?
Yes, you can use tsdiscon without specifying a session ID to disconnect the current session. 

### Is it possible to force log off a user using tsdiscon?
No, the tsdiscon command is used for disconnecting a session, not for forcing a log off. To force log off a user, you can consider using the logoff command.

### How do I get more information about the tsdiscon command and its options?
You can get more information about the tsdiscon command and its options by using the /? option. Simply run:
```cmd
tsdiscon /?
```

## Applications of the TSDISCON Command

- Disconnect a Remote Desktop Session
- Log off a user from a Remote Desktop Session