---
title: ftp command in Linux
description: Learn how to use the Linux ftp command to transfer files securely between a client and server. Explore its syntax, options, and practical examples.
---

The Linux ftp command is a powerful tool for transferring files between a client and a server. It allows users to securely upload and download files, manage directories, and perform various operations on remote servers. By following the appropriate syntax and using the available options, users can easily connect to FTP servers, navigate through directories, transfer files in binary or ASCII mode, and manage remote files efficiently. Familiarizing yourself with the Linux ftp command can greatly enhance your file transfer capabilities and streamline your workflow.
## ftp Syntax:
```bash
ftp [options] [hostname]
```
## Linux ftp Options:
| Option | Description                  |
|--------|------------------------------|
| -v     | Enable verbose output        |
| -i     | Disable interactive prompting|
| -n     | Suppress auto-login          |
| -d     | Enable debugging             |
| -g     | Disable file name globbing   |
| -k     | Automatically use binary transfer mode    |
| -s:filename | Read a configuration file for operation specifics |

## ftp Parameters:
| Parameter | Description                  |
|-----------|------------------------------|
| hostname  | The hostname or IP address of the FTP server to connect to | 

:::caution
Exercise caution with the ftp command as it transfers data in clear text over the network, which can potentially be intercepted and read by unauthorized parties. Use secure alternatives like SFTP or FTPS for sensitive data transfers.
:::
## How to use ftp command:

### Connect to a FTP server
```bash
ftp ftp.example.com
```
Establishes a connection to a FTP server named "ftp.example.com".

### Login to a FTP server with username and password
```bash
ftp ftp.example.com
user username password
```
Logs in to a FTP server named "ftp.example.com" with the provided username and password.

### Display a list of files in the current directory
```bash
ls
```
Displays a list of files in the current directory on the FTP server.

### Upload a file to the FTP server
```bash
put file.txt
```
Uploads a file named "file.txt" to the FTP server.

### Download a file from the FTP server
```bash
get file.txt
```
Downloads a file named "file.txt" from the FTP server to the local machine.

### Change the current directory on the FTP server
```bash
cd directory
```
Changes the current directory to "directory" on the FTP server.

### Delete a file from the FTP server
```bash
delete file.txt
```
Deletes a file named "file.txt" from the FTP server.

### Close the FTP connection
```bash
bye
```
Closes the connection to the FTP server and exits the FTP command line interface.
:::tip
Always remember to ensure secure connections when using the ftp command by using SFTP instead of FTP, as FTP transmits data in plain text, making it vulnerable to interception.
:::

### How do I connect to an FTP server using ftp in Linux?
To connect to an FTP server using ftp in Linux, use the following command:
```bash
ftp example.com
```

### How do I login to an FTP server with a specific username using ftp in Linux?
To login to an FTP server with a specific username using ftp in Linux, use the following command:
```bash
ftp example.com
Name: your_username
Password: your_password
```

### How do I list files and directories on an FTP server using ftp in Linux?
To list files and directories on an FTP server using ftp in Linux, use the following command:
```bash
ftp> ls
```

### How do I download a file from an FTP server using ftp in Linux?
To download a file from an FTP server using ftp in Linux, use the following command:
```bash
ftp> get filename
```

### How do I upload a file to an FTP server using ftp in Linux?
To upload a file to an FTP server using ftp in Linux, use the following command:
```bash
ftp> put filename
```

### How do I change directories on an FTP server using ftp in Linux?
To change directories on an FTP server using ftp in Linux, use the following command:
```bash
ftp> cd directory_name
```

### How do I delete a file on an FTP server using ftp in Linux?
To delete a file on an FTP server using ftp in Linux, use the following command:
```bash
ftp> delete filename
```

### How do I quit or exit from an FTP session in Linux using ftp?
To quit or exit from an FTP session in Linux using ftp, use the following command:
```bash
ftp> bye
```

### How do I enable passive mode in ftp in Linux?
To enable passive mode in ftp in Linux, use the following command after connecting to the FTP server:
```bash
ftp> passive
```
## Applications of the ftp command

- Connecting to an FTP server
- Transferring files between a local machine and an FTP server
- Uploading files to an FTP server
- Downloading files from an FTP server
- Managing files and directories on an FTP server