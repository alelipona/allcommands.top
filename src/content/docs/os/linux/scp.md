---
title: What is scp Linux command?
description: Securely copy files between a local and remote host using the Linux scp command.
---

Securely transfer files between a local and remote host with the scp command in Linux. Encrypted data transmission for enhanced security.

## scp Syntax:
```bash
scp [options] [source] [destination]
```

## scp Options:
| Option | Description |
|--------|-------------|
| -r     | Recursively copy entire directories |
| -P     | Specify the port to connect to on the remote host |
| -p     | Preserves the modification and access times, as well as the permissions of the source-file in the destination-file |
| -q     | Do not display the progress meter |
| -C     | Enable compression during the transfer |
| -i     | Specify the identity file (private key) for public key authentication |

:::caution
Exercise caution when using the scp command as it can overwrite files without prompting, and incorrect usage may lead to data loss.
:::

## Parameters:
| Parameter    | Description                                        |
|--------------|----------------------------------------------------|
| source       | Specifies the file or directory to be copied       |
| destination  | Specifies the destination path for the file(s)     |
## scp Command Usage Examples:
### Copy a Local File to a Remote Server
```bash
scp /path/to/local/file.txt user@remotehost:/path/to/remote/directory
```
Copies a local file to a remote server using SCP.

### Copy a Remote File to a Local Machine
```bash
scp user@remotehost:/path/to/remote/file.txt /path/to/local/directory
```
Retrieves a file from a remote server and copies it to a local directory.

### Copy an Entire Directory to a Remote Server
```bash
scp -r /path/to/local/directory user@remotehost:/path/to/remote/directory
```
Recursively copies an entire directory from local to remote server.

### Copy a Remote File with a Specific Port
```bash
scp -P port_number user@remotehost:/path/to/remote/file.txt /path/to/local/directory
```
Copies a file from a remote server using a specific port.

### Copy Multiple Files from a Remote Server
```bash
scp user@remotehost:"/path/to/remote/file1.txt /path/to/remote/file2.txt" /path/to/local/directory
```
Copies multiple files from a remote server to a local directory.
:::tip
When using the scp command in Linux, ensure that you have the necessary permissions to access the source and destination files or directories. Additionally, always double-check the file paths and hostnames to avoid any mistakes while transferring files. Lastly, consider using SSH keys for secure authentication instead of passwords.
:::

### How do I use scp in Linux?
To use the scp command in bash, execute the following command:
```bash
scp file.txt user@remotehost:/path/to/destination
```

### How can I copy a directory with scp?
To copy a directory using scp, use the `-r` flag to recursively copy all files and directories within the specified directory. Here's an example:
```bash
scp -r /path/to/directory user@remotehost:/path/to/destination
```

### How do I specify a different port with scp?
To specify a different port with scp, use the `-P` flag followed by the port number. Here's an example:
```bash
scp -P 2222 file.txt user@remotehost:/path/to/destination
```

### How to transfer a file from a remote server to a local machine using scp?
To transfer a file from a remote server to a local machine with scp, switch the positions of the source and destination paths. Here's an example:
```bash
scp user@remotehost:/path/to/file.txt /path/to/destination
```

### How do I preserve file attributes like permissions and timestamps when using scp?
To preserve file attributes like permissions and timestamps during file transfer, use the `-p` flag with scp. Here's an example:
```bash
scp -p file.txt user@remotehost:/path/to/destination
```

### How to display the progress of a file transfer with scp?
To display the progress of a file transfer with scp, use the `-v` flag for verbose output. This will show the progress and additional information during the transfer. Here's an example:
```bash
scp -v file.txt user@remotehost:/path/to/destination
```

### How do I use a specific SSH private key with scp?
To use a specific SSH private key with scp, use the `-i` flag followed by the path to the private key file. Here's an example:
```bash
scp -i /path/to/private_key file.txt user@remotehost:/path/to/destination
```
## Applications of the scp command

- Securely copy files and directories between local and remote hosts
- Transfer files and data over a secure shell (SSH) connection
- Copy files between two remote hosts by specifying both the source and destination in the scp command
- Securely copy files with encryption to protect sensitive data during transfer
- Backup files and directories from a local system to a remote server
- Copy files from a remote server to a local system
- Transfer files using different authentication methods supported by SSH