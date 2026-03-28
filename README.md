# Seatwork #2 - Getting to know CSS Position and z-index.
### This seatwork will ask you to implement the different CSS position on a given code.
### short link to this .md file is: https://bit.ly/4c61P9K
#### Resources (also found in Khub week 5)
- [4 Minute Youtube Video on CSS Position](https://www.youtube.com/watch?v=YEmdHbQBCSQ)
- [CSS Position Tutorial](https://roycan.github.io/CssPositioningZIndexLab/)

### Instructions: 
1. This is individual submission in khub, but you can work with a partner.  When you submit in khub please place both your names in the submission bin.
2. Guided Activity (30 minutes), please follow what is being required.  

    - Make a copy of this .md file to your Q4 repository and name it as **SectionLNseatwork2.md** example **9LiCruzSeatwork2.md**. Place it in your q4 repository vscode local computer. Committing frequently to your Github repository.  
    - Copy the code below and paste it inside a new file (name it as SectionLNseatwork2.html). Place this file in the same location where the .md file is saved. 
    - Change the content values of the meta tags to your names for author/s and the date today for revised.
    - Please do the following tasks that will ask you to reposition HTML elements then answer the guided question for each task on the .md file. Commit changes to the .md file and to the .html file as well.
    **- This seatwork is worth 20pts and should be submitted by the end of the period** The link to [KHub submission bin](https://khub.mc.pshs.edu.ph/mod/assign/view.php?id=15481).
      - Submit the links to your .md file and .html file.

```html
<!DOCTYPE html>
<html>
<head>
  <meta name="author" content="Freedom Louise Aguinaldo" />
  <meta name="revised" content="27/3/2026" />
  <style>
    body { font-family: Arial, sans-serif; }
    .header, .footer {
      background: lightblue;
      padding: 10px;
    }
    .footer {
       opacity: 0.5;
       position: fixed; 
       bottom: 0; 
       width: 100%;
    }
    .sidebar {
      background: lightgreen;
      width: 150px;
      height: 200px;
      position: relative;
      top: 20px;
      left: 20px;
    }
    .content {
      background: lightyellow;
      width: 300px;
      height: 200px;
      position: absolute; 
      top: 66px; 
      left: 200px;
    }
    .notice {
    position: absolute;
    top: 60px;
    left: 400px;
    background: orange;
    padding: 10px;
    z-index: 1;
}
  </style>
</head>
<body>
  <div class="header">Header</div>
  <div class="sidebar">Sidebar</div>
  <div class="content">Main Content</div>
  <div class="footer">Footer</div>
  <div class="notice">Notice!</div>
</body>
</html>
```
### Step 1 (Static vs Relative):

- Add in css ```position: relative; top: 20px; left: 20px;``` to .sidebar.

- Guided Question: What changed compared to the default static positioning? Try to give different values to top and left or you can change it to bottom, right.

Answer: It moved from its original position. It is still in its original space but uses top, bottom, left, right.


### Step 2 (Fixed):

- Add in css ```position: fixed; bottom: 0; width: 100%;``` to .footer.

- Guided Question: What happens when you scroll the page? Why does the footer behave differently from position relative?

Answer: When scrolling down the page, the footer stays visible because the position is fixed, which means its still visible in place even if youre scrolling down.

### Step 3 (Absolute):

- Add in css ```position: absolute; top: 66px; left: 200px;``` to .content.

- Guided Question: What is the effect of position: absolute on an element? How is it different from fixed?

Answer: The absolute position removes the element from its normal flow in the page, so other elements in the page will act like it doesn't exist. It is also positioned to the nearest ancestor or if there's none, to the <body>. They are different from fixed position because fixed position stays visible even when scrolling while absolute position is relative to veiwport.


### Step 4 : (Absolute)

- Add in html ```<div class="notice">Notice!</div>``` and include the css below:

```css
.notice {
    position: absolute;
    top: 60px;
    left: 400px;
    background: orange;
    padding: 10px;
    z-index: 2;
}
```

- Give .content a z-index: 1.

- Guided Question: Why does the notice appear on top of the content? What happens if you swap the z‑index values?

Answer: The notice appears on top of the content because it has a higher z-index value. If their z-indexes are switched, the content will be on top of the notice. Z-index determines which one is on top or bottom. If you have a z-index above 0, it will be on top on an element, similar to notice and content's situation. But if you have a z-index below 0, it will be below an element.

- Challenge: 
    * What changes that you have to do on the code that will position .notice box on the top right corner of the .content box? Please write the code on paper as well (both html and css on the part of .notice and .content).
    * Try to change the position of .content to relative then to fixed. What do you observed each time?
    * What do you observe on about the effect of z-index on .notice and .content boxes?

3. Please answer the following reflection questions (15 minutes)

    a. Could you summarize the differences between the CSS position values (static, relative, absolute, fixed)?

    Answer: static: default, can't use top/left/bottom/right, flows naturally in page.
            relative: still takes up original space but it is reltive to its normal position.
            absolute: removes element from normal flow, positioned relative to nearest positioned ancestor.
            fixed: removes element from flow, positioned relative to viewport, stays in place even when scrolled.

    b. How does absolute positioning depend on its parent element?
    
    Answer: Absolute elements are positioned relative to the nearest ancestor that has a position other than static. If there's no ancestor, it will use the <body> as an ancestor. 

    c. How do you differentiate sticky from fixed (you can research on sticky)?

    Answer: A sticky positioned element stays on the page within the normal flow and becomes fixed when it reached to a specific spot in its parent container, unlike the fixed position that is fixed in one spot (the viewport) and always be seen by the viewer.

    d. If you were designing a webpage for a school event, how might you use positioning to highlight important information? Please give concrete examples.

    Answer: I will use fixed to display references or navigation bar like the footer, use absolute to place event banners or buttons in specific spots, and use sticky for reminders.