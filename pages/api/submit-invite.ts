import { google } from "googleapis";
import { NextApiRequest, NextApiResponse } from "next";
import sheetInfo from '../../sheet.json'

type SheetForm = {
    refferalName: string,
    refferalEmail: string,
    whoRefferedEmail: string
}

const submitInvite = async (
    req: NextApiRequest,
    res: NextApiResponse
) => {
    if(req.method !== 'POST') {
        return res.status(405).send({message: "Only Post requests are allowed"})
    }

    const body = req.body as SheetForm
    try {
        const auth = new google.auth.GoogleAuth({
            credentials: {
                client_email: sheetInfo.GOOGLE_CLIENT_EMAIL,
                private_key: sheetInfo.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, 'n'),
            },

            scopes: [
                "https://www.googleapis.com/auth/drive",
                "https://www.googleapis.com/auth/drive.file",
                "https://www.googleapis.com/auth/spreadsheets",

            ]
        })

        const sheets = google.sheets({
            auth,
            version: "v4"
        })

        const response: any = await sheets.spreadsheets.values.append({
            spreadsheetId: sheetInfo.INVITE_SHEET_ID,
            range: "A1:C1",
            valueInputOption: "USER_ENTERED",
            requestBody: {
                values: [
                    [body["refferalName"], body["refferalEmail"], body["whoRefferedEmail"]]
                ]
            }
        })

        return res.status(200).json({
            data: response.data
        })
    } catch (e) {
        console.log(e)
        return res.status(500).send({message: 'Something went wrong'})
    }
}

export default submitInvite