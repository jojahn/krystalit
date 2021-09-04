use serde::{Deserialize, Serialize};
use chrono::{DateTime, Utc};

#[derive(Serialize, Deserialize)]
pub struct Mail {
  #[serde(rename = "messageID")]
  pub message_id: String,
  pub date: DateTime<Utc>,
  pub sender: String,
  pub reciever: String,
  pub subject: String,
  pub folder: String,
  pub body: String
}

pub fn get_sample_mails() -> Vec<Mail> {
  let lorem_ipsum = String::from("Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.");
  let mut sample_mails: Vec<Mail> = Vec::new();
  sample_mails.push(Mail {
    message_id: String::from("20180429-114054033-4711@Localhost"),
    date: Utc::now(),
    sender: String::from("Server@Localhost"),
    reciever: String::from("User@Localhost"),
    subject: String::from("Hello, World!"),
    folder: String::from("Inbox"),
    body: lorem_ipsum.clone()
  });
  sample_mails.push(Mail {
    message_id: String::from("20180429-114054033-4712@Localhost"),
    date: Utc::now(),
    sender: String::from("User@Localhost"),
    reciever: String::from("Server@Localhost"),
    subject: String::from("Hello, Server!"),
    folder: String::from("Sent"),
    body: lorem_ipsum.clone()
  });
  sample_mails.push(Mail {
    message_id: String::from("20180429-114054033-4713@Localhost"),
    date: Utc::now(),
    sender: String::from("Server@Localhost"),
    reciever: String::from("User@Localhost"),
    subject: String::from("Hello, User!"),
    folder: String::from("Inbox"),
    body: lorem_ipsum.clone()
  });
  sample_mails.push(Mail {
    message_id: String::from("20180429-114054033-4714@Localhost"),
    date: Utc::now(),
    sender: String::from("Server@Localhost"),
    reciever: String::from("User@Localhost"),
    subject: String::from("Hello, Universe!"),
    folder: String::from("Inbox"),
    body: lorem_ipsum.clone()
  });
  sample_mails.push(Mail {
    message_id: String::from("20180429-114054033-4715@Localhost"),
    date: Utc::now(),
    sender: String::from("Server@Localhost"),
    reciever: String::from("User@Localhost"),
    subject: String::from("Order#123"),
    folder: String::from("Orders"),
    body: lorem_ipsum.clone()
  });
  return sample_mails;
}
