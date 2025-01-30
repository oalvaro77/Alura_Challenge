# Alura_Challenge Amigo Secreto
![image](https://github.com/user-attachments/assets/437ac285-e76a-4a73-861b-0972343e440a)
![GitHub contributors](https://img.shields.io/github/contributors/oalvaro77/Alura_Challenge)
![GitHub last commit](https://img.shields.io/github/last-commit/oalvaro77/Alura_Challenge)
![GitHub followers](https://img.shields.io/github/followers/oalvaro77)
![GitHub License](https://img.shields.io/github/license/oalvaro77/Alura_Challenge)

This project is a simple web application that allows managing a list of friends and conducting a random draw to select one of them. Below, I describe its functionalities and how it works:

## Main Features

### 1. **Add Friends to the List**
- The user can enter a friend's name in a text field (input).
- By clicking the add button (not visible in the code but assumed to exist), the `addFriend()` function is executed.
- The friend's name is added to an array `friendList` and displayed in a list on the interface (a `<ul>` element with the id `friendList`).
- If the text field is empty, an alert is shown indicating that empty values are not allowed.

### 2. **Draw a Friend**
- The user can click a button (not visible in the code but assumed to exist) to execute the `drawFriend()` function.
- A friend is randomly selected from the list using `Math.random()`.
- The selected friend's name is displayed in an element with the id `result`.
- The selected friend is removed from the `friendList` and also visually removed from the interface list.

### 3. **Dynamic List Update**
- Every time a friend is added or removed, the interface list is automatically updated.
- The list items (`<li>`) have a `data-index` attribute that stores their index in the `friendList` array. This attribute is updated every time a friend is removed to maintain consistency between the array and the visual list.

### 4. **Text Field Clearing**
- After adding a friend, the text field is automatically cleared to allow the user to enter a new name.

## Requirements
- Modern web browser that supports JavaScript.

- ## Installation

1. Clone this repository to your local machine:
   ```bash
   git clone https://github.com/your-username/friend-draw.git
2. Navigate to the proyect directory:
   ```bash
   cd friend-draw
3. Open the `index.html` file in your web browser. You can do this by double-clicking the file or by using one of the following commands in your terminal:
- **For windows**
   ```bash
   start index.html
- **For MacOs**
   ```bash
   open index.html
- **For Linux**
   ```bash
   xdg-open index.html

## Usage

### 1. Add Friends to the List
- In the opened page, you'll see an input field where you can type the name of a friend.
- After typing a name, click the **Añadir** button.
- The name will be added to the list, and it will also appear in the on-screen list of friends.

### 2. Draw a Random Friend
- Once you've added some friends, you can click the **Sortear amigo** button.
- A random friend will be selected from the list and displayed on the page.
- The selected friend will be removed from the list both visually and from the internal list.

### 3. Repeat the Process
- You can continue adding more friends and drawing random names as needed.
- The text field will automatically clear after each friend is added, allowing you to enter the next name.

### 4. Enjoy!
- Now, you're ready to use the friend draw feature as many times as you'd like! Have fun! 🎉

 
## Autors

| [<img src="https://avatars.githubusercontent.com/<oalvaro77>" width=115><br><sub>Alvaro Ortiz</sub>](https://github.com/oalvaro77)
| :---: | 
