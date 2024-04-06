---
title: VAULTCMD Windows Command Guide
description: Discover how to use the Windows vaultcmd command to manage credentials securely within the Windows Credential Manager.
---

The Windows vaultcmd command allows users to access and manage credentials in the Windows Credential Manager from the command line. It provides various options to add, delete, and list credentials, making it easier to securely store and retrieve sensitive information. Use this command to streamline the management of credentials in Windows environments efficiently.

## VAULTCMD Syntax:
```cmd
vaultcmd [option] [parameter]
```

## Options:
| Option | Description                            |
|--------|----------------------------------------|
| -a     | Perform action A                       |
| -b     | Perform action B                       |
| -c     | Perform action C                       |

## Parameters:
| Parameter  | Description                            |
|------------|----------------------------------------|
| file.txt   | Specify a file to operate on           |
| folder     | Specify a folder to operate on         |
| user123    | Specify a user to perform action for   |

:::caution
Exercise caution when using the vaultcmd command as it can modify or delete sensitive data. Make sure you have the necessary permissions and are aware of the consequences of your actions.
:::
## VAULTCMD Command Samples:
### Add a Windows credential
```cmd
vaultcmd /add "MyCredential" /user:admin /password:Password123 /target:myserver
```
Add a new Windows credential named "MyCredential" with username "admin" and password "Password123" for the target "myserver".

### List all saved credentials
```cmd
vaultcmd /list
```
View a list of all saved credentials in the Windows Vault.

### Remove a specific credential
```cmd
vaultcmd /delete "MyCredential"
```
Delete the Windows credential named "MyCredential" from the vault.

### Export list of credentials to a file
```cmd
vaultcmd /list > credentials.txt
```
Export the list of saved credentials to a text file named "credentials.txt".

### Show detailed information about a specific credential
```cmd
vaultcmd /show "MyCredential"
```
Display detailed information about the Windows credential named "MyCredential".

### Clear all saved credentials
```cmd
vaultcmd /clear
```
Remove all saved credentials from the Windows Vault.

### Backup Windows Vault
```cmd
vaultcmd /backup C:\VaultBackup
```
Create a backup of the Windows Vault and store it in the directory "C:\VaultBackup".
:::tip
Remember to run vaultcmd with administrative privileges to ensure smooth execution of the command.
:::

## VAULTCMD FAQ:
### How do I use vaultcmd in Windows?
To use the vaultcmd command in Windows, execute the following command:
```cmd
vaultcmd --list
```

### How can I add a credential to Windows Credential Manager using vaultcmd?
To add a credential using vaultcmd, use the following command:
```cmd
vaultcmd add -user MyUser -password MyPassword -target NewCredential
```

### How can I remove a credential from Windows Credential Manager with vaultcmd?
To remove a credential using vaultcmd, use the following command:
```cmd
vaultcmd delete -target CredentialToDelete
```

### How do I update a credential in Windows Credential Manager using vaultcmd?
To update a credential using vaultcmd, use the following command:
```cmd
vaultcmd update -user NewUser -password NewPassword -target CredentialToUpdate
```

### How can I view all credentials stored in Windows Credential Manager with vaultcmd?
To view all credentials using vaultcmd, execute the following command:
```cmd
vaultcmd --list
```

### How do I backup Windows Credential Manager credentials with vaultcmd?
To backup credentials using vaultcmd, use the following command:
```cmd
vaultcmd export -file C:\Path\To\Backup\File
```
## Applications of the VAULTCMD Command

- Permits users to back up or restore credentials.
- Provides the ability to list the credentials stored in the Credential Manager.
- Allows users to add, display, and delete stored credentials.