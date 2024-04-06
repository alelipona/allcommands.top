---
title: What is logout Linux command?
description: Learn how to log out of a Linux system gracefully using the logout command. 
---

The Linux logout command is used to log out of a session and close all open windows. It terminates the session and returns the user to the login screen.

## logout Syntax:
```bash
logout
```
## logout Options:
| Option    | Description                  |
|-----------|------------------------------|
| N/A       | No options available          |

:::caution
It is not recommended to use the `logout` command in a terminal session that is necessary for ongoing processes, as it will end the current session and close all associated processes.
:::

## Parameters:
| Parameter  | Description                  |
|------------|------------------------------|
| N/A        | No parameters available      |
## logout Command Usage Examples:
### Log Out the Current User
```bash
logout
```
Logs out the current user from the shell session.

### Forcefully Log Out User
```bash
logout -f
```
Forcibly terminates the current user's shell session, regardless of any running processes.

### Log Out and Close All Sessions
```bash
logout --all
```
Logs out the current user and closes all open shell sessions.

### Display Help Information for Logout Command
```bash
logout --help
```
Displays a help message with information on how to use the logout command.

### Log Out and Terminate Remote SSH Session
```bash
logout ssh
```
Logs out the user and terminates the SSH session when logged in remotely.
:::tip
Remember that the logout command is used to terminate the current session in the terminal. Make sure you have saved any important work before using this command.
:::

### How do I use logout in Linux?
To use the logout command in bash, execute the following command:
```bash
logout
```

### Can I logout from a remote system using the logout command?
No, the logout command is used to terminate the current session on the system where it is executed. To logout from a remote system, you can either close the terminal or use the exit command.

### How can I force a logout without confirmation in Linux?
To force a logout without confirmation in Linux, you can use the following command:
```bash
logout -f
```

### Is it possible to logout from a specific user account using the logout command?
No, the logout command is used to terminate the current session of the user executing the command. To logout from a specific user account, you can use the pkill command with the username.

### Can I restart the system using the logout command?
No, the logout command is specifically used to terminate the current user session. If you want to restart the system, you can use the reboot command.

### Is there a way to logout from multiple user sessions at the same time?
No, the logout command can only terminate the session of the user executing the command. To logout from multiple user sessions, you would need to execute the logout command separately for each session.

### How can I log out from a graphical user interface (GUI) using the logout command?
The logout command is typically used in the terminal. To log out from a GUI, you can either use the logout option provided in the graphical interface or use the terminal to execute the appropriate command for the specific GUI environment.

### What happens if I try to use the logout command in a script or a non-interactive shell?
If you try to use the logout command in a script or a non-interactive shell, it will not work as expected. The logout command is intended to terminate the current interactive shell session for a user.
## Applications of the logout command
- To securely end a user session
- To clear any cached credentials
- To enforce user access control policies
- To prevent unauthorized access to the system