---
title: rsh Linux command
description: Learn about the rsh Linux command and its usage for remote shell connections. Compare it with other commands like ssh and telnet.
---

The rsh command on Linux allows users to execute commands on a remote system without needing to log in directly. It is a simple tool for remote shell connections, although it lacks the encryption and security features of modern alternatives like ssh. By using rsh, users can run commands on remote servers and automate tasks across multiple systems. However, due to its lack of security measures, it is recommended to use more secure options like ssh for sensitive data and critical tasks.
## rsh Syntax:
```bash
rsh [hostname] [command]
```

## Options:
| Option | Description                     |
|--------|---------------------------------|
| -l     | Specify a different username     |
| -n     | Redirect stdin from /dev/null    |
| -d     | Turn on debugging                |
| -k     | Use a non-default .rhosts file   |
| -x     | Turn on DES encryption           |
| -v     | Verbose mode                     |
| -   | Read commands from standard input |

## Parameters:
| Parameter | Description                            |
|-----------|----------------------------------------|
| hostname  | The hostname or IP address of the remote host |
| command   | The command to be executed on the remote host |

:::caution
Exercise caution when using the rsh command as it is inherently insecure and transmits data in plain text over the network. It is recommended to use secure alternatives like SSH (Secure Shell) instead.
:::
## rsh bash Examples:
### Connect to a Remote Server
```bash
rsh remote_server
```
Establishes a remote shell connection with a server named "remote_server".

### Execute a Command on a Remote Server
```bash
rsh remote_server ls -l
```
Runs the "ls -l" command on the remote server named "remote_server".

### Open an Interactive Shell on a Remote Server
```bash
rsh -l username remote_server
```
Opens an interactive shell on the remote server named "remote_server" using the specified username.

### Copy a File from a Remote Server
```bash
rsh -n remote_server cat /path/to/remote_file > local_file
```
Copies the content of a file located at "/path/to/remote_file" on the remote server to a local file named "local_file".

### Redirect Standard Error Output to a File
```bash
rsh remote_server ls /invalid/directory 2> error.log
```
Runs the "ls /invalid/directory" command on the remote server and redirects the standard error output to a file named "error.log".

### Disconnect from a Remote Server
```bash
rsh remote_server exit
```
Closes the rsh connection with the remote server named "remote_server".
:::tip
To use rsh securely, consider using ssh instead, as rsh sends information in plain text, making it vulnerable to interception. If ssh is not an option, ensure that you restrict access to the rsh service using firewall rules.
:::

### How do I use rsh in Linux?
To use the rsh command in Linux, execute the following command:
```bash
rsh hostname command
```

### What is the syntax for using rsh in Linux to run a command on a remote host?
The syntax for running a command on a remote host using rsh in Linux is as follows:
```bash
rsh hostname command
```

### How can I specify the username when using rsh in Linux?
To specify the username when using rsh in Linux, include it in the command as shown below:
```bash
rsh username@hostname command
```

### What options can I use with the rsh command in Linux?
You can use various options with the rsh command in Linux. For example, to specify a different port, use the following command:
```bash
rsh -p port hostname command
```

### How do I display the output of a command run with rsh on the local machine in Linux?
To display the output of a command run with rsh on the local machine in Linux, use the following command:
```bash
rsh hostname command | cat
```

### Can I specify a different shell to use with rsh in Linux?
Yes, you can specify a different shell to use with rsh in Linux by executing the following command:
```bash
rsh -l username hostname -l /path/to/custom/shell
```

### How can I execute multiple commands with rsh in Linux?
You can execute multiple commands with rsh in Linux by separating them with semicolons in the command, like this:
```bash
rsh hostname "command1; command2; command3"
```

### Is it possible to run an interactive shell session with rsh in Linux?
Yes, you can run an interactive shell session with rsh in Linux by executing the following command:
```bash
rsh -n -l username hostname /bin/sh
```
## Applications of the rsh command

- Remote shell access
- Running commands on a remote system
- Automating tasks on remote servers