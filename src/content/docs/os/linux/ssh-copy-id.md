---
title: ssh-copy-id command in Linux
description: Easily copy SSH keys to remote servers with the Linux ssh-copy-id command.
---

The Linux ssh-copy-id command simplifies the process of copying SSH keys to remote servers, allowing for secure and efficient access without the need for manual key management. By using ssh-copy-id, users can quickly and easily authorize their public keys on remote servers, streamlining the authentication process and enhancing overall security.

## ssh-copy-id Syntax:
```bash
ssh-copy-id [options] [user@]hostname
```

## Linux ssh-copy-id Options:
| Option | Description                     |
|--------|---------------------------------|
| -i     | Identity file                   |
| -f     | Force mode (overwrite keys)     |
| -n     | Dry run (do not make any changes)|
| -h     | Show help                       |
| -o     | Additional options              |
| -p     | Port number                     |

## ssh-copy-id Parameters:
| Parameter | Description                                       |
|-----------|---------------------------------------------------|
| [options] | Specify the options for the ssh-copy-id command   |
| [user]    | Username for the SSH connection                    |
| [hostname]| The target host to copy the SSH key to             |

:::caution
Exercise caution when using the ssh-copy-id command as it involves copying your SSH key to the specified host. Always verify the hostname and ensure you trust the target host before running this command.
:::
## How to use ssh-copy-id command:

### Copy SSH key to a remote server
```bash
ssh-copy-id user@remote_host
```
Copies the SSH key of the local user to the specified remote host.

### Specify a non-default SSH port
```bash
ssh-copy-id "-p 2222 user@remote_host"
```
Copies the SSH key while specifying a non-default SSH port (in this case, port 2222) for the remote host.

### Interactive mode for confirmation
```bash
ssh-copy-id -i user@remote_host
```
Prompts for confirmation in interactive mode before adding the SSH key to the remote host.

### Copy SSH key using a specific identity file
```bash
ssh-copy-id -i ~/.ssh/another_key user@remote_host
```
Copies the SSH key specified by the identity file parameter to the remote host.

### Disable password authentication during key copy
```bash
ssh-copy-id -n user@remote_host
```
Disables password authentication temporarily during the key copy process for increased security.

### Specify a custom path for the authorized keys file
```bash
ssh-copy-id "-f ~/.ssh/custom_authorized_keys user@remote_host"
```
Copies the SSH key to the remote host while using a custom path for the authorized keys file.

### Preserve remote key in the known_hosts file
```bash
ssh-copy-id "-o 'UserKnownHostsFile=~/.ssh/known_hosts' user@remote_host"
```
Preserves the remote host key in the known_hosts file, which is useful for keeping track of verified host keys.

### Override the SSH configuration
```bash
ssh-copy-id "-F /etc/ssh/ssh_config user@remote_host"
```
Copies the SSH key to the remote host using a specified SSH configuration file for custom settings.
:::tip
When using the ssh-copy-id command, make sure you have the correct permissions and access to the target server. Additionally, ensure that the SSH server is running and accessible.
:::

### How do I use ssh-copy-id in bash?
To use the ssh-copy-id command in Linux, execute the following command:
```bash
ssh-copy-id user@hostname
```

### How to copy the SSH key to a specific port using ssh-copy-id?
To copy your SSH key to a specific port on a remote host with ssh-copy-id, use the following command:
```bash
ssh-copy-id -p port user@hostname
```

### How can I specify a custom SSH key file using ssh-copy-id?
To specify a custom SSH key file when using ssh-copy-id, you can use the following command:
```bash
ssh-copy-id -i /path/to/key user@hostname
```

### How do I disable strict host key checking when using ssh-copy-id?
To disable strict host key checking and automatically add the host key when using ssh-copy-id, you can use the following command:
```bash
ssh-copy-id -o StrictHostKeyChecking=no user@hostname
```

### How to prompt for the user's password on the remote system when using ssh-copy-id?
To prompt for the user's password on the remote system when using ssh-copy-id, you can use the following command:
```bash
ssh-copy-id -o PubkeyAuthentication=no user@hostname
```

### How to copy a specific SSH key to a remote host using ssh-copy-id?
To copy a specific SSH key to a remote host with ssh-copy-id, use the following command:
```bash
ssh-copy-id -i /path/to/key user@hostname
```

### How do I provide a custom port and user when using ssh-copy-id?
To specify both a custom port and user when using ssh-copy-id, you can use the following command:
```bash
ssh-copy-id -p port user@hostname
```

### How do I add a comment when copying an SSH key with ssh-copy-id?
To add a comment when copying an SSH key using ssh-copy-id, you can use the following command:
```bash
ssh-copy-id -C "user@hostname key" user@hostname
```

### How do I force the SSH key copy operation using ssh-copy-id?
To force the SSH key copy operation and overwrite any existing keys on the remote host, you can use the following command:
```bash
ssh-copy-id -f user@hostname
```

## Applications of the ssh-copy-id command

- Securely copy the public key to a remote server for passwordless authentication
- Automate the process of adding the public key to the authorized_keys file on a remote server