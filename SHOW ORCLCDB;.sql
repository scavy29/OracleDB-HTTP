-- SQL WorkSheet

CREATE TABLE Students (
    Firstname VARCHAR2(50),
    LastName VARCHAR2(50),
    Email VARCHAR2(100) UNIQUE
);


-- Insert the first entry
INSERT INTO Students (Firstname, LastName, Email)
VALUES ('John', 'Doe', 'john.doe@example.com');

-- Insert the second entry
INSERT INTO Students (Firstname, LastName, Email)
VALUES ('Jane', 'Smith', 'jane.smith@example.com');

-- Insert the third entry
INSERT INTO Students (Firstname, LastName, Email)
VALUES ('Emily', 'Johnson', 'emily.johnson@example.com');


SELECT * FROM Students;