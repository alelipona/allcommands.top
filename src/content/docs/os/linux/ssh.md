---
title: What is ssh Linux command?
description: Securely connect to a remote server using the Linux ssh command. Learn how to access a shell session on a remote machine, transfer files, and execute commands securely.
---

The *ssh* command in Linux allows users to securely connect to a remote server. It provides a secure encrypted connection for accessing a shell session on a remote machine, transferring files, and executing commands securely.

## ssh Syntax:
```bash
ssh [options] user@hostname
```

## ssh Options:
| Option            | Description                             |
|-------------------|-----------------------------------------|
| -l username       | Specifies the username to use for login |
| -p port           | Specifies the port number               |
| -i identity_file  | Specifies the identity file             |
| -c cipher_spec    | Specifies the encryption cipher to use  |
| -v                | Verbose mode (increases verbosity)      |
| -q                | Quiet mode (suppresses warnings)        |
| -Y                | Enables trusted X11 forwarding          |

:::caution
Exercise caution while using the ssh command as it allows access to remote servers and systems. Make sure you have proper authorization before connecting to a remote host.
:::

## Parameters:
| Parameter     | Description                                    |
|---------------|------------------------------------------------|
| user          | The username used to log in to the remote host  |
| hostname      | The hostname or IP address of the remote host    |
## ssh Command Usage Examples:

### Connect to a Remote Server 
```bash
ssh username@remote_server
```
Establishes a secure shell connection to a remote server using the specified username.

### Connect to a Specific Port on a Remote Server 
```bash
ssh -p port_number username@remote_server
```
Connects to a remote server through a specific port by specifying the port number with the -p flag.

### Execute a Command on a Remote Server
```bash
ssh username@remote_server "command_to_execute"
```
Logs into a remote server and executes a specific command without logging into the remote shell.

### Copy a File from a Remote Server to the Local Machine
```bash
scp username@remote_server:/path/to/remote/file /path/to/local/directory
```
Uses the scp command over ssh to securely copy a file from a remote server to a specified directory on the local machine.

### Create a Secure Tunnel to Access a Service
```bash
ssh -L local_port:localhost:remote_port username@remote_server
```
Establishes a local port tunnel to access a service running on a remote server by forwarding traffic to the remote port.
:::tip
When using the `ssh` command in Linux, make sure to replace `<value>` with the appropriate options or arguments according to your specific use case. Always ensure that you have the necessary permissions and credentials to access the remote server before attempting to establish a connection using `ssh`.
:::

### How do I use ssh in Linux?
To use the ssh command in bash, execute the following command:
```bash
ssh username@hostname
```

### What are some common options for the ssh command in Linux?
To specify a port for the ssh connection, use the `-p` option followed by the port number:
```bash
ssh -p 2222 username@hostname
```

### How can I copy files over an ssh connection in Linux?
To securely transfer files over an ssh connection, use the `scp` command. For example, to copy a local file to a remote server:
```bash
scp /path/to/local/file.txt username@hostname:/path/to/destination/
```

### How do I force ssh to use a particular authentication key in Linux?
To specify which private key to use for authentication, use the `-i` option followed by the path to the private key file:
```bash
ssh -i ~/.ssh/custom_key username@hostname
```

### How can I run a command on a remote server using ssh in Linux?
To execute a command on a remote server without logging in interactively, append the command to the ssh connection:
```bash
ssh username@hostname 'command_to_run'
```

### How do I enable verbose mode for ssh in Linux?
To see detailed debugging information during the ssh connection process, use the `-v` option:
```bash
ssh -v username@hostname
```

### How can I forward ports using ssh in Linux?
To set up port forwarding for specific ports on the local and remote machines, use the `-L` option followed by the port numbers:
```bash
ssh -L local_port:destination_address:destination_port username@hostname
```

### How do I securely tunnel my web traffic through ssh in Linux?
To create a secure SSH tunnel for web traffic, use the `-D` option followed by a local port. Configure your browser to use a SOCKS proxy on the specified port:
```bash
ssh -D local_port username@hostname
```

## Applications of the ssh command

- Remote login to a server
- Secure file transfer between machines
- Running commands on a remote machine
- Port forwarding
- Tunneling
- X11 forwarding