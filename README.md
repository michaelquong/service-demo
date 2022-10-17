# service-demo
Demo NodeJS Api service for learning

## Prerequisites

**Software Prerequisites**  
- docker (20.+)
- docker-compose-plugin

**Data Prerequisites**  
Requires some starter data. Download the raw CSV file from [GitHub](https://github.com/fivethirtyeight/data/tree/master/classic-rock) 
```
### Manually download via curl from project root dir.

(curl -o $PWD/resources/classic-rock-raw-data.csv https://raw.githubusercontent.com/fivethirtyeight/data/master/classic-rock/classic-rock-raw-data.csv)

### OR via npm command

npm run resources
```
*Note: For v1 of Api endpoints (with csv file as database) codebase will request for `https://raw.githubusercontent.com/...` automatically.  
For v2 of Api endpoints (with postgres db) postgres container requires csv to be available in `resources` directory before starting.*

## Getting started

Starting services via docker compose.
```
### Get data Prereqs
npm run resources

### Start services
docker compose up
```
*Notes: Compose file comes with pgadmin4 for debugging and providing a graphical interface for postgres. Not required and can be commented out.  
The image of Demo service is not prebuilt. Expect building time before Demo service container is brought up.*

## Data

| Table | notes |
| ---   | ---   |
| Raw_data | `UNIQUE_ID` Seems to be an appropriate pkey per description|
| Raw_data | `COMBINDED` could be used as fkey to Table(song-list) as per description that it is most unique|

**CSV to Postgres Table Mappings**  
When using postgres DB, `Table(station_songs)` is created and `classic-rock-raw-data.csv` data is copied into it.

| Csv Header | Posgres Table Column |
| ---          | ---            |
| SONG RAW     | song_raw       |
| Song Clean   | song_clean     |
| ARTIST RAW   | artist_raw     |
| ARTIST CLEAN | artist_clean   |
| CALLSIGN     | callsign       |
| TIME         | unix_timestamp |
| UNIQUE_ID    | id             |
| COMBINED     | combined       |
| First?       | _first         |

*Notes: `/sql/init.sql` is responsible in copying the contents of the csv file starter data into postgres on start.*


## Requirements

**Functional:**
- GET / with no parameters will always return a list of resources (of potential data if any)
- GET / with `path param` will return a resource exactly matching given `path param`.
- GET / with `query param` will return a filtered set of resources exactly matching given `query param`.
    - Currently, only supporting query params are `artist` and `station` which will return resources exactly matching `artist name` OR `station call sign`.

**Non Functional:**
- When given a `path param` that doesnt exist, response will be 404
- When given a `query param` that doesnt exist, response will be empty resource
    - AND querying currently is not supported.

**Testing:**
- Chose to test with mocha
- `test/` directory at project root level will be home to simple 
integration/e2e tests
- Unit tests will follow source files in `src/` directory postfixed with a `.test.js`. Example: `src/index.test.js` for unit testing `src/index.js`.

