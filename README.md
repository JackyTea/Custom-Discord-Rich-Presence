# Custom Discord Rich Presence

## Overview

A [Node.JS](https://nodejs.org/en/) script for [Discord](https://discord.com/) users to personalize and customize their profile status with a banner similar to when they are playing a game.

## Prerequisites

[Node.JS and NPM](https://nodejs.org/en/) - the latest version should be installed on your system to run this script. To check if you have Node.JS and NPM installed, run the following commands:

```js
// check node.js version
node -v

// check npm version
npm -v
```

To initialize the project as an NPM project, run the following command:

```js
// init
npm init -y
```

[Discord-Rich-Presence Package](https://www.npmjs.com/package/discord-rich-presence) - a NPM module that allows this script to interface with the Discord API. To install this package for this project, open a terminal with the project files in the current directory and run the following command:

```js
// install the package
npm i discord-rich-presence
```
## Setup

**Step 1:** First, visit the [Discord Developer Portal](https://discord.com/developers) and create a **new application**.

**Step 2:** Once you have created a new application, head to the **General Information** tab on your left and click on it. This will take you to a screen where you will be able to copy your **client ID** onto your clipboard. This id is an 18 digit sequence of random numbers in the form of:

```js
// example client ID
123456789123456789
```

**Step 3:** Once you have your client ID, head to the **Rich Presence** tab and access the **Art Assets** sub-tab. Here you can upload images for your custom banner. The names of the images will be the arguments for the program, so keep them simple. 

## Usage

With your environment setup utilizing the steps above, run the following command in your terminal to launch your custom status:

```js
node index.js clientID descriptionString largeImageName largeImageDescription smallImageName smallImageDescription [dynamicDescription] 
```

**Parameters**

*node* - Node.JS executable for running the script.

*index.js* - the filename of the script.

*clientID* - your 18 digit number sequence from your application on the Discord Developer Portal.

*descriptionString* - a sentence that is put under the name of the application on the banner.

*largeImageName* - the main icon on the banner.

*largeImageDescription* - the main icon's hover over text.

*smallImageName* - the small icon that is on the bottom right of the main icon.

*smallImageName* - the small icon's hover over text.

*dynamicDescription* - an **optional** parameter that allows you to override the "time elapsed" text with text of your own.


The arguments are of type **string**.

**Note: Image name parameters must be the same as what you have in your art assets on the Discord Developer Portal.**

Here is a usage scenario with a mock client ID:

```js
node index.js 123456789123456789 "Browsing Youtube..." large "Google Chrome v.7" youtube "Youtube" 
```

![Example Image](demos/example.jpg)

Here is a usage scenario with a mock client ID and a set description:

```js
node index.js 123456789123456789 "Browsing Youtube..." large "Google Chrome v.7" youtube "Youtube" "Woah a description"
```

![Example Image 2](demos/example2.jpg)