---
title: clear Minecraft command
description: Learn how to efficiently use the clear command in Minecraft to remove items from your inventory or a specific player's inventory.
---

The clear command in Minecraft is a useful tool for removing items from your inventory or a specific player's inventory. This command can help you quickly clear out unwanted items, organize your inventory, or manage players in a multiplayer setting. By specifying the target player or inventory slot, you can easily remove specific items or clear out entire inventories with just a few simple commands. Mastering the clear command can streamline your gameplay and make managing your inventory much more efficient.

## clear Syntax:
```console
/clear [player] [item] [data] [maxCount] [dataTag]
```
## clear Options:
| Option   | Description                       |
|----------|-----------------------------------|
| player   | Specifies the target player        |
| item     | Specifies the item to be cleared   |
| data     | Specifies the item's data value    |
| maxCount | Specifies the maximum count to clear |
| dataTag  | Specifies additional data in the item to be cleared |

:::caution
Make sure to use the clear command carefully as it will remove the specified items from the specified player's inventory.
:::

## clear Command Usage Examples:
### Clear a Specific Player's Inventory
```console
clear Jack
```
Removes all items from the inventory of the player named "Jack".

### Clear All Items From Your Inventory
```console
clear @s
```
Clears all items from your own inventory.

### Clear a Specific Item From a Player's Inventory
```console
clear Jack diamond_sword
```
Removes all Diamond Swords from the inventory of the player named "Jack".

### Clear All Items in a Specific Slot of a Player's Inventory
```console
clear Jack minecraft:diamond 0
```
Clears all Diamonds from slot 0 of the inventory of the player named "Jack".

### Clear All Items in a Specific Slot From Your Inventory
```console
clear @s minecraft:iron_ingot 5
```
Removes all Iron Ingots from slot 5 of your inventory.
:::tip
When using the clear command in Minecraft, make sure to specify the correct options to clear specific items from your inventory. This command is especially useful for managing large quantities of items quickly.
:::

### How do I use clear in Minecraft?
To use the clear command in console, execute the following command:
```console
clear --all
```

### What does the clear command do in Minecraft?
The clear command in Minecraft removes specified items from the player's inventory or clears the entire inventory.
```console
clear --item diamond
```

### How can I clear a specific item type in Minecraft?
You can use the clear command with the --item option followed by the item type to remove that specific item from your inventory.
```console
clear --item iron_sword
```

### Can I clear a specific quantity of items in Minecraft?
Yes, you can specify the quantity of items to clear by using the --count option in the clear command.
```console
clear --item apple --count 10
```

### How do I clear all items from my inventory in Minecraft?
To clear all items from your inventory in Minecraft, use the clear command with the --all option.
```console
clear --all
```

### Is there a way to clear items from a specific slot in Minecraft?
Yes, you can clear items from a specific slot in your inventory by using the --slot option with the clear command.
```console
clear --slot 0
```

### What happens if I use the clear command without any options in Minecraft?
If you use the clear command without specifying any options, it will clear all items from your inventory by default.
```console
clear
```

### Can I use the clear command to clear items from a player's inventory in Minecraft?
Yes, you can use the clear command with the player's name to clear items from a specific player's inventory.
```console
clear --player Steve
```
## Applications of the clear command
- Removing all items from a player's inventory
- Clearing all items from a container
- Quick removal of items from the game world without destroying them