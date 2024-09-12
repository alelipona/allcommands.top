---
title: Minecraft item command
description: Learn how to use the Minecraft item command to obtain any block or item in the game instantly. Easily customize your inventory with this powerful command.
---

The Minecraft item command is a powerful tool that allows players to obtain any block or item in the game instantly. By using the item command, players can customize their inventory, access rare items, or even retrieve items that are difficult to obtain in survival mode. This command is especially useful for map makers and server administrators who need to quickly add specific items to the game. With the item command, players have the flexibility to create their own unique gameplay experiences and access a wide range of items that can enhance their adventures in the Minecraft world.
## item Syntax:
```console
/item [player] give [item] [amount] [data] [dataTag]
```
## Options:
| Option    | Description                         |
|-----------|-------------------------------------|
| player    | Specifies the player to give the item to. If not specified, defaults to the player running the command. |
| item      | Specifies the item to be given.      |
| amount    | Specifies the amount of the item to give. |
| data      | Specifies the data value of the item. |
| dataTag   | Specifies the NBT data of the item.   |

## Parameters:
| Parameter | Description                                          |
|-----------|------------------------------------------------------|
| player    | The player to give the item to.                      |
| item      | The item ID (or name if applicable) to be given.     |
| amount    | The amount of the item to be given.                  |
| data      | The data value of the item (if applicable).          |
| dataTag   | The NBT data of the item (if applicable).            |

:::caution
Make sure to use correct item IDs or names when using the `/item` command. Giving items with incorrect or non-existent IDs could cause unexpected behavior in the game.
:::
## item Usage:
### Give a Player a Diamond
```console
/give @p minecraft:diamond 1
```
This command gives the nearest player one diamond.

### Clear a Player's Inventory
```console
/clear @p
```
Clears the inventory of the nearest player.

### Place a Wooden Sword in a Player's Inventory
```console
/give @p minecraft:wooden_sword
```
Adds a wooden sword to the inventory of the nearest player.

### Replace All Items in a Chest with Books
```console
/replaceitem block 100 0 0 chest 0 minecraft:book
```
Replaces all items in the chest at coordinates (100, 0, 0) with books.
:::tip
Make sure to carefully read the syntax and options available for the item command in Minecraft to use it efficiently for your gameplay needs.
:::

### How can I give myself an item in Minecraft?
To give yourself an item in Minecraft, use the following command:
```console
item give @s minecraft:diamond 64
```

### How do I remove an item from my inventory in Minecraft?
To remove an item from your inventory in Minecraft, use the following command:
```console
item clear @s minecraft:diamond
```

### How can I see all the items in my inventory in Minecraft?
To view all the items in your inventory in Minecraft, use the following command:
```console
item list @s
```

### How do I get information about a specific item in Minecraft?
To get information about a specific item in Minecraft, use the following command:
```console
item query @s minecraft:diamond
```

### How can I change the count of a specific item in Minecraft?
To change the count of a specific item in Minecraft, use the following command:
```console
item modify @s minecraft:iron set 32
```

### How do I check for a specific item in an entity's inventory in Minecraft?
To check for a specific item in an entity's inventory in Minecraft, use the following command:
```console
item query @e[type=armor_stand] minecraft:diamond
```
## Applications of the item command

- Adding items to player inventories
- Removing items from player inventories
- Modifying item properties and attributes
- Customizing player equipment and inventory
- Creating custom loot tables for chests and mobs