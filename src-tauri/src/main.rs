#![cfg_attr(
  all(not(debug_assertions), target_os = "windows"),
  windows_subsystem = "windows"
)]

use chrono::{DateTime, Duration, Utc};
mod mail;

fn main() {
  tauri::Builder::default()
    .invoke_handler(tauri::generate_handler![greet])
    .invoke_handler(tauri::generate_handler![load_mails])
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}

#[tauri::command]
fn greet() {
  println!("Hello, World!");
}

#[tauri::command]
fn load_mails() -> mail::Mail {
  let m = mail::Mail {
    body: String::from("abc"),
    subject: String::from("abc"),
    sender: String::from("abc"),
    message_id: String::from("abc"),
    folder: String::from("abc"),
    reciever: String::from("abc")
  };
  return m;
}