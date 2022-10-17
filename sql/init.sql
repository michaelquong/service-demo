-- Change to demo databse to prep for table creation
\c demo

-- Create table based on csv file headers and description of each column available in readme from Github.com
CREATE TABLE IF NOT EXISTS station_songs (
   song_raw varchar(100),
   song_clean varchar(100),
   artist_raw varchar(50),
   artist_clean varchar(50),
   callsign varchar(5),
   unix_timestamp bigint,
   id varchar(8) NOT NULL UNIQUE,
   combined varchar(150),
   _first smallint,
   CONSTRAINT unique_id PRIMARY KEY (id)
);

-- Load CSV file data from resources folder
COPY station_songs(song_raw, song_clean, artist_raw, artist_clean, callsign, unix_timestamp, id, combined, _first)
FROM '/tmp/classic-rock-raw-data.csv'
DELIMITER ','
CSV HEADER;