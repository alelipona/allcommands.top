---
title: rcp Linux Command Guide
description: The rcp command in Linux is used to securely copy files from one system to another. Learn how to transfer files effectively with rcp.
---

The rcp command in Linux allows users to securely transfer files between different systems. It is a reliable and efficient way to copy files over a network without compromising security. With rcp, users can easily move files between remote systems using a simple command-line interface. This guide explains how to use the rcp command effectively and securely to transfer files between Linux systems.

## rcp Syntax:
```bash
rcp [option] [source_file] [destination_file]
```
## Options:
| Option | Description                        |
|--------|------------------------------------|
| -p     | Preserve file modification times   |
| -r     | Copy directories recursively        |
| -f     | Force copy even if destination exists |

## Parameters:
| Parameter      | Description                     |
|----------------|---------------------------------|
| source_file    | Specifies the file to copy from  |
| destination_file | Specifies the file to copy to   |

:::caution
Exercise caution when using the rcp command, as it does not provide encryption and sends data in plain text over the network.
:::
## rcp Command Samples:
### Copy a File to a Remote Host
```bash
rcp file.txt remoteuser@remotehost:/path/to/destination
```
Copy the file "file.txt" from the local system to a remote host, specifying the remote username and destination path.

### Copy Multiple Files to a Remote Host
```bash
rcp file1.txt file2.txt remoteuser@remotehost:/path/to/destination
```
Copy multiple files ("file1.txt" and "file2.txt") from the local system to a remote host, specifying the remote username and destination path.

### Copy a Directory to a Remote Host
```bash
rcp -r directory/ remoteuser@remotehost:/path/to/destination
```
Recursively copy the directory "directory" from the local system to a remote host, specifying the remote username and destination path.

### Copy a File from a Remote Host
```bash
rcp remoteuser@remotehost:/path/to/file.txt .
```
Copy the file "file.txt" from a remote host to the local system in the current directory.

### Copy with Specified Port
```bash
rcp -P 1234 file.txt remoteuser@remotehost:/path/to/destination
```
Copy the file "file.txt" to a remote host over a specific port (1234), specifying the remote username and destination path.

### Interactive Mode for Copying
```bash
rcp -p file.txt remoteuser@remotehost:/path/to/destination
```
Copy the file "file.txt" to a remote host while preserving its modification time and in interactive mode.

### Verbose Mode for Copying
```bash
rcp -v file.txt remoteuser@remotehost:/path/to/destination
```
Copy the file "file.txt" to a remote host and display verbose information during the transfer process.
:::tip
When using the rcp command in Linux, make sure to specify the correct source and destination file paths to ensure successful file transfer. Additionally, consider using more secure alternatives like scp or rsync for file transfers over the network, as rcp is considered less secure due to its inherent vulnerabilities.
:::

## rcp FAQ:

### How do I use rcp in Linux?
To use the rcp command in Linux, execute the following command:
```bash
rcp --option <value>
```

### What is the syntax for transferring files with rcp in Linux?
The syntax for transferring files with rcp in Linux is as follows:
```bash
rcp <source_file> <destination_file>
```

### How can I copy files between different hosts using rcp in Linux?
To copy files between different hosts using rcp in Linux, use the following command format:
```bash
rcp username1@hostname1:/path/to/source username2@hostname2:/path/to/destination
```

### Can I recursively copy directories with rcp in Linux?
Yes, you can recursively copy directories with rcp in Linux by using the `-r` option. Here's an example:
```bash
rcp -r /path/to/source/directory username@hostname:/path/to/destination/directory
```

### How can I use rcp to preserve file permissions during file transfer in Linux?
To preserve file permissions during file transfer with rcp in Linux, you can use the `-p` option. Here's how to do it:
```bash
rcp -p /path/to/source/file username@hostname:/path/to/destination
```

### Is there a way to display the progress of file transfer with rcp in Linux?
Yes, you can display the progress of file transfer with rcp in Linux by using the `-v` (verbose) option. Here's an example command:
```bash
rcp -v /path/to/source/file username@hostname:/path/to/destination
```
## Applications of the rcp command

- Remote file copying
- Transferring files between UNIX/Linux systems
- Using a secure shell (ssh) connection for file transfers