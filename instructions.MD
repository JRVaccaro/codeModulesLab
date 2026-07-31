This very simple assignment has one goal: to modularize pre-existing code for better organization and future use. You will be using pre-existing code from previous projects of your choice. 

Select at least two of your past projects to work with (pick your favorites, or ones you would like to revisit for better understanding or to improve upon). Your selections should be reasonably large so that they can be broken up naturally into smaller parts (modules).

Commit frequently! Every time something works, you should commit it. Remember, you can always go back to a previous commit if something breaks.

Modularizing Code

Production applications are never made from a single file, because doing so would be a nightmare to scale and maintain. Imagine hundreds of thousands of lines of code in a single JavaScript file...

As you have learned, programmers pack their code into modules in order to mitigate this issue. You already have experience with at least one code module – Axios, and as you continue exploring the world of JavaScript, you will learn that there are millions of pre-packaged modules and code libraries available for use in development.

This is how development scales. Programmers build upon the work of others, saving time and energy as they work on implementing features specific to their particular needs. Why spend time creating the functions to do the things Axios does, when Axios already does them?

Using the export and import statements:

Reorganize the projects you have selected into module files.

Once complete, you should have files that export certain features of your application, and other files that import those features for use. The files that export features can be reused in future applications, wherever their code is relevant!