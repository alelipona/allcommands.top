---
title: WINRM Windows command
description: Learn how to use the Windows winrm command to manage remote computers securely and efficiently.
---

The Windows winrm command allows users to manage remote computers securely and efficiently. It is a powerful tool that enables remote management capabilities, such as executing commands, running scripts, and accessing system information on Windows machines. By using winrm, administrators can remotely troubleshoot, configure, and monitor multiple computers from a central location. This command is particularly useful in enterprise environments where IT professionals need to manage a large number of machines effectively. With winrm, users can improve their productivity by automating tasks and simplifying remote management processes.

## WINRM Syntax:
```cmd
winrm [operation] [option] [parameter]
```

## Options:
| Option      | Description                  |
|-------------|------------------------------|
| -r          | Specifies the remote host.   |
| -e          | Encodes received data.       |
| -q          | Quiet mode (suppress output).|

## Parameters:
| Parameter   | Description                                   |
|-------------|-----------------------------------------------|
| -machine    | Specifies the machine to operate on.          |
| -username   | Specifies the username for authentication.    |
| -password   | Specifies the password for authentication.    |
| -f          | Filters output based on specified criteria.  |
| -uri        | Specifies the URI of the target host.         |
| -port       | Specifies the port to connect to.            |
| -service    | Specifies the service to use (HTTP or HTTPS). |

:::caution
Exercise caution when using the WinRM command as it can perform operations remotely and may involve sensitive data. Make sure to securely handle any authentication credentials provided with the command.
:::
## WINRM CMD Examples:
### Connect to a Remote Host
```cmd
winrm quickconfig -q
```
Configures WinRM on the local computer to enable communication with a remote host.

### Show WinRM Configuration
```cmd
winrm get winrm/config -r:remote_computer
```
Retrieves the current WinRM configuration settings from a remote computer.

### Create a New WinRM Session
```cmd
winrm create winrm/config/listener?Address=*+Transport=HTTP
```
Creates a new WinRM listener for HTTP connections on the local computer.

### Execute a Command on a Remote Host
```cmd
winrm invoke -r:remote_computer -u:username -p:password "commands"
```
Runs a set of commands on a remote host by providing the necessary credentials.

### Check WinRM Service Status
```cmd
winrm e winrm/config/listener
```
Displays the status of the WinRM service listeners configured on the local computer.

### Delete a WinRM Listener
```cmd
winrm delete winrm/config/listener?Address=*+Transport=HTTP
```
Removes an existing WinRM listener for HTTP connections on the local computer.
:::tip
When using the winrm command in Windows, make sure to run the command prompt as an administrator to avoid any permission-related issues.
:::

### How do I set up winrm in Windows?
To set up winrm in Windows, execute the following command:
```cmd
winrm quickconfig
```

### How do I check the winrm configuration in Windows?
To check the winrm configuration in Windows, execute the following command:
```cmd
winrm qc
```

### How do I enable winrm in Windows?
To enable winrm in Windows, execute the following command:
```cmd
winrm set winrm/config/service @{AllowUnencrypted="true"}
```

### How do I start the winrm service in Windows?
To start the winrm service in Windows, execute the following command:
```cmd
winrm quickconfig
```

### How do I reset winrm to the default configuration in Windows?
To reset winrm to the default configuration in Windows, execute the following command:
```cmd
winrm quickconfig -q
```

### How do I configure winrm to listen on a specific IP address in Windows?
To configure winrm to listen on a specific IP address in Windows, execute the following command:
```cmd
winrm set winrm/config/listener?Address=*+Transport=HTTP @{Port="5985"}
```

### How do I set a timeout for winrm commands in Windows?
To set a timeout for winrm commands in Windows, execute the following command:
```cmd
winrm set winrm/config @{MaxTimeoutms="1800000"}
```

### How do I test winrm connectivity in Windows?
To test winrm connectivity in Windows, execute the following command:
```cmd
winrm id
```
## Applications of the WINRM Command

1. Remotely manage Windows servers
2. Run commands and scripts on remote machines
3. Configure settings on multiple machines simultaneously
4. Retrieve information from remote machines
5. Manage Active Directory Domain Services on remote servers