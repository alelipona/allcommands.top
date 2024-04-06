---
title: Linux sftp command
description: Learn how to securely transfer files using the Linux sftp command. Find out about commands, options, and examples in this comprehensive guide.
---

The Linux sftp command allows users to securely transfer files between systems using the Secure File Transfer Protocol. It provides a secure alternative to traditional FTP by encrypting both the commands and data exchanged between the client and the server. With sftp, users can upload, download, list, and manage files on remote servers. The command-line tool offers various options for customizing file transfers, setting file permissions, and navigating remote directories. By understanding how to use the sftp command effectively, users can streamline file transfers and maintain the security of their data.

## sftp Syntax:
```bash
sftp [options] [user@]host[:file]
```
## Options:
| Option | Description                            |
|--------|----------------------------------------|
| -b     | Batch mode: read a batchfile and execute the sftp commands specified in the file. |
| -B     | Use buffer size buffer_size for reads and writes (e.g., -B 8192). |
| -C     | Enable compression.                    |
| -F     | Specifies an alternative per-user configuration file for sftp. |
| -o     | SSH protocol option.                   |
| -P     | Port to connect to on the remote host (default is 22). |
| -q     | Quiet mode: disables the progress meter and warning messages. |
| -v     | Verbose mode: prints debug information. |

## Parameters:
| Parameter | Description                          |
|-----------|--------------------------------------|
| user      | Username to login with.              |
| host      | The remote host to connect to.       |
| file      | The file to transfer or directory to interact with on the remote host. |

:::caution
Exercise caution while using the sftp command as it involves transferring files over a network. Make sure to securely transfer sensitive data and verify the host's identity to prevent unauthorized access.
:::

## sftp Usage:

### Connect to a Remote Server via SFTP
```bash
sftp username@remote_host
```
Establishes a secure FTP connection to a remote server using the specified username and hostname.

### Upload a File to a Remote Server
```bash
sftp username@remote_host
put localfile.txt
```
Uploads a local file named "localfile.txt" to the remote server after establishing an SFTP connection.

### Download a File from a Remote Server
```bash
sftp username@remote_host
get remotefile.txt
```
Downloads a file named "remotefile.txt" from the remote server to the local machine using SFTP.

### List Contents of a Remote Directory
```bash
sftp username@remote_host
ls
```
Displays the contents of the remote directory after connecting to the server via SFTP.
:::tip
When using the sftp command in Linux, remember to always specify the remote host you want to connect to and the username you want to use for authentication. Additionally, make sure to handle file transfers carefully to avoid accidental overwrites or deletions.
:::

### How do I use sftp in Linux?
To use the sftp command in Linux, execute the following command:
```bash
sftp username@remote_host
```

### How do I upload a file using sftp in Linux?
To upload a file using sftp in Linux, use the put command followed by the local file path and the remote destination path:
```bash
put local_file remote_path
```

### How do I download a file using sftp in Linux?
To download a file using sftp in Linux, use the get command followed by the remote file path and the local destination path:
```bash
get remote_file local_path
```

### How do I connect to a specific port using sftp in Linux?
To connect to a specific port using sftp in Linux, specify the port number with the -P option:
```bash
sftp -P port_number username@remote_host
```

### How do I list directories and files using sftp in Linux?
To list directories and files using sftp in Linux, you can use the ls command:
```bash
ls
```

### How do I navigate directories using sftp in Linux?
To navigate directories using sftp in Linux, you can use the cd command followed by the directory path:
```bash
cd directory_name
```

### How do I disconnect from an sftp session in Linux?
To disconnect from an sftp session in Linux, use the bye or exit command:
```bash
bye
```

## Applications of the sftp command

- Securely transferring files between a local and a remote system
- Managing files and directories on a remote server
- Uploading and downloading files securely
- Changing file and directory permissions on a remote system
- Renaming, deleting, and moving files on a remote server