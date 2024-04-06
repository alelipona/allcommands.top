---
title: Linux route command
description: Learn how to use the Linux route command to view and manipulate the IP routing table. Understand the syntax, options, and practical examples.
---

The Linux route command is used to view and manipulate the IP routing table. It allows you to display the current routing table, add new routes, delete existing routes, and make changes to the routing table. The syntax for the route command includes specifying the target network, gateway, netmask, and interface. By using different options, you can customize the behavior of the command. Understanding how to use the route command is essential for network administrators and anyone working with network configurations in a Linux environment.

## route Syntax:
```bash
route [options] [add|del|flush] [destination] [gateway]
```
## Options:
| Option          | Description                        |
|-----------------|------------------------------------|
| -n              | Show numerical addresses           |
| -v              | Verbose output                     |
| -e              | Display other/more details         |
| -A family       | Specify the address family          |

## Parameters:
| Parameter      | Description                             |
|----------------|-----------------------------------------|
| add            | Add a new route                          |
| del            | Delete a route                           |
| flush          | Remove all entries from the routing table|
| destination    | Network destination for the route         |
| gateway        | Gateway for the route                     |

:::caution
Exercise caution when using the route command, as incorrect route changes can potentially disrupt network connectivity.
:::

## route Usage:
### Display the routing table
```bash
route
```
Displays the current routing table on the system.

### Add a new route
```bash
sudo route add -net 192.168.10.0 netmask 255.255.255.0 gw 192.168.1.1
```
Adds a new route for the network 192.168.10.0 with the specified netmask and gateway.

### Delete a specific route
```bash
sudo route del -net 10.0.0.0 netmask 255.0.0.0
```
Deletes the route for the network 10.0.0.0 with the specified netmask.

### Set the default gateway
```bash
sudo route add default gw 192.168.1.1
```
Sets the default gateway to 192.168.1.1 for outgoing traffic.
:::tip
When using the route command in Linux, always make sure to specify the necessary options and values to avoid misconfigurations in your network routing settings.
:::

### How do I use route in Linux?
To use the route command in Linux, execute the following command:
```bash
route
```

### How can I display the routing table in Linux?
To display the routing table in Linux, use the following command:
```bash
route -n
```

### How do I add a static route in Linux?
To add a static route in Linux, use the following command:
```bash
sudo route add -net 192.168.1.0 netmask 255.255.255.0 gw 10.0.0.1
```

### How do I delete a specific route in Linux?
To delete a specific route in Linux, use the following command:
```bash
sudo route del -net 192.168.1.0 netmask 255.255.255.0
```

### How can I change the default gateway in Linux using the route command?
To change the default gateway in Linux using the route command, use the following command:
```bash
sudo route add default gw 192.168.1.1
```

### How do I show kernel routing information in Linux?
To show kernel routing information in Linux, use the following command:
```bash
route -e
```

### How can I see the IP addresses for local and foreign connections in Linux using the route command?
To see the IP addresses for local and foreign connections in Linux using the route command, use the following command:
```bash
route -n
```
## Applications of the route command

1. Display the routing table:
2. Add a new route to the routing table:
3. Delete a route from the routing table:
4. Change attributes of an existing route:
5. Show the IP routing table statistics:
6. Flush all routes from the routing table:
7. Display the kernel IP routing table with more information:
8. Print the route for the target host or network:
9. Show the routing cache:
10. Display multicast routing information: