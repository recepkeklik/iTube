const SeriesData = [
    {
        id:1,
        img:"./images/SeriesImages/GoT_img.jpg",
        liked:false,
        isInWatchList:false,
        title:"Game Of Thrones",
        Walpapers:["GoT_walpaper","GoT_walpaper2","GoT_walpaper3","GoT_walpaper4","GoT_walpaper5","GoT_walpaper6","GoT_walpaper7","GoT_walpaper8"],
        summary:"Game of Thrones is an American fantasy drama television series created by David Benioff and D. B. Weiss for HBO. It is an adaptation of A Song of Ice and Fire, a series of fantasy novels by George R. R. Martin, the first of which is A Game of Thrones. The show premiered on HBO in the United States on April 17, 2011, and concluded on May 19, 2019, with 73 episodes broadcast over eight seasons.",
        score:"9.2",
        seasonNumber:8,
        episodeNumber:74,
        forAge:18,
        seriesData:[
            {
              id: 1,
              name: 'Season 1',
              episodes: [
                { id: 1,img: "../images/GoTEpisodeImages/Season1Episode1.jpg",name:"Winter Is Coming",timeDuration:"1h 2m" },
                { id: 2,img: "../images/GoTEpisodeImages/Season1Episode2.jpg",name:"The Kingsroad",timeDuration:"56m" },
                { id: 3,img: "../images/GoTEpisodeImages/Season1Episode3.jpg",name:"Lord Snow",timeDuration:"58m" },
                { id: 4,img: "../images/GoTEpisodeImages/Season1Episode4.jpg",name:"Cripples, Bastards, and Broken Things",timeDuration:"56m" },
              ],
            },
            {
              id: 2,
              name: 'Season 2',
              episodes: [
                { id: 4, name: 'Episode 4' },
                { id: 5, name: 'Episode 5' },
                { id: 6, name: 'Episode 6' },
              ],
            },
            {
              id: 3,
              name: 'Season 3',
              episodes: [
                { id: 6, name: 'Episode 7' },
                { id: 7, name: 'Episode 8' },
                { id: 8, name: 'Episode 9' },
              ],
            },
          ]
    },
    {
        id:2,
        img:"./images/SeriesImages/breaking-bad_img.jpg",
        liked:false,
        isInWatchList:false,
        title:"Breaking Bad",
        Walpapers:["BreakingBad_walpaper","BreakingBad_walpaper2","BreakingBad_walpaper3","BreakingBad_walpaper4","BreakingBad_walpaper5","BreakingBad_walpaper6","BreakingBad_walpaper7","BreakingBad_walpaper8"],
        summary:"Breaking Bad is an American crime drama television series created and produced by Vince Gilligan for AMC. Set and filmed in Albuquerque, New Mexico, the series follows Walter White (Bryan Cranston), an underpaid, dispirited high-school chemistry teacher struggling with a recent diagnosis of stage-three lung cancer. White turns to a life of crime and partners with a former student, Jesse Pinkman (Aaron Paul), to produce and distribute methamphetamine to secure his family's financial future before he dies, while navigating the dangers of the criminal underworld.",
        score:"9.5",
        seasonNumber:5,
        episodeNumber:62,
        forAge:18,
        seriesData:[
          {
            id: 1,
            name: 'Season 1',
            episodes: [
              { id: 1,img:"../images/BreakingBadEpisodeImages/Season1Episode1.jpg", name: 'Pilot' ,timeDuration:"58m"},
              { id: 2,img:"../images/BreakingBadEpisodeImages/Season1Episode2.jpg", name: "Cat's in the bag" ,timeDuration:"48m"},
              { id: 3,img:"../images/BreakingBadEpisodeImages/Season1Episode3.jpg", name: "...And the Bag's in the River" ,timeDuration:"48m"},
            ],
          },
          {
            id: 2,
            name: 'Season 2',
            episodes: [
              { id: 4, name: 'Episode 4' },
              { id: 5, name: 'Episode 5' },
              { id: 6, name: 'Episode 6' },
            ],
          },
          {
            id: 3,
            name: 'Season 3',
            episodes: [
              { id: 6, name: 'Episode 7' },
              { id: 7, name: 'Episode 8' },
              { id: 8, name: 'Episode 9' },
            ],
          },
        ]
    },
    {
        id:3,
        img:"./images/SeriesImages/prison-break_img.jpg",
        liked:false,
        isInWatchList:false,
        title:"Prison Break",
    },
    {
        id:4,
        img:"./images/SeriesImages/twd_img.jpg",
        liked:false,
        isInWatchList:false,
        title:"The Walking Dead",
    },
    {
        id:5,
        img:"./images/SeriesImages/dexter_img.jpg",
        liked:false,
        isInWatchList:false,
        title:"Dexter",
    },
]

export default SeriesData