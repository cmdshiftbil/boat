import { NextApiRequest, NextApiResponse } from "next"
// import { Readable } from "stream";
import { MailDataRequired } from "@sendgrid/helpers/classes/mail";
// import crypto from "crypto";
import { sendMail } from "@/lib/email"

// function sha1(data: Buffer, secret: string): string {
//   return crypto.createHmac("sha1", secret).update(data).digest("hex");
// }

// async function getRawBody(readable: Readable): Promise<Buffer> {
//   const chunks = [];
//   for await (const chunk of readable) {
//     chunks.push(typeof chunk === "string" ? Buffer.from(chunk) : chunk);
//   }
//   return Buffer.concat(chunks);
// }

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // const rawBody = await getRawBody(req);
  // const bodySignature = process.env.EMAIL_VERCEL_INTEGRATION_SECRET ? sha1(rawBody, process.env.EMAIL_VERCEL_INTEGRATION_SECRET) : null;

  // if (bodySignature !== req.headers["x-vercel-signature"]) {
  //   console.error("Deploy hook triggered from outside Vercel. x-vercel-signature mismatch", {
  //     bodySignature,
  //     "x-vercel-signature": req.headers["x-vercel-signature"]
  //   });
  //   return res.status(403).send({
  //     code: "invalid_signature",
  //     error: "signature didn't match",
  //   });
  // }


  const body = req.body;
  const branchName = body?.payload?.deployment?.meta?.githubCommitRef;
  const deploymentType = body?.type;

  // Send notification email only for successful deployment to production
  if (
    deploymentType === "deployment.succeeded" &&
    branchName === "main"
  ) {
    const msg: MailDataRequired = {
      to: process.env.DEPLOY_NOTIFICATION_EMAIL_ADDRESS,
      from: process.env.EMAIL_DEFAULT_FROM_EMAIL ?? "it@alpha-nero.com",
      subject: "Alpha Nero Website Deployed",
      html: `<strong>The latest version of the <a href="${process.env.NEXT_PUBLIC_WEBSITE_URL}">Alpha Nero Website</a> just got deployed on ${new Date().toString()}</strong>`,
    }

    await sendMail(msg);
    res.status(200).end();
  } else {
    console.log(`Deploying branch "${branchName}", so skipping sending email for successful deploy`);
    res.status(200).end();
  }
}
