-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 19, 2022 at 02:41 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `blog`
--

-- --------------------------------------------------------

--
-- Table structure for table `blogdata`
--

CREATE TABLE `blogdata` (
  `id` int(11) NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_bin NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_bin NOT NULL,
  `post` text COLLATE utf8mb4_bin NOT NULL,
  `category` varchar(15) COLLATE utf8mb4_bin NOT NULL,
  `user` varchar(15) COLLATE utf8mb4_bin NOT NULL,
  `status` varchar(20) COLLATE utf8mb4_bin NOT NULL,
  `featured` varchar(15) COLLATE utf8mb4_bin NOT NULL,
  `archive_time` varchar(255) COLLATE utf8mb4_bin NOT NULL,
  `post_time` varchar(255) COLLATE utf8mb4_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

--
-- Dumping data for table `blogdata`
--

INSERT INTO `blogdata` (`id`, `name`, `title`, `post`, `category`, `user`, `status`, `featured`, `archive_time`, `post_time`) VALUES
(1, 'polkabear', 'Tom Brady just chucked another Microsoft Surface tablet', '<p>Tom Brady might as well have been practicing his touchdown spike when he whipped a Microsoft Surface tablet into the ground during the Tampa Bay Buccaneers game against the Saints on Sunday night. The quarterback was visibly frustrated following an incomplete pass, tossed his helmet onto the field, and stormed back to the sidelines where he chucked the tablet.</p><p><br></p><p>The Buccs were losing when Brady threw the tablet, but they ended up coming back and defeating the Saints 20-10. This isn’t Brady’s first documented case of tablet abuse — he&nbsp;<a href=\"https://www.theverge.com/2021/12/20/22846124/tom-brady-destroy-microsoft-surface-tablet\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: inherit;\">threw the thing so hard</a>&nbsp;against the bench after losing a Saints game last year that it actually&nbsp;<em>bounced</em>.</p><p><br></p><p>Microsoft Surface chief Panos Panay responded to the incident on his&nbsp;<a href=\"https://www.instagram.com/stories/panospanay/2930213442548921162/?igshid=YmMyMTA2M2Y%3D\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: inherit;\">Instagram story</a>&nbsp;this time around, saying “Rest assured the Surface should be just fine.” I’m not so sure about that, Panos. The last tablet we saw Brady throw was destroyed, and we didn’t get to see how it fared after this temper tantrum.</p><p class=\"ql-align-center\"><br></p><p>The Surface tablet has become a punching bag for players and coaches alike since they were&nbsp;<a href=\"https://www.theverge.com/2014/12/9/7359503/microsoft-surface-nfl-demo-hands-on\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: inherit;\">first introduced to the NFL in 2014</a>. Green Bay Packers quarterback&nbsp;<a href=\"https://www.theverge.com/2015/11/8/9693380/the-packers-are-terrible-aaron-rodgers-surface\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: inherit;\">Aaron Rodgers was one of the first</a>&nbsp;to get caught on camera tossing the tablet, and even Patriots coach&nbsp;<a href=\"https://www.theverge.com/2016/10/2/13139174/bill-belichick-patriots-microsoft-surface\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: inherit;\">Bill Belichick smashed it on the sidelines</a>, albeit for reasons other than gameplay (he&nbsp;<a href=\"https://www.theverge.com/2016/10/18/13320664/bill-belichick-patriots-microsoft-surface-tablet-nfl\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: inherit;\">just couldn’t stand using tablets</a>).</p><p><br></p><p><a href=\"https://operations.nfl.com/gameday/technology/sideline-of-the-future/\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: inherit;\">NFL’s website</a>&nbsp;says Microsoft designed the Surface tablets specifically for football games, ensuring they can “stand up to the occasional drop.” Maybe Microsoft should make sure they withstand a throw from a quarterback’s throwing arm, too.</p><p><br></p><p><strong><em>Correction September 18th, 6:16PM ET:</em></strong><em>&nbsp;A previous version of the article stated Bill Belichick was the former coach of the Patriots, when he is the current coach. We regret the error.</em></p>', 'Technology', 'Admin', 'Approved', 'Featured', 'January 2021', 'January 15, 2022'),
(2, 'Sheharyar Butt', 'Email woes gotcha worried? How to fix problems and fend off attacks', '<h3>Email has become a major vector for attackers, prompting ISPs to tighten up their defenses. That, in turn, may be causing some issues for behind-the-times email users. Here\'s how to sort things out.</h3><p>Email is one of those tools people keep saying will one day die and be replaced with a better communication platform. And yet, because it is nearly universal and works across platforms so well, it\'s still here.</p><p>But working across platforms is not the same as working well for everyone all the time. I\'ve seen a lot of concern about the rising number of email-based attacks and a lot of complaints from people having email trouble in general — with many blaming Outlook or some other client for recent problems.</p><p>In fact, the underlying cause might be more straightforward: ISPs have been moving to more modern authentication processes (to fend off attacks) and some email clients can\'t handle the changes.&nbsp;Case in point: Microsoft, which is slowly but surely disabling&nbsp;<a href=\"https://www.microsoft.com/en-us/microsoft-365/blog/2022/09/01/microsoft-retires-basic-authentication-in-exchange-online/\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(163, 30, 34);\">basic authentication</a>&nbsp;and moving to better levels of protection. (If your mail platform still uses basic authentication, attackers are almost certainly trying to crack your passwords with password spraying and harvested credentials.)</p><p><br></p><h2><strong>Email problem-solving 101</strong></h2><p>Generally speaking, if you\'re having issues accessing email using the same app you’ve always (and the same password), the first thing to do is double-check your password. A simple way to do this is log into the web version of your email platform. If you can get in, you have the right credentials.&nbsp;I’ve seen instances where an ISP has changed their requirements for password complexity and it’s only by&nbsp;logging in online that I find out about this fact. (This would also be a good time to&nbsp;consider adding two-factor authentication to your personal email account, especially those used to authenticate financial institutions.)</p><p>You might also find that you\'re actually using older versions of Outlook that don’t support modern authentication. While Microsoft 365 may have&nbsp;<a href=\"https://techcommunity.microsoft.com/t5/microsoft-365-blog/new-minimum-outlook-for-windows-version-requirements-for/ba-p/2684142\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(163, 30, 34);\">dropped support for versions</a>&nbsp;prior to 2013\'s Service Pack 1, other mail servers might have continued to support these older platforms. Your ISP may have changed email requirements — and you missed the memo.</p><p>If you\'re still using Outlook, always check whether<a href=\"https://support.microsoft.com/en-us/office/remove-or-delete-an-email-account-from-outlook-1fa900ae-6dc8-468c-b754-10292f7ee47a\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(163, 30, 34);\">&nbsp;removing your email&nbsp;account</a>&nbsp;and setting it up again fresh is enough to get your client to kick off stronger authentication processes. If your account is already in iMAP format, you won’t lose any email. If that doesn’t work, consider upgrading to either a newer version of Outlook, a different email client all together, or to a different Office platform entirely.&nbsp;</p>', 'Opinion', 'Admin', 'Approved', '', 'January 2021', 'January 15, 2022'),
(6, 'polkabear', 'iPhone 14 Pro users report camera shakiness and grinding noise when using third-party apps', '<p>Users who just purchased a new&nbsp;<a href=\"https://www.theverge.com/23351948/apple-iphone-14-pro-review\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: inherit;\">iPhone 14 Pro or Pro Max</a>&nbsp;might experience a strange issue: uncontrollable lens movement (<a href=\"https://9to5mac.com/2022/09/18/iphone-14-pro-camera-module-shaking-and-rattling/\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: inherit;\">via&nbsp;<em>9to5Mac</em></a>). As demonstrated in videos and complaints&nbsp;<a href=\"https://www.reddit.com/r/iphone/comments/xfs2y3/iphone_14_pro_camera_shake_snapchat/\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: inherit;\">posted</a>&nbsp;<a href=\"https://www.reddit.com/r/applehelp/comments/xgurg4/iphone_14pro_camera_shaking_sometimes_and_third/\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: inherit;\">across</a>&nbsp;<a href=\"https://twitter.com/Mxhari1/status/1571153291140272129?s=20&amp;t=bp9TYsOw4yC35wU8GGZQRg\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: inherit;\">the</a>&nbsp;<a href=\"https://twitter.com/ChrisOcean24/status/1571279385658855424?s=20&amp;t=bp9TYsOw4yC35wU8GGZQRg\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: inherit;\">web</a>, some users noticed that their camera shakes and even makes an awful grinding noise when opening the camera on a third-party app, like Instagram, Snapchat, or TikTok.</p><p><br></p><p>Apple YouTuber Luke Miani&nbsp;<a href=\"https://twitter.com/LukeMiani/status/1570913076320567299?s=20&amp;t=mZnVrKHFPl03kra_lqE-tw\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: inherit;\">posted a video to Twitter</a>&nbsp;showing how his iPhone 14 Pro Max camera vibrates when using Snapchat, making the photo completely blurry. You can also clearly hear a buzzing or rattling sound coming from the lens that&nbsp;<em>really</em>&nbsp;doesn’t sound good.</p><p><br></p><iframe class=\"ql-video\" frameborder=\"0\" allowfullscreen=\"true\" src=\"https://platform.twitter.com/embed/Tweet.html?dnt=false&amp;embedId=twitter-widget-0&amp;features=eyJ0ZndfdGltZWxpbmVfbGlzdCI6eyJidWNrZXQiOlsibGlua3RyLmVlIiwidHIuZWUiLCJ0ZXJyYS5jb20uYnIiLCJ3d3cubGlua3RyLmVlIiwid3d3LnRyLmVlIiwid3d3LnRlcnJhLmNvbS5iciJdLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X2hvcml6b25fdGltZWxpbmVfMTIwMzQiOnsiYnVja2V0IjoidHJlYXRtZW50IiwidmVyc2lvbiI6bnVsbH0sInRmd190d2VldF9lZGl0X2JhY2tlbmQiOnsiYnVja2V0Ijoib24iLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X3JlZnNyY19zZXNzaW9uIjp7ImJ1Y2tldCI6Im9uIiwidmVyc2lvbiI6bnVsbH0sInRmd19jaGluX3BpbGxzXzE0NzQxIjp7ImJ1Y2tldCI6ImNvbG9yX2ljb25zIiwidmVyc2lvbiI6bnVsbH0sInRmd190d2VldF9yZXN1bHRfbWlncmF0aW9uXzEzOTc5Ijp7ImJ1Y2tldCI6InR3ZWV0X3Jlc3VsdCIsInZlcnNpb24iOm51bGx9LCJ0Zndfc2Vuc2l0aXZlX21lZGlhX2ludGVyc3RpdGlhbF8xMzk2MyI6eyJidWNrZXQiOiJpbnRlcnN0aXRpYWwiLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X2V4cGVyaW1lbnRzX2Nvb2tpZV9leHBpcmF0aW9uIjp7ImJ1Y2tldCI6MTIwOTYwMCwidmVyc2lvbiI6bnVsbH0sInRmd19kdXBsaWNhdGVfc2NyaWJlc190b19zZXR0aW5ncyI6eyJidWNrZXQiOiJvbiIsInZlcnNpb24iOm51bGx9LCJ0ZndfdHdlZXRfZWRpdF9mcm9udGVuZCI6eyJidWNrZXQiOiJvZmYiLCJ2ZXJzaW9uIjpudWxsfX0%3D&amp;frame=false&amp;hideCard=false&amp;hideThread=false&amp;id=1570913076320567299&amp;lang=en&amp;origin=https%3A%2F%2Fwww.theverge.com%2F2022%2F9%2F18%2F23359564%2Fiphone-14-cameras-shaking-grinding-sounds-third-party-photo-apps-apple&amp;sessionId=3b97d04491f8c04067b04aa30110cda1d5657018&amp;siteScreenName=verge&amp;theme=light&amp;widgetsVersion=1bfeb5c3714e8%3A1661975971032&amp;width=550px\"></iframe><p><br></p><p>So far, it doesn’t look like the bug affects the iPhone’s Camera app, which might mean the issue’s related to the third-party app software rather than Apple’s hardware. Instagram, Snapchat, and TikTok may need to push an update specifically for the iPhone 14 Pro. Even still, we don’t know what kind of damage (if any) this does to the camera itself, which is a little scary when we’re talking about a $1,000 and up device.</p><p><br></p><p><em>The Verge</em>&nbsp;reached out to Apple to see if it\'s aware of the issue and also asked Instagram, Snapchat, and TikTok if they’re working on a possible update to fix this. We’ll update this article if we hear back.</p>', 'Technology', 'Admin', 'Approved', '', 'February 2021', 'February 15, 2021'),
(7, 'polkabear', 'America is (almost) ready for Apple Reality distortion', '<h2><strong>A lot of Americans are already interested</strong></h2><p>When Reality One appears, it will hit a US market that’s already interested in VR headsets, according to fresh research from&nbsp;<a href=\"https://arriscomposites.com/americas-interest-in-virtual-and-augmented-reality/\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(163, 30, 34);\">Arris Composites</a>. That research makes numerous claims based on a survey of 1,000 people in America and confirms that at least at this point, gaming and entertainment dominate.</p><p>(Apple watchers may also recall that Apple’s former advanced materials lead, Simon Lancaster, left Apple&nbsp;<a href=\"https://www.businesswire.com/news/home/20191122005108/en/Simon-Lancaster-Former-Advanced-Materials-Lead-at-Apple-Joins-Arris-Composites-to-Unlock-Future-of-Consumer-Products\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(163, 30, 34);\">to join Arris Composites</a>&nbsp;in 2019 but he was later sued by Cupertino over&nbsp;<a href=\"https://9to5mac.com/2021/10/08/ex-apple-employee-under-criminal-investigation/\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(163, 30, 34);\">leaked trade secrets</a>&nbsp;concerning Project X.)</p><p><br></p><p>The research also points out that 29% of the people surveyed plan to buy a VR headset next year, though price is a big obstacle to mass deployment. It seems 67% see these things as being too expensive. Given that gaming has been&nbsp;<a href=\"https://www.applemust.com/apple-really-is-printing-money-with-pokemon-go/\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(163, 30, 34);\">the main push</a>&nbsp;of VR solutions brought to market so far, it is worth noting that 51% of people haven’t used AR yet. Those who have are using them for Pokemon, Street View, shopping and Snapchat, the report claims.</p><p>Looking forward, 71% of the survey group said they expect AR to become part of daily life in the next few years, while just 57% feel the same way about virtual reality. And over half of consumers expect to buy an AR/VR headset in the next three years.</p><h2><strong>What does this mean for Apple?</strong></h2><p>Apple has been talking up augmented reality for years. It has developed tools with which to create mixed-reality experiences and continues to&nbsp;<a href=\"https://www.computerworld.com/article/3644413/how-will-we-use-apples-ar-glasses-and-with-what-ui.html\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(163, 30, 34);\">innovate in user interface design</a>&nbsp;to enable&nbsp;<a href=\"https://www.computerworld.com/article/3669420/has-apple-invented-one-ring-to-rule-them-all.html\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(163, 30, 34);\">non-traditional human/computer interaction</a>. With help from machine intelligence, particularly machine vision intelligence, mouse, keyboard, touch and gesture all figure in its journey to find&nbsp;<a href=\"https://www.computerworld.com/article/3663036/apple-isnt-saying-too-much-but-ar-is-everywhere-at-wwdc.html\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(163, 30, 34);\">a new UI for Reality</a>.</p><p>During this time, the market has evolved. Consumers,&nbsp;<a href=\"https://www.computerworld.com/article/3298298/why-apple-s-ar-glasses-will-transform-your-enterprise.html\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(163, 30, 34);\">enterprises</a>, and&nbsp;<a href=\"https://www.applemust.com/apple-plans-an-ar-platform-to-deliver-next-gen-applications/\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(163, 30, 34);\">developers</a>&nbsp;are thinking about how these technologies can work for them. The existing installed base of AR/VR solutions is primarily defined as being for gaming devices. Perhaps Apple’s biggest competitor in this space, Meta’s initial attempts at creating immersive environments have&nbsp;<a href=\"https://twitter.com/TheAndrewNadeau/status/1559651433884049409?s=20&amp;t=AJajivoG3pVZ2USRHJ8RQQ\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(163, 30, 34);\">attracted ridicule</a>, but that company seems set on introducing the next iteration&nbsp;<a href=\"https://www.cnbc.com/2022/08/25/meta-to-debut-new-vr-headset-in-october-zuckerberg-tells-rogan.html\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(163, 30, 34);\">Project Cambria VR headset in October</a>, maintaining its go-to-market lead on Cupertino.</p><p><br></p><p>At the same time, for one of America’s favorite tech company’s (which Apple&nbsp;<a href=\"https://today.yougov.com/ratings/technology/popularity/tech-brands/all\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(163, 30, 34);\">certainly is</a>) the inflection point has arrived. Consumers are aware of mixed reality. They are developing an understanding about it, curious to explore it, and are ready to be introduced to ways of using these technologies they may not have experienced before. There will be some resistance, but early adopters will be looking for finessed articulation of Apple’s technology brand and searching for unique new uses and experiences</p>', 'Opinion', 'Admin', 'Approved', '', 'February 2021', 'February 15, 2021'),
(11, 'Sheharyar Butt', 'Ten Free Things in Napa Valley', '<p><span style=\"color: rgb(85, 85, 85);\">Yes, Napa Valley is one of the most luxurious luxury destinations in the world. That doesn’t mean everything here costs a pretty penny. The truth is that&nbsp;</span><strong style=\"color: rgb(85, 85, 85);\">Napa County boasts a host of destinations and activities that are totally free.</strong><span style=\"color: rgb(85, 85, 85);\">&nbsp;Here are our top 10.</span></p><p><strong style=\"color: rgb(85, 85, 85);\"><em><span class=\"ql-cursor\">﻿</span>Look up</em></strong></p><p><span style=\"color: rgb(85, 85, 85);\">Depending on the time of year,&nbsp;</span><a href=\"https://nam12.safelinks.protection.outlook.com/?url=https%!A(MISSING)%!F(MISSING)%!F(MISSING)www.visitnapavalley.com%!F(MISSING)things-to-do%!F(MISSING)hot-air-balloons%!F(MISSING)&amp;data=05%!C(MISSING)01%!C(MISSING)%!C(MISSING)e614e58d4f984004aeaf08da984abce6%!C(MISSING)84df9e7fe9f640afb435aaaaaaaaaaaa%!C(MISSING)1%!C(MISSING)0%!C(MISSING)637989744022828795%!C(MISSING)Unknown%!C(MISSING)TWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiLCJBTiI6Ik1haWwiLCJXVCI6Mn0%!D(MISSING)%!C(MISSING)3000%!C(MISSING)%!C(MISSING)%!C(MISSING)&amp;sdata=Qe3gnNO%!B(MISSING)SY2Y7N64TLj%!F(MISSING)wacNdfo7XttuDRU9tHpxhrE%!D(MISSING)&amp;reserved=0\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 122, 183);\">hot-air balloons</a><span style=\"color: rgb(85, 85, 85);\">&nbsp;are a common sight in the skies above the Napa Valley. The good news: Ogling at these giant floating orbs is totally free. Most balloons leave right around sunrise to get aloft before the wind picks up. This means it’s probably best to hit up a local independent coffee shop and find a flat and open space for your watch party.</span></p><p><strong style=\"color: rgb(85, 85, 85);\"><em>Observing the Oxbow</em></strong></p><p><span style=\"color: rgb(85, 85, 85);\">Napa’s&nbsp;</span><a href=\"https://nam12.safelinks.protection.outlook.com/?url=https%!A(MISSING)%!F(MISSING)%!F(MISSING)www.visitnapavalley.com%!F(MISSING)blog%!F(MISSING)post%!F(MISSING)top-free-things-to-do-in-napa-valley%!F(MISSING)%!F(MISSING)utm_source%!D(MISSING)Visit%!B(MISSING)Napa%!B(MISSING)Valley%!B(MISSING)Newsletter%!u(MISSING)tm_campaign%!D(MISSING)9e63f9b3f3-EMAIL_CAMPAIGN_2021_12c%!u(MISSING)tm_medium%!D(MISSING)email%!u(MISSING)tm_term%!D(MISSING)0_46a2605913-9e63f9b3f3-158305553&amp;data=05%!C(MISSING)01%!C(MISSING)%!C(MISSING)e614e58d4f984004aeaf08da984abce6%!C(MISSING)84df9e7fe9f640afb435aaaaaaaaaaaa%!C(MISSING)1%!C(MISSING)0%!C(MISSING)637989744022828795%!C(MISSING)Unknown%!C(MISSING)TWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiLCJBTiI6Ik1haWwiLCJXVCI6Mn0%!D(MISSING)%!C(MISSING)3000%!C(MISSING)%!C(MISSING)%!C(MISSING)&amp;sdata=JV0K9snlqxf1hxJClVsO74AFtFKHKEDYKV0v%!B(MISSING)TX%!F(MISSING)tbY%!D(MISSING)&amp;reserved=0\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 122, 183);\">Oxbow Public Market&nbsp;</a><span style=\"color: rgb(85, 85, 85);\">essentially put public markets on the map; though others in the United States came before it, no others have quite perfected the luxury angle. While food and trinkets at the Oxbow can be expensive, wandering around to investigate the goodies and wares doesn’t cost a cent. To experience peak rush hour, plan to visit around lunchtime on a weekend.</span></p><p><strong style=\"color: rgb(85, 85, 85);\"><em>Critter-watching in delta</em></strong></p><p><span style=\"color: rgb(85, 85, 85);\">Birding is the name of the game at Wetlands Edge Park in American Canyon, the southernmost city in the entire county. The park comprises roughly five miles of trails in all, including dirt paths that parallel the Napa River where it meets San Pablo Bay. In mornings, usually right around sunrise, the waters are teeming with herons and other birds. Be sure to bring a camera.</span></p><p><br></p><p><span style=\"color: rgb(85, 85, 85);\">Napa Valley will aways be my favorite. I started visiting in the 60s, when we were invited by Allied Growers to visit some of the wineries they owned, such as BV, and Inglenook. Back then, tastings, even dinners, were FREE!! My how things have changed. I do enjoy other wine regions, such as the Central Coast, New Zealand, Mendoza, Bordeaux, Champagne, Willamette Valley, Sonoma, Loire, Chile, Central Washington, and even Madera-Fresno. But one area I did not enjoy was Temecula, quite overrated. Several news articles have emphasized how expensive Napa Valley has become. Wine tasting fees hover around $100, often more for upscale places. Add in hotel, meals, wine purchases and gas, resulting in a very expensive weekend. Note: I have only done #9, I have my work cut out for me!!!</span></p>', 'Travel', 'Admin', 'Approved', '', 'May 2021', 'May 15, 2021'),
(12, 'polkabear', 'The Dynamic Island might come to all iPhone 15 models', '<p><a href=\"https://www.theverge.com/23352282/iphone-14-review-apple\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: inherit;\">The iPhone 14</a>&nbsp;has only been out for a few days, but that isn’t stopping the rumor mill from churning out predictions about Apple’s&nbsp;<em>next</em>&nbsp;iPhone. Supply chain analyst Ross Young&nbsp;<a href=\"https://twitter.com/DSCCRoss/status/1571494237153406976\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: inherit;\">says on Twitter</a>&nbsp;that he expects Apple to include the Dynamic Island —&nbsp;<a href=\"https://www.theverge.com/23341555/apple-iphone-14-pro-max-notch-dynamic-island-fix\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: inherit;\">the notch successor</a>&nbsp;that currently only comes on the&nbsp;<a href=\"https://www.theverge.com/23351948/apple-iphone-14-pro-review\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: inherit;\">iPhone 14 Pro and Pro Max</a>&nbsp;— on all iPhone 15 models, not just the Pro variations (<a href=\"https://www.macrumors.com/2022/09/18/dynamic-island-all-iphone-15-models-rumor/\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: inherit;\">via&nbsp;<em>MacRumors</em></a>).</p><p><br></p><p>If true, this would make the Dynamic Island the standard across all new iPhones, allowing it to fully replace the notch that Apple first introduced with the&nbsp;<a href=\"https://www.theverge.com/2017/10/31/16579748/apple-iphone-x-review\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: inherit;\">iPhone X</a>&nbsp;in 2017 (at least until Apple comes up with another design). Young also indicates that the base iPhone 15 still won’t come with an 120Hz LTPO display that enables the&nbsp;<a href=\"https://www.theverge.com/23320405/apple-iphone-14-pro-max-always-on-display-screen-feature\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: inherit;\">iPhone 14 Pro’s always-on display</a>&nbsp;and snappy ProMotion feedback, citing that the “supply chain can’t support it.”</p><p><br></p><iframe class=\"ql-video\" frameborder=\"0\" allowfullscreen=\"true\" src=\"https://platform.twitter.com/embed/Tweet.html?dnt=false&amp;embedId=twitter-widget-0&amp;features=eyJ0ZndfdGltZWxpbmVfbGlzdCI6eyJidWNrZXQiOlsibGlua3RyLmVlIiwidHIuZWUiLCJ0ZXJyYS5jb20uYnIiLCJ3d3cubGlua3RyLmVlIiwid3d3LnRyLmVlIiwid3d3LnRlcnJhLmNvbS5iciJdLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X2hvcml6b25fdGltZWxpbmVfMTIwMzQiOnsiYnVja2V0IjoidHJlYXRtZW50IiwidmVyc2lvbiI6bnVsbH0sInRmd190d2VldF9lZGl0X2JhY2tlbmQiOnsiYnVja2V0Ijoib24iLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X3JlZnNyY19zZXNzaW9uIjp7ImJ1Y2tldCI6Im9uIiwidmVyc2lvbiI6bnVsbH0sInRmd19jaGluX3BpbGxzXzE0NzQxIjp7ImJ1Y2tldCI6ImNvbG9yX2ljb25zIiwidmVyc2lvbiI6bnVsbH0sInRmd190d2VldF9yZXN1bHRfbWlncmF0aW9uXzEzOTc5Ijp7ImJ1Y2tldCI6InR3ZWV0X3Jlc3VsdCIsInZlcnNpb24iOm51bGx9LCJ0Zndfc2Vuc2l0aXZlX21lZGlhX2ludGVyc3RpdGlhbF8xMzk2MyI6eyJidWNrZXQiOiJpbnRlcnN0aXRpYWwiLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X2V4cGVyaW1lbnRzX2Nvb2tpZV9leHBpcmF0aW9uIjp7ImJ1Y2tldCI6MTIwOTYwMCwidmVyc2lvbiI6bnVsbH0sInRmd19kdXBsaWNhdGVfc2NyaWJlc190b19zZXR0aW5ncyI6eyJidWNrZXQiOiJvbiIsInZlcnNpb24iOm51bGx9LCJ0ZndfdHdlZXRfZWRpdF9mcm9udGVuZCI6eyJidWNrZXQiOiJvZmYiLCJ2ZXJzaW9uIjpudWxsfX0%3D&amp;frame=false&amp;hideCard=false&amp;hideThread=false&amp;id=1571494237153406976&amp;lang=en&amp;origin=https%3A%2F%2Fwww.theverge.com%2F2022%2F9%2F18%2F23359479%2Fapple-dynamic-island-base-iphone-15-ross-young-rumors&amp;sessionId=30f1b4df2cf97006eabb2401e6f8ef6b700092d4&amp;siteScreenName=verge&amp;theme=light&amp;widgetsVersion=1bfeb5c3714e8%3A1661975971032&amp;width=550px\"></iframe><p><br></p><p>The Dynamic Island is the black, pill-shaped cutout at the top of the iPhone 14 Pro that houses the device’s camera array. Apple cleverly blended the cutout with the rest of the UI using animations that make the Dynamic Island appear larger when you interact with it. The Dynamic Island displays notifications and will eventually let you monitor&nbsp;<a href=\"https://www.theverge.com/2022/6/6/23151443/ios-16-notification-features-apple-wwdc\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: inherit;\">Live Activities</a>, like sports scores or the status of your Uber ride, from the top of your screen.</p><p><br></p><p>Adding a Dynamic Island to the iPhone 15 could make upgrading to next year’s base model more appealing than making the minor jump from the iPhone 13 to the standard iPhone 14, or as&nbsp;<a href=\"https://www.theverge.com/23352282/iphone-14-review-apple\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: inherit;\">my colleague Allison Johnson calls it</a>, the “iPhone 13S.”</p>', 'Technology', 'Admin', 'Approved', '', 'May 2021', 'May 15, 2021'),
(43, 'polkabear', 'Apple is too strict with copy and paste in iOS 16', '<p>In my time using iOS 16 so far, I’ve generally been very pleased with&nbsp;<a href=\"https://www.theverge.com/23347903/ios-16-review-iphone-apple\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: inherit;\">the new features and improvements</a>. The&nbsp;<a href=\"https://www.theverge.com/23190907/iphone-lock-screen-customize-ios-16-photo-shuffle-emoji-widgets\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: inherit;\">customizable lock screen</a>&nbsp;is fun. Removing the background of images just by holding down on a picture’s subject still hasn’t gotten old. But only a few days after the new software rolled out, I’ve already found my biggest frustration: iOS now asks if it’s okay to paste an item from one app to another. Constantly. Over and over and over again.</p><p><br></p><p>There’s got to be a better solution than this.</p><p class=\"ql-align-center\"><br></p><p>I understand the&nbsp;<strong>why</strong>&nbsp;behind the new prompt. Your iPhone’s clipboard often contains sensitive data — passwords, personal photos, two-factor passcodes, and so on. Apps likely skim this information more often than any of us realize. And this is another example of Apple abiding by its mantra on privacy: ask people in plain English if they want to allow apps to access their information. Ask them repeatedly.</p><p><br></p><p>But the new prompt is adding friction where it never existed before. It’s making copy and paste inherently less seamless. For example, if I cut out the subject of an image in Photos, copy it, and go to paste it into a text in Messages, I get hit with the permission dialog. Every time. Same goes for pasting something into Notes.</p><p><br></p><p><em>I shouldn’t have to approve this every. single. time.</em>&nbsp;Screenshot: Chris Welch / The Verge</p><p>These are core iPhone applications, and while it’s appropriate that Apple applies its rules universally, I also find myself thinking in frustration, “Yes,&nbsp;<em>of course</em>&nbsp;it’s okay for you to paste this picture into a message. Why wouldn’t it be? Enough already.” We’re talking about a fundamental, very common action flow, and now there’s a hurdle in the middle. Why is Apple double checking what is clearly user intent and a direct command?</p><p><br></p><p>The objective of preventing apps from snooping on your clipboard is reasonable. But surely it’s possible for Apple to include “always allow” among the choices so that people won’t have to constantly see this screen. Or the company could add a “pasteboard” toggle to the privacy settings for each app much in the way it does for location, notifications, background data, and so on. Just give us&nbsp;<em>some</em>&nbsp;way of establishing permanence for our copy and paste preferences.</p><p><br></p><p>The pop-up is happening so frequently that I’m almost wondering if it’s a bug and not the intended behavior. And sometimes — like when pasting into Slack — it doesn’t come up at all. Nothing’s been changed so far in the first betas of iOS 16.1, but I’m hoping Apple will refine this interaction sooner than later.</p>', 'Design', 'Admin', 'Approved', '', 'June 2021', 'June 15, 2021'),
(58, 'Sheharyar Butt', 'Android and iOS take big steps toward launching Matter smart home compatibility', '<p>It’s getting closer. With the drop of the iOS 16.1 and iPadOS 16.1 developer betas today, we have confirmation that “Matter Accessories” are on their way to Apple iPhones and iPads. Plus, Google’s Google Home Developer Console, which&nbsp;<a href=\"https://www.theverge.com/2021/10/21/22738584/google-smart-home-developer-summit-2021-matter-thread\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: inherit;\">helps developers add Matter devices to its smart home platform</a>, also went&nbsp;<a href=\"https://developers.googleblog.com/2022/09/helping-developers-build-with-google-matters.html\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: inherit;\">live today</a>.&nbsp;</p><p><br></p><p><a href=\"https://www.theverge.com/22787729/matter-smart-home-standard-apple-amazon-google\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: inherit;\">Matter is a new smart home connectivity standard</a>&nbsp;that promises to unify all your connected devices, making it easier for your smart thermostat to talk to your connected door lock and for you to talk to either one using any voice assistant or smart home app you choose. At&nbsp;<a href=\"https://www.theverge.com/2022/6/6/23150367/apple-wwdc-ios-16-homekit-new-home-app-matter\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: inherit;\">WWDC this year</a>, Apple announced that iOS 16 would support Matter, and now we are seeing the first implementations.</p><p>A new option menu has appeared in Settings &gt; General on both iPads and iPhones running the beta. Spotted by&nbsp;<a href=\"https://twitter.com/zollotech/status/1570103277835911170?s=20&amp;t=M5WoRxRLFBQFI6uKAFeIIA\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: inherit;\">Aaron Zollo</a>, it lists “Matter Accessories” and, when you tap it, takes you to a list of Matter accessories that have been added to “a connected service.”&nbsp;</p><p><br></p><p>Only there are no Matter-compatible accessories yet, as the Matter standard hasn’t been finalized. But this is a sure sign that developers and manufacturers are testing prerelease software ahead of the anticipated&nbsp;<a href=\"https://www.theverge.com/2022/3/17/22982166/matter-smart-home-standard-postponed-fall-2022\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: inherit;\">launch of Matter this fall</a>.&nbsp;</p><p><br></p><p>We saw some&nbsp;<a href=\"https://www.theverge.com/2022/9/3/23334933/matter-eve-smart-home-demonstration-nest-hub-android-smartthings-alexa-echo\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: inherit;\">beta Matter devices in action at the IFA tech conference</a>&nbsp;earlier this month. Eve Systems showed off its smart plug being controlled by Apple HomeKit, Google Home, Amazon Alexa, and Samsung SmartThings.&nbsp;</p><p><br></p><p>That demo highlighted one of Matter’s core features — multi-admin control — which is hinted at in the iOS and iPadOS betas. This allows devices to have multiple masters, so you can ask Siri to turn down your Nest thermostat or have a Google Nest Hub control your Amazon smart plug.&nbsp;</p><p><br></p><p>Apple has been involved with Matter since it first began as one of its founding members, along with&nbsp;<a href=\"https://www.theverge.com/23065031/matter-google-nest-smart-home-michele-turner-interview\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: inherit;\">Google</a>, Samsung, and Amazon. All three smartphone manufacturers have publicly stated that their smartphone and tablet devices will be Matter controllers, meaning they can onboard Matter devices to your smart home network.&nbsp;</p><p><br></p><p>Some screenshots that also surfaced today indicate Google is well on its way to adding a Matter Accessories section to its operating system.&nbsp;<a href=\"https://www.androidpolice.com/matter-device-controls-showing-up-android/\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: inherit;\"><em>Android Police</em>&nbsp;reports</a>&nbsp;a Matter Devices &amp; Services section has appeared in the Google account settings for some users, with a prompt to connect a new Matter device and the option to automatically show a notification when Matter devices are nearby. This hints at another key feature of Matter: a streamlined, more unified setup for smart home devices.&nbsp;</p><p><br></p><p>All this activity makes it seem increasingly likely that Matter will hit its goal of a fall launch, despite multiple previous delays.</p>', 'Technology', 'Admin', 'Approved', '', 'September 2022', 'September 15, 2022'),
(59, 'Sheharyar Butt', 'Google’s Nest Wifi Pro pricing leaks early', '<p>Google’s big hardware event isn’t until next month but the leaks have already begun, this time showing pricing for a new “Google Nest Wifi Pro 6E Router”&nbsp;<a href=\"https://go.redirectingat.com/?id=66960X1514734&amp;xs=1&amp;url=https%3A%2F%2Fwww.bhphotovideo.com%2Fc%2Fsearch%3Fq%3DGoogle%2520Nest%2520Wifi%2520Pro%25206E%2520Router%2520%26sts%3Dma&amp;referrer=theverge.com&amp;xcust=___vg__p_55b49676-68ad-4b7e-b3a4-72b37349e40f__t_w__r_https://www.theverge.com/tech__d_D\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: inherit;\">courtesy of B&amp;H Photo</a>&nbsp;(via&nbsp;<a href=\"https://9to5google.com/2022/09/18/google-nest-wifi-pro-6e/\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: inherit;\"><em>9to5Google</em></a>). The online store lists a variety of colors and combo packs starting at $199.99, each labeled as “new item — coming soon.” In other words, coming as early as October 6th when this pro version of the Nest Wifi is expected to be announced at the&nbsp;<a href=\"https://www.theverge.com/2022/9/6/23339303/pixel-7-pro-pixel-watch-made-by-google-hardware-event-october-6th\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: inherit;\">Made By Google</a>&nbsp;event.&nbsp;</p><p><br></p><p>Unfortunately, the listings don’t include any photos or specs, but we’re not totally in the dark here. We previously saw details for what we expect to be called the “Nest Wifi Pro” in an FCC listing that mentioned Bluetooth Low Energy and Thread mesh networking radios (for&nbsp;<a href=\"https://www.theverge.com/23165855/thread-smart-home-protocol-matter-apple-google-interview\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: inherit;\">Matter</a>), in addition to 6GHz Wi-Fi 6E support for&nbsp;<a href=\"https://www.theverge.com/2020/4/23/21231623/6ghz-wifi-6e-explained-speed-availability-fcc-approval\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: inherit;\">reduced signal interference and faster speeds</a>.&nbsp;</p><p><br></p><p><span style=\"color: rgb(0, 0, 0);\">The&nbsp;</span><a href=\"https://go.redirectingat.com/?id=66960X1514734&amp;xs=1&amp;url=https%3A%2F%2Fwww.bhphotovideo.com%2Fc%2Fsearch%3Fq%3DGoogle%2520Nest%2520Wifi%2520Pro%25206E%2520Router%2520%26sts%3Dma&amp;referrer=theverge.com&amp;xcust=___vg__p_55b49676-68ad-4b7e-b3a4-72b37349e40f__t_w__r_https://www.theverge.com/tech__d_D\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: inherit;\">premature B&amp;H listings</a><span style=\"color: rgb(0, 0, 0);\">&nbsp;mention a $299.99 2-pack bundle, $399.99 3-pack bundle, and colors that mimic other Nest products including “Snow” (white), “Fog” (pale blue), “Linen” (beige), and “Lemongrass” (yellowish green). We expect this Pro model to co-exist with the current Nest Wifi which lists for $169 but can often be had for less.</span></p>', 'Technology', 'Admin', 'Approved', '', 'September 2022', 'September 15, 2022');

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_bin NOT NULL,
  `category` varchar(15) COLLATE utf8mb4_bin NOT NULL,
  `status` varchar(25) COLLATE utf8mb4_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `name`, `category`, `status`) VALUES
(1, 'Admin Butt', 'Technology', 'Approved'),
(2, 'Admin Butt', 'U.S', 'Approved'),
(3, 'Admin Butt', 'Design', 'Approved'),
(4, 'Admin Butt', 'Culture', 'Approved'),
(5, 'Admin Butt', 'Business', 'Approved'),
(6, 'Admin Butt', 'Opinion', 'Approved'),
(7, 'Admin Butt', 'Politics', 'Approved'),
(8, 'Admin Butt', 'Health', 'Approved'),
(9, 'Admin Butt', 'Travel', 'Approved'),
(10, 'Admin Butt', 'Style', 'Approved'),
(11, 'Admin Butt', 'World', 'Approved'),
(12, 'Admin Butt', 'Science', 'Approved');

-- --------------------------------------------------------

--
-- Table structure for table `comments`
--

CREATE TABLE `comments` (
  `id` int(11) NOT NULL,
  `post_title` text COLLATE utf8mb4_bin NOT NULL,
  `cm_name` varchar(255) COLLATE utf8mb4_bin NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_bin NOT NULL,
  `cm_picture` varchar(255) COLLATE utf8mb4_bin NOT NULL,
  `role` varchar(25) COLLATE utf8mb4_bin NOT NULL,
  `cm_post` text COLLATE utf8mb4_bin NOT NULL,
  `cm_time` varchar(255) COLLATE utf8mb4_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

--
-- Dumping data for table `comments`
--

INSERT INTO `comments` (`id`, `post_title`, `cm_name`, `email`, `cm_picture`, `role`, `cm_post`, `cm_time`) VALUES
(25, 'Travel TITLE', 'Sheharyar Butt', 'shehariyar@gmail.com', '/default.jpg', 'Admin', 'hi this testing comments and date and time settings', 'Sep 15, 2022, 09:48 PM'),
(26, 'TESTING DATE AND TIME', 'Sheharyar Butt', 'shehariyar@gmail.com', '/default.jpg', 'Admin', 'testing comment date and time', 'Sep 15, 2022, 09:50 PM'),
(27, 'Travel TITLE', 'Sheharyar Butt', 'shehariyar@gmail.com', '/default.jpg', 'Admin', 'alert(1)', 'Sep 16, 2022, 10:27 AM'),
(28, 'Travel TITLE', 'Sheharyar Butt', 'shehariyar@gmail.com', '/default.jpg', 'Admin', '<script>alert(1);</script>', 'Sep 16, 2022, 10:27 AM'),
(29, 'Did internet speed impact exposure to COVID-19', 'asdasdas', 'shehariyar@gmail.com', '/default.jpg', 'Visitor', 'testing section hahahahahahahahahahaha\r\nahahah', 'Sep 16, 2022, 01:05 PM'),
(30, 'deneme2', 'Sheharyar Butt', 'shehariyar@gmail.com', '/default.jpg', 'Admin', 'sadfddfsad', 'Sep 17, 2022, 12:50 PM'),
(31, 'Travel TITLE', 'dsfdsad', 'shehariyar@gmail.com', '/default.jpg', 'Visitor', 'sdfgdfdeadsfdfsa', 'Sep 17, 2022, 12:51 PM');

-- --------------------------------------------------------

--
-- Table structure for table `images`
--

CREATE TABLE `images` (
  `id` int(11) NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_bin NOT NULL,
  `filename` varchar(255) COLLATE utf8mb4_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

-- --------------------------------------------------------

--
-- Table structure for table `userdata`
--

CREATE TABLE `userdata` (
  `id` int(11) NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_bin NOT NULL,
  `email` varchar(50) COLLATE utf8mb4_bin NOT NULL,
  `password` varchar(25) COLLATE utf8mb4_bin NOT NULL,
  `role` varchar(10) COLLATE utf8mb4_bin NOT NULL DEFAULT 'User'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

--
-- Dumping data for table `userdata`
--

INSERT INTO `userdata` (`id`, `name`, `email`, `password`, `role`) VALUES
(1, 'Sheharyar Butt', 'example@gmail.com', '123456', 'Admin'),
(4, 'polkabear', 'example2@gmail.com', '123456', 'Admin'),
(28, 'testUser', 'testuser@gmail.com', '123456', 'User');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `blogdata`
--
ALTER TABLE `blogdata`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `images`
--
ALTER TABLE `images`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `userdata`
--
ALTER TABLE `userdata`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `blogdata`
--
ALTER TABLE `blogdata`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=63;

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=54;

--
-- AUTO_INCREMENT for table `comments`
--
ALTER TABLE `comments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;

--
-- AUTO_INCREMENT for table `images`
--
ALTER TABLE `images`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT for table `userdata`
--
ALTER TABLE `userdata`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
