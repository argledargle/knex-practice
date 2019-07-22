BEGIN;

INSERT INTO blogful_articles
(title, date_published, content)
VALUES
('Kotaku', now() - '5 days'::INTERVAL, 'Kotaku blog 1st article!'),
('Gizmodo', now() - '6 days'::INTERVAL, 'Gizmodo blog 1st article!'),
('Joe Biden runs for pres!', now() - '20 days'::INTERVAL, 'Joe Biden announced he is running for president!'),
('End of videogame industry', '2019-07-11 13:28:45', 'Videogames are over. The end'),
('Earther', now()- '2 days'::INTERVAL, 'Earther''s 1st blog article!'),
('AP''s car work report!', now()- '1 days'::INTERVAL, 'AP''s car passes emissions testing!'),
('Liz gets sick', '2019-07-22 12:23:41', 'Liz is ill. We are sad. :('),
('Georgia quits!', now()- '45 days'::INTERVAL, 'Georgia walks out on her job to pursue a career in not doing anything!'),
('AP quits!', '2019-03-25 13:45:21', 'AP leaves his job to pursue a career in web development'),
('Carey quits his job!', '2019-07-02 12:00:00', 'Carey quit his job to pursue a beter opportunity in Brookfield, WI'),
('Casey moves across the country!', '2019-07-22 8:00:00', 'Casey quit his job and moved across the country to be with the woman he loves! More details as we get them.'),
('Cat meows all the goddamn time', '2019-07-22 3:13:23', 'This cat won''t shut her mouth.'),
('Top 10 blogful articles', now()-'2 days'::INTERVAL, 'It''s the top 10!'),
('Best ways to spend your vacation', '2017-8-03 15:00:00', 'Honestly, just nap'),
('All-time best game for PC', '2018-12-20 11:59:59', 'It''s honestly Stardew Valley'),
('Clickbait title!', '2018-10-22 14:00:23', 'Clickbait content!'),
('Max gets promoted!', now() -'22 days'::INTERVAL, 'Max moves up in the world at the zoo!'),
('Life gets better', now() -'35 days'::INTERVAL, 'If you don''t give up, then life gets much better! KEEP AT IT!'),
('AP Gets more coffee', now()-'7 days'::INTERVAL, 'AP gets more coffee than ever before!'),
('Drew gets married!', '2017-05-24 18:32:45', 'Drew and Tyler tied the knot this afternoon!'),
('Final blog article', now(), 'This is the final article. Thanks for reading!');

COMMIT;