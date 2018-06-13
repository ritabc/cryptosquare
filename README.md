# Project Title

#### Epicodus Intro to Programming: Cryptosquare, June 7th, 2018

#### By Nate Cottle & Rita Bennett-Chew

## Description



## Setup/Contribution Requirements

1. Clone the repo
1. Make a new branch
1. Commit and push your changes
1. Create a PR

## Specs

* Take user string, remove spaces, and break into array

* This program will find length of the array(1) and return the square root of its length rounded up to nearest integer
  * Input: [h,e,l,l,o,e,v,e,r,y,o,n,e]
  * Output: 4

* This program will split the array at ever column.length place into new equally long arrays (splitToRows)
  * Input: [h,e,l,l,o,e,v,e,r,y,o,n,e]
  * Output:
          1. [h,e,l,l]
          1. [o,e,v,e]
          1. [r,y,o,n]
          1. [e]

* This program will take every index[y] for columns and place in sub-array (transform)
  * Input:
          1. [h,e,l,l]
          1. [o,e,v,e]
          1. [r,y,o,n]
          1. [e]
  * Output:
          1. [h,o,r,e]
          1. [e,e,y]
          1. [l,v,o]
          1. [l,e,n]

* This program will take these new arrays(4) and join them one after another
  * Input:
          1. [h,o,r,e]
          1. [e,e,y]
          1. [l,v,o]
          1. [l,e,n]
  * Output: [h,o,r,e,e,e,y,l,v,o,l,e,n]

* This program will split this array(5) at every 5th place and return a string to the user
  * Input: [h,o,r,e,e,e,y,l,v,o,l,e,n]
  * Output: horee eeylv olen

## Technologies Used

* Bootstrap x.x.x
* jQuery 3.3.1

## Links

*

## License

This software is licensed under the MIT license.

Copyright (c) 2018 **Name**
