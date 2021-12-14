<img src="https://media.giphy.com/media/Jgseef7j4vEfV4L9Ii/giphy.gif">

# Useless type

A typing website that serves no purpose for the end user. This is a JavaScript assignment that required us a to make a useless website with some certain criterias.
View [live site](https://useless-type.vercel.app/)

## Installation

1. #### Clone this repo via your terminal using the command git clone:

    ```
    git clone https://github.com/marcusxyz/useless-website.git
    ```

2. #### Run a live preview/server.

<br>

## Code Review by [Patrik Staaf](https://github.com/patrikstaaf)

1. `main.js:57, 62` - Consider using textContent over innerHTML as its not parsed as html (faster & can also prevent xss).
2. `main.js:31` - Use querySelector over getElementById for consistency in your code.
3. `main.js:37-43` - Perhaps this could be a function itself and then be called in the randomPlaceholder function.
4. `main.js:69, 72` - Tiny thing but avoid console.log in production code.
5. `style.css:8, 15, 21` - I might have misinterpreted this but were we suppose to have a .woff fallback? 

Great job Marcus! Your site is very stylish (as usual) even though it serves it's purpose of being useless! 

<img src="https://c.tenor.com/T8FisWa2fS0AAAAM/looking-good-bollywood.gif" width=100%>

<br>

## Testers

Tested by the following people:

1. Patrik Staaf
2. Susanne Lam
