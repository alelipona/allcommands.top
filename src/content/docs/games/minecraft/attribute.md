---
title: attribute Minecraft command
description: Learn how to use the Minecraft attribute command to modify and query various attributes of entities in the game.
---

The Minecraft attribute command allows players to modify and query various attributes of entities in the game. By using this command, players can change health, speed, damage, and more for individual entities or across entire groups. This powerful tool provides customization options for gameplay, allowing players to fine-tune their gaming experience. With a simple syntax, the attribute command can be used in various scenarios to enhance gameplay and create unique challenges. Whether you want to buff up a boss mob or create a high-speed player character, the attribute command offers endless possibilities for customization in Minecraft.

## attribute Syntax:
```console
attribute <target> <attribute> [value]
```

## attribute Options:
| Option   | Description                              |
|----------|------------------------------------------|
| target   | Specifies the target to modify the attribute for.     |
| attribute | Specifies the attribute to modify.        |
| value    | Optional. Sets the value of the attribute.      |

:::caution
Be cautious when modifying attributes as it can affect gameplay and balance.
:::

### Increase Player Health Attribute
```console
attribute @p minecraft:generic.max_health base set 20
```
Sets the maximum health attribute of the nearest player to 20.

### Modify Player Speed Attribute
```console
attribute @a minecraft:generic.movement_speed base set 0.1
```
Changes the movement speed attribute of all players to 0.1.

### Boost Player Attack Damage Attribute
```console
attribute @a minecraft:generic.attack_damage base set 8
```
Increases the attack damage attribute of all players to 8.

### Adjust Player Jump Strength Attribute
```console
attribute @p minecraft:generic.movement_jump_strength base set 0.5
```
Sets the jump strength attribute of the nearest player to 0.5.

### Modify Player Armor Toughness Attribute
```console
attribute @a minecraft:generic.armor_toughness base set 4
```
Changes the armor toughness attribute of all players to 4.
:::tip
When using the attribute command in Minecraft console, ensure you are familiar with the available options and values to effectively modify attributes of players or entities in the game.
:::

### How do I use attribute in Minecraft?
To use the attribute command in console, execute the following command:
```console
attribute <target> <attribute> get
```

### How can I modify an attribute in Minecraft?
To modify an attribute in Minecraft using the console command, you can apply a modifier to a specified target and attribute. For example:
```console
attribute <target> <attribute> base set <value>
```

### How do I check the max value of an attribute in Minecraft?
To check the maximum value of a specific attribute in Minecraft, use the following command syntax:
```console
attribute <target> generic.max_health get
```

### How can I increase a player's health attribute in Minecraft?
To increase a player's health attribute in Minecraft, you can add a modifier with the desired amount. For example, to increase a player's health by 2 hearts:
```console
attribute <target> minecraft:generic.max_health base set 20
```

### How do I view a player's specific attribute value in Minecraft?
To view a player's specific attribute value in Minecraft, use the following command structure:
```console
attribute <target> minecraft:generic.attribute_name get
```

### How can I remove an attribute modifier in Minecraft?
To remove an attribute modifier from a player or entity in Minecraft, use the following format:
```console
attribute <target> <attribute> modifier <modifier_uuid> remove
```

### How do I list all attributes of a player in Minecraft?
To list all attributes of a player in Minecraft, use the command:
```console
attribute <target> list
```

### How can I add a percentage-based modifier to an attribute in Minecraft?
To add a percentage-based modifier to an attribute in Minecraft, use the following command structure:
```console
attribute <target> <attribute> base set 20%
```
## Applications of the attribute command

- Creating custom game mechanics
- Modifying player attributes (e.g., health, speed)
- Adjusting mob attributes (e.g., strength, aggression)
- Setting up unique challenges or puzzles
- Managing player or mob behavior
- Designing custom maps or adventures