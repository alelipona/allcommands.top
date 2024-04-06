---
title: DJOIN Windows Command Guide
description: Learn how to use the Windows djoin command to join a computer to a domain easily and efficiently.
---

The Windows djoin command allows users to join a computer to a domain securely and efficiently. This command-line tool enables system administrators to automate the process of joining computers to a domain without the need for user interaction. By using djoin, administrators can join a computer to a domain during the deployment process, saving time and streamlining the setup of new machines.

The djoin command generates a blob file that contains the necessary information to join the computer to the domain. This blob file can then be used on the target computer to complete the joining process without requiring user input. This makes it ideal for large-scale deployments where manual domain joining would be time-consuming and prone to errors. Additionally, djoin supports unattended installations, making it a valuable tool for system administrators managing multiple devices.

When using the djoin command, administrators can specify various parameters to customize the domain joining process. This includes specifying the domain to join, providing credentials for authentication, and choosing the target computer name. By leveraging these options, administrators can tailor the domain joining process to their specific requirements and ensure a seamless integration of the computer into the domain.

Overall, the Windows djoin command simplifies the task of joining computers to a domain, making it a valuable tool for system administrators managing multiple machines. By automating the domain joining process and supporting unattended installations, djoin helps streamline deployments and ensures consistency across all joined computers.
## DJOIN Syntax:
```cmd
djoin /provision /domain DomainName /machine MachineName /savefile FileName [/machineou OUPath] [/nw] [/defer]
```
## Options:
| Option | Description                                      |
|--------|--------------------------------------------------|
| /provision | Perform offline domain join.                      |
| /domain | Specifies the name of the domain to join.          |
| /machine | Specifies the machine name to join the domain.    |
| /savefile | Specifies the file to save domain join blob information. |
| /machineou | Specifies the organizational unit path for the machine in the domain. |
| /nw | Specifies not to write the computer password to the registry. |
| /defer | Defers domain join until next reboot.            |

## Parameters:
| Parameter | Description                                      |
|-----------|--------------------------------------------------|
| DomainName | Name of the domain to join.                      |
| MachineName | Name of the machine to join the domain.           |
| FileName | File name to save the domain join blob information. |
| OUPath | Organizational unit path for the machine in the domain. |
## DJOIN Command Samples:
### Join a computer to a domain using the djoin command
```cmd
djoin /provision /domain contoso.com /machine Comp01 /savefile join.blob
```
This command provisions the computer "Comp01" to join the domain "contoso.com" and saves the configuration in a file named "join.blob".

### Retrieve domain join metadata from a blob file
```cmd
djoin /requestodj /loadfile join.blob /windowspath %SystemRoot%
```
Using the blob file "join.blob", this command loads the domain join metadata into the system from the specified Windows path.

### Provision a computer to join a domain without saving a blob file
```cmd
djoin /provision /domain contoso.com /machine Comp02 /password <password> /passwordvalue P@ssw0rd!
```
This command directly provisions the computer "Comp02" to join the domain "contoso.com" using the provided password value.

### Check if computer is eligible to join a domain
```cmd
djoin /testodj /domain contoso.com /machine Comp03
```
Verifies if the computer "Comp03" meets the requirements for joining the domain "contoso.com" without actually performing the join operation.

### Reset domain join metadata
```cmd
djoin /reset
```
Resets all domain join metadata in the system, allowing for a clean start for domain join operations.

### Display offline domain join blob information
```cmd
djoin /showodj /loadfile join.blob
```
Shows the domain join metadata information stored in the blob file "join.blob".

### Export a provisioning file for offline domain join
```cmd
djoin /exportprovfile /domain contoso.com /machine Comp04 /password <password> /passwordvalue P@ssw0rd! /savefile prov.xml
```
Exports a provisioning file named "prov.xml" for the computer "Comp04" to join the domain "contoso.com" with the specified password value.
:::tip
When using the djoin command in Windows, make sure to run it with administrative privileges to avoid any potential issues.
:::

## DJOIN FAQ:
### How do I use djoin in Windows?
To use the djoin command in Windows, execute the following command:
```cmd
djoin --provision
```

### What is the purpose of the djoin command?
The djoin command is used to provision a computer account in Active Directory.

### How can I specify the organizational unit (OU) when using djoin?
To specify the OU when using djoin, include the /ou option followed by the distinguished name of the OU in the command. For example:
```cmd
djoin --provision /domain example.com /ou "OU=Computers,DC=example,DC=com"
```

### Can I provide a specific name for the computer account when using djoin?
Yes, you can specify a name for the computer account by using the /machine option in the djoin command. For example:
```cmd
djoin --provision /domain example.com /machine "MyComputer"
```

### How do I join a computer to a specific domain using djoin?
To join a computer to a specific domain using djoin, you need to provide the /domain option followed by the domain name in the command. For example:
```cmd
djoin --provision /domain example.com
```

### Is there a way to output the provisioning blob to a specific file with the djoin command?
Yes, you can specify the output file for the provisioning blob using the /filename option in the djoin command. For example:
```cmd
djoin --provision /domain example.com /filename "C:\provisioningBlob.txt"
```

## Applications of the DJOIN Command

- Joining a computer to a domain
- Managing domain joins in an Active Directory environment
- Automating the domain join process
- Joining multiple computers to a domain simultaneously