---
title: Windows NLTEST command
description: Learn how to use the Windows nltest command to troubleshoot network issues and manage domain trust relationships.
---

The Windows nltest command is a powerful tool for managing domain trust relationships and troubleshooting network issues. With nltest, you can verify trust relationships between domains, force a replication of the trust secrets, and reset a computer account's password. This command can also be used to ensure secure communication between domain controllers and diagnose network connectivity problems. By understanding the various options and parameters available with the nltest command, you can efficiently manage and troubleshoot your Windows network environment.

## NLTEST Syntax:
```cmd
nltest [option] [parameter]
```

## Options:
| Option | Description                         |
|--------|-------------------------------------|
| /server:ServerName | Specifies the server to connect to. |
| /sc\_query:DomainName | Queries the primary domain controller for the specified domain. |
| /driver\_test:DomainName | Tests security channels to the specified domain. |
| /dsgetdc:DomainName | Queries a Domain Controller (DC) for a specific domain. |
| /dsgetsite | Displays the site of the current computer. |
| /dsaddchildname | Adds a child name to the list of names that are acceptable for online authentication. |
| /dsquerysrv | Queries DNS for DCs in a domain. |
| /get\_dc:DomainName | Gets the primary domain controller for the specified domain. |
| /server:ServerName | Specifies the server to connect to. |
| /trusted\_domain:DomainName | Queries a specified trusted domain. |
| /user:UserName | Specifies the user account to use for the connection. |

## Parameters:
| Parameter | Description                            |
|-----------|----------------------------------------|
| ServerName | Specifies the name of the server or domain to target. |
| DomainName | Specifies the name of the domain or directory service to query. |
| UserName | Specifies the user account for authentication. |

:::caution
Exercise caution when using the nltest command as it interacts with domain controllers and can impact network and domain settings if not used correctly. Always ensure the appropriate permissions and knowledge before making changes with nltest.
:::
## NLTEST Usage:
### Querying the Trust Relationship between a Domain and a Domain Controller
```cmd
nltest /query /sc_query:example.com
```
Queries the trust relationship between the domain "example.com" and a domain controller.

### Enumerating Trusted Domains
```cmd
nltest /domain_trusts
```
Enumerates all trusted domains for the current domain.

### Verifying Secure Channel between a Computer and a Domain Controller
```cmd
nltest /sc_verify:exampleDC
```
Verifies the secure channel between a computer and a specific domain controller named "exampleDC".

### Retrieving Information about the Global Catalog Server
```cmd
nltest /dsgetdc:example.com
```
Retrieves information about the Global Catalog Server for the domain "example.com".
:::tip
When using the nltest command in Windows, make sure to run it with administrative privileges to avoid any permission-related issues.
:::

## Common Questions on NLTEST Usage:

### How do I use nltest in Windows?
To use the nltest command in Windows, execute the following command:
```cmd
nltest /dsgetdc:domain_name
```

### What is the purpose of the nltest command?
The nltest command in Windows is used to perform various operations related to network settings and domain controllers.

### How can I list all trusted domains using nltest?
You can list all trusted domains by running the following command:
```cmd
nltest /domain_trusts
```

### How do I force a refresh of the secure channel with the domain controller using nltest?
To force a refresh of the secure channel with the domain controller, use the following command:
```cmd
nltest /sc_query:domain_name
```

### How do I test the secure channel between the computer and the domain controller using nltest?
To test the secure channel between the computer and the domain controller, run the following command:
```cmd
nltest /sc_verify:domain_name
```

### How can I determine the site associated with the domain controller using nltest?
To determine the site associated with the domain controller, use the following command:
```cmd
nltest /dsgetsite
```

### How do I query the trusts for a specific domain using nltest?
To query the trusts for a specific domain, execute the following command:
```cmd
nltest /server:domain_controller /trusted_domains
```

## Applications of the NLTEST Command

- Query domain controller information
- Test trust relationships
- Force replication between domain controllers
- Reset secure channel to domain controller
- List trusted domains
- Simulate NetLogon secure channel
- List site information
- List domain controllers in a site
- Display trusted domain information
- List domain's policies
- Verify trust relationships