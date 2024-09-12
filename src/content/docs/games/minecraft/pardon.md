---
title: pardon Minecraft command
description: Learn how to use the Minecraft pardon command to remove a player from the server's banned list.
---

The Minecraft pardon command allows server operators to remove a player from the banned list. By issuing this command, players can regain access to the server after being banned. This command can only be executed by operators and requires the player's username as an argument. It is essential to ensure the player's behavior has improved before using the pardon command to prevent any further issues on the server.

## pardon Syntax:
```console
pardon <player>
```

## pardon Options:
| Option | Description                                      |
|--------|--------------------------------------------------|
| N/A    | There are no options available for the pardon command.|

:::caution
Use this command with caution as it can impact the gameplay experience and balance of the server by unbanning a player who was previously banned.
:::

## Parameters:
| Parameter | Description                            |
|-----------|----------------------------------------|
| player    | Specifies the player to be unbanned.   |
## pardon Command Usage Examples:
### Pardon a Banned Player
```console
pardon Steve
```
Unbans the player "Steve" from the Minecraft server.

### Pardon a Player with UUID
```console
pardon 069a79f4-350b-3a36-a292-5c986b626c7a
```
Unbans the player with the UUID "069a79f4-350b-3a36-a292-5c986b626c7a" from the server.

### Pardon a Player by Name
```console
pardon Notch
```
Unbans the player "Notch" from the Minecraft server.

### Unban a Specific IP Address
```console
pardon-ip 192.168.1.1
```
Unbans the specific IP address "192.168.1.1" from the server.

### Pardon Multiple Players
```console
pardon Steve Player2 Player3
```
Unbans multiple players ("Steve", "Player2", "Player3") at once from the server.
:::tip
When using the pardon command in Minecraft, make sure to specify the correct player or player UUID that you want to pardon. Double-check the spelling and ensure accuracy to avoid any errors.
:::

### How do I use pardon in Minecraft?
To use the pardon command in console, execute the following command:
```console
pardon player123
```

### What is the syntax for the pardon command?
The syntax for the pardon command in Minecraft is as follows:
```console
pardon <player>
```

### Can I pardon multiple players at once with the pardon command?
Yes, you can pardon multiple players at once by executing the following command:
```console
pardon player1 player2 player3
```

### How do I check if a player has been successfully pardoned?
You can check if a player has been successfully pardoned by using the following command:
```console
pardon list
```

### Can I use the pardon command to pardon myself?
Yes, you can use the pardon command to pardon yourself if you have been banned from the server. Just execute the command with your player name or UUID.

### Is there a cooldown period for the pardon command?
There is no cooldown period for the pardon command in Minecraft. You can use it whenever needed without any restrictions.

### How can server operators manage permissions for the pardon command?
Server operators can manage permissions for the pardon command by using plugins or server management tools that offer permission settings for commands.

### Does the pardon command work for offline players?
Yes, the pardon command works for offline players as well. You can pardon players even if they are not currently online on the server.
## Applications of the pardon command

- Unbanning a player from the server
- Removing a player from the banned players list