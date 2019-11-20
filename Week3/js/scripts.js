var parent = document.getElementById('container');
parent.appendChild(navbar);



// create function to generate list & section elements

// NAVBAR
var navbar = document.createElement('ul');
var logo = document.createElement('li');
logo.innerHTML = '<h1>HighOnCoding</h1>';
var homeLink = document.createElement('li');
homeLink.innerHTML = 'Home'
var catLink = document.createElement('li');
catLink.innerHTML = 'Categories'
navbar.append(logo);
navbar.append(homeLink);
navbar.append(catLink);
// document.getElementById("catLink").setAttribute("href", "../categories.html");
navbar.style.backgroundColor = "cornflowerblue";
navbar.style.listStyle = "none";
navbar.style.color = "white";
// const navStyle = 
//   display: inline;
//   backgroundColor: cornflowerblue; 
//   color: white; 
// navbar.style = navStyle

// SELECTED TEXT
var header = document.createElement('header');
header.innerHTML = '<h2>Curse of the Current Reviews</h2>';
var headTxt = document.createElement('p');
headTxt.innerHTML = 'Last month Apple released the anticipated WatchKit Framework for developers in the form iOS 8.2 beta SDK release. The WatchKit framework enable the developers to create Apple Watch applications. In this article we are going to focus on the basics of getting started with the WatchKit framework and developing apps for the Apple Watch.';
header.style.backgroundColor = "gray";
parent.appendChild(header);
header.appendChild(headTxt);

// First SECTION
var main = document.createElement('main');
parent.appendChild(main);
var section = document.createElement('section');
var sectionTitle = document.createElement('h3');
sectionTitle.innerHTML = 'Hello WatchKit';
var sectionTxt = document.createElement('p');
sectionTxt.innerHTML = 'When you want to buy any application from the Apple iTunes store you have more choices than you can handle.  Most of the users scroll past the application description completely avoiding it like ads displayed on the right column of your webpage. Their choice is dependent on three important factors: price, screenshot and reviews.';
main.appendChild(section);
section.appendChild(sectionTitle);
section.appendChild(sectionTxt);
section.appendChild(bar);

// Next Section/Article
var article = document.createElement('article');
var articleTitle = document.createElement('h3');
articleTitle.innerHTML = 'Introduction to Swift';
var articleTxt = document.createElement('p');
articleTxt.innerHTML = 'Swift is a modern programming language developed by Apple to create the next generation of iOS and OSX applications.  Swift is a fairly new language and still in development but it clearly reflects the intentions and the future direction.  This article will revolve around the basic concepts in the Swift language and how you can get started.';
main.appendChild(article);
article.appendChild(articleTitle);
article.appendChild(articleTxt);
article.appendChild(bar);

var bar = document.createElement('ul');
var comment = document.createElement('li');
comment.innerHTML = 'comments';
var like = document.createElement('li');
like.innerHTML = 'likes';
bar.appendChild(comment);
bar.appendChild(like);
bar.style.backgroundColor = "orange";
