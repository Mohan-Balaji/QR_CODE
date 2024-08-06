import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from "fs";


inquirer
  .prompt([{
    message:"Type Your URL: ",
    name:"URL"
  }])
  .then((answers) => {
    // Use user feedback for... whatever!!
    const url= answers.URL;
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream('qr_test_image.png'));
    fs.writeFile("URL.txt",url,(err)=>
    {
        if (err) throw err;
        console.log("Successfully Stored URL !!");
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
    
    }
  });
