
import axios from "axios";

export default async (req, res) => {
  const MAILCHIMP_ID = process.env.MAILCHIMP_ID;
  const MAILCHIMP_KEY = process.env.MAILCHIMP_KEY;
  const { email } = req.body;

  if (!email || !email.length) {
    return res.status(400).json({
      error: "Forgot to add your email???",
    });
  }

  let data = {
    email_address: email,
    status: "subscribed",
    merge_fields: {},
  };

  const postData = JSON.stringify(data);
  console.log(postData);

  // Saving subscriber
  axios({
    url: `https://us21.api.mailchimp.com/3.0/lists/${MAILCHIMP_ID}/members`,
    method: "POST",
    headers: {
      Authorization: `auth ${MAILCHIMP_KEY}`,
      "Content-Type": "application/json",
    },
    data: postData,
  })
    .then(function (response) {
      return res.json({ success: true, message: "Subscribed" });
    })
    .catch(function (error) {
      console.log(error);
      return res.status(400).json({
        error:
          "Something went wrong... send me an email at example@gmail.com and I'll add you to the list of subscribers",
      });
    });
};
