### Sample Technical Test of React Photo Album App - By Chen Frederick

#### To Run :

- `npm i`
- `npm run start`
- visit http://localhost:3000/

#### Note :

- Feel free to drop any feedback through LinkedIn - Chen Frederick =)

#### Tools / Dependencies Used :

- React & it's libraries
- react-router-dom
- node-sass
- react-toastify
- axios
- local storage

---

### Sample Technical Test Descriptions

#### PHOTO ALBUM WEBSITE

##### Duration:
4 days

##### Details:
Create Photo Album single page app using any library of your choice (We prefer React and
Typescript).

##### API endpoints:
https://jsonplaceholder.typicode.com/albums
https://jsonplaceholder.typicode.com/users
https://jsonplaceholder.typicode.com/photos

##### Pages:
MAIN PAGE
- Show a grid of albums, this grid should look good in all devices, every album should
show its Album name with a link to the album page and the user page of the user who
created the album
- Filter Albums by Album Name
- Filter Albums by User name

ALBUM PAGE
- Show photos that belong to the album
- User can save a photo as favorite, the favorite list should be persistent after page changes.
- Add a comment to photos, the comment should be persistent after page changes.
- Show user name and email, link to the user page

USER PAGE
- Show full user information
- Show user albums

MY FAVORITE PHOTOS
- Show favorite photos and what album it belongs to

##### Extra Notes:
- Pages should be responsive
- Handle network errors
- Use the URL as the single source of truth for routing
- Album filtering can be done on the client-side
- Simulate the favorite and comment features on the client-side application, there is no
need to create backend service for this
- Submit the source code only, no need to submit with the build result, as long the
instruction on how to run it is clear.
