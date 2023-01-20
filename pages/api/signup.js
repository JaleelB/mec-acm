import {google} from "googleapis";

export default async function signup(req, res){

  const {name, email, year, major, date} = req.body;
  
  //reimplemnt forms with react hook forms and chakra ui
  //add success toast message when signed up

  try{
    //preparing auth
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
        // replaces /n with actual '\n' in file. 
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '/n')
      },
      scopes: [
        'https://www.googleapis.com/auth/drive',
        'https://www.googleapis.com/auth/drive.file',
        'https://www.googleapis.com/auth/spreadsheets',
      ]
    });

    const sheets = google.sheets({
      auth, 
      version: 'v4'
    })

    const response =  await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: 'A1:E1',
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [
          [name, email, year, major, date]
        ]
      }
    })

    return res.status(201).send({success: true});
  }
  catch(error){
    return res.status(500).send({message: error.message ?? 'Something went wrong'})
  }

}