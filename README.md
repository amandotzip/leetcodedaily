# leetcodedaily
App that provides a leet code question every day

# Current Status
Data asynchronously scrapes leetcode and logs into console using axiom. Next step is to store it in memory for displaying on the app
# How it works
- Evaulate to a ranodom leet code question URL
- Web scrape the page
- Parse the page for only the leet code question
-  - There is a div class "24sa" where all of the leet code question is
- Store and reformat question for user