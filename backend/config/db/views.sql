CREATE VIEW getUsers AS
SELECT u.id as user_id, u.username, u.password, u.email, l.city, l.county, p.name AS profile_type
FROM `users` u INNER JOIN `location` l ON u.location_id = l.id
INNER join `profile_type` p ON u.profiletype_id = p.id;