import { MailDataRequired } from "@sendgrid/helpers/classes/mail";
import sgMail from "@sendgrid/mail";

if (process.env.SENDGRID_API_KEY) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
} else {
  console.error(
    "SENDGRID_API_KEY environement variable not set",
  );
}

const isMailAllowed = () => process.env.NODE_ENV !== "development" && process.env.EMAIL_ENABLED;

export const sendMail = async (
  msg: MailDataRequired,
) => {
  if (isMailAllowed()) {

    // Early Exit on Failure
    if (!msg.to || !process.env.SENDGRID_API_KEY || !msg.from) {
      console.error("Emailing not configured, cannot send emails.");
      return;
    }

    sgMail.send(msg)
      .then((response) => {
        console.log("sendMail", "Email sent", { msg, response })
      })
      .catch((error) => {
        console.error("sendMail", "Email failed to send", { error })
      });
  } else {
    console.info("Emails disabled");
  }
};
