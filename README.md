# li-unfollow
## A simple javascript project to mass-unfollow everybody on LinkedIn.

> "a ruthless “mass‑unfollow” bot for your LinkedIn feed, scrolling, clicking, and refreshing until you stop it." - ChatGPT

Have you ever dreamt of "factory-refreshing" your LinkedIn feed?  Surprisingly, LinkedIn makes this very difficult. This project shows you how.

- [Show me the tl;dr and how to run the code](#tldr)
- [Explain this project to me, including the back story](#the_story)

<figure><img src="https://github.com/user-attachments/assets/d7849162-0569-454e-b684-690433dd9e23" alt="a blank LinkedIn feed" width="400"/><figcaption><em>That zen blank LinkedIn feed feeling...</em></figcaption></figure>

*Note: this tutorial assumes you are using Google Chrome as a browser, but if you can find the browser console, this should work on any browser.*


<a id="tldr"></a>
## tl;dr - just explain the code.

This project lets you unfollow everybody on LinkedIn. Consider this a factor refresh.  It will unfollow indiscriminetly, so if you have folks you really like (check your `my network` -> `following` view [found here](https://www.linkedin.com/mynetwork/network-manager/people-follow/following/) make a list of any you will want to re-follow after running this purge.

To unfollow everybody, authenticate into your LinkedIn account, then:

### Unfollow from your "followers" list
This sounds counter intuitive, but the first step is to go to the page that lists all the people who follow you, namely https://www.linkedin.com/mynetwork/network-manager/people-follow/followers/ (once you are logged in to LinkedIn).  Once there, scroll down to load your entire list of followers.  LinkedIn will only let you load 1,000 most recent connections that follow you, but this is the fastest way I found to handle a big batch of followers in one go.

Once you have loaded all 1,000 profiles, do one of the following:
- right click on the webpage and select 'inspect', or...
- press F12, or...
- Click on the elipsis in the top right of the browser next to your profile icon, and select `more tools` → `developer tools`.

In the browser dev tools, open the console. Here, you can copy the code from `li-unfollow-from-followers-list.js` and paste it into your console, and hit enter.  The script will run through all 1,000 contacts and unfollow them all.

### Unfollow from the feed

So you have now taken a good chunk of followers off your list.  The best way to take care of the rest (and believe me, I have tried a bunch of approaches!) is to automate this process in your feed.  The second script (found in `li-unfollow-from-feed.js`) will take cre of this.  Just navigate to [your feed page](https://www.linkedin.com/feed/) and repeat the process above (open the developer tools, navitage to the console tab, paste in the code, press `enter`).  You may need to run this process a few times if you have a lot of people you are currently following.  

<a id="the_story"></a>


<img src="https://github.com/user-attachments/assets/0fa5e43b-332e-4206-bce1-0dd462509b60" alt="You are not following anyone on Linkedin" width="400"/>



