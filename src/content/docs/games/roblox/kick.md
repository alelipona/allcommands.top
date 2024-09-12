---
title: kick Roblox command
description: Discover how to use the Roblox kick command efficiently in your games. Learn the syntax and key tips for successful implementation.
---

The Roblox kick command is a powerful tool that allows game developers to remove players from a server. By using the kick command, you can maintain order and ensure a positive gaming experience for all players. To kick a player, simply type "/kick [playername]" into the chat or console. This will immediately remove the specified player from the server. Keep in mind that only players with the necessary permissions can execute the kick command. Additionally, it's essential to use the kick command responsibly and only when necessary to maintain a fair and enjoyable gaming environment for everyone.
## kick Syntax:
```console
kick [player]
```
## Options:
| Option | Description          |
|--------|----------------------|
| None   | No options available |

## Parameters:
| Parameter | Description                 |
|-----------|-----------------------------|
| player    | The player to be kicked     |

:::caution
Use this command with caution as it will immediately kick the specified player from the Roblox game.
:::
## kick console Examples:
### Kick Player by Username
```console
kick username123
```
Kicks the player with the username "username123" from the game.

### Kick Player by UserID
```console
kick 1234567890
```
Kicks the player with the UserID "1234567890" from the game.

### Kick Player with Reason
```console
kick username123 Rule Violation
```
Kicks the player with the username "username123" from the game for the reason "Rule Violation".

### Kick Player by Username and Provide Reason
```console
kick player2 AFK for too long
```
Kicks the player with the username "player2" from the game for being AFK for too long.

### Kick Player by UserID and Display Message
```console
kick 9876543210 Cheating Detected
```
Kicks the player with the UserID "9876543210" from the game and displays the message "Cheating Detected".

### Kick Multiple Players Simultaneously
```console
kick player1 player2 player3 Inactivity
```
Kicks multiple players (player1, player2, and player3) from the game simultaneously for inactivity.
:::tip
Make sure to provide a valid player's username or user ID when using the kick command in Roblox to ensure that you are kicking the correct player.
:::

## kick Command Help Center:

### How do I use kick in Roblox?
To use the kick command in Roblox, execute the following command:
```console
kick --player username
```

### Can I kick multiple players at once using the kick command?
Yes, you can kick multiple players at once using the kick command by specifying each player's username or user ID.
```console
kick --player player1 --player player2
```

### Is there a way to provide a reason when kicking a player in Roblox?
Yes, you can provide a reason when kicking a player in Roblox using the kick command by adding the --reason option.
```console
kick --player username --reason "No trolling allowed"
```

### How can I kick a player silently without notifying them?
To kick a player silently in Roblox without notifying them, you can use the --silent option in the kick command.
```console
kick --player username --silent
```

### Can I kick a player by their user ID instead of username?
Yes, you can kick a player by their user ID instead of their username using the kick command in Roblox.
```console
kick --userid 123456789
```

### What permissions are required to use the kick command in Roblox?
In order to use the kick command in Roblox, you need to have the necessary admin privileges or permissions within the game.

### How do I see a list of available options for the kick command in Roblox?
You can see a list of available options for the kick command in Roblox by using the --help option.
```console
kick --help
```

### Is it possible to set a time limit for the kick action in Roblox?
Currently, there is no built-in option to set a time limit for the kick action in Roblox using the kick command.
## Applications of the kick command

- Removing disruptive players from a game
- Enforcing rules and regulations in a game
- Addressing disrespectful behavior from players
- Preventing the use of hacks or cheats in a game
- Managing server performance by removing idle or AFK players