use actix_cors::Cors;
use actix_web::{get, web, App, HttpResponse, HttpServer, Responder};
use serde::Serialize;

#[derive(Serialize)]
struct StatusResponse {
    status: String,
    message: String,
}

#[get("/api/status")]
async fn status() -> impl Responder {
    HttpResponse::Ok().json(StatusResponse {
        status: "success".to_string(),
        message: "FizzWand API is running".to_string(),
    })
}

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    println!("Starting FizzWand backend on http://127.0.0.1:8081");
    HttpServer::new(|| {
        let cors = Cors::permissive();

        App::new()
            .wrap(cors)
            .service(status)
            // If you want to serve the frontend statically from the backend later, you can add it here
            // .service(actix_files::Files::new("/", "./public").index_file("index.html"))
    })
    .bind(("127.0.0.1", 8081))?
    .run()
    .await
}
