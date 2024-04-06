---
title: TFTP Windows command
description: Learn how to use the TFTP command on Windows for file transfers efficiently.
---

The Windows TFTP command allows users to transfer files between devices over a network. This tool is commonly used for network management tasks, such as firmware updates on network devices. The TFTP command is a simple and lightweight protocol that can be useful for transferring files quickly and efficiently. With the Windows TFTP command, users can easily upload or download files from a TFTP server using command-line interface commands. It is a convenient tool for network administrators and IT professionals who need to transfer files over a network without the need for a more complex file transfer protocol.
## TFTP Syntax:
```cmd
tftp [host] [get | put] [source] [destination]
```
## Options:
| Option | Description                 |
|--------|-----------------------------|
| -i     | Specifies binary image mode |

## Parameters:
| Parameter   | Description                |
|-------------|----------------------------|
| host        | Specifies the TFTP server  |
| get | Retrieves a file from the TFTP server |
| put | Puts a file on the TFTP server |
| source      | Specifies the source file  |
| destination | Specifies the destination file | 

:::caution
Always ensure the TFTP server is secure and properly configured before transferring any files. Unauthorized access could lead to data breaches or system compromise.
:::

## TFTP CMD Examples:

### Upload a File to a TFTP Server
```cmd
tftp -i 192.168.1.10 put localfile.txt remotefile.txt
```
Uploads a local file "localfile.txt" to a TFTP server with the IP address 192.168.1.10, saving it as "remotefile.txt".

### Download a File from a TFTP Server
```cmd
tftp -i 192.168.1.10 get remotefile.txt localfile.txt
```
Downloads a file "remotefile.txt" from a TFTP server with the IP address 192.168.1.10, saving it locally as "localfile.txt".

### Set the Timeout for TFTP Commands
```cmd
tftp -i 192.168.1.10 timeout 5
```
Sets the timeout value for TFTP requests to 5 seconds when communicating with the TFTP server at 192.168.1.10.

### Query the Current Status of a Remote TFTP Server
```cmd
tftp -i 192.168.1.10 status
```
Displays the current status of a TFTP server with the IP address 192.168.1.10, showing details like connection port and transfer mode.

### Specify a Different Transfer Mode for TFTP Commands
```cmd
tftp -i 192.168.1.10 mode ascii
```
Configures TFTP to use ASCII transfer mode when sending or receiving files to/from the TFTP server at 192.168.1.10.

### Exit the TFTP Utility
```cmd
tftp -i 192.168.1.10 quit
```
Exits the TFTP utility session with the TFTP server at 192.168.1.10, ending the current connection.
:::tip
When using the tftp command in Windows, make sure to have the necessary permissions to access the target server or device. Verify the network connectivity and ensure that the target device is configured to allow TFTP connections.
:::

## TFTP Command Help Center:
### How do I use tftp in Windows?
To use the tftp command in Windows, execute the following command:
```cmd
tftp --option <value>
```

### How can I transfer a file using tftp in Windows?
To transfer a file using the tftp command in Windows, use the following syntax:
```cmd
tftp -i <destination> PUT <source>
```

### How can I download a file using tftp in Windows?
To download a file using the tftp command in Windows, you can use the following command:
```cmd
tftp -i <destination> GET <source>
```

### How do I specify the transfer mode in tftp for Windows?
To specify the transfer mode in tftp for Windows, you can use the following command:
```cmd
tftp -i <destination> MODE <mode>
```

### How can I set the timeout value in tftp Windows command?
To set the timeout value when using tftp in Windows, you can include the following option in the command:
```cmd
tftp -t <timeout_value> -i <destination> PUT <file>
```

### How do I list files on a remote server using tftp in Windows?
To list files on a remote server using tftp in Windows, you can use the following command:
```cmd
tftp -i <destination> DIR
```

### How can I delete a file on a remote server using tftp in Windows?
To delete a file on a remote server using tftp in Windows, you can use the following command:
```cmd
tftp -i <destination> DEL <file>
```

### How to exit the tftp prompt in Windows?
To exit the tftp prompt in Windows, you can use the following command:
```cmd
tftp -i <destination> QUIT
```
## Applications of the TFTP Command

- **Copy a file to or from a remote computer**
- **Backup or restore device configurations**
- **Upgrade firmware on network devices**
- **Deploy operating system images on networked computers**
- **Transfer files in a network environment where FTP is not available**