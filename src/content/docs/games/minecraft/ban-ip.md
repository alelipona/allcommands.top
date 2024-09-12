---
title: ban-ip Minecraft Command Guide
description: Learn how to use the ban-ip command in Minecraft to block specific IP addresses from connecting to your server.
---

The ban-ip command in Minecraft is used to block specific IP addresses from connecting to a server. By utilizing this command, server administrators can effectively manage and control who has access to their server. This can be particularly useful for preventing unwanted users or malicious individuals from causing disruptions or harm to the server. The ban-ip command is a powerful tool that helps maintain a safe and secure environment for all players on the server.
## ban-ip Syntax:
```console
ban-ip <address> [reason]
```
## Options:
| Option  | Description                      |
|---------|----------------------------------|
| address | The IP address to ban.           |
| reason  | Optional reason for the ban.     |

:::caution
Use this command carefully as it permanently bans an IP address from the server. Make sure you have a valid reason for banning the IP address.
:::

## ban-ip Command Samples:
### Ban a Specific IP Address
```console
ban-ip 192.168.1.100
```
Bans the specific IP address “192.168.1.100” from the Minecraft server.

### Ban an IP Range
```console
ban-ip 192.168.1.*
```
Bans all IP addresses within the range “192.168.1.*” from the Minecraft server.

### Ban an IP Address with a Reason
```console
ban-ip 10.0.0.1 "Inappropriate behavior"
```
Bans the IP address “10.0.0.1” with the reason “Inappropriate behavior”.

### Ban an IP Address with a Time Limit
```console
ban-ip 172.16.0.10 1d
```
Bans the IP address “172.16.0.10” from the server for 1 day.

### Ban an IP Address and Display a Custom Message
```console
ban-ip 192.168.0.5 kick
```
Bans the IP address “192.168.0.5” and displays a custom kick message to the player.

### Ban an IP Address by Player Username
```console
ban-ip @playername
```
Bans the IP address associated with the player username “playername” from the Minecraft server.

### Ban an IP Address with an Unban Message
```console
ban-ip 192.168.2.15 unban "You have been unbanned. Welcome back!"
```
Bans the IP address “192.168.2.15” from the server but provides an unban message for the future.
:::tip
When using the ban-ip command in Minecraft, make sure to double-check the player's IP address before issuing the ban to avoid accidental bans. Additionally, always keep a record of banned IP addresses for future reference.
:::

## ban-ip FAQ:
### How do I use ban-ip in Minecraft?
To use the ban-ip command in Minecraft, execute the following command:
```console
ban-ip <IP address>
```

### Can I unban an IP address in Minecraft using the ban-ip command?
To unban an IP address in Minecraft after using the ban-ip command, you can execute the following command:
```console
pardon-ip <IP address>
```

### What is the syntax for the ban-ip command in Minecraft?
The syntax for the ban-ip command in Minecraft is as follows:
```console
ban-ip <IP address>
```

### How can I check the list of banned IP addresses in Minecraft?
To view the list of banned IP addresses in Minecraft, you can use the following command:
```console
banlist ips
```

### Is there a way to add a reason for banning an IP address using the ban-ip command?
Yes, you can specify a reason for banning an IP address in Minecraft by including it in the command like this:
```console
ban-ip <IP address> <reason>
```

### Does the ban-ip command support wildcard IP banning in Minecraft?
Yes, you can use wildcard characters to ban a range of IP addresses in Minecraft using the ban-ip command, for example:
```console
ban-ip 192.168.*.*
```
## Applications of the ban-ip command

- Preventing disruptive players from logging into the server
- Enforcing server rules and maintaining a positive gaming environment
- Protecting the server from potential griefing or malicious activities
- Managing and controlling access to the server by banning specific IP addresses