use serde::{Deserialize, Serialize};

#[derive(Serialize, Deserialize)]
pub struct Mail {
  pub body: String,
  pub subject: String,
  pub sender: String,
  #[serde(rename = "messageID")]
  pub message_id: String,
  pub folder: String,
  pub reciever: String
}

pub fn get_sample_mails() -> Mail {
  return Mail {
    body: String::from("abc"),
    subject: String::from("abc"),
    sender: String::from("abc"),
    message_id: String::from("abc"),
    folder: String::from("abc"),
    reciever: String::from("abc")
  };
}