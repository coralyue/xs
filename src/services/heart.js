import { get } from "../utils/request"

export function loadFavs() {
  return get("/api/v1/favs")
}

export function addFavs(id) {
  return get("/api/v1/favs/:"+id )
}