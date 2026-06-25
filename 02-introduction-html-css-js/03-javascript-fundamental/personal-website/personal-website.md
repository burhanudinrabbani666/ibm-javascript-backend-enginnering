::page{title="Hands-On Lab: Single Page Portfolio Website"}

<img src="https://cf-courses-data.s3.us.cloud-object-storage.appdomain.cloud/IBMDeveloperSkillsNetwork-CD0101EN-SkillsNetwork/images/IDSN-logo.png" width="200" alt="cognitiveclass.ai logo">

##
**Estimated time:** 1 hr

In this project you will be creating a single page Portfolio website using HTML5, CSS & Javascript having the following sections:

* About Me
* Skills
* Projects
* Recommendations


Please use this following image as a point of reference to what the styled page should look like. After completing this Final project, you will be able to build a website having modern day UI & functionality to showcase your portfolio to interested persons/organizations.

> Please ensure that you don\'t include any personal/sensitive information in the project that is submitted. You may personalize the project at a later point of time at your discretion.

>Note: Please make sure you do all the steps in the right sequence. If the steps are not done in sequence, the output may not be as desired.

![main.png](https://cf-courses-data.s3.us.cloud-object-storage.appdomain.cloud/BInt38rs1kyXsbZ9SVRUAA/main.png)


::page{title="Saving Your Progress: How to Download Your Project"}

**Understand Session-Based Storage:** Keep in mind that our lab environments are session-based and do not retain data from previous sessions. Downloading your project ensures that your work is preserved.

**Download Your Project:** To avoid losing any progress, download your project by following these steps:
   - Right-click on the project folder and locate the download button.
   - Click the download button to save a copy of your project to your local machine.
   
Before ending your session, verify that all changes to your project are saved.

For visual guidance, refer to the attached screenshot below showing the download process.

![](https://cf-courses-data.s3.us.cloud-object-storage.appdomain.cloud/r4d8TOFdoRAKWbA0chGOQw/download.png)



::page{title="Prework"}

## Download and setup the project folder

1. Open a new terminal.

<img src="https://cf-courses-data.s3.us.cloud-object-storage.appdomain.cloud/IBMDeveloperSkillsNetwork-CD0101EN-SkillsNetwork/labs/Project/Final_Project_V3/images/new_terminal.png">

2. Download the project folder in compressed/zipped format, using the following command.

```
wget https://cf-courses-data.s3.us.cloud-object-storage.appdomain.cloud/IBMDeveloperSkillsNetwork-CD0101EN-SkillsNetwork/labs/Project/Final_Project_V3/finalproject_startercode.zip
```

3. Unzip the file in the folder named `singlepagewebsite` by running the following command. This command will create a folder named `singlepagewebsite` and add all the unzipped files in it.

```
unzip finalproject_startercode.zip -d singlepagewebsite
```

4. The folder `singlepagewebsite` contains the starter code for this project. You need to modify this code according to the tasks listed below, then save the updated files and the required screenshots.

5. Test the HTML page with a live server. Use live server to test the output of your tasks as you complete each task.

<details><summary> Click here to view guidance for liver server preview </summary>

Right-click the file and click "Open with Live Server" which will show a notification with a port (5500) being available to use. Or click on "Go Live" in the bottom panel to start the same port.
![Screenshot 2024-06-10 at 10.55.11 AM.png](https://cf-courses-data.s3.us.cloud-object-storage.appdomain.cloud/-fdUiQFRifKHLKwQ6hgHag/Screenshot%202024-06-10%20at%2010-55-11%E2%80%AFAM.png)

<img src="https://cf-courses-data.s3.us.cloud-object-storage.appdomain.cloud/IBMDeveloperSkillsNetwork-CD0101EN-SkillsNetwork/lauch_app_guid.png">
</details>


6. The html page in the starter code provides the following sections in the page.

- About Me
- Skills
- Projects
- Recommendations

<details><summary>Click here to view the segregation of the sections on the basis of the reference page.</summary>


<img src="https://cf-courses-data.s3.us.cloud-object-storage.appdomain.cloud/IBMDeveloperSkillsNetwork-CD0101EN-SkillsNetwork/labs/Project/Final_Project_V3/images/webpage_sections.png">
</details>


::page{title="Creating the single page website"}

 **Note:**

1. Please ensure that all updates to the **index.html**, **style.css**, and **script.js** files are properly saved.  

2. Download your project files and capture screenshots as mentioned in the respective tasks.  

3. As mentioned in the *“Final Project Overview and Review Criteria”*, you can submit your project deliverables through either Option 1: AI-Graded Submission and Evaluation or Option 2: Peer-Graded Submission and Evaluation.

4. **For Option 1: AI-Graded Submission and Evaluation:**  
   - Submission requires the **index.html**, **style.css**, and **script.js** files along with screenshots for **Task 5** and **Task 8**.  

5. **For Option 2: Peer-Graded Submission and Evaluation:**  
   - Submission requires screenshots for **Tasks 1 to 10** *(excluding Task 5)*.  

## Task 1

1. In index.html, replace the name given in the starter code **Jane Doe**, with your name in the Home section. You will see that the class is set to **profile_name** for this div.

2. In style.css, go to the **profile_name** class. The codes for floating to the left and padding, have been provided in the starter code. Add a light colour of your choice and an appropriate font size. The sample page uses 30px.
![profilename_change.png](https://cf-courses-data.s3.us.cloud-object-storage.appdomain.cloud/VrTwG_-gs7B3u0vmQK4xBA/profilename-change.png)

3. Save and test your web page with live server.
4. Take a screenshot of the home section along with the profile name and save it as `profile_name.png`.


## Task 2

1. In the nav bar section, you would notice that the link to the `About Me` section has been given. Add the other 3 sections: Skills, Projects, Recommendations. 

2. The codes for this class (ie. `topmenu`) have been given in style.css. The `topmenu:hover` class has a styling to set the color to white. Add the following style attriburtes to `topmenu:hover`. 

a. The `font-weight` as **bolder**

b. The `text-decoration` as **underline**
![nav_menu.png](https://cf-courses-data.s3.us.cloud-object-storage.appdomain.cloud/oTmsM7_4OX4USA-YqtiNpA/nav-menu.png)

3. Save and test your web page with live server.

4. Take a screenshot of the home section along with the nav bar showing the hover effect as show in the sample image and save it as `nav_bar.png`.

## Task 3

1. Modify the **About me** section with your name, a unique profile image (different from what is provided in the sample) and a text summary of yourself.

_You may add text about a fictititous person instead of actually providing your personal information._

<details><summary>Click here to learn how to upload an image: </summary>

1. Visit [Pixabay Image Search](https://pixabay.com/images/search/).
2. Find the image you want to upload and right-click on it and select the option to copy the image link.
3. Open a new terminal and navigate to the `singlepagewebsite` directory using the following command:
	```
	cd singlepagewebsite/
	```
4. Use the following command to download the image in the lab.
	> Replace `<Image-address>` with the link address you copied.
	```
   wget <Image-address>
   ```
5. Specify the image name in the `src` attribute of the image tag provided for profile.

Please refer to the attached screenshot below:
![](https://cf-courses-data.s3.us.cloud-object-storage.appdomain.cloud/c3zAPLSfYNolWtbhQewJ-g/wget-download.png)
	
</details>
	
![webpage_aboutme.png](https://cf-courses-data.s3.us.cloud-object-storage.appdomain.cloud/utnnPE_rrB_dxO8Kj9fk9g/webpage-aboutme.png)
	



2. Save and test your web page with live server.

3.Take a screenshot of the About me section as shown in the sample image and save it as `aboutme.png`.


## Task 4

**In the Skills section, 2 skills have been initially added.**

1. Add 3 or more skills with appropriate logo and text.
![webpage_skills.png](https://cf-courses-data.s3.us.cloud-object-storage.appdomain.cloud/Gk_FRAVT1fMvELPCZvCHUA/webpage-skills.png)

2. Save and test your web page with live server.
3. Take a screenshot of the skills section as shown in the sample image and save it as `skills.png`.

## Task 5
	
1.Test your webpage with the live server.

2.Then, take a screenshot showing the following functionality and save it as `functionality.png.`

- Your name (not “Jane Doe”) appears in the top-left corner.
- The navigation bar includes About Me , Project Details, Skills, and Recommendations and styled on hover.
- A personalized profile with your name, unique image, and summary text is displayed.
- Three new skills are added, showing all five with logos and correct formatting.

`Note : This task 5 can be skipped if you choose to proceed with the Peer Graded Assignment.`


## Task 6

In the projects section, 3 projects with sample content have been given.

1. Please change the project headings and project details from the default ones to your own/fictitious details.

2. The class is set to `project-card`.
![webpage_projects.png](https://cf-courses-data.s3.us.cloud-object-storage.appdomain.cloud/jRdmppYncJjnrnkGDyaEdg/webpage-projects.png)

3. Save and test your web page with live server.

4. Take a screenshot of the projects section as shown in the sample image and save it as `projects.png`.
	
## Task 7

You will notice that 3 Recommendations with random sample text have been initiallly added.

1. The class name has been set to `recommendation` in the provided code for all these.

2. Add at least 3 fictitious recommendations (each of about 25-30 words) in place of these.
![webpage_recommendations.png](https://cf-courses-data.s3.us.cloud-object-storage.appdomain.cloud/HGzZcDYVfsqMieknPrFkZA/webpage-recommendations.png)


3. Save and test your web page with live server.

4. Take a screenshot of the updated recommendation section as shown in the sample image and save it as `recommendation.png`.

## Task 8

1. The function `addRecommendation()` has  been in script.js as a part of the starter code. A `onClick` event to the button with id `recommend_btn` in provided in index.html, to invoke this function. 

2. Enter a text and click on the button, for the function should be invoked. The text should be added to the list of recommnedations, as shown in the image.
![add_recommendation.png](https://cf-courses-data.s3.us.cloud-object-storage.appdomain.cloud/tsNBhuHGlcNtLlgJkW5eKA/add-recommendation.png)


3. Save and test your web page with live server.

4. Take a screenshot of the updated recommendation section as shown in the sample image and save it as `new_recommendation.png`.
	


## Task 9

1. `Home` icon has been provided to you in the started code. Look for the portion `<a href="#home">` in index.html and add the following code inside it to make it functional and to take you to the start of the page when you click on the home icon.

```html
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" width="63px">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15 11.25l-3-3m0 0l-3 3m3-3v7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
```

![webpage_home_icon.png](https://cf-courses-data.s3.us.cloud-object-storage.appdomain.cloud/cOgeyoCY1OQeo8V9RHKegg/webpage-home-icon.png)

2. Save and test your web page with live server.
3. Take a screenshot of the bottom of the page as shown in the sample image and save it as `home_icon.png`.


## Task 10

In Task 8, you must have noticed that a newly submitted recommendation does get added to the exsiting list, however there is no confirmation upon submission. Your final task will be to incorporate that.

**Notice that the function `showPopup()` has already been provided with complete code in script.js.**

1. Add the following code inside the `addRecommendation()` function in the space provided, so that the `showPopup()` function is invoked onyl when a recommendation is submitted.

```
showPopup(true);
```

2. Go to div with id **popup** and add an apporpiate text confirmation message in the space provided. 
	
![webpage_popup.png](https://cf-courses-data.s3.us.cloud-object-storage.appdomain.cloud/z1DecAfCKbAaWqqInTXR7w/webpage-popup.png)

3. Save and test your web page with live server.
	
4. Take a screenshot of the bottom of the popup message as shown in the sample image and save it as `popup.png`.

::page{title="Checklist for submission"}

Follow the checklist below to verify that your project meets all requirements before submission.
	
**Submit your work through either Option 1: AI-Graded Submission and Evaluation or Option 2: Peer-Graded Submission and Evaluation, depending on the submission path you choose for project evaluation.**

Follow the submission checklist below if you are proceeding with **Option 1: AI-Graded Submission and Evaluation**:
	
1.You have an updated `index.html` file that includes the following functionalities:

- Your own name appears in the top-left corner instead of “Jane Doe.” 
- A navigation bar includes About Me, Project Details, Skills, and Recommendations.
- A unique About Me section includes a unique profile image, name & text reflecting a summary of learners profile.
- Three new skills are added with proper logos and text formatting, distinct from the default ones. 
- Three new projects are added with appropriate headings, different from the sample ones.
- Three new recommendations are included in the correct format and differ from the sample ones. 
- The Home icon works correctly and navigates to the top of the page. 

2.You have an updated `style.css` file that includes the following styling updates:
- Your name is correctly styled in the profile section. 
- About Me, Project, Skills, and Recommendations appear bold and underlined when hovered over. 

3.You have an updated `script.js` file that includes the following functionality:
- showPopup is triggered only when a new recommendation is submitted. 

4.You have a screenshot of the `functionality.png.` which clearly shows the required functionalities:
- Your name (not “Jane Doe”) appears in the top-left corner.
- The navigation bar includes About Me , Project Details, Skills, and Recommendations.
- A personalized profile with your name, unique image, and summary text is displayed.
- Three new skills are added, showing all five with logos and correct formatting.

5.You have a screenshot of the New Recommendations added as another tile to the existing ones on click of the button, in  the file `new_recommendation.png`.

Follow the submission checklist below if you are proceeding with **Option 2: Peer-Graded Submission and Evaluation**:

1. You have a screenshot of your name appearing as the stylized profile name in  the file `profile_name.png`.

2. You have a screenshot of the navigation menu with the mouse over one of the items reflecting the hover effect in  the file `nav_bar.png`.

3. You have a screenshot of the **About Me** section with your name/fictitious name, a personalized image (fictitious image)  and text (fictitious text) in  the file `aboutme.png`.

4. You have a screenshot of the **Skills** section with five or more skills with appropriate icon and text in  the file `skills.png`.

5. You have a screenshot of the **Project** section with 3 or more fictitious projects appearing in stylized list in  the file `projects.png`.

6. You have a screenshot of the **Recommendations** section with 3 or more fictitious recommendations appearing in stylized tiles in  the file `recommendations.png`.

7. You have a screenshot of the **New Recommendations** added as another tile to the existing ones on click of the button, in  the file `new_recommendation.png`.

8. You have a screenshot showing the `Home` icon with the appropriate image in `home_icon.png`.

9. You have a screenshot showing the `popup` with the appropriate message when a new recommendation is submitted in the file  `popup.png`.

	
	
Congratulations! That\'s a wrap.


## Author(s)

### Ratima Raj Singh
## <h3 align="center"> © IBM Corporation. All rights reserved. <h3/>
<!--
## Changelog

| Date | Version | Changed by | Change Description |
|------|--------|--------|---------|
| 03.11.2025 | 1.0 | Ratima Raj Singh | Initial version created |


## <h3 align="center"> © IBM Corporation 2023. All rights reserved. <h3/>
-->