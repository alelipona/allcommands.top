---
title: achievement Minecraft Command Guide
description: Learn how to use the achievement command in Minecraft to unlock in-game accomplishments. Track your progress and show off your skills to other players.
---

The achievement command in Minecraft is a powerful tool that allows players to unlock in-game accomplishments and track their progress. By using this command, players can view a list of available achievements, mark specific achievements as complete, and even grant themselves achievements that they have not yet earned. This can be useful for players who want to showcase their skills to others or for server administrators who want to create custom challenges for their players. Additionally, the achievement command can be used to reset all of a player's achievements, giving them a fresh start or allowing them to re-earn their accomplishments. Overall, the achievement command is a valuable feature in Minecraft that adds a new level of depth and customization to the game.
## achievement Syntax:
```console
/achievement <grant|take|list|clear> [player] [achievement_id]
```
## Options:
| Option      | Description                             |
|-------------|-----------------------------------------|
| grant       | Grants an achievement to a player       |
| take        | Removes an achievement from a player    |
| list        | Lists all available achievements        |
| clear       | Clears all achievements for a player    |

## Parameters:
| Parameter     | Description                               |
|---------------|-------------------------------------------|
| player        | The player to grant/take achievements from|
| achievement_id| The ID of the achievement to grant/take   |

### Award "First Steps" Achievement to Player
```console
achievement give @p minecraft:minecraft:minecraft:story/mine_stone
```
This command gives the player the "First Steps" achievement for mining stone.

### Revoke "Taking Inventory" Achievement from Player
```console
achievement take @p minecraft:story/take_inventory
```
This command removes the "Taking Inventory" achievement from the player.

### View Player's Achievements
```console
achievement list @p
```
Use this command to display a list of achievements earned by the specified player.

### Award "Hot Stuff" Achievement to All Players
```console
achievement give @a minecraft:story/smelt_iron
```
This command grants the "Hot Stuff" achievement to all players on the server for smelting iron.

### Reset All Player Achievements
```console
achievement clear @a
```
Resets all achievements for every player on the server.

### Award "The End" Achievement to Player "Steve"
```console
achievement give Steve minecraft:story/enter_the_end
```
Grants the "The End" achievement to the player with the username "Steve" for entering the End dimension.

### Revoke Specific Achievement from Player
```console
achievement take @p minecraft:adventure/kill_a_mob
```
Remove the specific "Kill a Mob" achievement from the player.
:::tip
When using the achievement command in Minecraft, make sure to replace <value> with the specific options and values needed for the command you want to execute. Always refer to the Minecraft documentation or command guides for correct syntax and available options.
:::

## achievement FAQ:
### How do I use achievement in Minecraft?
To use the achievement command in Minecraft, execute the following command:
```console
achievement --option <value>
```

### How can I grant an achievement to a player in Minecraft?
To grant an achievement to a player in Minecraft, use the following command:
```console
achievement give <player> <achievement_name>
```

### How do I remove an achievement from a player in Minecraft?
To remove an achievement from a player in Minecraft, you can use the following command:
```console
achievement take <player> <achievement_name>
```

### How can I list all available achievements in Minecraft?
To list all available achievements in Minecraft, you can use the following command:
```console
achievement list
```

### How do I check the achievements of a player in Minecraft?
To check the achievements of a player in Minecraft, use the following command:
```console
achievement list <player>
```

### Can I reset all achievements for a player in Minecraft?
You can reset all achievements for a player in Minecraft by using the following command:
```console
achievement reset <player>
```
## Applications of the achievement command

- Rewarding players for completing tasks or reaching milestones
- Adding a sense of accomplishment in gameplay
- Providing challenges and goals for players to strive towards
- Enhancing the overall gaming experience by recognizing player achievements