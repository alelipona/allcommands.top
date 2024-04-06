---
title: What is MSG Windows command?
description: Learn how to use the Windows msg command to send messages to other users on the same network.
---

The Windows msg command allows you to send messages to other users on the same network easily and quickly. Find out how to use this command efficiently and improve your communication within your network.
## MSG Syntax:
```cmd
msg {username | session_name | session_id | @filename | *} [/server:servername] [/time:seconds] [/v] [/w] [message]
```
## MSG Options:
| Option | Description |
|--------|-------------|
| username | Specifies the username of the recipient to receive the message. |
| session_name | Specifies the name of the session (for example, console or RDP-Tcp#0) to send the message to. |
| session_id | Specifies the session ID of the recipient to receive the message. |
| @filename | Specifies a file containing a list of usernames, session names, or session IDs to send the message to. |
| * | Sends the message to all sessions on the specified server. |
| /server:servername | Specifies the server to connect to (default is current server). |
| /time:seconds | Specifies the amount of time to wait for receiver(s) to acknowledge the message. |
| /v | Displays information about the actions performed. |
| /w | Waits for the user(s) to respond to the message. |
| message | Text of the message to send. |
:::caution
Incorrect use of the `msg` command can lead to unauthorized access to a user's session or inappropriate message broadcasting. Please use this command responsibly and always ensure that you have the necessary permissions to send messages to other users.
:::

## Parameters:
| Parameter | Description |
|-----------|-------------|
| username | Specifies the username of the recipient to receive the message. |
| session_name | Specifies the name of the session to send the message to. |
| session_id | Specifies the session ID of the recipient to receive the message. |
| @filename | Specifies a file containing a list of recipients for the message. |
| message | Text of the message to send. |
## MSG Command Usage Examples:
### Send Message to a User on the Same Computer
```cmd
msg username Hello! This is a test message.
```
Sends a message to a user named "username" on the same computer.

### Send Message to a User on a Remote Computer
```cmd
msg /SERVER:RemoteComputerName username Hello! This is a test message.
```
Sends a message to a user named "username" on a remote computer named "RemoteComputerName".

### Send Message to All Users on the Same Computer
```cmd
msg * /SERVER:localhost Hello! This is a broadcast message to all users on this computer.
```
Sends a broadcast message to all users currently logged in on the computer.

### Send Message to a User with a Specific Session ID
```cmd
msg /SERVER:localhost 1 Hello! This is a message to a user with session ID 1.
```
Sends a message to a user with session ID 1 on the local computer.

### Display Help Information for the MSG Command
```cmd
msg /?
```
Displays the help information for the MSG command, including all available command options and syntax.
:::tip
When using the msg command in Windows, make sure to have the necessary privileges and permissions to send messages to other users on the same network. It is also important to provide the correct username or session ID when targeting specific users.
:::

### How do I use msg in Windows?
To use the msg command in CMD, execute the following command:
```cmd
msg /server:REMOTE_COMPUTER USERNAME message_body
```

### Can I send a message to all users using msg in Windows?
Yes, you can send a message to all users by using an asterisk (*) as the username in the msg command. For example:
```cmd
msg * message_body
```

### How can I specify a title for the message in msg on Windows?
To specify a title for the message, use the /v switch followed by the title text in the msg command. Here is an example:
```cmd
msg USERNAME /v Title message_body
```

### Is it possible to include line breaks in the message sent by msg in Windows?
Yes, you can include line breaks in the message by using the ^ character followed by the letter n. For example:
```cmd
msg USERNAME This is line 1 ^This is line 2
```

### Can I send a message to a specific session ID with the msg command on Windows?
Yes, you can send a message to a specific session by including the session ID after the username in the msg command. For example:
```cmd
msg USERNAME SESSION_ID message_body
```

### How can I view a list of available sessions to message using msg in Windows?
To view the list of available sessions, you can use the query session command in CMD before sending a message. Here is an example:
```cmd
query session
```

### Is it possible to send a message to a remote computer using the msg command in Windows?
Yes, you can send a message to a remote computer by specifying the /server switch followed by the remote computer's name in the msg command. For example:
```cmd
msg /server:REMOTE_COMPUTER USERNAME message_body
```
## Applications of the MSG Command

- Sending messages to a user on the same computer
- Sending messages to a user on a different computer within the same network
- Notifying users or providing updates in a system administration environment 
- Displaying information or alerts to users in a terminal or command prompt 
- Delivering important messages or announcements to selected users in a network