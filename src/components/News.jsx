import { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";

export class News extends Component {
  // articles = [
  //   {
  //     source: {
  //       id: "wired",
  //       name: "Wired",
  //     },
  //     author: "Jessica Klein",
  //     title: "Bitcoin Bros Go Wild for Donald Trump",
  //     description:
  //       "At Bitcoin 2024 conference in Nashville, Trump is finally telling crypto enthusiasts what they want to hear.",
  //     url: "https://www.wired.com/story/bitcoin-bros-go-wild-for-donald-trump/",
  //     urlToImage:
  //       "https://media.wired.com/photos/66a56f21bf2909f08a634953/191:100/w_1280,c_limit/Crypto-Bros-Business-2162975355.jpg",
  //     publishedAt: "2024-07-28T12:43:07Z",
  //     content:
  //       "Trumps speech is an hour behind. A half hour into the wait, restless attendees start chanting Trump. The woman sitting in front of me murmurs her own chant:\r\nBitcoin, bitcointhats what they should be… [+3147 chars]",
  //   },
  //   {
  //     source: {
  //       id: "wired",
  //       name: "Wired",
  //     },
  //     author: "Joel Khalili",
  //     title:
  //       "Craig Wright Faces Perjury Investigation Over Claims He Created Bitcoin",
  //     description:
  //       "By order of a UK judge, Craig Wright can no longer claim he is the creator of bitcoin and now faces the prospect of criminal charges.",
  //     url: "https://www.wired.com/story/craig-wright-perjury-bitcoin-trial/",
  //     urlToImage:
  //       "https://media.wired.com/photos/6696630a5d2d61e4805c3175/191:100/w_1280,c_limit/GettyImages-1979197796.jpg",
  //     publishedAt: "2024-07-16T12:58:12Z",
  //     content:
  //       "A judge in the UK High Court has directed prosecutors to consider bringing criminal charges against computer scientist Craig Wright, after ruling that he lied extensively and repeatedly and committed… [+2851 chars]",
  //   },
  //   {
  //     source: {
  //       id: "wired",
  //       name: "Wired",
  //     },
  //     author: "Steven Levy",
  //     title: "Trump's Crypto Embrace Could Be a Disaster for Bitcoin",
  //     description:
  //       "At the Bitcoin 2024 conference in Nashville, Donald Trump promised the crypto community the moon. They'd better hope they don't get it.",
  //     url: "https://www.wired.com/story/donald-trump-bitcoin-reserve-promises/",
  //     urlToImage:
  //       "https://media.wired.com/photos/66ab594d0c0cc4819f595db4/191:100/w_1280,c_limit/073024_Crypto%20get%20rich%20quick.jpg",
  //     publishedAt: "2024-08-02T13:00:00Z",
  //     content:
  //       "Donald Trump is an unlikely crypto ally. The power of bitcoin, embodied in Satoshi Nakamotos founding document, is that it frees participants from murky assessments of trust, instead relying on the b… [+4248 chars]",
  //   },
  //   {
  //     source: {
  //       id: "wired",
  //       name: "Wired",
  //     },
  //     author: "Joel Khalili",
  //     title: "A Tiny Texas Village Is About To Annex a Gigantic Bitcoin Mine",
  //     description:
  //       "In a roundabout bid to win public opinion (and a juicy tax abatement,) Riot Platforms is preparing for its prized bitcoin mine to be annexed by a miniscule village in rural Texas.",
  //     url: "https://www.wired.com/story/a-tiny-texas-hamlet-is-about-to-annex-an-industrial-scale-bitcoin-mine/",
  //     urlToImage:
  //       "https://media.wired.com/photos/66958525a54303f24cdd6052/191:100/w_1280,c_limit/Texas-Annex-Bitcoin-Business-1288216977.jpg",
  //     publishedAt: "2024-07-16T11:30:00Z",
  //     content:
  //       "In Oak Valley, a sleepy village in rural Navarro County, Texas, there is very little of anything. A potholed track runs through its two square miles of sun-beaten grassland, past a modest prefab comm… [+3234 chars]",
  //   },
  //   {
  //     source: {
  //       id: null,
  //       name: "Gizmodo.com",
  //     },
  //     author: "Harri Weber",
  //     title:
  //       "Trump Promises to Make U.S. the ‘Crypto Capital of the Planet and the Bitcoin Superpower’",
  //     description:
  //       'The former president drew cheers at the 2024 Bitcoin Conference after saying he\'ll "fire" Biden-nominated SEC Chair Gary Gensler.',
  //     url: "https://gizmodo.com/trump-promises-to-make-u-s-the-crypto-capital-of-the-planet-and-the-bitcoin-superpower-2000480037",
  //     urlToImage:
  //       "https://gizmodo.com/app/uploads/2024/07/Screenshot-2024-07-27-at-1.02.37 PM.jpg",
  //     publishedAt: "2024-07-27T20:59:48Z",
  //     content:
  //       "Speaking to a crowd of supporters at the Bitcoin 2024 Conference in Nashville, Tennessee, former president and Republican nominee Donald Trump said he would make the U.S. the “crypto capital of the p… [+2326 chars]",
  //   },
  //   {
  //     source: {
  //       id: null,
  //       name: "Slashdot.org",
  //     },
  //     author: "Slashdot Staff",
  //     title:
  //       "RFK Jr. Says He'd Direct the Government to Buy $615 Billion in Bitcoin or 4 Million Bitcoins",
  //     description:
  //       "US presidential candidate, Robert F. Kennedy Jr., announced during his keynote Friday at the Bitcoin Conference that he would direct the US government to buy Bitcoin until the size of its Bitcoin reserves matched its gold reserves. At current prices, that equ…",
  //     url: "https://news.slashdot.org/story/24/07/26/239214/rfk-jr-says-hed-direct-the-government-to-buy-615-billion-in-bitcoin-or-4-million-bitcoins",
  //     urlToImage: "https://a.fsdn.com/sd/topics/bitcoin_64.png",
  //     publishedAt: "2024-07-26T23:03:00Z",
  //     content:
  //       '... a position of dominance that no other country will be able to usurp.\r\nWhy and who cares? Trading money for a different kind of money give us "dominance"? What part of your brain did that worm eat… [+237 chars]',
  //   },
  //   {
  //     source: {
  //       id: null,
  //       name: "Gizmodo.com",
  //     },
  //     author: "Passant Rabie",
  //     title: "Crypto Bro Charters Private SpaceX Mission to Earth’s Poles",
  //     description:
  //       "Fram2 could fly as early as this year, marking SpaceX's seventh private crew of astronauts.",
  //     url: "https://gizmodo.com/crypto-bro-charters-private-spacex-mission-to-earths-poles-2000486329",
  //     urlToImage:
  //       "https://gizmodo.com/app/uploads/2024/08/SpaceX-Private-Mission.jpeg",
  //     publishedAt: "2024-08-13T16:05:37Z",
  //     content:
  //       "A private crew of astronauts that includes a cinematographer and an explorer, and commanded by a wealthy bitcoin entrepreneur, will be the first human spaceflight to go over Earth’s polar region.\r\nSp… [+2136 chars]",
  //   },
  //   {
  //     source: {
  //       id: null,
  //       name: "ReadWrite",
  //     },
  //     author: "Radek Zielinski",
  //     title: "Bitcoin surges following assassination attempt on Donald Trump",
  //     description:
  //       "Bitcoin prices soared to a two-week high today, following yesterday’s shocking assassination attempt on former U.S. President and current presidential… Continue reading Bitcoin surges following assassination attempt on Donald Trump\nThe post Bitcoin surges fol…",
  //     url: "https://readwrite.com/bitcoin-surges-following-assassination-attempt-on-donald-trump/",
  //     urlToImage:
  //       "https://readwrite.com/wp-content/uploads/2024/07/2bb1a973-11da-468d-8abf-565b859ed06a.webp",
  //     publishedAt: "2024-07-15T14:10:28Z",
  //     content:
  //       "Bitcoin prices soared to a two-week high today, following yesterday’s shocking assassination attempt on former U.S. President and current presidential candidate Donald Trump.\r\nThe incident, which occ… [+2130 chars]",
  //   },
  //   {
  //     source: {
  //       id: null,
  //       name: "ReadWrite",
  //     },
  //     author: "Radek Zielinski",
  //     title: "Jersey City Pension Fund to Invest in Bitcoin ETFs",
  //     description:
  //       "Jersey City Mayor Steven Fulop announced on Thursday that the city’s municipal pension plan will soon invest in Bitcoin (BTC)… Continue reading Jersey City Pension Fund to Invest in Bitcoin ETFs\nThe post Jersey City Pension Fund to Invest in Bitcoin ETFs appe…",
  //     url: "https://readwrite.com/jersey-city-pension-fund-to-invest-in-bitcoin-etfs/",
  //     urlToImage:
  //       "https://readwrite.com/wp-content/uploads/2024/07/bd71c2e9-e4c9-4897-bc5e-1ccff22dc577.webp",
  //     publishedAt: "2024-07-26T15:14:38Z",
  //     content:
  //       "Jersey City Mayor Steven Fulop announced on Thursday that the city’s municipal pension plan will soon invest in Bitcoin (BTC) through exchange-traded funds (ETFs).\r\nNot my normal subject matter in a … [+2136 chars]",
  //   },
  //   {
  //     source: {
  //       id: null,
  //       name: "ReadWrite",
  //     },
  //     author: "Radek Zielinski",
  //     title:
  //       "Crypto asset firm Grayscale has lost $20 billion in Bitcoin and Ethereum ETFs",
  //     description:
  //       "Leading crypto-specific asset manager Grayscale Investments has lost over $20.4 billion through outflows from its Bitcoin (BTC) and Ethereum (ETH)… Continue reading Crypto asset firm Grayscale has lost $20 billion in Bitcoin and Ethereum ETFs\nThe post Crypto …",
  //     url: "https://readwrite.com/grayscale-bitcoin-ethereum-etf-losses-20-billion/",
  //     urlToImage:
  //       "https://readwrite.com/wp-content/uploads/2024/07/6f232dbd-27a0-45f2-87c6-639075c6ef40.webp",
  //     publishedAt: "2024-07-30T20:41:13Z",
  //     content:
  //       "Leading crypto-specific asset manager Grayscale Investments has lost over $20.4 billion through outflows from its Bitcoin (BTC) and Ethereum (ETH) exchange-traded funds (ETFs).\r\nAccording to data gat… [+2456 chars]",
  //   },
  //   {
  //     source: {
  //       id: null,
  //       name: "ReadWrite",
  //     },
  //     author: "Radek Zielinski",
  //     title:
  //       "US strategic Bitcoin reserve to be financed by revaluing Fed’s gold",
  //     description:
  //       "United States’ strategic Bitcoin (BTC) reserve would be partly financed by revaluing gold certificates held by the Federal Reserve System,… Continue reading US strategic Bitcoin reserve to be financed by revaluing Fed’s gold\nThe post US strategic Bitcoin rese…",
  //     url: "https://readwrite.com/us-strategic-bitcoin-reserve-to-be-financed-by-fed-gold/",
  //     urlToImage:
  //       "https://readwrite.com/wp-content/uploads/2024/07/b39a34b3-1c6a-47b1-ade2-fb55f8ae2510.webp",
  //     publishedAt: "2024-07-31T14:22:25Z",
  //     content:
  //       "United States’ strategic Bitcoin (BTC) reserve would be partly financed by revaluing gold certificates held by the Federal Reserve System, draft legislation shows.\r\nAccording to a July 30 Coindesk re… [+2038 chars]",
  //   },
  //   {
  //     source: {
  //       id: null,
  //       name: "ReadWrite",
  //     },
  //     author: "Radek Zielinski",
  //     title:
  //       "Mt. Gox moves nearly $2.7 billion in bitcoin, signaling anticipated payouts",
  //     description:
  //       "On Tuesday, a significant Bitcoin (BTC) movement occurred from addresses associated with Mt. Gox, the defunct cryptocurrency exchange. At 8:12… Continue reading Mt. Gox moves nearly $2.7 billion in bitcoin, signaling anticipated payouts\nThe post Mt. Gox moves…",
  //     url: "https://readwrite.com/mt-gox-bitcoin-payments-address-kraken-distributions/",
  //     urlToImage:
  //       "https://readwrite.com/wp-content/uploads/2024/07/20b483a8-0d32-421a-93f8-3d2ce080557d.webp",
  //     publishedAt: "2024-07-16T21:12:27Z",
  //     content:
  //       "On Tuesday, a significant Bitcoin (BTC) movement occurred from addresses associated with Mt. Gox, the defunct cryptocurrency exchange.\r\nAt 8:12 a.m. UTC, over 48,641 BTC (valued at $3.1 billion) was … [+2028 chars]",
  //   },
  //   {
  //     source: {
  //       id: null,
  //       name: "ReadWrite",
  //     },
  //     author: "Radek Zielinski",
  //     title: "Bitcoin surges past $68,000 amid continued ETF inflows",
  //     description:
  //       "Bitcoin (BTC) breached the $68,000 resistance level during Sunday night trading in Eastern Standard Time, continuing its upward trajectory. According… Continue reading Bitcoin surges past $68,000 amid continued ETF inflows\nThe post Bitcoin surges past $68,000…",
  //     url: "https://readwrite.com/bitcoin-surges-past-68000-amid-continued-etf-inflows/",
  //     urlToImage:
  //       "https://readwrite.com/wp-content/uploads/2024/07/e009442e-4fcb-42c5-a9a5-d29a19a4fce0.webp",
  //     publishedAt: "2024-07-22T14:07:42Z",
  //     content:
  //       "Bitcoin (BTC) breached the $68,000 resistance level during Sunday night trading in Eastern Standard Time, continuing its upward trajectory.\r\nAccording to CoinMarketCap data, the leading cryptocurrenc… [+2189 chars]",
  //   },
  //   {
  //     source: {
  //       id: null,
  //       name: "Slashdot.org",
  //     },
  //     author: "msmash",
  //     title: "Bitcoin is Legit, BlackRock's Larry Fink Says",
  //     description:
  //       "Speaking of crypto, BlackRock's co-founder and CEO Larry Fink is now embracing crypto more than ever. From a report: In an interview with CNBC on Monday, he mentioned that he had abandoned his initial skepticism of cryptocurrencies like Bitcoin. He now firmly…",
  //     url: "https://tech.slashdot.org/story/24/07/16/1712202/bitcoin-is-legit-blackrocks-larry-fink-says",
  //     urlToImage: "https://a.fsdn.com/sd/topics/bitcoin_64.png",
  //     publishedAt: "2024-07-16T17:25:00Z",
  //     content:
  //       "In an interview with CNBC on Monday, he mentioned that he had abandoned his initial skepticism of cryptocurrencies like Bitcoin. He now firmly believes that there is a place for crypto in the average… [+445 chars]",
  //   },
  //   {
  //     source: {
  //       id: null,
  //       name: "ReadWrite",
  //     },
  //     author: "Radek Zielinski",
  //     title: "Long-dormant Bitcoin wallet awakens, moves $60M",
  //     description:
  //       "On Sunday, a Bitcoin wallet that had been inactive for nearly 12 years suddenly sprang to life, transferring 1,000 BTC… Continue reading Long-dormant Bitcoin wallet awakens, moves $60M\nThe post Long-dormant Bitcoin wallet awakens, moves $60M appeared first on…",
  //     url: "https://readwrite.com/long-dormant-bitcoin-wallet-awakens-moves-60m/",
  //     urlToImage:
  //       "https://readwrite.com/wp-content/uploads/2024/07/aec45341-fd4a-4fc8-8055-10737a321717.webp",
  //     publishedAt: "2024-07-15T14:18:34Z",
  //     content:
  //       "On Sunday, a Bitcoin wallet that had been inactive for nearly 12 years suddenly sprang to life, transferring 1,000 BTC (worth over $60 million) to a new address. This movement detected by blockchain … [+2717 chars]",
  //   },
  //   {
  //     source: {
  //       id: null,
  //       name: "ReadWrite",
  //     },
  //     author: "Radek Zielinski",
  //     title: "Mt. Gox Moves Another $2.5B of Bitcoin",
  //     description:
  //       "Mt. Gox, the defunct cryptocurrency exchange, has transferred 37,477 Bitcoin (BTC), valued at approximately $2.5 billion, to an unidentified wallet… Continue reading Mt. Gox Moves Another $2.5B of Bitcoin\nThe post Mt. Gox Moves Another $2.5B of Bitcoin appear…",
  //     url: "https://readwrite.com/mt-gox-bitcoin-wallet-billion/",
  //     urlToImage:
  //       "https://readwrite.com/wp-content/uploads/2024/07/2e61124b-41ff-4d14-8c83-214fbd93c644.webp",
  //     publishedAt: "2024-07-25T03:21:08Z",
  //     content:
  //       "Chat history ChatGPT ChatGPT Explore GPTs Today Mt. Gox Bitcoin Transfer CrowdStrike Apology Backlash SEC Approves Ethereum ETFs Previous 7 Days Xbox 360 Marketplace Discounts College Football 25 Rev… [+6118 chars]",
  //   },
  //   {
  //     source: {
  //       id: null,
  //       name: "ReadWrite",
  //     },
  //     author: "Radek Zielinski",
  //     title: "Donald Trump raises $25M during Bitcoin 2024 conference",
  //     description:
  //       "Republican presidential candidate Donald Trump raised $25 million during the The Bitcoin 2024 conference. Fox Business reporter Eleanor Terrett announced that… Continue reading Donald Trump raises $25M during Bitcoin 2024 conference\nThe post Donald Trump rais…",
  //     url: "https://readwrite.com/donald-trump-raises-25m-during-bitcoin-2024-conference/",
  //     urlToImage:
  //       "https://readwrite.com/wp-content/uploads/2024/07/21a7fe68-8fbd-44c2-8955-162a8d23f326.webp",
  //     publishedAt: "2024-07-31T11:57:00Z",
  //     content:
  //       "Republican presidential candidate Donald Trump raised $25 million during the The Bitcoin 2024 conference.\r\nFox Business reporter Eleanor Terrett announced that Trump raised an undisclosed amount of f… [+1883 chars]",
  //   },
  //   {
  //     source: {
  //       id: null,
  //       name: "ReadWrite",
  //     },
  //     author: "Radek Zielinski",
  //     title: "Trump fights for the crypto vote at Bitcoin conference",
  //     description:
  //       "At the Bitcoin 2024 conference in Nashville, Tennessee, former President Donald Trump delivered a keynote speech. Trump, the Republican presidential… Continue reading Trump fights for the crypto vote at Bitcoin conference\nThe post Trump fights for the crypto …",
  //     url: "https://readwrite.com/trump-crypto-bitcoin-conference/",
  //     urlToImage:
  //       "https://readwrite.com/wp-content/uploads/2024/07/8483c1b4-7ea2-47a9-a0b2-b50d58578a99.webp",
  //     publishedAt: "2024-07-29T16:21:50Z",
  //     content:
  //       "At the Bitcoin 2024 conference in Nashville, Tennessee, former President Donald Trump delivered a keynote speech.\r\nTrump, the Republican presidential candidate, used the platform to appeal to the tec… [+3450 chars]",
  //   },
  //   {
  //     source: {
  //       id: null,
  //       name: "ReadWrite",
  //     },
  //     author: "Radek Zielinski",
  //     title: "Bitcoin and wider crypto market tumbles as global stocks falter",
  //     description:
  //       "Bitcoin (BTC) experienced a sharp 3% decline at the onset of Asian trading, mirroring a broader downturn in stock markets… Continue reading Bitcoin and wider crypto market tumbles as global stocks falter\nThe post Bitcoin and wider crypto market tumbles as glo…",
  //     url: "https://readwrite.com/cryptocurrency-bitcoin-market-tumbles-as-global-stocks-falter/",
  //     urlToImage:
  //       "https://readwrite.com/wp-content/uploads/2024/07/7ef838ca-e7d5-4e5f-84b3-257b30922fcd.webp",
  //     publishedAt: "2024-07-25T16:24:02Z",
  //     content:
  //       "Bitcoin (BTC) experienced a sharp 3% decline at the onset of Asian trading, mirroring a broader downturn in stock markets and diminishing appetite for high-risk assets.\r\nThis follows Bitcoin surging … [+1904 chars]",
  //   },
  //   {
  //     source: {
  //       id: null,
  //       name: "ReadWrite",
  //     },
  //     author: "Alvin Hemedez",
  //     title:
  //       "Germany’s Bitcoin Sell-Off Could Propel These 3 Meme Coins to Big Gains",
  //     description:
  //       "As Germany approaches the end of its massive Bitcoin sell-off, the cryptocurrency market could be on the brink of one… Continue reading Germany’s Bitcoin Sell-Off Could Propel These 3 Meme Coins to Big Gains\nThe post Germany’s Bitcoin Sell-Off Could Propel Th…",
  //     url: "https://readwrite.com/germanys-bitcoin-sell-off-could-propel-these-3-meme-coins-to-big-gains/",
  //     urlToImage:
  //       "https://readwrite.com/wp-content/uploads/2024/07/germanys-bitcoin-sell-off-could-propel-these-3-meme-coins-to-big-gains.jpg",
  //     publishedAt: "2024-07-15T14:22:41Z",
  //     content:
  //       "As Germany approaches the end of its massive Bitcoin sell-off, the cryptocurrency market could be on the brink of one of its largest rallies ever, potentially driving significant gains for altcoins.\r… [+6609 chars]",
  //   },
  //   {
  //     source: {
  //       id: null,
  //       name: "Yahoo Entertainment",
  //     },
  //     author: "Yousra Anwar Ahmed",
  //     title:
  //       "Bitcoin Falls to $62K as Mt. Gox Transfers Over $6 Billion in Bitcoin, Signaling Major Repayment Activity",
  //     description:
  //       "Mt. Gox's $6 billion Bitcoin transfer triggers market reaction, dropping Bitcoin to $62.8K.",
  //     url: "https://finance.yahoo.com/news/bitcoin-falls-62k-mt-gox-091131501.html",
  //     urlToImage:
  //       "https://media.zenfs.com/en/coinmarketcap_783/6c7190cbda65d702d4b03882db7bb321",
  //     publishedAt: "2024-07-16T09:11:31Z",
  //     content:
  //       "Bitcoin Falls to $62K as Mt. Gox Transfers Over $6 Billion in Bitcoin, Signaling Major Repayment Activity\r\nMt. Gox just moved approximately $6 billion worth of Bitcoin to two different wallets within… [+1681 chars]",
  //   },
  //   {
  //     source: {
  //       id: null,
  //       name: "Gizmodo.com",
  //     },
  //     author: "Lucas Ropek",
  //     title:
  //       "This Could Be the Beginning of the End of Trump’s Love for Crypto Cash",
  //     description: "The Donald chose the wrong time to get into web3.",
  //     url: "https://gizmodo.com/this-could-be-the-beginning-of-the-end-of-trumps-love-for-crypto-cash-2000483266",
  //     urlToImage:
  //       "https://gizmodo.com/app/uploads/2024/08/Trump_makes_a_-weird_face_at_a_campaign_rally-.jpg",
  //     publishedAt: "2024-08-05T21:35:52Z",
  //     content:
  //       "Donald Trump’s honeymoon with the cryptocurrency industry may be over. At the very least, the campaign contributions in Dogecoin he received last month are probably a lot less valuable right now than… [+3766 chars]",
  //   },
  //   {
  //     source: {
  //       id: null,
  //       name: "Slashdot.org",
  //     },
  //     author: "msmash",
  //     title:
  //       "Craig Wright Faces Perjury Investigation Over Claims He Created Bitcoin",
  //     description:
  //       'A judge in the UK High Court has directed prosecutors to consider bringing criminal charges against computer scientist Craig Wright, after ruling that he lied "extensively and repeatedly" and committed forgery "on a grand scale" in service of his quest to pro…',
  //     url: "https://yro.slashdot.org/story/24/07/16/1649235/craig-wright-faces-perjury-investigation-over-claims-he-created-bitcoin",
  //     urlToImage: "https://a.fsdn.com/sd/topics/bitcoin_64.png",
  //     publishedAt: "2024-07-16T16:49:00Z",
  //     content:
  //       'In a judgment published Tuesday, Justice James Mellor outlined various injunctions to be imposed upon Wright, after finding in May that he had "engaged in the deliberate production of false documents… [+838 chars]',
  //   },
  //   {
  //     source: {
  //       id: null,
  //       name: "Slashdot.org",
  //     },
  //     author: "EditorDavid",
  //     title:
  //       "Edward Snowden Skeptical of Politicians at Bitcoin Conference - and Public Ledgers",
  //     description:
  //       "Former U.S. president Donald Trump spoke at Nashville's Bitcoin Conference on Saturday. \n\nBut he wasn't the only one there making headlines, according to a local newspaper called the Tennesseean:\n\nRepublican Sens. Cynthia Lummis and Tim Scott pledged their re…",
  //     url: "https://politics.slashdot.org/story/24/07/28/0447203/edward-snowden-skeptical-of-politicians-at-bitcoin-conference---and-public-ledgers",
  //     urlToImage: "https://a.fsdn.com/sd/topics/bitcoin_64.png",
  //     publishedAt: "2024-07-28T11:34:00Z",
  //     content:
  //       "Former U.S. president Donald Trump spoke at Nashville's Bitcoin Conference on Saturday.But he wasn't the only one there making headlines, according to a local newspaper called the Tennesseean:\r\nRepub… [+3475 chars]",
  //   },
  //   {
  //     source: {
  //       id: "business-insider",
  //       name: "Business Insider",
  //     },
  //     author: "mfox@businessinsider.com (Matthew Fox)",
  //     title:
  //       "Stock market today: Dow closes at a record as market bets on Trump after assassination attempt",
  //     description:
  //       "Investors betting on a second Trump presidency expect an easier regulatory environment and more corporate M&A activity.",
  //     url: "https://markets.businessinsider.com/news/stocks/stock-market-today-dow-hits-record-high-failed-trump-assassination-2024-7",
  //     urlToImage:
  //       "https://i.insider.com/669580569caa6ed01e01c687?width=1200&format=jpeg",
  //     publishedAt: "2024-07-15T20:09:18Z",
  //     content:
  //       "US stocks hit new all-time highs on Monday, with the Dow Jones Industrial Average closing at a record.\r\nThe gains came two days after the failed assassination attempt of former President Donald Trump… [+1526 chars]",
  //   },
  //   {
  //     source: {
  //       id: null,
  //       name: "ReadWrite",
  //     },
  //     author: "Radek Zielinski",
  //     title: "Bitcoin approaches $70,000 in six-week high amid Trump support",
  //     description:
  //       "CoinMarketCap data shows that Bitcoin’s (BTC) price approached $70,000 on Monday, reaching a six-week high following former U.S. President Donald… Continue reading Bitcoin approaches $70,000 in six-week high amid Trump support\nThe post Bitcoin approaches $70,…",
  //     url: "https://readwrite.com/bitcoin-price-trump-cryptocurrency/",
  //     urlToImage:
  //       "https://readwrite.com/wp-content/uploads/2024/07/32f89dce-300f-4e5c-af49-baf9c1219b2b.webp",
  //     publishedAt: "2024-07-29T18:18:27Z",
  //     content:
  //       "CoinMarketCap data shows that Bitcoin’s (BTC) price approached $70,000 on Monday, reaching a six-week high following former U.S. President Donald Trump’s renewed support for cryptocurrency over the w… [+2131 chars]",
  //   },
  //   {
  //     source: {
  //       id: null,
  //       name: "ReadWrite",
  //     },
  //     author: "Radek Zielinski",
  //     title: "Kamala Harris considers Bitcoin conference: blue crypto shift?",
  //     description:
  //       "Recent developments suggest a possible realignment in political attitudes towards cryptocurrencies, with both Vice President Kamala Harris and former President… Continue reading Kamala Harris considers Bitcoin conference: blue crypto shift?\nThe post Kamala Ha…",
  //     url: "https://readwrite.com/kamala-harris-considers-bitcoin-conference-blue-crypto-shift/",
  //     urlToImage:
  //       "https://readwrite.com/wp-content/uploads/2024/07/586be38c-f84f-4b21-b208-a72bef4e52aa.webp",
  //     publishedAt: "2024-07-25T03:27:10Z",
  //     content:
  //       "Recent developments suggest a possible realignment in political attitudes towards cryptocurrencies, with both Vice President Kamala Harris and former President Donald Trump at the center of speculati… [+2765 chars]",
  //   },
  //   {
  //     source: {
  //       id: "business-insider",
  //       name: "Business Insider",
  //     },
  //     author: "Kwan Wei Kevin Tan",
  //     title:
  //       "Mark Cuban says Silicon Valley's bet on Trump is a 'Bitcoin play'",
  //     description:
  //       'Cuban said that tech executives aren\'t drawn to Trump because he is a "far stronger proponent of crypto" but for his policies which will drive prices.',
  //     url: "https://www.businessinsider.com/mark-cuban-silicon-valley-bet-on-trump-bitcoin-play-2024-7",
  //     urlToImage:
  //       "https://i.insider.com/66987878fb2b6bedb05829f5?width=1200&format=jpeg",
  //     publishedAt: "2024-07-18T03:36:14Z",
  //     content:
  //       '"Shark Tank" star Mark Cuban said that Silicon Valley\'s support for former President Donald Trump is a "Bitcoin play."Brian Fluharty via Getty Images; Kamil Krzaczynski/AFP via Getty Images\r\n\u003Cul\u003E\u003Cli\u003E… [+4421 chars]',
  //   },
  //   {
  //     source: {
  //       id: null,
  //       name: "Yahoo Entertainment",
  //     },
  //     author: "Hope C",
  //     title: "BlackRock's IBIT Bitcoin ETF Sees Highest Inflows Since March",
  //     description:
  //       "BlackRock’s spot Bitcoin exchange-traded fund (ETF) has experienced its largest inflow in over four months.",
  //     url: "https://finance.yahoo.com/news/blackrocks-ibit-bitcoin-etf-sees-081039300.html",
  //     urlToImage:
  //       "https://media.zenfs.com/en/coinmarketcap_783/861990b4d3f801375723f75ec322858e",
  //     publishedAt: "2024-07-23T08:10:39Z",
  //     content:
  //       "BlackRock's IBIT Bitcoin ETF Sees Highest Inflows Since March\r\nBlackRocks spot Bitcoin exchange-traded fund (ETF) has experienced its largest inflow in over four months. The iShares Bitcoin Trust (IB… [+1249 chars]",
  //   },
  //   {
  //     source: {
  //       id: "wired",
  //       name: "Wired",
  //     },
  //     author: "Kim Zetter",
  //     title: "AT&T Paid a Hacker $370,000 to Delete Stolen Phone Records",
  //     description:
  //       "A security researcher who assisted with the deal says he believes the only copy of the complete dataset of call and text records of “nearly all” AT&T customers has been wiped—but some risks may remain.",
  //     url: "https://www.wired.com/story/atandt-paid-hacker-300000-to-delete-stolen-call-records/",
  //     urlToImage:
  //       "https://media.wired.com/photos/669401be433b897879b41841/191:100/w_1280,c_limit/1247531909",
  //     publishedAt: "2024-07-14T17:57:27Z",
  //     content:
  //       "US telecom giant AT&amp;T, which disclosed Friday that hackers had stolen the call records for tens of millions of its customers, paid a member of the hacking team more than $300,000 to delete the da… [+3255 chars]",
  //   },
  //   {
  //     source: {
  //       id: null,
  //       name: "ReadWrite",
  //     },
  //     author: "Radek Zielinski",
  //     title: "Crypto sees volatility after Joe Biden’s withdrawal",
  //     description:
  //       "The cryptocurrency market witnessed significant turbulence shortly after U.S. President Joe Biden announced his withdrawal from the 2024 presidential election.… Continue reading Crypto sees volatility after Joe Biden’s withdrawal\nThe post Crypto sees volatili…",
  //     url: "https://readwrite.com/crypto-sees-volatility-after-joe-bidens-withdrawal/",
  //     urlToImage:
  //       "https://readwrite.com/wp-content/uploads/2024/07/208028c4-3f4a-4bfa-b096-e4413eba0bd5.webp",
  //     publishedAt: "2024-07-22T16:22:34Z",
  //     content:
  //       "The cryptocurrency market witnessed significant turbulence shortly after U.S. President Joe Biden announced his withdrawal from the 2024 presidential election.\r\nWithin a 30-minute window, nearly $67 … [+1921 chars]",
  //   },
  //   {
  //     source: {
  //       id: null,
  //       name: "Gizmodo.com",
  //     },
  //     author: "Lucas Ropek",
  //     title:
  //       "Kamala Harris Wants to Get Closer to Crypto Bros, If They’ll Let Her",
  //     description:
  //       "Cryptocurrency has become the latest flashpoint in the presidential candidates' war for the soul of Silicon Valley.",
  //     url: "https://gizmodo.com/kamala-harris-wants-to-get-closer-to-crypto-bros-if-theyll-let-her-2000480701",
  //     urlToImage:
  //       "https://gizmodo.com/app/uploads/2019/05/oqakhahoqrr6i0b6qu50.jpg",
  //     publishedAt: "2024-07-30T13:30:20Z",
  //     content:
  //       "Over the past week, Kamala Harris has made it known that she plans on hitting the “reset” button when it comes to the cryptocurrency industry. Currently, there’s bad blood between crypto stans and th… [+6026 chars]",
  //   },
  //   {
  //     source: {
  //       id: null,
  //       name: "Gizmodo.com",
  //     },
  //     author: "Matt Novak",
  //     title:
  //       "North Korean Man Indicted for Ransomware Attacks on U.S. Health Care Companies",
  //     description:
  //       "Rim Jong Hyok allegedly targeted NASA and defense contractors as well.",
  //     url: "https://gizmodo.com/north-korean-man-indicted-for-ransomware-attacks-on-u-s-health-care-companies-2000479109",
  //     urlToImage:
  //       "https://gizmodo.com/app/uploads/2024/07/Screenshot-2024-07-25-at-11.39.25 AM.jpg",
  //     publishedAt: "2024-07-25T19:15:49Z",
  //     content:
  //       "A man allegedly working for North Korean intelligence was indicted by U.S. prosecutors on Thursday for conspiracy to hack computers at NASA and military bases, along with serious ransomware attacks a… [+2142 chars]",
  //   },
  //   {
  //     source: {
  //       id: null,
  //       name: "ReadWrite",
  //     },
  //     author: "Alvin Hemedez",
  //     title:
  //       "Top Altcoins to Invest in Ahead of Bitcoin’s Next Bull Run – $BTC, $SOL, $ETH, $BNB, $XRP, and $99BTC",
  //     description:
  //       "With Bitcoin (BTC) surging and the market exhibiting greed according to the Fear and Greed Index, it’s an opportune time… Continue reading Top Altcoins to Invest in Ahead of Bitcoin’s Next Bull Run – $BTC, $SOL, $ETH, $BNB, $XRP, and $99BTC\nThe post Top Altco…",
  //     url: "https://readwrite.com/top-altcoins-to-invest-in-ahead-of-bitcoins-next-bull-run-btc-sol-eth-bnb-xrp-and-99btc/",
  //     urlToImage:
  //       "https://readwrite.com/wp-content/uploads/2024/07/top-altcoins-to-invest-in-ahead-of-bitcoin-next-bull-run.jpg",
  //     publishedAt: "2024-07-31T19:36:05Z",
  //     content:
  //       "With Bitcoin (BTC) surging and the market exhibiting greed according to the Fear and Greed Index, it’s an opportune time to consider diversifying your portfolio with altcoin investments.\r\nWhile meme … [+6891 chars]",
  //   },
  //   {
  //     source: {
  //       id: null,
  //       name: "Slashdot.org",
  //     },
  //     author: "EditorDavid",
  //     title:
  //       "Trump Says He'd Oppose CBDCs, Pardon Ulbricht, and Create a 'Strategic National Bitcoin Stockpile'",
  //     description:
  //       "Speaking at the Bitcoin Conference in Nashville, Republican presidential nominee Donald Trump made a number of cryptocurrency-related pledges. \n\nIn a speech which lasted for over an hour, the 78-year-old former president also criticized his political opponent…",
  //     url: "https://politics.slashdot.org/story/24/07/27/2141234/trump-says-hed-oppose-cbdcs-pardon-ulbricht-and-create-a-strategic-national-bitcoin-stockpile",
  //     urlToImage: "https://a.fsdn.com/sd/topics/bitcoin_64.png",
  //     publishedAt: "2024-07-27T21:45:00Z",
  //     content:
  //       "JD Vance's couch / love of dolphins / dolphin couches.\r\nObviously, supporting Trump's \"drill, baby, drill\" position\r\n...\r\n:-)\r\nMore seriously on that note, does Trump, and his followers, know the U.S… [+454 chars]",
  //   },
  //   {
  //     source: {
  //       id: null,
  //       name: "Yahoo Entertainment",
  //     },
  //     author: "CoinDesk",
  //     title: "Could Sen. Lummis' Bitcoin Legislation Slash National Debt?",
  //     description:
  //       "CoinDesk's Jennifer Sanasie takes a look back at what happened during the Bitcoin Conference in Nashville over the weekend, including former President Donald...",
  //     url: "https://finance.yahoo.com/video/could-sen-lummis-bitcoin-legislation-192151604.html",
  //     urlToImage:
  //       "https://media.zenfs.com/en/coindesk_75/de6bfcb451c94e994d6577f46c7df4dc",
  //     publishedAt: "2024-07-29T19:21:51Z",
  //     content:
  //       "CoinDesk's Jennifer Sanasie takes a look back at what happened during the Bitcoin Conference in Nashville over the weekend, including former President Donald Trump's promise of a \"strategic national … [+242 chars]",
  //   },
  //   {
  //     source: {
  //       id: "business-insider",
  //       name: "Business Insider",
  //     },
  //     author: "mfox@businessinsider.com (Matthew Fox)",
  //     title:
  //       "Here are the top investment holdings of JD Vance, Donald Trump's pick for vice president",
  //     description:
  //       "Some of Vance's private investments include Palmer Luckey's defense company, Anduril Industries, and sneaker reseller StockX.",
  //     url: "https://markets.businessinsider.com/news/stocks/jd-vance-investment-portfolio-includes-bitcoin-walmart-nasdaq-100-etfs-2024-7",
  //     urlToImage:
  //       "https://i.insider.com/66966a7a5439fb59cebdb04b?width=1200&format=jpeg",
  //     publishedAt: "2024-07-16T14:36:20Z",
  //     content:
  //       "Ohio Senator JD Vance has been selected as Donald Trump's running mate in the 2024 Presidential election.\r\nThe Vice President hopeful has an estimated net worth of more than $5 million, and much of t… [+1996 chars]",
  //   },
  //   {
  //     source: {
  //       id: null,
  //       name: "ReadWrite",
  //     },
  //     author: "Radek Zielinski",
  //     title: "Winklevoss twins donate $1M to challenge Elizabeth Warren",
  //     description:
  //       "Tyler and Cameron Winklevoss, co-founders of cryptocurrency exchange Gemini, have each contributed $500,000 in Bitcoin (BTC) to support efforts to… Continue reading Winklevoss twins donate $1M to challenge Elizabeth Warren\nThe post Winklevoss twins donate $1M…",
  //     url: "https://readwrite.com/winklevoss-twins-donate-1m-to-challenge-elizabeth-warren/",
  //     urlToImage:
  //       "https://readwrite.com/wp-content/uploads/2024/07/6443cd08-3692-41ed-8283-b6e2a1f462fd.webp",
  //     publishedAt: "2024-07-19T14:04:26Z",
  //     content:
  //       "Tyler and Cameron Winklevoss, co-founders of cryptocurrency exchange Gemini, have each contributed $500,000 in Bitcoin (BTC) to support efforts to replace United States Senator Elizabeth Warren.\r\nThe… [+1958 chars]",
  //   },
  //   {
  //     source: {
  //       id: null,
  //       name: "Yahoo Entertainment",
  //     },
  //     author: null,
  //     title: "Bitcoin price crash: Why is the crypto market collapsing?",
  //     description: null,
  //     url: "https://consent.yahoo.com/v2/collectConsent?sessionId=1_cc-session_5f1ff72c-257b-4ef6-bc2a-c7c85f5106e9",
  //     urlToImage: null,
  //     publishedAt: "2024-08-05T14:29:22Z",
  //     content:
  //       "If you click 'Accept all', we and our partners, including 237 who are part of the IAB Transparency &amp; Consent Framework, will also store and/or access information on a device (in other words, use … [+678 chars]",
  //   },
  //   {
  //     source: {
  //       id: null,
  //       name: "Yahoo Entertainment",
  //     },
  //     author: "Yousra Anwar Ahmed",
  //     title:
  //       "What Happened in Crypto Today: Bullish Signals Are Finally Emerging!",
  //     description:
  //       "From Bitcoin bouncing back above 56K to permanent holders quietly scooping up BTCs, here is a 3-minute breakdown of everything important that happened in...",
  //     url: "https://finance.yahoo.com/news/happened-crypto-today-bullish-signals-101605599.html",
  //     urlToImage:
  //       "https://media.zenfs.com/en/coinmarketcap_783/872d2769b8fc1e2c4b485faa1bfad75c",
  //     publishedAt: "2024-08-07T10:16:05Z",
  //     content:
  //       "What Happened in Crypto Today: Bullish Signals Are Finally Emerging!\r\nIt's been an interesting week in crypto, to put it mildly.\r\nJust four days ago, when Bitcoin was hovering around $62K, we hinted … [+7004 chars]",
  //   },
  //   {
  //     source: {
  //       id: null,
  //       name: "ReadWrite",
  //     },
  //     author: "Alvin Hemedez",
  //     title:
  //       "Elon Musk’s Support for Donald Trump Could Boost Dogecoin Price to $0.51",
  //     description:
  //       "The cryptocurrency market is experiencing a pivotal moment, attempting to break free from a two-month consolidation phase. This movement is… Continue reading Elon Musk’s Support for Donald Trump Could Boost Dogecoin Price to $0.51\nThe post Elon Musk’s Support…",
  //     url: "https://readwrite.com/elon-musks-support-for-donald-trump-could-boost-dogecoin-price-to-0-51/",
  //     urlToImage:
  //       "https://readwrite.com/wp-content/uploads/2024/07/elon-musk-support-for-donald-trump-could-boost-dogecoin-price-to-051.jpg",
  //     publishedAt: "2024-07-23T16:31:12Z",
  //     content:
  //       "The cryptocurrency market is experiencing a pivotal moment, attempting to break free from a two-month consolidation phase.\r\nThis movement is challenged by significant whale activity, with large holde… [+7378 chars]",
  //   },
  //   {
  //     source: {
  //       id: "business-insider",
  //       name: "Business Insider",
  //     },
  //     author: "Brent D. Griffiths",
  //     title:
  //       "Read JD Vance's financial disclosure, which includes at least $4 million in total assets and $250,000 in bitcoin",
  //     description:
  //       "JD Vance's net worth easily totals into the millions, following a bestselling book and a stint in venture capital.",
  //     url: "https://www.businessinsider.com/read-jd-vance-financial-disclosure-net-worth-bitcoin-fec-report-2024-8",
  //     urlToImage:
  //       "https://i.insider.com/66bbaae95da406397bf58292?width=1200&format=jpeg",
  //     publishedAt: "2024-08-13T19:14:16Z",
  //     content:
  //       "Sen. JD Vance of Ohio filed his required financial disclosure as the Republican vice presidential nominee.Anna Moneymaker/Getty\r\n\u003Cul\u003E\u003Cli\u003ESen. JD Vance of Ohio filed his required annual financial disc… [+1786 chars]",
  //   },
  //   {
  //     source: {
  //       id: null,
  //       name: "Yahoo Entertainment",
  //     },
  //     author: "Mariella Moon",
  //     title:
  //       "North Korean who used ransomware to attack US healthcare providers has been indicted",
  //     description:
  //       "A grand jury in Kansas City has indicted Rim Jong Hyok, a North Korean intelligence operative who allegedly used ransomware to attack health providers' systems in the US, according to AP News. The State Department said Rim is part of a group called Andariel t…",
  //     url: "https://consent.yahoo.com/v2/collectConsent?sessionId=1_cc-session_5cf6a931-8e48-4282-baa8-9d59f3270937",
  //     urlToImage: null,
  //     publishedAt: "2024-07-26T14:00:08Z",
  //     content:
  //       "If you click 'Accept all', we and our partners, including 237 who are part of the IAB Transparency &amp; Consent Framework, will also store and/or access information on a device (in other words, use … [+678 chars]",
  //   },
  //   {
  //     source: {
  //       id: null,
  //       name: "Xataka.com",
  //     },
  //     author: "Enrique Pérez",
  //     title:
  //       "El Bitcoin se hunde por debajo de los 50.000 euros: un anticipo del pánico que se está extendiendo en la economía global",
  //     description:
  //       "El Bitcoin cotiza en estos momentos por debajo de los 48.000 euros. Ha caído más de un 10% solo en el día de hoy. Es el peor día para las criptomonedas desde el descalabro de FTX. Porque si el Bitcoin ha caído, otras como Ethereum todavía están sufriendo más,…",
  //     url: "https://www.xataka.com/criptomonedas/bitcoin-se-hunde-debajo-50-000-euros-anticipo-panico-que-se-esta-extendiendo-economia-global",
  //     urlToImage:
  //       "https://i.blogs.es/7d848e/behnam-norouzi-criptomonedas/840_560.jpeg",
  //     publishedAt: "2024-08-05T10:32:57Z",
  //     content:
  //       "El Bitcoin cotiza en estos momentos por debajo de los 48.000 euros. Ha caído más de un 10% solo en el día de hoy. Es el peor día para las criptomonedas desde el descalabro de FTX. Porque si el Bitcoi… [+1952 chars]",
  //   },
  //   {
  //     source: {
  //       id: null,
  //       name: "ReadWrite",
  //     },
  //     author: "Alvin Hemedez",
  //     title:
  //       "High-Potential Meme Coin Presales That Could Offer Explosive Returns – $MGMES, $SHIBASHOOT, and $PEPU",
  //     description:
  //       "As the current bull run progresses, it is imperative to examine three promising meme coins. Bitcoin is back, and its… Continue reading High-Potential Meme Coin Presales That Could Offer Explosive Returns – $MGMES, $SHIBASHOOT, and $PEPU\nThe post High-Potentia…",
  //     url: "https://readwrite.com/high-potential-meme-coin-presales-that-could-offer-explosive-returns-mgmes-shibashoot-and-pepu/",
  //     urlToImage:
  //       "https://readwrite.com/wp-content/uploads/2024/07/high-potential-meme-coin-presales-that-could-offer-explosive-returns.jpg",
  //     publishedAt: "2024-07-30T19:39:36Z",
  //     content:
  //       "As the current bull run progresses, it is imperative to examine three promising meme coins. Bitcoin is back, and its resurgence is pumping the entire market.\r\nRetail investors are returning, and inte… [+6494 chars]",
  //   },
  //   {
  //     source: {
  //       id: null,
  //       name: "Bitcoinhaber.net",
  //     },
  //     author: null,
  //     title: "Bitcoin Investors Buy Puts Aggressively",
  //     description:
  //       "Recent movements in the cryptocurrency market have drawn significant attention, particularly Bitcoin's volatility. After Bitcoin's price fell below $50,000, a",
  //     url: "https://en.bitcoinhaber.net/bitcoin-investors-buy-puts-aggressively",
  //     urlToImage:
  //       "https://en.bitcoinhaber.net/wp-content/uploads/2024/08/bitcoin-news-277.jpg",
  //     publishedAt: "2024-08-07T08:28:23Z",
  //     content:
  //       "Recent movements in the cryptocurrency market have drawn significant attention, particularly Bitcoins volatility. After Bitcoins price fell below $50,000, a key volatility indicator for the cryptocur… [+2403 chars]",
  //   },
  //   {
  //     source: {
  //       id: null,
  //       name: "ReadWrite",
  //     },
  //     author: "Alvin Hemedez",
  //     title: "Top 4 Meme Coins to Watch in the Upcoming Bull Market",
  //     description:
  //       "As the cryptocurrency market gears up for an anticipated bull run, Bitcoin will likely lead with significant gains, followed by… Continue reading Top 4 Meme Coins to Watch in the Upcoming Bull Market\nThe post Top 4 Meme Coins to Watch in the Upcoming Bull Mar…",
  //     url: "https://readwrite.com/top-4-meme-coins-to-watch-in-the-upcoming-bull-market/",
  //     urlToImage:
  //       "https://readwrite.com/wp-content/uploads/2024/07/top-four-meme-coins-to-watch-in-the-upcoming-bull-market.jpg",
  //     publishedAt: "2024-07-30T10:19:38Z",
  //     content:
  //       "As the cryptocurrency market gears up for an anticipated bull run, Bitcoin will likely lead with significant gains, followed by major altcoins like Ethereum and Solana.\r\nFollowing that, popular meme … [+6435 chars]",
  //   },
  //   {
  //     source: {
  //       id: null,
  //       name: "ReadWrite",
  //     },
  //     author: "Alvin Hemedez",
  //     title: "Top 5 Meme Coin Projects to Buy Now Before the End of July",
  //     description:
  //       "With Bitcoin back in the green, up 13% on the week at $66,000, and Ethereum seeing gains as ETFs prepare… Continue reading Top 5 Meme Coin Projects to Buy Now Before the End of July\nThe post Top 5 Meme Coin Projects to Buy Now Before the End of July appeared …",
  //     url: "https://readwrite.com/top-5-meme-coin-projects-to-buy-now-before-the-end-of-july/",
  //     urlToImage:
  //       "https://readwrite.com/wp-content/uploads/2024/07/top-5-meme-coin-projects-to-buy-now-before-the-end-of-july.jpg",
  //     publishedAt: "2024-07-20T19:19:59Z",
  //     content:
  //       "With Bitcoin back in the green, up 13% on the week at $66,000, and Ethereum seeing gains as ETFs prepare to go live soon, the cryptocurrency market is beginning to look bullish again.\r\nWith the marke… [+7017 chars]",
  //   },
  //   {
  //     source: {
  //       id: null,
  //       name: "ReadWrite",
  //     },
  //     author: "Radek Zielinski",
  //     title: "US Ethereum ETFs see net outflows on second trading day",
  //     description:
  //       "On their second day of trading, United States-based spot Ethereum exchange-traded funds (ETFs) recorded net outflows of $113.3 million, according… Continue reading US Ethereum ETFs see net outflows on second trading day\nThe post US Ethereum ETFs see net outfl…",
  //     url: "https://readwrite.com/us-ethereum-etfs-see-net-outflows-on-second-trading-day/",
  //     urlToImage:
  //       "https://readwrite.com/wp-content/uploads/2024/07/7ef838ca-e7d5-4e5f-84b3-257b30922fcd-1.webp",
  //     publishedAt: "2024-07-25T16:37:37Z",
  //     content:
  //       "On their second day of trading, United States-based spot Ethereum exchange-traded funds (ETFs) recorded net outflows of $113.3 million, according to data reported by Farside Investors. This negative … [+1879 chars]",
  //   },
  //   {
  //     source: {
  //       id: null,
  //       name: "Xataka.com",
  //     },
  //     author: "Enrique Pérez",
  //     title:
  //       'Trump promete convertir Estados Unidos en la cuna de las criptomonedas: "nunca vendáis vuestros bitcoins"',
  //     description:
  //       "La conferencia Bitcoin 2024 ha estado marcada por el discurso de Donald Trump. El candidato republicano ha aprovechado su intervención para posicionarse como un claro defensor de las criptomonedas. Y ha ido más allá. Si resulta elegido, ha prometido que conve…",
  //     url: "https://www.xataka.com/criptomonedas/trump-promete-convertir-estados-unidos-cuna-criptomonedas-nunca-vendais-vuestros-bitcoins",
  //     urlToImage: "https://i.blogs.es/488af4/bitcoin2024-trump/840_560.jpeg",
  //     publishedAt: "2024-07-29T07:55:14Z",
  //     content:
  //       "La conferencia Bitcoin 2024 ha estado marcada por el discurso de Donald Trump. El candidato republicano ha aprovechado su intervención para posicionarse como un claro defensor de las criptomonedas. Y… [+2523 chars]",
  //   },
  //   {
  //     source: {
  //       id: null,
  //       name: "Xataka.com",
  //     },
  //     author: "Enrique Pérez",
  //     title:
  //       "Los ETF de Ethereum han arrasado en su primer día. Es señal que se abre una nueva etapa en el mundo cripto",
  //     description:
  //       "Tras la aprobación de los ETF de Bitcoin a principios de año, ahora llegan los ETF de Ethereum. Y los primeros datos de estos fondos indexados han supuesto una alegría para los inversores interesados en el mundo cripto. En su primer día los ETF de ETH han cap…",
  //     url: "https://www.xataka.com/criptomonedas/etf-ethereum-han-arrasado-su-primer-dia-senal-que-se-abre-nueva-etapa-mundo-cripto",
  //     urlToImage: "https://i.blogs.es/787709/traxer-ethereum/840_560.jpeg",
  //     publishedAt: "2024-07-24T10:49:04Z",
  //     content:
  //       "Tras la aprobación de los ETF de Bitcoin a principios de año, ahora llegan los ETF de Ethereum. Y los primeros datos de estos fondos indexados han supuesto una alegría para los inversores interesados… [+3005 chars]",
  //   },
  //   {
  //     source: {
  //       id: null,
  //       name: "ReadWrite",
  //     },
  //     author: "Alvin Hemedez",
  //     title:
  //       "The U.S. Election Could Potentially Fuel the Next Crypto Bull Run – Could This Layer 2 Meme Coin Take the Lead?",
  //     description:
  //       "The cryptocurrency market, including Bitcoin and Shiba Inu, is recovering strongly, which is a positive sign for new cryptocurrencies like… Continue reading The U.S. Election Could Potentially Fuel the Next Crypto Bull Run – Could This Layer 2 Meme Coin Take …",
  //     url: "https://readwrite.com/the-u-s-election-could-potentially-fuel-the-next-crypto-bull-run-could-this-layer-2-meme-coin-take-the-lead/",
  //     urlToImage:
  //       "https://readwrite.com/wp-content/uploads/2024/07/the-us-election-could-potentially-fuel-the-next-crypto-bull-run.jpg",
  //     publishedAt: "2024-07-24T10:31:21Z",
  //     content:
  //       "The cryptocurrency market, including Bitcoin and Shiba Inu, is recovering strongly, which is a positive sign for new cryptocurrencies like Pepe Unchained.\r\nAs investor confidence grows and the market… [+4454 chars]",
  //   },
  //   {
  //     source: {
  //       id: null,
  //       name: "ReadWrite",
  //     },
  //     author: "Alvin Hemedez",
  //     title:
  //       "New Learn-to-Earn Crypto ICO Ending in 10 Days – Invest in 99BTC Before It Sells Out",
  //     description:
  //       "Investors have only a few days left to join the hottest crypto presale today, with predictions that the next token… Continue reading New Learn-to-Earn Crypto ICO Ending in 10 Days – Invest in 99BTC Before It Sells Out\nThe post New Learn-to-Earn Crypto ICO End…",
  //     url: "https://readwrite.com/new-learn-to-earn-crypto-ico-ending-in-10-days-invest-in-99btc-before-it-sells-out/",
  //     urlToImage:
  //       "https://readwrite.com/wp-content/uploads/2024/07/new-learn-to-earn-crypto-ico-ending-in-ten-days.jpg",
  //     publishedAt: "2024-07-28T12:14:23Z",
  //     content:
  //       "Investors have only a few days left to join the hottest crypto presale today, with predictions that the next token will explode upon its IEO.\r\nWith more than $2.5 million already raised in the 99Bitc… [+4148 chars]",
  //   },
  //   {
  //     source: {
  //       id: "business-insider",
  //       name: "Business Insider",
  //     },
  //     author: "fdemott@insider.com (Filip De Mott)",
  //     title:
  //       "Stock market today: Indexes rise as traders assess earnings and retail sales beat estimates",
  //     description:
  //       "Consumer spending remained strong in June, reducing fears of a pullback that could trigger economic weakness.",
  //     url: "https://markets.businessinsider.com/news/stocks/stock-market-today-indexes-retail-data-earnings-estimates-consumer-spending-2024-7",
  //     urlToImage:
  //       "https://i.insider.com/669676e45439fb59cebdb3ea?width=1200&format=jpeg",
  //     publishedAt: "2024-07-16T13:41:45Z",
  //     content:
  //       "US stocks climbed higher as fresh data indicated that consumers were still spending. \r\nRetail sales published Tuesday came in better than expected for June. Excluding autos, sales rose 0.4% against e… [+1625 chars]",
  //   },
  //   {
  //     source: {
  //       id: "business-insider",
  //       name: "Business Insider",
  //     },
  //     author: "jsor@businessinsider.com (Jennifer Sor)",
  //     title:
  //       "Stock market today: Dow jumps 285 points as traders try to extend comeback from big sell-off",
  //     description:
  //       "The Bank of Japan suggested on Wednesday it would pause rate hikes in the near-term, bolstering investor sentiment.",
  //     url: "https://markets.businessinsider.com/news/stocks/stock-market-today-rally-interest-rates-fed-boj-carry-trade-2024-8",
  //     urlToImage:
  //       "https://i.insider.com/66b378f5a5247369a3ea253d?width=1200&format=jpeg",
  //     publishedAt: "2024-08-07T13:45:50Z",
  //     content:
  //       "US stocks jumped on Wednesday after the Bank of Japan issued guidance on interest rates and traders attempted to extend the rebound in stocks. All three benchmark indexes ticked higher, with the Dow … [+1689 chars]",
  //   },
  //   {
  //     source: {
  //       id: null,
  //       name: "Proton.me",
  //     },
  //     author: "Andy Yen",
  //     title: "Proton Wallet – a safer way to hold Bitcoin",
  //     description:
  //       "Proton Wallet is an easy-to-use self-custodial wallet that makes financial freedom attainable for everyone.",
  //     url: "https://proton.me/blog/proton-wallet-launch",
  //     urlToImage:
  //       "https://res.cloudinary.com/dbulfrlrz/images/f_auto,q_auto/v1721750778/wp-pme/proton-wallet-blog-cover2x/proton-wallet-blog-cover2x.?_i=AA",
  //     publishedAt: "2024-07-24T11:13:31Z",
  //     content:
  //       "Published on July 24, 2024\r\nOur long-term vision is for Proton Wallet to be a digital wallet that gives you full control of your digital assets. While the type of assets that you can hold in Proton W… [+8566 chars]",
  //   },
  //   {
  //     source: {
  //       id: null,
  //       name: "ReadWrite",
  //     },
  //     author: "Alvin Hemedez",
  //     title:
  //       "The 99Bitcoins ICO Ends on August 6th – Top Crypto to Watch in 2024?",
  //     description:
  //       "New high-potential crypto 99Bitcoins (99BTC) has announced its presale closing date on August 6th at 2PM UTC, signaling to investors… Continue reading The 99Bitcoins ICO Ends on August 6th – Top Crypto to Watch in 2024?\nThe post The 99Bitcoins ICO Ends on Aug…",
  //     url: "https://readwrite.com/the-99bitcoins-ico-ends-on-august-6th-top-crypto-to-watch-in-2024/",
  //     urlToImage:
  //       "https://readwrite.com/wp-content/uploads/2024/07/crypto-boy-99btc-presale-update.jpg",
  //     publishedAt: "2024-07-25T14:59:40Z",
  //     content:
  //       "New high-potential crypto 99Bitcoins (99BTC) has announced its presale closing date on August 6th at 2PM UTC, signaling to investors seeking potential high returns.\r\nThis trending crypto continues to… [+4394 chars]",
  //   },
  //   {
  //     source: {
  //       id: null,
  //       name: "ReadWrite",
  //     },
  //     author: "Alvin Hemedez",
  //     title:
  //       "How Learning Crypto with 99Bitcoins Can Be Rewarding – Last Chance to Buy",
  //     description:
  //       "Having raised $2.5 million in its token presale, 99Bitcoins is poised to revolutionize cryptocurrency investing. Designed as a user-friendly platform… Continue reading How Learning Crypto with 99Bitcoins Can Be Rewarding – Last Chance to Buy\nThe post How Lear…",
  //     url: "https://readwrite.com/how-learning-crypto-with-99bitcoins-can-be-rewarding-last-chance-to-buy/",
  //     urlToImage:
  //       "https://readwrite.com/wp-content/uploads/2024/07/how-learning-crypto-can-be-rewarding-with-the-99bitcoins-learn-to-earn-model.jpg",
  //     publishedAt: "2024-07-30T17:03:31Z",
  //     content:
  //       "Having raised $2.5 million in its token presale, 99Bitcoins is poised to revolutionize cryptocurrency investing.\r\nDesigned as a user-friendly platform to simplify complex market dynamics, 99Bitcoins … [+4784 chars]",
  //   },
  //   {
  //     source: {
  //       id: null,
  //       name: "ReadWrite",
  //     },
  //     author: "Alvin Hemedez",
  //     title:
  //       "Few Days Left for This AI Meme Coin Presale – Invest in WAI Before It Sells Out",
  //     description:
  //       "WienerAI (WAI), a meme coin with AI integration, nears the end of its presale with only 9 days remaining, so… Continue reading Few Days Left for This AI Meme Coin Presale – Invest in WAI Before It Sells Out\nThe post Few Days Left for This AI Meme Coin Presale…",
  //     url: "https://readwrite.com/few-days-left-for-this-ai-meme-coin-presale-invest-in-wai-before-it-sells-out/",
  //     urlToImage:
  //       "https://readwrite.com/wp-content/uploads/2024/07/few-days-left-for-thi-ai-meme-coin-presale-invest-in-wai-before-it-sells-out.jpg",
  //     publishedAt: "2024-07-22T10:51:08Z",
  //     content:
  //       "WienerAI (WAI), a meme coin with AI integration, nears the end of its presale with only 9 days remaining, so investors should act quickly for potential high returns.\r\nThis timing is opportune, as the… [+5173 chars]",
  //   },
  //   {
  //     source: {
  //       id: null,
  //       name: "ReadWrite",
  //     },
  //     author: "Alvin Hemedez",
  //     title:
  //       "The Hottest Learn-to-Earn Crypto Presale Raises $2.5 Million – Next 100x Crypto Gem?",
  //     description:
  //       "The 99Bitcoins presale offers a great investment chance, driven by its Learn-to-Earn model and big staking rewards for early investors.… Continue reading The Hottest Learn-to-Earn Crypto Presale Raises $2.5 Million – Next 100x Crypto Gem?\nThe post The Hottest…",
  //     url: "https://readwrite.com/the-hottest-learn-to-earn-crypto-presale-raises-2-5-million-next-100x-crypto-gem/",
  //     urlToImage:
  //       "https://readwrite.com/wp-content/uploads/2024/07/next-100x-crypto-gem-1.jpg",
  //     publishedAt: "2024-07-22T16:04:07Z",
  //     content:
  //       "The 99Bitcoins presale offers a great investment chance, driven by its Learn-to-Earn model and big staking rewards for early investors.\r\nThe growing interest in the project has pushed the $99BTC pres… [+4884 chars]",
  //   },
  //   {
  //     source: {
  //       id: null,
  //       name: "ReadWrite",
  //     },
  //     author: "Alvin Hemedez",
  //     title:
  //       "Learn-to-Earn Token Presale Ends Soon – Invest Now Before the IEO",
  //     description:
  //       "It is predicted by some experts that many new investors will enter the market in the coming months, and they… Continue reading Learn-to-Earn Token Presale Ends Soon – Invest Now Before the IEO\nThe post Learn-to-Earn Token Presale Ends Soon – Invest Now Before…",
  //     url: "https://readwrite.com/learn-to-earn-token-presale-ends-soon-invest-now-before-the-ieo/",
  //     urlToImage:
  //       "https://readwrite.com/wp-content/uploads/2024/07/learn-to-earn-token-presale-ends-soon-invest-now-before-the-ieo.jpeg",
  //     publishedAt: "2024-07-29T16:14:44Z",
  //     content:
  //       "It is predicted by some experts that many new investors will enter the market in the coming months, and they will definitely seek education or knowledge about Bitcoin and cryptocurrencies.\r\nOne of th… [+4504 chars]",
  //   },
  //   {
  //     source: {
  //       id: null,
  //       name: "Slashdot.org",
  //     },
  //     author: "EditorDavid",
  //     title: "AT&T Paid $370,000 For the Deletion of Stolen Phone Call Records",
  //     description:
  //       'AT&T paid more than $300,000 to a member of the team that stole call records for tens of millions of customers, reports Wired — "to delete the data and provide a video demonstrating proof of deletion."\n\n\nThe hacker, who is part of the notorious ShinyHunters h…',
  //     url: "https://yro.slashdot.org/story/24/07/14/1919219/att-paid-370000-for-the-deletion-of-stolen-phone-call-records",
  //     urlToImage: "https://a.fsdn.com/sd/topics/att_64.png",
  //     publishedAt: "2024-07-14T19:22:00Z",
  //     content:
  //       "The hacker, who is part of the notorious ShinyHunters hacking group that has stolen data from a number of victims through unsecured Snowflake cloud storage accounts, tells WIRED that AT&amp;T paid th… [+1359 chars]",
  //   },
  //   {
  //     source: {
  //       id: null,
  //       name: "ReadWrite",
  //     },
  //     author: "Alvin Hemedez",
  //     title:
  //       "Goat-Themed Crypto Set for Explosive Growth This August – Could This Be the Next 100x Meme Coin to Watch?",
  //     description:
  //       "Launched just last month, RealGOAT has rapidly gained traction within the cryptocurrency community, surging by an impressive 95% since its… Continue reading Goat-Themed Crypto Set for Explosive Growth This August – Could This Be the Next 100x Meme Coin to Wat…",
  //     url: "https://readwrite.com/goat-themed-crypto-set-for-explosive-growth-this-august-could-this-be-the-next-100x-meme-coin-to-watch/",
  //     urlToImage:
  //       "https://readwrite.com/wp-content/uploads/2024/07/goat-themed-crypto-set-for-explosive-growth-this-august.jpg",
  //     publishedAt: "2024-07-28T08:52:36Z",
  //     content:
  //       "Launched just last month, RealGOAT has rapidly gained traction within the cryptocurrency community, surging by an impressive 95% since its introduction to the market.\r\nThe token, positioned as a play… [+3546 chars]",
  //   },
  //   {
  //     source: {
  //       id: null,
  //       name: "Gizmodo.com",
  //     },
  //     author: "Lucas Ropek",
  //     title:
  //       "Silicon Valley Royalty Put on the MAGA Hat and Open Their Wallets",
  //     description:
  //       "The unhinged moneymen of Silicon Valley are all in on MAGA. Offended? They say it's strictly business.",
  //     url: "https://gizmodo.com/silicon-valley-royalty-put-on-the-maga-hat-and-open-their-wallets-2000474011",
  //     urlToImage:
  //       "https://gizmodo.com/app/uploads/2024/07/GettyImages-495485990.jpg",
  //     publishedAt: "2024-07-16T19:57:55Z",
  //     content:
  //       "Silicon Valley has officially gone MAGA. For evidence of this, you need look no further than the fact that the two co-founders of one of the tech industry’s most influential venture capital firms, An… [+4928 chars]",
  //   },
  //   {
  //     source: {
  //       id: null,
  //       name: "BBC News",
  //     },
  //     author: null,
  //     title: "Trump courts crypto industry votes and campaign donations",
  //     description:
  //       "Donald Trump tells cryptocurrency leaders he will fire the head of the US Securities and Exchange Commission if he's re-elected president.",
  //     url: "https://www.bbc.com/news/articles/cne4n2xdylvo",
  //     urlToImage:
  //       "https://ichef.bbci.co.uk/news/1024/branded_news/2bf5/live/2c3c05f0-4c5f-11ef-8f0f-0577398c3339.jpg",
  //     publishedAt: "2024-07-27T22:25:15Z",
  //     content:
  //       "Donald Trump has told one of the largest cryptocurrency events of the year that if he is re-elected president he will fire the chairperson of the US Securities and Exchange Commission (SEC) on the fi… [+2944 chars]",
  //   },
  //   {
  //     source: {
  //       id: null,
  //       name: "Hipertextual",
  //     },
  //     author: "Gabriel Erard",
  //     title: "Ferrari comienza a aceptar pagos con criptomonedas en Europa",
  //     description:
  //       "Si estás en Europa y quieres —o puedes— comprarte un Ferrari, ahora tienes la opción de pagarlo con criptomonedas. La automotriz de Maranello anunció este miércoles la expansión de su sistema de pagos con criptoactivos a toda su red de concesionarios europeos…",
  //     url: "http://hipertextual.com/2024/07/ferrari-comienza-a-aceptar-pagos-con-criptomonedas-en-europa",
  //     urlToImage:
  //       "https://imgs.hipertextual.com/wp-content/uploads/2024/07/brandon-atchison-_DzW3MT-iIY-unsplash-scaled.jpg",
  //     publishedAt: "2024-07-24T13:05:15Z",
  //     content:
  //       "Si estás en Europa y quieres o puedes comprarte un Ferrari, ahora tienes la opción de pagarlo con criptomonedas. La automotriz de Maranello anunció este miércoles la expansión de su sistema de pagos … [+3126 chars]",
  //   },
  //   {
  //     source: {
  //       id: null,
  //       name: "Golem.de",
  //     },
  //     author: "Tobias Költzsch",
  //     title: "Kryptowährung: Bitcoin verliert in kurzer Zeit über 20 Prozent",
  //     description:
  //       "Der Aktienmarkt reagiert aktuell nervös - die Stimmung hat sich auch auf Kryptowährungen ausgeweitet: Bitcoin und Ethereum sind deutlich gesunken. (Bitcoin, Börse)",
  //     url: "https://www.golem.de/sonstiges/zustimmung/auswahl.html?from=https%3A%2F%2Fwww.golem.de%2Fnews%2Fkryptowaehrung-bitcoin-verliert-in-kurzer-zeit-ueber-20-prozent-2408-187718.html&referer=https%3A%2F%2Ft.co%2F78d167def9",
  //     urlToImage: null,
  //     publishedAt: "2024-08-05T07:44:01Z",
  //     content:
  //       "Besuchen Sie Golem.de wie gewohnt mit Werbung und Tracking,\r\n indem Sie der Nutzung aller Cookies zustimmen.\r\n Details zum Tracking finden Sie im Privacy Center.\r\nSkript wurde nicht geladen. Informat… [+607 chars]",
  //   },
  //   {
  //     source: {
  //       id: null,
  //       name: "Genbeta.com",
  //     },
  //     author: "Antonio Vallejo",
  //     title:
  //       "Webs que regalaban hasta cinco bitcoins por resolver captchas: los 'faucets' en 2010 no tenían nada que ver con los de ahora",
  //     description:
  //       "El mundo de las criptomonedas ha cambiado drásticamente en los últimos 15 años. Y es que tras la adopción del bitcoin y otras criptodivisas por múltiples plataformas y usuarios, eventos recurrentes como el ‘halving’ y otros factores externos del mercado, el v…",
  //     url: "https://www.genbeta.com/web/webs-que-regalaban-cinco-bitcoins-resolver-captchas-faucets-2010-no-tenian-nada-que-ver-ahora",
  //     urlToImage:
  //       "https://i.blogs.es/0123b2/erling-loken-andersen-7fiieouobtu-unsplash/840_560.jpeg",
  //     publishedAt: "2024-07-27T14:01:56Z",
  //     content:
  //       "El mundo de las criptomonedas ha cambiado drásticamente en los últimos 15 años. Y es que tras la adopción del bitcoin y otras criptodivisas por múltiples plataformas y usuarios, eventos recurrentes c… [+2703 chars]",
  //   },
  //   {
  //     source: {
  //       id: null,
  //       name: "Yahoo Entertainment",
  //     },
  //     author: "CoinDesk",
  //     title: "Nvidia Becoming More Volatile Than Bitcoin and Ether",
  //     description:
  //       "Nvidia is expected to see more significant price swings than bitcoin and ether. The stock's 30-day options implied volatility, a gauge of anticipated price...",
  //     url: "https://finance.yahoo.com/video/nvidia-becoming-more-volatile-bitcoin-160019799.html",
  //     urlToImage:
  //       "https://media.zenfs.com/en/coindesk_75/ba4c53629f204a13b105c92151481211",
  //     publishedAt: "2024-07-31T16:00:19Z",
  //     content:
  //       "Nvidia is expected to see more significant price swings than bitcoin and ether. The stock's 30-day options implied volatility, a gauge of anticipated price swings over four weeks, has recently surged… [+124 chars]",
  //   },
  //   {
  //     source: {
  //       id: null,
  //       name: "ReadWrite",
  //     },
  //     author: "Radek Zielinski",
  //     title: "Base crypto donation platform launches for U.S. politicians",
  //     description:
  //       "A novel blockchain-based donation platform has emerged, enabling United States politicians to receive cryptocurrency contributions via the Coinbase-developed Base network.… Continue reading Base crypto donation platform launches for U.S. politicians\nThe post …",
  //     url: "https://readwrite.com/base-crypto-donation-platform-launches-for-u-s-politicians/",
  //     urlToImage:
  //       "https://readwrite.com/wp-content/uploads/2024/07/bb52f118-8233-4c54-a2db-0cccc6518b7d.webp",
  //     publishedAt: "2024-07-23T14:15:24Z",
  //     content:
  //       "A novel blockchain-based donation platform has emerged, enabling United States politicians to receive cryptocurrency contributions via the Coinbase-developed Base network.\r\nThe platform, created by E… [+2050 chars]",
  //   },
  //   {
  //     source: {
  //       id: null,
  //       name: "ReadWrite",
  //     },
  //     author: "Radek Zielinski",
  //     title: "Spot Ethereum ETFs Set to Launch in US on July 23",
  //     description:
  //       "The Securities and Exchange Commission (SEC) has approved spot Ethereum exchange-traded funds (ETFs) to begin trading in the United States… Continue reading Spot Ethereum ETFs Set to Launch in US on July 23\nThe post Spot Ethereum ETFs Set to Launch in US on J…",
  //     url: "https://readwrite.com/spot-ethereum-etfs-set-to-launch-in-us-on-july-23/",
  //     urlToImage:
  //       "https://readwrite.com/wp-content/uploads/2024/07/3fcb3228-6cde-4ae5-9797-9a38dd278d78.webp",
  //     publishedAt: "2024-07-23T17:32:29Z",
  //     content:
  //       "The Securities and Exchange Commission (SEC)has approved spot Ethereum exchange-traded funds (ETFs) to begin trading in the United States on July 23, 2024.\r\nThis decision comes after the SEC approved… [+1779 chars]",
  //   },
  //   {
  //     source: {
  //       id: null,
  //       name: "ReadWrite",
  //     },
  //     author: "Alvin Hemedez",
  //     title:
  //       "Gala Technical Analysis and Price Prediction – Will GALA Surge 40x in 2024?",
  //     description:
  //       "The GALA token had a strong bounce back last Monday after a big drop, making it a top altcoin to… Continue reading Gala Technical Analysis and Price Prediction – Will GALA Surge 40x in 2024?\nThe post Gala Technical Analysis and Price Prediction – Will GALA Su…",
  //     url: "https://readwrite.com/gala-technical-analysis-and-price-prediction-will-gala-surge-40x-in-2024/",
  //     urlToImage:
  //       "https://readwrite.com/wp-content/uploads/2024/07/gala-technical-analysis-and-price-prediction.jpg",
  //     publishedAt: "2024-07-31T14:54:57Z",
  //     content:
  //       "The GALA token had a strong bounce back last Monday after a big drop, making it a top altcoin to buy. The question is, what caused this recovery?\r\nIn this article, we’ll examine Gala Games from both … [+6692 chars]",
  //   },
  //   {
  //     source: {
  //       id: null,
  //       name: "Yahoo Entertainment",
  //     },
  //     author: "Julie Hyman",
  //     title: "Gold hits a new record: What's driving prices higher",
  //     description:
  //       "Gold (GC=F) has hit new heights amid the rising potential for an interest rate cut from the Federal Reserve. Gold has often done well during times of...",
  //     url: "https://finance.yahoo.com/video/gold-hits-record-whats-driving-205934195.html",
  //     urlToImage:
  //       "https://s.yimg.com/ny/api/res/1.2/Ux0Gg.HAwr1fxwjt9f4eqQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD02NzY-/https://s.yimg.com/os/creatr-uploaded-images/2024-07/4734e2f0-43b3-11ef-bdfb-1e2aaf793c2c",
  //     publishedAt: "2024-07-16T20:59:34Z",
  //     content:
  //       "Gold (GC=F) has hit new heights amid the rising potential for an interest rate cut from the Federal Reserve. Gold has often done well during times of uncertainty, with ongoing conflicts in the Middle… [+877 chars]",
  //   },
  //   {
  //     source: {
  //       id: null,
  //       name: "Golem.de",
  //     },
  //     author: "Peter Steinlechner",
  //     title: "Wahlkampf USA: Trump umgarnt Bitcoin-Community",
  //     description:
  //       "In den USA besitzen rund 16 Prozent aller Erwachsenen Kryptowährungen. Das macht sie als Zielgruppe für Wahlkampfversprechen interessant. (Bitcoin, Marc Andreessen)",
  //     url: "https://www.golem.de/sonstiges/zustimmung/auswahl.html?from=https%3A%2F%2Fwww.golem.de%2Fnews%2Fwahlkampf-usa-trump-umgarnt-bitcoin-community-2407-187505.html&referer=https%3A%2F%2Ft.co%2F9fced73e20",
  //     urlToImage: null,
  //     publishedAt: "2024-07-28T10:36:02Z",
  //     content:
  //       "Besuchen Sie Golem.de wie gewohnt mit Werbung und Tracking,\r\n indem Sie der Nutzung aller Cookies zustimmen.\r\n Details zum Tracking finden Sie im Privacy Center.\r\nSkript wurde nicht geladen. Informat… [+607 chars]",
  //   },
  //   {
  //     source: {
  //       id: "die-zeit",
  //       name: "Die Zeit",
  //     },
  //     author: "ZEIT ONLINE: News -",
  //     title: "Kryptowährungen: Trump umgarnt Bitcoin-Community",
  //     description:
  //       "Hier finden Sie Informationen zu dem Thema „Kryptowährungen“. Lesen Sie jetzt „Trump umgarnt Bitcoin-Community“.",
  //     url: "https://www.zeit.de/news/2024-07/28/trump-umgarnt-bitcoin-community",
  //     urlToImage:
  //       "https://img.zeit.de/news/2024-07/28/trump-umgarnt-bitcoin-community-image-group/wide__1300x731",
  //     publishedAt: "2024-07-28T06:46:02Z",
  //     content:
  //       "Der republikanische Präsidentschaftskandidat Donald Trump hat sich auf der Bitcoin-Konferenz in Nashville für eine kryptofreundliche Politik ausgesprochen. Er kündigte an, im Falle seiner Wiederwahl … [+3469 chars]",
  //   },
  //   {
  //     source: {
  //       id: null,
  //       name: "ReadWrite",
  //     },
  //     author: "Alvin Hemedez",
  //     title:
  //       "Experts Predict Pepe Will Surge 10x in the Coming Months – Should You Buy PEPE or Consider This Layer 2 Meme Coin?",
  //     description:
  //       "Experts predict a big surge for Pepe (PEPE), leading many investors to believe now is the best time to buy… Continue reading Experts Predict Pepe Will Surge 10x in the Coming Months – Should You Buy PEPE or Consider This Layer 2 Meme Coin?\nThe post Experts Pr…",
  //     url: "https://readwrite.com/experts-predict-pepe-will-surge-10x-in-the-coming-months-should-you-buy-pepe-or-consider-this-layer-2-meme-coin/",
  //     urlToImage:
  //       "https://readwrite.com/wp-content/uploads/2024/07/pepe-price-prediction-1.jpg",
  //     publishedAt: "2024-07-31T12:32:20Z",
  //     content:
  //       "Experts predict a big surge for Pepe (PEPE), leading many investors to believe now is the best time to buy in.\r\nThe cryptocurrency market is on the rise. Market volume has jumped by 62%, and the Fear… [+5122 chars]",
  //   },
  //   {
  //     source: {
  //       id: null,
  //       name: "ReadWrite",
  //     },
  //     author: "Radek Zielinski",
  //     title: "Coinbase expands board with former OpenAI exec, clinton aide",
  //     description:
  //       "Leading US cryptocurrency exchange Coinbase has appointed three new members to its board of directors, expanding the board from seven… Continue reading Coinbase expands board with former OpenAI exec, clinton aide\nThe post Coinbase expands board with former Op…",
  //     url: "https://readwrite.com/coinbase-expands-board-with-former-openai-exec-clinton-aide/",
  //     urlToImage:
  //       "https://readwrite.com/wp-content/uploads/2024/07/aeee0023-52cc-4e00-824b-c8cb7d04eef3.webp",
  //     publishedAt: "2024-07-26T14:30:42Z",
  //     content:
  //       "Leading US cryptocurrency exchange Coinbase has appointed three new members to its board of directors, expanding the board from seven to ten members.\r\nAccording to Reuters, the new board members incl… [+2145 chars]",
  //   },
  //   {
  //     source: {
  //       id: null,
  //       name: "ReadWrite",
  //     },
  //     author: "Radek Zielinski",
  //     title:
  //       "Cardano founder pitches Elon Musk decentralized solution for X’s woes",
  //     description:
  //       "Following a recent hacking incident on X (formerly Twitter) affecting AI developer Ben Goertzel, Cardano (ADA) creator Charles Hoskinson has… Continue reading Cardano founder pitches Elon Musk decentralized solution for X’s woes\nThe post Cardano founder pitch…",
  //     url: "https://readwrite.com/cardano-founder-pitches-elon-musk-decentralized-solution-for-xs-woes/",
  //     urlToImage:
  //       "https://readwrite.com/wp-content/uploads/2024/07/a-large-white-x-on-a-black-background-with-green-d-2REZRyeDSAaKzcRXC6Hdzg-HY_L2BFuRSiNul63px-4BA.jpeg",
  //     publishedAt: "2024-07-17T16:23:56Z",
  //     content:
  //       "Following a recent hacking incident on X (formerly Twitter)affecting AI developer Ben Goertzel, Cardano (ADA) creator Charles Hoskinson has suggested implementing decentralized identifiers (DIDs) to … [+2573 chars]",
  //   },
  //   {
  //     source: {
  //       id: null,
  //       name: "Threadreaderapp.com",
  //     },
  //     author: null,
  //     title: '"Does astrology work? We tested the ability of 152 astrologers"',
  //     description:
  //       "@SpencrGreenberg: Does astrology work? We tested the ability of 152 astrologers to see if they could demonstrate genuine astrological skill. Here is how the study was designed and what we found (including a result t...…",
  //     url: "https://threadreaderapp.com/thread/1822663687145972105.html",
  //     urlToImage:
  //       "https://threadreaderapp.com/images/screenshots/thread/1822663687145972105.jpg",
  //     publishedAt: "2024-08-12T13:32:12Z",
  //     content:
  //       "Support us! We are indie developers!\r\nThis site is made by just two indie developers on a laptop doing marketing, support and development! Read more about the story.\r\nBecome a Premium Member ($3/mont… [+395 chars]",
  //   },
  //   {
  //     source: {
  //       id: null,
  //       name: "Threadreaderapp.com",
  //     },
  //     author: null,
  //     title: "Google Strategy Doc from Antitrust Proceedings",
  //     description:
  //       "@jason_kint: wow. an amazing 325 page google strategy document quietly unsealed buried in google antitrust docket. It's gonna take a long thread but I have pulled out the gems. It's from 2017 planning, no doubt Goog...…",
  //     url: "https://threadreaderapp.com/thread/1821554841786683554.html",
  //     urlToImage:
  //       "https://threadreaderapp.com/images/screenshots/thread/1821554841786683554.jpg",
  //     publishedAt: "2024-08-10T04:28:35Z",
  //     content:
  //       "Support us! We are indie developers!\r\nThis site is made by just two indie developers on a laptop doing marketing, support and development! Read more about the story.\r\nBecome a Premium Member ($3/mont… [+395 chars]",
  //   },
  //   {
  //     source: {
  //       id: null,
  //       name: "MarketWatch",
  //     },
  //     author: "Frances Yue",
  //     title:
  //       "Bitcoin prices climb as crypto recovers. Here’s how they could keep rebounding.",
  //     description:
  //       "Major cryptocurrencies continued to rebound on Thursday as global risk markets stabilized.",
  //     url: "https://www.marketwatch.com/story/bitcoin-prices-climb-as-crypto-recovers-heres-how-they-could-keep-rebounding-63af7e44",
  //     urlToImage: "https://images.mktw.net/im-278331/social",
  //     publishedAt: "2024-08-08T21:27:00Z",
  //     content:
  //       "Major cryptocurrencies continued to rebound on Thursday as global risk markets stabilized. \r\nBitcoin \r\nBTCUSD was up 8.6% to around $59,465 on Thursday afternoon, according to Dow Jones Market Data. … [+212 chars]",
  //   },
  //   {
  //     source: {
  //       id: "business-insider",
  //       name: "Business Insider",
  //     },
  //     author: "madams@businessinsider.com (Max Adams)",
  //     title:
  //       "Stock market today: Indexes climb as producer inflation comes in cool",
  //     description:
  //       "Stocks jumped after a cool PPI reading for July, setting the stage for consumer price inflation to show improvement when CPI is released Wednesday.",
  //     url: "https://markets.businessinsider.com/news/stocks/stock-market-today-ppi-inflation-economy-interest-rates-earnings-djt-2024-8",
  //     urlToImage:
  //       "https://i.insider.com/631f874489d2b3001894b2e3?width=1200&format=jpeg",
  //     publishedAt: "2024-08-13T13:36:10Z",
  //     content:
  //       "US stocks were up on Tuesday after the producer price index for July showed wholesale inflation rose less than expected.\r\nData from the Bureau of Labor Statistics showed that producer prices increase… [+2502 chars]",
  //   },
  //   {
  //     source: {
  //       id: null,
  //       name: "Schneier.com",
  //     },
  //     author: "Bruce Schneier",
  //     title:
  //       "Criminal Gang Physically Assaulting People for Their Cryptocurrency",
  //     description:
  //       "This is pretty horrific:\n…a group of men behind a violent crime spree designed to compel victims to hand over access to their cryptocurrency savings. That announcement and the criminal complaint laying out charges against St. Felix focused largely on a single…",
  //     url: "https://www.schneier.com/blog/archives/2024/07/criminal-gang-physically-assaulting-people-for-their-cryptocurrency.html",
  //     urlToImage: null,
  //     publishedAt: "2024-07-18T15:33:18Z",
  //     content:
  //       "This is pretty horrific:\r\n…a group of men behind a violent crime spree designed to compel victims to hand over access to their cryptocurrency savings. That announcement and the criminal complaint lay… [+685 chars]",
  //   },
  //   {
  //     source: {
  //       id: null,
  //       name: "Presse-citron",
  //     },
  //     author: "Romain Pomian-Bonnemaison",
  //     title:
  //       "Bitcoin : pourquoi sa valeur s’effondre à des niveaux abyssaux ce lundi",
  //     description:
  //       "Le cours du Bitcoin a connu sa pire journée ce lundi 6 août depuis la faillite de la bourse d'échange FTX.",
  //     url: "https://www.presse-citron.net/bitcoin-pourquoi-sa-valeur-seffondre-a-des-niveaux-abyssaux-ce-lundi/",
  //     urlToImage:
  //       "https://www.presse-citron.net/app/uploads/2024/03/Bitcoin-ETF.jpg",
  //     publishedAt: "2024-08-06T18:03:19Z",
  //     content:
  //       "C’était plutôt inattendu, même si les signaux macroéconomiques commençaient à s’accumuler : le cours du Bitcoin vient de s’effondrer jusqu’à -17% ce lundi – une volatilité devenue assez rare ces dern… [+3113 chars]",
  //   },
  //   {
  //     source: {
  //       id: null,
  //       name: "Quartz India",
  //     },
  //     author: "Vinamrata Chaturvedi",
  //     title: "Bitcoin miners are ditching crypto for the more profitable AI",
  //     description:
  //       "The Bitcoin mining reward has been reduced after Bitcoin halving, and that’s driving some companies to shift from Bitcoin mining centers to artificial intelligence data centers. Read more...",
  //     url: "https://qz.com/bitcoin-miners-ditching-crypto-for-more-profitable-ai-1851598502",
  //     urlToImage:
  //       "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/7ff9e7ac3c7fb9e724c50f58eb80000c.jpg",
  //     publishedAt: "2024-07-18T15:18:00Z",
  //     content:
  //       "The Bitcoin mining reward has been reduced after Bitcoin halving, and thats driving some companies to shift from Bitcoin mining centers to artificial intelligence data centers. \r\nIn a recent intervie… [+2345 chars]",
  //   },
  //   {
  //     source: {
  //       id: null,
  //       name: "Quartz India",
  //     },
  //     author: "Rocio Fabbro",
  //     title: "Bitcoin nears $70,000, boosted by Trump's Bitcoin promises",
  //     description:
  //       "Bitcoin hit its highest level since early June after presumptive Republican nominee Donald Trump made sweeping promises about the cryptocurrency at a conference over the weekend.Read more...",
  //     url: "https://qz.com/bitcoin-price-donald-trump-conference-crypto-1851607449",
  //     urlToImage:
  //       "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/24974ed28ac502f8b0761a599b1628e4.jpg",
  //     publishedAt: "2024-07-29T13:20:00Z",
  //     content:
  //       "Bitcoin hit its highest level since early June after presumptive Republican nominee Donald Trump made sweeping promises about the cryptocurrency at a conference over the weekend.\r\nThe price of the po… [+1829 chars]",
  //   },
  //   {
  //     source: {
  //       id: "die-zeit",
  //       name: "Die Zeit",
  //     },
  //     author: "ZEIT ONLINE: News -",
  //     title:
  //       "Börse: Bitcoin sackt deutlich ab - Kurs zuletzt bei 53.000 Dollar",
  //     description:
  //       "Hier finden Sie Informationen zu dem Thema „Börse“. Lesen Sie jetzt „Bitcoin sackt deutlich ab - Kurs zuletzt bei 53.000 Dollar“.",
  //     url: "https://www.zeit.de/news/2024-08/05/bitcoin-sackt-deutlich-ab-kurs-zuletzt-bei-53-000-dollar",
  //     urlToImage:
  //       "https://img.zeit.de/news/2024-08/05/bitcoin-sackt-deutlich-ab-kurs-zuletzt-bei-53-000-dollar-image-group/wide__1300x731",
  //     publishedAt: "2024-08-05T05:31:28Z",
  //     content:
  //       "Der Bitcoin verliert wegen der zunehmenden Risikoscheu an den Finanzmärkten kräftig an Boden. Der Kurs der ältesten und bekanntesten Kryptowährung sackte am Montag im frühen Handel bis auf 53.000 Dol… [+379 chars]",
  //   },
  //   {
  //     source: {
  //       id: "die-zeit",
  //       name: "Die Zeit",
  //     },
  //     author: "ZEIT ONLINE: News -",
  //     title:
  //       "Kryptowährungen: Bitcoin beschleunigt Talfahrt - Kurs unter 52.000 Dollar",
  //     description:
  //       "Hier finden Sie Informationen zu dem Thema „Kryptowährungen“. Lesen Sie jetzt „Bitcoin beschleunigt Talfahrt - Kurs unter 52.000 Dollar“.",
  //     url: "https://www.zeit.de/news/2024-08/05/bitcoin-beschleunigt-talfahrt-kurs-unter-52-000-dollar",
  //     urlToImage:
  //       "https://img.zeit.de/news/2024-08/05/bitcoin-beschleunigt-talfahrt-kurs-unter-52-000-dollar-image-group/wide__1300x731",
  //     publishedAt: "2024-08-05T06:48:07Z",
  //     content:
  //       "Der Bitcoin verliert mit einer allgemein trüben Stimmung an den Finanzmärkten weiter kräftig an Boden. Der Kurs der ältesten und bekanntesten Kryptowährung sackte am Montagmorgen auf der Handelsplatt… [+3297 chars]",
  //   },
  //   {
  //     source: {
  //       id: "die-zeit",
  //       name: "Die Zeit",
  //     },
  //     author: "ZEIT ONLINE: News -",
  //     title:
  //       "Kryptowährungen: Bitcoin nach «schwarzem Montag» wieder im Aufwind",
  //     description:
  //       'Hier finden Sie Informationen zu dem Thema „Kryptowährungen“. Lesen Sie jetzt „Bitcoin nach "schwarzem Montag" wieder im Aufwind“.',
  //     url: "https://www.zeit.de/news/2024-08/09/bitcoin-nach-schwarzem-montag-wieder-im-aufwind",
  //     urlToImage:
  //       "https://img.zeit.de/news/2024-08/09/bitcoin-nach-schwarzem-montag-wieder-im-aufwind-image-group/wide__1300x731",
  //     publishedAt: "2024-08-09T09:14:04Z",
  //     content:
  //       "Der Bitcoin und andere Kryptowährungen sind nach dem schwersten Kurseinbruch seit mehr als zwei Jahren am vergangenen Montag wieder auf dem Vormarsch. In der Nacht zum Freitag stieg der Bitcoin-Kurs … [+3117 chars]",
  //   },
  //   {
  //     source: {
  //       id: "die-zeit",
  //       name: "Die Zeit",
  //     },
  //     author: "ZEIT ONLINE: News -",
  //     title: "Kryptowährung: Nach Biden-Rückzug: Bitcoin steigt auf Monatshoch",
  //     description:
  //       "Hier finden Sie Informationen zu dem Thema „Kryptowährung“. Lesen Sie jetzt „Nach Biden-Rückzug: Bitcoin steigt auf Monatshoch“.",
  //     url: "https://www.zeit.de/news/2024-07/22/nach-biden-rueckzug-bitcoin-steigt-auf-monatshoch",
  //     urlToImage:
  //       "https://img.zeit.de/news/2024-07/22/nach-biden-rueckzug-bitcoin-steigt-auf-monatshoch-image-group/wide__1300x731",
  //     publishedAt: "2024-07-22T07:28:50Z",
  //     content:
  //       "Der Kurs des Bitcoin hat mit über 68.000 US-Dollar den höchsten Stand seit mehr als einem Monat erreicht. In der vergangenen Nacht wurde die älteste und bekannteste Kryptowährung auf der Handelsplatt… [+1352 chars]",
  //   },
  //   {
  //     source: {
  //       id: "die-zeit",
  //       name: "Die Zeit",
  //     },
  //     author: "ZEIT ONLINE: News -",
  //     title: "Kryptowährung: Handel mit Ethereum-ETFs startet in den USA",
  //     description:
  //       "Hier finden Sie Informationen zu dem Thema „Kryptowährung“. Lesen Sie jetzt „Handel mit Ethereum-ETFs startet in den USA“.",
  //     url: "https://www.zeit.de/news/2024-07/23/handel-mit-ethereum-etfs-startet-in-den-usa",
  //     urlToImage:
  //       "https://img.zeit.de/news/2024-07/23/handel-mit-ethereum-etfs-startet-in-den-usa-image-group/wide__1300x731",
  //     publishedAt: "2024-07-23T09:56:26Z",
  //     content:
  //       "Nachdem die US-Börsenaufsicht SEC den Weg für börsengehandelte Fonds (ETF) in der Kryptowährung Ether freigemacht hat, wird der Handel der Ethereum-ETFs ohne weitere Verzögerung beginnen. Fünf ETFs w… [+3230 chars]",
  //   },
  //   {
  //     source: {
  //       id: null,
  //       name: "ReadWrite",
  //     },
  //     author: "Alvin Hemedez",
  //     title:
  //       "5 Best Meme Coins to Buy and Hold – TodayTrader’s Top Picks for the Upcoming Bull Run",
  //     description:
  //       "As we enter August, we might see a positive trend in the crypto market, which could be a good sign… Continue reading 5 Best Meme Coins to Buy and Hold – TodayTrader’s Top Picks for the Upcoming Bull Run\nThe post 5 Best Meme Coins to Buy and Hold – TodayTrader…",
  //     url: "https://readwrite.com/5-best-meme-coins-to-buy-and-hold-todaytraders-top-picks-for-the-upcoming-bull-run/",
  //     urlToImage:
  //       "https://readwrite.com/wp-content/uploads/2024/07/best-five-meme-coins-to-buy-and-hold.jpg",
  //     publishedAt: "2024-07-31T09:16:56Z",
  //     content:
  //       "As we enter August, we might see a positive trend in the crypto market, which could be a good sign for meme coins and their potential for significant growth.\r\nWe’re analyzing the Bitcoin chart, focus… [+6229 chars]",
  //   },
  //   {
  //     source: {
  //       id: null,
  //       name: "heise online",
  //     },
  //     author: "Dr. Christopher Kunz",
  //     title:
  //       "Tumult am Finanzmarkt: Tech-Werte fallen, Neobroker mit Störungen",
  //     description:
  //       "Zu Wochenbeginn sind alle Finanzmarktplätze nervös, die großen Tech-Konzerne verlieren teilweise stark. Probleme mit Trading-Apps kommen da zur Unzeit.",
  //     url: "https://www.heise.de/news/Tumult-am-Finanzmarkt-Tech-Werte-fallen-Neobroker-mit-Stoerungen-9823860.html",
  //     urlToImage:
  //       "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/6/4/5/6/8/5/shutterstock_421955908-7a8e8d63ffd67f4d.jpg",
  //     publishedAt: "2024-08-05T09:27:00Z",
  //     content:
  //       "Nachdem Anleger bereits Ende vergangener Woche starke Kursverluste in vielen Bereichen hinnehmen mussten, geht der Kursrutsch nun weiter. Große Technologiewerte wie Nvidia, Google und Meta stehen wei… [+2521 chars]",
  //   },
  //   {
  //     source: {
  //       id: null,
  //       name: "9to5Mac",
  //     },
  //     author: "Ben Lovejoy",
  //     title:
  //       "AT&T hack: Carrier paid ransom for data; delayed public disclosure at request of FBI",
  //     description:
  //       "More details are coming to light about the AT&T hack, which saw the personal data of around 110M customers compromised – including records of who they called and texted.\n\n\n\nIt’s reported that the carrier made a Bitcoin ransom payment in return for the hacker …",
  //     url: "https://9to5mac.com/2024/07/15/att-hack-ransom-fbi/",
  //     urlToImage:
  //       "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2024/07/ATT-hack-–-Bitcoin-ransom-paid.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
  //     publishedAt: "2024-07-15T11:05:31Z",
  //     content:
  //       "More details are coming to light about the AT&amp;T hack, which saw the personal data of around 110M customers compromised including records of who they called and texted.\r\nIt’s reported that the car… [+2860 chars]",
  //   },
  //   {
  //     source: {
  //       id: null,
  //       name: "Torrentfreak.com",
  //     },
  //     author: "Ernesto Van der Sar",
  //     title:
  //       "German State Moves $3 Billion in Bitcoin Seized From Pirate Site Operators",
  //     description:
  //       "The German state of Saxony has moved the Bitcoin it seized from the alleged operator of long-defunct pirate site Movie2k. The haul of almost 50,000 bitcoins is worth over $3 billion at today’s exchange rate. The cryptocurrency was sent to exchanges and market…",
  //     url: "https://torrentfreak.com/german-state-moves-3-billion-in-bitcoin-seized-from-pirate-site-operators-240716/",
  //     urlToImage: "https://torrentfreak.com/images/bitcoin-featured.jpg",
  //     publishedAt: "2024-07-16T20:28:06Z",
  //     content:
  //       "At the start of the 2010s, Movie2k was one of the most visited sites on the web. \r\nThe site was an early adopter of pirate streaming and at its peak, secured a spot among the twenty most-visited webs… [+3388 chars]",
  //   },
  //   {
  //     source: {
  //       id: null,
  //       name: "ReadWrite",
  //     },
  //     author: "Alvin Hemedez",
  //     title: "dogwifhat Price Prediction – Will WIF Hit $10 by Year’s End?",
  //     description:
  //       "With dogwifhat (WIF) price battling bearish pressure, experts are predicting whether WIF will reach $10 by the end of the… Continue reading dogwifhat Price Prediction – Will WIF Hit $10 by Year’s End?\nThe post dogwifhat Price Prediction – Will WIF Hit $10 by …",
  //     url: "https://readwrite.com/dogwifhat-price-prediction-will-wif-hit-10-by-years-end/",
  //     urlToImage:
  //       "https://readwrite.com/wp-content/uploads/2024/07/dogwifhat-price-prediction.jpg",
  //     publishedAt: "2024-07-25T18:25:00Z",
  //     content:
  //       "With dogwifhat (WIF) price battling bearish pressure, experts are predicting whether WIF will reach $10 by the end of the year or merely sustain its current price of $2.51.\r\nCurrently ranked as the 1… [+3768 chars]",
  //   },
  //   {
  //     source: {
  //       id: null,
  //       name: "ReadWrite",
  //     },
  //     author: "Alvin Hemedez",
  //     title:
  //       "$99BTC Presale Enters Final Stage – Last Chance to Invest in a Platform Combining Education with Earnings",
  //     description:
  //       "The 99Bitcoins presale is in its final stages, concluding on August 6th at 2 PM UTC. This Learn-to-Earn project incentivizes… Continue reading $99BTC Presale Enters Final Stage – Last Chance to Invest in a Platform Combining Education with Earnings\nThe post $…",
  //     url: "https://readwrite.com/99btc-presale-enters-final-stage-last-chance-to-invest-in-a-platform-combining-education-with-earnings/",
  //     urlToImage:
  //       "https://readwrite.com/wp-content/uploads/2024/07/99btc-presale-enters-final-stage-last-chance-to-invest-in-a-platform-combining-education-with-earnings.jpg",
  //     publishedAt: "2024-07-31T17:52:39Z",
  //     content:
  //       "The 99Bitcoins presale is in its final stages, concluding on August 6th at 2 PM UTC. This Learn-to-Earn project incentivizes users to gain cryptocurrency knowledge by rewarding them.\r\nThis innovative… [+4198 chars]",
  //   },
  //   {
  //     source: {
  //       id: "business-insider",
  //       name: "Business Insider",
  //     },
  //     author: "Haven Orecchio-Egresitz",
  //     title:
  //       "As Ryan Salame stares down years in prison for his role in FTX, he's spending his time doing what he loves: posting",
  //     description:
  //       "As the FTX insider recovers from a dog attack that delayed his prison sentence, he's posting on X about Sam Bankman-Fried's trial and Donald Trump.",
  //     url: "https://www.businessinsider.com/ryan-salame-posting-ftx-crypto-trump-sbf-awaiting-prison-2024-8",
  //     urlToImage:
  //       "https://i.insider.com/66aba1ca1a227600e633758c?width=1200&format=jpeg",
  //     publishedAt: "2024-08-02T11:20:02Z",
  //     content:
  //       "Ryan Salame is returned to X ahead of his prison sentence.REUTERS/Brendan McDermid\r\n\u003Cul\u003E\u003Cli\u003ERyan Salame was sentenced to 7½ years in prison for his role in the collapse of FTX.\u003C/li\u003E\u003Cli\u003EAwaiting priso… [+11057 chars]",
  //   },
  //   {
  //     source: {
  //       id: null,
  //       name: "Faz.net",
  //     },
  //     author: "Franz Nestler",
  //     title: "Bitcoin stürzt auf weniger als 50.000 Dollar ab",
  //     description:
  //       "Die Sorgen um die Weltwirtschaft belasten auch die Digitalwährungen. Die Angst ist groß, ein Ende ist nicht in Sicht.",
  //     url: "https://www.faz.net/aktuell/finanzen/bitcoin-stuerzt-auf-weniger-als-50-000-dollar-ab-hoffnungen-und-unsicherheiten-19901110.html",
  //     urlToImage:
  //       "https://media0.faz.net/ppmedia/aktuell/finanzen/675558337/1.9901134/facebook_teaser_fplus/gibt-es-heute-wieder-billiger.jpg",
  //     publishedAt: "2024-08-05T14:00:37Z",
  //     content:
  //       "Eigentlich ist es bislang ein gutes Jahr für Digitalwährungen gewesen: Die ersten börsennotierten Indexfonds wurden auf den Markt gebracht, infolge derer die Kurse der Digitalwährungen neue Rekorde f… [+357 chars]",
  //   },
  //   {
  //     source: {
  //       id: null,
  //       name: "Quartz India",
  //     },
  //     author: "Vinamrata Chaturvedi",
  //     title:
  //       "Bitcoin, Bitcoin Cash, Ether, and more: Top crypto to watch this week",
  //     description:
  //       "This week will be interesting for the crypto market, as former President and Republican nominee Donald Trump has promised to establish a strategic national Bitcoin reserve if he is elected president in November. In addition, the Fed’s meeting is due on Wednes…",
  //     url: "https://qz.com/top-cryptocurrency-to-watch-this-week-1851607462",
  //     urlToImage:
  //       "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/1d04a1df983e25ecdb95418dc60abab5.jpg",
  //     publishedAt: "2024-07-29T14:00:00Z",
  //     content:
  //       "Bitcoin Cash (BCH) was created in 2017 after the Bitcoin hard fork. A hard fork is a phenomenon in the blockchain world that happens when the community makes major changes to the blockchain network a… [+526 chars]",
  //   },
  // ];

  static defaultProps = {
    car: "tesla",
    pagesize: 20,
    category: "general",
    country: "in",
  };

  static propType = {
    car: PropTypes.string,
    pagesize: PropTypes.number,
    category: PropTypes.string,
    country: PropTypes.string,
  };

  constructor() {
    super();
    this.state = {
      // articles:this.articles;
      articles: [],
      loading: false,
      page: 1,
    };
  }

  async componentDidMount() {
    // let url = `https://newsapi.org/v2/everything?q=${this.prpps.car} &from=2024-07-16&sortBy=publishedAt&apiKey=bca1dff12dc1447d94950e630ca17478&page${this.page}&pageSize=${this.props.pagesize}`;

    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ee24e39f298a4011805c6e0c70ec9df5&page=${this.page}&pageSize=${this.props.pagesize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let result = await data.json();
    console.log(result.totalResults);
    this.setState({
      articles: result.articles,
      totalResults: result.totalResults,
      loading: false,
    });
  }

  previewbtn = async () => {
    console.log("preview");
    // let url = `https://newsapi.org/v2/everything?q=${
    //   this.props.car
    // }&from=2024-07-16&sortBy=publishedAt&apiKey=bca1dff12dc1447d94950e630ca17478&page=${
    //   this.state.page - 1
    // }&pageSize=${this.props.pagesize}`;
    let url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&category=${
      this.props.category
    }&apiKey=ee24e39f298a4011805c6e0c70ec9df5&page=${
      this.state.page - 1
    }&pageSize=${this.props.pagesize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let result = await data.json();
    console.log(result);
    this.setState({
      page: this.state.page - 1,
      articles: result.articles,
      loading: false,
    });
  };

  nextbtn = async () => {
    console.log("next");
    if (
      !(
        this.state.page + 1 >
        Math.ceil(this.state.totalResults / this.props.pagesize)
      )
    ) {
      // let url = `https://newsapi.org/v2/everything?q=${
      //   this.props.car
      // }&from=2024-07-16&sortBy=publishedAt&apiKey=bca1dff12dc1447d94950e630ca17478&page=${
      //   this.state.page + 1
      // }&pageSize=${this.props.pagesize}`;
      let url = `https://newsapi.org/v2/top-headlines?country=${
        this.props.country
      }&category=${
        this.props.category
      }&apiKey=ee24e39f298a4011805c6e0c70ec9df5&page=${
        this.state.page + 1
      }&pageSize=${this.props.pagesize}`;
      this.setState({ loading: true });
      let data = await fetch(url);
      let result = await data.json();
      console.log(result);
      this.setState({
        page: this.state.page + 1,
        articles: result.articles,
        loading: false,
      });
    }
  };

  render() {
    return (
      <div className="container my-3">
        <h2 className="text-center my-4">NewsMonkey - Top Headlines</h2>
        {this.state.loading && <Spinner />}
        <div className="row">
          {!this.state.loading &&
            this.state.articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title.slice(0, 45) : ""}
                    description={
                      element.description
                        ? element.description.slice(0, 80)
                        : ""
                    }
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                  />
                </div>
              );
            })}
        </div>
        <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.previewbtn}
          >
            &larr; Previous
          </button>
          <button
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pagesize)
            }
            type="button"
            className="btn btn-dark"
            onClick={this.nextbtn}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
