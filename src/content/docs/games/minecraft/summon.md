---
title: summon Minecraft command
description: Learn how to use the summon command in Minecraft to spawn creatures, items, or blocks with specific properties and attributes. Master the summon command for ultimate control in your world.
---

The summon command in Minecraft allows players to spawn various creatures, items, or blocks with specific properties and attributes. By using this powerful command, players can customize their world and enhance their gameplay experience. Whether you want to create a specific mob encounter, set up a custom map, or test out new mechanics, the summon command is a versatile tool at your disposal.

To use the summon command, players need to know the syntax and parameters required to summon the desired entity. This includes specifying the entity type, location, and any additional data tags to define its characteristics. With the ability to summon a wide range of entities, from friendly pets to hostile mobs, players can unleash their creativity and build unique scenarios in their Minecraft world.

Players can also use the summon command to create custom items or blocks with unique properties. By setting the data tags accordingly, players can spawn items with specific enchantments, custom names, and even lore. This feature is especially useful for map makers and server owners looking to add exclusive content to their worlds.

Overall, mastering the summon command in Minecraft opens up a world of possibilities for players to customize their gaming experience. By understanding how to effectively use this command, players can unleash their creativity and take their gameplay to the next level. Whether you're looking to create epic battles, unique challenges, or immersive environments, the summon command is a valuable tool for adding depth and excitement to your Minecraft world.
## summon Syntax:
```console
summon <entity> [pos] [nbt]
```
## Options:
| Option | Description                           |
|--------|---------------------------------------|
| entity | Specifies the type of entity to summon. |
| pos    | Sets the position where the entity will be summoned. (Optional) |
| nbt    | Sets the NBT tags for the entity. (Optional) |

## Parameters:
| Parameter | Description                                              |
|-----------|----------------------------------------------------------|
| entity    | Specifies the type of entity to summon.                 |
| pos       | Sets the position where the entity will be summoned.     |
| nbt       | Sets the NBT tags for the entity.                        |

:::caution
Ensure to correctly input the entity type and accurately place the entity with the pos parameter to prevent unexpected behavior. Make sure to use the proper NBT tags if needed.
:::
## summon command Examples:
### Summon a Cow
```console
/summon cow ~ ~ ~
```
Summons a cow at the current player's location.

### Summon a Zombie
```console
/summon zombie ~ ~ ~ {IsBaby:1}
```
Summons a baby zombie at the current player's location.

### Summon an Armor Stand
```console
/summon armor_stand ~ ~ ~ {Invisible:1b,Marker:1b,NoGravity:1b}
```
Summons an invisible, marker armor stand that does not have gravity at the current player's location.

### Summon a Lightning Bolt
```console
/summon minecraft:lightning_bolt ~ ~ ~
```
Summons a lightning bolt at the current player's location.

### Summon a Giant Slime
```console
/summon slime ~ ~ ~ {Size:10}
```
Summons a giant slime with a size of 10 at the current player's location.

### Summon an Ender Dragon
```console
/summon ender_dragon ~ ~ ~ {DragonPhase:0}
```
Summons the Ender Dragon at the current player's location with phase 0.
:::tip
When using the summon command in Minecraft, make sure to carefully specify all the required parameters to accurately summon the desired entity or object. Incorrect parameters may lead to unexpected results or errors.
:::

### How do I use summon in Minecraft?
To use the summon command in Minecraft, execute the following command:
```console
summon --option <value>
```

### What is the summon command used for in Minecraft?
The summon command in Minecraft is used to summon different types of entities, objects, and structures into the game world. It allows players to bring various creatures, items, and even structures to specific locations in the game.

### How can I summon a specific entity in Minecraft?
To summon a specific entity in Minecraft, you need to know the entity's identifier or name. You can use the summon command with the entity's identifier to bring it into the game. 
```console
summon minecraft:creeper
```

### Can I use the summon command to spawn items in Minecraft?
Yes, you can use the summon command to spawn items in Minecraft. By specifying the item entity and its properties, you can summon items at specific coordinates in the game world.
```console
summon minecraft:item ~ ~ ~ {Item:{id:"minecraft:diamond",Count:1b}}
```

### How do I summon a custom named entity in Minecraft?
To summon a custom named entity in Minecraft, you can use the CustomName parameter in the summon command. This allows you to give a unique name to the summoned entity.
```console
summon minecraft:cow ~ ~ ~ {CustomName:'{"text":"Moo"}'}
```

### Is it possible to summon a mob with custom attributes using the summon command?
Yes, you can summon a mob with custom attributes using the summon command in Minecraft. By specifying the mob's properties such as Health, Armor, or custom tags, you can customize the summoned mob.
```console
summon minecraft:zombie ~ ~ ~ {Attributes:[{Name:"generic.maxHealth",Base:50},{Name:"generic.movementSpeed",Base:0.3}]}
```

### How can I summon a horse with specific attributes in Minecraft?
To summon a horse with specific attributes in Minecraft, you can use the summon command with the Horse entity type and customize its properties such as variant, armor, saddle, and more.
```console
summon minecraft:horse ~ ~ ~ {Variant:0,Tame:1,SaddleItem:{id:"minecraft:saddle",Count:1},ArmorItem:{id:"minecraft:iron_horse_armor",Count:1}}
```

### Can the summon command be used to create structures in Minecraft?
Yes, the summon command can be used to create structures in Minecraft by summoning specific entities or blocks in a particular arrangement. By utilizing the summon command creatively, players can build complex structures in the game world.
```console
summon minecraft:armor_stand ~ ~ ~ {ShowArms:1,Equipment:[{},{},{},{},{id:"diamond_helmet",Count:1}]}
```
## Applications of the summon command

1. Spawning mobs
2. Creating custom entities
3. Summoning fireworks
4. Spawning projectiles
5. Generating falling blocks
6. Creating custom structures
7. Summoning paintings
8. Spawning items
9. Generating minecarts or boats
10. Summoning experience orbs