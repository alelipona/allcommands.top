---
title: All About QUSER Windows command
description: Learn about the Windows quser command and how to manage user sessions efficiently.
---

The Windows quser command is a powerful tool that allows you to view and manage user sessions on a Windows system. With quser, you can see a list of all active user sessions, including the username, session ID, state, and idle time. This command is especially useful for system administrators who need to monitor and manage user activity on a server. By using quser, you can easily identify and log off inactive or unwanted user sessions, freeing up system resources and improving security. Additionally, quser can be used in batch scripts or automated tasks to streamline user session management.

## QUSER Syntax:
```cmd
quser [optional parameters]
```
## Options:
| Option | Description                        |
|--------|------------------------------------|
| /server: ServerName | Specifies the server to query for user sessions.|
| /id: UserID      | Specifies the user session to query.            |
| /v      | Displays additional information for each session. |

## Parameters:
| Parameter | Description                                     |
|-----------|-------------------------------------------------|
| ServerName   | Specifies the name or IP address of the server to query for user sessions. |
| UserID       | Specifies the user ID of the session to query. If not specified, all sessions are displayed. | 

:::caution
Caution: Ensure to have the necessary permissions before querying user sessions using the quser command.
:::
## QUSER CMD Examples:
### List all users currently logged in
```cmd
quser
```
This command displays information about all users currently logged in to the system.

### Display information about a specific user
```cmd
quser <username>
```
Replace `<username>` with the actual username to display detailed information about that specific user.

### Output user information to a file
```cmd
quser > user_info.txt
```
Redirects the output of the quser command to a file named "user_info.txt" for further analysis or documentation.

### Log off a user by session ID
```cmd
logoff <session_ID>
```
Replace `<session_ID>` with the actual session ID from the quser command to log off a specific user.

### List logged-in users from a remote computer
```cmd
quser /server:<remote_computer_name>
```
Displays information on users currently logged in to a remote computer by specifying the remote computer name after /server:.

### Retrieve detailed information with session name
```cmd
quser /si
```
Incorporate the /si option to also display the session name along with other detailed information about the logged-in users.
:::tip
When using the quser command in Windows, make sure to run your command prompt as an administrator to ensure proper access to user session information.
:::

## QUSER Command Help Center:

### How do I use quser in Windows?
To use the quser command in Windows, execute the following command:
```cmd
quser
```

### What is the purpose of the quser command in Windows?
The quser command is used to display information about user sessions on a terminal server or a remote desktop session host server.

### How can I get detailed information with quser in Windows?
To get detailed information such as the session name, username, ID, and state, you can use the /verbose option with the quser command:
```cmd
quser /verbose
```

### Can I filter the output of quser based on a specific username?
Yes, you can filter the output of the quser command to display information related to a specific username using the /username switch:
```cmd
quser /username example_user
```

### Is it possible to log off a user session using quser in Windows?
Yes, you can log off a user session by combining the quser and logoff commands. First, identify the session ID using quser and then log off the session using the logoff command:
```cmd
quser
logoff <session_id>
```

### How can I get the quser command to display information in a specific format?
If you want quser to display information in a list format, you can use the /format:list option:
```cmd
quser /format:list
```

### What does the quser command display by default in Windows?
By default, the quser command displays basic information such as the username, session name, ID, and state of user sessions on a server.

### Can I use quser to query user sessions on a remote server?
Yes, you can specify the server name while using the quser command to query user sessions on a remote server:
```cmd
quser /server:<server_name>
```
## Applications of the QUSER Command

- Display information about active user sessions on a local or remote computer
- View user names, session IDs, session state, idle time, and logon time
- Determine if users are disconnected or logged on
- Monitor user activity on the system