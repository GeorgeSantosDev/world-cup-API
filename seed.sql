USE WorldCup;

SET FOREIGN_KEY_CHECKS = 0;

TRUNCATE TABLE `group`;
TRUNCATE TABLE `country`;
TRUNCATE TABLE `phases`;
TRUNCATE TABLE `players`;
TRUNCATE TABLE `matches`;
TRUNCATE TABLE `classification`;

SET FOREIGN_KEY_CHECKS = 1;

INSERT INTO WorldCup.group (name) VALUES
    ('A'),
    ('B'),
    ('C'),
    ('D'),
    ('E'),
    ('F'),
    ('G'),
    ('H');

INSERT INTO WorldCup.country (name, group_id) VALUES
    ('Catar', 1),
    ('Equador', 1),
    ('Holanda', 1),
    ('Senegal', 1),
    ('Estados Unidos', 2),
    ('Inglaterra', 2),
    ('Irã', 2),
    ('País de Gales', 2),
    ('Argentina', 3),
    ('Arábia Saudita', 3),
    ('México', 3),
    ('Polônia', 3),
    ('França', 4),
    ('Dinamarca', 4),
    ('Tunísia', 4),
    ('Austrália', 4),
    ('Alemanha', 5),
    ('Costa Rica', 5),
    ('Espanha', 5),
    ('Japão', 5),
    ('Belgica', 6),
    ('Canadá', 6),
    ('Marrocos', 6),
    ('Croácia', 6),
    ('Brasil', 7),
    ('Sérvia', 7),
    ('Suiça', 7),
    ('Camarões', 7),
    ('Portugal', 8),
    ('Gana', 8),
    ('Uruguai', 8),
    ('Coreia do Sul', 8);

INSERT INTO WorldCup.phases (phase) VALUES
    ('group phase'),
    ('round of 16'),
    ('round of 8'),
    ('semi final'),
    ('final');

INSERT INTO WorldCup.players (name, country_id) VALUES
    ('Lionel Messi', 9),
    ('Unai Simón', 19),
    ('Alvaro Morata', 19),
    ('Memphis Depay', 3),
    ('Alisson Becker', 25),
    ('Danilo Luiz', 25),
    ('Alex Telles', 25),
    ('Cristiano Ronaldo', 29);

INSERT INTO WorldCup.matches (country_id_1, country_id_2, phase_id, date) VALUES
    (25, 26, 1, '2022-11-24 16:00'),
    (25, 27, 1, '2022-11-28 13:00'),
    (25, 28, 1, '2022-12-02 16:00');

INSERT INTO WorldCup.classification (country_id, group_phase, round_of_16, round_of_8, semi_final, final) VALUES
    (1, 1, 0, 0, 0, 0),
    (2, 1, 0, 0, 0, 0),
    (3, 1, 0, 0, 0, 0),
    (4, 1, 0, 0, 0, 0),
    (5, 1, 0, 0, 0, 0),
    (6, 1, 0, 0, 0, 0),
    (7, 1, 0, 0, 0, 0),
    (8, 1, 0, 0, 0, 0),
    (9, 1, 0, 0, 0, 0),
    (10, 1, 0, 0, 0, 0),
    (11, 1, 0, 0, 0, 0),
    (12, 1, 0, 0, 0, 0),
    (13, 1, 0, 0, 0, 0),
    (14, 1, 0, 0, 0, 0),
    (15, 1, 0, 0, 0, 0),
    (16, 1, 0, 0, 0, 0),
    (17, 1, 0, 0, 0, 0),
    (18, 1, 0, 0, 0, 0),
    (19, 1, 0, 0, 0, 0),
    (20, 1, 0, 0, 0, 0),
    (21, 1, 0, 0, 0, 0),
    (22, 1, 0, 0, 0, 0),
    (23, 1, 0, 0, 0, 0),
    (24, 1, 0, 0, 0, 0),
    (25, 1, 0, 0, 0, 0),
    (26, 1, 0, 0, 0, 0),
    (27, 1, 0, 0, 0, 0),
    (28, 1, 0, 0, 0, 0),
    (29, 1, 0, 0, 0, 0),
    (30, 1, 0, 0, 0, 0),
    (31, 1, 0, 0, 0, 0),
    (32, 1, 0, 0, 0, 0);
