---
title: advancement Minecraft command
description: Discover how to use the Minecraft advancement command to track player progress and unlock in-game achievements with ease.
---

The Minecraft advancement command is a powerful tool that allows players to track and grant in-game achievements. By using this command, players can create custom achievements, track player progress, and reward them with unique benefits. The advancement command is highly customizable and can be tailored to fit any gameplay style or server environment. Whether you're a casual player looking to add new challenges or a server administrator wanting to create a unique player experience, the advancement command is a versatile tool that can enhance your Minecraft gameplay.

## advancement Syntax:
```console
/advancement grant|revoke|test|... <player> <criteria> [advancement] [criterion]
```

## advancement Options:
| Option      | Description                           |
|-------------|---------------------------------------|
| grant       | Grants an advancement to a player     |
| revoke      | Revokes an advancement from a player  |
| test        | Tests if a player has completed a criteria in an advancement |
| ...         | Other options for managing advancements|

:::caution
Avoid granting or revoking advancements without proper consideration, as it may disrupt gameplay or progression for players.
:::

## Parameters:
| Parameter       | Description                               |
|-----------------|-------------------------------------------|
| player          | Specifies the player to grant/ revoke the advancement for |
| criteria        | Specifies the criteria to test for or grant/ revoke |
| advancement     | (Optional) Specifies the advancement to grant or revoke   |
| criterion       | (Optional) Specifies the specific criterion to test for or grant/ revoke within an advancement |

## advancement Command Usage Examples:
### Grant an Advancement to a Player
```console
advancement grant @p only minecraft:adventure/kill_a_mob
```
Grants the advancement "kill_a_mob" in the "adventure" category to the nearest player.

### Revoke an Advancement from a Player
```console
advancement revoke @p only minecraft:story/build_hoe
```
Revokes the advancement "build_hoe" in the "story" category from the nearest player.

### Grant Multiple Advancements to a Player
```console
advancement grant @a only minecraft:husbandry/complete_catalog minecraft:adventure/adventuring_time
```
Grants the advancements "complete_catalog" in the "husbandry" category and "adventuring_time" in the "adventure" category to all players.

### Grant Advancement with Criteria Met
```console
advancement grant @p only minecraft:adventure/sniper{"distance":"25"}
```
Grants the advancement "sniper" in the "adventure" category to the nearest player, with the condition of having a shot fired from at least 25 blocks away.

### Revoke All Advancements from a Player
```console
advancement revoke @a *
```
Revokes all advancements from all players on the server.
:::tip
When using the advancement command in Minecraft, make sure to carefully follow the syntax and parameters to customize the advancement settings according to your needs.
:::

### How do I use advancement in Minecraft?
To use the advancement command in console, execute the following command:
```console
advancement --grant @a minecraft:story/upgrade_diamond_1
```

### How can I grant an advancement to all players on the server?
To grant an advancement to all players on the server using the advancement command, run the following command:
```console
advancement grant @a minecraft:story/find_diamond
```

### How do I revoke a specific advancement from a player in Minecraft?
To revoke a specific advancement from a player in Minecraft, use the following command syntax:
```console
advancement revoke <player> only minecraft:adventure/kill_a_mob
```

### How can I list all available advancements in Minecraft?
To list all available advancements in Minecraft, enter the following command:
```console
advancement list
```

### How do I display a specific advancement status for a player?
To display a specific advancement status for a player, execute the following command:
```console
advancement show <player> minecraft:story/upgrade_tools
```

### How can I grant a specific advancement to a player in Minecraft?
To grant a specific advancement to a player in Minecraft, run the following command:
```console
advancement grant <player> only minecraft:story/mine_stone
```

### How do I revoke all advancements from a player in Minecraft?
To revoke all advancements from a player in Minecraft, use the following command:
```console
advancement revoke <player> everything
```

### How can I grant a specific advancement only if the player meets certain criteria?
To grant a specific advancement only if the player meets certain criteria, execute the following command:
```console
advancement grant <player> minecraft:adventure/adventuring_time{"criteria":{"distance":1000000}}
```
## Applications of the advancement command

- Creating custom achievement systems
- Tracking player progress in a map or adventure
- Providing rewards for completing tasks
- Monitoring player activities and behaviors