# KidFit

A simulation game where the user is able to interact with an avatar (using disney "The Secret Life of Pets" characters) to help them learn more about fitness and being healthy. The user should be able to do different activities with their avatar and be able to play games to earn coins. The coin could then be used to buy different rewards such as food to increase the relationship bar which shows the closeness between the user and avatar. The games being added are health related and geared towards teaching the user of different health options and tips. This way they are able to have fun and also develop healthy habits. 

## Current Development

The code for the application is JavaScript and completely front-end. You will find the codes for the different screens in the "Screen" Folder. Within in the folder there will be:
- Welcome - which is the first screen the user will interact with and currently the only working future is the "Start Here" button which will bring you to the next screen

- Characters - Intended for users to select the avatar that they wanted to use. There will be a button at the bottom corner that should bring you to the home screen after selecting. Current development is not able to save the avatar selected.

- Home - considered as a main page for user to interact with. You will 2 icons, but only the map icon can interacted with and will bring you to the maps screen. 

- Map - The final screen created, where it was intended to allow user to go to different screens such as mall, park, and grocery. 

In the app.js file you will see the use of react-native navigation where it make use of a stack to keep track of the screens. The screen names are order by the order that was intended for the user to interact with. 

Welcome -> Character -> Home -> Maps

## Resources:
These resources were used to contribute to our code and guide us through diffcult situations
- A 2 hour video on YouTube by [Programming with Mosh](https://www.youtube.com/watch?v=0-S5a0eXPoc) 
- Tutorial on how to set up React-Native and using visual studio code [React Native (Expo) Dev Environment Setup + First Project (Windows 10 )](https://www.youtube.com/watch?v=WnS7dcY5Hys&t=663s)
- [React-Native API](https://reactnative.dev/docs/components-and-apis)
- A [guide](https://reactnavigation.org/docs/navigating/) on how to be able to navigate between different screens
