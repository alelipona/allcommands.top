---
title: Minecraft stats command
description: Discover how to use the Minecraft stats command to access various player statistics and information within the game world.
---

The Minecraft stats command allows players to view a wide range of statistics related to gameplay, such as player health, experience levels, achievement progress, and more. By using this command, players can track their progress, analyze their performance, and obtain valuable insights to enhance their gameplay experience. Whether you are a casual player or a dedicated gamer, the stats command provides a useful tool for monitoring and optimizing your gameplay.

## stats Syntax:
```console
/stats [entity] [objective]
```

## Options:
| Option    | Description                           |
|-----------|---------------------------------------|
| [entity]  | Specifies the target entity or player.|
| [objective] | Specifies the objective to display stats for.|

## Parameters:
| Parameter  | Description                                     |
|------------|-------------------------------------------------|
| entity     | The target entity or player to display stats for.|
| objective  | The objective to display stats for.              |

:::caution
Make sure to specify both the entity and objective parameters correctly to retrieve accurate statistics. Incorrect input may result in unintended behavior or errors.
:::
## stats Usage:
{EXAMPLES}

### Check Player Stats
```console
/stats @p
```
This command will display the stats of the nearest player.

### Display Mob Kill Count
```console
/stats @e[type=skeleton] killEntity
```
Shows the number of entities killed by Skeleton mobs.

### Show Blocks Mined
```console
/stats @a mined minecraft:diamond_ore
```
Reveals the total count of diamond ores mined by all players.

### Check Time Played
```console
/stats @a timePlayed
```
Shows the total time played by all players.
:::tip
When using the stats command in Minecraft, make sure to carefully follow the syntax and provide the necessary options to get the desired information. Take advantage of the various options available to retrieve specific statistics or data.
:::

### How do I use stats in Minecraft?
To use the stats command in Minecraft, execute the following command:
```console
stats
```

### How can I check a player's stats in Minecraft?
To check a player's stats in Minecraft, use the following command:
```console
stats query @p minecraft.used:minecraft.iron_sword
```

### How to reset stats for a player in Minecraft?
To reset stats for a player in Minecraft, use the following command:
```console
stats reset @p
```

### What is the syntax for using stats command to view statistics in Minecraft?
To view statistics using the stats command in Minecraft, use the following syntax:
```console
stats query <target> <criteria>
```

### How do I view the statistics of all players in Minecraft using stats?
To view the statistics of all players in Minecraft using stats, use the following command:
```console
stats query *
```

### How to list available criteria for stats command in Minecraft?
To list available criteria for the stats command in Minecraft, use the following command:
```console
stats
```

### How can I track the number of blocks broken by a player in Minecraft using stats?
To track the number of blocks broken by a player in Minecraft using stats, use the following command:
```console
stats query @p minecraft.mine_block.minecraft.stone
```
## Applications of the stats command

- Tracking player achievements
- Monitoring player progress
- Analyzing player behavior
- Creating in-game challenges
- Evaluating player performance
- Designing reward systems
- Balancing game difficulty
- Providing personalized player experiences