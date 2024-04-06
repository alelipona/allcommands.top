---
title: TPMVSCMGR Windows command
description: Learn how to use the Windows tpmvscmgr command to manage TPM Virtual Smart Cards efficiently.
---

TPMVSCMGR is a Windows command-line tool used to manage TPM Virtual Smart Cards. This command enables users to create, delete, and manage Virtual Smart Cards on the Trusted Platform Module (TPM) of their device. By utilizing TPMVSCMGR, users can easily interact with Virtual Smart Cards, providing enhanced security for sensitive information and secure access to various resources. This tool offers a seamless way to manage Virtual Smart Cards, ensuring effective security measures are in place for data protection and secure access control on Windows devices.

## TPMVSCMGR Syntax:
```cmd
tpmvscmgr [option] [parameter]
```

## Options:
| Option            | Description                             |
|-------------------|-----------------------------------------|
| /create           | Creates a new virtual smart card        |
| /delete           | Deletes an existing virtual smart card  |
| /list             | Lists all virtual smart cards            |
| /creds:<credname> | Specifies the credentials for the smart card operations |
| /verbose          | Displays detailed information during the operation |

## Parameters:
| Parameter    | Description                          |
|--------------|--------------------------------------|
| card-name    | Specifies the name of the virtual smart card |
| b64-public   | Specifies a Base64 encoded key for the smart card public key |
| b64-private  | Specifies a Base64 encoded key for the smart card private key |

:::caution
Exercise caution when using tpmvscmgr command as it deals with managing virtual smart cards, which are crucial for system security and access control. Making incorrect changes could lead to system instability or security risks.
:::
## TPMVSCMGR CMD Examples:

### List all TPM virtual smart card readers
```cmd
tpmvscmgr.exe list
```
This command lists all the TPM virtual smart card readers available on the system.

### Create a TPM virtual smart card reader
```cmd
tpmvscmgr.exe create /name "MyVirtualSmartCard" /pin random
```
Creates a new TPM virtual smart card reader named "MyVirtualSmartCard" with a randomly generated PIN.

### Delete a TPM virtual smart card reader
```cmd
tpmvscmgr.exe delete /name "MyVirtualSmartCard"
```
Deletes the TPM virtual smart card reader named "MyVirtualSmartCard".

### Change the PIN for a TPM virtual smart card reader
```cmd
tpmvscmgr.exe changepin /name "MyVirtualSmartCard" /pin new123 /oldpin random
```
Changes the PIN for the TPM virtual smart card reader named "MyVirtualSmartCard" from a randomly generated PIN to "new123".

### Enable automatic device decryption for a TPM virtual smart card reader
```cmd
tpmvscmgr.exe autodecrypt on /name "MyVirtualSmartCard"
```
Enables automatic device decryption using the TPM virtual smart card reader named "MyVirtualSmartCard".

### Disable TPM support for a TPM virtual smart card reader
```cmd
tpmvscmgr.exe disable /name "MyVirtualSmartCard"
```
Disables TPM support for the TPM virtual smart card reader named "MyVirtualSmartCard".
:::tip
When using the tpmvscmgr command in Windows, make sure to run the Command Prompt as an administrator to avoid any permission-related issues.
:::

## TPMVSCMGR Command Help Center:

### How do I use tpmvscmgr in Windows?
To use the tpmvscmgr command in Windows, execute the following command:
```cmd
tpmvscmgr --addprovider Microsoft Platform Crypto Provider
```

### What is the purpose of the tpmvscmgr command?
The tpmvscmgr command in Windows is used for managing the Virtual Smart Card functionality related to the Trusted Platform Module (TPM).

### How can I list all available options with tpmvscmgr?
To list all available options with tpmvscmgr, you can execute the following command:
```cmd
tpmvscmgr /?
```

### How do I create a Virtual Smart Card using tpmvscmgr?
To create a Virtual Smart Card using tpmvscmgr, run the following command:
```cmd
tpmvscmgr --create --name "MyVSC" --pin-policy cached --admin-key random
```

### How can I delete a Virtual Smart Card with tpmvscmgr?
To delete a Virtual Smart Card with tpmvscmgr, use the following command:
```cmd
tpmvscmgr --delete --name "MyVSC"
```

### What is the command to manage the PIN for a Virtual Smart Card?
To manage the PIN for a Virtual Smart Card using tpmvscmgr, you can use the following command:
```cmd
tpmvscmgr --changepin --name "MyVSC"
```

### How do I show detailed information about a Virtual Smart Card?
To display detailed information about a Virtual Smart Card using tpmvscmgr, run the following command:
```cmd
tpmvscmgr --info --name "MyVSC"
```

### Is it possible to change the Admin key for a Virtual Smart Card with tpmvscmgr?
Yes, you can change the Admin key for a Virtual Smart Card using tpmvscmgr by running the following command:
```cmd
tpmvscmgr --changeadminkey --name "MyVSC"
```
## Applications of the TPMVSCMGR Command

- Create a virtual smart card.
- Delete a virtual smart card.
- List all virtual smart cards on the system.
- Export a virtual smart card.
- Import a virtual smart card.
- Change the PIN for a virtual smart card.
- Reset a virtual smart card.
- Unbind a virtual smart card from a physical smart card reader.