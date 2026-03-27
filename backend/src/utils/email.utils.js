import nodemailer from "nodemailer";

export const emailSend = async () => {
  const transpoter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.email,
      pass: process.env.email_password,
    },
  });

  const mailOption = {
    from: process.env.email,
    to: "dwivedid382@gmail.com",
    subject: "email varification code to vearify the email",
    text: "242567 this your varification code to varifiy your email",
  };

  const sent = await transpoter.sendMail(mailOption, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log(info);
    }
  });
  console.log(sent);
};
