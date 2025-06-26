# li-unfollow
## A simple javascript project to mass-unfollow everybody on LinkedIn.

> "a ruthless “mass‑unfollow” bot for your LinkedIn feed, scrolling, clicking, and refreshing until you stop it." - ChatGPT

Have you ever dreamt of "factory-refreshing" your LinkedIn feed?  Surprisingly, LinkedIn makes this very difficult.

This project lets you unfollow everybody on LinkedIn. It will unfollow indiscriminately, so if you have folks you really like (check your `my network` -> `following` view [found here](https://www.linkedin.com/mynetwork/network-manager/people-follow/following/), then make a list of any you will want to re-follow after running this purge.

- [Show me the tl;dr and how to run the code](#tldr)
- [Explain this project to me, including the back story](#the_story)

<figure><img src="https://github.com/user-attachments/assets/d7849162-0569-454e-b684-690433dd9e23" alt="a blank LinkedIn feed" width="400"/><figcaption><em><br/>That Zen blank LinkedIn feed feeling...</em></figcaption></figure>

*Note: this tutorial assumes you are using Google Chrome, but if you can find the console, this should work on any browser.*


<a id="tldr"></a>
## tl;dr - just explain the code.

To unfollow everybody, authenticate into your LinkedIn account, then:

### Unfollow from your "followers" list
This sounds counterintuitive, but the first step is to go to the page that lists all the people who follow _you_, namely [this page](https://www.linkedin.com/mynetwork/network-manager/people-follow/followers/) (once you are logged in to LinkedIn).  Once there, scroll down (a lot) to load your entire list of followers.  LinkedIn will only let you load 1,000 most recent connections that follow you, but this is the fastest way I have found to handle a big batch of followers in one go.

Once you have loaded all 1,000 profiles, do one of the following:
- right click on the webpage and select 'inspect', or...
- press F12, or...
- Click on the ellipsis in the top right of the browser next to your profile icon, and select `more tools` → `developer tools`.

In the browser dev tools, open the console. Here, you can copy the code from `li-unfollow-from-followers-list.js` and paste it into your console, and hit enter.  The script will run through all 1,000 contacts and *unfollow them all*.

So you have now taken a good chunk of followers off your list.  The best way to take care of the rest (and believe me, I have tried a bunch of approaches!) is to automate this process in your feed.

### Unfollow from the feed

The second script (found in `li-unfollow-from-feed.js`) will take care of this.  Just navigate to [your feed page](https://www.linkedin.com/feed/) and repeat the process above (open the developer tools, navigate to the console tab, paste in the code, press `enter`).  Let it run for a while, then shut down the tab.

This will clear out all the most active people, but new folks will pop up over time (people will only pop up in your feed when they post or react to a post). For that purpose, you can create a 'Bookmarklet' (essentially a bookmark that acts as a function call).  See the `li-unfollow-from-feed-bookmarklet.js` file.  You just have to drop this into the `URL` field of a new bookmark, then click on that bookmark when you have your LinkedIn feed page open.

### Why should I trust this code?

You shouldn't.  As your mother no doubt told you, "*don't take code from strangers!*".  Don't trust me or anybody else out there on the interwebs encouraging you to just load and run code in your browser, especially minified code (the compact type that is harder to figure out).

Instead, what you should do first is grab the code I am recommending you run and put it into your favourite LLM (Claude, ChatGPT, Gemini, etc.) with a prompt like "Explain to me what will happen if I run this code in my browser."  Feel free to ask the LLM if the code appears malicious in any way.

Once you are satisfied I am not trying to trick you into joining some crazy crypto scheme without your consent, then you can run this code in your browser.  Enjoy.

<hr />

<a id="the_story"></a>
#  The full story: How to clean up your LinkedIn feed

I am about to mark my 20th year on LinkedIn.  It's been an amazing platform for me, for all the obvious reasons, and it's been fun to watch it evolve.

Many people got sucked into the idea that more connections was a good thing, a nice ego boost, a status symbol, and—worse case scenario—it seemed pretty innocuous to collect thousands of connections.

I used to be quite selective in terms of who I connected with on LinkedIn.  Then one day, I was talking to Pete Hunt, the CEO of Dagster Labs, who casually said "*I just mash the 'accept' button, and reject anybody who becomes a pain in the ass.*"  Fair enough, I thought, it seemed efficient. So I adopted that approach, accepting every salesperson's, recruiter's, job applicant's connection request.  Surpassing 3,000 connections gave me some sense of validation.  But my feed became increasingly painful to watch.

In the last few years, we have seen LinkedIn evolve into much more of a social network than a professional forum, right down to the short-form TikTok videos and desperate wannabe influencer tactics that plague many other platforms. This must have worked for the LinkedIn management team, as they have leaned in hard to make the whole experience way more 'social'.


<figure><img src="https://github.com/user-attachments/assets/86abef39-e13a-4d03-a09b-544891dc4534" alt="a dog pooping linkedin post - no thanks!" width="400"/><figcaption><em><br/>Some LinkedIn posts I could do without...</em></figcaption></figure>




When LinkedIn leaned into the Social Media aspect of the platform, they made each and every person you connect with somebody you follow.  The logic here is simple:
- People you are connected with are people you can message, and show up in your search
- People you follow are the ones whose activities on LinkedIn show up in your feed.
- LinkedIn will sell you off to advertisers based on which companies your connections follow.  Remember, LinkedIn is free, so *you are the product*.

Like many other users, I don't go to LinkedIn for the wedding photos, funny pet videos, and pappy motivational quotes.  It is what it is, but I wanted a way to opt out of following, without losing the connections.  

It turns out, it's not that easy. LinkedIn lets you identify who you are connected with and sever those connections.  But there is no mechanism for mass-unfollowing without affecting the connections.

## What about the "My Network" -> "Following" page?
Yes, there is a page [found here](https://www.linkedin.com/mynetwork/network-manager/people-follow/following/) which shows you all the people you are following.  But there is a catch.  This is only the people *not in your connections* that you follow.  So it will show you influencers and personalities you chose to follow.

<figure><img src="https://github.com/user-attachments/assets/0fa5e43b-332e-4206-bce1-0dd462509b60" alt="a dog pooping linkedin post - no thanks!" width="400"/><figcaption><em><br/>"You are not following anyone on Linkedin"</em></figcaption></figure>


## Stragglers

This "unfollow-from-feed" approach will work for folks who have recently posted or commented.  If you have a large (or a less active) network, some of the people you follow will not show up in your feed for a while.  So after a while, you might want to rerun the script and keep on purging out those few stragglers.

See the tl;dr section for instructions on creating a simple "bookmarklet" - or a button to automate all this.

## So, we now have a nice clean feed, right?    
Well, yep, I did for a few days.  And then LinkedIn decided that was not acceptable and started to populate my feed with a bunch of `suggested` posts.  But that is fine.  All we need to do is find a few valuable people to follow, opt in to their posts, and our feed will again become a valuable resource for networking and staying connected.

I hope this helps you get back to a productive LinkedIn feed!
