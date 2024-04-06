---
title: Windows SETSPN command
description: Learn about the Windows setspn command, a powerful tool for managing Service Principal Names (SPNs) in Active Directory domains.
---

The Windows setspn command is a powerful tool for managing Service Principal Names (SPNs) in Active Directory domains. SPNs are unique identifiers for services running on servers, allowing clients to locate and authenticate services correctly. With the setspn command, administrators can easily add, delete, and list SPNs associated with Active Directory objects, ensuring smooth authentication and seamless communication within the network. This command is essential for troubleshooting authentication issues, ensuring proper Kerberos delegation, and optimizing the performance of services in a Windows environment.

## SETSPN Syntax:
```cmd
setspn [-S | -A] <SPN> <AccountName>
```
## Options:
| Option | Description                                      |
|--------|--------------------------------------------------|
| -S     | Search for the specified SPN                     |
| -A     | Add the specified SPN to the account name provided|

## Parameters:
| Parameter  | Description                                       |
|------------|---------------------------------------------------|
| SPN        | Service Principal Name to add or search for       |
| AccountName| Name of the account to associate with the SPN     |

:::caution
It is important to be cautious when using the setspn command to ensure correct syntax and proper association of Service Principal Names (SPNs) with accounts. Incorrect usage can lead to authentication failures or other issues.
:::
## SETSPN Usage:
### Add SPN for a specific service account
```cmd
setspn -S HTTP/webserver.contoso.com contoso\webserver$
```
Adds a Service Principal Name (SPN) for the HTTP service running on a webserver with the specified service account.

### List all SPNs for a specific service account
```cmd
setspn -L contoso\webserver$
```
Lists all the Service Principal Names (SPNs) associated with the service account "webserver" in the "contoso" domain.

### Delete an SPN
```cmd
setspn -D HTTP/webserver.contoso.com contoso\webserver$
```
Deletes the Service Principal Name (SPN) for the HTTP service running on a webserver with the specified service account.

### Reset Host-based SPN
```cmd
setspn -R webserver$
```
Resets the Host-based Service Principal Name (SPN) attribute for the specified service account, allowing for re-registration of SPNs.
:::tip
When using the setspn command in Windows, make sure to carefully review the available options and their syntax to avoid errors and ensure correct configuration of Service Principal Names (SPNs) for your system.
:::

### How do I use setspn in Windows?
To use the setspn command in Windows, execute the following command:
```cmd
setspn --s HTTP/webserver.domain.com domain\username
```

### What is the purpose of setspn in Windows?
The setspn command in Windows is used to manage Service Principal Names (SPNs) for Active Directory objects. It associates SPNs with the accounts under which services run so that clients can locate services in a network.

### How can I list all SPNs associated with a specific user account?
To list all SPNs associated with a specific user account in Windows, you can use the setspn command with the "-l" option. Execute the following command:
```cmd
setspn -l domain\username
```

### Can setspn be used to register SPNs for a specific service?
Yes, you can use the setspn command to register SPNs for a specific service in Windows. For example, to register an SPN for a HTTP service running on a server, you can use the following command:
```cmd
setspn -s HTTP/webserver.domain.com domain\username
```

### How can I remove a specific SPN associated with a user account using setspn?
To remove a specific SPN associated with a user account using setspn in Windows, you can use the "-d" option. Execute the following command:
```cmd
setspn -d HTTP/webserver.domain.com domain\username
```

### Is it possible to add multiple SPNs at once using setspn?
Yes, you can add multiple SPNs at once using the setspn command in Windows. Simply provide a list of SPNs separated by a space in the command. For example:
```cmd
setspn -s HTTP/webserver.domain.com domain\username 
setspn -s HTTP/server2.domain.com domain\username
```

### How can I check the syntax and available options of setspn command?
To check the syntax and available options of the setspn command in Windows, you can use the "-h" or "--help" option. Execute the following command:
```cmd
setspn -h
```

## Applications of the SETSPN Command

- Registering a Service Principal Name (SPN) for a service account
- Listing the SPNs associated with a particular service account
- Deleting SPNs for a service account
- Checking if an SPN is already registered
- Troubleshooting Kerberos authentication issues