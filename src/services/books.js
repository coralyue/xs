import { get } from "../utils/request";

export function loadCategories(){
  return get("/api/v1/book_categories");
}

export function loadBooks(id) {
  return get("/api/v1/books?id=" +id);
}

export function loadChapters(id) {
  return get("/api/v1/book_chapters?book="+id);
}
