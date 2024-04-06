---
title: IRFTP command in Windows
description: Execute the Windows irftp command to transfer files over infrared connection on devices. Learn the syntax, options, and usage of this command.
---

The Windows irftp command is used to transfer files over an infrared connection. It allows for seamless file transfer between devices that support this connection method. The syntax of the command is simple, making it easy to use for even novice users. By understanding the various options and parameters available with the irftp command, users can efficiently manage file transfers and ensure data is securely transmitted between devices.

## IRFTP Syntax:
```cmd
irftp [options] [parameters]
```
## Windows IRFTP Options:
| Option | Description              |
|--------|--------------------------|
| -s     | Runs the command silently|
| -a     | Uses ASCII transfer mode |
| -b     | Uses binary transfer mode|
| -p     | Prompts when transferring multiple files|
| -c     | Continues on errors      |

## IRFTP Parameters:
| Parameter | Description                       |
|-----------|-----------------------------------|
| ipAddress | The IP address of the remote host |
| filename  | The name of the file to transfer   |

:::caution
Exercise caution when using the irftp Windows command as it transfers files between a local and a remote machine. Ensure that you have necessary permissions and verify the file paths to prevent accidental data loss.
:::
## How to use IRFTP command:
### Transfer a file using IRFTP
```cmd
irftp -s:source_file -d:destination_file -n:remote_computer
```
Transfers a file from the local computer to a remote computer using IRFTP.

### List the files on a remote computer
```cmd
irftp -l -n:remote_computer
```
Lists the files available on a remote computer using IRFTP.

### Receive a file from a remote computer
```cmd
irftp -r -s:source_file -d:destination_file -n:remote_computer
```
Receives a file from a remote computer and saves it on the local computer using IRFTP.

### Delete a file on a remote computer
```cmd
irftp -x:file_to_delete -n:remote_computer
```
Deletes a file on the remote computer using IRFTP.

### Specify a port for the IRFTP connection
```cmd
irftp -p:port_number -n:remote_computer
```
Specifies a port number to use for the IRFTP connection to the remote computer.

### Display help information about IRFTP
```cmd
irftp /?
```
Displays help information about how to use the IRFTP command.

### Connect to a remote computer using IRFTP
```cmd
irftp -c -n:remote_computer
```
Connects to a remote computer using IRFTP for file transfer operations.

### Rename a file on a remote computer
```cmd
irftp -e:old_file_name:new_file_name -n:remote_computer
```
Renames a file on the remote computer using IRFTP.
:::tip
Make sure to check the syntax and options of the irftp command carefully to avoid errors in your file transfer operations.
:::

### How do I use irftp in Windows?
To use the irftp command in Windows, execute the following command:
```cmd
irftp --option <value>
```

### What are the common options used with irftp in CMD?
The irftp command in CMD has various options that can be utilized based on the specific requirements. For example, you can use the following options:
```cmd
irftp --send <file_path>
irftp --receive <file_path>
```

### How can I send a file using irftp in Windows?
To send a file using irftp in Windows, you can use the following command:
```cmd
irftp --send C:\example\file.txt
```

### How do I receive a file using irftp in CMD?
Receiving a file using irftp in CMD can be done with the following command:
```cmd
irftp --receive C:\example\file.txt
```

### Can I transfer multiple files at once with irftp in Windows?
Yes, you can transfer multiple files at once with irftp in Windows by specifying the paths for each file in the command. For example:
```cmd
irftp --send C:\file1.txt C:\file2.txt C:\file3.txt
```

### How do I check the version of irftp in CMD?
To check the version of irftp in CMD, you can use the following command:
```cmd
irftp --version
```

### Is it possible to transfer files between different directories using irftp in Windows?
Yes, you can transfer files between different directories using irftp in Windows. Simply specify the full paths of the source and destination directories in the command. For instance:
```cmd
irftp --send C:\source\file.txt D:\destination\
```

### How do I cancel a file transfer operation with irftp in CMD?
If you need to cancel a file transfer operation with irftp in CMD, you can do so by pressing `Ctrl + C` to stop the execution of the command.

### Can I resume a failed file transfer with irftp in Windows?
Yes, you can resume a failed file transfer with irftp in Windows by executing the same command that was used initially for the file transfer. Irftp will attempt to resume the transfer from where it left off.

## Applications of the IRFTP Command

- Transferring files over an infrared connection
- Sending files between devices with infrared capabilities
- Automating file transfers using batch scripts
- Transferring files without the need for a separate network connection