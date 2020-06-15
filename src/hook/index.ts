import { UseHashTagsParams, APIHashTag, UseHashTag } from "types";
import { useState, useEffect } from "react";
// import api from '@api';
// import logger from '@common/utils/logger';

const useHashTags = ({ q, offset }: UseHashTagsParams): UseHashTag => {
  const [hashTag, setHashTag] = useState<APIHashTag>();

  useEffect(() => {
    // api.getFeedByHashTag({
    //   offset,
    // })
    //   .then((res: APIHashTag) => setHashTag(res))
    //   .catch((err: Error) => {
    //     logger.error('GET HashTag', err)}
    //   );
    setHashTag({
      "count": 10,
      "offset": 30,
      "results": [
        {
          "account": {
            "fullname": "Oleg Kobelev",
            "href": "/na_krul",
            "id": 453128858
          },
          "date": "2020-06-14T09:01:00+07:00",
          "hashtags": [
            "#100DaysOfCode",
            "#Python"
          ],
          "likes": 0,
          "replies": 0,
          "retweets": 6,
          "text": "Day 61: #100DaysOfCode progress: today I worked on Using the Github API with Python / D1 (lectures)  https://talkpython.fm/100days?s=pybites\u00a0\u2026 #Python @pybites @talkpython"
        },
        {
          "account": {
            "fullname": "Data Artisan",
            "href": "/dataartisan1",
            "id": 1258867508175679489
          },
          "date": "2020-06-14T09:01:00+07:00",
          "hashtags": [
            "#AI",
            "#MachineLearning",
            "#100DaysOfMLCode",
            "#100DaysOfCode",
            "#Rstats",
            "#python",
            "#DeepLearning",
            "#BigData",
            "#DataScience"
          ],
          "likes": 30,
          "replies": 0,
          "retweets": 24,
          "text": "Sometimes more true than I would like to admit! \n\nvia @nixcraft\n#AI #MachineLearning #100DaysOfMLCode #100DaysOfCode #Rstats #python #DeepLearning #BigData #DataScience pic.twitter.com/n6Uf4Dfa70"
        },
        {
          "account": {
            "fullname": "Kris Chow",
            "href": "/KrisChowz",
            "id": 889727491337670656
          },
          "date": "2020-06-14T08:52:00+07:00",
          "hashtags": [
            "#100DaysOfCode",
            "#Python"
          ],
          "likes": 3,
          "replies": 0,
          "retweets": 6,
          "text": "Day 2: #100DaysOfCode progress: today I worked on Playing with Datetimes / D2 (practice)  https://talkpython.fm/100days?s=pybites\u00a0\u2026 #Python @pybites @talkpython"
        },
        {
          "account": {
            "fullname": "ryegruff",
            "href": "/ryegruff",
            "id": 1271957874009391105
          },
          "date": "2020-06-14T08:31:00+07:00",
          "hashtags": [
            "#100DaysOfCode",
            "#Python"
          ],
          "likes": 6,
          "replies": 0,
          "retweets": 10,
          "text": "#100DaysOfCode \nDay 1: Python Persuasion?\n\nBeing a React dev I wanted to use this 100 day challenge to try something new.\n\nSo I want to get into #Python\nGood thing my keyboard from @DasKeyboard has a ruler built in. May need it for checking whitespace... "
        },
        {
          "account": {
            "fullname": "Alexandre B A Villares\u00a0\u2602",
            "href": "/villares",
            "id": 26987904
          },
          "date": "2020-06-14T08:23:00+07:00",
          "hashtags": [
            "#Python"
          ],
          "likes": 47,
          "replies": 0,
          "retweets": 14,
          "text": "If you are into #Python, perhaps you might want to have a go at using it to explore graphics & coding in a poetic or expressive way, people call it 'creative coding', I don't like the name very much, but let me show you some entry points\u2026  pic.twitter.com/anqnwWVxJZ"
        },
        {
          "account": {
            "fullname": "rookoutlabs",
            "href": "/rookoutlabs",
            "id": 835916550234329090
          },
          "date": "2020-06-14T02:32:00+07:00",
          "hashtags": [
            "#Developer",
            "#programming",
            "#developers",
            "#java",
            "#javascript",
            "#python",
            "#webdev",
            "#100daysofcode",
            "#tech",
            "#startups"
          ],
          "likes": 7,
          "replies": 0,
          "retweets": 21,
          "text": "The State of #Developer Ecosystem 2020 by @jetbrains is now out! \n#programming #developers #java #javascript #python #webdev #100daysofcode #tech #startups https://www.jetbrains.com/lp/devecosystem-2020/\u00a0\u2026"
        },
        {
          "account": {
            "fullname": "Bill Pereira",
            "href": "/BillPereiraZ",
            "id": 1016019873263181824
          },
          "date": "2020-06-13T21:15:00+07:00",
          "hashtags": [
            "#python",
            "#zos",
            "#ansible"
          ],
          "likes": 8,
          "replies": 0,
          "retweets": 2,
          "text": "Working on next 2 videos! Installing #python on #zos! And getting started with #ansible! Coming next week  pic.twitter.com/hxMZxubhXX"
        },
        {
          "account": {
            "fullname": "Dhritiraj Sengupta",
            "href": "/rajgeo93",
            "id": 1228254320
          },
          "date": "2020-06-13T04:43:00+07:00",
          "hashtags": [
            "#python",
            "#codingforearth",
            "#geography",
            "#geosciencecode"
          ],
          "likes": 2,
          "replies": 0,
          "retweets": 0,
          "text": "Coding+Cocktail! Getting basics of Python from Le Wagon. Saturday well spent after 6 months. #python #codingforearth #geography #geosciencecode  pic.twitter.com/H1Ra9zDVvF"
        },
        {
          "account": {
            "fullname": "Course Sites",
            "href": "/SitesCourse",
            "id": 1144063003785961472
          },
          "date": "2020-06-12T19:00:00+07:00",
          "hashtags": [
            "#ProgrammingLanguages",
            "#Python",
            "#100DaysOfCode",
            "#udemy",
            "#DataScience",
            "#MachineLearning",
            "#Django",
            "#webdevelopment",
            "#DataAnalysis",
            "#DeepLearning",
            "#womenintech",
            "#javascript30",
            "#free",
            "#coupons"
          ],
          "likes": 5,
          "replies": 0,
          "retweets": 15,
          "text": "#ProgrammingLanguages\nThe Concise #Python 3 Bootcamp 2020 for Absolute Beginners | Course \n\n=>  https://cousesites.blogspot.com/2020/06/the-concise-python-3-bootcamp-2020-for.html\u00a0\u2026\n#100DaysOfCode #udemy #DataScience #MachineLearning #Django #webdevelopment #DataAnalysis #DeepLearning #womenintech #javascript30 #free #coupons"
        },
        {
          "account": {
            "fullname": "Learn to Code",
            "href": "/alearntocodez",
            "id": 844736432115736576
          },
          "date": "2020-06-12T13:18:00+07:00",
          "hashtags": [
            "#Python",
            "#Lambda",
            "#Morioh"
          ],
          "likes": 3,
          "replies": 0,
          "retweets": 0,
          "text": "A Practical Introduction to Python Lambda Functions\n\n\u261e  https://ift.tt/2Nu20iF\u00a0\n#Python #Lambda #Morioh pic.twitter.com/bUunFLmN5G"
        }
      ]
    })
  }, [q, offset])

  return {
    hashTag,
    setHashTag,
  };
};

export default {
  useHashTags,
}
