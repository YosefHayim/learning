// -- # Easy Exercises (1–30): Basic Queries
// -- 1. Select all users.
// SELECT * FROM users;

// -- 2. Find all posts with more than 100 views.
// SELECT * FROM posts WHERE view_count > 100;

// -- 3. Get usernames and their creation dates.
// SELECT display_name, creation_date FROM users;

// -- 4. Find comments containing the word 'thanks'.
// SELECT * FROM comments WHERE text LIKE '%thanks%';

// -- 5. Count total votes.
// SELECT COUNT(*) FROM votes;

// -- 6. Get all distinct post types.
// SELECT DISTINCT name FROM posttypes;

// -- 7. Find users who joined after 2020.
// SELECT * FROM users WHERE creation_date > '2020-01-01';

// -- 8. Show posts ordered by score (highest first).
// SELECT * FROM posts ORDER BY score DESC;

// -- 9. Find badges earned by user 10.
// SELECT * FROM badges WHERE user_id = 10;

// -- 10. Count comments per user.
// SELECT user_id, COUNT(*) AS comment_count FROM comments GROUP BY user_id;

// -- # Intermediate Exercises (31–70): Aggregation, Joins, Subqueries
// -- 31. Find the average score of all posts.
// SELECT AVG(score) FROM posts;

// -- 32. Show users who have posted more than 5 times.
// SELECT user_id, COUNT(*) AS post_count FROM posts GROUP BY user_id HAVING COUNT(*) > 5;

// -- 33. Find posts with the highest number of comments.
// SELECT post_id, COUNT(*) AS comment_count FROM comments GROUP BY post_id ORDER BY comment_count DESC LIMIT 1;

// -- 34. Get users who never received a badge.
// SELECT u.* FROM users u LEFT JOIN badges b ON u.id = b.user_id WHERE b.user_id IS NULL;

// -- 35. Find all posts with links to other posts.
// SELECT p.*, pl.linked_post_id FROM posts p JOIN postlinks pl ON p.id = pl.post_id;

// -- 36. Find users with the highest reputation.
// SELECT * FROM users ORDER BY reputation DESC LIMIT 5;

// -- 37. Count different types of votes.
// SELECT votetype_id, COUNT(*) AS vote_count FROM votes GROUP BY votetype_id;

// -- 38. Find the most popular badge.
// SELECT badge_name, COUNT(*) AS badge_count FROM badges GROUP BY badge_name ORDER BY badge_count DESC LIMIT 1;

// -- 39. List posts that received both upvotes and downvotes.
// SELECT post_id FROM votes WHERE votetype_id IN (2,3) GROUP BY post_id HAVING COUNT(DISTINCT votetype_id) = 2;

// -- 40. Get the average number of comments per post.
// SELECT AVG(comment_count) FROM (SELECT post_id, COUNT(*) AS comment_count FROM comments GROUP BY post_id) AS sub;

// -- # Advanced Exercises (71–100): CTEs, Window Functions, Advanced Joins
// -- 71. Use a CTE to find top contributors (more than 10 posts).
// WITH post_counts AS (SELECT user_id, COUNT(*) AS post_count FROM posts GROUP BY user_id)
// SELECT * FROM post_counts WHERE post_count > 10;

// -- 72. Rank users by reputation.
// SELECT id, display_name, reputation, RANK() OVER(ORDER BY reputation DESC) AS rank FROM users;

// -- 73. Find posts with the highest score per user using window functions.
// SELECT user_id, id AS post_id, score, RANK() OVER(PARTITION BY user_id ORDER BY score DESC) AS rank FROM posts;

// -- 74. Show cumulative votes per post.
// SELECT post_id, created_date, SUM(vote_count) OVER(PARTITION BY post_id ORDER BY created_date) AS cumulative_votes FROM votes;

// -- 75. Find users with the longest membership (oldest creation dates).
// SELECT * FROM users ORDER BY creation_date ASC LIMIT 5;

// -- 76. Display average score per post type using joins.
// SELECT pt.name, AVG(p.score) AS avg_score FROM posts p JOIN posttypes pt ON p.posttype_id = pt.id GROUP BY pt.name;

// -- 77. Find the most linked-to post.
// SELECT linked_post_id, COUNT(*) AS link_count FROM postlinks GROUP BY linked_post_id ORDER BY link_count DESC LIMIT 1;

// -- 78. Get users who received more than 3 badges but have less than 100 reputation.
// SELECT u.id, u.display_name FROM users u JOIN (SELECT user_id, COUNT(*) AS badge_count FROM badges GROUP BY user_id HAVING COUNT(*) > 3) b_counts ON u.id = b_counts.user_id WHERE u.reputation < 100;

// -- 79. Find users with no posts but with votes.
// SELECT DISTINCT v.user_id FROM votes v LEFT JOIN posts p ON v.user_id = p.user_id WHERE p.id IS NULL;

// -- 80. Find total votes per post using a window function.
// SELECT post_id, COUNT(*) AS total_votes, ROW_NUMBER() OVER(ORDER BY COUNT(*) DESC) AS rank FROM votes GROUP BY post_id;

// -- # Challenge Exercises (91–100): Complex Analytical Queries
// -- 91. Show the user with the highest average post score.
// SELECT user_id, AVG(score) AS avg_score FROM posts GROUP BY user_id ORDER BY avg_score DESC LIMIT 1;

// -- 92. List users who commented on their own posts.
// SELECT DISTINCT c.user_id FROM comments c JOIN posts p ON c.post_id = p.id WHERE c.user_id = p.user_id;

// -- 93. Find users who voted on every post type.
// SELECT user_id FROM votes GROUP BY user_id HAVING COUNT(DISTINCT votetype_id) = (SELECT COUNT(*) FROM votetypes);

// -- 94. Use recursive CTE to find post link chains.
// WITH RECURSIVE link_chain AS (
//   SELECT post_id, linked_post_id FROM postlinks
//   UNION ALL
//   SELECT lc.post_id, pl.linked_post_id FROM link_chain lc JOIN postlinks pl ON lc.linked_post_id = pl.post_id
// )
// SELECT * FROM link_chain;

// -- 95. Rank users by total number of badges using a dense rank.
// SELECT user_id, COUNT(*) AS badge_count, DENSE_RANK() OVER(ORDER BY COUNT(*) DESC) AS rank FROM badges GROUP BY user_id;

// -- 96. Show monthly counts of new users.
// SELECT DATE_TRUNC('month', creation_date) AS month, COUNT(*) AS new_users FROM users GROUP BY month ORDER BY month;

// -- 97. Find posts that received the earliest votes.
// SELECT post_id, MIN(creation_date) AS first_vote_date FROM votes GROUP BY post_id ORDER BY first_vote_date;

// -- 98. Find users who voted on their own posts.
// SELECT DISTINCT v.user_id FROM votes v JOIN posts p ON v.post_id = p.id WHERE v.user_id = p.user_id;

// -- 99. Display the difference between upvotes and downvotes per post.
// SELECT post_id, SUM(CASE WHEN votetype_id = 2 THEN 1 WHEN votetype_id = 3 THEN -1 ELSE 0 END) AS vote_difference FROM votes GROUP BY post_id;

// -- 100. Find users who received the same number of upvotes and downvotes.
// SELECT user_id FROM (
//   SELECT user_id,
//          SUM(CASE WHEN votetype_id = 2 THEN 1 ELSE 0 END) AS upvotes,
//          SUM(CASE WHEN votetype_id = 3 THEN 1 ELSE 0 END) AS downvotes
//   FROM votes GROUP BY user_id
// ) vote_counts WHERE upvotes = downvotes;
