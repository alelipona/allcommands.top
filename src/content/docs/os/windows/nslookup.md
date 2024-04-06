---
title: What is NSLOOKUP Windows command?
description: Perform DNS lookups on Windows with the nslookup command. Find IP addresses, domain names, and troubleshoot network issues easily.
---

The NSLOOKUP command in Windows is a powerful tool for performing DNS lookups. It allows users to query domain name servers to obtain information about IP addresses and domain names. By using nslookup, users can troubleshoot network connectivity, check DNS records, and diagnose DNS-related issues effectively. This command provides valuable information for network administrators, IT professionals, and anyone looking to understand and manage DNS settings on a Windows system.

## NSLOOKUP Syntax:
```cmd
nslookup [Option] [Parameter]
```

## NSLOOKUP Options:
| Option   | Description                                      |
|----------|--------------------------------------------------|
| -d       | Enables debugging mode                           |
| -n           | Disables the use of DNS server settings         |
| -q=<querytype>  | Sets the query type (e.g., A, NS, CNAME, PTR)     |
| -recurse     | Queries the specified DNS server recursively    |
| -timeout=<seconds> | Sets the query timeout in seconds         |

## Parameters:
| Parameter     | Description                                           |
|---------------|-------------------------------------------------------|
| Server        | Specifies the DNS server to query                     |
| Name          | Specifies the hostname to lookup                      |
| -port=<port>  | Specifies the port number to use for the DNS connection|
## NSLOOKUP Command Usage Examples:
### Resolve an IP Address to a Hostname
```cmd
nslookup 8.8.8.8
```
Uses nslookup to resolve the IP address "8.8.8.8" to its corresponding hostname.

### Find the IP Address of a Domain
```cmd
nslookup www.google.com
```
Queries the DNS server to find the IP address associated with the domain "www.google.com".

### Set the DNS Server to Query
```cmd
nslookup
server 8.8.8.8
www.microsoft.com
```
Changes the DNS server to "8.8.8.8" and then looks up the IP address of "www.microsoft.com".

### Reverse Lookup of an IP Address
```cmd
nslookup -type=PTR 8.8.8.8
```
Performs a reverse lookup on the IP address "8.8.8.8" to find the associated hostname.

### Display Detailed Information
```cmd
nslookup -type=all www.example.com
```
Retrieves all available information for the domain "www.example.com" from the DNS server.
:::tip
When using the nslookup command in Windows CMD, make sure to enter the correct domain name or IP address after the command to obtain the desired information. Additionally, familiarize yourself with the various options available with nslookup to customize your queries effectively.
:::

### How do I use nslookup in Windows?
To use the nslookup command in CMD, execute the following command:
```cmd
nslookup google.com
```

### How to perform a reverse DNS lookup with nslookup?
To perform a reverse DNS lookup using nslookup in Windows CMD, use the following command structure:
```cmd
nslookup <IP address>
```

### How can I specify a different DNS server with nslookup?
To specify a different DNS server when using nslookup in Windows, you can use the following command format:
```cmd
nslookup google.com <DNS server>
```

### How do I query for specific types of DNS records with nslookup?
To query specific types of DNS records using nslookup in Windows CMD, use the following format:
```cmd
nslookup -type=<record type> <domain>
```

### How can I enable or disable the recursion feature in nslookup?
To enable or disable the recursion feature in nslookup in Windows, use the following commands:
```cmd
nslookup -recurse <domain>
nslookup -norecurse <domain>
```

### How do I set a timeout value for nslookup queries in Windows?
To set a specific timeout value for nslookup queries in Windows CMD, use the following command structure:
```cmd
nslookup -timeout=<value> <domain>
```

### How can I perform a debug query using nslookup in Windows?
To perform a debug query using nslookup in Windows CMD, use the following command:
```cmd
nslookup -debug <domain>
```

### How to save nslookup query results to a text file?
To save the nslookup query results to a text file in Windows CMD, you can use the following command structure:
```cmd
nslookup google.com > nslookup_results.txt
```
## Applications of the NSLOOKUP Command

- Troubleshooting DNS-related issues
- Checking DNS records for a domain
- Finding the IP address associated with a domain
- Verifying name resolution
- Checking the DNS server configuration
- Testing DNS server response times