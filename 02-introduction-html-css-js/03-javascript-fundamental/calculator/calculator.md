::page{title="Hands-On Lab: Simple Interest Calculator"}

<img src="https://cf-courses-data.s3.us.cloud-object-storage.appdomain.cloud/IBMDeveloperSkillsNetwork-CD0101EN-SkillsNetwork/images/IDSN-logo.png" width="200" alt="cognitiveclass.ai logo">

##

**Estimated time: 30 mins**
## Objectives:

1. Download the project folder.
2. Modify the HTML file as per the requirements.
3. Modify the CSS file as per the requirements.
4. Modify the JavaScript file as per the requirements.
5. Verify that the webpage is working properly.

>This lab environment does not store your changes across multiple sessions. To avoid losing your work, please complete your project in one session or store your files elsewhere and add them back here to continue at another time.

::page{title="Exercise 1: Download the project folder"}

1. Open a new terminal

![newterminal](https://cf-courses-data.s3.us.cloud-object-storage.appdomain.cloud/IBMDeveloperSkillsNetwork-CD0101EN-SkillsNetwork/images/newterminal.png)

2. Paste the following commands into your terminal to download the project folder and unzip it

```bash
wget https://github.com/ibm-developer-skills-network/vftvk-Simple-Interest-Calculator/archive/refs/heads/master.zip
```

```bash
unzip master.zip
```

3. Open the file explorer and verify that the project contains the following files:
    - index.html
    - style.css
    - script.js

![file-explorer](https://cf-courses-data.s3.us.cloud-object-storage.appdomain.cloud/IBMDeveloperSkillsNetwork-CD0101EN-SkillsNetwork/labs/Project/images/file-explorer.png)

4. Throughout this project, you will need to test your web page using the Live Server extension. For steps on how to use the extension, click [here](https://cf-courses-data.s3.us.cloud-object-storage.appdomain.cloud/IBMDeveloperSkillsNetwork-CD0101EN-SkillsNetwork/labs/Project/LiveServer_instructions_v2.md.html). Note that opening Live Server will only work if you click on the `index.html` file, it will not appear for any other file type.

::page{title="Exercise 2: Modify the HTML file"}

In this exercise, you will correct any mistakes in the existing code and also add all missing tags.

1. In the file explorer, navigate to the `index.html` file.

2. All HTML files must begin with a doctype tag, to indicate that HTML content will be placed in the file. Add this tag to the beginning of `index.html`.

<details>
<summary>Click here to see how it should look</summary>

```html
<!DOCTYPE html>
```
</details>

3. Use the `title` tag to change the browser title to be "Simple Interest Calculator". Remember that the title tag should be placed in the `head` section of your markup.

<details>
<summary>Click here to see the code</summary>

```html
<title>Simple Interest Calculator</title>
```
</details>

4. Move all the content which is currently in the `<body>` to a new `<div>` tag.

5. Set the class attribute of this new div to `maindiv`.

<details>
<summary>Click here to see the code</summary>

```html
<body>
    <div class="maindiv">
        <h1>Simple Interest Calculator</h1>

        Amount <input type="number"  id="principal">  <br/>

        Rate <input type="number"  id="rate">  <br/>

        No. of Years <input type="number"  id="years">  <br/>

        Interest : <span id="result"></span><br>

        <button onclick="compute()">Compute</button>
    </div>
</body>
```
</details>

6. Modify the `input id="rate"` tag for the interest rate to be a slider. Recall from earlier lessons that this can be done by changing the `type` to **range**.

```html
<input type="range" id="rate">
```

7. For the rate input, add the following attributes and their corresponding values:

- `min` should be set to **1**
- `max` should be set to **20**
- `value` should be set to **10.25**
- `step` should be set to **0.25**

<details>
<summary>Click here to see the code for the interest rate tag after making the above updates</summary>

```html
Rate <input type="range" id="rate" min="1" max="20" value="10.25" step="0.25">
```
</details>

*Range is an elegant way to input numeric input, but the drawback is that it does not visually show value the user has selected.*

8. To show the value selected by the `range`, create a `<span>` element right after the range, with the id `rate_val`.

<details>
<summary>Click here to see the code</summary>

```html
<span id="rate_val">
</span>
```
</details>

9. Inside the `<span>` tag, add the text "10.25" to represent the default value (as specified above). Add a "%" outside this span tag. The span will be updated dynamically later on, but the "%" should always remain, so this is placed outside the tag.

Insert a line break after this tag, so the next input appears on a new line.

<details>
<summary>Click here to see the code</summary>

```html
<span id="rate_val">
  10.25
</span>% <br/>

```
</details>

10. Modify the input text box for \"No. of Years\" into an input with autocomplete suggestions using a datalist containing options 1 to 10.

> Recall from the "HTML5 Input Element" video, the correct way to insert a datalist in HTML

<details>
<summary>Click here to see how to insert a datalist</summary>

```html
No. of Years 
<input type="number" id="years" list="all_years">
<datalist id="all_years">
    <option value="1">1</option>
    <option value="2">2</option>
    <!-- Fill in the rest of the values -->
</datalist>
```
</details>

11. Change the name of "Compute" button to "Compute Interest".

<details>
<summary>Click here to see the code</summary>

```html
<button onclick="compute()">Compute Interest</button>
```
</details>

12. Below the "Compute Interest" button, create an empty `<span>` and set its id to `result`. This will be used to dynamically display the result of the calculation when the "Compute Interest" button is clicked.

<details>
<summary>Click here to see the code</summary>

```html
<span id="result">

</span>
```
</details>

This will be used to display the output of the user's calculation.

13. Outside the `maindiv`, add a copyright message using the `<footer>` tag, like below:

```html
<footer>
    &#169; This Calculator belongs to --your name--
</footer>
```

14. Save the changes made in `index.html`.

<details>
<summary>Click to see the updated code in index.html</summary>

```html
<!DOCTYPE html>
<html>
    <head>
        <script src="script.js"></script>
        <link rel="stylesheet" href="style.css">
        <title>Simple Interest Calculator</title>
    </head>
    <body>
        <div class="maindiv">
            <h1>Simple Interest Calculator</h1>

            Amount <input type="number"  id="principal">  <br/>

            Rate <input type="range" id="rate" min="1" max="20" value="10.25" step="0.25"> 
            <span id="rate_val">
                10.25
            </span>% <br/>

            No. of Years 
            <input type="number" id="years" list="all_years">
            <datalist id="all_years">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
            </datalist>
            <br />
            Interest : <span id="result"></span><br/>

            <button onclick="compute()">Compute Interest</button>
        </div>

        <footer>
            &#169; This Calculator belongs to --your name--
        </footer>
    </body>
</html>

```
</details>

15. Open your application using the Live Server extension and make sure that you have not missed anything. Your page should look similar to this:

![exercise2-site](https://cf-courses-data.s3.us.cloud-object-storage.appdomain.cloud/IBMDeveloperSkillsNetwork-CD0101EN-SkillsNetwork/labs/Project/images/exercise2-site.png)

::page{title="Exercise 3: Modify the CSS file"}

In this exercise, you will correct the look and feel of the web page.

1. On the file explorer navigate to the `style.css` style sheet.

2. Set the `body` background color to 'black', font family to 'arial' and font color to 'white'.

<details>
<summary>Click here to see how it should look</summary>

```css
body {
    background-color: black;
    font-family: arial;
    color: white;
}
```
</details>

3. Set the `h1` color to 'grey' and font to 'verdana'.

<details>
<summary>Click here to see how it should look</summary>

```css
h1 {
    color: grey;
    font-family: verdana;
}
```

</details>

4. Create an entry for class 'maindiv'.

<details>
    <summary>Click here to see how it should look</summary>

```css
.maindiv {
    
}
```

</details>

5. In the newly created maindiv class, set the following styles:
 
 - Background color to 'white'
 - Font color to 'black'
 - Width to '300px'
 - Padding to '20px'
 - Border radius to '25px'
 - Text alignment to 'center'

<details><summary>Click to see how the new `maindiv` class should look like</summary>

```css
.maindiv {
    background-color: white;
    color: black;
    width: 300px;
    padding: 20px;
    border-radius: 25px;
    text-align: center;
}
```
</details>

6. Save the changes made in `style.css`.

<details>
<summary>Click here to see the updated code in style.css</summary>

```css
body {
    background-color: black;
    font-family: arial;
    color: white;
}

h1 {
    color: grey;
    font-family: verdana;
}

.maindiv {
    background-color: white;
    color: black;
    width: 300px;
    padding: 20px;
    border-radius: 25px;
    text-align: center;
}
```
</details>

7. Open your application using the Live Server extension and make sure that you have not missed anything. Your page should look similar to below:

![exercise3-site](https://cf-courses-data.s3.us.cloud-object-storage.appdomain.cloud/IBMDeveloperSkillsNetwork-CD0101EN-SkillsNetwork/labs/Project/images/exercise3-site.png)

::page{title="Exercise 4: Modify the JavaScript file"}

In this exercise, you will write the JavaScript code in the `script.js` file, to implement the logic for the Simple Interest Calculator.

### Display Rate Slider Value

1. Create an empty function called `updateRate()`. This will be used to display the value of the 'Rate' slider.

<details>
    <summary>Click here to see how it should look</summary>

```js
function updateRate() {

}
```

</details>

2. Inside the `updateRate()` function, create a variable `rateval` that gets the _value_ from the 'Rate' slider.


Hint: the Rate slider is the element with an id `rate`

<details>
    <summary>Click here to see how it should look</summary>

```js
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
}
```

</details>

3. Modify the `<span id="rate_val">` value to display the value of the `rateval` variable created above.

<details>
    <summary>Click here to see how it should look</summary>

```js
function updateRate()
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval;
}
```

</details>

4. Link this function with an "onchange" event on the range input.


<details>
    <summary>Click here for a hint of how to do this</summary>

Add `onchange="updateRate()"` inside the Rate input tag in `index.html`, so that it becomes:

</details>

<details>
    <summary>Click here to see the code</summary>

```html
Rate <input type="range" id="rate" min="1" max="20" value="10.25" step="0.25" onchange="updateRate()">
```

</details>

5. Save the file and open your web page with the Live Server extension. Change the slider and verify that the value to the right of it updates with a new value each time the slider is changed.

If this does not work as expected, go back to your code to identify where the problem is.

### Compute Button Functionality

1. Create the following variables inside the `compute()` function, and assign them to the corresponding value listed:

- `principal` initialized to the value of the input element with an id of `principal`, parsed as an int. This is needed to calculate the final amount, as well as the interest amount
- `rate` initialized to the value of the input element with an id of `rate`. This is needed to calculate the interest amount
- `years` initialized to the value of the input element with an id of `years`. This is needed to calculate the interest amount
- `interest` with the value `principal * years * rate / 100`. This is needed to calculate the total amount
- `amount` which is the sum of the integer value of `principal and the float value of interest`
- `result` initialized to the input element with an id of `result`. This is needed to modify the text when the Compute button is pressed

<details>
    <summary>Click here to see the code implementation</summary>

```js
var principal = document.getElementById("principal").value;
var rate = document.getElementById("rate").value;
var years = document.getElementById("years").value; 
var interest = principal * years * rate / 100;
var amount = parseInt(principal) + parseFloat(interest);
var result = document.getElementById("result");

```

</details>

2. Write the logic to convert the 'No. of Years' into the actual year in the future. This can be done by adding the number of years (`years`) to the current year inside the compute() function.

<details>
    <summary>Click here to see the code</summary>

```js
    var year = new Date().getFullYear() + parseInt(years);
```

</details>

This will ensure that the input taken as "No. of Years" is converted into an actual year (e.g. 2022).

3. Add validation for the "Principal" input box. If the user enters zero or a negative value, show an alert which says "Enter a positive number"

<details>
    <summary>Click here to see the code</summary>

```js
if (principal <= 0) {
    alert("Please enter a positive number!");
}
```

</details>

4. Once the user clicks on the alert "OK" button, take the user back to the "Principal" input box, by setting the focus on this box using the `focus` method in the code for principal input validation:

<details>
    <summary>Click here to see how it should look</summary>

```js
if (principal <= 0) {
    alert('Please enter a positive number!');
    document.getElementById("principal").focus();
}
```

</details>

> You can refer to the <a href="https://cf-courses-data.s3.us.cloud-object-storage.appdomain.cloud/IBMDeveloperSkillsNetwork-CD0101EN-SkillsNetwork/labs/Theia%20Labs/03%20-%20Javascript/instructions.md.html" target="_new">Javascript Form Validation lab</a>.

5. Within an `else` clause, set the inner html property of the result to the text below, replacing anything within the square brackets [] with its actual value.


Note that when writing `<` or `>` within quotation marks, you must instead type `\<` or `\>`

    If you deposit $[PRINCIPAL],<br>
    at an interest rate of [RATE]%.<br>
    You will receive an amount of $[INTEREST],<br>
    in the year [YEAR]<br>

<details><summary>Click here to see the code</summary>

```js
else {
    result.innerHTML = "If you deposit $" + principal + ",\<br\>at an interest rate of " + rate + "%\<br\>You will receive an amount of $" + amount + ",\<br\>in the year " + year + "\<br\>";
}
```

</details>

6. Make sure the numbers in the result are highlighted by using the `mark` HTML tag around each variable value:

```js
else {
    result.innerHTML = "If you deposit $" + "<mark>" + principal + "</mark>" + ",\<br\> at an interest rate of " + "<mark>" + rate + "%" + "</mark>" + "\<br\> You will receive an amount of $" + "<mark>" + amount + "</mark>" + ",\<br\> in the year " + "<mark>" + year + "</mark>" + "\<br\>";
}
```

7. The code in the updated `script.js` file should be:

<details>
<summary>Click here to see the updated code in script.js</summary>

```js
function compute() {
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value; 
    var interest = principal * years * rate / 100;
    var year = new Date().getFullYear() + parseInt(years);
    var amount = parseInt(principal) + parseFloat(interest);
    var result = document.getElementById("result");
	
    if (principal <= 0) {
        alert('Please enter a positive number!');
        document.getElementById("principal").focus();
    }
    else {
        result.innerHTML = "If you deposit $" + "<mark>" + principal + "</mark>" + ",\<br\> at an interest rate of " + "<mark>" + rate + "%" + "</mark>" + "\<br\> You will receive an amount of $" + "<mark>" + amount + "</mark>" + ",\<br\> in the year " + "<mark>" + year + "</mark>" + "\<br\>";
    } 
}

function updateRate()
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval;
}

```
</details>


::page{title="Exercise 5: Test the Calculator"}

Now that you have finished coding your calculator, you must do some basic testing.

> Write comments in your code which will help debug and maintain the code in the long term.

1. Enter these values in the form.

        Amount = 0
        Rate = 1%
        No. of Years = 1

Click on the `Compute Interest` button.

The output should be an alert saying `Enter a positive number`.

![exercise5-01](https://cf-courses-data.s3.us.cloud-object-storage.appdomain.cloud/IBMDeveloperSkillsNetwork-CD0101EN-SkillsNetwork/labs/Project/images/exercise5-01.png)

	
2. Enter these values in the form.

        Amount = 1000
        Rate = 10%
        No. of Years = 10

Click on Compute button.

The output should be:

![exercise5-02](https://cf-courses-data.s3.us.cloud-object-storage.appdomain.cloud/IBMDeveloperSkillsNetwork-CD0101EN-SkillsNetwork/labs/Project/images/exercise5-02.png)

> The year is 2022 at the time this lab was written, therefore 2032 is correct. If you are doing this in a different year, make sure the year value is the current year + 10 years.

3. Enter these values in the form.

        Amount = 4800
        Rate = 15.25%
        No. of Years = 5

Click on Compute button.

You should see the following output:

![exercise5-03](https://cf-courses-data.s3.us.cloud-object-storage.appdomain.cloud/IBMDeveloperSkillsNetwork-CD0101EN-SkillsNetwork/labs/Project/images/exercise5-03.png)

> The year is 2022 at the time this lab was written, 2027 is therefore correct. If you are doing this in a different year, make sure the year value is the current year + 5 years.

::page{title=""}

## Congratulations! You have completed the lab!

## Author(s)

<h4> K Sundararajan </h4>

## Other Contributor(s)

<h4> Michelle Saltoun </h4>
	
<h3 align="center"> &#169; IBM Corporation. All rights reserved. <h3/>
<!--
## Changelog

| Date | Version | Changed by | Change Description |
|------|--------|--------|---------|
| 2022-10-12 | 1.0 | K Sundararajan | Initial version created |
| 2022-10-27 | 1.1 | Michelle Saltoun | Updates to code |
| 2022-11-08 | 1.2 | K Sundararajan | Updated instructions based on feedback |
| 2022-11-09 | 1.3 | Michelle Saltoun | Minor updates |
| 2024-11-20 | 1.4 | Md Haroon Hussain | Updated estimated time and title |
| 2025-05-20 | 1.5 | Rajashree Patil | Updated few instructions for clarity |

## <h3 align="center"> © IBM Corporation 2022. All rights reserved. <h3/>-->

