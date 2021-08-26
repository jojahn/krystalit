export interface Mail {
  date: Date;
  body: string;
  subject: string;
  sender: string;
  messageID: string;
  folder: string;
  reciever: string;
}