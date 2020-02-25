##  Airbnb's image carousel
###### With a revitalised backend!

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

### RESTful API Specification
*CRUD / HTTP*

#### Create / POST

#### Read / GET

1. ``` /api/:id```
a. Returns all listing data at a specified id

#### Update / PUT

1. ``` /api/listing/update ```
a. Updates the title of a listing at a specified id

Provide the following key-value pairs in the request body:

```
	id:[INTEGER]
	title:[STRING]
```

#### Delete / DELETE

