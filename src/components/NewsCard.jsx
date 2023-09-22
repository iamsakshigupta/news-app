import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class NewsCard extends Component {
  articles = [
    {
      "source": {
        "id": "the-washington-post",
        "name": "The Washington Post"
      },
      "author": "Jeff Stein",
      "title": "Michigan Democrats urge Biden to beat Trump to UAW picket line - The Washington Post",
      "description": "The strike has posed a political puzzle for the president, who must figure out how far to go to stand with the UAW workers.",
      "url": "https://www.washingtonpost.com/business/2023/09/18/biden-uaw-strike-picket-line/",
      "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/M3G2YE5SADW2TFLY7HAWYIMAUM_size-normalized.jpg&w=1440",
      "publishedAt": "2023-09-19T00:24:34Z",
      "content": "Comment on this story\r\nComment\r\nPresident Biden is coming under increasing pressure from some Democratic lawmakers to do something none of his predecessors appear to have done in office: join strikin… [+7891 chars]"
    },
    {
      "source": {
        "id": "cnn",
        "name": "CNN"
      },
      "author": "Jennifer Hansler, Mostafa Salem, Becky Anderson, Rob Picheta",
      "title": "Five Americans released from Iranian detention are en route to the US - CNN",
      "description": "Five Americans freed from Iranian detention on Monday are on their way back to the United States after initially stopping in Doha, Qatar, according to a US official and a source familiar with the matter.",
      "url": "https://www.cnn.com/2023/09/18/politics/iran-us-prisoner-release-intl/index.html",
      "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230918110557-04-iran-prisoner-release-doha.jpg?c=16x9&q=w_800,c_fill",
      "publishedAt": "2023-09-19T00:24:00Z",
      "content": "Five Americans freed from Iranian detention on Monday are on their way back to the United States after initially stopping in Doha, Qatar, according to a US official and a source familiar with the mat… [+10716 chars]"
    },

    {
      "source": {
        "id": null,
        "name": "The Athletic"
      },
      "author": "Nicole Auerbach and Chris Vannini",
      "title": "Michigan State notifies Mel Tucker of intent to fire him for cause - The Athletic",
      "description": "The news comes amid Michigan State's investigation into sexual harassment allegations against the football coach.",
      "url": "https://theathletic.com/4875239/2023/09/18/michigan-state-mel-tucker-end-contract/",
      "urlToImage": "https://cdn.theathletic.com/app/uploads/2023/09/18155554/mel-tucker-scaled.jpg",
      "publishedAt": "2023-09-18T23:13:38Z",
      "content": "Content warning: This story addresses allegations of sexual harassment and may be difficult to read and emotionally upsetting.\r\nMichigan State has provided Mel Tucker with written notice of intent to… [+7539 chars]"
    },
    {
      "source": {
        "id": "the-washington-post",
        "name": "The Washington Post"
      },
      "author": "Amanda Coletta",
      "title": "Trudeau says 'credible allegations' India killed Hardeep Singh Nijjar - The Washington Post - The Washington Post",
      "description": "Prime Minister Justin Trudeau told Parliament he has expressed his “deep concerns” about the killing of Hardeep Singh Nijjar to Indian Prime Minister Narendra Modi.",
      "url": "https://www.washingtonpost.com/world/2023/09/18/hardeep-singh-nijjar-canada-india/",
      "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://d1i4t8bqe7zgj6.cloudfront.net/09-18-2023/t_6194bb2fc566427eb83f1a13d31c19f1_name_Sequence_04_02_15_43_26_Still034.jpg&w=1440",
      "publishedAt": "2023-09-18T23:08:00Z",
      "content": "Comment on this story\r\nComment\r\nTORONTO Canadian authoritiesare pursuing credible allegations of links connecting agents of the Indian government to the slaying of a prominent Sikh leader on Canadian… [+7362 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "NewOrleansSaints.com"
      },
      "author": null,
      "title": "Inactives for New Orleans Saints, Carolina Panthers game | 2023 NFL Week 2 - NewOrleansSaints.com",
      "description": "Rookie running back Kendre Miller headlines list of inactive players",
      "url": "https://www.neworleanssaints.com/news/new-orleans-saints-inactives-carolina-panthers-2023-nfl-week-2",
      "urlToImage": "https://static.clubs.nfl.com/image/private/t_editorial_landscape_12_desktop/saints/peaqbyhqeceayummjgcx",
      "publishedAt": "2023-09-18T21:46:25Z",
      "content": "New Orleans Saints inactives for Monday's game vs. the Carolina Panthers:\r\nReceiver Lynn BowdenReceiver A.T. PerryRunning back Kendre MillerReceiver Kirk MerrittGuard Nick SaldiveriDefensive end Kyle… [+139 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "CBS Sports"
      },
      "author": null,
      "title": "Monday Night Football props, odds, bets, AI predictions, Panthers vs. Saints and Steelers vs. Browns picks - CBS Sports",
      "description": "SportsLine AI reveals the top NFL prop picks and Monday Night Football best bets for Panthers vs. Saints and Steelers vs. Browns",
      "url": "https://www.cbssports.com/nfl/news/monday-night-football-props-odds-bets-ai-predictions-panthers-vs-saints-and-steelers-vs-browns-picks/",
      "urlToImage": "https://sportshub.cbsistatic.com/i/r/2023/08/12/5bd879e9-5c7d-46da-ada5-0378b94e504c/thumbnail/1200x675/deffabc50bb6830e2f26832c0a6ad7b6/derek-carr-new-orleans-saints-usatsi.jpg",
      "publishedAt": "2023-09-18T21:20:26Z",
      "content": "Two Monday Night Football games will wrap up the Week 2 NFL schedule as Saints vs. Panthers kicks at 7:15 p.m. ET and Steelers vs. Browns gets underway at 8:15 p.m. ET. The Week 2 NFL odds from Sport… [+3458 chars]"
    },
    {
      "source": {
        "id": "fox-sports",
        "name": "Fox Sports"
      },
      "author": null,
      "title": "Patrick Mahomes, Chiefs reportedly agree to record contract restructure - FOX Sports",
      "description": "Patrick Mahomes and the Chiefs have reportedly agreed to a restructured contract that will pay him $210 million over the next four seasons.",
      "url": "https://www.foxsports.com/stories/nfl/patrick-mahomes-chiefs-reportedly-agree-to-record-contract-restructure",
      "urlToImage": "https://a57.foxsports.com/statics.foxsports.com/www.foxsports.com/content/uploads/2023/05/1408/814/mahomes-wide.jpg?ve=1&tl=1",
      "publishedAt": "2023-09-18T21:12:16Z",
      "content": "Patrick Mahomes received a generous (and well-deserved) present the day following his 28th birthday.\r\nThe two-time MVP agreed to a restructured deal with the Kansas City Chiefs that will bring the av… [+4219 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "New York Post"
      },
      "author": "Marc Lallanilla",
      "title": "Take these crucial steps to avoid the coming 'tripledemic': CDC - New York Post ",
      "description": "Winter is coming.",
      "url": "https://nypost.com/2023/09/18/how-to-avoid-the-coming-tripledemic-according-to-the-cdc/",
      "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2023/09/cdc-warning.gif?w=1024",
      "publishedAt": "2023-09-18T21:00:00Z",
      "content": "A triple punch of COVID-19, respiratory syncytial virus (RSV) and the seasonal flu is headed our way, according to the Centers for Disease Control and Prevention  and it could overwhelm hospitals and… [+3777 chars]"
    },
    {
      "source": {
        "id": "the-washington-post",
        "name": "The Washington Post"
      },
      "author": "Nick Anderson",
      "title": "After U.S. News college ranking changes, many public universities rose on lists - The Washington Post",
      "description": "The annual U.S. News & World Report college and university rankings, released Monday, used a new methodology.",
      "url": "https://www.washingtonpost.com/education/2023/09/18/us-news-college-rankings-methodology-changes/",
      "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/3UZEKE7HEJDBTJPM4JQ3CSMPXM.JPG&w=1440",
      "publishedAt": "2023-09-18T20:13:00Z",
      "content": "Comment on this story\r\nComment\r\nMany public universities rose in the undergraduate rankings U.S. News &amp; World Report released Monday, while many private ones fell a sign not of their changing qua… [+4555 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "CNBC"
      },
      "author": "Emma Kinery",
      "title": "Biden to push for Ukraine aid, democracy as China and Russia skip UN General Assembly - CNBC",
      "description": "President Joe Biden will address the United Nations General Assembly on Tuesday, where he plans to promote democracy and advocate for increased Ukraine aid.",
      "url": "https://www.cnbc.com/2023/09/18/biden-to-push-for-ukraine-aid-democracy-as-china-and-russia-skip-un.html",
      "urlToImage": "https://image.cnbcfm.com/api/v1/image/107294106-1693425707245-gettyimages-1634692350-AFP_33U32J4.jpeg?v=1695066995&w=1920&h=1080",
      "publishedAt": "2023-09-18T19:56:35Z",
      "content": "U.S. Defense Secretary Lloyd Austin (L) and U.S. Homeland Security Secretary Alejandro Mayorkas (R) look on as President Joe Biden speaks about the government response and recovery efforts in Maui, H… [+4506 chars]"
    },
    {
      "source": {
        "id": "abc-news",
        "name": "ABC News"
      },
      "author": "Luke Barr",
      "title": "Clorox warns cyberattack could lead to product delays, shortages - ABC News",
      "description": "The cyberattack on Aug. 14 damaged portions of the company's IT infrastructure.",
      "url": "https://abcnews.go.com/Politics/clorox-warns-cyberattack-lead-product-delays-shortages/story?id=103283064",
      "urlToImage": "https://i.abcnewsfe.com/a/85ade70a-8ba1-4a7a-8d70-120e227c46db/clorox-ap-jef-230918_1695057128951_hpMain_16x9.jpg?w=992",
      "publishedAt": "2023-09-18T19:47:22Z",
      "content": "An August cyberattack on Clorox caused \"wide-scale disruptions\" in its operations, which could mean product delays and shortages, according to a securities filing Monday.\r\nThe Clorox Company, known f… [+1877 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "DW (English)"
      },
      "author": "Deutsche Welle",
      "title": "Libya flooding: Land mines pose new threat, death toll rises - DW (English)",
      "description": "Many people in Libya have been left without fresh drinking water since the floods contaminated sources, but there's a new danger if they travel to get water: land mines displaced by strong currents.",
      "url": "https://www.dw.com/en/libya-flooding-land-mines-pose-new-threat-death-toll-rises/a-66837101",
      "urlToImage": "https://static.dw.com/image/66837349_6.jpg",
      "publishedAt": "2023-09-18T19:38:06Z",
      "content": "Residents who survived the devastating flooding in the eastern coastal Libyan city of Derna were faced with the threat of displaced land mines in surrounding areas on Sunday.\r\nResidents said they had… [+3760 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "CNBC"
      },
      "author": "Drew Richardson",
      "title": "Writers union will resume strike negotiations with studios this week - CNBC",
      "description": "The WGA and the AMPTP will start talking again. Dual writers and actors strikes have shut down Hollywood.",
      "url": "https://www.cnbc.com/2023/09/18/wga-strike-negotiations-resume-this-week.html",
      "urlToImage": "https://image.cnbcfm.com/api/v1/image/107271342-1689273827966-gettyimages-1540551447-0f5a4229_qtdfcmq3.jpeg?v=1695065743&w=1920&h=1080",
      "publishedAt": "2023-09-18T19:35:43Z",
      "content": "The Writers Guild of America said Monday that the union will resume negotiations with Hollywood studios on Wednesday as a shutdown of productions across the TV and movie business drags on.\r\nThe annou… [+3260 chars]"
    },
    {
      "source": {
        "id": "usa-today",
        "name": "USA Today"
      },
      "author": "Doyle Rice",
      "title": "Hurricane Nigel spins in Atlantic, forecast to become a major storm - USA TODAY",
      "description": "The busy 2023 Atlantic hurricane season shows no signs of letting up. Far out in the open Atlantic, Hurricane Nigel continued to spin Monday.",
      "url": "https://www.usatoday.com/story/news/weather/2023/09/18/hurricane-nigel-atlantic-path/70892280007/",
      "urlToImage": "https://www.usatoday.com/gcdn/authoring/authoring-images/2023/09/18/USAT/70893614007-nigelconesept-18.png?crop=895,507,x0,y51&width=895&height=507&format=pjpg&auto=webp",
      "publishedAt": "2023-09-18T18:57:23Z",
      "content": "The busy 2023 Atlantic hurricane season shows no signs of letting up.\r\nFar out in the open Atlantic Ocean, about 1,500 miles from the East Coast, Hurricane Nigel continued to spin Monday evening. It'… [+3646 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Phys.Org"
      },
      "author": "Science X",
      "title": "NASA's Curiosity rover reaches Mars ridge where water left debris pileup - Phys.org",
      "description": "Three billion years ago, amid one of the last wet periods on Mars, powerful debris flows carried mud and boulders down the side of a hulking mountain. The debris spread into a fan that was later eroded by wind into a towering ridge, preserving an intriguing r…",
      "url": "https://phys.org/news/2023-09-nasa-curiosity-rover-mars-ridge.html",
      "urlToImage": "https://scx2.b-cdn.net/gfx/news/2023/nasas-curiosity-reache.jpg",
      "publishedAt": "2023-09-18T18:10:13Z",
      "content": "Three billion years ago, amid one of the last wet periods on Mars, powerful debris flows carried mud and boulders down the side of a hulking mountain. The debris spread into a fan that was later erod… [+3888 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "CNBC"
      },
      "author": "Michael Wayland",
      "title": "Stellantis could close 18 facilities under UAW deal — here are the full details of its latest offer - CNBC",
      "description": "The company made the latest offer Thursday, before the start of targeted strikes by the United Auto Workers Union against Stellantis, Ford and GM.",
      "url": "https://www.cnbc.com/2023/09/18/uaw-strike-stellantis-could-close-18-facilities-under-deal.html",
      "urlToImage": "https://image.cnbcfm.com/api/v1/image/107301949-1694908758398-gettyimages-1668659646-DET1253.jpeg?v=1695060955&w=1920&h=1080",
      "publishedAt": "2023-09-18T18:05:40Z",
      "content": "United Auto Workers members attend a solidarity rally as the UAW strikes the Big Three automakers on September 15, 2023 in Detroit, Michigan.\r\nDETROIT The most recent contract proposal by automaker S… [+7743 chars]"
    },
    {
      "source": {
        "id": "engadget",
        "name": "Engadget"
      },
      "author": "Will Shanklin",
      "title": "Panos Panay is reportedly heading to Amazon after leaving Microsoft - Engadget",
      "description": "It didn’t take long to learn Panos Panay’s new home. The industry veteran, instrumental in developing Windows 11 and the Microsoft Surface line of 2-in-1s...",
      "url": "https://www.engadget.com/panos-panay-is-reportedly-heading-to-amazon-after-leaving-microsoft-175017471.html",
      "urlToImage": "https://s.yimg.com/ny/api/res/1.2/oHKE92ufLnffTf5X.S68qw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://s.yimg.com/os/creatr-uploaded-images/2023-09/4c5c9a90-564a-11ee-9f9f-a25bf8538aec",
      "publishedAt": "2023-09-18T17:50:18Z",
      "content": "It didnt take long to learn Panos Panays new home. The industry veteran, instrumental in developing Windows 11 and the Microsoft Surface line of 2-in-1s and laptops, has reportedly been hired by Amaz… [+1090 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Space.com"
      },
      "author": "Tariq Malik",
      "title": "NASA's OSIRIS-REx asteroid sample return to Earth: Live updates - Space.com",
      "description": "OSIRIS-REx's asteroid-sample return capsule will land in Utah on Sept. 23 at around 10 a.m. EDT (1400 GMT). Here's the latest.",
      "url": "https://www.space.com/news/live/nasa-osiris-rex-asteroid-bennu-sample-return-updates",
      "urlToImage": "https://cdn.mos.cms.futurecdn.net/6nwyzQE8Sneef6TjTQV6VL-1200-80.jpg",
      "publishedAt": "2023-09-18T17:39:14Z",
      "content": "2023-09-17T14:19:20.833ZOSIRIS-REx 1 week from asteroid sample return\r\nThis NASA diagram shows how the OSIRIS-REx capsule will return to Earth on Sept. 24 over the course of 4 hours. (Image credit: N… [+2983 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Vulture"
      },
      "author": "Zoe Guy",
      "title": "Taylor Swift's 'Blank Space' Referenced in Travis Kelce Game - Vulture",
      "description": "A CBS announcer referenced Taylor Swift’s song “Blank Space” after Kansas City Chiefs tight end Travis Kelce scored a touchdown. Swift and Kelce are currently embroiled in dating rumors.",
      "url": "http://www.vulture.com/2023/09/taylor-swift-travis-kelce-dating-rumors.html",
      "urlToImage": "https://pyxis.nymag.com/v1/imgs/0da/4e8/449c03aa8288147f7d08d1c1cc090cb55a-kelce-swift.1x.rsocial.w1200.jpg",
      "publishedAt": "2023-09-18T17:30:36Z",
      "content": "The Taylor Swift and Travis Kelce dating rumors are coming from inside the house. In a Sunday night football game on September 17, the Kansas City Chiefs tight end scored a touchdown in the teams win… [+1043 chars]"
    }

  ]
  constructor() {
    super();
    console.log("I am a constructor from News component")
    this.state = {
      articles: this.articles,
      loading: false,
      page: 1,
    }
  }
  async componentDidMount() {
    let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=9796962f8b0f43398523fd4a4b557f70&page=1&pageSize=20";
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData);
    this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults })

  }
  handlePrevClick = async () => {
    console.log("previous");
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=9796962f8b0f43398523fd4a4b557f70&page=${this.state.page - 1}&pageSize=20`;
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData);
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles
    })
  }
  handleNextClick = async () => {
    console.log("next");
    if(this.state.page + 1> Math.ceil(this.state.totalResults/20)){

    }
    else{
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=9796962f8b0f43398523fd4a4b557f70&page=${this.state.page + 1}&pageSize=20`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      page: this.state.page + 1,
      articles: parsedData.articles
    });
  }
  }


  render() {
    return (
      <div>
        {/*API Key 9796962f8b0f43398523fd4a4b557f70 */}
        <div className='max-w-7xl px-4 mx-auto py-5 flex flex-col'>
          <h2 className='font-bold dark:text-white text-2xl'>Top Headlines</h2>
          <div className='flex flex-wrap my-7'>
            {/* tittle={element.title.length >= 45 ? element.title.slice(0, 45) : element.title} discription={element.description.length >= 60 ? element.description.slice(0, 60) : element.description} */}
            {this.state.articles.map((element) => {
              const truncateText = (text, maxWords) => {
                const words = text.split(' ');
                if (words.length > maxWords) {
                  return words.slice(0, maxWords).join(' ') + '...';
                }
                return text;
              };

              // Truncate the title to 5 words and the description to 10 words
              const truncatedTitle = truncateText(element.title, 5);
              // const truncatedDescription = truncateText(element.description, 3);
              return (
                <div className='w-full sm:w-full md:w-1/2 lg:w-1/3 xl:w-1/3 px-2 mb-4' key={element.url}>
                  <NewsItem title={truncatedTitle} imageUrl={element.urlToImage} newsUrl={element.url} />
                </div>
              );
            })}




          </div>
          <div className='text-center my-10'>
            <button
              disabled={this.state.page <= 1}
              className={`px-5 py-2 mx-2 ${this.state.page <= 1 ? 'bg-gray-300 text-gray-500' : 'bg-red-500 text-white hover:bg-red-700'} rounded-lg`}
              onClick={this.handlePrevClick}
            >
              &larr; Previous
            </button>


            <button className={`px-5 py-2 mx-2 ${this.state.page + 1> Math.ceil(this.state.totalResults/20) ? 'bg-gray-300 text-gray-500' : 'bg-red-500 text-white hover:bg-red-700'} rounded-lg`} onClick={this.handleNextClick}>
              Next &rarr;
            </button>
          </div>



        </div>




      </div >

    )
  }
}

export default NewsCard