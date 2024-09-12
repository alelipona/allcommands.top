---
title: schedule command in Minecraft
description: Learn how to use the schedule command in Minecraft to automate tasks and events within the game. Schedule commands to run at specific times without player intervention.
---

The schedule command in Minecraft allows players to automate tasks and events within the game. By scheduling commands to run at specific times, players can easily set up events without the need for manual intervention. This feature is useful for various purposes, such as creating timed events, managing automated processes, or triggering actions at specific moments in the game. Mastering the schedule command can enhance gameplay efficiency and add a new level of customization to your Minecraft experience.

## schedule Syntax:
```console
schedule <function> <time> [append]
```
## Minecraft schedule Options:
| Option   | Description                              |
|----------|------------------------------------------|
| <function> | Specifies the function to run.          |
| <time>     | Specifies the time in game ticks or in <s>, <d>, <h>, or <m>.|
| [append]  | Optional. Adds the function to the schedule without removing existing scheduled functions.|

## schedule Parameters:
| Parameter | Description                                        |
|-----------|----------------------------------------------------|
| <function> | Specifies the function to run.                     |
| <time>     | Specifies the time in game ticks or in <s>, <d>, <h>, or <m>.|
| [append]  | Optional parameter to add function without removing existing scheduled functions.|

:::caution
Avoid overloading the server with too many scheduled functions, as it may impact performance and stability.
:::

## How to use schedule command:
### Schedule a Command to Run Every Minute
```console
schedule daily task run minecraft:give @a diamond
```
This command will schedule a task to give every player a diamond every minute.

### Schedule a Command to Run at a Specific Time
```console
schedule at 10:30 say Don't forget to join the server event!
```
This command will schedule a message to be broadcasted at 10:30 in the game chat.

### Schedule a Command to Run Repeatedly
```console
schedule repeat 5s 10 minecraft:particle flame ~ ~1 ~ 0 0 0 0 1 force
```
This command will schedule the particle flame to appear every 5 seconds for a duration of 10 times.

### Schedule a Command to Run Once a Day
```console
schedule daily 07:00:00 minecraft:give @p golden_apple 5
```
This command will schedule giving the nearest player 5 golden apples every day at 7 AM.

### Schedule a Command to Run Only on Weekends
```console
schedule daily Sunday,Saturday 17:30 minecraft:weather thunder
```
This command will schedule a thunderstorm to occur every Saturday and Sunday at 5:30 PM.

### Schedule a Command to Clear Weather After a Certain Time
```console
schedule clear 18:00
```
This command will schedule clearing the weather in the game at 6 PM.

### Schedule a Command to Run Every Hour
```console
schedule hourly 1h minecraft:time set day
```
This command will schedule setting the time to day in the game every hour.

### Schedule a Command to Teleport Players to a Specific Location Daily
```console
schedule daily 08:00 tp @a 100 70 -50
```
This command will schedule teleporting all players to the coordinates 100, 70, -50 daily at 8 AM.
:::tip
Make sure to carefully review the available options and syntax for the schedule command to ensure it functions correctly in your Minecraft gameplay.
:::

### How do I use schedule in Minecraft?
To use the schedule command in Minecraft, execute the following command:
```console
schedule --function my_namespace:my_function 100t
```

### How can I schedule a function to run in Minecraft?
To schedule a function to run in Minecraft, you can use the following command:
```console
schedule function <namespace:function> <time>
```

### What is the syntax for scheduling commands in Minecraft?
The syntax for scheduling commands in Minecraft is as follows:
```console
schedule <function/command> <time>
```

### How do I cancel a scheduled task in Minecraft?
To cancel a scheduled task in Minecraft, you can use the following command:
```console
schedule cancel <task_id>
```

### Can I schedule repeating tasks in Minecraft?
Yes, you can schedule repeating tasks in Minecraft using the schedule command. Simply specify the interval after the time parameter.
```console
schedule function <namespace:function> 100t 20t
```

### How do I check the list of scheduled tasks in Minecraft?
To check the list of scheduled tasks in Minecraft, you can use the following command:
```console
schedule list
```

### What are some common errors when using the schedule command?
Common errors when using the schedule command in Minecraft include incorrect syntax, invalid function names, and specifying an incorrect time format.

### Is it possible to schedule tasks across different dimensions in Minecraft?
Yes, you can schedule tasks across different dimensions in Minecraft by specifying the dimension along with the function or command.
```console
schedule function <namespace:function> <time> in <dimension>
```

## Applications of the schedule command

- Creating time-based events in the game
- Automating repetitive tasks
- Synchronizing actions between different events
- Managing server operations at specific intervals
- Setting up countdowns or timers for players
- Implementing scheduled challenges or quests
- Monitoring and controlling certain game mechanics
- Customizing gameplay experience through timed actions