##  Groundhog-Day image carousel
> A backend PostgreSQL service stress tested up to 50 million rows with optimized low latency SQL queries

### Requirements

- NodeJS 8 or later
- MySQL 5.7

### Setup:

1. In the root directory:
	a. ```$ npm install```

2. Follow instructions in ```config.example.js``` to create a valid connection to MySQL
3.  Modify the ```"seed"``` script in ```package.json``` to include your MySQL login credentials
4. ```$ npm run seed```
5. ```$npm run react-dev``` and ```$npm run start```

## API Documentation

### GET

1. ``` /api/:id```

Returns all listing data at a specified id

___

### POST

1. ```/api/listing/new```

Creates a new listing in the database, provided a valid request body:
```
	{
    	"title": String,
        "images": Array<{ "url": String, "desc": String } [, ...]>,
    }
```
___
### PUT

1. ``` /api/listing/update ```

Updates the title of a listing, provided a valid request body:

```
	{
		id: Integer
		title: String
	}
```
