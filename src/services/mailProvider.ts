import { Mail } from "../model/Mail";
import { invoke } from "@tauri-apps/api/tauri";
import { sampleMails } from "./sampleMails";

interface MailFromTauri extends Omit<Mail, "date"> {
  date: string;
}

export async function getMails(): Promise<Mail[]> {
  try {
    const mails: MailFromTauri[] = await invoke<MailFromTauri[]>("load_mails");
    return mails.map((mail) => ({ ...mail, date: new Date(mail.date) }));
  } catch(e) {
    console.error("Failed to get mails from desktop api: ", e);
    return sampleMails;
  }
}

export function sendMail(mail: Partial<Mail>) {
  throw "not implemented";
}