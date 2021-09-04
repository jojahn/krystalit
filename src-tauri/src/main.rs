#![cfg_attr(
  all(not(debug_assertions), target_os = "windows"),
  windows_subsystem = "windows"
)]

use chrono::{DateTime, Duration, Utc};
mod mail;

fn main() {
  tauri::Builder::default()
    .invoke_handler(tauri::generate_handler![load_mails])
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}

#[tauri::command]
fn greet() {
  println!("Hello, World!");
}

#[tauri::command]
fn load_mails() -> Vec<mail::Mail> {
  let m = mail::get_sample_mails();
  return m;
}