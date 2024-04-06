---
title: nslookup command in Linux
description: Perform DNS queries using the nslookup command in Linux. Find IP addresses, resolve domain names, and troubleshoot network connectivity.
---

The nslookup command in Linux is a powerful tool used for querying Domain Name System (DNS) servers. It allows users to perform various types of DNS queries, such as finding the IP address of a domain, resolving domain names to IP addresses, and troubleshooting network connectivity issues. By using nslookup, system administrators and users can gather valuable information about domain names and their corresponding IP addresses, helping them identify and resolve DNS-related problems efficiently.

## nslookup Syntax:
```bash
nslookup [options] [host] [server]
```

## Linux nslookup Options:
| Option | Description                       |
|--------|-----------------------------------|
| -querytype=[type] | Specify the DNS query type (A, MX, NS, etc.) |
| -timeout=[seconds] | Set the query timeout in seconds |
| -class=[class] | Specify the DNS query class (IN for Internet) |
| -port=[port] | Specify the DNS server port |
| -debug | Enable debug mode for troubleshooting |
| -vc | Use a virtual circuit when sending the query |
| -trace | Enable trace mode to trace query route |

## nslookup Parameters:
| Parameter | Description                       |
|-----------|-----------------------------------|
| host      | The host/domain to query           |
| server    | The DNS server to query            |
:::caution
Exercise caution while using the nslookup command. It provides direct access to DNS queries and can expose sensitive information. Use it responsibly and avoid querying sensitive domains without permission.
:::
## How to use nslookup command:
### Resolve a Domain Name
```bash
nslookup www.google.com
```
Queries the DNS server to resolve the domain name "www.google.com" to an IP address.

### Reverse DNS Lookup
```bash
nslookup 8.8.8.8
```
Performs a reverse DNS lookup on the IP address "8.8.8.8" to find the associated domain name.

### Specify DNS Server
```bash
nslookup yahoo.com 8.8.4.4
```
Queries the specified DNS server "8.8.4.4" to resolve the domain name "yahoo.com" to an IP address.

### Display Additional Information
```bash
nslookup -query=hinfo yahoo.com
```
Returns the host information (HINFO) record for the domain name "yahoo.com" in addition to the usual output.

### Set Timeout for Query
```bash
nslookup facebook.com -timeout=5
```
Sets a timeout of 5 seconds for the query to resolve the domain name "facebook.com" to an IP address.

### Find Mail Server DNS Records
```bash
nslookup -type=mx yahoo.com
```
Retrieves the mail server (MX) DNS records for the domain name "yahoo.com".

### Suppress Display of Detailed Information
```bash
nslookup -sil yahoo.com
```
Suppresses the display of detailed information and retrieves only the results for the domain name "yahoo.com".

### Check IPv6 Address
```bash
nslookup -query=AAAA google.com
```
Queries for the IPv6 address (AAAA record) of the domain name "google.com".
:::tip
When using the nslookup command, make sure to provide the appropriate options and values to get the desired results. Pay attention to the syntax of the command and the specific parameters required for your query.
:::

### How do I use nslookup in Linux?
To use the nslookup command in Linux, execute the following command:
```bash
nslookup example.com
```

### What is the purpose of using nslookup?
The nslookup command is used to query domain name servers to obtain domain name or IP address mapping or other DNS information.
```bash
nslookup example.com
```

### How can I specify a custom DNS server with nslookup?
To specify a custom DNS server with nslookup, use the following command format:
```bash
nslookup example.com <custom_DNS_server>
```

### How do I get more detailed information with nslookup?
To obtain more detailed information with nslookup, add the "-debug" option to the command:
```bash
nslookup -debug example.com
```

### Can I perform a reverse DNS lookup with nslookup?
Yes, you can perform a reverse DNS lookup using nslookup. Simply input the IP address instead of the domain name in the command:
```bash
nslookup 8.8.8.8
```

### How do I enable query retries in nslookup?
To enable query retries in nslookup, use the following command format with the desired number of retries:
```bash
nslookup -retry=<num> example.com
```

### How can I set a timeout value for nslookup queries?
To set a timeout value for nslookup queries, specify the timeout duration in seconds using the "-timeout" option:
```bash
nslookup -timeout=<seconds> example.com
```

### How do I perform an nslookup with a specific record type?
To perform an nslookup with a specific record type, include the record type after the domain name in the command:
```bash
nslookup example.com MX
```

### Can I perform batch mode queries with nslookup?
Yes, you can perform batch mode queries by providing a file with the list of queries to nslookup using the following command:
```bash
nslookup -query=any - < query_list.txt
```

## Applications of the nslookup command

1. Querying DNS to resolve domain names
2. Retrieving DNS records such as A, AAAA, MX, NS, and PTR records
3. Troubleshooting DNS-related issues
4. Checking the mapping between domain names and IP addresses