-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 19, 2022 at 11:27 AM
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
(1, 'polkabear', 'Did internet speed impact exposure to COVID-19?', '<p>When the World Health Organization declared the COVID-19 outbreak a global pandemic in March 2020, slightly more than half of the world’s citizens had access to the internet. Connectivity allowed many people to work, receive services, and socialize without physical contact—a key factor in limiting the virus’s spread. Did people with internet access, then, benefit from reduced exposure to COVID-19? The Digital Development Global Practice of the World Bank and the University of Greenwich looked into the question. We conducted research to find out how access to the internet and variety in speed affected adherence to pandemic-related movement restrictions in three Latin American countries: Colombia, Ecuador, and El Salvador. Why does this matter? Access to the internet alone is not enough to unlock the benefits of digital technologies. For instance, many online public services offered during the pandemic could only be leveraged if users had access to an affordable, reliable and fast connection. While these are all important features, in this case we focused our analysis specifically on internet speed. The three countries reported different average download speeds, with Colombia and Ecuador performing better than El Salvador (see below). Moreover, connectivity features significantly varied among users, with significant diversity in terms of service affordability and quality within and across the three countries. This provided a good opportunity to look at how differences in internet quality affect exposure to COVID-19 in developing countries. This research is part of the Digital Economy Assessment for Latin America and the Caribbean (DE4LAC) initiative, a series of national digital ecosystems assessments and uses Ookla® Speedtest Intelligence® data. The governments of the three countries adopted policies to limit the movement of people to tackle the spread of COVID-19, much like governments across the globe. Data from Meta, the parent company of Facebook, reported a substantial drop in mobility in all three countries, with maximum reductions of 53 percent in Colombia and 64 percent in both Ecuador and El Salvador in late March and early April. This decrease coincided with the introduction of stricter restrictions which were then relaxed in the early summer of the same year. By late 2020, the movement of people approached pre-pandemic levels (see below). Download speeds varied significantly within countries. For instance, in El Salvador, the average download speed in the department (administrative unit similar to a province) of La Libertad was twice as fast as in the department of Morazán. In Colombia, the department of Bogota showed about 13 times higher download speeds than in the worst-performing department. Similar findings were observed in Ecuador. Overall, the analysis confirms the findings of other studies—on average, internet users in dense urban areas have faster internet connections than people in less connected, more digitally isolated rural regions. Next, we explored the relationship between the reduction in mobility induced by COVID-19 restrictions and the quality of fixed internet connections. We controlled for a range of socio-economic variables such as wealth index and GDP per capita, among others. First, we found that socio-economic attributes played a big role in the ability to adhere to movement restrictions, and therefore exposure to COVID-19. For instance, residents of denser areas and those with greater wealth moved less. Second, our research showed that better fixed internet connections made it easier for people to adhere to pandemic-related movement restrictions. In short, access to good quality internet connections allows users to perform activities online instead of in person, which could reduce the risk of exposure to COVID-19. The research shows how the burden of the COVID-19 pandemic and the measures put in place to fight it are distributed unequally across different social, economic, and demographic backgrounds. It highlights both the importance of internet access and the role played by the connection speeds, suggesting that poor access and low speed connectivity might increase vulnerability to health shocks. While the critical role of internet access during the pandemic was clear early on, until now there has not been data based analysis focused on the specific role of internet speed, particularly in low- and middle-income countries. This research indicatesdfdgfdss that policymakers and private actors should not only focus on providing internet access, but also on factors such as reliability, affordability, and speed, which are important elements to bring more equitable impacts to vulnerable communities.</p>', 'Technology', 'Admin', 'Approved', 'Featured', 'January 2021', 'January 15, 2022'),
(2, 'Sheharyar Butt', 'Merhaba Title hello llll testing from admin links', '<p><strong>lorum ipseumasdfv</strong></p><p><strong>dasfsf</strong></p><p><strong>caws</strong></p><p><strong>dvc </strong></p><p><strong>sed</strong></p><p><strong>dzfc</strong></p><p><strong> s</strong></p><p><strong>dzf</strong></p><p><strong>xgdv</strong></p><p><strong>caz</strong></p><p><strong>sdfcx</strong></p>', 'Opinion', 'Admin', 'Approved', '', 'January 2021', 'January 15, 2022'),
(4, 'Sheharyar Butt', 'Design TITLE DENEME', '<p><strong style=\"color: rgb(0, 0, 0);\">Lorem Ipsum</strong><span style=\"color: rgb(0, 0, 0);\">&nbsp;is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</span></p>', 'Technology', 'Admin', 'Deleted', '', 'January 2021', 'January 15, 2022'),
(6, 'polkabear', 'BUsiness TITLE', '<p>This blog post shows a few different types of content that’s supported and styled with Bootstrap. Basic typography, lists, tables, images, code, and more are all supported as expected.</p>\r\n        \r\n        <p>This is some additional paragraph placeholder content. It has been written to fill the available space and show how a longer snippet of text affects the surrounding content. We\'ll repeat it often to keep the demonstration flowing, so be on the lookout for this exact same string of text.</p>\r\n        <h2>Blockquotes</h2>\r\n        <p>This is an example blockquote in action:</p>\r\n        <blockquote className=\"blockquote\">\r\n          <p>Quoted text goes here.</p>\r\n        </blockquote>\r\n        <p>This is some additional paragraph placeholder content. It has been written to fill the available space and show how a longer snippet of text affects the surrounding content. We\'ll repeat it often to keep the demonstration flowing, so be on the lookout for this exact same string of text.</p>\r\n        <h3>Example lists</h3>\r\n        <p>This is some additional paragraph placeholder content. It\'s a slightly shorter version of the other highly repetitive body text used throughout. This is an example unordered list:</p>\r\n        <ul>\r\n          <li>First list item</li>\r\n          <li>Second list item with a longer description</li>\r\n          <li>Third list item to close it out</li>\r\n        </ul>\r\n        <p>And this is an ordered list:</p>\r\n        <ol>\r\n          <li>First list item</li>\r\n          <li>Second list item with a longer description</li>\r\n          <li>Third list item to close it out</li>\r\n        </ol>\r\n        <p>And this is a definition list:</p>\r\n        <dl>\r\n          <dt>HyperText Markup Language (HTML)</dt>\r\n          <dd>The language used to describe and define the content of a Web page</dd>\r\n          <dt>Cascading Style Sheets (CSS)</dt>\r\n          <dd>Used to describe the appearance of Web content</dd>\r\n          <dt>JavaScript (JS)</dt>\r\n          <dd>The programming language used to build advanced Web sites and applications</dd>\r\n        </dl>\r\n        <h2>Inline HTML elements</h2>\r\n        <p>HTML defines a long list of available inline tags, a complete list of which can be found on the <a href=\"https://developer.mozilla.org/en-US/docs/Web/HTML/Element\">Mozilla Developer Network</a>.</p>\r\n        <ul>\r\n          <li><strong>To bold text</strong>, use <code className=\"language-plaintext highlighter-rouge\">&lt;strong&gt;</code>.</li>\r\n          <li><em>To italicize text</em>, use <code className=\"language-plaintext highlighter-rouge\">&lt;em&gt;</code>.</li>\r\n          <li>Abbreviations, like <abbr title=\"HyperText Markup Language\">HTML</abbr> should use <code className=\"language-plaintext highlighter-rouge\">&lt;abbr&gt;</code>, with an optional <code className=\"language-plaintext highlighter-rouge\">title</code> attribute for the full phrase.</li>\r\n          <li>Citations, like <cite>— Mark Otto</cite>, should use <code className=\"language-plaintext highlighter-rouge\">&lt;cite&gt;</code>.</li>\r\n          <li><del>Deleted</del> text should use <code className=\"language-plaintext highlighter-rouge\">&lt;del&gt;</code> and <ins>inserted</ins> text should use <code className=\"language-plaintext highlighter-rouge\">&lt;ins&gt;</code>.</li>\r\n          <li>Superscript <sup>text</sup> uses <code className=\"language-plaintext highlighter-rouge\">&lt;sup&gt;</code> and subscript <sub>text</sub> uses <code className=\"language-plaintext highlighter-rouge\">&lt;sub&gt;</code>.</li>\r\n        </ul>\r\n        <p>Most of these elements are styled by browsers with few modifications on our part.</p>\r\n        <h2>Heading</h2>\r\n        <p>This is some additional paragraph placeholder content. It has been written to fill the available space and show how a longer snippet of text affects the surrounding content. We\'ll repeat it often to keep the demonstration flowing, so be on the lookout for this exact same string of text.</p>\r\n        <h3>Sub-heading</h3>\r\n        <p>This is some additional paragraph placeholder content. It has been written to fill the available space and show how a longer snippet of text affects the surrounding content. We\'ll repeat it often to keep the demonstration flowing, so be on the lookout for this exact same string of text.</p>\r\n        <pre><code>Example code block</code></pre>\r\n        <p>This is some additional paragraph placeholder content. It\'s a slightly shorter version of the other highly repetitive body text used throughout.</p>', 'Business', 'Admin', 'Approved', '', 'February 2021', 'February 15, 2021'),
(7, 'polkabear', 'Opinion TITLE', '<p>This is some additional paragraph placeholder content. It has been written to fill the available space and show how a longer snippet of text affects the surrounding content. We\'ll repeat it often to keep the demonstration flowing, so be on the lookout for this exact same string of text.</p>\r\n        <blockquote>\r\n          <p>Longer quote goes here, maybe with some <strong>emphasized text</strong> in the middle of it.</p>\r\n        </blockquote>\r\n        <p>This is some additional paragraph placeholder content. It has been written to fill the available space and show how a longer snippet of text affects the surrounding content. We\'ll repeat it often to keep the demonstration flowing, so be on the lookout for this exact same string of text.</p>\r\n        <h3>Example table</h3>\r\n        <p>And don\'t forget about tables in these posts:</p>\r\n        <table className=\"table\">\r\n          <thead>\r\n            <tr>\r\n              <th>Name</th>\r\n              <th>Upvotes</th>\r\n              <th>Downvotes</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr>\r\n              <td>Alice</td>\r\n              <td>10</td>\r\n              <td>11</td>\r\n            </tr>\r\n            <tr>\r\n              <td>Bob</td>\r\n              <td>4</td>\r\n              <td>3</td>\r\n            </tr>\r\n            <tr>\r\n              <td>Charlie</td>\r\n              <td>7</td>\r\n              <td>9</td>\r\n            </tr>\r\n          </tbody>\r\n          <tfoot>\r\n            <tr>\r\n              <td>Totals</td>\r\n              <td>21</td>\r\n              <td>23</td>\r\n            </tr>\r\n          </tfoot>\r\n        </table>\r\n\r\n        <p>This is some additional paragraph placeholder content. It\'s a slightly shorter version of the other highly repetitive body text used throughout.</p>', 'Opinion', 'Admin', 'Approved', '', 'February 2021', 'February 15, 2021'),
(11, 'Sheharyar Butt', 'Travel TITLE', '<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>', 'Travel', 'Admin', 'Approved', '', 'May 2021', 'May 15, 2021'),
(12, 'polkabear', 'STYLe TILTI', '<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>', 'Style', 'Admin', 'Approved', '', 'May 2021', 'May 15, 2021'),
(43, 'polkabear', 'sdfsaaaasxaxc', '<p>acvzsfdsD</p>', 'Design', 'Admin', 'Approved', '', 'June 2021', 'June 15, 2021'),
(44, 'polkabear', 'Merhaba this is test title', '<p>Merhaba this is a test paragraph</p>', 'Business', 'Admin', 'Approved', '', 'June 2021', 'June 15, 2021'),
(45, 'polkabear', 'kjkhgfdsfghj', '<p>kltdzshdfyuiojihkgfdrt67ouohjm</p><p>kljhghfxdsghjkl</p>', 'Opinion', 'Admin', 'Approved', '', 'June 2021', 'June 15, 2021'),
(46, 'polkabear', 'asdrfghjkl', '<p>iouytrerfdghjkl;/.</p>', 'Politics', 'Admin', 'Approved', '', 'June 2021', 'June 15, 2021'),
(47, 'polkabear', 'kkuyjugdfsdghjm', '<p>jkyutersfdghjkl,</p>', 'World', 'Admin', 'Approved', '', 'July 2021', 'July 15, 2021'),
(55, 'testUser', 'By TEST USER Testing blog title', '<h2><u>NEW LIFE: </u></h2><p><br></p><p>This is a test paragraph for testing my blog text editor!</p>', 'Design', 'User', 'Approved', '', 'August 2021', 'August 15, 2021'),
(56, 'Sheharyar Butt', 'Zeki muren bizi de gorecek mi', '<h2>hi <strong>from </strong><em>Pakistan</em></h2>', 'Opinion', 'Admin', 'Deleted', '', 'November 2021', 'November 15, 2021'),
(57, 'testUser', 'sdfrtryuyjgerfds', '<p>qwwewrtyhtreqweretr</p>', 'U.S', 'User', 'Approved', '', 'September 2022', 'September 15, 2022'),
(58, 'Sheharyar Butt', 'deneme2', '<p>testing time</p>', 'Technology', 'Admin', 'Approved', '', 'September 2022', 'September 15, 2022'),
(59, 'Sheharyar Butt', 'TESTING DATE AND TIME', '<p>this is the testing post of date and time feature</p>', 'U.S', 'Admin', 'Approved', '', 'September 2022', 'September 15, 2022'),
(61, 'Sheharyar Butt', 'asdasdasd', '<p>asdasd</p>', 'Business', 'Admin', 'Deleted', '', 'September 2022', 'September 16, 2022');

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=62;

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
