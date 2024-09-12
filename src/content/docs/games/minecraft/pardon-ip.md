---
title: pardon-ip Minecraft Command Guide
description: Learn how to use the pardon-ip command in Minecraft to unban IP addresses and allow players to reconnect to your server.
---

The pardon-ip command in Minecraft is used to revoke a ban on a specific IP address, allowing previously banned players to reconnect to the server. This command is useful for server administrators to manage player bans effectively. By using the pardon-ip command, you can grant players access to your server again without having to lift a ban on all players associated with that IP address. To use the pardon-ip command, you need operator (op) permissions on the server. Simply type /pardon-ip followed by the IP address you wish to unban. This command is handy for resolving mistaken bans or giving players a second chance to abide by the server rules.
## pardon-ip Syntax:
```console
pardon-ip <address>
```

## Options:
| Option  | Description                |
|---------|----------------------------|
| <address> | Specifies the IP address to be pardoned. |

## Parameters:
N/A

:::caution
Use this command carefully as pardoning an IP address may result in allowing potentially harmful or disruptive players back onto the server.
:::
## pardon-ip Command Samples:
### Pardon an IP Address
```console
pardon-ip 192.168.0.1
```
This command pardons the specified IP address “192.168.0.1”, allowing it to access the server again.

### Unban an IP Address
```console
pardon-ip 10.0.0.1
```
This command lifts the ban on the IP address “10.0.0.1”, enabling it to connect to the server once more.

### Revoke IP Ban
```console
pardon-ip 172.16.0.1
```
Executing this command removes the ban on the IP address “172.16.0.1”, granting it access to the server.

### Allow Access for an IP
```console
pardon-ip 192.168.1.1
```
By using this command, you permit the IP address “192.168.1.1” to reconnect to the server.

### Lift IP Restriction
```console
pardon-ip 10.10.0.1
```
This command removes the restriction on the IP address “10.10.0.1”, allowing it to join the server without any limitations.

### Reverse IP Ban
```console
pardon-ip 172.17.0.1
```
By executing this command, the ban on the IP address “172.17.0.1” is reversed, granting it access to the server.

### Grant Server Access
```console
pardon-ip 192.168.2.1
```
Executing this command provides server access to the specified IP address “192.168.2.1”, allowing it to join and play.
:::tip
When using the pardon-ip command in Minecraft, make sure to double-check the player's IP address before executing the command to avoid any accidental unbanning of players.
:::

## pardon-ip FAQ:
### How do I use pardon-ip in Minecraft?
To use the pardon-ip command in Minecraft, execute the following command:
```console
pardon-ip 192.168.1.1
```

### Can I pardon multiple IP addresses at once with the pardon-ip command?
Yes, you can pardon multiple IP addresses at once by separating each IP address with a space in the command. Here is an example:
```console
pardon-ip 192.168.1.1 123.456.78.9
```

### How can I check the list of banned IP addresses before using the pardon-ip command?
You can view the list of banned IP addresses in Minecraft by running the following command:
```console
banlist ips
```

### Is there a way to customize the pardon-ip command in Minecraft with additional options?
Yes, you can customize the pardon-ip command with additional options like removing the ban from the server configuration file. Here is an example:
```console
pardon-ip 192.168.1.1 --delete-config
```

### What happens if I try to pardon an IP address that is not on the banned list?
If you try to pardon an IP address that is not on the banned list, Minecraft will display a message indicating that the IP address was not found in the list of banned IP addresses.

### Can I use the pardon-ip command to unban a player by their username instead of IP address?
No, the pardon-ip command in Minecraft specifically pardons players by their IP addresses. To unban a player by their username, you would need to use the pardon command instead.
## Applications of the pardon-ip command
- To remove a specific IP address from the server's ban list.
- To allow players coming from a certain IP address to join the server again after being banned.
- To manage and maintain the server's ban list by selectively pardoning banned IP addresses.
- To provide a second chance to players who may have been banned for minor infractions or misunderstandings.