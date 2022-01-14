---
title: "The Four Musketeers"
date: 2020-01-12
layout: post
# url:
# medium: 
time: 2
---
_Though I don't have much to write about this, It is one of the projects that I am most proud of, not because that we won first prize but the way we planned and executed things._

We needed to build a 4 bot system that can communicate with each other and align according to a given pattern. 
It was a part of Inter Hostel Tech Competition Kriti, We had only two days do all the work, and also 2-3 quizzes scheduled on the same day.
  At first, the [problem statement](https://github.com/TourTerrible/Spot-ify/blob/master/Problem_statement.pdf) seems like that we may need to use the shortest path algos with taking care of collision, But the key to doing any college project involving hardware 
  is to keep it simple. We also discussed a few algos like A-star and other path-finding algorithms, but these algorithms were too complex to implement with the actual bot.
So we decided to design our own simple if-else algorithm by considering all the possible cases. Yes, I know It looks like hardcoding but it's not. It is one of the methods of robot navigation<!--break-->.
                                   

**There are two ways for robotics navigation**:
- Reactive Control
- Map-Based Navigation

we used Reactive control to create a behavioral model using FSM. It involves "Go to Goal Controller" and "Robot Avoidance".
Go to goal control is responsible for keeping the bot towards goal location at a fixed speed and Robot Avoidance make sure that bots don't collide and incase of collision what to do.
                                   
The interesting thing about it is that we didn't know any of these things at that time and got to know after the event was over.               

 This is how our bots looked like:
                                   
<p align ="center">
<img src="https://user-images.githubusercontent.com/45756011/149541513-2e9b09d0-e161-4511-9e44-96efe1aba204.jpeg" width="50%" height="50%">
 </p>
   
 
 If you think it was an interesting project then you must check it's [GitHub Repo](https://github.com/TourTerrible/Spot-ify) to check the complete behavioral model using FSM and a [Proper version](https://otoshukiprojects.home.blog/2020/08/15/mopat-mk-v/) of this, on which 
                                                                             one of my senior, [Guining Pertin](https://otoshukiprojects.home.blog/) is/was working.
