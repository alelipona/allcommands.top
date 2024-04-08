---
title: MacOS ftp command
description: Learn how to use the MacOS ftp command to transfer files between computers securely and efficiently.
---

The MacOS ftp command allows users to transfer files between computers using the File Transfer Protocol. This built-in command offers a secure and efficient way to move files, whether locally or between remote machines. With the ftp command, users can connect to FTP servers, navigate directories, upload and download files, and more. By understanding how to use this command effectively, users can streamline their file transfer processes and manage their data more efficiently.

## ftp Syntax:
```bash
ftp [options] [hostname]
```
## Options:
| Option | Description                  |
|--------|------------------------------|
| -d     | Enable debugging             |
| -i     | Disable interactive prompts   |
| -n     | Suppress auto-login          |
| -v     | Enable verbose mode          |
| -g     | Disable filename globbing    |

## Parameters:
| Parameter | Description                                |
|-----------|--------------------------------------------|
| hostname  | The hostname or IP address of the FTP server|

:::caution
Exercise caution when using the ftp command as it sends username and password information in plain text, which can be intercepted by malicious users.
:::
## ftp Usage:
### Connect to an FTP Server
```bash
ftp example.com
```
Establishes a connection to the FTP server hosted at "example.com".

### Log in to the FTP Server with Credentials
```bash
ftp -u username example.com
```
Logs in to the FTP server at "example.com" using the specified username.

### Download a File from the FTP Server
```bash
ftp example.com
get filename.txt
```
Connects to the FTP server at "example.com" and downloads the file named "filename.txt".

### Upload a File to the FTP Server
```bash
ftp example.com
put localfile.txt
```
Establishes a connection to the FTP server at "example.com" and uploads the local file "localfile.txt" to the server.
:::tip
When using the ftp command in MacOS, ensure that you have the necessary permissions and correct credentials to access the remote server. Additionally, consider using secure alternatives like SFTP for encrypted file transfers.
:::

### How do I connect to an FTP server in MacOS?
To connect to an FTP server in MacOS, use the following command:
```bash
ftp <ftp_server_address>
```

### How do I login to an FTP server in MacOS?
To login to an FTP server in MacOS, use the following command:
```bash
ftp <ftp_server_address>
```

### How do I list files on an FTP server in MacOS?
To list files on an FTP server in MacOS, use the following command:
```bash
ftp <ftp_server_address>
ls
```

### How do I download a file from an FTP server in MacOS?
To download a file from an FTP server in MacOS, use the following command:
```bash
ftp <ftp_server_address>
get <file_name>
```

### How do I upload a file to an FTP server in MacOS?
To upload a file to an FTP server in MacOS, use the following command:
```bash
ftp <ftp_server_address>
put <file_name>
```

### How do I change directories on an FTP server in MacOS?
To change directories on an FTP server in MacOS, use the following command:
```bash
ftp <ftp_server_address>
cd <directory_name>
```

### How do I disconnect from an FTP server in MacOS?
To disconnect from an FTP server in MacOS, use the following command:
```bash
ftp <ftp_server_address>
bye
```

## Applications of the ftp command

- Transferring files between a local machine and a remote server
- Managing files and directories on a remote server
- Downloading files from a remote server to the local machine
- Uploading files from the local machine to a remote server
- Connecting to remote servers using FTP protocol for file transfer operations