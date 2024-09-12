---
title: banlist Minecraft Command Guide
description: Everything you need to know about the banlist command in Minecraft. Learn how to manage banned players on your server efficiently.
---

The banlist command in Minecraft allows server admins to view and manage the list of banned players. By using this command, you can easily keep track of who is banned from your server and make any necessary adjustments as needed. The banlist command provides essential information such as the player's username and the reason for their ban. This feature is crucial for maintaining a safe and enjoyable gaming environment for all players on your Minecraft server.
## banlist Syntax:
```console
banlist [ips|players] 
```
## Options:
| Option   | Description                           |
|----------|---------------------------------------|
| ips      | Lists all IP addresses on the banlist |
| players  | Lists all player names on the banlist |
  
:::caution
Using the banlist command without caution can reveal sensitive information such as IP addresses. Make sure to use this command responsibly and with appropriate permissions.

:::
## banlist Command Samples:
### Add a Player to the Banlist
```console
banlist add player Steve
```
This command adds the player named "Steve" to the banlist.

### Remove a Player from the Banlist
```console
banlist remove player Alex
```
This command removes the player named "Alex" from the banlist.

### Check the Banlist
```console
banlist list
```
Lists all the players currently banned on the server.

### Add an IP Address to the Banlist
```console
banlist add ip 192.168.1.100
```
This command adds the IP address "192.168.1.100" to the banlist.

### Unban an IP Address
```console
banlist remove ip 192.168.1.200
```
This command removes the IP address "192.168.1.200" from the banlist.

### Enable Banlist
```console
banlist enable
```
Enables the banlist feature on the server.

### Disable Banlist
```console
banlist disable
```
Disables the banlist feature on the server.


:::tip
When using the banlist command in Minecraft, ensure you have the necessary permissions to view or manage the ban list. It's important to carefully consider who you want to ban or unban from your server to maintain a positive gameplay experience for all players.
:::

## banlist FAQ:
### How do I use banlist in Minecraft?
To use the banlist command in Minecraft, execute the following command:
```console
banlist
```

### Can I check the ban list on my Minecraft server?
To view the list of banned players on your Minecraft server, use the banlist command without any options:
```console
banlist
```

### How can I see the IP addresses of banned players in Minecraft?
To display the list of banned players along with their associated IP addresses, use the banlist command with the "ips" option:
```console
banlist ips
```

### How do I check if a specific player is banned on my Minecraft server?
If you want to check whether a particular player is banned on your server, use the banlist command with the "players" option followed by the player's username:
```console
banlist players <playername>
```

### Can I clear the ban list on my Minecraft server?
To remove all players from the ban list on your server, you can use the pardon command followed by a wildcard character (*):
```console
pardon *
```

### How do I ban and unban players using the banlist command in Minecraft?
You can ban a player by using the ban command with their username, and to unban them, use the pardon command followed by their username. Remember to save the changes to the ban list for them to take effect.
```console
ban <playername>
pardon <playername>
```
## Applications of the banlist command

- To view the list of players who are banned on the server.