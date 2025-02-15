// -- # Easy Exercises (1–30): Basic Queries
// -- 1. Retrieve all user names and their reputations.
// select DisplayName,Reputation from users

// -- 2. List posts created in 2024.
// select * from posts where CreationDate > '2024-01-01'

// -- 3. Find comments longer than 200 characters.
// select text from Comments where LEN(text) > 200

// -- 4. Get the titles of posts with a score above 50.
// select Title,score from posts where score > 50

// -- 5. Count how many users joined per year.
// SELECT YEAR(CreationDate) AS join_year, COUNT(*) AS user_count
// FROM users
// WHERE CreationDate IS NOT NULL
// GROUP BY YEAR(CreationDate)
// ORDER BY join_year;

// -- 6. Find the earliest created post.
// SELECT MIN(CreationDate) AS earliestPost
// FROM Posts
// WHERE CreationDate IS NOT NULL;

// -- 7. Display badges awarded more than once.
// select UserId, COUNT(*) as awardedMoreThanOnce
// from Badges
// GROUP BY UserId
// Having count(*) > 1

// -- 8. Show users with display names starting with 'A'.
// SELECT DisplayName from Users WHERE (lower(DisplayName) LIKE 'a%');

// -- 9. Find the top 5 longest comments.
// SELECT top 5 id,text, LEN(text) AS comment_length
// FROM comments
// ORDER BY comment_length DESC

// -- 10. Get total votes by type.
// SELECT VoteTypeId, COUNT(*) AS total_votes
// FROM Votes
// GROUP BY VoteTypeId;

// -- # Intermediate Exercises (31–70): Aggregation, Joins, Subqueries
// -- 31. Find the average reputation of users with at least 5 badges.
// SELECT AVG(u.Reputation) AS average_reputation
// FROM Users u
// JOIN (
//     SELECT UserId
//     FROM Badges
//     GROUP BY UserId
//     HAVING COUNT(*) >= 5
// ) b ON u.Id = b.UserId;

// -- 32. List posts with more comments than votes.
// SELECT p.Id, p.Title
// FROM Posts p
// JOIN (
//     SELECT PostId, COUNT(*) AS comment_count
//     FROM Comments
//     GROUP BY PostId
// ) c ON p.Id = c.PostId
// JOIN (
//     SELECT PostId, COUNT(*) AS vote_count
//     FROM Votes
//     GROUP BY PostId
// ) v ON p.Id = v.PostId
// WHERE c.comment_count > v.vote_count;
