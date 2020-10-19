# UWCB-03-Password_Generator
Homework assignment for unit 3 of UW Coding Bootcamp.

## 🎯 GOAL
The goal of this assignment is to fix a broken password generator.

## ✅ TASKS
For this project, I am given started code that needs to be modifide to do the following tasks.
- When the user clicks the "Generate Password" button, the user should be presented with a number of prompts requesting information about the password criteria.
    - The length of the password
        - The password must be between or equal to 8 and 128 characters.
    - The types of characters to be used in the password
        - The user should be able to pick between lowercase, uppercase, numeric, and special characters.
        - The user can select multiple options or even all of the options, but at least one of these options must be selected.
- There needs to be something in place that checks that the values passed in match the criteria.  

## ⚔️ PROJECT
Here is a link to to [GitHub repo](https://tomakpo.github.io/UWCB-03-Password_Generator/) for this project.

For this project, I created a new function that gets called when the user clicks the button. 

First I defined all of the characters that can be used in the password and broke it up by character type.

![The characters options](https://i.imgur.com/1saInZ7.png)

Then I created a while loop that continues to prompt the user for a password length until a valid answer is provided.

![The part that asks for the length](https://i.imgur.com/FCdOPlI.png)

I did the same for the character type.

![The part that asks for the charactor types](https://i.imgur.com/tGmrnvR.png)

I then took all of that information and generated the password.

![The part that creates the password](https://i.imgur.com/tEW6pjQ.png)

Here you can see an example of the working code in action. 

![Example of generated password](https://i.imgur.com/rv4mrgm.png)

