### [Website Link](https://westwoodgamedev.github.io/)
# How to add pages to the website (ask an officer if you want edit perms)
1. [clone the repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository)
2. open the ```/theme``` folder
3. open the ```/src``` folder
4. open the ```/pages``` folder
5. look at other pages in the subfolder you want your page in to learn how to create a page then create either a .astro or .mdx file depending on how fancy you need your page to be. (make sure to copy over the blips of code at the top of all the files in yourr chosen sub folder). if you plan on creating a new subfolder ask me.
6. if you want to style it up i recommend using ```<style>``` tags
7. if you want images use the ```<img href="relative image url" />``` if the page being adited is a .astro or .mdx (you can also use ```![image alt text](relative image url)``` in .mdx)
8. lastly unless you made you page a .mdx in the ```/lessons``` folder then you're going to want to link it in somewhere else in the website so that it is actually accessible.
9. if you have any other questions ask our resident web dev expert Yogansh aka Xxx_sharpkiller_xxX

# How to set up live view (if you want to see website changes before breaking the live website)
1. Install node
2. [clone the repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository)
3. Open terminal
4. ```cd``` to the cloned folder
5. ```cd theme```
6. ```npm install```
7. ```npm run dev```
8. Go to the outputted link in your browser
9. Whenever you make changes to your code, the browser should automatically refresh to reflect that
10. If you have any questions, ask Alex

# TODO
- update logo.astro in /themes/src/components to an image



## Template and Theme Credit

Thanks to Jaydan Urwin for the theme used in this website.

If you find this theme useful, please consider donating to support the continued development of it with the link below

[Donate to Odyssey Theme](https://littlesticks.lemonsqueezy.com/checkout?cart=1b9b09ef-0511-41ca-b94e-d6c6c4fde36e)
