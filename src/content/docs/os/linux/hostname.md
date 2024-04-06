---
title: What is hostname Linux command?
description: Learn how to use the Linux hostname command to set or view the system's hostname easily. 
---

The Linux hostname command is used to view or set the system's hostname. It can be helpful for identifying the system within a network or modifying the hostname temporarily or permanently.

## hostname Syntax:
```bash
hostname [option]
```

## hostname Options:
| Option | Description                  |
|--------|------------------------------|
| -a     | Display the alias name       |
| -d     | Display the DNS domain name  |
| -f     | Display the FQDN (fully qualified domain name) |
| -i     | Display the network address (IP address) |
| -s     | Display the short hostname   |

:::caution
Exercise caution while using the hostname command, as incorrect usage may lead to unexpected results or system errors.
:::

## Parameters:
There are no specific parameters for the hostname command.
## hostname Command Usage Examples:
### Display the current hostname
```bash
hostname
```
This command will display the current hostname of the system.

### Display the FQDN (Fully Qualified Domain Name)
```bash
hostname -f
```
Use this command to display the fully qualified domain name (FQDN) of the system.

### Set a new hostname
```bash
sudo hostnamectl set-hostname newhostname
```
This command allows changing the hostname to a new one, in this case, "newhostname".

### Display the local hostname
```bash
hostname -s
```
The -s flag is used to display the local hostname of the system.

### Display all information about the hostname
```bash
hostname -a
```
By using the -a flag, you can display all information associated with the hostname of the system.
:::tip
When using the hostname command in Linux, make sure to use the appropriate options and values to perform the desired actions effectively. Referencing the command's man page (`man hostname`) can help you understand all the available options and their usage.
:::

### How do I use hostname in Linux?
To use the hostname command in bash, execute the following command:
```bash
hostname
```

### How to set a new hostname in Linux?
To set a new hostname in Linux using the hostname command, follow this example:
```bash
hostname newhostname
```

### How to display the FQDN using hostname in Linux?
To display the Fully Qualified Domain Name (FQDN) using the hostname command in Linux, use the following command:
```bash
hostname --fqdn
```

### How to display the domain name using hostname in Linux?
To display the domain name using the hostname command in Linux, you can run:
```bash
hostname --domain
```

### How to display the short hostname using hostname in Linux?
To display the short hostname using the hostname command in Linux, you can use:
```bash
hostname --short
```

### How to display the IP address associated with the hostname using hostname in Linux?
To display the IP address associated with the hostname using the hostname command in Linux, execute the following:
```bash
hostname -I
```

### How to display all the information available with hostname in Linux?
To display all the information available with the hostname command in Linux, you can run:
```bash
hostname --all-fqdn
```

### How to display the version information for hostname in Linux?
To display the version information for the hostname command in Linux, use the following command:
```bash
hostname --version
```
## Applications of the hostname command

- Display or set the system's hostname
- Show the DNS domain name of the system
- Print the FQDN (Fully Qualified Domain Name) of the system
- Retrieve or change the NIS (Network Information Service) domain name
- Return the local host name
- Specify the version and release information of the operating system