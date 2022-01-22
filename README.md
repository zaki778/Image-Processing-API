# Image-Processing-API
The scripts needed to the application :
test : npm run test
build : npm run build
start : npm start

Endpoint : http://localhost:4800/resizeImage/?width=150&height=250&filename=santamonica

In index.ts app.use('/resizeImage', resizeRoute) =>
which means whenever /resizeImage is visited access that specific route.
;
this routes does the job by first going to a middle-ware called "middle" => which is an array of 2 middlewares[validator, checker]

Validator : checks if the image exists if yes proceed to checker by calling next(), else it renders an error message.
Checker : check if the image is already in the cache, if yes no resizing occur and display the image , if no resize then display the image

Then when returning back to the server after finishin with the middle ware, image file is sent to the user.

In folder Utillities there is a method called : resize = > which takes 3 parameters : filename, width and height. 
And do resizing on them using sharp then send the resized image to a folder called resizedImages
