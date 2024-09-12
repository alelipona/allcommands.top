---
title: Minecraft give command
description: Learn how to use the give command in Minecraft to give yourself or other players items and blocks quickly and efficiently.
---

The give command in Minecraft allows players to easily give themselves or other players items and blocks within the game. This command is commonly used in creative mode to quickly obtain resources for building and crafting. By typing /give [player] [item] [amount], players can spawn in any item or block they desire. This command is especially useful for server administrators and map creators who need to distribute specific items to players.
## give Syntax:
```console
/give [player] [item] [amount] [data] [dataTag]
```
## Options:
| Option    | Description                      |
|-----------|----------------------------------|
| player    | Specifies the player to give the item to.  |
| item      | Specifies the item to be given.          |
| amount    | Specifies the quantity of the item to be given. |
| data      | Specifies the data value of the item to be given. |
| dataTag   | Allows to specify NBT data for the item.       |

## Parameters:
| Parameter    | Description                                        |
|--------------|----------------------------------------------------|
| player       | The target player's username or UUID.               |
| item         | The item ID or block ID to be given.                 |
| amount       | The quantity of the item to be given.               |
| data         | The data value for certain items. Default is 0.     |
| dataTag      | NBT tag data in JSON format for specifying special properties of the item. |
 
:::caution
Ensure to use the correct item and data values to prevent unintended behavior in the game. Providing incorrect parameters or data could lead to issues or errors.
:::
### Give player a block of diamond
```console
give @p diamond_block 1
```
Gives the player who is closest to the command block a diamond block.

### Give player 5 iron ingots
```console
give @p iron_ingot 5
```
Gives the player who is closest to the command block 5 iron ingots.

### Give player a stack of arrows
```console
give @p arrow 64
```
Gives the player who is closest to the command block a stack (64) of arrows.

### Give player a diamond sword with sharpness enchantment
```console
give @p diamond_sword{Enchantments:[{id:"minecraft:sharpness",lvl:5}]} 1
```
Gives the player who is closest to the command block a diamond sword with sharpness level 5 enchantment.
:::tip
When using the give command in Minecraft, make sure to always double-check the item IDs and player names to avoid any mistakes.
:::

### How can I give myself a specific number of items in Minecraft?
To give yourself a specific number of items in Minecraft, use the give command with the quantity parameter like this:
```console
give @s minecraft:diamond 64
```

### How do I give a player a specific item with enchantments in Minecraft?
To give a player a specific item with enchantments in Minecraft, use the give command with the enchant parameter like this:
```console
give @p minecraft:diamond_sword{Enchantments:[{id:"sharpness",lvl:5}]} 1
```

### How can I give myself an item with custom attributes in Minecraft?
To give yourself an item with custom attributes in Minecraft, use the give command with the attribute parameter like this:
```console
give @s minecraft:diamond_chestplate{AttributeModifiers:[{AttributeName:"generic.max_health",Name:"generic.max_health",Amount:4,Operation:0,UUID:[I;117338833,366283847,787276665,951342175]}]} 1
```

### How do I give a player a named item in Minecraft?
To give a player a named item in Minecraft, use the give command with the CustomName parameter like this:
```console
give @p minecraft:golden_apple{display:{Name:"\"Super Apple\""}} 1
```

### How can I give myself a player head in Minecraft?
To give yourself a player head in Minecraft, use the give command with the SkullOwner parameter like this:
```console
give @s minecraft:player_head{SkullOwner:"MHF_Pig"} 1
```

### How do I give a player a potion with custom effects in Minecraft?
To give a player a potion with custom effects in Minecraft, use the give command with the Potion parameter like this:
```console
give @p minecraft:potion{CustomPotionEffects:[{Id:6,Amplifier:0,Duration:600}]} 1
```
## Applications of the give command

- Giving items to players
- Rewarding players in custom maps or mini-games
- Restoring lost items for players
- Spawning items for building or crafting purposes
- Setting up a player's inventory for specific scenarios or challenges