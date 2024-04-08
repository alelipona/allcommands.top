---
title: sshd Linux command
description: Learn how to use the Linux sshd command to manage the SSH daemon configuration. Find instructions on how to start, stop, or restart the SSH server.
---

The sshd command in Linux is used to start, stop, or restart the SSH daemon. This command allows you to manage the configuration of the SSH server, such as specifying the port number, host key file, and more. By using the sshd command, you can easily control the behavior of the SSH server on your Linux system.

## sshd Syntax:
```bash
sshd [options]
```

## Options:
| Option      | Description                           |
|-------------|---------------------------------------|
| -D          | Do not detach and run in foreground   |
| -d          | Debug mode                            |
| -e          | Log to standard error instead of syslog|
| -f file     | Use specified configuration file      |
| -h           | Display usage message                  |
| -i          | Disable login grace time              |
| -p port     | Port to listen for connections on     |
| -q          | Quiet mode                            |
| -v          | Verbose mode                          |
| -V          | Display version number                |

## Parameters:
| Parameter | Description                                       |
|-----------|---------------------------------------------------|
| address   | Specify the address to bind to                    |
| port      | Specify the port to listen for connections on     |
| config    | Specify the configuration file to use             |
| keygen    | Generate a new host key as part of a host key setup|


:::caution
It's important to be cautious when using the `sshd` command, as it controls the SSH server on the system. Improper configurations or misuse can lead to security vulnerabilities or unauthorized access to your system.
:::
## sshd bash Examples:

### Start the SSH server
```bash
sudo service ssh start
```
This command starts the SSH server on a Linux system.

### Stop the SSH server
```bash
sudo service ssh stop
```
This command stops the SSH server on a Linux system.

### Restart the SSH server
```bash
sudo service ssh restart
```
This command restarts the SSH server on a Linux system.

### Check the status of the SSH server
```bash
sudo service ssh status
```
This command checks the status of the SSH server on a Linux system.

### Enable the SSH service to start on boot
```bash
sudo systemctl enable ssh
```
This command configures the SSH service to start automatically on system boot.

### Disable the SSH service from starting on boot
```bash
sudo systemctl disable ssh
```
This command prevents the SSH service from starting automatically on system boot.
:::tip
When using the sshd command in Linux, make sure to carefully review and configure the server's SSH settings to ensure secure remote connections. Regularly check for updates and security patches to keep your system protected against potential vulnerabilities.
:::

## sshd Command Help Center:

### How do I use sshd in Linux?
To use the sshd command in Linux, execute the following command:
```bash
sshd --option <value>
```

### How can I start the sshd service in Linux?
To start the sshd service in Linux, use the following command:
```bash
sudo service ssh start
```

### How do I check the status of sshd in Linux?
To check the status of the sshd service in Linux, run the following command:
```bash
systemctl status sshd
```

### How can I stop the sshd service in Linux?
To stop the sshd service in Linux, execute the following command:
```bash
sudo service ssh stop
```

### How do I restart sshd in Linux?
To restart the sshd service in Linux, use the following command:
```bash
sudo service ssh restart
```

### How do I reload the sshd configuration in Linux?
To reload the sshd configuration in Linux without disconnecting active connections, use the following command:
```bash
sudo service ssh reload
```

### How can I enable sshd to start on system boot in Linux?
To enable the sshd service to start on system boot in Linux, run the following command:
```bash
sudo systemctl enable ssh
```

### How do I disable SSH password authentication in sshd configuration?
To disable SSH password authentication in the sshd configuration, follow these steps:
```bash
sudo nano /etc/ssh/sshd_config
```
Edit the file to set `PasswordAuthentication no`, then save and exit. Finally, restart the sshd service.
## Applications of the sshd command

- Start the SSH daemon service
- Monitor and manage incoming SSH connections
- Permit or deny specific users or IP addresses from connecting via SSH