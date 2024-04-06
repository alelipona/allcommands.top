---
title: TCMSETUP command in Windows
description: Learn how to use the Windows tcmsetup command to configure Telephony Conferencing on your system.
---

The Windows tcmsetup command is used to configure Telephony Conferencing on your system. This command allows you to set up and manage conferencing settings for telephony services. By using tcmsetup, users can customize various aspects of their telephony conferencing setup, such as specifying the conferencing server, defining access numbers, and enabling specific conferencing features. This command provides a convenient way to customize telephony conferencing settings to suit individual or organizational needs.

## TCMSETUP Syntax:
```cmd
tcmsetup [option] [parameter]
```

## Windows TCMSETUP Options:
| Option | Description                           |
|--------|---------------------------------------|
| /server| Specifies the server name or IP address|
| /port  | Specifies the port number             |
| /mode  | Specifies the connection mode (1=TCP, 2=HTTP)|
| /user  | Specifies the username for authentication|
| /password| Specifies the password for authentication|
| /encrypt| Enables encryption for communication  |

## TCMSETUP Parameters:
| Parameter | Description                           |
|-----------|---------------------------------------|
| servername| The name or IP address of the server   |
| portnumber| The port number for connection         |
| mode      | The connection mode (1 for TCP, 2 for HTTP)|
| username  | The username for authentication        |
| password  | The password for authentication        |

:::caution
Exercise caution when using the TCMSETUP command, as it involves sensitive information like passwords for authentication. Always ensure secure handling of credentials to prevent unauthorized access.
:::
## How to use TCMSETUP command:
### Create a new connection profile
```cmd
tcmsetup /create /name "NewProfile" /server \\Server1 /transport vpn /username user1 /domain domain1
```
Creates a new connection profile with the name "NewProfile" for VPN connection to Server1 using user1 in domain1.

### Delete a connection profile
```cmd
tcmsetup /delete /name "ObsoleteProfile"
```
Deletes the connection profile named "ObsoleteProfile" from the system.

### List all connection profiles
```cmd
tcmsetup /l
```
Displays a list of all connection profiles configured on the system.

### Import a connection profile from a file
```cmd
tcmsetup /import /f "C:\Profiles\NewProfile.pbk"
```
Imports a connection profile from the specified file "NewProfile.pbk" in the directory C:\Profiles.

### Set credentials for a connection profile
```cmd
tcmsetup /edit "ExistingProfile" /user "newUser" /pass "newPassword"
```
Updates the username and password for the connection profile named "ExistingProfile".

### Export a connection profile to a file
```cmd
tcmsetup /export /n "ExportProfile" /f "C:\Exports\ExportProfile.pbk"
```
Exports the connection profile named "ExportProfile" to a file located at C:\Exports.

### Enable auto-dial for a connection profile
```cmd
tcmsetup /setautodial "ProfileToAutoDial" 127.0.0.1
```
Sets the connection profile "ProfileToAutoDial" to automatically dial the 127.0.0.1 address.

### Disable auto-dial for a connection profile
```cmd
tcmsetup /unsetautodial "ProfileToAutoDial"
```
Disables automatic dialing for the connection profile "ProfileToAutoDial".
:::tip
When using the tcmsetup command in Windows, make sure to run the command with administrative privileges to avoid any potential issues with accessing or modifying system configuration settings.
:::

### How do I use tcmsetup in CMD?
To use the tcmsetup command in Windows, execute the following command:
```cmd
tcmsetup --activate <phone_number>
```

### What is the purpose of the tcmsetup command?
The tcmsetup command in Windows is used to configure the Telephony Configuration Manager for the system.

### How can I activate a specific phone number using tcmsetup?
You can activate a specific phone number using the tcmsetup command by specifying the phone number parameter as follows:
```cmd
tcmsetup --activate 1234567890
```

### How do I deactivate a phone number using tcmsetup?
To deactivate a phone number using tcmsetup, execute the following command:
```cmd
tcmsetup --deactivate <phone_number>
```

### Can I view the current status of phone numbers using tcmsetup?
Yes, you can view the current status of phone numbers using the tcmsetup command by running:
```cmd
tcmsetup --query
```

### How do I update the Telephony Configuration Manager database with tcmsetup?
To update the Telephony Configuration Manager database using tcmsetup, use the following command:
```cmd
tcmsetup --update
```

### Is it possible to set the Telephony Configuration Manager server using tcmsetup?
Yes, you can set the Telephony Configuration Manager server using tcmsetup by specifying the server address with the following command:
```cmd
tcmsetup --setserver <server_address>
```

### How do I list all available options for tcmsetup in CMD?
To list all available options for the tcmsetup command in CMD, run the following command:
```cmd
tcmsetup --help
```

## Applications of the TCMSETUP Command

- Configure Trusted Platform Module (TPM) settings on a Windows system
- Initialize and manage TPM devices
- Enable or disable TPM on the system
- Backup or restore TPM information
- Clear TPM data
- Configure TPM owner authorization
- Manage TPM certificates
- Run diagnostics on TPM device
- Retrieve TPM information
- Perform various TPM-related tasks on a Windows system