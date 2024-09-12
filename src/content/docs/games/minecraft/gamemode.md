---
title: gamemode Minecraft Command Guide
description: Learn how to efficiently use the Minecraft gamemode command to switch between different game modes in your game.
---

The Minecraft gamemode command is a useful tool that allows players to switch between different game modes, including Survival, Creative, Adventure, and Spectator modes. This command can be used in both single-player and multiplayer modes, giving players the flexibility to customize their gaming experience. By using the gamemode command, players can quickly adapt to different scenarios, whether they want to focus on survival challenges, unleash their creativity in building, or explore the world without any constraints. Understanding how to use the gamemode command effectively can enhance your gameplay and make your Minecraft experience more enjoyable.
## gamemode Syntax:
```console
/gamemode <mode> [player]
```
## Options:
| Option | Description                   |
|--------|-------------------------------|
| survival | Sets the player to Survival mode. |
| creative | Sets the player to Creative mode. |
| adventure | Sets the player to Adventure mode. |
| spectator | Sets the player to Spectator mode. |

## Parameters:
| Parameter | Description                       |
|-----------|-----------------------------------|
| mode      | The game mode to set the player to. (survival, creative, adventure, spectator) |
| player    | Optional. The player to set the gamemode for. If not specified, defaults to the command sender. | 

:::caution
Make sure to use the correct mode name (survival, creative, adventure, spectator) when using the /gamemode command.
:::
## gamemode Command Samples:
### Change Player Gamemode to Creative
```console
/gamemode creative @p
```
Changes the player closest to the command executor to Creative mode.

### Change Player Gamemode to Survival
```console
/gamemode survival Steve
```
Changes the player named "Steve" to Survival mode.

### Change Player Gamemode to Adventure
```console
/gamemode adventure notch
```
Changes the player named "Notch" to Adventure mode.

### Change Player Gamemode to Spectator
```console
/gamemode spectator @a
```
Changes all players to Spectator mode.

### Change Your Own Gamemode to Creative
```console
/gamemode creative
```
Changes your own gamemode to Creative mode.

### Change Gamemode of All Players Except One
```console
/gamemode survival @a[name=!Alex]
```
Changes the gamemode of all players except the one named "Alex" to Survival.

### Toggle Survival and Adventure Gamemodes
```console
/gamemode survival adventure @a
```
Toggles the gamemodes of all players from Survival to Adventure.
:::tip
When using the gamemode command in Minecraft, make sure to replace `<value>` with the correct mode you want to set: 0 for Survival, 1 for Creative, 2 for Adventure, or 3 for Spectator.
:::

## gamemode FAQ:
### How do I use gamemode in Minecraft?
To use the gamemode command in Minecraft, execute the following command:
```console
gamemode --option <value>
```

### How do I change my gamemode to Creative in Minecraft?
To change your gamemode to Creative in Minecraft, use the following command:
```console
gamemode creative
```

### How can I switch to Survival mode using the gamemode command?
To switch to Survival mode using the gamemode command in Minecraft, use the command:
```console
gamemode survival
```

### Is it possible to set my gamemode to Adventure mode with a command in Minecraft?
Yes, you can set your gamemode to Adventure mode by using the command:
```console
gamemode adventure
```

### How do I switch to Spectator mode using the gamemode command?
To switch to Spectator mode in Minecraft using the gamemode command, enter the following command:
```console
gamemode spectator
```

### Can I change another player's gamemode with the gamemode command in Minecraft?
Yes, you can change another player's gamemode using the gamemode command by specifying the player's name and the desired mode:
```console
gamemode <mode> <player>
```
## Applications of the gamemode command
- Setting a player's gamemode to Survival
- Changing a player's gamemode to Creative
- Switching a player's gamemode to Adventure
- Modifying a player's gamemode to Spectator